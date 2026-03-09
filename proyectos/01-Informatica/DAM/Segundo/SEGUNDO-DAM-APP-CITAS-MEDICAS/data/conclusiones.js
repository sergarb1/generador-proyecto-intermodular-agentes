window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.conclusiones = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🏁</span> Objetivo de esta Sección
    </div>
    <p>Las conclusiones son tu oportunidad para reflexionar sobre lo aprendido, los desafíos superados y las líneas futuras del proyecto.</p>
</div>

<h3>9.1. Guía para las Conclusiones Técnicas</h3>
<p>Resume los aspectos técnicos más relevantes del proyecto:</p>

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

<h4>Estructura Sugerida</h4>
<pre class="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-6"><code class="language-text">9.1. Conclusiones Técnicas
├── Objetivos cumplidos vs. no cumplidos
├── Decisiones técnicas acertadas
├── Errores cometidos y aprendizajes
├── Rendimiento alcanzado (métricas reales)
└── Deuda técnica pendiente

9.2. Conclusiones Personales
├── Habilidades desarrolladas
├── Dificultades superadas
├── Lo que harías diferente
└── Preparación para el mundo laboral

9.3. Líneas de Futuro
├── Features pendientes
├── Mejoras de arquitectura
├── Nuevas tecnologías a incorporar
└── Posibles pivotes de negocio</code></pre>

<h3>9.2. Guía para las Conclusiones Personales</h3>
<p>Esta es la parte más importante para el tribunal: tu crecimiento personal y profesional:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">📚 Aprendizajes Técnicos</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Nuevos lenguajes o frameworks dominados</li>
            <li>Arquitecturas y patrones de diseño</li>
            <li>Herramientas de testing y CI/CD</li>
            <li>Gestión de bases de datos y cloud</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">🤝 Habilidades Blandas</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Gestión del tiempo y priorización</li>
            <li>Comunicación técnica (documentación)</li>
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

<h3>9.3. Guía para Líneas de Futuro</h3>
<p>Ningún proyecto está realmente "terminado". Explora cómo podría evolucionar:</p>

<h4>Tipos de Mejoras Futuras</h4>
<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Categoría</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Ejemplos</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Prioridad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Funcionalidades</td>
            <td class="p-4 border border-slate-200 text-sm">Nuevas features no implementadas por tiempo</td>
            <td class="p-4 border border-slate-200"><span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Media</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Rendimiento</td>
            <td class="p-4 border border-slate-200 text-sm">Optimización de queries, caching, CDN</td>
            <td class="p-4 border border-slate-200"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Alta</span></td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Seguridad</td>
            <td class="p-4 border border-slate-200 text-sm">Pentesting, 2FA, auditorías externas</td>
            <td class="p-4 border border-slate-200"><span class="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Crítica</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Escalabilidad</td>
            <td class="p-4 border border-slate-200 text-sm">Microservicios, Kubernetes, auto-scaling</td>
            <td class="p-4 border border-slate-200"><span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Baja</span></td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Negocio</td>
            <td class="p-4 border border-slate-200 text-sm">Nuevos mercados, partnerships, monetización</td>
            <td class="p-4 border border-slate-200"><span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Media</span></td>
        </tr>
    </tbody>
</table>

<div class="callout callout-info">
    <div class="callout-title">
        <span>🔮</span> Tecnologías Emergentes a Considerar
    </div>
    <p>Investiga si alguna de estas tecnologías podría mejorar tu proyecto en el futuro:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Inteligencia Artificial:</strong> Chatbots, recomendaciones, análisis predictivo</li>
        <li><strong>Blockchain:</strong> Smart contracts, trazabilidad, tokens</li>
        <li><strong>IoT:</strong> Integración con dispositivos conectados</li>
        <li><strong>Realidad Aumentada/Virtual:</strong> Experiencias inmersivas</li>
        <li><strong>Edge Computing:</strong> Procesamiento descentralizado</li>
    </ul>
</div>

<h3>9.4. Agradecimientos</h3>
<p>Un espacio para reconocer a quienes te han ayudado:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>🙏</span> Personas a Agradecer
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Tutor/a del proyecto:</strong> Por su guía y disponibilidad</li>
        <li><strong>Compañeros/as:</strong> Por el apoyo mutuo y code reviews</li>
        <li><strong>Familia/Amigos:</strong> Por su paciencia durante el desarrollo</li>
        <li><strong>Comunidad open-source:</strong> Por las librerías y herramientas utilizadas</li>
        <li><strong>Cliente/Empresa ficticia:</strong> Por confiar en el proyecto (si aplica)</li>
    </ul>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Redacta tus agradecimientos de forma sincera y personalizada. Evita frases genéricas como "Quiero agradecer a...". Mejor sé específico:</p>
    <pre class="bg-slate-100 p-4 rounded-xl mt-3 text-sm text-slate-700"><em>"A mi tutor [Nombre], por sus revisiones detalladas del código y por ayudarme a desatascarme cuando el testing E2E no funcionaba. Sus consejos sobre arquitectura limpia cambiaron completamente la calidad del proyecto."</em></pre>
</div>
`;
