window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["implementacion"] = `
    <div class="callout callout-info">
        <div class="callout-title"><span>💻</span><span>Documentación del Montaje</span></div>
        <p class="text-sm">En esta sección documentas el trabajo técnico real. No pongas teoría, pon comandos, configuraciones y capturas de lo que has montado.</p>
    </div>

    <h3>6.1. Configuración del Entorno Virtual</h3>
    <p class="text-sm italic">Explica los pasos realizados en Proxmox para MediConnect.</p>
    <div class="bg-slate-900 rounded-3xl p-6 text-white my-8 shadow-xl border border-slate-800 overflow-hidden font-mono text-[10px]">
        <div class="border-b border-slate-800 pb-2 mb-4 text-blue-400"># Configuración de red en Proxmox (Ejemplo)</div>
        <p>auto vmbr10</p>
        <p>iface vmbr10 inet static</p>
        <p>&nbsp;&nbsp;address 10.10.10.1/24</p>
        <p>&nbsp;&nbsp;bridge-ports eth0.10</p>
    </div>

    <h3>6.2. Túnel VPN Site-to-Site</h3>
    <p class="text-sm">Documenta la conexión entre pfSense y Azure Virtual Network Gateway. Muestra capturas del túnel "Up".</p>

    <h3>6.3. Verificación de Servicios</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 class="text-emerald-600 font-bold mb-2 border-none p-0">Test 1: Conectividad</h4>
            <p class="text-[10px] text-slate-500 m-0">Ping exitoso desde local (10.10.x.x) a Azure (172.16.x.x).</p>
        </div>
        <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 class="text-emerald-600 font-bold mb-2 border-none p-0">Test 2: HTTPS</h4>
            <p class="text-[10px] text-slate-500 m-0">Acceso seguro al portal de pacientes con certificado SSL.</p>
        </div>
    </div>
`;
