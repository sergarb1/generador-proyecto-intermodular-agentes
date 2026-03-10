window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.diseno = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🎨</span>
        <span>Diseño de la Arquitectura del Sistema</span>
    </div>
    <p>
        Esta sección describe la arquitectura técnica, componentes y diagramas del sistema de 
        monitorización propuesto para el IES Serra Perenxisa.
    </p>
</div>

<h3>5.1. Arquitectura General</h3>
<p>
    El sistema sigue una arquitectura <strong>cliente-servidor distribuida</strong> con los 
    siguientes componentes principales:
</p>

<div class="bg-slate-50 rounded-xl p-8 my-8 border border-slate-200">
    <h4 class="text-center font-bold text-slate-600 mb-4">Diagrama de Arquitectura</h4>
    <div class="bg-white rounded-lg p-6 border border-slate-200">
        <pre class="text-sm overflow-x-auto text-slate-700">
┌─────────────────────────────────────────────────────────────────────────┐
│                         CAPA DE PRESENTACIÓN                            │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│  │   Dashboard │  │  Dashboards │  │   Alertas   │  │   Reportes  │   │
│  │   Principal │  │ Personalizados│  │  Telegram   │  │    PDF      │   │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
                                   ▲
                                   │ HTTPS (443)
                                   ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                        CAPA DE APLICACIÓN                               │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                    Zabbix Server 7.0 LTS                        │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────────┐ │   │
│  │  │ Pollers  │  │ Trappers │  │ Alerters │  │ Housekeeper      │ │   │
│  │  │   (10)   │  │   (2)    │  │   (4)    │  │                  │ │   │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────────────┘ │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                    Zabbix Proxy (Opcional)                      │   │
│  │                    Para distribución de carga                   │   │
│  └─────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
                                   ▲
                                   │ TCP 10050/10051, SNMP, IPMI
                                   ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                          CAPA DE AGENTES                                │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐ │
│  │  Zabbix  │  │  Zabbix  │  │   SNMP   │  │   SNMP   │  │   ICMP   │ │
│  │  Agent 2 │  │  Agent 2 │  │  Device  │  │  Device  │  │   Ping   │ │
│  │ Windows  │  │  Linux   │  │ Switches │  │ Printers │  │  Hosts   │ │
│  │  (280)   │  │  (120)   │  │  (15)    │  │   (8)    │  │  (400)   │ │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
                                   ▲
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         CAPA DE DATOS                                   │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │              PostgreSQL 15 + TimescaleDB (Opcional)             │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │   │
│  │  │   History    │  │   Trends     │  │ Configuration │          │   │
│  │  │   (1 año)    │  │  (5 años)    │  │   (Persist.)  │          │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘          │   │
│  └─────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
        </pre>
    </div>
</div>

<h3>5.2. Componentes del Sistema</h3>

<h4>Zabbix Server</h4>
<p>
    El componente central que procesa toda la información de monitorización. Se ejecuta en el 
    servidor secundario del centro con las siguientes características:
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Parámetro</th>
            <th class="border border-slate-200 p-3 text-left">Configuración</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Servidor</td>
            <td class="border border-slate-200 p-3">Intel Xeon E-2224, 32GB RAM, 1TB SSD</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Sistema Operativo</td>
            <td class="border border-slate-200 p-3">Ubuntu Server 22.04 LTS</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Procesos Poller</td>
            <td class="border border-slate-200 p-3">10 (para 400 hosts)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Procesos Trapper</td>
            <td class="border border-slate-200 p-3">2 (para datos push de agentes)</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Procesos Alerter</td>
            <td class="border border-slate-200 p-3">4 (para notificaciones paralelas)</td>
        </tr>
    </tbody>
</table>

<h4>Base de Datos PostgreSQL</h4>
<p>
    Almacena toda la información de configuración, histórico y tendencias. Se ejecuta en el 
    servidor principal para aprovechar su mayor capacidad de almacenamiento:
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Parámetro</th>
            <th class="border border-slate-200 p-3 text-left">Configuración</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Servidor</td>
            <td class="border border-slate-200 p-3">Intel Xeon E-2246G, 64GB RAM, 2TB SSD RAID1</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Versión</td>
            <td class="border border-slate-200 p-3">PostgreSQL 15</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">shared_buffers</td>
            <td class="border border-slate-200 p-3">16GB (25% de RAM)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">work_mem</td>
            <td class="border border-slate-200 p-3">256MB</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Retención History</td>
            <td class="border border-slate-200 p-3">365 días (datos detallados)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Retención Trends</td>
            <td class="border border-slate-200 p-3">1825 días (5 años, datos hourly)</td>
        </tr>
    </tbody>
</table>

<h4>Zabbix Agent 2</h4>
<p>
    Agente ligero instalado en cada equipo monitorizado. Recopila métricas locales y las envía 
    al servidor Zabbix:
</p>
<ul class="space-y-2 my-4">
    <li><strong>Versión:</strong> Zabbix Agent 2.0 (Go-based, más eficiente)</li>
    <li><strong>Puerto:</strong> 10050/TCP</li>
    <li><strong>Modo:</strong> Activo (push) para reducir reglas firewall</li>
    <li><strong>Cifrado:</strong> PSK (Pre-Shared Key) para todas las comunicaciones</li>
</ul>

<h4>Frontend Web</h4>
<p>
    Interfaz basada en PHP que se ejecuta sobre Apache con PHP-FPM:
</p>
<ul class="space-y-2 my-4">
    <li><strong>Web Server:</strong> Apache 2.4 con mod_php</li>
    <li><strong>PHP:</strong> 8.1+ con extensiones gd, bcmath, mbstring, pgsql</li>
    <li><strong>SSL:</strong> Let's Encrypt con renovación automática</li>
    <li><strong>Acceso:</strong> https://monitorizacion.iesperenxisa.es</li>
</ul>

<h3>5.3. Diseño de Red</h3>

<h4>Segmentación VLAN</h4>
<p>
    Para seguridad y gestión eficiente, el tráfico de monitorización se segmenta:
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">VLAN</th>
            <th class="border border-slate-200 p-3 text-left">Nombre</th>
            <th class="border border-slate-200 p-3 text-left">Subred</th>
            <th class="border border-slate-200 p-3 text-left">Equipos</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">10</td>
            <td class="border border-slate-200 p-3">MGMT</td>
            <td class="border border-slate-200 p-3">10.10.10.0/24</td>
            <td class="border border-slate-200 p-3">Servidores, switches gestionados</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">20</td>
            <td class="border border-slate-200 p-3">AULAS</td>
            <td class="border border-slate-200 p-3">10.10.20.0/23</td>
            <td class="border border-slate-200 p-3">Equipos de aulas de informática</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">30</td>
            <td class="border border-slate-200 p-3">LABORATORIOS</td>
            <td class="border border-slate-200 p-3">10.10.30.0/24</td>
            <td class="border border-slate-200 p-3">Equipos de laboratorios especializados</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">40</td>
            <td class="border border-slate-200 p-3">DESACHOS</td>
            <td class="border border-slate-200 p-3">10.10.40.0/24</td>
            <td class="border border-slate-200 p-3">Equipos de profesorado y administración</td>
        </tr>
    </tbody>
</table>

<h4>Reglas Firewall</h4>
<p>
    El firewall del centro debe permitir el tráfico de monitorización:
</p>
<div class="bg-slate-900 rounded-lg p-4 my-4 overflow-x-auto">
    <pre class="text-sm text-green-400"><code># Reglas para Zabbix Server (10.10.10.50)
iptables -A INPUT -p tcp --dport 10050 -s 10.10.0.0/16 -j ACCEPT
iptables -A INPUT -p tcp --dport 10051 -s 10.10.0.0/16 -j ACCEPT
iptables -A INPUT -p udp --dport 161 -s 10.10.0.0/16 -j ACCEPT  # SNMP
iptables -A INPUT -p icmp --icmp-type echo-request -j ACCEPT

# Reglas para PostgreSQL (10.10.10.100)
iptables -A INPUT -p tcp --dport 5432 -s 10.10.10.50 -j ACCEPT  # Solo Zabbix</code></pre>
</div>

<h3>5.4. Diseño de Alertas</h3>

<h4>Niveles de Severidad</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Nivel</th>
            <th class="border border-slate-200 p-3 text-left">Color</th>
            <th class="border border-slate-200 p-3 text-left">Notificación</th>
            <th class="border border-slate-200 p-3 text-left">Ejemplo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Desastre</td>
            <td class="border border-slate-200 p-3"><span class="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">ROJO</span></td>
            <td class="border border-slate-200 p-3">Email + Telegram (inmediato)</td>
            <td class="border border-slate-200 p-3">Servidor caído, aula completa offline</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Alto</td>
            <td class="border border-slate-200 p-3"><span class="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">NARANJA</span></td>
            <td class="border border-slate-200 p-3">Email + Telegram (5 min)</td>
            <td class="border border-slate-200 p-3">CPU >95%, Disco >95%</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Medio</td>
            <td class="border border-slate-200 p-3"><span class="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">AMARILLO</span></td>
            <td class="border border-slate-200 p-3">Email (resumen hourly)</td>
            <td class="border border-slate-200 p-3">CPU >80%, RAM >90%</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Bajo</td>
            <td class="border border-slate-200 p-3"><span class="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">AZUL</span></td>
            <td class="border border-slate-200 p-3">Solo dashboard</td>
            <td class="border border-slate-200 p-3">CPU >70%, advertencias</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Informativo</td>
            <td class="border border-slate-200 p-3"><span class="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">VERDE</span></td>
            <td class="border border-slate-200 p-3">Solo logs</td>
            <td class="border border-slate-200 p-3">Backup completado, agente reiniciado</td>
        </tr>
    </tbody>
</table>

<h4>Flujo de Escalado</h4>
<div class="bg-slate-50 rounded-lg p-6 my-6 border border-slate-200">
    <pre class="text-sm text-slate-700">
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  Detectada  │───▶│  Notificada │───▶│  No ack en  │───▶│  Escalada   │
│   Alerta    │    │   Técnico   │    │   30 min    │    │  Supervisor │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                          │
                          ▼
                   ┌─────────────┐
                   │  Resuelta   │
                   │   y Cierre  │
                   └─────────────┘
    </pre>
</div>

<h3>5.5. Diseño de Dashboards</h3>

<h4>Dashboard Principal (NOC View)</h4>
<p>
    Vista global del estado del centro, diseñada para mostrarse en una pantalla en el 
    departamento de informática:
</p>
<ul class="space-y-2 my-4">
    <li><strong>Mapa de calor:</strong> Vista por aulas con colores según estado (verde/amarillo/rojo)</li>
    <li><strong>Contadores:</strong> Total equipos, online, offline, con alertas</li>
    <li><strong>Top 5 problemas:</strong> Equipos con más alertas en las últimas 24h</li>
    <li><strong>Gráfico de tendencia:</strong> Evolución de incidencias semanales</li>
</ul>

<h4>Dashboard Técnico</h4>
<p>
    Vista detallada para el equipo de mantenimiento:
</p>
<ul class="space-y-2 my-4">
    <li><strong>Lista de alertas activas:</strong> Con tiempo de evolución y severidad</li>
    <li><strong>Rendimiento global:</strong> CPU, RAM, disco promedio del parque</li>
    <li><strong>Equipos sin agente:</strong> Detectados por ping pero sin agente instalado</li>
    <li><strong>Próximos mantenimientos:</strong> Equipos con alertas recurrentes</li>
</ul>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📐</span>
        <span>Actividad para el Alumnado</span>
    </div>
    <p>
        Como parte de la implementación, deberás:
    </p>
    <ol class="list-decimal list-inside space-y-2 mt-3">
        <li>Dibujar un diagrama de red detallado con las IPs reales de tu entorno.</li>
        <li>Configurar al menos 3 dashboards personalizados en Zabbix.</li>
        <li>Documentar las reglas firewall específicas de tu infraestructura.</li>
        <li>Crear un mapa de red en Zabbix con la distribución física de los equipos.</li>
    </ol>
</div>
`;
