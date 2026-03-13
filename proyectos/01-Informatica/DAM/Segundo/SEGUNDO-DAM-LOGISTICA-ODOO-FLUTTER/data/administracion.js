window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['administracion'] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>⚙️</span>
        <span>Administración del Sistema</span>
    </div>
    <p>Manual de explotación para el mantenimiento y operación del sistema en entorno productivo.</p>
</div>

<h2>7.1. Arquitectura de Despliegue</h2>

<h3>🖥️ Esquema de Infraestructura</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
┌─────────────────────────────────────────────────────────────────────────┐
│                    INFRAESTRUCTURA DE PRODUCCIÓN                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐     │
│  │                         INTERNET                                │     │
│  └────────────────────────────────────────────────────────────────┘     │
│                            │                                             │
│                            ▼                                             │
│  ┌────────────────────────────────────────────────────────────────┐     │
│  │                      FIREWALL / SSL                            │     │
│  │                   (Puerto 443 HTTPS)                           │     │
│  └────────────────────────────────────────────────────────────────┘     │
│                            │                                             │
│              ┌─────────────┼─────────────┐                              │
│              ▼             ▼             ▼                              │
│     ┌────────────┐ ┌────────────┐ ┌────────────┐                       │
│     │   Odoo     │ │  Node.js   │ │  Firebase  │                       │
│     │   Server   │ │  API       │ │  Cloud     │                       │
│     │   :8069    │ │  :3000     │ │  Messaging │                       │
│     └─────┬──────┘ └────────────┘ └────────────┘                       │
│           │              │                                             │
│           └──────┬───────┘                                             │
│                  ▼                                                     │
│     ┌────────────────────────┐                                         │
│     │   PostgreSQL 14        │                                         │
│     │   (Base de Datos)      │                                         │
│     │   Puerto: 5432         │                                         │
│     └────────────────────────┘                                         │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
</pre>
</div>

<h3>📋 Requisitos de Servidor</h3>

<table class="my-6">
<thead>
<tr>
<th>Servidor</th>
<th>CPU</th>
<th>RAM</th>
<th>Disco</th>
<th>SO</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Odoo + PostgreSQL</strong></td>
<td>4 núcleos</td>
<td>8 GB</td>
<td>100 GB SSD</td>
<td>Ubuntu 22.04 LTS</td>
</tr>
<tr>
<td><strong>Node.js API</strong></td>
<td>2 núcleos</td>
<td>4 GB</td>
<td>20 GB SSD</td>
<td>Ubuntu 22.04 LTS</td>
</tr>
<tr>
<td><strong>Backup</strong></td>
<td>-</td>
<td>-</td>
<td>500 GB</td>
<td>-</td>
</tr>
</tbody>
</table>

<hr class="my-8">

<h2>7.2. Instalación y Configuración</h2>

<h3>📦 Instalación de Odoo</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
# 1. Actualizar sistema
sudo apt update && sudo apt upgrade -y

# 2. Instalar dependencias
sudo apt install -y python3-pip python3-dev python3-venv \\
    libxml2-dev libxslt1-dev zlib1g-dev libjpeg-dev \\
    libpq-dev libffi-dev libssl-dev

# 3. Instalar PostgreSQL
sudo apt install -y postgresql postgresql-contrib

# 4. Crear usuario de base de datos
sudo -u postgres createuser -s odoo
sudo -u postgres createuser logiscan

# 5. Crear base de datos
sudo -u postgres createdb -O logiscan logiscan_prod

# 6. Instalar Odoo
pip3 install odoo==16.0
</pre>
</div>

<h3>📄 Configuración odoo.conf</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
[options]
admin_passwd = admin_password_seguro
db_host = localhost
db_port = 5432
db_user = logiscan
db_password = password_seguro
db_name = logiscan_prod

http_port = 8069
http_interface = 127.0.0.1

logfile = /var/log/odoo/odoo.log
log_level = info

data_dir = /var/lib/odoo
addons_path = /usr/lib/python3/dist-packages/odoo/addons,/opt/odoo/custom-addons

workers = 4
max_cron_threads = 1
limit_memory_hard = 2684354560
limit_time_cpu = 600
limit_time_real = 1200
</pre>
</div>

<h3>🚀 Instalación del Módulo LogiScan</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
# 1. Copiar módulo a directorio de addons
sudo cp -r /ruta/al/proyecto/odoo-module/logiscan /opt/odoo/custom-addons/

# 2. Establecer permisos
sudo chown -R odoo:odoo /opt/odoo/custom-addons/logiscan
sudo chmod -R 755 /opt/odoo/custom-addons/logiscan

# 3. Reiniciar Odoo
sudo systemctl restart odoo

# 4. Actualizar lista de aplicaciones
# Ir a: Ajustes → Aplicaciones → Actualizar lista

# 5. Instalar módulo LogiScan
# Buscar "LogiScan" y clicar "Instalar"
</pre>
</div>

<h3>📦 Instalación del Middleware Node.js</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
# 1. Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# 2. Crear directorio de aplicación
sudo mkdir -p /opt/logiscan/middleware
sudo chown $USER:$USER /opt/logiscan/middleware

# 3. Copiar archivos e instalar dependencias
cp -r /ruta/al/proyecto/middleware/* /opt/logiscan/middleware/
cd /opt/logiscan/middleware
npm install --production

# 4. Configurar variables de entorno
cp .env.example .env
nano .env
</pre>
</div>

<h3>📄 Archivo .env del Middleware</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
# Configuración del servidor
PORT=3000
NODE_ENV=production

# Configuración de Odoo
ODOO_HOST=localhost
ODOO_PORT=8069
ODOO_DB=logiscan_prod
ODOO_USER=logiscan
ODOO_PASSWORD=password_seguro

# JWT Secret
JWT_SECRET=tu_jwt_secret_muy_largo_y_aleatorio

# Firebase Cloud Messaging
FIREBASE_PROJECT_ID=tu-proyecto-firebase
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@tu-proyecto.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
</pre>
</div>

<h3>🔧 Crear Servicio systemd para Node.js</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
# Crear archivo de servicio
sudo nano /etc/systemd/system/logiscan-middleware.service
</pre>
</div>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
[Unit]
Description=LogiScan Middleware API
After=network.target odoo.service

[Service]
Type=simple
User=www-data
WorkingDirectory=/opt/logiscan/middleware
ExecStart=/usr/bin/node src/app.js
Restart=always
RestartSec=10
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
</pre>
</div>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
# Habilitar y arrancar servicio
sudo systemctl daemon-reload
sudo systemctl enable logiscan-middleware
sudo systemctl start logiscan-middleware
sudo systemctl status logiscan-middleware
</pre>
</div>

<hr class="my-8">

<h2>7.3. Configuración de Firebase</h2>

<h3>🔔 Configurar Firebase Cloud Messaging</h3>

<ol class="list-decimal pl-6 space-y-4 my-6">
<li>
<strong>Crear proyecto en Firebase</strong>
<ul class="list-disc pl-6 mt-2 space-y-1">
<li>Ir a https://console.firebase.google.com</li>
<li>Clic en "Añadir proyecto"</li>
<li>Nombre: <code class="text-sm">LogiScan Pro</code></li>
<li>Desactivar Google Analytics (opcional)</li>
</ul>
</li>
<li>
<strong>Registrar aplicación Android</strong>
<ul class="list-disc pl-6 mt-2 space-y-1">
<li>Package name: <code class="text-sm">com.iesserra.logiscan_pro</code></li>
<li>SHA-1: Ejecutar comando keytool</li>
<li>Descargar <code class="text-sm">google-services.json</code></li>
<li>Copiar a <code class="text-sm">flutter-app/android/app/</code></li>
</ul>
</li>
<li>
<strong>Configurar Cloud Messaging</strong>
<ul class="list-disc pl-6 mt-2 space-y-1">
<li>Project Settings → Cloud Messaging</li>
<li>Generar clave de servidor (Server Key)</li>
<li>Copiar Sender ID</li>
</ul>
</li>
<li>
<strong>Crear cuenta de servicio</strong>
<ul class="list-disc pl-6 mt-2 space-y-1">
<li>Project Settings → Service Accounts</li>
<li>Generar nueva clave privada</li>
<li>Descargar JSON</li>
</ul>
</li>
</ol>

<hr class="my-8">

<h2>7.4. Procedimientos de Operación</h2>

<h3>📋 Checklist de Arranque</h3>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span>
        <span>Arranque del Sistema</span>
    </div>
</div>

<table class="my-6">
<thead>
<tr>
<th>#</th>
<th>Paso</th>
<th>Verificación</th>
<th>Estado</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>PostgreSQL activo</td>
<td><code class="text-sm">sudo systemctl status postgresql</code></td>
<td>⬜</td>
</tr>
<tr>
<td>2</td>
<td>Odoo activo</td>
<td><code class="text-sm">sudo systemctl status odoo</code></td>
<td>⬜</td>
</tr>
<tr>
<td>3</td>
<td>Middleware activo</td>
<td><code class="text-sm">sudo systemctl status logiscan-middleware</code></td>
<td>⬜</td>
</tr>
<tr>
<td>4</td>
<td>Puerto 8069 escuchando</td>
<td><code class="text-sm">netstat -tlnp | grep 8069</code></td>
<td>⬜</td>
</tr>
<tr>
<td>5</td>
<td>Puerto 3000 escuchando</td>
<td><code class="text-sm">netstat -tlnp | grep 3000</code></td>
<td>⬜</td>
</tr>
<tr>
<td>6</td>
<td>Logs sin errores</td>
<td><code class="text-sm">tail -f /var/log/odoo/odoo.log</code></td>
<td>⬜</td>
</tr>
<tr>
<td>7</td>
<td>Health check API</td>
<td><code class="text-sm">curl http://localhost:3000/health</code></td>
<td>⬜</td>
</tr>
<tr>
<td>8</td>
<td>Test notificación FCM</td>
<td>Enviar desde Firebase Console</td>
<td>⬜</td>
</tr>
</tbody>
</table>

<h3>🔄 Procedimiento de Parada</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
# Orden recomendado de parada

# 1. Detener middleware
sudo systemctl stop logiscan-middleware

# 2. Detener Odoo
sudo systemctl stop odoo

# 3. Detener PostgreSQL (solo si es necesario)
sudo systemctl stop postgresql
</pre>
</div>

<hr class="my-8">

<h2>7.5. Copias de Seguridad</h2>

<h3>💾 Política de Backups</h3>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>💾</span>
        <span>Importancia de los Backups</span>
    </div>
    <p>Las copias de seguridad son críticas. Configura al menos dos ubicaciones diferentes.</p>
</div>

<h3>Script de Backup Automático</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
#!/bin/bash
# /opt/logiscan/scripts/backup.sh

BACKUP_DIR="/backup/logiscan"
DATE=$(date +%Y%m%d_%H%M%S)
DB_NAME="logiscan_prod"
DB_USER="logiscan"

mkdir -p $BACKUP_DIR/{database,odoo,files}

# Backup de PostgreSQL
pg_dump -U $DB_USER $DB_NAME | gzip > $BACKUP_DIR/database/${DB_NAME}_${DATE}.sql.gz

# Backup de archivos de Odoo
tar -czf $BACKUP_DIR/files/odoo_files_${DATE}.tar.gz /opt/odoo/custom-addons/

# Backup de configuración
tar -czf $BACKUP_DIR/files/config_${DATE}.tar.gz /etc/odoo/ /opt/logiscan/

# Eliminar backups antiguos (más de 30 días)
find $BACKUP_DIR -type f -mtime +30 -delete

echo "Backup completado: $DATE"
</pre>
</div>

<h3>Programar Backup con Cron</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
# Editar crontab
sudo crontab -e

# Añadir línea para backup diario a las 3:00 AM
0 3 * * * /opt/logiscan/scripts/backup.sh >> /var/log/logiscan/backup.log 2>&1
</pre>
</div>

<hr class="my-8">

<h2>7.6. Monitorización y Logs</h2>

<h3>📊 Comandos de Monitorización</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
# Ver estado de servicios
sudo systemctl status odoo logiscan-middleware postgresql

# Ver logs en tiempo real
sudo tail -f /var/log/odoo/odoo.log
sudo journalctl -u logiscan-middleware -f

# Ver uso de recursos
htop
sudo iotop

# Ver conexiones a base de datos
sudo -u postgres psql -c "SELECT * FROM pg_stat_activity;"

# Ver espacio en disco
df -h
du -sh /var/lib/odoo
</pre>
</div>

<h3>🔔 Alertas Recomendadas</h3>

<table class="my-6">
<thead>
<tr>
<th>Evento</th>
<th>Umbral</th>
<th>Acción</th>
</tr>
</thead>
<tbody>
<tr>
<td>CPU &gt; 80%</td>
<td>5 minutos</td>
<td>Revisar procesos</td>
</tr>
<tr>
<td>RAM &gt; 90%</td>
<td>5 minutos</td>
<td>Revisar memory leaks</td>
</tr>
<tr>
<td>Disco &gt; 85%</td>
<td>-</td>
<td>Limpiar logs/backup</td>
</tr>
<tr>
<td>Odoo caído</td>
<td>1 minuto</td>
<td>Reiniciar servicio</td>
</tr>
<tr>
<td>API caída</td>
<td>1 minuto</td>
<td>Reiniciar middleware</td>
</tr>
</tbody>
</table>

<hr class="my-8">

<h2>7.7. Resolución de Incidencias</h2>

<h3>🚨 Problemas Comunes</h3>

<div class="callout callout-error">
    <div class="callout-title">
        <span>🚨</span>
        <span>Odoo no arranca</span>
    </div>
    <p><strong>Causas posibles:</strong> Puerto ocupado, error en módulo personalizado, base de datos corrupta.</p>
    <p><strong>Solución:</strong> Revisar logs, verificar puerto, desactivar módulos personalizados.</p>
</div>

<div class="callout callout-error">
    <div class="callout-title">
        <span>🚨</span>
        <span>Notificaciones no llegan</span>
    </div>
    <p><strong>Causas posibles:</strong> Token FCM expirado, configuración Firebase incorrecta, firewall bloquea.</p>
    <p><strong>Solución:</strong> Verificar tokens en BD, testear desde Firebase Console, revisar reglas de red.</p>
</div>

<div class="callout callout-error">
    <div class="callout-title">
        <span>🚨</span>
        <span>Escaneos no se sincronizan</span>
    </div>
    <p><strong>Causas posibles:</strong> API caída, problema de conectividad, error de autenticación.</p>
    <p><strong>Solución:</strong> Verificar estado API, comprobar logs de sincronización, renovar token.</p>
</div>

<h3>📞 Contactos de Soporte</h3>

<table class="my-6">
<thead>
<tr>
<th>Servicio</th>
<th>Documentación</th>
<th>Soporte</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Odoo</strong></td>
<td>odoo.com/documentation</td>
<td>odoo.com/help</td>
</tr>
<tr>
<td><strong>Flutter</strong></td>
<td>flutter.dev/docs</td>
<td>flutter.dev/community</td>
</tr>
<tr>
<td><strong>Firebase</strong></td>
<td>firebase.google.com/docs</td>
<td>firebase.google.com/support</td>
</tr>
<tr>
<td><strong>PostgreSQL</strong></td>
<td>postgresql.org/docs</td>
<td>postgresql.org/support</td>
</tr>
</tbody>
</table>
`;
