window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["anexos"] = `

<div class="callout callout-info">
    <div class="callout-title"><span>📎</span><span>Anexos Técnicos</span></div>
    <p class="text-sm">Documentación complementaria que amplía información técnica: código completo, configuraciones detalladas, diagramas adicionales y material de apoyo.</p>
</div>

<h3>Anexo A: Scripts Completos</h3>

<h4>A.1 Script de Backup de PostgreSQL</h4>

<div class="bg-slate-800 rounded-xl p-4 my-4 overflow-x-auto">
    <pre class="text-xs text-green-400 font-mono"><code>#!/bin/bash
#===============================================================================
# backup_postgresql.sh - Script de backup automático de PostgreSQL
# Autor: [Tu Nombre]
# Fecha: 2026
# Descripción: Realiza backup de la base de datos MediConnect y lo comprime
#===============================================================================

# Configuración
DB_NAME="mediconnect"
DB_USER="postgres"
BACKUP_DIR="/backup/postgresql"
RETENTION_DAYS=30
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="${BACKUP_DIR}/${DB_NAME}_${DATE}.sql.gz"

# Crear directorio si no existe
mkdir -p ${BACKUP_DIR}

# Registrar inicio
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Iniciando backup de ${DB_NAME}" >> /var/log/backup.log

# Realizar backup
if pg_dump -U ${DB_USER} -h localhost ${DB_NAME} | gzip > ${BACKUP_FILE}; then
    # Establecer permisos seguros
    chmod 600 ${BACKUP_FILE}
    
    # Registrar éxito
    BACKUP_SIZE=$(du -h ${BACKUP_FILE} | cut -f1)
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] ✓ Backup completado: ${BACKUP_FILE} (${BACKUP_SIZE})" >> /var/log/backup.log
    
    # Eliminar backups antiguos
    find ${BACKUP_DIR} -name "*.sql.gz" -type f -mtime +${RETENTION_DAYS} -delete
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Limpieza de backups antiguos completada" >> /var/log/backup.log
else
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] ✗ ERROR en el backup de ${DB_NAME}" >> /var/log/backup.log
    exit 1
fi

exit 0</code></pre>
</div>

<h4>A.2 Script de Sincronización con AWS S3</h4>

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

<h4>A.3 Script de Monitorización de Recursos</h4>

<div class="bg-slate-800 rounded-xl p-4 my-4 overflow-x-auto">
    <pre class="text-xs text-green-400 font-mono"><code>#!/bin/bash
#===============================================================================
# monitor_resources.sh - Verifica uso de recursos y envía alertas
# Autor: [Tu Nombre]
# Fecha: 2026
#===============================================================================

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

<h3>Anexo B: Configuraciones Completas</h3>

<h4>B.1 Configuración de OpenVPN Server</h4>

<div class="bg-slate-800 rounded-xl p-4 my-4 overflow-x-auto">
    <pre class="text-xs text-green-400 font-mono"><code># /etc/openvpn/server/server.conf
# Configuración completa de OpenVPN Server para MediConnect

port 1194
proto udp
dev tun

# Certificados y claves
ca /etc/openvpn/easy-rsa/pki/ca.crt
cert /etc/openvpn/easy-rsa/pki/issued/server.crt
key /etc/openvpn/easy-rsa/pki/private/server.key
dh /etc/openvpn/easy-rsa/pki/dh.pem
tls-auth /etc/openvpn/ta.key 0

# Configuración de red
server 172.16.0.0 255.255.255.0
ifconfig-pool-persist /var/log/openvpn/ipp.txt

# Rutas hacia red local
push "route 192.168.10.0 255.255.255.0"
push "route 192.168.20.0 255.255.255.0"

# Redirección de tráfico (opcional)
# push "redirect-gateway def1 bypass-dhcp"

# DNS servers
push "dhcp-option DNS 192.168.10.1"
push "dhcp-option DNS 8.8.8.8"

# Mantenimiento de conexión
keepalive 10 120

# Seguridad
cipher AES-256-GCM
auth SHA256
tls-version-min 1.2
verify-x509-name server name

# Usuario y grupo (seguridad)
user nobody
group nogroup

# Persistencia
persist-key
persist-tun

# Logging
status /var/log/openvpn/openvpn-status.log
verb 3
mute 20

# Opciones avanzadas
max-clients 50
duplicate-cn
client-to-client</code></pre>
</div>

<h4>B.2 Configuración de Prometheus</h4>

<div class="bg-slate-800 rounded-xl p-4 my-4 overflow-x-auto">
    <pre class="text-xs text-green-400 font-mono"><code># /etc/prometheus/prometheus.yml
# Configuración de Prometheus para monitorización MediConnect

global:
  scrape_interval: 15s
  evaluation_interval: 15s
  external_labels:
    environment: 'production'
    datacenter: 'mediconnect-local'

# Alertmanager configuration
alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - localhost:9093

# Rule files
rule_files:
  - /etc/prometheus/rules/*.yml

# Scrape configurations
scrape_configs:
  # Prometheus auto-monitoring
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']
        labels:
          instance: 'prometheus-server'

  # Node Exporter - Servidor Local
  - job_name: 'node_local'
    static_configs:
      - targets: ['192.168.10.10:9100']
        labels:
          instance: 'proxmox-host'
          location: 'local'

  # Node Exporter - VMs Proxmox
  - job_name: 'node_vms'
    static_configs:
      - targets: 
        - '192.168.10.11:9100'  # PostgreSQL VM
        - '192.168.10.12:9100'  # LDAP VM
        - '192.168.10.13:9100'  # Proxy VM
        labels:
          location: 'local'

  # AWS EC2 instances (usando EC2 service discovery)
  - job_name: 'ec2_instances'
    ec2_sd_configs:
      - region: eu-central-1
        port: 9100
        filters:
          - name: tag:Monitoring
            values: ['enabled']
    relabel_configs:
      - source_labels: [__meta_ec2_tag_Name]
        target_label: instance_name
      - source_labels: [__meta_ec2_availability_zone]
        target_label: availability_zone

  # PostgreSQL Exporter
  - job_name: 'postgresql'
    static_configs:
      - targets: ['192.168.10.11:9187']
        labels:
          instance: 'postgres-primary'

  # Blackbox Exporter - HTTP checks
  - job_name: 'blackbox_http'
    metrics_path: /probe
    params:
      module: [http_2xx]
    static_configs:
      - targets:
        - https://app.mediconnect.local
        - https://api.mediconnect.local
    relabel_configs:
      - source_labels: [__address__]
        target_label: __param_target
      - source_labels: [__param_target]
        target_label: instance
      - target_label: __address__
        replacement: 192.168.10.10:9115

  # AWS CloudWatch (usando YACE exporter)
  - job_name: 'cloudwatch'
    static_configs:
      - targets: ['192.168.10.10:5000']
        labels:
          service: 'cloudwatch'</code></pre>
</div>

<h3>Anexo C: Diagramas Técnicos</h3>

<div class="callout callout-info">
    <div class="callout-title"><span>📐</span><span>Instrucciones para Diagramas</span></div>
    <p class="text-sm m-0">Para cada diagrama listado a continuación, crea una imagen en <strong>draw.io</strong> o <strong>Excalidraw</strong> y guárdala en la carpeta <code>images/</code>. Luego referencia la imagen aquí.</p>
</div>

<h4>C.1 Diagrama de Arquitectura General</h4>

<p>El diagrama debe mostrar:</p>
<ul class="space-y-2 my-4 text-sm">
    <li>• La VPC de AWS con sus subnets públicas y privadas</li>
    <li>• El CPD local con servidores Proxmox</li>
    <li>• El túnel VPN conectando ambos entornos</li>
    <li>• Los flujos de datos principales</li>
    <li>• Leyenda con códigos de color</li>
</ul>

<div class="p-8 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 my-6 text-center">
    <span class="text-4xl mb-4 block">📐</span>
    <p class="text-slate-500 font-medium">[Insertar aquí: diagrama_arquitectura_general.png]</p>
    <p class="text-slate-400 text-sm mt-2">Dimensiones recomendadas: 1600x900 px</p>
</div>

<h4>C.2 Diagrama de Red Detallado</h4>

<p>El diagrama debe mostrar:</p>
<ul class="space-y-2 my-4 text-sm">
    <li>• Todas las subnets con sus rangos CIDR</li>
    <li>• Tablas de routing</li>
    <li>• Security groups y reglas principales</li>
    <li>• Puertos y protocolos utilizados</li>
</ul>

<div class="p-8 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 my-6 text-center">
    <span class="text-4xl mb-4 block">📐</span>
    <p class="text-slate-500 font-medium">[Insertar aquí: diagrama_red_detallado.png]</p>
    <p class="text-slate-400 text-sm mt-2">Dimensiones recomendadas: 1600x900 px</p>
</div>

<h4>C.3 Flujo de Datos de Backup</h4>

<p>El diagrama debe mostrar:</p>
<ul class="space-y-2 my-4 text-sm">
    <li>• El proceso completo desde pg_dump hasta S3</li>
    <li>• Los puntos de cifrado</li>
    <li>• Las políticas de retención</li>
    <li>• El flujo de restauración</li>
</ul>

<div class="p-8 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 my-6 text-center">
    <span class="text-4xl mb-4 block">📐</span>
    <p class="text-slate-500 font-medium">[Insertar aquí: flujo_backup.png]</p>
    <p class="text-slate-400 text-sm mt-2">Dimensiones recomendadas: 1200x800 px</p>
</div>

<h3>Anexo D: Capturas de Pantalla</h3>

<p>Documenta visualmente tu implementación con capturas de pantalla:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
        <h5 class="font-bold text-slate-700 mb-2 text-sm">📸 Dashboard de Grafana</h5>
        <p class="text-xs text-slate-500 mb-2">Captura del dashboard principal mostrando métricas en tiempo real.</p>
        <div class="h-32 bg-slate-200 rounded flex items-center justify-center text-slate-400 text-sm">
            [grafana_dashboard.png]
        </div>
    </div>
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
        <h5 class="font-bold text-slate-700 mb-2 text-sm">📸 Consola AWS EC2</h5>
        <p class="text-xs text-slate-500 mb-2">Vista de las instancias desplegadas en AWS.</p>
        <div class="h-32 bg-slate-200 rounded flex items-center justify-center text-slate-400 text-sm">
            [aws_ec2_console.png]
        </div>
    </div>
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
        <h5 class="font-bold text-slate-700 mb-2 text-sm">📸 Interfaz Proxmox</h5>
        <p class="text-xs text-slate-500 mb-2">Vista del cluster Proxmox con las VMs configuradas.</p>
        <div class="h-32 bg-slate-200 rounded flex items-center justify-center text-slate-400 text-sm">
            [proxmox_interface.png]
        </div>
    </div>
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
        <h5 class="font-bold text-slate-700 mb-2 text-sm">📸 Estado de la VPN</h5>
        <p class="text-xs text-slate-500 mb-2">Demostración de la VPN activa entre local y AWS.</p>
        <div class="h-32 bg-slate-200 rounded flex items-center justify-center text-slate-400 text-sm">
            [vpn_status.png]
        </div>
    </div>
</div>

<h3>Anexo E: Glosario de Términos</h3>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700 w-48">Término</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Definición</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">AMI</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Amazon Machine Image - Plantilla preconfigurada para instancias EC2</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">CIDR</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Classless Inter-Domain Routing - Notación para rangos de IP (ej: 10.0.0.0/16)</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">DRP</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Disaster Recovery Plan - Plan de recuperación ante desastres</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">KVM</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Kernel-based Virtual Machine - Tecnología de virtualización de Linux</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">LXC</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Linux Containers - Virtualización a nivel de sistema operativo</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">RTO</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Recovery Time Objective - Tiempo máximo aceptable de interrupción</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">RPO</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Recovery Point Objective - Pérdida máxima de datos aceptable</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">SLA</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Service Level Agreement - Acuerdo de nivel de servicio</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">VPC</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Virtual Private Cloud - Red privada virtual en AWS</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">VPN</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Virtual Private Network - Red privada virtual</td>
        </tr>
    </tbody>
</table>

<h3>Anexo F: Checklist de Entrega</h3>

<div class="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 my-6">
    <h5 class="font-bold text-green-800 mb-4">Documentación a Entregar</h5>
    <ul class="space-y-3 text-sm">
        <li class="flex items-start gap-3">
            <input type="checkbox" class="mt-0.5">
            <span>Memoria del proyecto en formato PDF</span>
        </li>
        <li class="flex items-start gap-3">
            <input type="checkbox" class="mt-0.5">
            <span>Código fuente en repositorio Git (URL en la memoria)</span>
        </li>
        <li class="flex items-start gap-3">
            <input type="checkbox" class="mt-0.5">
            <span>Presentación para defensa oral (15-20 diapositivas)</span>
        </li>
        <li class="flex items-start gap-3">
            <input type="checkbox" class="mt-0.5">
            <span>Demostración práctica del sistema funcionando</span>
        </li>
        <li class="flex items-start gap-3">
            <input type="checkbox" class="mt-0.5">
            <span>Diagramas técnicos en alta resolución</span>
        </li>
    </ul>
</div>

<div class="callout callout-info">
    <div class="callout-title"><span>💡</span><span>Consejo Final</span></div>
    <p class="text-sm m-0">Los anexos demuestran el trabajo real detrás del proyecto. Incluye TODO el código que hayas escrito, aunque sea básico. El tribunal valora ver el esfuerzo técnico concreto, no solo la teoría.</p>
</div>

`;
