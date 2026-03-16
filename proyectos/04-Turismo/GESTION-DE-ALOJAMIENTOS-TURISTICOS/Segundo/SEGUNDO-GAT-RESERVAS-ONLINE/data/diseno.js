window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.diseno = `
<h3>5.1. Customer Journey Map</h3>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>🗺️</span>
        <span>Guía para el Diseño del Viaje del Cliente</span>
    </div>
    <p class="text-sm text-slate-700 mb-3">
        El <strong>Customer Journey Map</strong> (Mapa de Viaje del Cliente) es una herramienta visual que 
        describe todas las interacciones del huésped con el establecimiento, desde que descubre la existencia 
        del alojamiento hasta después del check-out. Identifica puntos de contacto, emociones y oportunidades 
        de mejora en cada fase.
    </p>
</div>

<div class="my-8">
    <div class="grid grid-cols-5 gap-2 text-center text-xs">
        <div class="p-3 bg-blue-100 rounded-lg font-bold text-blue-900">🔍 Descubrimiento</div>
        <div class="p-3 bg-purple-100 rounded-lg font-bold text-purple-900">📅 Reserva</div>
        <div class="p-3 bg-green-100 rounded-lg font-bold text-green-900">🏠 Llegada</div>
        <div class="p-3 bg-amber-100 rounded-lg font-bold text-amber-900">⭐ Estancia</div>
        <div class="p-3 bg-pink-100 rounded-lg font-bold text-pink-900">👋 Salida</div>
    </div>
</div>

<h4>5.1.1. Fase: Descubrimiento</h4>

<div class="my-6 p-6 bg-slate-50 rounded-2xl border border-slate-200">
    <table class="w-full text-sm">
        <tbody>
            <tr class="border-b border-slate-200">
                <td class="py-3 font-semibold text-slate-700 w-32">Touchpoints</td>
                <td class="py-3 text-slate-900">Google Search, Booking.com, Instagram, recomendación boca a boca, Google Maps</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 font-semibold text-slate-700">Acciones del Cliente</td>
                <td class="py-3 text-slate-900">Busca "apartamentos playa [destino]", compara precios, lee valoraciones, visita web</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 font-semibold text-slate-700">Pensamientos</td>
                <td class="py-3 text-slate-900">"¿Es fiable?", "¿Las fotos son reales?", "¿Hay buenas opiniones?", "¿El precio incluye todo?"</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 font-semibold text-slate-700">Emociones</td>
                <td class="py-3 text-slate-900">
                    <span class="text-yellow-500">😐</span> Neutral → <span class="text-green-500">🙂</span> Interesado
                </td>
            </tr>
            <tr>
                <td class="py-3 font-semibold text-slate-700">Oportunidades</td>
                <td class="py-3 text-slate-900">SEO local optimizado, fotos profesionales, responder todas las reseñas, web rápida y clara</td>
            </tr>
        </tbody>
    </table>
</div>

<h4>5.1.2. Fase: Reserva</h4>

<div class="my-6 p-6 bg-slate-50 rounded-2xl border border-slate-200">
    <table class="w-full text-sm">
        <tbody>
            <tr class="border-b border-slate-200">
                <td class="py-3 font-semibold text-slate-700 w-32">Touchpoints</td>
                <td class="py-3 text-slate-900">Web corporativa, motor de reservas, email, WhatsApp, teléfono</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 font-semibold text-slate-700">Acciones del Cliente</td>
                <td class="py-3 text-slate-900">Selecciona fechas, elige apartamento, añade extras, introduce datos, realiza pago</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 font-semibold text-slate-700">Pensamientos</td>
                <td class="py-3 text-slate-900">"¿Es seguro pagar aquí?", "¿Puedo cancelar?", "¿He entendido bien las condiciones?"</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 font-semibold text-slate-700">Emociones</td>
                <td class="py-3 text-slate-900">
                    <span class="text-green-500">🙂</span> Esperanzado → <span class="text-yellow-500">😰</span> Precaución → <span class="text-green-500">😊</span> Alivio (confirmación)
                </td>
            </tr>
            <tr>
                <td class="py-3 font-semibold text-slate-700">Oportunidades</td>
                <td class="py-3 text-slate-900">Proceso en &lt;5 min, múltiples métodos de pago, condiciones claras, confirmación inmediata</td>
            </tr>
        </tbody>
    </table>
</div>

<h4>5.1.3. Fase: Llegada (Check-in)</h4>

<div class="my-6 p-6 bg-slate-50 rounded-2xl border border-slate-200">
    <table class="w-full text-sm">
        <tbody>
            <tr class="border-b border-slate-200">
                <td class="py-3 font-semibold text-slate-700 w-32">Touchpoints</td>
                <td class="py-3 text-slate-900">Email pre-llegada, WhatsApp, recepción, tablet check-in, llave/tarjeta</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 font-semibold text-slate-700">Acciones del Cliente</td>
                <td class="py-3 text-slate-900">Recibe instrucciones, completa check-in online, llega al alojamiento, recoge llaves</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 font-semibold text-slate-700">Pensamientos</td>
                <td class="py-3 text-slate-900">"¿Cómo llego?", "¿A qué hora puedo entrar?", "¿Estará todo limpio y preparado?"</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 font-semibold text-slate-700">Emociones</td>
                <td class="py-3 text-slate-900">
                    <span class="text-green-500">🤩</span> Emoción → <span class="text-yellow-500">😕</span> Confusión (si hay esperas)
                </td>
            </tr>
            <tr>
                <td class="py-3 font-semibold text-slate-700">Oportunidades</td>
                <td class="py-3 text-slate-900">Check-in online obligatorio, instrucciones claras con mapa, welcome pack, apartamento impecable</td>
            </tr>
        </tbody>
    </table>
</div>

<h4>5.1.4. Fase: Estancia</h4>

<div class="my-6 p-6 bg-slate-50 rounded-2xl border border-slate-200">
    <table class="w-full text-sm">
        <tbody>
            <tr class="border-b border-slate-200">
                <td class="py-3 font-semibold text-slate-700 w-32">Touchpoints</td>
                <td class="py-3 text-slate-900">Apartamento, WiFi, app/WhatsApp, housekeeping, recomendaciones locales</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 font-semibold text-slate-700">Acciones del Cliente</td>
                <td class="py-3 text-slate-900">Disfruta del alojamiento, solicita servicios, pide recomendaciones, hace actividades</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 font-semibold text-slate-700">Pensamientos</td>
                <td class="py-3 text-slate-900">"¿Todo funciona bien?", "¿A quién pido ayuda si lo necesito?", "¿Qué puedo hacer por la zona?"</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 font-semibold text-slate-700">Emociones</td>
                <td class="py-3 text-slate-900">
                    <span class="text-green-500">😊</span> Satisfacción → <span class="text-green-500">😍</span> Delight (si hay sorpresas positivas)
                </td>
            </tr>
            <tr>
                <td class="py-3 font-semibold text-slate-700">Oportunidades</td>
                <td class="py-3 text-slate-900">Guía digital del huésped, respuesta en &lt;1 hora, detalles de bienvenida, upselling de experiencias</td>
            </tr>
        </tbody>
    </table>
</div>

<h4>5.1.5. Fase: Salida y Post-Estancia</h4>

<div class="my-6 p-6 bg-slate-50 rounded-2xl border border-slate-200">
    <table class="w-full text-sm">
        <tbody>
            <tr class="border-b border-slate-200">
                <td class="py-3 font-semibold text-slate-700 w-32">Touchpoints</td>
                <td class="py-3 text-slate-900">Check-out, email agradecimiento, encuesta NPS, redes sociales, email fidelización</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 font-semibold text-slate-700">Acciones del Cliente</td>
                <td class="py-3 text-slate-900">Devuelve llaves, abandona apartamento, recibe encuesta, deja valoración, comparte experiencia</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 font-semibold text-slate-700">Pensamientos</td>
                <td class="py-3 text-slate-900">"¿Ha merecido la pena?", "¿Repetiría?", "¿Lo recomendaría?", "¿Me han tratado bien?"</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 font-semibold text-slate-700">Emociones</td>
                <td class="py-3 text-slate-900">
                    <span class="text-yellow-500">😌</span> Relajado → <span class="text-green-500">😊</span> Satisfecho → <span class="text-green-500">🥰</span> Leal
                </td>
            </tr>
            <tr>
                <td class="py-3 font-semibold text-slate-700">Oportunidades</td>
                <td class="py-3 text-slate-900">Check-out express, descuento próxima estancia, incentivo por reseña, contenido shareable</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>5.2. Protocolos de Atención al Cliente</h3>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>📞</span>
        <span>Estándares de Servicio</span>
    </div>
    <p class="text-sm text-slate-700 mb-3">
        Define protocolos claros para cada tipo de interacción. El personal debe conocerlos y aplicarlos 
        consistentemente para garantizar una experiencia uniforme y profesional.
    </p>
</div>

<h4>5.2.1. Tiempos de Respuesta Comprometidos</h4>

<div class="my-8">
    <table class="w-full text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="text-left py-3 px-4 font-bold text-slate-900">Canal</th>
                <th class="text-center py-3 px-4 font-bold text-slate-900">Tiempo Objetivo</th>
                <th class="text-center py-3 px-4 font-bold text-slate-900">Tiempo Máximo</th>
                <th class="text-center py-3 px-4 font-bold text-slate-900">Horario</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">WhatsApp Business</td>
                <td class="py-3 px-4 text-center text-green-600 font-bold">&lt; 15 min</td>
                <td class="py-3 px-4 text-center text-amber-600">30 min</td>
                <td class="py-3 px-4 text-center text-slate-600">8:00 - 22:00</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">Email consultas</td>
                <td class="py-3 px-4 text-center text-green-600 font-bold">&lt; 2 horas</td>
                <td class="py-3 px-4 text-center text-amber-600">4 horas</td>
                <td class="py-3 px-4 text-center text-slate-600">Laborables 9:00 - 18:00</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">Teléfono</td>
                <td class="py-3 px-4 text-center text-green-600 font-bold">&lt; 3 llamadas</td>
                <td class="py-3 px-4 text-center text-amber-600">5 llamadas</td>
                <td class="py-3 px-4 text-center text-slate-600">8:00 - 22:00</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">Redes sociales</td>
                <td class="py-3 px-4 text-center text-green-600 font-bold">&lt; 1 hora</td>
                <td class="py-3 px-4 text-center text-amber-600">2 horas</td>
                <td class="py-3 px-4 text-center text-slate-600">9:00 - 21:00</td>
            </tr>
            <tr>
                <td class="py-3 px-4 font-semibold text-slate-900">Incidencias en apartamento</td>
                <td class="py-3 px-4 text-center text-green-600 font-bold">&lt; 30 min</td>
                <td class="py-3 px-4 text-center text-red-600 font-bold">1 hora</td>
                <td class="py-3 px-4 text-center text-slate-600">24 horas</td>
            </tr>
        </tbody>
    </table>
</div>

<h4>5.2.2. Gestión de Quejas y Reclamaciones</h4>

<p>
    Implementa el método <strong>LEARN</strong> para la gestión profesional de quejas:
</p>

<div class="grid grid-cols-1 md:grid-cols-5 gap-4 my-8">
    <div class="p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">
        <div class="text-3xl font-bold text-blue-600 mb-2">L</div>
        <div class="text-xs font-bold text-blue-900 uppercase mb-2">Listen</div>
        <p class="text-xs text-slate-600 mb-0">Escuchar activamente sin interrumpir</p>
    </div>
    <div class="p-4 bg-purple-50 rounded-xl border border-purple-100 text-center">
        <div class="text-3xl font-bold text-purple-600 mb-2">E</div>
        <div class="text-xs font-bold text-purple-900 uppercase mb-2">Empathize</div>
        <p class="text-xs text-slate-600 mb-0">Mostrar empatía y comprensión</p>
    </div>
    <div class="p-4 bg-green-50 rounded-xl border border-green-100 text-center">
        <div class="text-3xl font-bold text-green-600 mb-2">A</div>
        <div class="text-xs font-bold text-green-900 uppercase mb-2">Apologize</div>
        <p class="text-xs text-slate-600 mb-0">Disculparse sinceramente</p>
    </div>
    <div class="p-4 bg-amber-50 rounded-xl border border-amber-100 text-center">
        <div class="text-3xl font-bold text-amber-600 mb-2">R</div>
        <div class="text-xs font-bold text-amber-900 uppercase mb-2">React</div>
        <p class="text-xs text-slate-600 mb-0">Actuar para resolver el problema</p>
    </div>
    <div class="p-4 bg-pink-50 rounded-xl border border-pink-100 text-center">
        <div class="text-3xl font-bold text-pink-600 mb-2">N</div>
        <div class="text-xs font-bold text-pink-900 uppercase mb-2">Notify</div>
        <p class="text-xs text-slate-600 mb-0">Informar del seguimiento</p>
    </div>
</div>

<h4>5.2.3. Script de Comunicación</h4>

<div class="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
    <h5 class="font-bold text-slate-900 mb-4">Ejemplo: Respuesta a Consulta de Reserva</h5>
    <div class="space-y-3 text-sm">
        <div class="p-4 bg-white rounded-lg border border-slate-200">
            <div class="text-xs font-bold text-slate-500 uppercase mb-2">Saludo Personalizado</div>
            <p class="text-slate-700 mb-0">"¡Hola [Nombre]! 👋 Gracias por contactar con Apartamentos La Bahía. Mi nombre es [Tu nombre] y estaré encantado/a de ayudarte."</p>
        </div>
        <div class="p-4 bg-white rounded-lg border border-slate-200">
            <div class="text-xs font-bold text-slate-500 uppercase mb-2">Confirmación de Disponibilidad</div>
            <p class="text-slate-700 mb-0">"He consultado nuestra disponibilidad para las fechas que indicas ([fechas]) y tengo buenas noticias: ¡tenemos apartamentos disponibles!"</p>
        </div>
        <div class="p-4 bg-white rounded-lg border border-slate-200">
            <div class="text-xs font-bold text-slate-500 uppercase mb-2">Propuesta de Valor</div>
            <p class="text-slate-700 mb-0">"Te recomiendo especialmente el Apartamento Superior con vistas al mar, que cuenta con [beneficios clave]. Es perfecto para [según perfil cliente]."</p>
        </div>
        <div class="p-4 bg-white rounded-lg border border-slate-200">
            <div class="text-xs font-bold text-slate-500 uppercase mb-2">Llamada a la Acción</div>
            <p class="text-slate-700 mb-0">"¿Te gustaría que te envíe un enlace directo para completar la reserva? Si reservas en las próximas 24 horas, puedo aplicarte un 5% de descuento por reserva anticipada."</p>
        </div>
        <div class="p-4 bg-white rounded-lg border border-slate-200">
            <div class="text-xs font-bold text-slate-500 uppercase mb-2">Cierre</div>
            <p class="text-slate-700 mb-0">"Quedo a tu disposición para cualquier duda. ¡Espero darte la bienvenida pronto! 🌊"</p>
        </div>
    </div>
</div>

<h3>5.3. Servicios del Establecimiento</h3>

<p>
    Define los servicios que ofrece el alojamiento, clasificados por categoría:
</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-green-50 rounded-2xl border-2 border-green-200">
        <h4 class="font-bold text-green-900 mb-4 flex items-center gap-2">
            <span class="text-xl">✅</span>
            Servicios Básicos
        </h4>
        <ul class="space-y-2 text-sm text-slate-700">
            <li class="flex items-center gap-2">
                <input type="checkbox" checked class="w-4 h-4 text-green-600">
                <span>WiFi de alta velocidad</span>
            </li>
            <li class="flex items-center gap-2">
                <input type="checkbox" checked class="w-4 h-4 text-green-600">
                <span>Aire acondicionado / Calefacción</span>
            </li>
            <li class="flex items-center gap-2">
                <input type="checkbox" checked class="w-4 h-4 text-green-600">
                <span>Cocina equipada completa</span>
            </li>
            <li class="flex items-center gap-2">
                <input type="checkbox" checked class="w-4 h-4 text-green-600">
                <span>Ropa de cama y toallas</span>
            </li>
            <li class="flex items-center gap-2">
                <input type="checkbox" checked class="w-4 h-4 text-green-600">
                <span>Limpieza final incluida</span>
            </li>
            <li class="flex items-center gap-2">
                <input type="checkbox" checked class="w-4 h-4 text-green-600">
                <span>Recepción (horario limitado)</span>
            </li>
        </ul>
    </div>
    
    <div class="p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
        <h4 class="font-bold text-blue-900 mb-4 flex items-center gap-2">
            <span class="text-xl">⭐</span>
            Servicios Diferenciales
        </h4>
        <ul class="space-y-2 text-sm text-slate-700">
            <li class="flex items-center gap-2">
                <input type="checkbox" checked class="w-4 h-4 text-blue-600">
                <span>Check-in online express</span>
            </li>
            <li class="flex items-center gap-2">
                <input type="checkbox" checked class="w-4 h-4 text-blue-600">
                <span>Guía digital del huésped</span>
            </li>
            <li class="flex items-center gap-2">
                <input type="checkbox" checked class="w-4 h-4 text-blue-600">
                <span>Concierge virtual 24h</span>
            </li>
            <li class="flex items-center gap-2">
                <input type="checkbox" checked class="w-4 h-4 text-blue-600">
                <span>Welcome pack de bienvenida</span>
            </li>
            <li class="flex items-center gap-2">
                <input type="checkbox" checked class="w-4 h-4 text-blue-600">
                <span>Recomendaciones personalizadas</span>
            </li>
            <li class="flex items-center gap-2">
                <input type="checkbox" checked class="w-4 h-4 text-blue-600">
                <span>Late check-out (según disponibilidad)</span>
            </li>
        </ul>
    </div>
    
    <div class="p-6 bg-purple-50 rounded-2xl border-2 border-purple-200">
        <h4 class="font-bold text-purple-900 mb-4 flex items-center gap-2">
            <span class="text-xl">💎</span>
            Servicios Premium (Extra)
        </h4>
        <ul class="space-y-2 text-sm text-slate-700">
            <li class="flex items-center gap-2">
                <input type="checkbox" class="w-4 h-4 text-purple-600">
                <span>Transfer aeropuerto/apartamento (35€)</span>
            </li>
            <li class="flex items-center gap-2">
                <input type="checkbox" class="w-4 h-4 text-purple-600">
                <span>Compra previa de supermercado (15€ + compra)</span>
            </li>
            <li class="flex items-center gap-2">
                <input type="checkbox" class="w-4 h-4 text-purple-600">
                <span>Limpieza durante estancia (25€/sesión)</span>
            </li>
            <li class="flex items-center gap-2">
                <input type="checkbox" class="w-4 h-4 text-purple-600">
                <span>Alquiler de bicicletas (10€/día)</span>
            </li>
            <li class="flex items-center gap-2">
                <input type="checkbox" class="w-4 h-4 text-purple-600">
                <span>Reserva de experiencias locales (comisión)</span>
            </li>
            <li class="flex items-center gap-2">
                <input type="checkbox" class="w-4 h-4 text-purple-600">
                <span>Cena preparada en apartamento (desde 40€)</span>
            </li>
        </ul>
    </div>
</div>

<div class="callout callout-success my-6">
    <div class="callout-title">
        <span>📝</span>
        <span>Actividad para el Alumnado</span>
    </div>
    <p class="text-sm text-slate-700 mb-3">
        Completa el Customer Journey Map de tu establecimiento identificando:
    </p>
    <ol class="space-y-2 text-sm text-slate-700 list-decimal pl-6">
        <li>Al menos 3 touchpoints por fase que no estén en el ejemplo</li>
        <li>Las emociones reales que podría sentir un huésped (sé honesto/a)</li>
        <li>2 oportunidades de mejora concretas por fase</li>
        <li>Un protocolo específico para una situación problemática común</li>
    </ol>
    <p class="text-sm text-slate-700 mt-4 mb-0">
        Incluye este análisis en los Anexos con un diagrama visual.
    </p>
</div>
`;
