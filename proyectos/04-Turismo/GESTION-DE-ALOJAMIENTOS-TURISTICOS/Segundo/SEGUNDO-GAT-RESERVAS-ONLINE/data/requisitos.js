window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.requisitos = `
<h3>4.1. Requisitos Funcionales</h3>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📋</span>
        <span>Guía de Requisitos Funcionales</span>
    </div>
    <p class="text-sm text-slate-700 mb-3">
        Los requisitos funcionales describen <strong>qué debe hacer</strong> el sistema de gestión de reservas. 
        Cada requisito debe ser específico, medible y priorizado (Alta/Media/Baja prioridad).
    </p>
</div>

<div class="my-8 overflow-x-auto">
    <table class="w-full text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="text-left py-3 px-4 font-bold text-slate-900 w-16">ID</th>
                <th class="text-left py-3 px-4 font-bold text-slate-900">Requisito</th>
                <th class="text-left py-3 px-4 font-bold text-slate-900">Descripción</th>
                <th class="text-center py-3 px-4 font-bold text-slate-900">Prioridad</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-mono text-xs text-slate-600">RF-01</td>
                <td class="py-3 px-4 font-semibold text-slate-900">Gestión de disponibilidad</td>
                <td class="py-3 px-4 text-slate-700">El sistema debe permitir definir disponibilidad por tipo de apartamento y fecha</td>
                <td class="py-3 px-4 text-center"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-mono text-xs text-slate-600">RF-02</td>
                <td class="py-3 px-4 font-semibold text-slate-900">Sincronización OTAs</td>
                <td class="py-3 px-4 text-slate-700">El channel manager debe sincronizar disponibilidad con Booking, Airbnb y Expedia en tiempo real</td>
                <td class="py-3 px-4 text-center"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-mono text-xs text-slate-600">RF-03</td>
                <td class="py-3 px-4 font-semibold text-slate-900">Motor de reservas web</td>
                <td class="py-3 px-4 text-slate-700">Los clientes deben poder reservar directamente desde la web con confirmación instantánea</td>
                <td class="py-3 px-4 text-center"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-mono text-xs text-slate-600">RF-04</td>
                <td class="py-3 px-4 font-semibold text-slate-900">Gestión de tarifas</td>
                <td class="py-3 px-4 text-slate-700">El sistema debe permitir definir tarifas por temporada, tipo de habitación y longitud de estancia</td>
                <td class="py-3 px-4 text-center"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-mono text-xs text-slate-600">RF-05</td>
                <td class="py-3 px-4 font-semibold text-slate-900">Check-in online</td>
                <td class="py-3 px-4 text-slate-700">Los huéspedes deben poder completar el registro antes de la llegada mediante formulario digital</td>
                <td class="py-3 px-4 text-center"><span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">MEDIA</span></td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-mono text-xs text-slate-600">RF-06</td>
                <td class="py-3 px-4 font-semibold text-slate-900">Base de datos de clientes</td>
                <td class="py-3 px-4 text-slate-700">El CRM debe almacenar historial de estancias, preferencias y datos de contacto de cada huésped</td>
                <td class="py-3 px-4 text-center"><span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">MEDIA</span></td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-mono text-xs text-slate-600">RF-07</td>
                <td class="py-3 px-4 font-semibold text-slate-900">Comunicación automatizada</td>
                <td class="py-3 px-4 text-slate-700">El sistema debe enviar emails automáticos de confirmación, recordatorios pre-llegada y encuestas post-estancia</td>
                <td class="py-3 px-4 text-center"><span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">MEDIA</span></td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-mono text-xs text-slate-600">RF-08</td>
                <td class="py-3 px-4 font-semibold text-slate-900">Gestión de housekeeping</td>
                <td class="py-3 px-4 text-slate-700">El personal de limpieza debe poder consultar y actualizar el estado de limpieza de cada apartamento</td>
                <td class="py-3 px-4 text-center"><span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">MEDIA</span></td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-mono text-xs text-slate-600">RF-09</td>
                <td class="py-3 px-4 font-semibold text-slate-900">Reporting y KPIs</td>
                <td class="py-3 px-4 text-slate-700">El dashboard debe mostrar ocupación, ADR, RevPAR, ingresos y comparativas históricas</td>
                <td class="py-3 px-4 text-center"><span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">MEDIA</span></td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-mono text-xs text-slate-600">RF-10</td>
                <td class="py-3 px-4 font-semibold text-slate-900">Gestión de extras</td>
                <td class="py-3 px-4 text-slate-700">Los clientes deben poder añadir servicios adicionales (parking, cuna, late check-out) durante la reserva</td>
                <td class="py-3 px-4 text-center"><span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-bold">BAJA</span></td>
            </tr>
        </tbody>
    </table>
</div>

<h3>4.2. Requisitos No Funcionales</h3>

<p>
    Los requisitos no funcionales definen <strong>cómo debe comportarse</strong> el sistema en términos de 
    calidad, seguridad y rendimiento:
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
        <h4 class="font-bold text-indigo-900 mb-3 flex items-center gap-2">
            <span class="text-xl">⚡</span>
            Rendimiento
        </h4>
        <ul class="space-y-2 text-sm text-slate-700">
            <li class="flex items-start gap-2">
                <span class="text-indigo-500 mt-0.5">•</span>
                <span><strong>Tiempo de carga web:</strong> &lt; 3 segundos en 4G</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-indigo-500 mt-0.5">•</span>
                <span><strong>Sincronización OTAs:</strong> &lt; 5 minutos de latencia</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-indigo-500 mt-0.5">•</span>
                <span><strong>Disponibilidad del sistema:</strong> 99.5% (máx 4 horas de downtime/año)</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-indigo-500 mt-0.5">•</span>
                <span><strong>Proceso de reserva:</strong> Completar en &lt; 5 minutos</span>
            </li>
        </ul>
    </div>
    
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-900 mb-3 flex items-center gap-2">
            <span class="text-xl">🔒</span>
            Seguridad
        </h4>
        <ul class="space-y-2 text-sm text-slate-700">
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span><strong>Certificado SSL:</strong> HTTPS obligatorio en toda la web</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span><strong>RGPD:</strong> Cumplimiento normativa protección de datos europea</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span><strong>Pagos seguros:</strong> TPV virtual con certificación PCI-DSS</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span><strong>Backups:</strong> Copias de seguridad diarias automáticas</span>
            </li>
        </ul>
    </div>
    
    <div class="p-6 bg-amber-50 rounded-2xl border border-amber-100">
        <h4 class="font-bold text-amber-900 mb-3 flex items-center gap-2">
            <span class="text-xl">📱</span>
            Usabilidad
        </h4>
        <ul class="space-y-2 text-sm text-slate-700">
            <li class="flex items-start gap-2">
                <span class="text-amber-500 mt-0.5">•</span>
                <span><strong>Mobile-first:</strong> Diseño responsive adaptado a móviles</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-amber-500 mt-0.5">•</span>
                <span><strong>Idiomas:</strong> Español, inglés, francés y alemán mínimos</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-amber-500 mt-0.5">•</span>
                <span><strong>Accesibilidad:</strong> Cumplimiento WCAG 2.1 nivel AA</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-amber-500 mt-0.5">•</span>
                <span><strong>Formación:</strong> Personal capacitado en 2 semanas máximo</span>
            </li>
        </ul>
    </div>
    
    <div class="p-6 bg-pink-50 rounded-2xl border border-pink-100">
        <h4 class="font-bold text-pink-900 mb-3 flex items-center gap-2">
            <span class="text-xl">🔗</span>
            Integración
        </h4>
        <ul class="space-y-2 text-sm text-slate-700">
            <li class="flex items-start gap-2">
                <span class="text-pink-500 mt-0.5">•</span>
                <span><strong>APIs abiertas:</strong> Posibilidad de conectar con herramientas externas</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-pink-500 mt-0.5">•</span>
                <span><strong>Email marketing:</strong> Integración con Mailchimp/ActiveCampaign</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-pink-500 mt-0.5">•</span>
                <span><strong>Contabilidad:</strong> Exportación de datos a software contable</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-pink-500 mt-0.5">•</span>
                <span><strong>WhatsApp Business:</strong> API para comunicación automatizada</span>
            </li>
        </ul>
    </div>
</div>

<h3>4.3. Requisitos Legales y Normativos</h3>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>⚖️</span>
        <span>Cumplimiento Normativo en Turismo</span>
    </div>
    <p class="text-sm text-slate-700 mb-3">
        Los alojamientos turísticos deben cumplir con múltiples normativas. Verifica cada punto para tu proyecto:
    </p>
</div>

<div class="my-8">
    <table class="w-full text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="text-left py-3 px-4 font-bold text-slate-900 w-12">✓</th>
                <th class="text-left py-3 px-4 font-bold text-slate-900">Normativa</th>
                <th class="text-left py-3 px-4 font-bold text-slate-900">Requisito</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 text-center"><input type="checkbox" class="w-4 h-4"></td>
                <td class="py-3 px-4 font-semibold text-slate-900">RGPD (Protección de Datos)</td>
                <td class="py-3 px-4 text-slate-700">Consentimiento explícito para almacenar datos de huéspedes, política de privacidad visible</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 text-center"><input type="checkbox" class="w-4 h-4"></td>
                <td class="py-3 px-4 font-semibold text-slate-900">Ley de Servicios de la Sociedad de la Información</td>
                <td class="py-3 px-4 text-slate-700">Aviso legal, condiciones de contratación online, derecho de desistimiento</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 text-center"><input type="checkbox" class="w-4 h-4"></td>
                <td class="py-3 px-4 font-semibold text-slate-900">Normativa Turística Autonómica</td>
                <td class="py-3 px-4 text-slate-700">Registro de turismo de la Comunidad Valenciana, número de inscripción visible</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 text-center"><input type="checkbox" class="w-4 h-4"></td>
                <td class="py-3 px-4 font-semibold text-slate-900">Ley de Igualdad</td>
                <td class="py-3 px-4 text-slate-700">Lenguaje inclusivo en toda la comunicación, accesibilidad para PMR</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 text-center"><input type="checkbox" class="w-4 h-4"></td>
                <td class="py-3 px-4 font-semibold text-slate-900">Prevención de Blanqueo de Capitales</td>
                <td class="py-3 px-4 text-slate-700">Identificación de clientes, conservación de registros 5 años</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 text-center"><input type="checkbox" class="w-4 h-4"></td>
                <td class="py-3 px-4 font-semibold text-slate-900">Accesibilidad Universal</td>
                <td class="py-3 px-4 text-slate-700">Web accesible, al menos una habitación adaptada (si aplica por categoría)</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 text-center"><input type="checkbox" class="w-4 h-4"></td>
                <td class="py-3 px-4 font-semibold text-slate-900">Protección Consumidores</td>
                <td class="py-3 px-4 text-slate-700">Hoja de reclamaciones disponible, información clara de precios y condiciones</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>4.4. Matriz de Trazabilidad</h3>

<p>
    La matriz de trazabilidad conecta los objetivos del proyecto con los requisitos implementados:
</p>

<div class="my-8 overflow-x-auto">
    <table class="w-full text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="text-left py-3 px-4 font-bold text-slate-900">Objetivo</th>
                <th class="text-left py-3 px-4 font-bold text-slate-900">Requisitos Relacionados</th>
                <th class="text-center py-3 px-4 font-bold text-slate-900">KPI de Verificación</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 text-slate-700">Reducir overbooking a 0%</td>
                <td class="py-3 px-4 text-slate-600 text-xs">RF-01, RF-02, RNF-Rendimiento</td>
                <td class="py-3 px-4 text-center text-slate-600">0 incidentes/mes</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 text-slate-700">Aumentar reservas directas al 40%</td>
                <td class="py-3 px-4 text-slate-600 text-xs">RF-03, RF-04, RNF-Usabilidad</td>
                <td class="py-3 px-4 text-center text-slate-600">% reservas web vs total</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 text-slate-700">Mejorar NPS a 65 puntos</td>
                <td class="py-3 px-4 text-slate-600 text-xs">RF-05, RF-06, RF-07</td>
                <td class="py-3 px-4 text-center text-slate-600">Encuestas post-estancia</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 text-slate-700">Reducir tiempo check-in a 8 min</td>
                <td class="py-3 px-4 text-slate-600 text-xs">RF-05, RF-08</td>
                <td class="py-3 px-4 text-center text-slate-600">Tiempo medio registro</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="callout callout-success my-6">
    <div class="callout-title">
        <span>📝</span>
        <span>Actividad para el Alumnado</span>
    </div>
    <p class="text-sm text-slate-700 mb-3">
        Completa la matriz de trazabilidad con al menos 2 requisitos adicionales específicos de tu proyecto. 
        Justifica por qué cada requisito es necesario para alcanzar los objetivos.
    </p>
</div>
`;
