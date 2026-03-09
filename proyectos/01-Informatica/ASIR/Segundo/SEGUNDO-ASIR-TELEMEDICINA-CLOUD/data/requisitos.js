window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["requisitos"] = `
    <div class="callout callout-info">
        <div class="callout-title"><span>📋</span><span>Definición de Requisitos Técnicos</span></div>
        <p class="text-sm">En esta sección vas a listar qué "debe" hacer tu sistema para que MediConnect funcione correctamente.</p>
    </div>

    <h3>4.1. Requisitos Funcionales (RF)</h3>
    <p class="text-sm italic">Define al menos 10 funciones. Usa la nomenclatura RF-001, RF-002...</p>
    <ul class="space-y-3">
        <li class="p-3 bg-white border border-slate-200 rounded-xl shadow-sm flex gap-3">
            <span class="text-blue-500 font-bold text-xs">RF-001</span>
            <span class="text-xs text-slate-600 font-medium">El sistema debe permitir la videoconferencia cifrada en tiempo real.</span>
        </li>
        <li class="p-3 bg-white border border-slate-200 rounded-xl shadow-sm flex gap-3">
            <span class="text-blue-500 font-bold text-xs">RF-002</span>
            <span class="text-xs text-slate-400 italic">[Define aquí el requisito de gestión de historiales...]</span>
        </li>
    </ul>

    <h3>4.2. Requisitos No Funcionales (RNF)</h3>
    <p class="text-sm">¿Cómo debe ser el sistema? (Rápido, Seguro, Disponible).</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div class="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 class="text-blue-600 font-bold mb-2 border-none p-0 flex items-center gap-2"><span>⚡</span> Latencia</h4>
            <p class="text-[11px] text-slate-500 m-0">La videollamada debe tener una latencia inferior a 150ms.</p>
        </div>
        <div class="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <h4 class="text-blue-600 font-bold mb-2 border-none p-0 flex items-center gap-2"><span>🛡️</span> Cifrado</h4>
            <p class="text-[11px] text-slate-500 m-0">Uso de TLS 1.3 para todos los datos en tránsito.</p>
        </div>
    </div>

    <div class="callout callout-warning">
        <div class="callout-title"><span>⚠️</span><span>Importante para ASIR</span></div>
        <p class="text-sm m-0">No olvides incluir los requisitos de **Backup** (frecuencia) y de **Cumplimiento Legal** (RGPD).</p>
    </div>
`;
