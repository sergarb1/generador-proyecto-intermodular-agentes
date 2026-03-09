window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['estado-arte'] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🌐</span> Objetivo de esta Sección
    </div>
    <p>El "Estado del Arte" demuestra que has investigado soluciones existentes en el mercado y conoces las tendencias actuales en infraestructuras cloud y telemedicina.</p>
</div>

<h3>2.1. Guía para la Investigación de Mercado</h3>
<p>Antes de diseñar tu infraestructura, es crucial entender qué soluciones existen:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span> Consejo Pedagógico
    </div>
    <p>Dedica al menos <strong>4-6 horas</strong> a investigar soluciones de telemedicina y cloud. Esto te dará ideas para tu propio diseño y te ayudará a justificar tus decisiones técnicas.</p>
</div>

<h4>Fuentes de Investigación para ASIR</h4>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">🏢 Competencia Directa</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Plataformas de telemedicina (Doctoralia, TopDoctors)</li>
            <li>Proveedores cloud (AWS, Azure, Google Cloud)</li>
            <li>Casos de éxito de hospitales digitales</li>
            <li>Whitepapers de arquitecturas sanitarias</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">📊 Informes de Sector</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Gartner Magic Quadrant (Cloud Infrastructure)</li>
            <li>Informes de la Sociedad Española de Informática de la Salud</li>
            <li>Estadísticas del INE sobre e-Sanidad</li>
            <li>Publicaciones de la AEPD sobre salud digital</li>
        </ul>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-2">📰 Medios Especializados</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Blogs de cloud computing (Azure Blog, AWS News)</li>
            <li>Podcasts de ciberseguridad y salud</li>
            <li>Webinars de proveedores cloud</li>
            <li>Conferencias: KubeCon, Microsoft Ignite</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📋</span> Tarea para el Alumnado
    </div>
    <p>Investiga y documenta:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Al menos 3 plataformas de telemedicina</strong> existentes y sus características técnicas</li>
        <li><strong>Comparativa de proveedores cloud</strong> (Azure vs AWS vs GCP) para tu caso de uso</li>
        <li><strong>Precios orientativos</strong> de servicios cloud similares a los que usarás</li>
        <li><strong>Tendencias tecnológicas</strong> en infraestructuras sanitarias (2024-2025)</li>
    </ul>
</div>

<h3>2.2. Tabla Comparativa de Proveedores Cloud</h3>
<p>Crea una tabla comparativa para analizar las principales opciones:</p>

<pre class="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-6"><code class="language-text">┌───────────────────────┬──────────────┬──────────────┬──────────────┬──────────────┐
│ Criterio              │ Azure        │ AWS          │ GCP          │ Tu Elección  │
├───────────────────────┼──────────────┼──────────────┼──────────────┼──────────────┤
│ Servicios de salud    │              │              │              │              │
│ Cumplimiento RGPD     │              │              │              │              │
│ Precios (VM similar)  │              │              │              │              │
│ VPN Site-to-Site      │              │              │              │              │
│ Availability Zones    │              │              │              │              │
│ Soporte técnico       │              │              │              │              │
│ Integración híbrida   │              │              │              │              │
├───────────────────────┼──────────────┼──────────────┼──────────────┼──────────────┤
│ Puntos Fuertes        │              │              │              │              │
│ Puntos Débiles        │              │              │              │              │
│ Decisión Final        │              │              │              │ SELECCIONADO │
└───────────────────────┴──────────────┴──────────────┴──────────────┴──────────────┘</code></pre>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📊</span> Criterios de Comparación para ASIR
    </div>
    <p>Adapta estos criterios a tu proyecto de infraestructura:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Servicios específicos:</strong> ¿Tiene servicios para sector salud? (Azure Health Bot, AWS HealthLake)</li>
        <li><strong>Cumplimiento normativo:</strong> ¿Certificaciones RGPD, HIPAA, ENS?</li>
        <li><strong>Red y latencia:</strong> ¿Hay región en Europa (Madrid, Frankfurt)?</li>
        <li><strong>Conectividad híbrida:</strong> ¿VPN Gateway, ExpressRoute, Direct Connect?</li>
        <li><strong>Precios:</strong> Calcula para tu escenario real (usa calculadoras oficiales)</li>
        <li><strong>Soporte:</strong> ¿Niveles de soporte? ¿Tiempo de respuesta garantizado?</li>
    </ul>
</div>

<h3>2.3. Tendencias Tecnológicas en Telemedicina</h3>
<p>Investiga qué tecnologías están marcando tendencia en el sector:</p>

<h4>Áreas Tecnológicas a Investigar</h4>
<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Tecnología</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Aplicación en Telemedicina</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Madurez (2025)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Cloud Híbrido</td>
            <td class="p-4 border border-slate-200 text-sm">Combinar control on-premise con escalabilidad cloud</td>
            <td class="p-4 border border-slate-200"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Muy Madura</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Contenedores (Kubernetes)</td>
            <td class="p-4 border border-slate-200 text-sm">Despliegue portable de aplicaciones médicas</td>
            <td class="p-4 border border-slate-200"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Muy Madura</span></td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Zero Trust Security</td>
            <td class="p-4 border border-slate-200 text-sm">Seguridad "nunca confíes, siempre verifica"</td>
            <td class="p-4 border border-slate-200"><span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">En Adopción</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Edge Computing</td>
            <td class="p-4 border border-slate-200 text-sm">Procesamiento cerca del paciente para baja latencia</td>
            <td class="p-4 border border-slate-200"><span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Emergente</span></td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">5G Networks</td>
            <td class="p-4 border border-slate-200 text-sm">Videoconsultas en ultra-alta definición sin latencia</td>
            <td class="p-4 border border-slate-200"><span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">En Despliegue</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Blockchain</td>
            <td class="p-4 border border-slate-200 text-sm">Historias clínicas inmutables y compartidas</td>
            <td class="p-4 border border-slate-200"><span class="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Experimental</span></td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Actividad Práctica
    </div>
    <p>Para tu proyecto, investiga:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>3-5 tecnologías emergentes</strong> relevantes para infraestructuras de telemedicina</li>
        <li><strong>Cómo podrían aplicarse</strong> a MediConnect (aunque no las implementes)</li>
        <li><strong>Barreras de adopción</strong> (coste, complejidad, madurez, normativa)</li>
        <li><strong>Referencias a fuentes</strong> que respalden tu investigación</li>
    </ul>
</div>

<h3>2.4. Análisis DAFO del Sector</h3>
<p>El análisis DAFO te ayuda a entender el contexto competitivo de tu solución:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-red-50 rounded-2xl border border-red-100">
        <h4 class="font-bold text-red-800 mb-3 flex items-center gap-2">
            <span>⚠️</span> Debilidades (Internas)
        </h4>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>[Completa con tus debilidades]</li>
            <li>Ej: Equipo limitado (1 administrador de sistemas)</li>
            <li>Ej: Sin certificaciones oficiales de Azure/AWS</li>
            <li>Ej: Presupuesto ajustado para licencias enterprise</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-3 flex items-center gap-2">
            <span>💪</span> Fortalezas (Internas)
        </h4>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>[Completa con tus fortalezas]</li>
            <li>Ej: Flexibilidad para implementar soluciones a medida</li>
            <li>Ej: Conocimiento actualizado de tecnologías open-source</li>
            <li>Ej: Costes operativos bajos al usar cloud híbrido</li>
        </ul>
    </div>
    <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
        <h4 class="font-bold text-orange-800 mb-3 flex items-center gap-2">
            <span>🚨</span> Amenazas (Externas)
        </h4>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>[Completa con tus amenazas]</li>
            <li>Ej: Grandes proveedores cloud con más recursos</li>
            <li>Ej: Cambios normativos RGPD imprevistos</li>
            <li>Ej: Posibles brechas de seguridad en el sector salud</li>
        </ul>
    </div>
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-3 flex items-center gap-2">
            <span>🎯</span> Oportunidades (Externas)
        </h4>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>[Completa con tus oportunidades]</li>
            <li>Ej: Crecimiento acelerado del mercado de telemedicina</li>
            <li>Ej: Fondos europeos para digitalización sanitaria</li>
            <li>Ej: Colaboraciones con clínicas locales</li>
        </ul>
    </div>
</div>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📋</span> Tarea para el Alumnado
    </div>
    <p>Completa un análisis DAFO con al menos <strong>4-6 puntos por categoría</strong>. Sé honesto y específico. Luego usa el DAFO para derivar estrategias CAME en la sección de Viabilidad.</p>
</div>
`;
