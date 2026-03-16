window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.viabilidad = `
<h3>3.1. Análisis DAFO</h3>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📋</span>
        <span>Guía para el Análisis DAFO</span>
    </div>
    <p class="text-sm text-slate-700 mb-3">
        El análisis DAFO (Debilidades, Amenazas, Fortalezas, Oportunidades) es una herramienta estratégica 
        fundamental para diagnosticar la situación del establecimiento. Completa cada cuadrante con al menos 
        4-5 puntos específicos y cuantificables cuando sea posible.
    </p>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-red-50 rounded-2xl border-2 border-red-200">
        <h4 class="font-bold text-red-900 mb-4 flex items-center gap-2 text-lg">
            <span class="text-2xl">❌</span>
            Debilidades (Internas)
        </h4>
        <p class="text-xs text-slate-600 mb-4">Factores internos que limitan el rendimiento del establecimiento</p>
        <ul class="space-y-2 text-sm text-slate-700">
            <li class="flex items-start gap-2">
                <span class="text-red-500 mt-0.5">•</span>
                <span><strong>Gestión manual de reservas:</strong> Procesos en papel y Excel propensos a errores</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-red-500 mt-0.5">•</span>
                <span><strong>Sin web de reservas propia:</strong> Dependencia total de intermediarios</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-red-500 mt-0.5">•</span>
                <span><strong>Personal sin formación digital:</strong> Resistencia al cambio tecnológico</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-red-500 mt-0.5">•</span>
                <span><strong>Base de datos de clientes inexistente:</strong> No hay historial de preferencias</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-red-500 mt-0.5">•</span>
                <span><strong>Comunicación reactiva:</strong> Tiempos de respuesta de 24-48 horas</span>
            </li>
        </ul>
    </div>
    
    <div class="p-6 bg-green-50 rounded-2xl border-2 border-green-200">
        <h4 class="font-bold text-green-900 mb-4 flex items-center gap-2 text-lg">
            <span class="text-2xl">✅</span>
            Fortalezas (Internas)
        </h4>
        <p class="text-xs text-slate-600 mb-4">Recursos y capacidades que dan ventaja competitiva</p>
        <ul class="space-y-2 text-sm text-slate-700">
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span><strong>Ubicación privilegiada:</strong> Primera línea de playa, vistas al mar</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span><strong>Clientes fieles:</strong> 40% de huéspedes repiten anualmente</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span><strong>Instalaciones renovadas:</strong> Reformas completadas en 2023</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span><strong>Equipo estable:</strong> Plantilla con más de 5 años de experiencia</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span><strong>Precios competitivos:</strong> 15% por debajo de la competencia directa</span>
            </li>
        </ul>
    </div>
    
    <div class="p-6 bg-amber-50 rounded-2xl border-2 border-amber-200">
        <h4 class="font-bold text-amber-900 mb-4 flex items-center gap-2 text-lg">
            <span class="text-2xl">⚠️</span>
            Amenazas (Externas)
        </h4>
        <p class="text-xs text-slate-600 mb-4">Factores externos que pueden afectar negativamente</p>
        <ul class="space-y-2 text-sm text-slate-700">
            <li class="flex items-start gap-2">
                <span class="text-amber-500 mt-0.5">•</span>
                <span><strong>Nuevos competidores:</strong> 3 complejos de apartamentos en construcción (2km)</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-amber-500 mt-0.5">•</span>
                <span><strong>Aumento comisiones OTAs:</strong> Tendencia al alza (18% → 22% previsto)</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-amber-500 mt-0.5">•</span>
                <span><strong>Cambio climático:</strong> Temporada de baño más corta por temperaturas</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-amber-500 mt-0.5">•</span>
                <span><strong>Regulación turística:</strong> Nueva ley de alquiler vacacional en tramitación</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-amber-500 mt-0.5">•</span>
                <span><strong>Crisis económica:</strong> Reducción del poder adquisitivo de familias</span>
            </li>
        </ul>
    </div>
    
    <div class="p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
        <h4 class="font-bold text-blue-900 mb-4 flex items-center gap-2 text-lg">
            <span class="text-2xl">🚀</span>
            Oportunidades (Externas)
        </h4>
        <p class="text-xs text-slate-600 mb-4">Tendencias del mercado que se pueden aprovechar</p>
        <ul class="space-y-2 text-sm text-slate-700">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 mt-0.5">✓</span>
                <span><strong>Turismo de larga estancia:</strong> Nómadas digitales (estancias 1-3 meses)</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 mt-0.5">✓</span>
                <span><strong>Destino seguro:</strong> España como referente turístico post-pandemia</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 mt-0.5">✓</span>
                <span><strong>Digitalización de PYMES:</strong> Ayudas y subvenciones disponibles</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 mt-0.5">✓</span>
                <span><strong>Turismo senior:</strong> Segmento en crecimiento con alto poder adquisitivo</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 mt-0.5">✓</span>
                <span><strong>Eventos locales:</strong> Nuevo centro de congresos en la ciudad (2026)</span>
            </li>
        </ul>
    </div>
</div>

<h3>3.2. Estrategias CAME</h3>

<p>
    Una vez completado el DAFO, desarrolla estrategias CAME (Corregir, Afrontar, Mantener, Explotar) 
    que conecten los diferentes cuadrantes:
</p>

<div class="my-8 overflow-x-auto">
    <table class="w-full text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="text-left py-3 px-4 font-bold text-slate-900">Estrategia</th>
                <th class="text-left py-3 px-4 font-bold text-slate-900">Combinación</th>
                <th class="text-left py-3 px-4 font-bold text-slate-900">Acción Propuesta</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-red-700">Corregir Debilidad</td>
                <td class="py-3 px-4 text-slate-700">D1 + O3</td>
                <td class="py-3 px-4 text-slate-700">Solicitar subvención para digitalización y formar al personal en nuevas herramientas</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-amber-700">Afrontar Amenaza</td>
                <td class="py-3 px-4 text-slate-700">A2 + F2</td>
                <td class="py-3 px-4 text-slate-700">Fidelizar clientes actuales con programa de ventajas para reducir dependencia de OTAs</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-green-700">Mantener Fortaleza</td>
                <td class="py-3 px-4 text-slate-700">F1 + F3</td>
                <td class="py-3 px-4 text-slate-700">Destacar ubicación y reformas en toda la comunicación y materiales de marketing</td>
            </tr>
            <tr>
                <td class="py-3 px-4 font-semibold text-blue-700">Explotar Oportunidad</td>
                <td class="py-3 px-4 text-slate-700">O1 + F5</td>
                <td class="py-3 px-4 text-slate-700">Crear paquetes de larga estancia con precios especiales para nómadas digitales</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>3.3. Viabilidad Financiera</h3>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>💰</span>
        <span>Inversión Estimada del Proyecto</span>
    </div>
    <table class="w-full text-sm">
        <thead>
            <tr class="border-b-2 border-amber-200">
                <th class="text-left py-3 text-amber-900">Concepto</th>
                <th class="text-right py-3 text-amber-900">Coste Anual</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-amber-100">
                <td class="py-3 text-slate-700">PMS + Channel Manager (Cloudbeds/Sirvoy)</td>
                <td class="py-3 text-right font-semibold text-slate-900">1.800€</td>
            </tr>
            <tr class="border-b border-amber-100">
                <td class="py-3 text-slate-700">Booking Engine (incluido en PMS)</td>
                <td class="py-3 text-right font-semibold text-slate-900">0€</td>
            </tr>
            <tr class="border-b border-amber-100">
                <td class="py-3 text-slate-700">Rediseño web corporativa</td>
                <td class="py-3 text-right font-semibold text-slate-900">2.500€</td>
            </tr>
            <tr class="border-b border-amber-100">
                <td class="py-3 text-slate-700">Formación del personal (20 horas)</td>
                <td class="py-3 text-right font-semibold text-slate-900">1.200€</td>
            </tr>
            <tr class="border-b border-amber-100">
                <td class="py-3 text-slate-700">Marketing digital (SEM, redes sociales)</td>
                <td class="py-3 text-right font-semibold text-slate-900">3.600€</td>
            </tr>
            <tr class="border-b border-amber-100">
                <td class="py-3 text-slate-700">Tablets para check-in online (2 unidades)</td>
                <td class="py-3 text-right font-semibold text-slate-900">800€</td>
            </tr>
            <tr class="bg-amber-50">
                <td class="py-3 font-bold text-amber-900">INVERSIÓN TOTAL AÑO 1</td>
                <td class="py-3 text-right font-bold text-amber-900">9.900€</td>
            </tr>
            <tr class="border-b border-amber-100">
                <td class="py-3 text-slate-700">Mantenimiento anual (a partir año 2)</td>
                <td class="py-3 text-right font-semibold text-slate-900">5.400€</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>3.4. Métricas Hoteleras Clave (KPIs)</h3>

<p>
    Para evaluar la viabilidad y el éxito del proyecto, debes dominar y calcular las siguientes métricas 
    del sector hotelero. Completa los valores con datos reales o estimados de tu establecimiento:
</p>

<div class="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-900 mb-3">📊 Occupancy Rate (OCC)</h4>
        <p class="text-xs text-slate-600 mb-3">Porcentaje de habitaciones ocupadas respecto al total disponible</p>
        <div class="bg-white rounded-lg p-4 font-mono text-sm">
            <code class="text-blue-700">OCC = (Habitaciones Ocupadas / Habitaciones Disponibles) × 100</code>
        </div>
        <p class="text-xs text-slate-500 mt-3"><strong>Ejemplo:</strong> 18/24 = 75% ocupación</p>
    </div>
    
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-900 mb-3">💶 ADR (Average Daily Rate)</h4>
        <p class="text-xs text-slate-600 mb-3">Precio medio por habitación vendida</p>
        <div class="bg-white rounded-lg p-4 font-mono text-sm">
            <code class="text-green-700">ADR = Ingresos por Habitaciones / Habitaciones Vendidas</code>
        </div>
        <p class="text-xs text-slate-500 mt-3"><strong>Ejemplo:</strong> 54.000€ / 540 = 100€ ADR</p>
    </div>
    
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-900 mb-3">📈 RevPAR (Revenue per Available Room)</h4>
        <p class="text-xs text-slate-600 mb-3">Ingreso por habitación disponible (métrica más completa)</p>
        <div class="bg-white rounded-lg p-4 font-mono text-sm">
            <code class="text-purple-700">RevPAR = ADR × OCC</code><br>
            <code class="text-purple-700">o RevPAR = Ingresos Totales / Habitaciones Disponibles</code>
        </div>
        <p class="text-xs text-slate-500 mt-3"><strong>Ejemplo:</strong> 100€ × 75% = 75€ RevPAR</p>
    </div>
    
    <div class="p-6 bg-pink-50 rounded-2xl border border-pink-100">
        <h4 class="font-bold text-pink-900 mb-3">⭐ NPS (Net Promoter Score)</h4>
        <p class="text-xs text-slate-600 mb-3">Medida de fidelidad y satisfacción del cliente</p>
        <div class="bg-white rounded-lg p-4 font-mono text-sm">
            <code class="text-pink-700">NPS = % Promotores - % Detractores</code>
        </div>
        <p class="text-xs text-slate-500 mt-3"><strong>Escala:</strong> -100 a +100 (objetivo: +50 o más)</p>
    </div>
</div>

<div class="callout callout-success my-6">
    <div class="callout-title">
        <span>🧮</span>
        <span>Ejercicio Práctico</span>
    </div>
    <p class="text-sm text-slate-700 mb-3">
        Calcula las métricas de tu establecimiento para el último año:
    </p>
    <table class="w-full text-sm">
        <thead>
            <tr class="border-b-2 border-green-200">
                <th class="text-left py-2 text-green-900">Métrica</th>
                <th class="text-center py-2 text-green-900">Fórmula</th>
                <th class="text-center py-2 text-green-900">Tu Cálculo</th>
                <th class="text-center py-2 text-green-900">Resultado</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-green-100">
                <td class="py-3 text-slate-700">Ocupación Media</td>
                <td class="py-3 text-center text-slate-600 text-xs">Noches vendidas / Noches disponibles</td>
                <td class="py-3 text-center"><input type="text" class="border rounded px-2 py-1 w-32 text-xs" placeholder="Ej: 6.570/8.760"></td>
                <td class="py-3 text-center font-bold text-slate-900">___%</td>
            </tr>
            <tr class="border-b border-green-100">
                <td class="py-3 text-slate-700">ADR</td>
                <td class="py-3 text-center text-slate-600 text-xs">Ingresos habitaciones / Noches vendidas</td>
                <td class="py-3 text-center"><input type="text" class="border rounded px-2 py-1 w-32 text-xs" placeholder="Ej: 180.000/6.570"></td>
                <td class="py-3 text-center font-bold text-slate-900">___€</td>
            </tr>
            <tr>
                <td class="py-3 text-slate-700">RevPAR</td>
                <td class="py-3 text-center text-slate-600 text-xs">ADR × OCC</td>
                <td class="py-3 text-center"><input type="text" class="border rounded px-2 py-1 w-32 text-xs" placeholder="Ej: 27€ × 75%"></td>
                <td class="py-3 text-center font-bold text-slate-900">___€</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>3.5. Retorno de la Inversión (ROI)</h3>

<p>
    Evalúa la viabilidad económica calculando el tiempo de amortización de la inversión:
</p>

<div class="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-4">Proyección de Ahorros y Mejores Ingresos</h4>
    <table class="w-full text-sm">
        <thead>
            <tr class="border-b-2 border-slate-300">
                <th class="text-left py-3 text-slate-900">Concepto</th>
                <th class="text-right py-3 text-slate-900">Año 1</th>
                <th class="text-right py-3 text-slate-900">Año 2</th>
                <th class="text-right py-3 text-slate-900">Año 3</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-slate-200">
                <td class="py-3 text-slate-700">Ahorro comisiones OTAs (reducir del 70% al 50%)</td>
                <td class="py-3 text-right text-green-600 font-semibold">+ 5.760€</td>
                <td class="py-3 text-right text-green-600 font-semibold">+ 5.760€</td>
                <td class="py-3 text-right text-green-600 font-semibold">+ 5.760€</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 text-slate-700">Aumento RevPAR (+15% por revenue management)</td>
                <td class="py-3 text-right text-green-600 font-semibold">+ 8.100€</td>
                <td class="py-3 text-right text-green-600 font-semibold">+ 8.100€</td>
                <td class="py-3 text-right text-green-600 font-semibold">+ 8.100€</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 text-slate-700">Reducción overbooking y errores</td>
                <td class="py-3 text-right text-green-600 font-semibold">+ 4.500€</td>
                <td class="py-3 text-right text-green-600 font-semibold">+ 4.500€</td>
                <td class="py-3 text-right text-green-600 font-semibold">+ 4.500€</td>
            </tr>
            <tr class="border-b border-slate-200 bg-slate-100">
                <td class="py-3 font-bold text-slate-900">BENEFICIO NETO ANUAL</td>
                <td class="py-3 text-right font-bold text-green-700">+ 18.360€</td>
                <td class="py-3 text-right font-bold text-green-700">+ 18.360€</td>
                <td class="py-3 text-right font-bold text-green-700">+ 18.360€</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 text-slate-700">(-) Inversión/Costes</td>
                <td class="py-3 text-right text-red-600 font-semibold">- 9.900€</td>
                <td class="py-3 text-right text-red-600 font-semibold">- 5.400€</td>
                <td class="py-3 text-right text-red-600 font-semibold">- 5.400€</td>
            </tr>
            <tr class="bg-green-50">
                <td class="py-3 font-bold text-green-900">SALDO NETO ACUMULADO</td>
                <td class="py-3 text-right font-bold text-green-700">+ 8.460€</td>
                <td class="py-3 text-right font-bold text-green-700">+ 21.420€</td>
                <td class="py-3 text-right font-bold text-green-700">+ 34.380€</td>
            </tr>
        </tbody>
    </table>
    <p class="text-xs text-slate-600 mt-4 text-center">
        <strong>Payback estimado:</strong> 7 meses | <strong>ROI a 3 años:</strong> 247%
    </p>
</div>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📝</span>
        <span>Para tu Proyecto</span>
    </div>
    <p class="text-sm text-slate-700 mb-0">
        Adapta estos cálculos a tu establecimiento real. Investiga precios actuales de herramientas PMS, 
        estima ocupaciones realistas según la zona y justifica cada cifra con fuentes del sector 
        (Exceltur, INE, informes de cadenas hoteleras).
    </p>
</div>
`;
