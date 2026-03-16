window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.administracion = `
<h3>7.1. Revenue Management</h3>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📊</span>
        <span>Guía de Revenue Management para Alojamientos</span>
    </div>
    <p class="text-sm text-slate-700 mb-3">
        El <strong>Revenue Management</strong> (gestión de ingresos) es la práctica de vender la habitación 
        adecuada, al cliente adecuado, en el momento adecuado, al precio adecuado. Para apartamentos turísticos, 
        se basa en ajustar precios dinámicamente según la demanda.
    </p>
</div>

<h4>7.1.1. Estrategia de Precios Dinámicos</h4>

<p>
    Implementa un sistema de precios que responda a los siguientes factores:
</p>

<div class="my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="p-5 bg-blue-50 rounded-xl border border-blue-100">
        <h5 class="font-bold text-blue-900 mb-3 flex items-center gap-2">
            <span class="text-xl">📅</span>
            Temporada
        </h5>
        <ul class="space-y-2 text-xs text-slate-700">
            <li>• Alta (Jun-Sep): +40-60%</li>
            <li>• Media (Abr-May, Oct): +10-20%</li>
            <li>• Baja (Nov-Mar): precio base</li>
            <li>• Festivos locales: +50-80%</li>
        </ul>
    </div>
    
    <div class="p-5 bg-purple-50 rounded-xl border border-purple-100">
        <h5 class="font-bold text-purple-900 mb-3 flex items-center gap-2">
            <span class="text-xl">📈</span>
            Ocupación Prevista
        </h5>
        <ul class="space-y-2 text-xs text-slate-700">
            <li>• <50%: -10% (estimular)</li>
            <li>• 50-70%: precio estándar</li>
            <li>• 70-85%: +10%</li>
            <li>• >85%: +20-30%</li>
        </ul>
    </div>
    
    <div class="p-5 bg-green-50 rounded-xl border border-green-100">
        <h5 class="font-bold text-green-900 mb-3 flex items-center gap-2">
            <span class="text-xl">🏠</span>
            Antelación Reserva
        </h5>
        <ul class="space-y-2 text-xs text-slate-700">
            <li>• >60 días: -10% (early bird)</li>
            <li>• 30-60 días: precio estándar</li>
            <li>• 7-30 días: +10%</li>
            <li>• <7 días: +20% (last minute)</li>
        </ul>
    </div>
</div>

<h4>7.1.2. Análisis de la Competencia</h4>

<p>
    Monitoriza los precios de tu competencia directa para posicionar tu oferta correctamente:
</p>

<div class="my-8 overflow-x-auto">
    <table class="w-full text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="text-left py-3 px-4 font-bold text-slate-900">Competidor</th>
                <th class="text-center py-3 px-4 font-bold text-slate-900">Categoría</th>
                <th class="text-center py-3 px-4 font-bold text-slate-900">Precio Bajo</th>
                <th class="text-center py-3 px-4 font-bold text-slate-900">Precio Alto</th>
                <th class="text-center py-3 px-4 font-bold text-slate-900">Valoración</th>
                <th class="text-center py-3 px-4 font-bold text-slate-900">Posicionamiento</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">Apartamentos La Bahía</td>
                <td class="py-3 px-4 text-center text-slate-700">3* Sup</td>
                <td class="py-3 px-4 text-center font-bold text-green-600">45€</td>
                <td class="py-3 px-4 text-center font-bold text-green-600">180€</td>
                <td class="py-3 px-4 text-center text-slate-700">7.8</td>
                <td class="py-3 px-4 text-center"><span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-bold">PROPIO</span></td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">Residencial Mar Azul</td>
                <td class="py-3 px-4 text-center text-slate-700">3*</td>
                <td class="py-3 px-4 text-center text-slate-700">50€</td>
                <td class="py-3 px-4 text-center text-slate-700">160€</td>
                <td class="py-3 px-4 text-center text-slate-700">8.2</td>
                <td class="py-3 px-4 text-center"><span class="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">Similar</span></td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">Suites del Puerto</td>
                <td class="py-3 px-4 text-center text-slate-700">4*</td>
                <td class="py-3 px-4 text-center text-slate-700">80€</td>
                <td class="py-3 px-4 text-center text-slate-700">250€</td>
                <td class="py-3 px-4 text-center text-slate-700">9.1</td>
                <td class="py-3 px-4 text-center"><span class="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs">Premium</span></td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">Hostal Central</td>
                <td class="py-3 px-4 text-center text-slate-700">2*</td>
                <td class="py-3 px-4 text-center text-slate-700">35€</td>
                <td class="py-3 px-4 text-center text-slate-700">90€</td>
                <td class="py-3 px-4 text-center text-slate-700">7.5</td>
                <td class="py-3 px-4 text-center"><span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Económico</span></td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">Villa Mediterráneo</td>
                <td class="py-3 px-4 text-center text-slate-700">4* Sup</td>
                <td class="py-3 px-4 text-center text-slate-700">90€</td>
                <td class="py-3 px-4 text-center text-slate-700">300€</td>
                <td class="py-3 px-4 text-center text-slate-700">9.4</td>
                <td class="py-3 px-4 text-center"><span class="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">Lujo</span></td>
            </tr>
        </tbody>
    </table>
</div>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>💡</span>
        <span>Consejo de Revenue Management</span>
    </div>
    <p class="text-sm text-slate-700 mb-0">
        No compitas solo por precio. Diferénciate por valor: mejor ubicación, apartamentos renovados, 
        atención personalizada, servicios adicionales. Un huésped dispuesto a pagar más por mejor 
        experiencia genera más revenue y deja mejores valoraciones.
    </p>
</div>

<h3>7.2. Gestión de Reservas</h3>

<h4>7.2.1. Flujo de Gestión de Reservas</h4>

<div class="my-8">
    <div class="grid grid-cols-1 md:grid-cols-6 gap-2">
        <div class="p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">
            <div class="text-2xl mb-2">📩</div>
            <div class="text-xs font-bold text-blue-900 mb-1">Recepción</div>
            <p class="text-xs text-slate-600 mb-0">Web, OTA, email, teléfono</p>
        </div>
        <div class="p-4 bg-purple-50 rounded-xl border border-purple-100 text-center">
            <div class="text-2xl mb-2">✅</div>
            <div class="text-xs font-bold text-purple-900 mb-1">Confirmación</div>
            <p class="text-xs text-slate-600 mb-0">Automática + email</p>
        </div>
        <div class="p-4 bg-green-50 rounded-xl border border-green-100 text-center">
            <div class="text-2xl mb-2">💳</div>
            <div class="text-xs font-bold text-green-900 mb-1">Pago</div>
            <p class="text-xs text-slate-600 mb-0">Señal o total</p>
        </div>
        <div class="p-4 bg-amber-50 rounded-xl border border-amber-100 text-center">
            <div class="text-2xl mb-2">📝</div>
            <div class="text-xs font-bold text-amber-900 mb-1">Check-in</div>
            <p class="text-xs text-slate-600 mb-0">Online o presencial</p>
        </div>
        <div class="p-4 bg-pink-50 rounded-xl border border-pink-100 text-center">
            <div class="text-2xl mb-2">🏠</div>
            <div class="text-xs font-bold text-pink-900 mb-1">Estancia</div>
            <p class="text-xs text-slate-600 mb-0">Servicio + incidencias</p>
        </div>
        <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-center">
            <div class="text-2xl mb-2">👋</div>
            <div class="text-xs font-bold text-indigo-900 mb-1">Check-out</div>
            <p class="text-xs text-slate-600 mb-0">Valoración + fidelización</p>
        </div>
    </div>
</div>

<h4>7.2.2. Gestión de Overbooking</h4>

<p>
    Aunque el channel manager minimiza el riesgo, establece un protocolo para casos excepcionales:
</p>

<div class="my-8 p-6 bg-red-50 rounded-2xl border-2 border-red-200">
    <h5 class="font-bold text-red-900 mb-4 flex items-center gap-2">
        <span class="text-xl">⚠️</span>
        Protocolo de Overbooking
    </h5>
    <ol class="space-y-3 text-sm text-slate-700 list-decimal pl-6">
        <li><strong>Detección inmediata:</strong> El PMS debe alertar automáticamente cuando se produce un overbooking</li>
        <li><strong>Comunicación proactiva:</strong> Contactar al huésped ANTES de su llegada, nunca al llegar</li>
        <li><strong>Disculpa sincera:</strong> Reconocer el error sin excusas, mostrar empatía</li>
        <li><strong>Solución alternativa:</strong> Ofrecer alojamiento equivalente o superior en establecimiento cercano</li>
        <li><strong>Compensación:</strong> Cubrir diferencia de precio + transporte + noche gratuita futura o reembolso del 150%</li>
        <li><strong>Seguimiento:</strong> Llamar durante la estancia para asegurar satisfacción con la solución</li>
        <li><strong>Análisis post-incidente:</strong> Investigar causa raíz y ajustar configuración del channel manager</li>
    </ol>
</div>

<h3>7.3. Marketing Turístico Digital</h3>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📱</span>
        <span>Estrategia de Marketing Multicanal</span>
    </div>
    <p class="text-sm text-slate-700 mb-3">
        Para aumentar las reservas directas y reducir la dependencia de OTAs, implementa una estrategia 
        de marketing digital integrada:
    </p>
</div>

<h4>7.3.1. Plan de Marketing Digital</h4>

<div class="my-8 overflow-x-auto">
    <table class="w-full text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="text-left py-3 px-4 font-bold text-slate-900">Canal</th>
                <th class="text-left py-3 px-4 font-bold text-slate-900">Acción</th>
                <th class="text-center py-3 px-4 font-bold text-slate-900">Frecuencia</th>
                <th class="text-center py-3 px-4 font-bold text-slate-900">Presupuesto</th>
                <th class="text-center py-3 px-4 font-bold text-slate-900">KPI</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">Google Ads (SEM)</td>
                <td class="py-3 px-4 text-slate-700">Campañas búsqueda "apartamentos [destino]"</td>
                <td class="py-3 px-4 text-center text-slate-600">Continuo</td>
                <td class="py-3 px-4 text-center text-slate-700">800€/mes</td>
                <td class="py-3 px-4 text-center text-slate-600">ROAS > 4:1</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">SEO Web</td>
                <td class="py-3 px-4 text-slate-700">Optimización contenido, blog local, backlinks</td>
                <td class="py-3 px-4 text-center text-slate-600">2 posts/mes</td>
                <td class="py-3 px-4 text-center text-slate-700">300€/mes</td>
                <td class="py-3 px-4 text-center text-slate-600">Top 3 keywords locales</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">Instagram</td>
                <td class="py-3 px-4 text-slate-700">Fotos apartamentos, stories, reels del destino</td>
                <td class="py-3 px-4 text-center text-slate-600">4 posts/semana</td>
                <td class="py-3 px-4 text-center text-slate-700">200€/mes (ads)</td>
                <td class="py-3 px-4 text-center text-slate-600">+15% seguidores/mes</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">Email Marketing</td>
                <td class="py-3 px-4 text-slate-700">Newsletter, ofertas, recordatorios, post-estancia</td>
                <td class="py-3 px-4 text-center text-slate-600">2 emails/mes</td>
                <td class="py-3 px-4 text-center text-slate-700">50€/mes (tool)</td>
                <td class="py-3 px-4 text-center text-slate-600">Open rate >25%</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">Google My Business</td>
                <td class="py-3 px-4 text-slate-700">Fotos actualizadas, responder reseñas, posts</td>
                <td class="py-3 px-4 text-center text-slate-600">Semanal</td>
                <td class="py-3 px-4 text-center text-slate-700">0€</td>
                <td class="py-3 px-4 text-center text-slate-600">4.5+ estrellas</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">Programa Fidelización</td>
                <td class="py-3 px-4 text-slate-700">Descuento 10% segunda estancia, email personalizado</td>
                <td class="py-3 px-4 text-center text-slate-600">Automático</td>
                <td class="py-3 px-4 text-center text-slate-700">Margen</td>
                <td class="py-3 px-4 text-center text-slate-600">30% repetidores</td>
            </tr>
        </tbody>
    </table>
</div>

<h4>7.3.2. Optimización de Perfil en OTAs</h4>

<p>
    Aunque el objetivo es reducir dependencia de OTAs, es crucial maximizar el rendimiento de las que existen:
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h5 class="font-bold text-blue-900 mb-3">📸 Booking.com</h5>
        <ul class="space-y-2 text-sm text-slate-700">
            <li class="flex items-start gap-2">
                <span class="text-blue-600 mt-0.5">✓</span>
                <span><strong>Fotos profesionales:</strong> Mínimo 20 fotos de alta calidad</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 mt-0.5">✓</span>
                <span><strong>Genius Partner:</strong> Ofrecer descuentos para miembros Genius</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 mt-0.5">✓</span>
                <span><strong>Mobile rate:</strong> -10% para reservas desde móvil</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 mt-0.5">✓</span>
                <span><strong>Responder reseñas:</strong> 100% de respuestas en <24h</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-600 mt-0.5">✓</span>
                <span><strong>Preferred Partner:</strong> Mantener score >8.0 para visibilidad</span>
            </li>
        </ul>
    </div>
    
    <div class="p-6 bg-pink-50 rounded-2xl border border-pink-100">
        <h5 class="font-bold text-pink-900 mb-3">🏠 Airbnb</h5>
        <ul class="space-y-2 text-sm text-slate-700">
            <li class="flex items-start gap-2">
                <span class="text-pink-600 mt-0.5">✓</span>
                <span><strong>Superhost:</strong> Mantener criterios (respuesta <1h, 0 cancelaciones)</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-pink-600 mt-0.5">✓</span>
                <span><strong>Instant Book:</strong> Activado para mayor visibilidad</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-pink-600 mt-0.5">✓</span>
                <span><strong>Guía del anfitrión:</strong> Completa con recomendaciones locales</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-pink-600 mt-0.5">✓</span>
                <span><strong>Precios inteligentes:</strong> Usar herramienta Smart Pricing</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-pink-600 mt-0.5">✓</span>
                <span><strong>Experiencias:</strong> Ofrecer actividades adicionales</span>
            </li>
        </ul>
    </div>
</div>

<h3>7.4. Prevención de Riesgos Laborales</h3>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Checklist de Seguridad en Alojamientos Turísticos</span>
    </div>
</div>

<div class="my-8">
    <table class="w-full text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="text-left py-3 px-4 font-bold text-slate-900 w-12">✓</th>
                <th class="text-left py-3 px-4 font-bold text-slate-900">Riesgo</th>
                <th class="text-left py-3 px-4 font-bold text-slate-900">Medida Preventiva</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 text-center"><input type="checkbox" class="w-4 h-4"></td>
                <td class="py-3 px-4 font-semibold text-slate-900">Caídas mismo nivel</td>
                <td class="py-3 px-4 text-slate-700">Suelos antideslizantes, limpieza inmediata de derrames, calzado adecuado</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 text-center"><input type="checkbox" class="w-4 h-4"></td>
                <td class="py-3 px-4 font-semibold text-slate-900">Cortes con objetos</td>
                <td class="py-3 px-4 text-slate-700">Guantes de limpieza, recogida de cristales rotos con escoba (no manos)</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 text-center"><input type="checkbox" class="w-4 h-4"></td>
                <td class="py-3 px-4 font-semibold text-slate-900">Productos químicos</td>
                <td class="py-3 px-4 text-slate-700">Fichas de seguridad disponibles, ventilación, guantes y mascarilla</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 text-center"><input type="checkbox" class="w-4 h-4"></td>
                <td class="py-3 px-4 font-semibold text-slate-900">Sobreesfuerzos</td>
                <td class="py-3 px-4 text-slate-700">Técnica correcta de levantamiento, carros de limpieza ergonómicos</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 text-center"><input type="checkbox" class="w-4 h-4"></td>
                <td class="py-3 px-4 font-semibold text-slate-900">Estrés/Atención público</td>
                <td class="py-3 px-4 text-slate-700">Formación en gestión de conflictos, pausas activas, rotación de tareas</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 text-center"><input type="checkbox" class="w-4 h-4"></td>
                <td class="py-3 px-4 font-semibold text-slate-900">Incendio</td>
                <td class="py-3 px-4 text-slate-700">Extintores revisados, plan de evacuación, simulacros anuales</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 text-center"><input type="checkbox" class="w-4 h-4"></td>
                <td class="py-3 px-4 font-semibold text-slate-900">Eléctricos</td>
                <td class="py-3 px-4 text-slate-700">Revisiones periódicas, no usar equipos dañados, interruptores diferenciales</td>
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
        Diseña un plan de revenue management para tu establecimiento que incluya:
    </p>
    <ol class="space-y-2 text-sm text-slate-700 list-decimal pl-6">
        <li>Calendario de temporadas con fechas exactas</li>
        <li>Precios base por tipo de apartamento y temporada</li>
        <li>Reglas de pricing dinámico (mínimo 5 reglas)</li>
        <li>Análisis de 3 competidores directos con sus precios</li>
        <li>Plan de marketing digital con presupuesto mensual detallado</li>
    </ol>
    <p class="text-sm text-slate-700 mt-4 mb-0">
        Presenta los resultados en formato tabla y justifica cada decisión.
    </p>
</div>
`;
