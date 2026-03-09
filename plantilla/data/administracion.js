window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["administracion"] = `
    
    
    <div class="callout callout-info">
        <div class="callout-title"><span>⚙️</span><span>Gestión del Ciclo de Vida</span></div>
        <p class="text-sm">¿Cómo se mantiene esto vivo? Aquí explicas la gestión de usuarios, el mantenimiento preventivo y cómo reaccionas ante fallos.</p>
    </div>

    <h3>7.1. Gestión de Usuarios y Permisos</h3>
    <p class="text-sm mb-6">Define los roles de acceso al sistema (RBAC).</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 class="text-slate-800 font-bold mb-2 border-none p-0 flex items-center gap-2"><span>🔑</span> Administrador</h4>
            <p class="text-[11px] text-slate-500 m-0">Acceso total a la infraestructura, gestión de red y backups.</p>
        </div>
        <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
            <h4 class="text-slate-800 font-bold mb-2 border-none p-0 flex items-center gap-2"><span>👤</span> Usuario Operativo</h4>
            <p class="text-[11px] text-slate-500 m-0">Acceso a las aplicaciones de negocio, sin permisos de configuración.</p>
        </div>
    </div>

    <h3>7.2. Monitorización y Mantenimiento</h3>
    <p class="text-sm mb-6">Explica cómo vigilas la salud de tus servidores y redes.</p>
    
    <div class="table-container border border-slate-100 rounded-3xl overflow-hidden my-8 shadow-sm">
        <table class="w-full text-sm">
            <thead class="bg-slate-50 border-b border-slate-100">
                <tr>
                    <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Métrica</th>
                    <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Herramienta</th>
                    <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Umbral Crítico</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-50 text-slate-600 text-xs">
                <tr>
                    <td class="px-6 py-4 font-bold">Uso de CPU</td>
                    <td class="px-6 py-4">Zabbix / Prometheus</td>
                    <td class="px-6 py-4 text-red-500">90% durante 5 min</td>
                </tr>
                <tr>
                    <td class="px-6 py-4 font-bold">Latencia VPN</td>
                    <td class="px-6 py-4">ICMP Monitor</td>
                    <td class="px-6 py-4 text-red-500">> 150ms</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3>7.3. Plan de Contingencia</h3>
    <div class="callout callout-error">
        <div class="callout-title"><span>🚨</span><span>¿Qué pasa si explota?</span></div>
        <p class="text-sm">Describe brevemente tu protocolo de actuación ante una caída total del servicio. ¿Cómo activas el Disaster Recovery Plan (DRP)?</p>
    </div>
`;

