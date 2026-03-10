window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.implementacion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>💻</span>
        <span>Guía de Implementación Paso a Paso</span>
    </div>
    <p>
        Esta sección proporciona instrucciones detalladas para desplegar el sistema de 
        monitorización. Completa cada paso y documenta tu progreso en el diario de implementación.
    </p>
</div>

<h3>6.1. Preparación del Entorno</h3>

<h4>Paso 1.1: Instalación del Sistema Operativo</h4>
<div class="bg-slate-50 rounded-lg p-6 my-6 border border-slate-200">
    <h5 class="font-bold text-slate-700 mb-3">Servidor Zabbix (10.10.10.50)</h5>
    <ol class="list-decimal list-inside space-y-3 text-slate-700">
        <li>Descargar Ubuntu Server 22.04 LTS desde <a href="https://ubuntu.com/download/server" class="text-blue-600 underline" target="_blank">ubuntu.com</a></li>
        <li>Crear USB de instalación con Rufus o balenaEtcher</li>
        <li>Instalar en el servidor secundario con las siguientes opciones:
            <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Hostname: <code>zabbix.iesperenxisa.local</code></li>
                <li>IP estática: <code>10.10.10.50/24</code></li>
                <li>Gateway: <code>10.10.10.1</code></li>
                <li>DNS: <code>10.10.10.10</code> (DNS interno del centro)</li>
                <li>Usuario: <code>zabbixadmin</code> (sin usar root directamente)</li>
                <li>Particionado: 50GB /, 8GB swap, resto /var para datos</li>
            </ul>
        </li>
        <li>Actualizar sistema: <code>sudo apt update && sudo apt upgrade -y</code></li>
        <li>Instalar herramientas básicas: <code>sudo apt install -y vim git curl wget htop net-tools</code></li>
    </ol>
</div>

<div class="bg-slate-50 rounded-lg p-6 my-6 border border-slate-200">
    <h5 class="font-bold text-slate-700 mb-3">Servidor PostgreSQL (10.10.10.100)</h5>
    <ol class="list-decimal list-inside space-y-3 text-slate-700">
        <li>Usar el servidor principal existente del centro</li>
        <li>Asignar IP estática: <code>10.10.10.100/24</code></li>
        <li>Asegurar conectividad desde el servidor Zabbix:
            <div class="bg-slate-900 rounded p-3 mt-2 overflow-x-auto">
                <pre class="text-sm text-green-400"><code># Test de conectividad desde zabbix.iesperenxisa.local
ping 10.10.10.100
nc -zv 10.10.10.100 5432</code></pre>
            </div>
        </li>
    </ol>
</div>

<h3>6.2. Instalación de PostgreSQL</h3>

<h4>Paso 2.1: Instalación y Configuración</h4>
<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <pre class="text-sm text-green-400"><code># En el servidor de base de datos (10.10.10.100)

# 1. Añadir repositorio oficial de PostgreSQL
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

# 2. Instalar PostgreSQL 15
sudo apt update
sudo apt install -y postgresql-15 postgresql-contrib-15

# 3. Configurar listen_addresses en postgresql.conf
sudo nano /etc/postgresql/15/main/postgresql.conf
# Modificar: listen_addresses = '10.10.10.100'

# 4. Configurar acceso en pg_hba.conf
sudo nano /etc/postgresql/15/main/pg_hba.conf
# Añadir: host    zabbix    zabbix    10.10.10.50/32    scram-sha-256

# 5. Reiniciar PostgreSQL
sudo systemctl restart postgresql
sudo systemctl enable postgresql</code></pre>
</div>

<h4>Paso 2.2: Creación de Base de Datos y Usuario</h4>
<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <pre class="text-sm text-green-400"><code># Conectarse a PostgreSQL como usuario postgres
sudo -i -u postgres
psql

# Dentro del prompt de PostgreSQL:
CREATE USER zabbix WITH PASSWORD 'Zabbix_S3gur0_2025!' ENCRYPTED;
CREATE DATABASE zabbix OWNER zabbix ENCODING 'UTF8' LC_COLLATE 'es_ES.UTF-8' LC_CTYPE 'es_ES.UTF-8';

# Conceder privilegios
\\c zabbix
GRANT ALL PRIVILEGES ON DATABASE zabbix TO zabbix;

# Configurar parámetros optimizados para Zabbix
ALTER SYSTEM SET shared_buffers = '16GB';
ALTER SYSTEM SET work_mem = '256MB';
ALTER SYSTEM SET maintenance_work_mem = '2GB';
ALTER SYSTEM SET effective_cache_size = '48GB';
ALTER SYSTEM SET max_connections = 200;

# Recargar configuración
SELECT pg_reload_conf();
\\q
exit</code></pre>
</div>

<h3>6.3. Instalación de Zabbix Server</h3>

<h4>Paso 3.1: Instalación de Paquetes</h4>
<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <pre class="text-sm text-green-400"><code># En el servidor Zabbix (10.10.10.50)

# 1. Descargar e instalar el repositorio de Zabbix
wget https://repo.zabbix.com/zabbix/7.0/ubuntu/pool/main/z/zabbix-release/zabbix-release_7.0-1+ubuntu22.04_all.deb
sudo dpkg -i zabbix-release_7.0-1+ubuntu22.04_all.deb
sudo apt update

# 2. Instalar Zabbix Server con PostgreSQL
sudo apt install -y zabbix-server-pgsql zabbix-frontend-php zabbix-apache-conf zabbix-sql-scripts zabbix-selinux-policy zabbix-agent2

# 3. Instalar extensiones PHP necesarias
sudo apt install -y php8.1-pgsql php8.1-gd php8.1-bcmath php8.1-mbstring php8.1-xml</code></pre>
</div>

<h4>Paso 3.2: Importar Esquema de Base de Datos</h4>
<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <pre class="text-sm text-green-400"><code># Importar esquema inicial (puede tardar 5-10 minutos)
zcat /usr/share/zabbix-sql-scripts/postgresql/server.sql.gz | sudo -u zabbix psql -h 10.10.10.100 -U zabbix zabbix

# Verificar que las tablas se crearon correctamente
psql -h 10.10.10.100 -U zabbix -d zabbix -c "\\dt" | head -20</code></pre>
</div>

<h4>Paso 3.3: Configurar Zabbix Server</h4>
<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <pre class="text-sm text-green-400"><code># Editar configuración del servidor
sudo nano /etc/zabbix/zabbix_server.conf

# Modificar las siguientes líneas:
DBHost=10.10.10.100
DBName=zabbix
DBUser=zabbix
DBPassword=Zabbix_S3gur0_2025!

# Ajustar para 400 hosts
StartPollers=10
StartTrappers=2
StartPingers=2
StartAlerters=4
HousekeepingFrequency=1
MaxHousekeeperDelete=500

# Guardar y salir (Ctrl+X, Y, Enter)</code></pre>
</div>

<h4>Paso 3.4: Configurar PHP Frontend</h4>
<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <pre class="text-sm text-green-400"><code># Editar configuración PHP de Zabbix
sudo nano /etc/zabbix/apache.conf

# Descomentar y ajustar:
php_value date.timezone Europe/Madrid
php_value max_execution_time 300
php_value memory_limit 512M
php_value post_max_size 32M
php_value upload_max_filesize 16M
php_value max_input_time 300
php_value always_populate_raw_post_data -1
php_value session.save_path "/var/lib/php/session"

# Reiniciar Apache
sudo systemctl restart apache2
sudo systemctl enable apache2</code></pre>
</div>

<h4>Paso 3.5: Iniciar Servicios Zabbix</h4>
<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <pre class="text-sm text-green-400"><code># Iniciar servidor Zabbix
sudo systemctl start zabbix-server
sudo systemctl enable zabbix-server

# Verificar estado
sudo systemctl status zabbix-server

# Ver logs en tiempo real
sudo tail -f /var/log/zabbix/zabbix_server.log</code></pre>
</div>

<h3>6.4. Configuración del Frontend Web</h3>

<h4>Paso 4.1: Acceso Inicial</h4>
<ol class="list-decimal list-inside space-y-3 text-slate-700 my-6">
    <li>Abrir navegador y acceder a: <code>https://10.10.10.50/zabbix</code></li>
    <li>Completar el asistente de instalación web:
        <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
            <li><strong>Paso 1:</strong> Verificar requisitos (todos deben estar en OK)</li>
            <li><strong>Paso 2:</strong> Configuración de BD:
                <ul class="list-circle list-inside ml-6 mt-1">
                    <li>Database type: PostgreSQL</li>
                    <li>Database host: 10.10.10.100</li>
                    <li>Database port: 5432</li>
                    <li>Database name: zabbix</li>
                    <li>User: zabbix</li>
                    <li>Password: Zabbix_S3gur0_2025!</li>
                </ul>
            </li>
            <li><strong>Paso 3:</strong> Configuración del servidor:
                <ul class="list-circle list-inside ml-6 mt-1">
                    <li>Zabbix server host: 127.0.0.1</li>
                    <li>Zabbix server port: 10051</li>
                </ul>
            </li>
            <li><strong>Paso 4:</strong> Pre-validación (debe mostrar "Success")</li>
            <li><strong>Paso 5:</strong> Completar:
                <ul class="list-circle list-inside ml-6 mt-1">
                    <li>Name: IES Serra Perenxisa NOC</li>
                    <li>Default timezone: Europe/Madrid</li>
                    <li>Theme: Dark</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Login con credenciales por defecto:
        <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>Username: <code>Admin</code> (mayúscula)</li>
            <li>Password: <code>zabbix</code></li>
        </ul>
    </li>
</ol>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Importante: Cambiar Contraseña por Defecto</span>
    </div>
    <p>
        Inmediatamente después del primer login, cambia la contraseña del usuario Admin:
    </p>
    <ol class="list-decimal list-inside space-y-2 mt-3">
        <li>Click en avatar (arriba derecha) → Users</li>
        <li>Click en "Admin"</li>
        <li>Pestaña "Password"</li>
        <li>Establecer nueva contraseña segura (mínimo 12 caracteres, mayúsculas, números, símbolos)</li>
        <li>Guardar con "Update"</li>
    </ol>
</div>

<h3>6.5. Despliegue de Agentes</h3>

<h4>Paso 5.1: Crear Plantilla de Despliegue para Windows</h4>
<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <pre class="text-sm text-green-400"><code># Script de instalación silenciosa para Windows (install-agent-windows.bat)
@echo off
set ZABBIX_SERVER=10.10.10.50
set AGENT_PSK=ZabbixPSK_2025_SecretKey_12345

# Descargar agente
curl -L -o zabbix_agent2.msi https://cdn.zabbix.com/zabbix/binaries/stable/7.0/7.0.0/zabbix_agent2-7.0.0-windows-amd64-openssl.msi

# Instalar silenciosamente
msiexec /i zabbix_agent2.msi /qn ^
    SERVER=%ZABBIX_SERVER% ^
    SERVERACTIVE=%ZABBIX_SERVER% ^
    HOSTNAME=%COMPUTERNAME% ^
    PSK_IDENTITY=ZabbixAgent2025 ^
    PSK_SECRET=%AGENT_PSK% ^
    ENABLEREMOTECOMMANDS=1

# Abrir firewall
netsh advfirewall firewall add rule name="Zabbix Agent" dir=in action=allow protocol=TCP localport=10050

echo Instalación completada. Reiniciando servicio...
net stop ZabbixAgent2
net start ZabbixAgent2</code></pre>
</div>

<h4>Paso 5.2: Despliegue Masivo con GPO (Windows Domain)</h4>
<ol class="list-decimal list-inside space-y-3 text-slate-700 my-6">
    <li>En el controlador de dominio, abrir "Group Policy Management"</li>
    <li>Crear nueva GPO: "Zabbix Agent Deployment"</li>
    <li>Editar GPO: Computer Configuration → Policies → Software Settings → Software installation</li>
    <li>Nuevo → Package → Seleccionar el MSI del agente en ruta de red</li>
    <li>Asignado → Aceptar</li>
    <li>Vincular GPO a la OU de equipos del centro</li>
    <li>Forzar actualización: <code>gpupdate /force</code> en equipos objetivo</li>
</ol>

<h4>Paso 5.3: Instalación en Linux</h4>
<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <pre class="text-sm text-green-400"><code># Script para Ubuntu/Debian (install-agent-linux.sh)
#!/bin/bash

ZABBIX_SERVER="10.10.10.50"
HOSTNAME=$(hostname -f)
PSK_IDENTITY="ZabbixAgent2025"
PSK_SECRET="ZabbixPSK_2025_SecretKey_12345"

# Añadir repositorio Zabbix
wget https://repo.zabbix.com/zabbix/7.0/ubuntu/pool/main/z/zabbix-release/zabbix-release_7.0-1+ubuntu22.04_all.deb
dpkg -i zabbix-release_7.0-1+ubuntu22.04_all.deb
apt update

# Instalar agente
apt install -y zabbix-agent2 zabbix-agent2-plugin-*

# Configurar agente
cat > /etc/zabbix/zabbix_agent2.conf << EOF
Server=${ZABBIX_SERVER}
ServerActive=${ZABBIX_SERVER}
Hostname=${HOSTNAME}
PidFile=/var/run/zabbix/zabbix_agent2.pid
LogFile=/var/log/zabbix/zabbix_agent2.log
LogFileSize=10
EnableRemoteCommands=1
TLSConnect=psk
TLSAccept=psk
TLSPSKIdentity=${PSK_IDENTITY}
TLSPSKSecret=${PSK_SECRET}
EOF

# Reiniciar agente
systemctl restart zabbix-agent2
systemctl enable zabbix-agent2

echo "Agente instalado y configurado en ${HOSTNAME}"</code></pre>
</div>

<h3>6.6. Configuración de Hosts y Plantillas</h3>

<h4>Paso 6.1: Crear Hosts en Zabbix</h4>
<ol class="list-decimal list-inside space-y-3 text-slate-700 my-6">
    <li>En el frontend de Zabbix, ir a: Data collection → Hosts</li>
    <li>Click en "Create host" (arriba derecha)</li>
    <li>Completar formulario:
        <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
            <li><strong>Host name:</strong> Nombre FQDN del equipo (ej: AULA1-PC01.iesperenxisa.local)</li>
            <li><strong>Visible name:</strong> Nombre amigable (ej: Aula 1 - PC 01)</li>
            <li><strong>Grupos:</strong> Seleccionar o crear "Informática - Aulas"</li>
            <li><strong>Agent interfaces:</strong> DNS name: hostname, DNS port: 10050</li>
        </ul>
    </li>
    <li>Pestaña "Templates":
        <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>Seleccionar: "Linux by Zabbix agent 2" o "Windows by Zabbix agent 2"</li>
        </ul>
    </li>
    <li>Pestaña "Macros":
        <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>Añadir: {$SYSTEM.UTILIZATION.CRIT} = 90</li>
            <li>Añadir: {$VMemory_UTILIZATION.CRIT} = 95</li>
        </ul>
    </li>
    <li>Pestaña "Encryption":
        <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>Connections: PSK</li>
            <li>PSK identity: ZabbixAgent2025</li>
            <li>PSK: ZabbixPSK_2025_SecretKey_12345</li>
        </ul>
    </li>
    <li>Click en "Add"</li>
</ol>

<h4>Paso 6.2: Importar Plantillas Personalizadas</h4>
<div class="callout callout-info">
    <div class="callout-title">
        <span>📥</span>
        <span>Plantillas Recomendadas</span>
    </div>
    <p>
        Descarga e importa las siguientes plantillas desde <a href="https://share.zabbix.com" class="text-blue-600 underline" target="_blank">share.zabbix.com</a>:
    </p>
    <ul class="list-disc list-inside space-y-2 mt-3">
        <li><strong>Template OS Windows by Zabbix agent 2</strong> (oficial)</li>
        <li><strong>Template OS Linux by Zabbix agent 2</strong> (oficial)</li>
        <li><strong>Template App Microsoft Office</strong> (detección de Office instalado)</li>
        <li><strong>Template Hardware General</strong> (información de hardware)</li>
    </ul>
</div>

<h3>6.7. Configuración de Alertas y Notificaciones</h3>

<h4>Paso 7.1: Configurar Media Types</h4>
<ol class="list-decimal list-inside space-y-3 text-slate-700 my-6">
    <li>Ir a: Alerting → Media types</li>
    <li>Click en "Email" (o crear nuevo)</li>
    <li>Configurar servidor SMTP del centro:
        <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>SMTP server: smtp.iesperenxisa.local</li>
            <li>SMTP port: 587</li>
            <li>SMTP helo: iesperenxisa.local</li>
            <li>SMTP email: zabbix@iesperenxisa.local</li>
            <li>Usar autenticación si es requerida</li>
        </ul>
    </li>
</ol>

<h4>Paso 7.2: Configurar Telegram (Opcional pero Recomendado)</h4>
<ol class="list-decimal list-inside space-y-3 text-slate-700 my-6">
    <li>Crear bot en Telegram con @BotFather:
        <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>Abrir Telegram, buscar @BotFather</li>
            <li>Enviar: <code>/newbot</code></li>
            <li>Seguir instrucciones, obtener TOKEN</li>
        </ul>
    </li>
    <li>Crear grupo para alertas y añadir el bot</li>
    <li>Obtener CHAT_ID del grupo (usando @getids bot)</li>
    <li>En Zabbix: Alerting → Media types → Create media type:
        <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>Name: Telegram</li>
            <li>Type: Webhook</li>
            <li>URL: <code>https://api.telegram.org/bot&lt;TOKEN&gt;/sendMessage</code></li>
            <li>HTTP method: POST</li>
            <li>Content type: application/json</li>
            <li>Parameters:
                <pre class="bg-slate-900 rounded p-2 mt-1 text-xs text-green-400">chat_id: {$TELEGRAM.CHAT_ID}
text: {MESSAGE}
parse_mode: html</pre>
            </li>
        </ul>
    </li>
</ol>

<h4>Paso 7.3: Configurar Acciones de Alerta</h4>
<ol class="list-decimal list-inside space-y-3 text-slate-700 my-6">
    <li>Ir a: Alerting → Actions → Trigger actions</li>
    <li>Crear acción "Notificación Crítica":
        <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
            <li><strong>Name:</strong> Notificar alertas críticas</li>
            <li><strong>Conditions:</strong> Severity = Disaster OR Severity = High</li>
            <li><strong>Operations:</strong>
                <ul class="list-circle list-inside ml-6 mt-1">
                    <li>Send message to: Admin (todos los medios)</li>
                    <li>Send only to: Email, Telegram</li>
                    <li>Send every: 5m (repetir cada 5 minutos si no se ack)</li>
                </ul>
            </li>
        </ul>
    </li>
</ol>

<h3>6.8. Creación de Dashboards</h3>

<h4>Paso 8.1: Dashboard Principal NOC</h4>
<ol class="list-decimal list-inside space-y-3 text-slate-700 my-6">
    <li>Ir a: Dashboards → Create dashboard</li>
    <li>Nombre: "NOC - Vista Principal"</li>
    <li>Añadir widgets:
        <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
            <li><strong>System status:</strong> Contadores de hosts up/down</li>
            <li><strong>Hosts status:</strong> Lista de hosts con problemas</li>
            <li><strong>Problems:</strong> Últimas 20 alertas activas</li>
            <li><strong>Graph:</strong> CPU/RAM promedio del parque</li>
        </ul>
    </li>
    <li>Configurar auto-refresh: 30 segundos</li>
    <li>Guardar dashboard</li>
</ol>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span>
        <span>Checklist de Implementación</span>
    </div>
    <p>Marca las tareas completadas:</p>
    <ul class="list-disc list-inside space-y-2 mt-3">
        <li><input type="checkbox" class="mr-2"> Servidor Ubuntu instalado y actualizado</li>
        <li><input type="checkbox" class="mr-2"> PostgreSQL instalado y configurado</li>
        <li><input type="checkbox" class="mr-2"> Zabbix Server instalado y en ejecución</li>
        <li><input type="checkbox" class="mr-2"> Frontend web accesible</li>
        <li><input type="checkbox" class="mr-2"> Contraseña de Admin cambiada</li>
        <li><input type="checkbox" class="mr-2"> Agentes desplegados en equipos piloto (5+)</li>
        <li><input type="checkbox" class="mr-2"> Alertas configuradas y probadas</li>
        <li><input type="checkbox" class="mr-2"> Dashboard principal creado</li>
    </ul>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span>
        <span>Diario de Implementación</span>
    </div>
    <p>
        Documenta en tu diario de implementación:
    </p>
    <ul class="list-disc list-inside space-y-2 mt-3">
        <li>Tiempo real dedicado a cada paso.</li>
        <li>Incidencias encontradas y cómo las resolviste.</li>
        <li>Capturas de pantalla de cada fase completada.</li>
        <li>Comandos exactos que funcionaron en tu entorno.</li>
    </ul>
</div>
`;
