window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.introduccion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>👋</span> Contexto del Proyecto
    </div>
    <p>Esta sección describe el escenario real que debes resolver. Úsala como base para todo tu análisis técnico posterior.</p>
</div>

<h3>1.1. Descripción de la Empresa</h3>
<p><strong>MediConnect Solutions</strong> es una clínica de servicios médicos digitales ubicada en Valencia, especializada en telemedicina y consultas remotas. Cuentan con un equipo de <strong>25 médicos especialistas</strong> y dan servicio a más de <strong>8.000 pacientes mensuales</strong> de forma remota.</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <div class="text-3xl font-bold text-blue-600 mb-2">25</div>
        <div class="text-sm text-slate-600">Médicos Especialistas</div>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <div class="text-3xl font-bold text-green-600 mb-2">8.000+</div>
        <div class="text-sm text-slate-600">Pacientes Mensuales</div>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <div class="text-3xl font-bold text-purple-600 mb-2">24/7</div>
        <div class="text-sm text-slate-600">Servicio Crítico</div>
    </div>
</div>

<div class="callout callout-error">
    <div class="callout-title">
        <span>🔥</span> Problemática Crítica
    </div>
    <p class="mb-3">La infraestructura actual de MediConnect presenta graves problemas que amenazan la continuidad del servicio:</p>
    <ul class="space-y-3">
        <li class="flex gap-3 items-start">
            <span class="text-red-500 text-lg">⚠️</span>
            <div>
                <strong class="text-sm font-bold text-red-700 block">Caídas de Servicio Semanales</strong>
                <span class="text-xs text-slate-600">Los servidores locales no soportan la carga durante picos de demanda, interrumpiendo videoconsultas en curso.</span>
            </div>
        </li>
        <li class="flex gap-3 items-start">
            <span class="text-red-500 text-lg">⚠️</span>
            <div>
                <strong class="text-sm font-bold text-red-700 block">Datos Sin Cifrar</strong>
                <span class="text-xs text-slate-600">Las historias clínicas viajan en texto plano por la red interna, incumpliendo el RGPD y exponiendo datos sensibles.</span>
            </div>
        </li>
        <li class="flex gap-3 items-start">
            <span class="text-red-500 text-lg">⚠️</span>
            <div>
                <strong class="text-sm font-bold text-red-700 block">Escalabilidad Nula</strong>
                <span class="text-xs text-slate-600">Durante campañas de salud, el sistema colapsa por imposibilidad de añadir recursos bajo demanda.</span>
            </div>
        </li>
        <li class="flex gap-3 items-start">
            <span class="text-red-500 text-lg">⚠️</span>
            <div>
                <strong class="text-sm font-bold text-red-700 block">Backups Manuales</strong>
                <span class="text-xs text-slate-600">No existe automatización de copias de seguridad, con riesgo de pérdida de historiales médicos.</span>
            </div>
        </li>
    </ul>
</div>

<h3>1.2. Propuesta Técnica</h3>
<p>Se propone una <strong>arquitectura Cloud Híbrida</strong> que combine lo mejor de ambos mundos:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span>🏢</span> On-Premise (Local)
        </h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Servidores Proxmox para datos críticos</li>
            <li>Historias clínicas cifradas en reposo</li>
            <li>Control total de datos sensibles</li>
            <li>Cumplimiento RGPD garantizado</li>
        </ul>
    </div>
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-3 flex items-center gap-2">
            <span>☁️</span> Cloud Público (Azure)
        </h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Videoconferencia escalable bajo demanda</li>
            <li>Aplicación web con auto-scaling</li>
            <li>CDN para distribución de contenido</li>
            <li>Pago solo por uso real</li>
        </ul>
    </div>
</div>

<div class="callout callout-success">
    <div class="callout-title">
        <span>🔗</span> Conexión Segura
    </div>
    <p>La comunicación entre ambas infraestructuras se realizará mediante un <strong>túnel VPN Site-to-Site</strong> cifrado con IPsec, garantizando que los datos médicos nunca viajen expuestos por Internet.</p>
</div>

<h3>1.3. Objetivos SMART</h3>
<p>Los objetivos del proyecto siguen la metodología SMART (Específicos, Medibles, Alcanzables, Relevantes, Temporales):</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Objetivo</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Métrica</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Plazo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Disponibilidad del servicio</td>
            <td class="p-4 border border-slate-200">99.9% uptime anual</td>
            <td class="p-4 border border-slate-200">12 meses</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Cifrado de datos</td>
            <td class="p-4 border border-slate-200">100% datos médicos con AES-256</td>
            <td class="p-4 border border-slate-200">3 meses</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Reducción de caídas</td>
            <td class="p-4 border border-slate-200">-90% incidentes por saturación</td>
            <td class="p-4 border border-slate-200">6 meses</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Automatización de backups</td>
            <td class="p-4 border border-slate-200">Backups diarios con RPO &lt; 24h</td>
            <td class="p-4 border border-slate-200">2 meses</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Escalabilidad automática</td>
            <td class="p-4 border border-slate-200">Soportar 5x tráfico en picos</td>
            <td class="p-4 border border-slate-200">4 meses</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📋</span> Nota para el Alumnado
    </div>
    <p>Esta introducción es el <strong>contexto base</strong> para tu proyecto. Debes:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Entender la problemática de MediConnect</li>
        <li>Justificar por qué una solución híbrida es la más adecuada</li>
        <li>Usar los objetivos SMART como referencia para tu planificación</li>
        <li>Adaptar las métricas a tu implementación real</li>
    </ul>
</div>
`;
