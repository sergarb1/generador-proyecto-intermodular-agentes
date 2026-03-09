window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.viabilidad = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📈</span> Objetivo de esta Sección
    </div>
    <p>La viabilidad demuestra que tu proyecto es realista y sostenible desde múltiples perspectivas: técnica, económica y operativa.</p>
</div>

<h3>3.1. Guía para el Análisis DAFO</h3>
<p>El análisis DAFO (Debilidades, Amenazas, Fortalezas, Oportunidades) evalúa la viabilidad estratégica:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span> Consejo Pedagógico
    </div>
    <p>El DAFO no es solo una lista: úsalo para derivar estrategias CAME (Corregir, Afrontar, Mantener, Explotar).</p>
</div>

<h4>Plantilla de DAFO para tu Proyecto</h4>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-red-50 rounded-2xl border border-red-100">
        <h4 class="font-bold text-red-800 mb-3 flex items-center gap-2">
            <span>⚠️</span> Debilidades
        </h4>
        <p class="text-sm text-slate-600 mb-2">Factores internos negativos que debes corregir:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>[Espacio para completar con tus debilidades]</li>
            <li>Ej: Equipo limitado (1 desarrollador)</li>
            <li>Ej: Sin certificaciones oficiales del sector</li>
            <li>Ej: Dependencia de servicios de terceros</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-3 flex items-center gap-2">
            <span>💪</span> Fortalezas
        </h4>
        <p class="text-sm text-slate-600 mb-2">Factores internos positivos que debes mantener:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>[Espacio para completar con tus fortalezas]</li>
            <li>Ej: Desarrollo ágil y personalizado</li>
            <li>Ej: Tecnologías modernas y escalables</li>
            <li>Ej: Conocimiento profundo del cliente</li>
        </ul>
    </div>
    <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
        <h4 class="font-bold text-orange-800 mb-3 flex items-center gap-2">
            <span>🚨</span> Amenazas
        </h4>
        <p class="text-sm text-slate-600 mb-2">Factores externos negativos que debes afrontar:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>[Espacio para completar con tus amenazas]</li>
            <li>Ej: Competidores establecidos con mayor presupuesto</li>
            <li>Ej: Cambios normativos imprevistos</li>
            <li>Ej: Posibles brechas de seguridad</li>
        </ul>
    </div>
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-3 flex items-center gap-2">
            <span>🎯</span> Oportunidades
        </h4>
        <p class="text-sm text-slate-600 mb-2">Factores externos positivos que debes explotar:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>[Espacio para completar con tus oportunidades]</li>
            <li>Ej: Crecimiento del mercado de telemedicina</li>
            <li>Ej: Digitalización acelerada post-pandemia</li>
            <li>Ej: Colaboraciones con otras clínicas</li>
        </ul>
    </div>
</div>

<h3>3.2. Estrategias CAME</h3>
<p>Deriva estrategias accionables del DAFO:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Estrategia</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Propósito</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Preguntas Guía</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Ejemplo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Corregir Debilidades</td>
            <td class="p-4 border border-slate-200 text-sm">Minimizar factores internos negativos</td>
            <td class="p-4 border border-slate-200 text-sm">¿Qué puedo mejorar internamente?</td>
            <td class="p-4 border border-slate-200 text-sm">Formación en seguridad y normativas</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Afrontar Amenazas</td>
            <td class="p-4 border border-slate-200 text-sm">Contrarrestar factores externos negativos</td>
            <td class="p-4 border border-slate-200 text-sm">¿Cómo me protejo de riesgos externos?</td>
            <td class="p-4 border border-slate-200 text-sm">Implementar cifrado E2E y backups</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Mantener Fortalezas</td>
            <td class="p-4 border border-slate-200 text-sm">Preservar factores internos positivos</td>
            <td class="p-4 border border-slate-200 text-sm">¿Qué ventajas debo preservar?</td>
            <td class="p-4 border border-slate-200 text-sm">Documentación exhaustiva del código</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Explotar Oportunidades</td>
            <td class="p-4 border border-slate-200 text-sm">Maximizar factores externos positivos</td>
            <td class="p-4 border border-slate-200 text-sm">¿Qué oportunidades puedo aprovechar?</td>
            <td class="p-4 border border-slate-200 text-sm">Plan de expansión por especialidades</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Completa una matriz CAME con al menos <strong>2-3 estrategias por categoría</strong>. Para cada una:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Describe la estrategia de forma concreta y accionable</li>
        <li>Indica qué elemento del DAFO aborda (referencia cruzada)</li>
        <li>Estima el esfuerzo requerido (bajo/medio/alto)</li>
        <li>Define un plazo estimado de implementación</li>
    </ul>
</div>

<h3>3.3. Guía para la Viabilidad Técnica</h3>
<p>Evalúa si tienes los recursos técnicos para completar el proyecto:</p>

<h4>Checklist de Viabilidad Técnica</h4>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">✅ Hardware y Equipamiento</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>¿Tienes ordenador suficiente potente?</li>
            <li>¿Necesitas dispositivos de test (móviles, tablets)?</li>
            <li>¿Tienes conexión a Internet estable?</li>
            <li>¿Necesitas servidores o hardware específico?</li>
        </ul>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">✅ Software y Herramientas</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>¿Todas las herramientas son gratuitas o tienes licencia?</li>
            <li>¿Conoces las tecnologías a usar o necesitas formación?</li>
            <li>¿Hay alternativas open-source viables?</li>
            <li>¿Las herramientas son compatibles entre sí?</li>
        </ul>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">✅ Conocimientos Técnicos</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>¿Dominas el lenguaje de programación principal?</li>
            <li>¿Tienes experiencia con la base de datos elegida?</li>
            <li>¿Sabes desplegar en el cloud seleccionado?</li>
            <li>¿Conoces las normativas aplicables (RGPD, accesibilidad)?</li>
        </ul>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">✅ Recursos Externos</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>¿Tienes acceso a un tutor/mentor disponible?</li>
            <li>¿Existen comunidades activas para resolver dudas?</li>
            <li>¿Hay documentación oficial suficiente?</li>
            <li>¿Puedes acceder a datos de prueba realistas?</li>
        </ul>
    </div>
</div>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📋</span> Evaluación de Viabilidad Técnica
    </div>
    <p>Para cada ítem del checklist anterior, indica:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Estado:</strong> ✅ Cubierto / ⚠️ Parcial / ❌ No cubierto</li>
        <li><strong>Acciones necesarias:</strong> Qué harás para cubrir los gaps</li>
        <li><strong>Plazo:</strong> Cuándo tendrás resuelto cada punto</li>
    </ul>
</div>

<h3>3.4. Guía para el Retorno de Inversión (ROI)</h3>
<p>El ROI mide la rentabilidad económica del proyecto:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>📈</span> Fórmula Básica del ROI
    </div>
    <pre class="bg-slate-900 text-slate-100 p-4 rounded-xl mt-3 overflow-x-auto"><code class="language-text">ROI = ((Beneficio Neto - Inversión) / Inversión) × 100

Resultado:
- ROI > 0%: El proyecto es rentable
- ROI = 0%: Punto de equilibrio (payback)
- ROI < 0%: El proyecto pierde dinero</code></pre>
</div>

<h4>Plantilla de Cálculo de ROI</h4>
<pre class="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-6"><code class="language-text">┌─────────────────────────────────────────────────────────────┐
│ 1. INVERSIÓN INICIAL                                        │
├─────────────────────────────────────────────────────────────┤
│ Desarrollo (___ horas × __€/hora)          € _________      │
│ Infraestructura inicial (servidores, etc.) € _________      │
│ Licencias y dominios                         € _________      │
│ Formación y aprendizaje                      € _________      │
├─────────────────────────────────────────────────────────────┤
│ INVERSIÓN TOTAL                              € _________      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 2. BENEFICIOS ANUALES                                       │
├─────────────────────────────────────────────────────────────┤
│ Ahorros de costes (detallar conceptos)     € _________      │
│ Ingresos adicionales (detallar fuentes)    € _________      │
│ Mejora de productividad (valor económico)  € _________      │
├─────────────────────────────────────────────────────────────┤
│ BENEFICIO NETO ANUAL                       € _________      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 3. CÁLCULO DEL ROI                                          │
├─────────────────────────────────────────────────────────────┤
│ ROI = ((_________ - _________) / _________) × 100           │
│ ROI = _________ %                                           │
│                                                               │
│ Periodo de recuperación (Payback): ___ meses/años           │
└─────────────────────────────────────────────────────────────┘</code></pre>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Completa el cálculo de ROI para tu proyecto:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Inversión:</strong> Calcula todas las costes iniciales (incluye tu tiempo)</li>
        <li><strong>Beneficios:</strong> Identifica ahorros e ingresos generados</li>
        <li><strong>ROI a 1 año:</strong> ¿Cuánto se recupera en el primer año?</li>
        <li><strong>Payback:</strong> ¿En cuántos meses se amortiza la inversión?</li>
        <li><strong>Escenarios:</strong> Calcula para escenario pesimista, realista y optimista</li>
    </ul>
</div>

<h3>3.5. Otras Métricas de Viabilidad Financiera</h3>
<p>Además del ROI, existen otras métricas que puedes calcular:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Métrica</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Descripción</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Fórmula</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Referencia</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">VAN</td>
            <td class="p-4 border border-slate-200 text-sm">Valor Actual Neto</td>
            <td class="p-4 border border-slate-200 text-sm">Σ (Flujo / (1+r)^t) - Inversión</td>
            <td class="p-4 border border-slate-200 text-sm">VAN > 0 = Viable</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">TIR</td>
            <td class="p-4 border border-slate-200 text-sm">Tasa Interna de Retorno</td>
            <td class="p-4 border border-slate-200 text-sm">Tasa que hace VAN = 0</td>
            <td class="p-4 border border-slate-200 text-sm">TIR > coste capital = Viable</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Payback</td>
            <td class="p-4 border border-slate-200 text-sm">Periodo de Recuperación</td>
            <td class="p-4 border border-slate-200 text-sm">Acumular flujos hasta igualar inversión</td>
            <td class="p-4 border border-slate-200 text-sm">Menor = Mejor</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">B/C</td>
            <td class="p-4 border border-slate-200 text-sm">Relación Beneficio/Coste</td>
            <td class="p-4 border border-slate-200 text-sm">Beneficios / Costes</td>
            <td class="p-4 border border-slate-200 text-sm">B/C > 1 = Viable</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📚</span> Recursos para Calcular
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Plantillas Excel:</strong> Busca "ROI calculator template" o "VAN TIR excel"</li>
        <li><strong>Calculadoras online:</strong> https://www.calculadoraro.com/ (VAN y TIR)</li>
        <li><strong>Videos tutoriales:</strong> YouTube: "cómo calcular VAN TIR excel"</li>
        <li><strong>Libros:</strong> "Finanzas para directivos" o similares en tu biblioteca</li>
    </ul>
</div>
`;
