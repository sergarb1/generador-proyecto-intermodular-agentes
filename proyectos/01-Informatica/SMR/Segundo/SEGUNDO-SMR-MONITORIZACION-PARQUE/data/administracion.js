window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.administracion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>⚙️</span>
        <span>Procedimientos de Administración y Operación</span>
    </div>
    <p>
        Esta sección describe los procedimientos operativos para mantener el sistema de 
        monitorización en producción, incluyendo tareas diarias, semanales y mensuales.
    </p>
</div>

<h3>7.1. Operaciones Diarias</h3>

<h4>Revisión Matutina del Estado del Sistema</h4>
<div class="bg-slate-50 rounded-lg p-6 my-6 border border-slate-200">
    <h5 class="font-bold text-slate-700 mb-3">Checklist Diario (8:00 AM)</h5>
    <ol class="list-decimal list-inside space-y-3 text-slate-700">
        <li>Acceder al dashboard NOC: <code>https://10.10.10.50/zabbix</code></li>
        <li>Verificar contador de problemas activos (debe ser &lt; 5 en condiciones normales)</li>
        <li>Revisar alertas de severidad "Desastre" y "Alto" de las últimas 12 horas</li>
        <li>Comprobar que todos los servidores críticos están "Online"</li>
        <li>Verificar espacio en disco del servidor Zabbix:
            <div class="bg-slate-900 rounded p-3 mt-2 overflow-x-auto">
                <pre class="text-sm text-green-400"><code># SSH al servidor Zabbix
ssh zabbixadmin@10.10.10.50
df -h /var/lib/zabbix</code></pre>
            </div>
        </li>
        <li>Revisar logs de errores del servidor:
            <div class="bg-slate-900 rounded p-3 mt-2 overflow-x-auto">
                <pre class="text-sm text-green-400"><code>grep -i "error\|warning" /var/log/zabbix/zabbix_server.log | tail -50</code></pre>
            </div>
        </li>
        <li>Documentar incidencias encontradas en el ticket del día</li>
    </ol>
</div>

<h4>Gestión de Alertas Activas</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Severidad</th>
            <th class="border border-slate-200 p-3 text-left">Tiempo Respuesta</th>
            <th class="border border-slate-200 p-3 text-left">Acción</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3"><span class="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">Desastre</span></td>
            <td class="border border-slate-200 p-3">Inmediato (&lt; 15 min)</td>
            <td class="border border-slate-200 p-3">Acknowledge + Notificar supervisor + Iniciar troubleshooting</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3"><span class="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">Alto</span></td>
            <td class="border border-slate-200 p-3">&lt; 1 hora</td>
            <td class="border border-slate-200 p-3">Acknowledge + Investigar causa + Planificar solución</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3"><span class="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">Medio</span></td>
            <td class="border border-slate-200 p-3">&lt; 4 horas</td>
            <td class="border border-slate-200 p-3">Registrar ticket + Resolver en ventana de mantenimiento</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3"><span class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">Bajo</span></td>
            <td class="border border-slate-200 p-3">&lt; 24 horas</td>
            <td class="border border-slate-200 p-3">Revisar en próxima iteración de mantenimiento</td>
        </tr>
    </tbody>
</table>

<h3>7.2. Operaciones Semanales</h3>

<h4>Revisión de Tendencias (Lunes 10:00 AM)</h4>
<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <pre class="text-sm text-green-400"><code># Generar reporte semanal de disponibilidad
# En PostgreSQL:
psql -h 10.10.10.100 -U zabbix -d zabbix -c "
SELECT 
    h.name AS host,
    ROUND(AVG(CASE WHEN hs.available = 1 THEN 100.0 ELSE 0.0 END), 2) AS availability_pct
FROM hosts h
JOIN hoststatus hs ON h.hostid = hs.hostid
WHERE h.status = 0  -- Solo hosts monitorizados
GROUP BY h.name
HAVING AVG(CASE WHEN hs.available = 1 THEN 100.0 ELSE 0.0 END) < 99.0
ORDER BY availability_pct ASC
LIMIT 20;
"</code></pre>
</div>

<h4>Limpieza de Datos Obsoletos</h4>
<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <pre class="text-sm text-green-400"><code># Verificar tamaño de la base de datos
psql -h 10.10.10.100 -U zabbix -d zabbix -c "
SELECT 
    schemaname,
    tablename,
    pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC
LIMIT 10;
"</code></pre>
</div>

<h3>7.3. Operaciones Mensuales</h3>

<h4>Backup de Configuración (Día 1 de cada mes)</h4>
<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <pre class="text-sm text-green-400"><code>#!/bin/bash
# backup-zabbix-config.sh

BACKUP_DIR="/backup/zabbix"
DATE=$(date +%Y%m%d_%H%M%S)
ZABBIX_SERVER="10.10.10.50"
DB_HOST="10.10.10.100"
DB_USER="zabbix"
DB_NAME="zabbix"

# Crear directorio de backup
mkdir -p ${BACKUP_DIR}/${DATE}

# Exportar configuración desde Zabbix API
curl -s -X POST \
    -H 'Content-Type: application/json-rpc' \
    -d '{
        "jsonrpc": "2.0",
        "method": "configuration.export",
        "params": {
            "format": "xml",
            "options": {
                "hosts": ["host1", "host2"],
                "templates": ["template1"],
                "groups": ["group1"],
                "triggers": true,
                "items": true,
                "graphs": true
            }
        },
        "auth": "API_TOKEN_AQUI",
        "id": 1
    }' \
    http://${ZABBIX_SERVER}/zabbix/api_jsonrpc.php \
    > ${BACKUP_DIR}/${DATE}/config_export.xml

# Backup de base de datos completa
pg_dump -h ${DB_HOST} -U ${DB_USER} ${DB_NAME} | gzip \
    > ${BACKUP_DIR}/${DATE}/zabbix_db_${DATE}.sql.gz

# Backup de archivos de configuración
scp ${ZABBIX_SERVER}:/etc/zabbix/zabbix_server.conf ${BACKUP_DIR}/${DATE}/
scp ${ZABBIX_SERVER}:/etc/zabbix/apache.conf ${BACKUP_DIR}/${DATE}/

# Comprimir todo
tar -czf ${BACKUP_DIR}/zabbix_backup_${DATE}.tar.gz -C ${BACKUP_DIR} ${DATE}

# Eliminar backup antiguo (retener 6 meses)
find ${BACKUP_DIR} -name "*.tar.gz" -mtime +180 -delete

echo "Backup completado: ${BACKUP_DIR}/zabbix_backup_${DATE}.tar.gz"</code></pre>
</div>

<h4>Actualización de Reportes de Inventario</h4>
<ol class="list-decimal list-inside space-y-3 text-slate-700 my-6">
    <li>Ir a: Reports → Available reports</li>
    <li>Generar "Hosts inventory report"</li>
    <li>Exportar a CSV para actualizar CMDB del centro</li>
    <li>Identificar equipos con:
        <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>Más de 5 años de antigüedad</li>
            <li>Menos de 4GB RAM</li>
            <li>Disco HDD (no SSD)</li>
            <li>Windows 10 sin opción a Windows 11</li>
        </ul>
    </li>
    <li>Enviar listado a dirección para planificación de renovaciones</li>
</ol>

<h3>7.4. Procedimientos de Troubleshooting</h3>

<h4>Problema: Agentes No Reportan Datos</h4>
<div class="bg-slate-50 rounded-lg p-6 my-6 border border-slate-200">
    <h5 class="font-bold text-slate-700 mb-3">Diagnóstico Paso a Paso</h5>
    <ol class="list-decimal list-inside space-y-3 text-slate-700">
        <li>Verificar conectividad de red:
            <div class="bg-slate-900 rounded p-3 mt-2 overflow-x-auto">
                <pre class="text-sm text-green-400"><code># Desde el servidor Zabbix
zabbix_get -s <hostname> -k system.hostname</code></pre>
            </div>
        </li>
        <li>Si falla, comprobar firewall del equipo:
            <div class="bg-slate-900 rounded p-3 mt-2 overflow-x-auto">
                <pre class="text-sm text-green-400"><code># Windows (PowerShell remoto)
Invoke-Command -ComputerName <hostname> -ScriptBlock {
    Get-NetFirewallRule -DisplayName "*Zabbix*" | Select DisplayName, Enabled, Direction
}</code></pre>
            </div>
        </li>
        <li>Verificar servicio del agente:
            <div class="bg-slate-900 rounded p-3 mt-2 overflow-x-auto">
                <pre class="text-sm text-green-400"><code># Windows
Get-Service ZabbixAgent2 | Select Status, StartType

# Linux
systemctl status zabbix-agent2</code></pre>
            </div>
        </li>
        <li>Revisar logs del agente:
            <div class="bg-slate-900 rounded p-3 mt-2 overflow-x-auto">
                <pre class="text-sm text-green-400"><code># Windows: C:\Program Files\Zabbix Agent 2\zabbix_agent2.log
# Linux: /var/log/zabbix/zabbix_agent2.log

tail -50 /var/log/zabbix/zabbix_agent2.log</code></pre>
            </div>
        </li>
        <li>Si el problema persiste, reinstalar agente con script de despliegue</li>
    </ol>
</div>

<h4>Problema: Base de Datos Lenta</h4>
<div class="bg-slate-50 rounded-lg p-6 my-6 border border-slate-200">
    <h5 class="font-bold text-slate-700 mb-3">Optimización de PostgreSQL</h5>
    <ol class="list-decimal list-inside space-y-3 text-slate-700">
        <li>Verificar consultas lentas:
            <div class="bg-slate-900 rounded p-3 mt-2 overflow-x-auto">
                <pre class="text-sm text-green-400"><code># Habilitar log de consultas lentas (> 1 segundo)
ALTER SYSTEM SET log_min_duration_statement = 1000;
SELECT pg_reload_conf();</code></pre>
            </div>
        </li>
        <li>Analizar tablas más grandes:
            <div class="bg-slate-900 rounded p-3 mt-2 overflow-x-auto">
                <pre class="text-sm text-green-400"><code>SELECT relname, 
       pg_size_pretty(pg_total_relation_size(relid)) AS total_size
FROM pg_catalog.pg_statio_user_tables
ORDER BY pg_total_relation_size(relid) DESC
LIMIT 10;</code></pre>
            </div>
        </li>
        <li>Ejecutar VACUUM ANALYZE en horas de baja actividad:
            <div class="bg-slate-900 rounded p-3 mt-2 overflow-x-auto">
                <pre class="text-sm text-green-400"><code>VACUUM ANALYZE history;
VACUUM ANALYZE trends;
VACUUM ANALYZE items;</code></pre>
            </div>
        </li>
        <li>Considerar particionamiento con TimescaleDB si history > 100GB</li>
    </ol>
</div>

<h3>7.5. Procedimientos de Seguridad</h3>

<h4>Rotación de Claves PSK (Cada 6 meses)</h4>
<ol class="list-decimal list-inside space-y-3 text-slate-700 my-6">
    <li>Generar nueva clave PSK:
        <div class="bg-slate-900 rounded p-3 mt-2 overflow-x-auto">
            <pre class="text-sm text-green-400"><code># Generar clave aleatoria de 32 bytes
openssl rand -hex 32</code></pre>
        </div>
    </li>
    <li>Actualizar en Zabbix Server:
        <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>Data collection → Hosts → Seleccionar host</li>
            <li>Pestaña "Encryption"</li>
            <li>Actualizar PSK secret</li>
        </ul>
    </li>
    <li>Actualizar en cada agente:
        <div class="bg-slate-900 rounded p-3 mt-2 overflow-x-auto">
            <pre class="text-sm text-green-400"><code># Linux: /etc/zabbix/zabbix_agent2.conf
TLSPSKSecret=<nueva_clave>

# Windows: Registrar en Registry
reg add "HKLM\SOFTWARE\Zabbix Foundation\Zabbix Agent 2\Parameters" ^
    /v TLSPSKSecret /t REG_SZ /d "<nueva_clave>" /f</code></pre>
        </div>
    </li>
    <li>Reiniciar agentes y verificar conectividad</li>
</ol>

<h4>Revisión de Accesos de Usuario (Mensual)</h4>
<ol class="list-decimal list-inside space-y-3 text-slate-700 my-6">
    <li>Ir a: Users → Users</li>
    <li>Revisar lista de usuarios activos</li>
    <li>Eliminar o deshabilitar usuarios que ya no necesiten acceso</li>
    <li>Verificar que los permisos sean los mínimos necesarios (principio de least privilege)</li>
    <li>Revisar logs de auditoría:
        <div class="bg-slate-900 rounded p-3 mt-2 overflow-x-auto">
            <pre class="text-sm text-green-400"><code># En PostgreSQL
psql -h 10.10.10.100 -U zabbix -d zabbix -c "
SELECT userid, username, COUNT(*) as login_count
FROM sessions s
JOIN users u ON s.userid = u.userid
GROUP BY userid, username
ORDER BY login_count DESC
LIMIT 20;
"</code></pre>
        </div>
    </li>
</ol>

<h3>7.6. Plan de Recuperación ante Desastres</h3>

<h4>Escenario: Caída del Servidor Zabbix</h4>
<div class="bg-slate-50 rounded-lg p-6 my-6 border border-slate-200">
    <h5 class="font-bold text-slate-700 mb-3">Procedimiento de Recuperación</h5>
    <ol class="list-decimal list-inside space-y-3 text-slate-700">
        <li><strong>Detección:</strong> Alerta de servidor offline desde monitorización externa (ping)</li>
        <li><strong>Evaluación:</strong> Acceder físicamente al servidor o vía IPMI/iDRAC</li>
        <li><strong>Diagnóstico:</strong>
            <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Verificar estado de hardware (discos, memoria, fuente)</li>
                <li>Revisar logs del sistema (journalctl -xb)</li>
                <li>Comprobar espacio en disco (df -h)</li>
            </ul>
        </li>
        <li><strong>Recuperación:</strong>
            <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Si es fallo software: Reiniciar servicios (<code>systemctl restart zabbix-server</code>)</li>
                <li>Si es fallo hardware: Reemplazar componente defectuoso</li>
                <li>Si es irreparable: Restaurar desde backup en servidor secundario</li>
            </ul>
        </li>
        <li><strong>Restauración desde backup:</strong>
            <div class="bg-slate-900 rounded p-3 mt-2 overflow-x-auto">
                <pre class="text-sm text-green-400"><code># En servidor secundario
# 1. Instalar Zabbix Server (ver sección 6.3)
# 2. Restaurar base de datos
gunzip -c /backup/zabbix/latest/zabbix_db_*.sql.gz | \
    psql -h 10.10.10.100 -U zabbix zabbix

# 3. Restaurar configuración
cp /backup/zabbix/latest/zabbix_server.conf /etc/zabbix/

# 4. Iniciar servicios
systemctl start zabbix-server</code></pre>
            </div>
        </li>
        <li><strong>Post-recuperación:</strong>
            <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Verificar que todos los hosts están siendo monitorizados</li>
                <li>Actualizar DNS si cambió la IP del servidor</li>
                <li>Documentar incidente y lecciones aprendidas</li>
            </ul>
        </li>
    </ol>
</div>

<h4>RTO y RPO Objetivos</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Métrica</th>
            <th class="border border-slate-200 p-3 text-left">Objetivo</th>
            <th class="border border-slate-200 p-3 text-left">Cómo se Cumple</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3"><strong>RTO (Recovery Time Objective)</strong></td>
            <td class="border border-slate-200 p-3">4 horas</td>
            <td class="border border-slate-200 p-3">Backup de configuración + procedimientos documentados</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3"><strong>RPO (Recovery Point Objective)</strong></td>
            <td class="border border-slate-200 p-3">1 hora</td>
            <td class="border border-slate-200 p-3">Backups de BD cada 6 horas + WAL archiving</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📋</span>
        <span>Actividad para el Alumnado</span>
    </div>
    <p>
        Como parte de la administración del sistema, deberás:
    </p>
    <ol class="list-decimal list-inside space-y-2 mt-3">
        <li>Completar el checklist diario durante 5 días consecutivos.</li>
        <li>Ejecutar y documentar el procedimiento de backup completo.</li>
        <li>Simular una incidencia y seguir el procedimiento de troubleshooting.</li>
        <li>Crear un informe de tendencias semanales con datos reales de tu despliegue.</li>
    </ol>
</div>
`;
