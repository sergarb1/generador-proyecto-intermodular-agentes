window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.viabilidad = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🎯</span>
        <span>Objetivo de esta Sección</span>
    </div>
    <p>En esta sección debes demostrar que tu idea de negocio es viable tanto estratégica como financieramente. Para ello, completarás un análisis DAFO y calcularás los indicadores financieros clave (VAN, TIR, Payback).</p>
</div>

<h3>3.1. Guía para el Análisis DAFO</h3>

<p>El análisis DAFO te permite identificar los factores internos y externos que afectarán a tu empresa. Completa la siguiente tabla con al menos 4 elementos en cada cuadrante:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-red-50 rounded-xl border-2 border-red-200">
        <h4 class="font-bold text-red-800 mb-4 flex items-center gap-2 text-lg">
            <span>⚠️</span> DEBILIDADES (Internas)
        </h4>
        <p class="text-sm text-red-700 mb-3">Factores negativos que dependen de tu empresa:</p>
        <ul class="space-y-2 text-sm text-red-700">
            <li class="flex items-start gap-2">
                <span class="text-red-500 mt-0.5">•</span>
                <span><em>Ejemplo: "Empresa nueva sin cartera de clientes..."</em></span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-red-500 mt-0.5">•</span>
                <span>[Completa con tus debilidades]</span>
            </li>
        </ul>
    </div>
    
    <div class="p-6 bg-orange-50 rounded-xl border-2 border-orange-200">
        <h4 class="font-bold text-orange-800 mb-4 flex items-center gap-2 text-lg">
            <span>🌪️</span> AMENAZAS (Externas)
        </h4>
        <p class="text-sm text-orange-700 mb-3">Factores negativos del entorno que no controlas:</p>
        <ul class="space-y-2 text-sm text-orange-700">
            <li class="flex items-start gap-2">
                <span class="text-orange-500 mt-0.5">•</span>
                <span><em>Ejemplo: "Entrada de competidores grandes..."</em></span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-orange-500 mt-0.5">•</span>
                <span>[Completa con tus amenazas]</span>
            </li>
        </ul>
    </div>
    
    <div class="p-6 bg-green-50 rounded-xl border-2 border-green-200">
        <h4 class="font-bold text-green-800 mb-4 flex items-center gap-2 text-lg">
            <span>💪</span> FORTALEZAS (Internas)
        </h4>
        <p class="text-sm text-green-700 mb-3">Factores positivos que dependen de tu empresa:</p>
        <ul class="space-y-2 text-sm text-green-700">
            <li class="flex items-start gap-2">
                <span class="text-green-500 mt-0.5">•</span>
                <span><em>Ejemplo: "Equipo con experiencia complementaria..."</em></span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-green-500 mt-0.5">•</span>
                <span>[Completa con tus fortalezas]</span>
            </li>
        </ul>
    </div>
    
    <div class="p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
        <h4 class="font-bold text-blue-800 mb-4 flex items-center gap-2 text-lg">
            <span>🎯</span> OPORTUNIDADES (Externas)
        </h4>
        <p class="text-sm text-blue-700 mb-3">Factores positivos del entorno que puedes aprovechar:</p>
        <ul class="space-y-2 text-sm text-blue-700">
            <li class="flex items-start gap-2">
                <span class="text-blue-500 mt-0.5">•</span>
                <span><em>Ejemplo: "Ayudas públicas para digitalización..."</em></span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-500 mt-0.5">•</span>
                <span>[Completa con tus oportunidades]</span>
            </li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span>
        <span>Tarea para el Alumnado</span>
    </div>
    <p>Una vez completado el DAFO, define <strong>estrategias cruzadas</strong>:</p>
    <ul class="mt-2 space-y-1 text-sm">
        <li><strong>Estrategias FO:</strong> ¿Cómo usar tus fortalezas para aprovechar oportunidades?</li>
        <li><strong>Estrategias DO:</strong> ¿Cómo superar debilidades usando oportunidades?</li>
        <li><strong>Estrategias FA:</strong> ¿Cómo usar fortalezas para evitar amenazas?</li>
        <li><strong>Estrategias DA:</strong> ¿Cómo minimizar debilidades y evitar amenazas?</li>
    </ul>
</div>

<h3>3.2. Guía para el Cálculo de Viabilidad Financiera</h3>

<p>Para demostrar que tu proyecto es rentable, debes calcular tres indicadores clave. A continuación se explica qué significa cada uno y cómo se calcula:</p>

<h4>Indicadores a Calcular</h4>

<table class="w-full text-sm border-collapse my-4">
    <thead>
        <tr class="bg-slate-100 border-b border-slate-300">
            <th class="text-left p-3">Indicador</th>
            <th class="text-left p-3">¿Qué mide?</th>
            <th class="text-left p-3">Fórmula</th>
            <th class="text-left p-3">Valor de Referencia</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">VAN (Valor Actual Neto)</td>
            <td class="p-3 text-xs">El valor que crea el proyecto hoy, trayendo los flujos futuros al presente.</td>
            <td class="p-3 text-xs font-mono">VAN = Σ [Flujoₜ / (1+i)ᵗ] - Inversión</td>
            <td class="p-3 text-xs"><strong>Positivo:</strong> El proyecto crea valor</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">TIR (Tasa Interna de Retorno)</td>
            <td class="p-3 text-xs">La rentabilidad porcentual que obtienes de la inversión.</td>
            <td class="p-3 text-xs font-mono">TIR = tasa que hace VAN = 0</td>
            <td class="p-3 text-xs"><strong>> Coste financiero:</strong> Rentable</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Payback</td>
            <td class="p-3 text-xs">El tiempo que tardas en recuperar la inversión inicial.</td>
            <td class="p-3 text-xs font-mono">Acumular flujos hasta = Inversión</td>
            <td class="p-3 text-xs"><strong>Menor:</strong> Mejor liquidez</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span>
        <span>Consejo de Experto</span>
    </div>
    <p>Para calcular estos indicadores, usa una hoja de cálculo (Excel o Google Sheets):</p>
    <ul class="mt-2 space-y-1 text-sm">
        <li>• <strong>VAN:</strong> <code class="bg-slate-100 px-2 py-1 rounded">=VNA(tasa; rango_flujos) - inversión_inicial</code></li>
        <li>• <strong>TIR:</strong> <code class="bg-slate-100 px-2 py-1 rounded">=TIR(rango_flujos_incluyendo_inversión)</code></li>
        <li>• <strong>Payback:</strong> Acumula los flujos año a año hasta igualar la inversión</li>
    </ul>
</div>

<h4>Plantilla para tus Cálculos</h4>

<p>Completa la siguiente tabla con tus previsiones de flujos de caja (ingresos - pagos) para cada año:</p>

<table class="w-full text-sm border-collapse my-4">
    <thead>
        <tr class="bg-slate-100 border-b border-slate-300">
            <th class="text-left p-3">Concepto</th>
            <th class="text-right p-3">Año 0</th>
            <th class="text-right p-3">Año 1</th>
            <th class="text-right p-3">Año 2</th>
            <th class="text-right p-3">Año 3</th>
            <th class="text-right p-3">Año 4</th>
            <th class="text-right p-3">Año 5</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Inversión Inicial</td>
            <td class="text-right p-3">[Tu inversión]</td>
            <td class="text-right p-3"></td>
            <td class="text-right p-3"></td>
            <td class="text-right p-3"></td>
            <td class="text-right p-3"></td>
            <td class="text-right p-3"></td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3">(+ ) Ingresos</td>
            <td class="text-right p-3"></td>
            <td class="text-right p-3">[...]</td>
            <td class="text-right p-3">[...]</td>
            <td class="text-right p-3">[...]</td>
            <td class="text-right p-3">[...]</td>
            <td class="text-right p-3">[...]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3">(- ) Pagos</td>
            <td class="text-right p-3"></td>
            <td class="text-right p-3">[...]</td>
            <td class="text-right p-3">[...]</td>
            <td class="text-right p-3">[...]</td>
            <td class="text-right p-3">[...]</td>
            <td class="text-right p-3">[...]</td>
        </tr>
        <tr class="bg-slate-50 font-bold">
            <td class="p-3">= Flujo de Caja Neto</td>
            <td class="text-right p-3">[...]</td>
            <td class="text-right p-3">[...]</td>
            <td class="text-right p-3">[...]</td>
            <td class="text-right p-3">[...]</td>
            <td class="text-right p-3">[...]</td>
            <td class="text-right p-3">[...]</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📚</span>
        <span>Recursos para Investigar</span>
    </div>
    <ul class="mt-2 space-y-1 text-sm">
        <li>• Busca tutoriales de YouTube sobre "cómo calcular VAN TIR en Excel"</li>
        <li>• Consulta el libro "Principles of Corporate Finance" (Brealey, Myers) para la teoría financiera</li>
        <li>• Usa la calculadora financiera de tu móvil o una app como "Financial Calculator"</li>
    </ul>
</div>
`;
