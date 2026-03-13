window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["implementacion"] = `

<div class="callout callout-info">
    <div class="callout-title"><span>💻</span><span>Implementación</span></div>
    <p class="text-sm">Esta es la sección práctica donde describes CÓMO has configurado cada componente. Incluye comandos reales, fragmentos de código y capturas de pantalla.</p>
</div>

<h3>6.1. Diario de Implementación</h3>

<p>Documenta cada paso significativo de la implementación. Esta bitácora será invaluable durante la defensa oral.</p>

<h4>6.1.1. Configuración de AWS</h4>

<div class="callout callout-warning">
    <div class="callout-title"><span>📝</span><span>Tu Tarea</span></div>
    <p class="text-sm m-0">Completa esta sección con los comandos y configuraciones reales que hayas utilizado. Los ejemplos siguientes son plantillas que debes adaptar.</p>
</div>

<h5>Paso 1: Creación de VPC</h5>

<div class="bg-slate-800 rounded-xl p-4 my-4 overflow-x-auto">
    <pre class="text-xs text-green-400 font-mono"><code># Usando AWS CLI para crear VPC
aws ec2 create-vpc \\
  --cidr-block 10.0.0.0/16 \\
  --tag-specifications 'ResourceType=vpc,Tags=[{Key=Name,Value=MediConnect-VPC}]' \\
  --query 'Vpc.VpcId' \\
  --output text

# Resultado esperado: vpc-0abc123def456789</code></pre>
</div>

<h5>Paso 2: Creación de Subnets</h5>

<div class="bg-slate-800 rounded-xl p-4 my-4 overflow-x-auto">
    <pre class="text-xs text-green-400 font-mono"><code># Subnet pública
aws ec2 create-subnet \\
  --vpc-id vpc-0abc123def456789 \\
  --cidr-block 10.0.1.0/24 \\
  --availability-zone eu-central-1a \\
  --tag-specifications 'ResourceType=subnet,Tags=[{Key=Name,Value=Public-Subnet-1}]'

# Subnet privada
aws ec2 create-subnet \\
  --vpc-id vpc-0abc123def456789 \\
  --cidr-block 10.0.2.0/24 \\
  --availability-zone eu-central-1a \\
  --tag-specifications 'ResourceType=subnet,Tags=[{Key=Name,Value=Private-Subnet-1}]'</code></pre>
</div>

<h5>Paso 3: Security Groups</h5>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Security Group</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Reglas Entrada</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Reglas Salida</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">sg-web</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">HTTP (80) - 0.0.0.0/0<br>HTTPS (443) - 0.0.0.0/0</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Todo el tráfico</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">sg-bastion</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">SSH (22) - IP oficina</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">SSH a sg-web, sg-app</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">sg-db</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">PostgreSQL (5432) - sg-app</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Solo respuestas establecidas</td>
        </tr>
    </tbody>
</table>

<h4>6.1.2. Configuración de Proxmox VE</h4>

<h5>Paso 1: Instalación de Proxmox</h5>

<div class="bg-slate-800 rounded-xl p-4 my-4 overflow-x-auto">
    <pre class="text-xs text-green-400 font-mono"><code># Descargar ISO de Proxmox VE
wget https://download.proxmox.com/iso/proxmox-ve_8.0-1.iso

# Durante la instalación:
# - Configurar IP estática: 192.168.10.10/24
# - Gateway: 192.168.10.1
# - Hostname: proxmox.mediconnect.local

# Post-instalación: acceder a https://192.168.10.10:8006</code></pre>
</div>

<h5>Paso 2: Creación de VM para PostgreSQL</h5>

<div class="bg-slate-800 rounded-xl p-4 my-4 overflow-x-auto">
    <pre class="text-xs text-green-400 font-mono"><code># Crear VM desde CLI de Proxmox
qm create 100 --memory 4096 --core 2 --name postgres-db

# Añadir disco
qm set 100 --scsihw virtio-scsi-pci --scsi0 local-lvm:32

# Añadir ISO de Ubuntu Server
qm set 100 --ide2 local:iso/ubuntu-22.04-live-server-amd64.iso,media=cdrom

# Configurar red
qm set 100 --net0 virtio,bridge=vmbr0

# Iniciar VM
qm start 100</code></pre>
</div>

<h5>Paso 3: Configuración de Red en Proxmox</h5>

<div class="bg-slate-800 rounded-xl p-4 my-4 overflow-x-auto">
    <pre class="text-xs text-green-400 font-mono"><code># /etc/network/interfaces en Proxmox

auto vmbr0
iface vmbr0 inet static
    address 192.168.10.10/24
    gateway 192.168.10.1
    bridge-ports eno1
    bridge-stp off
    bridge-fd 0

# VLAN para red de gestión
auto vmbr0.20
iface vmbr0.20 inet static
    address 192.168.20.10/24
    vlan-raw-device vmbr0</code></pre>
</div>

<h4>6.1.3. Configuración de VPN Site-to-Site</h4>

<h5>OpenVPN Server (en Proxmox)</h5>

<div class="bg-slate-800 rounded-xl p-4 my-4 overflow-x-auto">
    <pre class="text-xs text-green-400 font-mono"><code># Instalar OpenVPN
apt update && apt install openvpn easy-rsa -y

# Inicializar PKI
make-cadir /etc/openvpn/easy-rsa
cd /etc/openvpn/easy-rsa
./easyrsa init-pki
./easyrsa build-ca
./easyrsa gen-req server nopass
./easyrsa sign-req server server

# Generar configuración
openvpn --genkey secret /etc/openvpn/ta.key

# Configurar servidor (/etc/openvpn/server.conf)
port 1194
proto udp
dev tun
ca /etc/openvpn/easy-rsa/pki/ca.crt
cert /etc/openvpn/easy-rsa/pki/issued/server.crt
key /etc/openvpn/easy-rsa/pki/private/server.key
dh /etc/openvpn/easy-rsa/pki/dh.pem
server 172.16.0.0 255.255.255.252
push "route 192.168.10.0 255.255.255.0"
keepalive 10 120
cipher AES-256-CBC
user nobody
group nogroup
persist-key
persist-tun
status openvpn-status.log
verb 3</code></pre>
</div>

<div class="callout callout-info">
    <div class="callout-title"><span>💡</span><span>Consejo de Implementación</span></div>
    <p class="text-sm m-0">Guarda TODOS los archivos de configuración en un repositorio Git privado. Usa variables de entorno para las credenciales sensibles y nunca commitees claves privadas.</p>
</div>

<h4>6.1.4. Scripts de Automatización Bash</h4>

<h5>Script Bash: Sincronización de Backups con S3</h5>

<div class="bg-slate-800 rounded-xl p-4 my-4 overflow-x-auto">
    <pre class="text-xs text-green-400 font-mono"><code>#!/bin/bash
#===============================================================================
# backup_sync.sh - Sincroniza backups locales con AWS S3
# Autor: [Tu Nombre]
# Fecha: 2026
# Descripción: Sube archivos de backup nuevos o modificados a S3
#===============================================================================

# Configuración
S3_BUCKET="mediconnect-backups"
LOCAL_PATH="/backup/postgresql"
LOG_FILE="/var/log/s3_sync.log"
DATE=$(date '+%Y-%m-%d %H:%M:%S')

# Función para registrar en log
log() {
    echo "[$DATE] $1" >> $LOG_FILE
}

# Verificar que AWS CLI está instalado
if ! command -v aws &> /dev/null; then
    echo "Error: AWS CLI no está instalado"
    exit 1
fi

# Verificar que el directorio existe
if [ ! -d "$LOCAL_PATH" ]; then
    log "ERROR: El directorio $LOCAL_PATH no existe"
    exit 1
fi

log "Iniciando sincronización con S3"

# Contador de archivos subidos
UPLOADED=0

# Recorrer archivos .sql.gz del directorio local
for file in "$LOCAL_PATH"/*.sql.gz; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        s3_key="backups/$filename"
        
        # Verificar si el archivo ya existe en S3
        if aws s3 ls "s3://$S3_BUCKET/$s3_key" &> /dev/null; then
            log "✓ $filename ya existe en S3"
        else
            # Subir archivo con cifrado
            aws s3 cp "$file" "s3://$S3_BUCKET/$s3_key" \
                --sse AES256 \
                --quiet
            
            if [ $? -eq 0 ]; then
                log "↑ $filename subido a S3"
                ((UPLOADED++))
            else
                log "✗ ERROR al subir $filename"
            fi
        fi
    fi
done

log "Sincronización completada: $UPLOADED archivos nuevos subidos"

echo "Sincronización completada: $UPLOADED archivos nuevos"</code></pre>
</div>

<h5>Script Bash: Monitorización de Recursos</h5>

<div class="bg-slate-800 rounded-xl p-4 my-4 overflow-x-auto">
    <pre class="text-xs text-green-400 font-mono"><code>#!/bin/bash
# monitor_resources.sh - Verifica uso de recursos y envía alertas
# Autor: [Tu Nombre]

THRESHOLD_CPU=90
THRESHOLD_MEM=85
THRESHOLD_DISK=80
ALERT_EMAIL="admin@mediconnect.local"

# Verificar CPU
CPU_USAGE=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1 | cut -d'.' -f1)

# Verificar Memoria
MEM_USAGE=$(free | grep Mem | awk '{printf("%.0f", $3/$2 * 100.0)}')

# Verificar Disco
DISK_USAGE=$(df -h / | tail -1 | awk '{print $5}' | cut -d'%' -f1)

# Función para enviar alerta
send_alert() {
    local metric=$1
    local value=$2
    echo "ALERTA: $metric al ${value}%" | mail -s "[ALERTA] Servidor MediConnect" $ALERT_EMAIL
    
    # También enviar a Telegram (opcional)
    # curl -s "https://api.telegram.org/bot$TG_TOKEN/sendMessage?chat_id=$TG_CHAT&text=🚨 $metric: ${value}%"
}

# Comprobar umbrales
if [ $CPU_USAGE -gt $THRESHOLD_CPU ]; then
    send_alert "CPU" $CPU_USAGE
fi

if [ $MEM_USAGE -gt $THRESHOLD_MEM ]; then
    send_alert "Memoria" $MEM_USAGE
fi

if [ $DISK_USAGE -gt $THRESHOLD_DISK ]; then
    send_alert "Disco" $DISK_USAGE
fi

# Log de verificación
echo "$(date '+%Y-%m-%d %H:%M:%S') - CPU: ${CPU_USAGE}%, MEM: ${MEM_USAGE}%, DISK: ${DISK_USAGE}%" >> /var/log/monitor.log</code></pre>
</div>

<h5>Configurar Cron Jobs</h5>

<div class="bg-slate-800 rounded-xl p-4 my-4 overflow-x-auto">
    <pre class="text-xs text-green-400 font-mono"><code># Editar crontab del usuario root
crontab -e

# Añadir las siguientes líneas:

# Backup de PostgreSQL cada día a las 2:00 AM
0 2 * * * /usr/local/bin/backup_postgresql.sh >> /var/log/backup.log 2>&1

# Sincronizar con S3 cada día a las 3:00 AM
0 3 * * * /usr/bin/python3 /opt/scripts/backup_sync.py >> /var/log/s3_sync.log 2>&1

# Monitorización cada 5 minutos
*/5 * * * * /opt/scripts/monitor_resources.sh

# Rotación de logs semanalmente
0 0 * * 0 /usr/sbin/logrotate /etc/logrotate.conf</code></pre>
</div>

<h3>6.2. Pruebas de Validación</h3>

<p>Documenta las pruebas realizadas para verificar que cada componente funciona correctamente.</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Prueba</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Procedimiento</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Resultado Esperado</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Estado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 text-sm font-semibold">Conectividad VPN</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Ping desde AWS a IP local</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Respuesta < 50ms</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-bold">PENDIENTE</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 text-sm font-semibold">Backup Automático</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Esperar ejecución programada</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Archivo en S3 antes 3:30 AM</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-bold">PENDIENTE</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 text-sm font-semibold">Alerta CPU</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Ejecutar stress --cpu 4</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Email recibido en 5 min</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-bold">PENDIENTE</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 text-sm font-semibold">Recuperación DB</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Restaurar backup en VM test</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">DB funcional en < 15 min</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-bold">PENDIENTE</span></td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title"><span>⚠️</span><span>Importante para la Defensa</span></div>
    <p class="text-sm m-0">Durante la presentación oral, el tribunal puede pedirte que demuestres partes de tu implementación. Ten preparado un <strong>entorno de demostración</strong> funcional (aunque sea en versión reducida).</p>
</div>

`;
