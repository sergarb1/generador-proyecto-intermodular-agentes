window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.herramientas = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🛠️</span> Objetivo de esta Sección
    </div>
    <p>Documentarás las herramientas utilizadas durante el proyecto. Esto demuestra tu capacidad para trabajar con entornos profesionales.</p>
</div>

<h3>8.1. Inventario de Herramientas</h3>
<p>Clasifica las herramientas por categoría:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Herramienta</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Versión</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Propósito</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Alternativas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Proxmox VE</td>
            <td class="p-4 border border-slate-200 text-sm">8.x</td>
            <td class="p-4 border border-slate-200 text-sm">Virtualización on-premise</td>
            <td class="p-4 border border-slate-200 text-sm">VMware ESXi, Hyper-V</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">pfSense</td>
            <td class="p-4 border border-slate-200 text-sm">2.7.x</td>
            <td class="p-4 border border-slate-200 text-sm">Firewall y VPN</td>
            <td class="p-4 border border-slate-200 text-sm">OPNsense, Fortigate</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Microsoft Azure</td>
            <td class="p-4 border border-slate-200 text-sm">-</td>
            <td class="p-4 border border-slate-200 text-sm">Cloud público</td>
            <td class="p-4 border border-slate-200 text-sm">AWS, Google Cloud</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Proxmox Backup Server</td>
            <td class="p-4 border border-slate-200 text-sm">3.x</td>
            <td class="p-4 border border-slate-200 text-sm">Backups incrementales</td>
            <td class="p-4 border border-slate-200 text-sm">Veeam, Nakivo</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">PowerShell</td>
            <td class="p-4 border border-slate-200 text-sm">7.x</td>
            <td class="p-4 border border-slate-200 text-sm">Automatización Azure</td>
            <td class="p-4 border border-slate-200 text-sm">Azure CLI, Bash</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Wireshark</td>
            <td class="p-4 border border-slate-200 text-sm">4.x</td>
            <td class="p-4 border border-slate-200 text-sm">Análisis de tráfico</td>
            <td class="p-4 border border-slate-200 text-sm">tcpdump, Fiddler</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">draw.io</td>
            <td class="p-4 border border-slate-200 text-sm">-</td>
            <td class="p-4 border border-slate-200 text-sm">Diagramas de red</td>
            <td class="p-4 border border-slate-200 text-sm">Lucidchart, Visio</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Git</td>
            <td class="p-4 border border-slate-200 text-sm">2.x</td>
            <td class="p-4 border border-slate-200 text-sm">Control de versiones</td>
            <td class="p-4 border border-slate-200 text-sm">SVN, Mercurial</td>
        </tr>
    </tbody>
</table>

<h3>8.2. Control de Versiones con Git</h3>
<p>Documenta tu uso de Git:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>🎯</span> Buenas Prácticas Git
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Commits atómicos:</strong> Un cambio = un commit</li>
        <li><strong>Mensajes descriptivos:</strong> Explica QUÉ y POR QUÉ</li>
        <li><strong>Ramas feature:</strong> Una rama por funcionalidad</li>
        <li><strong>Push frecuente:</strong> No trabajes más de 1 día sin hacer push</li>
    </ul>
</div>

<h4>Convención de Commits</h4>
<p>Usa el estándar <strong>Conventional Commits</strong>:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Tipo</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Descripción</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Ejemplo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-mono text-sm">feat</td>
            <td class="p-4 border border-slate-200 text-sm">Nueva funcionalidad</td>
            <td class="p-4 border border-slate-200 font-mono text-sm">feat: añadir VPN IPsec</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-mono text-sm">fix</td>
            <td class="p-4 border border-slate-200 text-sm">Corrección de bugs</td>
            <td class="p-4 border border-slate-200 font-mono text-sm">fix: corregir routing VLANs</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-mono text-sm">docs</td>
            <td class="p-4 border border-slate-200 text-sm">Cambios en documentación</td>
            <td class="p-4 border border-slate-200 font-mono text-sm">docs: actualizar diagrama de red</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-mono text-sm">config</td>
            <td class="p-4 border border-slate-200 text-sm">Cambios en configuración</td>
            <td class="p-4 border border-slate-200 font-mono text-sm">config: actualizar reglas firewall</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📋</span> Tarea para el Alumnado
    </div>
    <p>Documenta tu uso de Git incluyendo:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Enlace a tu repositorio (GitHub, GitLab)</li>
        <li>Captura de pantalla del gráfico de commits</li>
        <li>Listado de las ramas principales que creaste</li>
        <li>Explicación de algún conflicto que resolviste</li>
    </ul>
</div>
`;
