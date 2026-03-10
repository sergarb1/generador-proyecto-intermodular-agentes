window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.herramientas = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🛠️</span>
        <span>Herramientas de Apoyo y Recursos Complementarios</span>
    </div>
    <p>
        Esta sección recopila herramientas, scripts y recursos adicionales que facilitan 
        la implementación, operación y mantenimiento del sistema de monitorización.
    </p>
</div>

<h3>8.1. Scripts de Automatización</h3>

<h4>Script de Despliegue Masivo de Agentes Windows</h4>
<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <pre class="text-sm text-green-400"><code># deploy-agents-windows.ps1
# Script PowerShell para desplegar agente Zabbix en múltiples equipos Windows

param(
    [string]$ZabbixServer = "10.10.10.50",
    [string]$PSKIdentity = "ZabbixAgent2025",
    [string]$PSKSecret = "ZabbixPSK_2025_SecretKey_12345",
    [string]$ComputerList = "computers.txt"
)

# Leer lista de equipos
$computers = Get-Content $ComputerList

foreach ($computer in $computers) {
    Write-Host "Desplegando en $computer..." -ForegroundColor Cyan
    
    try {
        # Copiar instalador
        Copy-Item ".\zabbix_agent2.msi" "\\$computer\C$\Windows\Temp\" -ErrorAction Stop
        
        # Instalar remotamente
        Invoke-Command -ComputerName $computer -ScriptBlock {
            $msiPath = "C:\Windows\Temp\zabbix_agent2.msi"
            $server = using:ZabbixServer
            $pskId = using:PSKIdentity
            $pskSecret = using:PSKSecret
            
            # Instalar MSI
            Start-Process msiexec.exe -Wait -ArgumentList "/i $msiPath /qn SERVER=$server SERVERACTIVE=$server HOSTNAME=$env:COMPUTERNAME PSK_IDENTITY=$pskId PSK_SECRET=$pskSecret"
            
            # Configurar firewall
            netsh advfirewall firewall add rule name="Zabbix Agent" dir=in action=allow protocol=TCP localport=10050
            
            # Reiniciar servicio
            Restart-Service ZabbixAgent2 -Force
            
            # Limpiar
            Remove-Item $msiPath -Force
        } -ErrorAction Stop
        
        Write-Host "✓ $computer completado" -ForegroundColor Green
    }
    catch {
        Write-Host "✗ Error en $computer : $_" -ForegroundColor Red
    }
}

Write-Host "Despliegue finalizado." -ForegroundColor Cyan</code></pre>
</div>

<h4>Script de Inventario de Hardware</h4>
<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <pre class="text-sm text-green-400"><code># hardware-inventory.sh
# Script Bash para recopilar información de hardware en Linux

#!/bin/bash

OUTPUT_DIR="/tmp/hardware_inventory"
DATE=$(date +%Y%m%d)
HOSTNAME=$(hostname -f)

mkdir -p $OUTPUT_DIR

echo "=== Inventario de Hardware ===" > $OUTPUT_DIR/${HOSTNAME}_${DATE}.txt
echo "Fecha: $(date)" >> $OUTPUT_DIR/${HOSTNAME}_${DATE}.txt
echo "Hostname: $HOSTNAME" >> $OUTPUT_DIR/${HOSTNAME}_${DATE}.txt
echo "" >> $OUTPUT_DIR/${HOSTNAME}_${DATE}.txt

echo "=== CPU ===" >> $OUTPUT_DIR/${HOSTNAME}_${DATE}.txt
lscpu | grep -E "Model name|CPU\(s\)|Core\(s\)|Thread\(s\)" >> $OUTPUT_DIR/${HOSTNAME}_${DATE}.txt
echo "" >> $OUTPUT_DIR/${HOSTNAME}_${DATE}.txt

echo "=== Memoria RAM ===" >> $OUTPUT_DIR/${HOSTNAME}_${DATE}.txt
free -h >> $OUTPUT_DIR/${HOSTNAME}_${DATE}.txt
echo "" >> $OUTPUT_DIR/${HOSTNAME}_${DATE}.txt

echo "=== Discos ===" >> $OUTPUT_DIR/${HOSTNAME}_${DATE}.txt
lsblk -o NAME,SIZE,TYPE,MOUNTPOINT >> $OUTPUT_DIR/${HOSTNAME}_${DATE}.txt
echo "" >> $OUTPUT_DIR/${HOSTNAME}_${DATE}.txt

echo "=== Sistema Operativo ===" >> $OUTPUT_DIR/${HOSTNAME}_${DATE}.txt
cat /etc/os-release | grep -E "PRETTY_NAME|VERSION=" >> $OUTPUT_DIR/${HOSTNAME}_${DATE}.txt
echo "" >> $OUTPUT_DIR/${HOSTNAME}_${DATE}.txt

echo "=== Red ===" >> $OUTPUT_DIR/${HOSTNAME}_${DATE}.txt
ip addr show | grep -E "inet |link/ether" >> $OUTPUT_DIR/${HOSTNAME}_${DATE}.txt

echo "Inventario guardado en: $OUTPUT_DIR/${HOSTNAME}_${DATE}.txt"</code></pre>
</div>

<h4>Script de Verificación de Conectividad</h4>
<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <pre class="text-sm text-green-400"><code># check-connectivity.py
# Script Python para verificar conectividad con agentes Zabbix

import subprocess
import sys
from datetime import datetime

def check_zabbix_get(host, key="system.hostname"):
    """Ejecuta zabbix_get y devuelve el resultado"""
    try:
        result = subprocess.run(
            ["zabbix_get", "-s", host, "-k", key],
            capture_output=True,
            text=True,
            timeout=5
        )
        if result.returncode == 0:
            return True, result.stdout.strip()
        else:
            return False, result.stderr.strip()
    except subprocess.TimeoutExpired:
        return False, "Timeout"
    except Exception as e:
        return False, str(e)

def main():
    if len(sys.argv) < 2:
        print("Uso: python check-connectivity.py <host1> [host2] ...")
        sys.exit(1)
    
    hosts = sys.argv[1:]
    results = []
    
    print(f"Verificando conectividad con {len(hosts)} hosts...")
    print("=" * 60)
    
    for host in hosts:
        success, response = check_zabbix_get(host)
        status = "✓ OK" if success else "✗ FAIL"
        results.append((host, status, response))
        print(f"{status} | {host}: {response}")
    
    print("=" * 60)
    ok_count = sum(1 for _, status, _ in results if status == "✓ OK")
    print(f"Resumen: {ok_count}/{len(hosts)} hosts responden correctamente")
    
    # Guardar reporte
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    with open(f"connectivity_report_{timestamp}.txt", "w") as f:
        f.write(f"Reporte de Conectividad - {datetime.now()}\n")
        f.write("=" * 60 + "\n")
        for host, status, response in results:
            f.write(f"{status} | {host}: {response}\n")
    
    print(f"Reporte guardado: connectivity_report_{timestamp}.txt")

if __name__ == "__main__":
    main()</code></pre>
</div>

<h3>8.2. Plantillas de Documentación</h3>

<h4>Plantilla de Informe de Incidencia</h4>
<div class="bg-slate-50 rounded-lg p-6 my-6 border border-slate-200">
    <h5 class="font-bold text-slate-700 mb-3">INFORME DE INCIDENCIA - IES Serra Perenxisa</h5>
    <table class="w-full border-collapse my-4">
        <tr>
            <td class="border border-slate-200 p-2 font-bold w-40">ID Incidencia:</td>
            <td class="border border-slate-200 p-2"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-2 font-bold">Fecha/Hora:</td>
            <td class="border border-slate-200 p-2"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-2 font-bold">Severidad:</td>
            <td class="border border-slate-200 p-2">□ Desastre □ Alto □ Medio □ Bajo</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-2 font-bold">Equipo Afectado:</td>
            <td class="border border-slate-200 p-2"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-2 font-bold">Ubicación:</td>
            <td class="border border-slate-200 p-2"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-2 font-bold">Descripción:</td>
            <td class="border border-slate-200 p-2"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-2 font-bold">Causa Raíz:</td>
            <td class="border border-slate-200 p-2"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-2 font-bold">Acciones Tomadas:</td>
            <td class="border border-slate-200 p-2"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-2 font-bold">Tiempo Resolución:</td>
            <td class="border border-slate-200 p-2"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-2 font-bold">Técnico:</td>
            <td class="border border-slate-200 p-2"></td>
        </tr>
    </table>
</div>

<h4>Plantilla de Checklist de Despliegue</h4>
<div class="bg-slate-50 rounded-lg p-6 my-6 border border-slate-200">
    <h5 class="font-bold text-slate-700 mb-3">CHECKLIST DE DESPLIEGUE - Zabbix Agent</h5>
    <ul class="space-y-2 my-4">
        <li class="flex items-center gap-3">
            <input type="checkbox" class="w-4 h-4">
            <span class="flex-1">Equipo accesible por red</span>
        </li>
        <li class="flex items-center gap-3 bg-slate-50 p-2 rounded">
            <input type="checkbox" class="w-4 h-4">
            <span class="flex-1">Agente descargado e instalado</span>
        </li>
        <li class="flex items-center gap-3">
            <input type="checkbox" class="w-4 h-4">
            <span class="flex-1">Configuración aplicada (Server, Hostname, PSK)</span>
        </li>
        <li class="flex items-center gap-3 bg-slate-50 p-2 rounded">
            <input type="checkbox" class="w-4 h-4">
            <span class="flex-1">Regla firewall creada (puerto 10050)</span>
        </li>
        <li class="flex items-center gap-3">
            <input type="checkbox" class="w-4 h-4">
            <span class="flex-1">Servicio reiniciado</span>
        </li>
        <li class="flex items-center gap-3 bg-slate-50 p-2 rounded">
            <input type="checkbox" class="w-4 h-4">
            <span class="flex-1">Host creado en Zabbix Server</span>
        </li>
        <li class="flex items-center gap-3">
            <input type="checkbox" class="w-4 h-4">
            <span class="flex-1">Plantilla asignada</span>
        </li>
        <li class="flex items-center gap-3 bg-slate-50 p-2 rounded">
            <input type="checkbox" class="w-4 h-4">
            <span class="flex-1">Datos recibidos correctamente (verificar Latest data)</span>
        </li>
        <li class="flex items-center gap-3">
            <input type="checkbox" class="w-4 h-4">
            <span class="flex-1">Documentación actualizada (inventario)</span>
        </li>
    </ul>
</div>

<h3>8.3. Comandos Útiles de Referencia</h3>

<h4>Comandos Zabbix Server</h4>
<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <pre class="text-sm text-green-400"><code># Ver estado del servidor
systemctl status zabbix-server

# Ver logs en tiempo real
tail -f /var/log/zabbix/zabbix_server.log

# Ver estadísticas internas (desde zabbix_get en localhost)
zabbix_get -s localhost -k zabbix.stats

# Forzar housekeeping (limpieza de datos antiguos)
# En frontend: Administration → General → Housekeeping → Run now

# Ver número de items monitorizados
psql -h 10.10.10.100 -U zabbix -d zabbix -c "SELECT count(*) FROM items;"

# Ver hosts con más items
psql -h 10.10.10.100 -U zabbix -d zabbix -c "
SELECT h.name, count(i.itemid) as item_count
FROM hosts h
JOIN items i ON h.hostid = i.hostid
WHERE h.status = 0
GROUP BY h.name
ORDER BY item_count DESC
LIMIT 10;
"</code></pre>
</div>

<h4>Comandos PostgreSQL para Zabbix</h4>
<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <pre class="text-sm text-green-400"><code># Tamaño total de la base de datos
psql -h 10.10.10.100 -U zabbix -d zabbix -c "SELECT pg_size_pretty(pg_database_size('zabbix'));"

# Top 10 tablas más grandes
psql -h 10.10.10.100 -U zabbix -d zabbix -c "
SELECT tablename, pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC
LIMIT 10;
"

# Número de alertas en las últimas 24 horas
psql -h 10.10.10.100 -U zabbix -d zabbix -c "
SELECT count(*) FROM alerts
WHERE clock > extract(epoch from now()) - 86400;
"

# Hosts con más alertas
psql -h 10.10.10.100 -U zabbix -d zabbix -c "
SELECT h.name, count(a.alertid) as alert_count
FROM hosts h
JOIN functions f ON h.hostid = f.hostid
JOIN triggers t ON f.triggerid = t.triggerid
JOIN alerts a ON t.triggerid = a.triggerid
WHERE a.clock > extract(epoch from now()) - 604800
GROUP BY h.name
ORDER BY alert_count DESC
LIMIT 10;
"</code></pre>
</div>

<h3>8.4. Recursos de Formación</h3>

<h4>Documentación Oficial</h4>
<ul class="space-y-2 my-4">
    <li>
        <a href="https://www.zabbix.com/documentation/7.0" class="text-blue-600 underline" target="_blank">📖 Zabbix 7.0 Documentation</a>
        <p class="text-sm text-slate-600 mt-1">Documentación oficial completa de todas las funcionalidades.</p>
    </li>
    <li>
        <a href="https://www.zabbix.com/documentation/7.0/manual/install/installation" class="text-blue-600 underline" target="_blank">📖 Installation Guide</a>
        <p class="text-sm text-slate-600 mt-1">Guía paso a paso para instalación en diferentes plataformas.</p>
    </li>
    <li>
        <a href="https://www.zabbix.com/documentation/7.0/manual/config" class="text-blue-600 underline" target="_blank">📖 Configuration Guide</a>
        <p class="text-sm text-slate-600 mt-1">Configuración de hosts, items, triggers, dashboards.</p>
    </li>
</ul>

<h4>Vídeos Tutoriales</h4>
<ul class="space-y-2 my-4">
    <li>
        <a href="https://www.youtube.com/c/ZabbixLLC" class="text-blue-600 underline" target="_blank">🎬 Canal Oficial de Zabbix en YouTube</a>
        <p class="text-sm text-slate-600 mt-1">Webinars y tutoriales oficiales del equipo de Zabbix.</p>
    </li>
    <li>
        <a href="https://www.youtube.com/results?search_query=zabbix+tutorial+español" class="text-blue-600 underline" target="_blank">🎬 Tutoriales en Español</a>
        <p class="text-sm text-slate-600 mt-1">Colección de tutoriales en español de la comunidad.</p>
    </li>
</ul>

<h4>Cursos Online</h4>
<ul class="space-y-2 my-4">
    <li>
        <a href="https://learn.zabbix.com/" class="text-blue-600 underline" target="_blank">🎓 Zabbix Learning Platform</a>
        <p class="text-sm text-slate-600 mt-1">Cursos oficiales gratuitos con certificación.</p>
    </li>
    <li>
        <a href="https://www.udemy.com/courses/search/?q=zabbix" class="text-blue-600 underline" target="_blank">🎓 Cursos en Udemy</a>
        <p class="text-sm text-slate-600 mt-1">Cursos de pago con precios frecuentes bajo €15.</p>
    </li>
</ul>

<h4>Comunidad y Soporte</h4>
<ul class="space-y-2 my-4">
    <li>
        <a href="https://www.zabbix.com/forum" class="text-blue-600 underline" target="_blank">💬 Foro Oficial de Zabbix</a>
        <p class="text-sm text-slate-600 mt-1">Comunidad activa para resolver dudas y compartir configuraciones.</p>
    </li>
    <li>
        <a href="https://share.zabbix.com/" class="text-blue-600 underline" target="_blank">📦 Zabbix Share</a>
        <p class="text-sm text-slate-600 mt-1">Repositorio de plantillas creadas por la comunidad.</p>
    </li>
    <li>
        <a href="https://github.com/zabbix/zabbix" class="text-blue-600 underline" target="_blank">💻 GitHub de Zabbix</a>
        <p class="text-sm text-slate-600 mt-1">Código fuente, issues y contribuciones.</p>
    </li>
</ul>

<h3>8.5. Glosario de Términos</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Término</th>
            <th class="border border-slate-200 p-3 text-left">Definición</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Host</td>
            <td class="border border-slate-200 p-3">Equipo o dispositivo monitorizado (servidor, switch, VM, etc.)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Item</td>
            <td class="border border-slate-200 p-3">Métrica específica que se monitoriza de un host (CPU, RAM, etc.)</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Trigger</td>
            <td class="border border-slate-200 p-3">Condición que define cuándo una métrica se considera problemática</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Action</td>
            <td class="border border-slate-200 p-3">Respuesta automática cuando un trigger se activa (notificación, script, etc.)</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Template</td>
            <td class="border border-slate-200 p-3">Conjunto predefinido de items, triggers y gráficos aplicable a múltiples hosts</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Proxy</td>
            <td class="border border-slate-200 p-3">Servidor intermedio que recoge datos de hosts y los envía al server central</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">PSK</td>
            <td class="border border-slate-200 p-3">Pre-Shared Key, método de cifrado para comunicaciones agente-server</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Housekeeper</td>
            <td class="border border-slate-200 p-3">Proceso que elimina datos antiguos según políticas de retención</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📁</span>
        <span>Repositorio de Scripts</span>
    </div>
    <p>
        Todos los scripts mencionados en esta sección están disponibles en la carpeta 
        <code>scripts/</code> del proyecto. Modifícalos según las necesidades específicas 
        de tu entorno y documenta los cambios realizados.
    </p>
</div>
`;
