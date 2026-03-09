window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["viabilidad"] = `
    <div class="callout callout-info">
        <div class="callout-title"><span>📊</span><span>Análisis de Viabilidad Técnica y Económica</span></div>
        <p class="text-sm">¿Es MediConnect capaz de mantener este sistema? Debes demostrar que la inversión se recupera y que el tiempo de ejecución es realista.</p>
    </div>

    <h3>3.1. Análisis DAFO</h3>
    <p class="text-sm mb-6">Completa el DAFO considerando los riesgos de la nube y los datos médicos.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div class="p-4 bg-red-50/50 border border-red-100 rounded-2xl">
            <h4 class="text-red-700 font-bold mb-2 border-none p-0">Debilidad (Interna)</h4>
            <p class="text-[10px] m-0 italic">Ej: Dependencia del ancho de banda de la sede para el acceso a Proxmox.</p>
        </div>
        <div class="p-4 bg-blue-50/50 border border-blue-100 rounded-2xl">
            <h4 class="text-blue-700 font-bold mb-2 border-none p-0">Oportunidad (Externa)</h4>
            <p class="text-[10px] m-0 italic">Ej: Subvenciones de los Fondos NextGen para salud digital.</p>
        </div>
    </div>

    <h3>3.2. Viabilidad Económica</h3>
    <div class="table-container border border-slate-100 rounded-3xl overflow-hidden my-8 shadow-sm">
        <table class="w-full text-sm">
            <thead class="bg-slate-50 text-slate-500 uppercase text-[9px] font-bold">
                <tr><th class="px-6 py-4 text-left">Concepto</th><th class="px-6 py-4 text-right">Estimación (€)</th></tr>
            </thead>
            <tbody class="divide-y divide-slate-50 text-slate-400 italic">
                <tr><td class="px-6 py-4">Costes de Microsoft Azure (Anual)</td><td class="px-6 py-4 text-right">[Calcular...]</td></tr>
                <tr><td class="px-6 py-4">Licencias de Software (Veeam, etc.)</td><td class="px-6 py-4 text-right">[Investigar...]</td></tr>
                <tr class="bg-slate-50/50 font-bold"><td>Total OPEX Estimado</td><td class="px-6 py-4 text-right">--- €</td></tr>
            </tbody>
        </table>
    </div>

    <div class="callout callout-success">
        <div class="callout-title"><span>✨</span><span>Herramientas Recomendadas</span></div>
        <p class="text-sm m-0">Usa la <a href="https://azure.microsoft.com/pricing/calculator/" class="text-blue-600 underline">Calculadora de Azure</a> para obtener precios reales de la VPN Gateway y las instancias B2s.</p>
    </div>
`;
