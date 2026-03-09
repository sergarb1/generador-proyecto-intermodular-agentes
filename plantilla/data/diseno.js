window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["diseno"] = `
    
    
    <div class="callout callout-info">
        <div class="callout-title"><span>📐</span><span>Arquitectura Técnica</span></div>
        <p class="text-sm">Esta es la fase de planos. Aquí explicas CÓMO se conectan las piezas del puzzle antes de montarlas.</p>
    </div>

    <h3>5.1. Arquitectura de la Solución</h3>
    <p class="text-sm mb-8">Describe el modelo general (ej: Cliente-Servidor, Microservicios, Híbrido). Es imprescindible incluir un **Diagrama de Arquitectura Global**.</p>
    
    <div class="p-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] text-center mb-12">
        <span class="text-slate-400 font-bold uppercase tracking-widest text-xs">[ Espacio para el Diagrama de Arquitectura ]</span>
    </div>

    <h3>5.2. Diseño de Red e Infraestructura</h3>
    <p class="text-sm mb-6">Detalla la segmentación de red. Usa tablas para definir tus VLANs y direccionamiento.</p>
    
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
        <div class="p-4 bg-blue-50 border border-blue-100 rounded-2xl text-center">
            <span class="text-[10px] font-bold text-blue-400 block mb-1 uppercase">VLAN 10</span>
            <span class="text-sm font-bold text-blue-800">Gestión</span>
        </div>
        <div class="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-center">
            <span class="text-[10px] font-bold text-emerald-400 block mb-1 uppercase">VLAN 20</span>
            <span class="text-sm font-bold text-emerald-800">Producción</span>
        </div>
        <div class="p-4 bg-indigo-50 border border-indigo-100 rounded-2xl text-center">
            <span class="text-[10px] font-bold text-indigo-400 block mb-1 uppercase">VLAN 30</span>
            <span class="text-sm font-bold text-indigo-800">DMZ</span>
        </div>
    </div>

    <h3>5.3. Diseño de Seguridad y Backup</h3>
    <div class="callout callout-warning">
        <div class="callout-title"><span>🛡️</span><span>Estrategia de Protección</span></div>
        <p class="text-sm">No basta con decir que es seguro. Explica: ¿Qué firewall usas? ¿Cómo es la política de backup (Regla 3-2-1)? ¿Qué cifrado aplicas?</p>
    </div>
`;

