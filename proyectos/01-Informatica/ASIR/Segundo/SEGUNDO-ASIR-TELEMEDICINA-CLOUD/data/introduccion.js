window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["introduccion"] = `
    <div class="callout callout-info">
        <div class="callout-title"><span>👋</span><span>Punto de Partida</span></div>
        <p class="text-sm">Esta sección describe el escenario real que debes resolver. Úsala como base para todo tu análisis técnico posterior.</p>
    </div>

    <h3>1.1. Descripción del Proyecto</h3>
    <p>El proyecto consiste en el diseño e implementación de una <strong>Infraestructura Cloud Híbrida</strong> para la empresa ficticia "MediConnect Solutions". El objetivo es desplegar una plataforma de telemedicina que permita videoconsultas en tiempo real, gestión de historiales clínicos y almacenamiento seguro de imágenes médicas, garantizando la máxima disponibilidad y el cumplimiento normativo.</p>

    <div class="p-8 bg-blue-50/50 rounded-3xl border border-blue-100 my-8">
        <h4 class="text-blue-700 font-bold mb-4 flex items-center gap-2 border-none"><span>🏢</span> Contexto de MediConnect</h4>
        <p class="text-sm leading-relaxed mb-4"><strong>MediConnect Solutions</strong> es una clínica de servicios médicos digitales ubicada en Valencia. Cuentan con un equipo de 25 médicos especialistas y dan servicio a más de 8.000 pacientes mensuales de forma remota.</p>
        <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded-xl shadow-sm text-[10px]"><strong>Sede Local:</strong> Servidores Proxmox para datos críticos.</div>
            <div class="bg-white p-3 rounded-xl shadow-sm text-[10px]"><strong>Infraestructura Cloud:</strong> Microsoft Azure para servicios públicos.</div>
        </div>
    </div>

    <div class="callout callout-error">
        <div class="callout-title"><span>🔥</span><span>Problemática Crítica</span></div>
        <ul class="text-sm space-y-2 pl-4">
            <li><strong>Caídas de servicio:</strong> La infraestructura actual tiene fallos semanales que interrumpen las consultas médicas.</li>
            <li><strong>Inseguridad:</strong> Los datos viajan sin cifrar adecuadamente, lo que incumple el RGPD.</li>
            <li><strong>Escalabilidad:</strong> El servidor local no soporta picos de tráfico cuando hay campañas de salud.</li>
        </ul>
    </div>

    <h3>1.2. Propuesta de Mejora</h3>
    <p>Se propone una arquitectura híbrida donde los <strong>datos sensibles</strong> (historias clínicas) permanezcan en un servidor local protegido (On-Premise), mientras que la <strong>aplicación web y la videoconferencia</strong> escalen en la nube (Azure). La conexión se realizará mediante una <strong>VPN Site-to-Site</strong> segura.</p>

    <h3>1.3. Objetivos SMART</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Disponibilidad</span>
            <p class="text-sm font-bold text-slate-700 m-0">Lograr un uptime del 99.9% anual del servicio de videoconferencia.</p>
        </div>
        <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Seguridad</span>
            <p class="text-sm font-bold text-slate-700 m-0">Cifrar el 100% de los datos médicos en reposo mediante AES-256.</p>
        </div>
    </div>
`;
