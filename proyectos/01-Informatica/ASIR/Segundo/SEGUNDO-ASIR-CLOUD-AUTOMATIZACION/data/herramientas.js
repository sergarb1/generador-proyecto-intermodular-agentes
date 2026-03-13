window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["herramientas"] = `

<div class="callout callout-info">
    <div class="callout-title"><span>🛠️</span><span>Herramientas de Apoyo</span></div>
    <p class="text-sm">Presenta las herramientas software utilizadas durante el proyecto, clasificadas por categoría y con justificación de su selección.</p>
</div>

<h3>8.1. Herramientas de Desarrollo y Automatización</h3>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Herramienta</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Categoría</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Uso en el Proyecto</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Licencia</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Visual Studio Code / Vim</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Editor de código</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Desarrollo de scripts Bash</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">Freeware/Open Source</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Git + GitHub</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Control de versiones</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Versionado de scripts y documentación</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">Open Source</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Bash 5.x</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Shell scripting</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Automatización de tareas del sistema y backups</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">Open Source</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">AWS CLI v2</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Línea de comandos cloud</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Gestión de recursos AWS desde terminal</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-bold">Propietario</span></td>
        </tr>
    </tbody>
</table>

<h3>8.2. Herramientas de Infraestructura</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200">
        <h4 class="font-bold text-orange-800 mb-4 flex items-center gap-2"><span>☁️</span>AWS Console</h4>
        <p class="text-sm text-slate-600 mb-4">Interfaz web para gestión de recursos cloud.</p>
        <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-white rounded text-xs font-semibold text-slate-600">EC2</span>
            <span class="px-2 py-1 bg-white rounded text-xs font-semibold text-slate-600">S3</span>
            <span class="px-2 py-1 bg-white rounded text-xs font-semibold text-slate-600">VPC</span>
            <span class="px-2 py-1 bg-white rounded text-xs font-semibold text-slate-600">IAM</span>
            <span class="px-2 py-1 bg-white rounded text-xs font-semibold text-slate-600">CloudWatch</span>
        </div>
    </div>
    <div class="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
        <h4 class="font-bold text-green-800 mb-4 flex items-center gap-2"><span>🖥️</span>Proxmox VE</h4>
        <p class="text-sm text-slate-600 mb-4">Plataforma de virtualización open-source.</p>
        <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-white rounded text-xs font-semibold text-slate-600">KVM</span>
            <span class="px-2 py-1 bg-white rounded text-xs font-semibold text-slate-600">LXC</span>
            <span class="px-2 py-1 bg-white rounded text-xs font-semibold text-slate-600">ZFS</span>
            <span class="px-2 py-1 bg-white rounded text-xs font-semibold text-slate-600">HA Cluster</span>
        </div>
    </div>
    <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
        <h4 class="font-bold text-blue-800 mb-4 flex items-center gap-2"><span>🔐</span>OpenVPN</h4>
        <p class="text-sm text-slate-600 mb-4">Software de VPN de código abierto.</p>
        <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-white rounded text-xs font-semibold text-slate-600">SSL/TLS</span>
            <span class="px-2 py-1 bg-white rounded text-xs font-semibold text-slate-600">TUN/TAP</span>
            <span class="px-2 py-1 bg-white rounded text-xs font-semibold text-slate-600">NAT</span>
        </div>
    </div>
    <div class="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
        <h4 class="font-bold text-purple-800 mb-4 flex items-center gap-2"><span>🔥</span>pfSense/OPNsense</h4>
        <p class="text-sm text-slate-600 mb-4">Firewall y router basado en FreeBSD.</p>
        <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-white rounded text-xs font-semibold text-slate-600">Firewall</span>
            <span class="px-2 py-1 bg-white rounded text-xs font-semibold text-slate-600">VPN</span>
            <span class="px-2 py-1 bg-white rounded text-xs font-semibold text-slate-600">IDS/IPS</span>
        </div>
    </div>
</div>

<h3>8.3. Herramientas de Monitorización</h3>

<h4>8.3.1. Stack Prometheus + Grafana</h4>

<div class="p-6 bg-slate-50 rounded-2xl border-2 border-slate-200 my-6">
    <h5 class="font-bold text-slate-800 mb-4">Arquitectura del Stack de Monitorización</h5>
    
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="p-4 bg-white rounded-xl border border-slate-200 text-center">
            <span class="text-3xl mb-2 block">📈</span>
            <h6 class="font-bold text-sm text-slate-700">Prometheus</h6>
            <p class="text-xs text-slate-500 mt-1">Recolección de métricas time-series</p>
        </div>
        <div class="p-4 bg-white rounded-xl border border-slate-200 text-center">
            <span class="text-3xl mb-2 block">📊</span>
            <h6 class="font-bold text-sm text-slate-700">Grafana</h6>
            <p class="text-xs text-slate-500 mt-1">Visualización y dashboards</p>
        </div>
        <div class="p-4 bg-white rounded-xl border border-slate-200 text-center">
            <span class="text-3xl mb-2 block">🔔</span>
            <h6 class="font-bold text-sm text-slate-700">Alertmanager</h6>
            <p class="text-xs text-slate-500 mt-1">Gestión y enrutamiento de alertas</p>
        </div>
        <div class="p-4 bg-white rounded-xl border border-slate-200 text-center">
            <span class="text-3xl mb-2 block">📤</span>
            <h6 class="font-bold text-sm text-slate-700">Exporters</h6>
            <p class="text-xs text-slate-500 mt-1">Node, MySQL, Blackbox</p>
        </div>
    </div>
</div>

<h4>8.3.2. Dashboards Implementados</h4>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Dashboard</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Métricas Principales</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">ID Grafana</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">Vista General del Sistema</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">CPU, Memoria, Disco, Red</td>
            <td class="border border-slate-300 px-4 py-3 font-mono text-xs">1860</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">Rendimiento AWS EC2</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">CloudWatch metrics, status checks</td>
            <td class="border border-slate-300 px-4 py-3 font-mono text-xs">13407</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">PostgreSQL Database</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Connections, queries/sec, replication lag</td>
            <td class="border border-slate-300 px-4 py-3 font-mono text-xs">9628</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">Estado de la VPN</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Túnel up/down, throughput, errores</td>
            <td class="border border-slate-300 px-4 py-3 font-mono text-xs">Custom</td>
        </tr>
    </tbody>
</table>

<h3>8.4. Herramientas de Documentación</h3>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
        <h5 class="font-bold text-slate-800 mb-3 flex items-center gap-2"><span>📝</span>Markdown + Git</h5>
        <p class="text-sm text-slate-600">Documentación técnica versionada junto con el código.</p>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
        <h5 class="font-bold text-slate-800 mb-3 flex items-center gap-2"><span>🎨</span>draw.io / Excalidraw</h5>
        <p class="text-sm text-slate-600">Diagramas de arquitectura y flujos de datos.</p>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
        <h5 class="font-bold text-slate-800 mb-3 flex items-center gap-2"><span>📸</span>OBS Studio</h5>
        <p class="text-sm text-slate-600">Capturas de pantalla y grabación de demostraciones.</p>
    </div>
</div>

<h3>8.5. Comparativa de Herramientas Evaluadas</h3>

<p>Durante el proyecto se evaluaron múltiples herramientas. Esta tabla muestra el análisis comparativo:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Necesidad</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Opción A</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Opción B</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Seleccionada</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Justificación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 text-sm font-semibold">Virtualización</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">VMware vSphere</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Proxmox VE</td>
            <td class="border border-slate-300 px-4 py-3 font-bold text-green-700">Proxmox</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Open source, sin coste de licencia, KVM+LXC</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 text-sm font-semibold">Monitorización</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Nagios</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Prometheus+Grafana</td>
            <td class="border border-slate-300 px-4 py-3 font-bold text-green-700">Prometheus</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Nativo para cloud, mejor integración con AWS</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 text-sm font-semibold">VPN</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">WireGuard</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">OpenVPN</td>
            <td class="border border-slate-300 px-4 py-3 font-bold text-green-700">OpenVPN</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Más documentación, mejor soporte NAT traversal</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 text-sm font-semibold">Automatización</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Ansible</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Scripts Python/Bash</td>
            <td class="border border-slate-300 px-4 py-3 font-bold text-green-700">Scripts</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Menor curva de aprendizaje para este alcance</td>
        </tr>
    </tbody>
</table>

<h3>8.6. Requisitos Hardware para el Proyecto</h3>

<div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 my-6">
    <h5 class="font-bold text-slate-800 mb-4">Servidor Local (CPD MediConnect)</h5>
    <table class="w-full text-sm">
        <tbody>
            <tr class="border-b border-slate-200">
                <td class="py-2 font-semibold w-48">Procesador</td>
                <td class="py-2">AMD EPYC 7302 o Intel Xeon Silver 4210 (16 cores mínimo)</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-2 font-semibold">RAM</td>
                <td class="py-2">64 GB DDR4 ECC (expandible a 128 GB)</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-2 font-semibold">Almacenamiento</td>
                <td class="py-2">2x 480GB SSD NVMe (RAID 1) + 4x 4TB HDD (RAID 10)</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-2 font-semibold">Red</td>
                <td class="py-2">2x 1GbE + 1x 10GbE SFP+ (para tráfico de almacenamiento)</td>
            </tr>
            <tr>
                <td class="py-2 font-semibold">PSU</td>
                <td class="py-2">Redundante 80+ Gold</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="callout callout-info">
    <div class="callout-title"><span>💡</span><span>Nota sobre Hardware</span></div>
    <p class="text-sm m-0">Para el desarrollo del proyecto académico, puedes utilizar hardware simulado (máquinas virtuales locales con VirtualBox/VMware) o la free tier de AWS. El hardware listado arriba es el que se usaría en producción real.</p>
</div>

`;
