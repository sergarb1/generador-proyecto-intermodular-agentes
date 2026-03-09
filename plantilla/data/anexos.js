window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["anexos"] = `
    <div class="callout callout-info">
        <div class="callout-title"><span>📎</span><span>Material Complementario</span></div>
        <p class="text-sm">En los anexos se incluye todo aquello que es demasiado largo o detallado para el cuerpo del proyecto pero que aporta valor probatorio.</p>
    </div>

    <h3>11.1. Código Fuente y Scripts</h3>
    <div class="p-6 bg-slate-900 rounded-3xl text-white my-8 shadow-xl border border-slate-800 overflow-hidden">
        <div class="flex justify-between items-center mb-4 border-b border-slate-800 pb-3">
            <span class="text-[10px] font-mono text-blue-400">setup-vpn.sh</span>
            <span class="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Script de Automatización</span>
        </div>
        <pre class="text-[10px] leading-relaxed text-blue-100/70 font-mono"><code># Script para configurar la interfaz de túnel
ip link add dev vti0 type vti local 1.2.3.4 remote 5.6.7.8 key 100
ip addr add 10.0.0.1/30 dev vti0
ip link set vti0 up</code></pre>
    </div>

    <h3>11.2. Manual de Usuario / Guía Rápida</h3>
    <div class="callout callout-warning">
        <div class="callout-title"><span>📖</span><span>Instrucciones de Operación</span></div>
        <p class="text-sm">Crea una guía paso a paso (con iconos) para que un operario sepa cómo arrancar el sistema o cómo verificar que el backup se ha hecho bien.</p>
    </div>

    <h3>11.3. Glosario de Términos</h3>
    <p class="text-sm">Define los acrónimos técnicos (SLA, RTO, RPO, VPC, VPN) para asegurar que el tribunal entiende cada concepto.</p>
`;

