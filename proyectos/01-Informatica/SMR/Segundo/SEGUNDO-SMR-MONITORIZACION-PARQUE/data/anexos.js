window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.anexos = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📎</span>
        <span>Anexos Técnicos</span>
    </div>
    <p>
        Esta sección contiene documentación técnica complementaria, configuraciones completas 
        y materiales adicionales para la implementación del proyecto.
    </p>
</div>

<h3>Anexo A: Configuración Completa de PostgreSQL</h3>

<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <h5 class="text-white font-bold mb-4">postgresql.conf - Configuración Optimizada para Zabbix</h5>
    <pre class="text-sm text-green-400"><code># ===============================
# CONFIGURACIÓN POSTGRESQL 15
# Optimizada para Zabbix 7.0
# Servidor: 10.10.10.100
# ===============================

# --- Conexiones y Autenticación ---
listen_addresses = '10.10.10.100'
port = 5432
max_connections = 200
superuser_reserved_connections = 3

# --- Memoria ---
shared_buffers = 16GB              # 25% de RAM total (64GB)
effective_cache_size = 48GB        # 75% de RAM total
work_mem = 256MB                   # Memoria por operación
maintenance_work_mem = 2GB         # Para VACUUM, CREATE INDEX
huge_pages = try                   # Usar páginas grandes si disponible

# --- Write Ahead Log (WAL) ---
wal_level = replica
max_wal_senders = 3
wal_keep_size = 1GB
checkpoint_completion_target = 0.9
checkpoint_timeout = 15min
min_wal_size = 1GB
max_wal_size = 4GB

# --- Query Planning ---
random_page_cost = 1.1             # SSD, acceso aleatorio rápido
effective_io_concurrency = 200     # Para SSD
default_statistics_target = 100

# --- Logging ---
logging_collector = on
log_directory = 'log'
log_filename = 'postgresql-%Y-%m-%d_%H%M%S.log'
log_rotation_age = 1d
log_rotation_size = 100MB
log_min_duration_statement = 1000  # Log queries > 1 segundo
log_checkpoints = on
log_connections = on
log_disconnections = on
log_lock_waits = on
log_temp_files = 0

# --- Autovacuum ---
autovacuum = on
autovacuum_max_workers = 3
autovacuum_naptime = 1min
autovacuum_vacuum_threshold = 50
autovacuum_analyze_threshold = 50
autovacuum_vacuum_scale_factor = 0.1
autovacuum_analyze_scale_factor = 0.05

# --- Bloqueo y Concurrencia ---
lock_timeout = 0
idle_in_transaction_session_timeout = 0
statement_timeout = 0

# --- Cliente ---
datestyle = 'iso, mdy'
timezone = 'Europe/Madrid'
lc_messages = 'es_ES.UTF-8'
lc_monetary = 'es_ES.UTF-8'
lc_numeric = 'es_ES.UTF-8'
lc_time = 'es_ES.UTF-8'
default_text_search_config = 'pg_catalog.spanish'</code></pre>
</div>

<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <h5 class="text-white font-bold mb-4">pg_hba.conf - Configuración de Acceso</h5>
    <pre class="text-sm text-green-400"><code># TYPE  DATABASE        USER            ADDRESS                 METHOD

# Conexiones locales
local   all             postgres                                peer
local   all             all                                     peer

# Conexiones IPv4 locales
host    all             all             127.0.0.1/32            scram-sha-256
host    all             all             ::1/128                 scram-sha-256

# Zabbix Server (10.10.10.50) - Acceso completo a BD zabbix
host    zabbix          zabbix          10.10.10.50/32          scram-sha-256

# Backup server (si existe)
# host    replication     backup          10.10.10.200/32       scram-sha-256

# Denegar resto de conexiones por defecto
host    all             all             0.0.0.0/0               reject
host    all             all             ::/0                    reject</code></pre>
</div>

<h3>Anexo B: Configuración Completa de Zabbix Server</h3>

<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <h5 class="text-white font-bold mb-4">zabbix_server.conf</h5>
    <pre class="text-sm text-green-400"><code># ===============================
# CONFIGURACIÓN ZABBIX SERVER 7.0
# Servidor: 10.10.10.50
# ===============================

# --- Parámetros Generales ---
PidFile=/var/run/zabbix/zabbix_server.pid
LogFile=/var/log/zabbix/zabbix_server.log
LogFileSize=100
DebugLevel=3

# --- Base de Datos ---
DBHost=10.10.10.100
DBName=zabbix
DBUser=zabbix
DBPassword=Zabbix_S3gur0_2025!
DBPort=5432

# --- Procesos y Rendimiento (para ~400 hosts) ---
StartPollers=10
StartPollersUnreachable=2
StartTrappers=2
StartPingers=2
StartDiscoverers=1
StartHTTPPollers=1
StartTimers=1
StartAlerters=4
StartPreprocessors=3
StartLLDProcessors=2

HousekeepingFrequency=1
MaxHousekeeperDelete=500

# --- Cache ---
HistoryCacheSize=2G
HistoryIndexCacheSize=256M
TrendCacheSize=128M
ValueCacheSize=512M
ConfigurationCacheSize=64M

# --- Timeout ---
Timeout=10
UnreachablePeriod=45
UnreachableDelay=15
UnreachableWeight=1

# --- SNMP Trapper ---
StartSNMPTrapper=0
SNMPTrapperFile=/var/log/snmptrap/snmptrap.log

# --- Externos ---
StartExternalScripts=0
StartVMwareCollectors=0
AllowRoot=0

# --- TLS/SSL ---
TLSPSKIdentity=ZabbixServer2025
TLSPSKFile=/etc/zabbix/zabbix_server.psk

# --- Alertas ---
AlertScriptsPath=/usr/lib/zabbix/alertscripts
EventAckEnabled=1</code></pre>
</div>

<h3>Anexo C: Configuración de Agentes</h3>

<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <h5 class="text-white font-bold mb-4">zabbix_agent2.conf - Linux</h5>
    <pre class="text-sm text-green-400"><code># ===============================
# ZABBIX AGENT 2 - Linux
# ===============================

PidFile=/var/run/zabbix/zabbix_agent2.pid
LogFile=/var/log/zabbix/zabbix_agent2.log
LogFileSize=10
DebugLevel=3

# Conexión al servidor
Server=10.10.10.50
ServerActive=10.10.10.50
Hostname=$(hostname -f)
ListenPort=10050

# Comandos remotos (habilitar con precaución)
EnableRemoteCommands=1
AllowRoot=0

# Cifrado PSK
TLSConnect=psk
TLSAccept=psk
TLSPSKIdentity=ZabbixAgent2025
TLSPSKSecret=ZabbixPSK_2025_SecretKey_12345

# Plugins habilitados
Plugin.VFS.Dev.Enabled=1
Plugin.System.Run.Enabled=1

# Timeout
Timeout=5</code></pre>
</div>

<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <h5 class="text-white font-bold mb-4">zabbix_agent2.conf - Windows</h5>
    <pre class="text-sm text-green-400"><code># ===============================
# ZABBIX AGENT 2 - Windows
# Instalado en: C:\Program Files\Zabbix Agent 2\
# ===============================

PidFile=C:\Program Files\Zabbix Agent 2\zabbix_agent2.pid
LogFile=C:\Program Files\Zabbix Agent 2\zabbix_agent2.log
LogFileSize=10
DebugLevel=3

# Conexión al servidor
Server=10.10.10.50
ServerActive=10.10.10.50
Hostname=%COMPUTERNAME%
ListenPort=10050

# Comandos remotos
EnableRemoteCommands=1

# Cifrado PSK
TLSConnect=psk
TLSAccept=psk
TLSPSKIdentity=ZabbixAgent2025
TLSPSKSecret=ZabbixPSK_2025_SecretKey_12345

# Parámetros personalizados para Windows
UserParameter=windows.os.version,powershell -Command "(Get-CimInstance Win32_OperatingSystem).Version"
UserParameter=windows.lastboot,powershell -Command "(Get-CimInstance Win32_OperatingSystem).LastBootUpTime"
UserParameter=windows.pending.reboot,powershell -Command "Test-Path HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Component Based Servicing\RebootPending"

# Timeout
Timeout=5</code></pre>
</div>

<h3>Anexo D: Scripts de Mantenimiento</h3>

<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <h5 class="text-white font-bold mb-4">backup-zabbix-daily.sh</h5>
    <pre class="text-sm text-green-400"><code>#!/bin/bash
# ===================================
# Backup Diario de Zabbix
# Ejecutar vía cron: 0 2 * * *
# ===================================

set -e

# Variables
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backup/zabbix/daily"
DB_HOST="10.10.10.100"
DB_USER="zabbix"
DB_NAME="zabbix"
RETENTION_DAYS=30

# Crear directorio
mkdir -p ${BACKUP_DIR}

echo "[${DATE}] Iniciando backup..."

# Backup de base de datos
echo "[${DATE}] Backup de PostgreSQL..."
pg_dump -h ${DB_HOST} -U ${DB_USER} -Fc ${DB_NAME} | gzip \
    > ${BACKUP_DIR}/zabbix_db_${DATE}.dump.gz

# Backup de configuración
echo "[${DATE}] Backup de configuración..."
tar -czf ${BACKUP_DIR}/zabbix_config_${DATE}.tar.gz \
    -C /etc/zabbix zabbix_server.conf apache.conf

# Backup de scripts personalizados
if [ -d "/usr/lib/zabbix/alertscripts" ]; then
    tar -czf ${BACKUP_DIR}/zabbix_scripts_${DATE}.tar.gz \
        -C /usr/lib/zabbix alertscripts
fi

# Eliminar backups antiguos
echo "[${DATE}] Limpiando backups antiguos (> ${RETENTION_DAYS} días)..."
find ${BACKUP_DIR} -type f -mtime +${RETENTION_DAYS} -delete

# Verificar integridad
echo "[${DATE}] Verificando integridad..."
gzip -t ${BACKUP_DIR}/zabbix_db_${DATE}.dump.gz

echo "[${DATE}] Backup completado exitosamente."
echo "[${DATE}] Tamaño: $(du -h ${BACKUP_DIR}/zabbix_db_${DATE}.dump.gz | cut -f1)"

# Enviar notificación (opcional)
# curl -X POST "https://api.telegram.org/botTOKEN/sendMessage" \
#     -d "chat_id=CHAT_ID&text=✅ Backup Zabbix completado: ${DATE}"</code></pre>
</div>

<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <h5 class="text-white font-bold mb-4">health-check.sh</h5>
    <pre class="text-sm text-green-400"><code>#!/bin/bash
# ===================================
# Health Check del Sistema Zabbix
# Ejecutar cada 5 minutos vía cron
# ===================================

LOG_FILE="/var/log/zabbix/health_check.log"
ALERT_THRESHOLD=5

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> ${LOG_FILE}
}

check_zabbix_server() {
    if ! systemctl is-active --quiet zabbix-server; then
        log "CRITICAL: Zabbix Server no está en ejecución"
        return 1
    fi
    log "OK: Zabbix Server está en ejecución"
}

check_postgresql() {
    if ! systemctl is-active --quiet postgresql; then
        log "CRITICAL: PostgreSQL no está en ejecución"
        return 1
    fi
    log "OK: PostgreSQL está en ejecución"
}

check_disk_space() {
    USAGE=$(df /var/lib/zabbix | tail -1 | awk '{print $5}' | sed 's/%//')
    if [ $USAGE -gt 85 ]; then
        log "WARNING: Uso de disco en /var/lib/zabbix: ${USAGE}%"
    else
        log "OK: Uso de disco: ${USAGE}%"
    fi
}

check_queue() {
    QUEUE=$(psql -h 10.10.10.100 -U zabbix -d zabbix -t -c \
        "SELECT count(*) FROM items WHERE lastcheck < extract(epoch from now()) - 300;")
    QUEUE=$(echo $QUEUE | tr -d ' ')
    if [ $QUEUE -gt $ALERT_THRESHOLD ]; then
        log "WARNING: ${QUEUE} items sin actualizar en últimos 5 min"
    else
        log "OK: Queue de items: ${QUEUE}"
    fi
}

check_alerts() {
    ALERTS=$(psql -h 10.10.10.100 -U zabbix -d zabbix -t -c \
        "SELECT count(*) FROM alerts WHERE status=0 AND clock > extract(epoch from now()) - 3600;")
    ALERTS=$(echo $ALERTS | tr -d ' ')
    log "INFO: Alertas en última hora: ${ALERTS}"
}

# Ejecutar checks
log "=== Iniciando Health Check ==="
check_zabbix_server
check_postgresql
check_disk_space
check_queue
check_alerts
log "=== Health Check Finalizado ==="</code></pre>
</div>

<h3>Anexo E: Plantillas de Monitorización Personalizadas</h3>

<div class="bg-slate-50 rounded-lg p-6 my-6 border border-slate-200">
    <h5 class="font-bold text-slate-700 mb-4">Template: IES Serra Perenxisa - Equipos Aula</h5>
    <p class="text-slate-600 mb-4">Plantilla personalizada para equipos de aulas de informática.</p>
    <table class="w-full border-collapse">
        <thead>
            <tr class="bg-slate-100">
                <th class="border border-slate-300 p-2 text-left">Tipo</th>
                <th class="border border-slate-300 p-2 text-left">Nombre</th>
                <th class="border border-slate-300 p-2 text-left">Umbral Warning</th>
                <th class="border border-slate-300 p-2 text-left">Umbral Critical</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 p-2">Item</td>
                <td class="border border-slate-300 p-2">CPU utilization</td>
                <td class="border border-slate-300 p-2">> 70%</td>
                <td class="border border-slate-300 p-2">> 90%</td>
            </tr>
            <tr class="bg-slate-50">
                <td class="border border-slate-300 p-2">Item</td>
                <td class="border border-slate-300 p-2">Memory utilization</td>
                <td class="border border-slate-300 p-2">> 80%</td>
                <td class="border border-slate-300 p-2">> 95%</td>
            </tr>
            <tr>
                <td class="border border-slate-300 p-2">Item</td>
                <td class="border border-slate-300 p-2">Disk C: utilization</td>
                <td class="border border-slate-300 p-2">> 80%</td>
                <td class="border border-slate-300 p-2">> 90%</td>
            </tr>
            <tr class="bg-slate-50">
                <td class="border border-slate-300 p-2">Trigger</td>
                <td class="border border-slate-300 p-2">Equipo offline</td>
                <td colspan="2" class="border border-slate-300 p-2">Ping falla 3 veces consecutivas</td>
            </tr>
            <tr>
                <td class="border border-slate-300 p-2">Trigger</td>
                <td class="border border-slate-300 p-2">Software desactualizado</td>
                <td colspan="2" class="border border-slate-300 p-2">Windows sin updates > 30 días</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>Anexo F: Diagramas de Red</h3>

<div class="bg-slate-50 rounded-lg p-6 my-6 border border-slate-200">
    <h5 class="font-bold text-slate-700 mb-4">Esquema de Direccionamiento IP</h5>
    <table class="w-full border-collapse">
        <thead>
            <tr class="bg-slate-100">
                <th class="border border-slate-300 p-2 text-left">Dispositivo</th>
                <th class="border border-slate-300 p-2 text-left">Hostname</th>
                <th class="border border-slate-300 p-2 text-left">IP</th>
                <th class="border border-slate-300 p-2 text-left">VLAN</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 p-2">Firewall/Router</td>
                <td class="border border-slate-300 p-2">fw.iesperenxisa.local</td>
                <td class="border border-slate-300 p-2">10.10.0.1</td>
                <td class="border border-slate-300 p-2">Todas</td>
            </tr>
            <tr class="bg-slate-50">
                <td class="border border-slate-300 p-2">Switch Core</td>
                <td class="border border-slate-300 p-2">sw-core-01</td>
                <td class="border border-slate-300 p-2">10.10.0.10</td>
                <td class="border border-slate-300 p-2">Todas</td>
            </tr>
            <tr>
                <td class="border border-slate-300 p-2">DNS/DHCP</td>
                <td class="border border-slate-300 p-2">dc01.iesperenxisa.local</td>
                <td class="border border-slate-300 p-2">10.10.10.10</td>
                <td class="border border-slate-300 p-2">10 (MGMT)</td>
            </tr>
            <tr class="bg-slate-50">
                <td class="border border-slate-300 p-2">Zabbix Server</td>
                <td class="border border-slate-300 p-2">zabbix.iesperenxisa.local</td>
                <td class="border border-slate-300 p-2">10.10.10.50</td>
                <td class="border border-slate-300 p-2">10 (MGMT)</td>
            </tr>
            <tr>
                <td class="border border-slate-300 p-2">PostgreSQL</td>
                <td class="border border-slate-300 p-2">db.iesperenxisa.local</td>
                <td class="border border-slate-300 p-2">10.10.10.100</td>
                <td class="border border-slate-300 p-2">10 (MGMT)</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>Anexo G: Checklist de Puesta en Producción</h3>

<div class="bg-green-50 rounded-lg p-6 my-6 border border-green-200">
    <h5 class="font-bold text-green-800 mb-4">✅ Checklist Pre-Producción</h5>
    <ul class="space-y-2">
        <li class="flex items-start gap-3">
            <input type="checkbox" class="mt-1 w-4 h-4">
            <span class="text-green-800">Servidor Zabbix instalado y actualizado</span>
        </li>
        <li class="flex items-start gap-3">
            <input type="checkbox" class="mt-1 w-4 h-4">
            <span class="text-green-800">PostgreSQL configurado y optimizado</span>
        </li>
        <li class="flex items-start gap-3">
            <input type="checkbox" class="mt-1 w-4 h-4">
            <span class="text-green-800">Frontend web accesible vía HTTPS</span>
        </li>
        <li class="flex items-start gap-3">
            <input type="checkbox" class="mt-1 w-4 h-4">
            <span class="text-green-800">Contraseñas por defecto cambiadas</span>
        </li>
        <li class="flex items-start gap-3">
            <input type="checkbox" class="mt-1 w-4 h-4">
            <span class="text-green-800">Cifrado PSK configurado en todos los agentes</span>
        </li>
        <li class="flex items-start gap-3">
            <input type="checkbox" class="mt-1 w-4 h-4">
            <span class="text-green-800">Alertas de email configuradas y probadas</span>
        </li>
        <li class="flex items-start gap-3">
            <input type="checkbox" class="mt-1 w-4 h-4">
            <span class="text-green-800">Alertas de Telegram configuradas y probadas</span>
        </li>
        <li class="flex items-start gap-3">
            <input type="checkbox" class="mt-1 w-4 h-4">
            <span class="text-green-800">Dashboard principal creado</span>
        </li>
        <li class="flex items-start gap-3">
            <input type="checkbox" class="mt-1 w-4 h-4">
            <span class="text-green-800">Backup automático configurado</span>
        </li>
        <li class="flex items-start gap-3">
            <input type="checkbox" class="mt-1 w-4 h-4">
            <span class="text-green-800">Documentación completada</span>
        </li>
        <li class="flex items-start gap-3">
            <input type="checkbox" class="mt-1 w-4 h-4">
            <span class="text-green-800">Personal formado en operación básica</span>
        </li>
        <li class="flex items-start gap-3">
            <input type="checkbox" class="mt-1 w-4 h-4">
            <span class="text-green-800">Periodo piloto completado (2 semanas)</span>
        </li>
    </ul>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📁</span>
        <span>Archivos Adjuntos</span>
    </div>
    <p>
        Los siguientes archivos están disponibles en la carpeta <code>anexos/</code> del proyecto:
    </p>
    <ul class="list-disc list-inside space-y-2 mt-3">
        <li><code>zabbix_templates.xml</code> - Plantillas personalizadas exportadas</li>
        <li><code>network_diagram.pdf</code> - Diagrama de red completo</li>
        <li><code>scripts/</code> - Todos los scripts de automatización</li>
        <li><code>configuraciones/</code> - Archivos de configuración de ejemplo</li>
    </ul>
</div>
`;
