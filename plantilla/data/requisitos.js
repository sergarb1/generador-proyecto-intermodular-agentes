window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["requisitos"] = `
    
    
    <div class="callout callout-info">
        <div class="callout-title"><span>📋</span><span>El Contrato del Sistema</span></div>
        <p class="text-sm">Aquí defines EXACTAMENTE qué debe hacer el sistema. Es la lista de la compra de tu proyecto. Si no está aquí, no existe para el cliente.</p>
    </div>

    <h3>4.1. Requisitos Funcionales (RF)</h3>
    <p class="text-sm mb-6 italic">Describe las funciones que el usuario podrá realizar. Usa una tabla numerada para mayor claridad profesional.</p>
    
    <div class="table-container border border-slate-100 rounded-3xl overflow-hidden my-8 shadow-sm">
        <table class="w-full text-sm text-slate-600">
            <thead class="bg-slate-50 border-b border-slate-100">
                <tr>
                    <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">ID</th>
                    <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Descripción del Requisito</th>
                    <th class="px-6 py-4 text-left font-bold text-slate-500 uppercase tracking-widest text-[10px]">Prioridad</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-50">
                <tr>
                    <td class="px-6 py-4 font-mono font-bold text-blue-600 text-xs">RF-001</td>
                    <td class="px-6 py-4 text-xs">El sistema debe permitir la gestión de altas de nuevos usuarios médicos.</td>
                    <td class="px-6 py-4"><span class="px-2 py-1 bg-red-50 text-red-600 rounded-lg font-bold text-[9px] uppercase">Alta</span></td>
                </tr>
                <tr>
                    <td class="px-6 py-4 font-mono font-bold text-blue-600 text-xs">RF-002</td>
                    <td class="px-6 py-4 text-xs">Se debe implementar un panel de videoconferencia cifrado punto a punto.</td>
                    <td class="px-6 py-4"><span class="px-2 py-1 bg-red-50 text-red-600 rounded-lg font-bold text-[9px] uppercase">Alta</span></td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3>4.2. Requisitos No Funcionales (RNF)</h3>
    <p class="text-sm mb-6">Son las "cualidades" del sistema: velocidad, seguridad, disponibilidad.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div class="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-blue-200 transition-colors">
            <h4 class="text-blue-600 font-bold mb-2 border-none p-0 flex items-center gap-2"><span>⚡</span> Disponibilidad</h4>
            <p class="text-[11px] text-slate-500 m-0">Garantizar un uptime del 99.9% mediante redundancia en Azure.</p>
        </div>
        <div class="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-blue-200 transition-colors">
            <h4 class="text-blue-600 font-bold mb-2 border-none p-0 flex items-center gap-2"><span>🔒</span> Seguridad</h4>
            <p class="text-[11px] text-slate-500 m-0">Cumplimiento íntegro del Esquema Nacional de Seguridad (ENS).</p>
        </div>
    </div>

    <h3>4.3. Casos de Uso</h3>
    <div class="callout callout-warning">
        <div class="callout-title"><span>🎭</span><span>Historias de Usuario</span></div>
        <p class="text-sm">Explica con tus palabras cómo interactúa un actor (usuario) con el sistema. Recomendamos incluir un diagrama UML de Casos de Uso aquí.</p>
    </div>
`;

