window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.conclusiones = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🏁</span> Objetivo de esta Sección
    </div>
    <p>Las conclusiones son tu oportunidad para reflexionar sobre lo aprendido, los desafíos superados y las líneas futuras del proyecto.</p>
</div>

<h3>9.1. Conclusiones Técnicas</h3>
<p>Resume los aspectos técnicos más relevantes:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span> Puntos a Tratar
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>¿Se cumplieron todos los requisitos definidos inicialmente?</li>
        <li>¿Qué tecnologías funcionaron bien? ¿Cuáles dieron problemas?</li>
        <li>¿El sistema es escalable y mantenible?</li>
        <li>¿Qué métricas de rendimiento se alcanzaron?</li>
    </ul>
</div>

<h3>9.2. Conclusiones Personales</h3>
<p>Reflexiona sobre tu crecimiento personal y profesional:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">📚 Aprendizajes Técnicos</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Nuevas tecnologías dominadas (Proxmox, Azure, pfSense)</li>
            <li>Arquitecturas cloud híbridas</li>
            <li>Seguridad de redes y VPNs</li>
            <li>Gestión de backups y recuperación</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">🤝 Habilidades Blandas</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Gestión del tiempo y priorización</li>
            <li>Documentación técnica</li>
            <li>Resolución de problemas complejos</li>
            <li>Trabajo autónomo y autodidacta</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>✍️</span> Reflexión Personal
    </div>
    <p>Responde sinceramente a estas preguntas (200-300 palabras):</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>¿Qué aspecto del proyecto te ha resultado más interesante?</li>
        <li>¿Qué harías de manera diferente si volvieras a empezar?</li>
        <li>¿Cómo te ha preparado este proyecto para tu futuro profesional?</li>
        <li>¿Qué consejo le darías a un compañero que empiece este proyecto el año que viene?</li>
    </ul>
</div>

<h3>9.3. Líneas de Futuro</h3>
<p>Explora cómo podría evolucionar tu proyecto:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Categoría</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Mejoras Sugeridas</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Prioridad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Seguridad</td>
            <td class="p-4 border border-slate-200 text-sm">Implementar Zero Trust, MFA obligatorio</td>
            <td class="p-4 border border-slate-200"><span class="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Crítica</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Rendimiento</td>
            <td class="p-4 border border-slate-200 text-sm">CDN para contenido estático, caching Redis</td>
            <td class="p-4 border border-slate-200"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Alta</span></td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Disponibilidad</td>
            <td class="p-4 border border-slate-200 text-sm">Multi-region en Azure, Kubernetes</td>
            <td class="p-4 border border-slate-200"><span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Media</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Funcionalidades</td>
            <td class="p-4 border border-slate-200 text-sm">IA para triaje, chatbot de atención</td>
            <td class="p-4 border border-slate-200"><span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Baja</span></td>
        </tr>
    </tbody>
</table>

<h3>9.4. Agradecimientos</h3>
<p>Un espacio para reconocer a quienes te han ayudado:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>🙏</span> Personas a Agradecer
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Tutor/a del proyecto:</strong> Por su guía y disponibilidad</li>
        <li><strong>Compañeros/as:</strong> Por el apoyo mutuo y resolución de dudas</li>
        <li><strong>Familia/Amigos:</strong> Por su paciencia durante el desarrollo</li>
        <li><strong>Comunidad open-source:</strong> Por las herramientas utilizadas (Proxmox, pfSense)</li>
        <li><strong>Microsoft for Students:</strong> Por los créditos de Azure</li>
    </ul>
</div>
`;
