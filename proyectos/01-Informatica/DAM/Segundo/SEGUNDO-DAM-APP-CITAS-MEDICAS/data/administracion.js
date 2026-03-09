window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.administracion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📊</span> Objetivo de esta Sección
    </div>
    <p>Aquí planificarás y presupuestarás el proyecto. Demuestra que eres capaz de gestionar tiempo, costes y riesgos como un profesional.</p>
</div>

<h3>7.1. Guía para la Planificación Temporal</h3>
<p>Una buena planificación es clave para completar el proyecto a tiempo:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span> Consejo Pedagógico
    </div>
    <p>Usa una herramienta de gestión de proyectos (<strong>ClickUp, Trello, MS Project, GanttProject</strong>) y exporta capturas para incluir en esta sección.</p>
</div>

<h4>Fases del Proyecto</h4>
<p>Para un proyecto de <strong>96 horas</strong> (Segundo Curso), considera esta distribución:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Fase</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Duración</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Horas</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Entregables</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Inicio</td>
            <td class="p-4 border border-slate-200 text-sm">Semanas 1-2</td>
            <td class="p-4 border border-slate-200 text-sm">12h</td>
            <td class="p-4 border border-slate-200 text-sm">Documento de requisitos, arquitectura</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Desarrollo 1</td>
            <td class="p-4 border border-slate-200 text-sm">Semanas 3-4</td>
            <td class="p-4 border border-slate-200 text-sm">24h</td>
            <td class="p-4 border border-slate-200 text-sm">Backend funcional, API básica</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Desarrollo 2</td>
            <td class="p-4 border border-slate-200 text-sm">Semanas 5-6</td>
            <td class="p-4 border border-slate-200 text-sm">24h</td>
            <td class="p-4 border border-slate-200 text-sm">Frontend móvil, integración</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Desarrollo 3</td>
            <td class="p-4 border border-slate-200 text-sm">Semanas 7-8</td>
            <td class="p-4 border border-slate-200 text-sm">24h</td>
            <td class="p-4 border border-slate-200 text-sm">Testing, documentación, despliegue</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Buffer</td>
            <td class="p-4 border border-slate-200 text-sm">-</td>
            <td class="p-4 border border-slate-200 text-sm">12h</td>
            <td class="p-4 border border-slate-200 text-sm">Imprevistos y ajustes finales</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Actividad Práctica
    </div>
    <p>Crea un <strong>diagrama de Gantt</strong> que incluya:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Todas las tareas desglosadas (mínimo 20 tareas)</li>
        <li>Dependencias entre tareas (qué tarea bloquea a cuál)</li>
        <li>Hitos principales (marcados visualmente)</li>
        <li>Porcentaje de completitud real (si ya has empezado)</li>
    </ul>
</div>

<h3>7.2. Guía para el Presupuesto</h3>
<p>Un presupuesto realista demuestra viabilidad económica del proyecto:</p>

<h4>Tipos de Costes a Considerar</h4>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">💰 Costes de Desarrollo</h4>
        <p class="text-sm text-slate-600 mb-2">Inversión en tiempo de desarrollo:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>Horas de desarrollo × tarifa/hora</li>
            <li>Reuniones con el cliente/tutor</li>
            <li>Formación en tecnologías nuevas</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">🖥️ Costes de Infraestructura</h4>
        <p class="text-sm text-slate-600 mb-2">Recursos técnicos necesarios:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>Dominios y certificados SSL</li>
            <li>Hosting/servidores (mensual/anual)</li>
            <li>Servicios de terceros (email, SMS, etc.)</li>
        </ul>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-2">📜 Costes Legales</h4>
        <p class="text-sm text-slate-600 mb-2">Aspectos normativos y legales:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>Asesoría RGPD/protección de datos</li>
            <li>Registro de propiedad intelectual</li>
            <li>Seguros de responsabilidad civil</li>
        </ul>
    </div>
    <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
        <h4 class="font-bold text-orange-800 mb-2">📢 Costes de Marketing</h4>
        <p class="text-sm text-slate-600 mb-2">Promoción y lanzamiento:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>Diseño de imagen corporativa</li>
            <li>Publicidad en redes sociales</li>
            <li>Cuentas developer (App Store/Play Store)</li>
        </ul>
    </div>
</div>

<h4>Plantilla de Presupuesto</h4>
<p>Completa la siguiente tabla con los datos de TU proyecto:</p>

<pre class="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-6"><code class="language-text">┌─────────────────────────────────┬──────────────┬──────────────┬──────────────┐
│ Concepto                        │ Coste Único  │ Coste Mensual│ Coste Anual  │
├─────────────────────────────────┼──────────────┼──────────────┼──────────────┤
│ Desarrollo (___ horas × __€/h)  │      €       │      -       │      €       │
│ Dominio (.com/.es)              │      €       │      -       │      €       │
│ Hosting/Servidor (AWS, Azure)   │      -       │      €       │      €       │
│ Base de Datos                   │      -       │      €       │      €       │
│ Servicios Email/SMS             │      -       │      €       │      €       │
│ Cuentas Developer               │      €       │      -       │      €       │
│ Licencias Software              │      €       │      €       │      €       │
├─────────────────────────────────┼──────────────┼──────────────┼──────────────┤
│ TOTAL                           │      €       │      €       │      €       │
└─────────────────────────────────┴──────────────┴──────────────┴──────────────┘</code></pre>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📚</span> Recursos para Investigar
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>AWS Pricing Calculator:</strong> https://calculator.aws/ (estima costes en AWS)</li>
        <li><strong>Google Cloud Pricing:</strong> https://cloud.google.com/products/calculator</li>
        <li><strong>Namecheap:</strong> https://www.namecheap.com/ (precios de dominios)</li>
        <li><strong>Apple Developer Program:</strong> 99$/año | <strong>Google Play Console:</strong> 25$ único</li>
    </ul>
</div>

<h3>7.3. Guía para la Gestión de Riesgos</h3>
<p>Identificar riesgos anticipadamente te permitirá mitigarlos antes de que sean problemas:</p>

<h4>Matriz de Riesgos</h4>
<p>Para cada riesgo identificado, evalúa:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Categoría</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Riesgo</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Probabilidad</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Impacto</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Mitigación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Técnicos</td>
            <td class="p-4 border border-slate-200 text-sm">La tecnología elegida no es adecuada</td>
            <td class="p-4 border border-slate-200 text-sm">Baja/Media/Alta</td>
            <td class="p-4 border border-slate-200 text-sm">Bajo/Medio/Alto</td>
            <td class="p-4 border border-slate-200 text-sm">Prototipar temprano, tener plan B</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Temporales</td>
            <td class="p-4 border border-slate-200 text-sm">Retrasos en el desarrollo</td>
            <td class="p-4 border border-slate-200 text-sm">Baja/Media/Alta</td>
            <td class="p-4 border border-slate-200 text-sm">Bajo/Medio/Alto</td>
            <td class="p-4 border border-slate-200 text-sm">Buffer de tiempo, priorizar features</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Económicos</td>
            <td class="p-4 border border-slate-200 text-sm">Los costes superan el presupuesto</td>
            <td class="p-4 border border-slate-200 text-sm">Baja/Media/Alta</td>
            <td class="p-4 border border-slate-200 text-sm">Bajo/Medio/Alto</td>
            <td class="p-4 border border-slate-200 text-sm">Monitorizar gastos, usar free tiers</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Legales</td>
            <td class="p-4 border border-slate-200 text-sm">Incumplimiento normativo (RGPD)</td>
            <td class="p-4 border border-slate-200 text-sm">Baja/Media/Alta</td>
            <td class="p-4 border border-slate-200 text-sm">Bajo/Medio/Alto</td>
            <td class="p-4 border border-slate-200 text-sm">Consultar con experto, documentar todo</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📋</span> Tarea para el Alumnado
    </div>
    <p>Completa una matriz de riesgos con al menos <strong>8-10 riesgos</strong> específicos de tu proyecto. Para cada uno:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Describe el riesgo de forma concreta</li>
        <li>Evalúa probabilidad e impacto (usa colores: 🟢🟡🔴)</li>
        <li>Propón al menos 2 acciones de mitigación</li>
        <li>Indica quién sería responsable de cada acción</li>
    </ul>
</div>

<h3>7.4. Guía para el Retorno de Inversión (ROI)</h3>
<p>El ROI mide la rentabilidad del proyecto:</p>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📈</span> Fórmula del ROI
    </div>
    <pre class="bg-slate-900 text-slate-100 p-4 rounded-xl mt-3"><code class="language-text">ROI = ((Beneficio - Inversión) / Inversión) × 100

Ejemplo:
- Inversión inicial: 5.000€
- Beneficio anual estimado: 8.000€
- ROI = ((8000 - 5000) / 5000) × 100 = 60%</code></pre>
</div>

<h4>Métricas de Rentabilidad a Calcular</h4>
<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Métrica</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Descripción</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Fórmula/Referencia</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">ROI</td>
            <td class="p-4 border border-slate-200 text-sm">Retorno sobre la inversión</td>
            <td class="p-4 border border-slate-200 text-sm">((Beneficio - Inversión) / Inversión) × 100</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">VAN</td>
            <td class="p-4 border border-slate-200 text-sm">Valor Actual Neto</td>
            <td class="p-4 border border-slate-200 text-sm">Suma de flujos descontados - Inversión inicial</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">TIR</td>
            <td class="p-4 border border-slate-200 text-sm">Tasa Interna de Retorno</td>
            <td class="p-4 border border-slate-200 text-sm">Tasa que hace que VAN = 0</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Payback</td>
            <td class="p-4 border border-slate-200 text-sm">Periodo de recuperación</td>
            <td class="p-4 border border-slate-200 text-sm">Tiempo hasta recuperar la inversión</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Actividad Práctica
    </div>
    <p>Para tu proyecto, calcula:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>ROI a 1 año:</strong> ¿Cuánto se recupera en el primer año?</li>
        <li><strong>Payback:</strong> ¿En cuántos meses se amortiza la inversión?</li>
        <li><strong>Ahorros generados:</strong> Si aplica (ej: reducción de personal, menos errores)</li>
        <li><strong>Ingresos adicionales:</strong> Si aplica (ej: nuevos clientes, upselling)</li>
    </ul>
</div>
`;
