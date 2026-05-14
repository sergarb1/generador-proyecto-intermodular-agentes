window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.herramientas = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🛠️</span> Objetivo de esta Sección
    </div>
    <p>Esta sección enumera y describe todas las herramientas utilizadas durante el proyecto, tanto hardware como software. Debes explicar el propósito de cada una y por qué fue seleccionada.</p>
</div>

<h3>8.1. Herramientas de Virtualización</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <div class="flex items-center gap-3 mb-3">
            <span class="text-2xl">🖥️</span>
            <div>
                <h4 class="font-bold text-blue-800">Proxmox VE</h4>
                <span class="text-xs text-slate-500">Hipervisor Tipo 1</span>
            </div>
        </div>
        <p class="text-sm text-slate-600">Plataforma de virtualización open source para alojar todas las máquinas virtuales del proyecto: pfSense, Wazuh, ELK, OpenVAS, servidores Ubuntu. Soporta snapshots, backups integrados y clustering.</p>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <div class="flex items-center gap-3 mb-3">
            <span class="text-2xl">📦</span>
            <div>
                <h4 class="font-bold text-green-800">VirtualBox</h4>
                <span class="text-xs text-slate-500">Hipervisor Tipo 2</span>
            </div>
        </div>
        <p class="text-sm text-slate-600">Alternativa para entornos de pruebas y desarrollo. Útil para hacer pruebas de concepto antes de desplegar en producción sobre Proxmox.</p>
    </div>
</div>

<h3>8.2. Herramientas de Seguridad</h3>
<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold">Herramienta</th>
            <th class="p-4 text-left font-bold">Función</th>
            <th class="p-4 text-left font-bold">Tipo</th>
            <th class="p-4 text-left font-bold">Web</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">Wazuh</td>
            <td class="p-4">SIEM / HIDS / FIM</td>
            <td class="p-4">Open Source</td>
            <td class="p-4">wazuh.com</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">pfSense</td>
            <td class="p-4">Firewall / Router / VPN</td>
            <td class="p-4">Open Source</td>
            <td class="p-4">pfsense.org</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">Suricata</td>
            <td class="p-4">IDS / IPS</td>
            <td class="p-4">Open Source</td>
            <td class="p-4">suricata.io</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">OpenVAS (Greenbone)</td>
            <td class="p-4">Escáner de vulnerabilidades</td>
            <td class="p-4">Open Source</td>
            <td class="p-4">greenbone.net</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">ClamAV</td>
            <td class="p-4">Antivirus</td>
            <td class="p-4">Open Source</td>
            <td class="p-4">clamav.net</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">rkhunter</td>
            <td class="p-4">Detección rootkits</td>
            <td class="p-4">Open Source</td>
            <td class="p-4">rkhunter.sourceforge.net</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">Fail2ban</td>
            <td class="p-4">Protección fuerza bruta</td>
            <td class="p-4">Open Source</td>
            <td class="p-4">fail2ban.org</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">Ansible</td>
            <td class="p-4">Automatización / Hardening</td>
            <td class="p-4">Open Source</td>
            <td class="p-4">ansible.com</td>
        </tr>
    </tbody>
</table>

<h3>8.3. Herramientas de Auditoría y Testing</h3>
<p>Para validar la seguridad del sistema, utiliza estas herramientas de pruebas:</p>
<ul class="list-disc pl-6 space-y-2 my-6">
    <li><strong>nmap / Zenmap:</strong> Escaneo de puertos y detección de servicios en todas las VLANs para verificar segmentación</li>
    <li><strong>Metasploit Framework:</strong> Simulación de ataques controlados para probar la efectividad del IDS/IPS</li>
    <li><strong>Wireshark:</strong> Captura y análisis de tráfico de red para verificar cifrado TLS y ausencia de datos en plano</li>
    <li><strong>Hydra / John the Ripper:</strong> Pruebas de fuerza bruta contra servicios expuestos para validar políticas de contraseñas</li>
    <li><strong>Nikto:</strong> Escaneo de vulnerabilidades web en el portal de pacientes</li>
    <li><strong>Lynis:</strong> Auditoría de seguridad de sistemas Linux para verificar el hardening aplicado</li>
</ul>

<h3>8.4. Herramientas de Documentación</h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <span class="text-2xl block mb-2">📐</span>
        <h4 class="font-bold text-slate-800 mb-2">draw.io</h4>
        <p class="text-sm text-slate-600">Diagramas de red profesionales gratuitos</p>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <span class="text-2xl block mb-2">🐙</span>
        <h4 class="font-bold text-slate-800 mb-2">Git + GitHub</h4>
        <p class="text-sm text-slate-600">Control de versiones de configuraciones y scripts</p>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <span class="text-2xl block mb-2">📝</span>
        <h4 class="font-bold text-slate-800 mb-2">Markdown / HTML</h4>
        <p class="text-sm text-slate-600">Documentación técnica del proyecto</p>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Completa esta sección:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Añade capturas de pantalla de cada herramienta utilizada</li>
        <li>Para cada herramienta, indica la versión concreta que has usado</li>
        <li>Incluye el output de comandos como nmap, suricata o wazuh-agent -v</li>
        <li>Amplía con herramientas específicas que hayas usado adicionalmente (ej: Docker, Terraform, etc.)</li>
        <li>Explica cómo configuraste cada herramienta con capturas de los paneles de administración</li>
    </ul>
</div>
`;
