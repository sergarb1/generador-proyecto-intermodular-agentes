window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.implementacion = `
<h3>6.1. Plan de Implementación</h3>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📅</span>
        <span>Guía de Implementación por Fases</span>
    </div>
    <p class="text-sm text-slate-700 mb-3">
        La implementación del sistema de gestión de reservas debe realizarse de forma escalonada para minimizar 
        la disrupción operativa y permitir la adaptación del personal. Este plan contempla <strong>6 fases</strong> 
        a lo largo de 12 semanas.
    </p>
</div>

<div class="my-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="p-5 bg-blue-50 rounded-xl border-2 border-blue-200">
            <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h4 class="font-bold text-blue-900">Selección Proveedor</h4>
            </div>
            <p class="text-xs text-slate-600 mb-3">Evaluación de PMS, demos, negociación de contratos</p>
            <div class="text-xs font-semibold text-blue-700">Semanas 1-2</div>
        </div>
        
        <div class="p-5 bg-purple-50 rounded-xl border-2 border-purple-200">
            <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h4 class="font-bold text-purple-900">Configuración Inicial</h4>
            </div>
            <p class="text-xs text-slate-600 mb-3">Carga de apartamentos, tarifas, reglas, fotos</p>
            <div class="text-xs font-semibold text-purple-700">Semanas 3-4</div>
        </div>
        
        <div class="p-5 bg-green-50 rounded-xl border-2 border-green-200">
            <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <h4 class="font-bold text-green-900">Conexión OTAs</h4>
            </div>
            <p class="text-xs text-slate-600 mb-3">Vinculación con Booking, Airbnb, Expedia</p>
            <div class="text-xs font-semibold text-green-700">Semanas 5-6</div>
        </div>
        
        <div class="p-5 bg-amber-50 rounded-xl border-2 border-amber-200">
            <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <h4 class="font-bold text-amber-900">Formación Personal</h4>
            </div>
            <p class="text-xs text-slate-600 mb-3">Training intensivo, manuales, pruebas piloto</p>
            <div class="text-xs font-semibold text-amber-700">Semanas 7-8</div>
        </div>
        
        <div class="p-5 bg-pink-50 rounded-xl border-2 border-pink-200">
            <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                <h4 class="font-bold text-pink-900">Lanzamiento Web</h4>
            </div>
            <p class="text-xs text-slate-600 mb-3">Nueva web con booking engine, campañas marketing</p>
            <div class="text-xs font-semibold text-pink-700">Semanas 9-10</div>
        </div>
        
        <div class="p-5 bg-indigo-50 rounded-xl border-2 border-indigo-200">
            <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
                <h4 class="font-bold text-indigo-900">Optimización</h4>
            </div>
            <p class="text-xs text-slate-600 mb-3">Análisis KPIs, ajustes, mejoras continuas</p>
            <div class="text-xs font-semibold text-indigo-700">Semanas 11-12</div>
        </div>
    </div>
</div>

<h3>6.2. Configuración del PMS</h3>

<p>
    El Property Management System es el núcleo del sistema. Configura los siguientes elementos:
</p>

<h4>6.2.1. Estructura de Habitaciones</h4>

<div class="my-8 overflow-x-auto">
    <table class="w-full text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="text-left py-3 px-4 font-bold text-slate-900">Tipo</th>
                <th class="text-center py-3 px-4 font-bold text-slate-900">Unidades</th>
                <th class="text-center py-3 px-4 font-bold text-slate-900">Capacidad</th>
                <th class="text-center py-3 px-4 font-bold text-slate-900">Superficie</th>
                <th class="text-left py-3 px-4 font-bold text-slate-900">Equipamiento</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">Estudio Standard</td>
                <td class="py-3 px-4 text-center text-slate-700">8</td>
                <td class="py-3 px-4 text-center text-slate-700">2 adultos</td>
                <td class="py-3 px-4 text-center text-slate-700">35 m²</td>
                <td class="py-3 px-4 text-slate-700 text-xs">Cama doble, kitchenette, baño completo, balcón</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">Estudio Vista Mar</td>
                <td class="py-3 px-4 text-center text-slate-700">4</td>
                <td class="py-3 px-4 text-center text-slate-700">2 adultos</td>
                <td class="py-3 px-4 text-center text-slate-700">35 m²</td>
                <td class="py-3 px-4 text-slate-700 text-xs">Cama doble, kitchenette, baño completo, balcón vista mar</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">Apartamento 1 Dormitorio</td>
                <td class="py-3 px-4 text-center text-slate-700">8</td>
                <td class="py-3 px-4 text-center text-slate-700">2+2 personas</td>
                <td class="py-3 px-4 text-center text-slate-700">50 m²</td>
                <td class="py-3 px-4 text-slate-700 text-xs">1 dormitorio, salón-sofá cama, cocina, baño, terraza</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">Apartamento Vista Mar Premium</td>
                <td class="py-3 px-4 text-center text-slate-700">4</td>
                <td class="py-3 px-4 text-center text-slate-700">2+2 personas</td>
                <td class="py-3 px-4 text-center text-slate-700">55 m²</td>
                <td class="py-3 px-4 text-slate-700 text-xs">1 dormitorio, salón amplio, cocina equipada, vistas panorámicas</td>
            </tr>
        </tbody>
    </table>
</div>

<h4>6.2.2. Estructura de Tarifas</h4>

<div class="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h5 class="font-bold text-blue-900 mb-3">📊 Tarifas por Temporada</h5>
        <table class="w-full text-xs">
            <thead>
                <tr class="border-b-2 border-blue-200">
                    <th class="text-left py-2 text-blue-900">Temporada</th>
                    <th class="text-center py-2 text-blue-900">Periodo</th>
                    <th class="text-right py-2 text-blue-900">Precio Base</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-blue-100">
                    <td class="py-2 text-slate-700">Baja</td>
                    <td class="py-2 text-center text-slate-600">Nov - Mar</td>
                    <td class="py-2 text-right font-semibold text-slate-900">45-65€</td>
                </tr>
                <tr class="border-b border-blue-100">
                    <td class="py-2 text-slate-700">Media</td>
                    <td class="py-2 text-center text-slate-600">Abr - May, Oct</td>
                    <td class="py-2 text-right font-semibold text-slate-900">70-90€</td>
                </tr>
                <tr class="border-b border-blue-100">
                    <td class="py-2 text-slate-700">Alta</td>
                    <td class="py-2 text-center text-slate-600">Jun - Sep</td>
                    <td class="py-2 text-right font-semibold text-slate-900">95-140€</td>
                </tr>
                <tr class="bg-blue-100">
                    <td class="py-2 font-bold text-blue-900">Muy Alta</td>
                    <td class="py-2 text-center text-blue-800">Agosto, Festivos</td>
                    <td class="py-2 text-right font-bold text-blue-900">150-180€</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h5 class="font-bold text-green-900 mb-3">🏷️ Reglas de Pricing</h5>
        <ul class="space-y-2 text-xs text-slate-700">
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span><strong>Estancia mínima:</strong> 3 noches (temporada baja), 7 noches (agosto)</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span><strong>Descuento larga estancia:</strong> -10% (7+ noches), -20% (30+ noches)</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span><strong>Reserva anticipada:</strong> -5% (30 días), -10% (60 días)</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span><strong>Última hora:</strong> -15% (menos de 7 días, según ocupación)</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span><strong>Suplemento mascota:</strong> +10€/noche (máx 50€/estancia)</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span><strong>Limpieza final:</strong> 40€ (estudio), 60€ (apartamento 1 dorm)</span>
            </li>
        </ul>
    </div>
</div>

<h4>6.2.3. Políticas de Cancelación</h4>

<div class="my-8">
    <table class="w-full text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="text-left py-3 px-4 font-bold text-slate-900">Tipo de Tarifa</th>
                <th class="text-left py-3 px-4 font-bold text-slate-900">Política</th>
                <th class="text-center py-3 px-4 font-bold text-slate-900">Reembolso</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">Flexible</td>
                <td class="py-3 px-4 text-slate-700">Cancelación gratuita hasta 48h antes del check-in</td>
                <td class="py-3 px-4 text-center"><span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">100%</span></td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">Moderada</td>
                <td class="py-3 px-4 text-slate-700">Cancelación gratuita hasta 7 días antes del check-in</td>
                <td class="py-3 px-4 text-center"><span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">100%</span></td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">Estricta</td>
                <td class="py-3 px-4 text-slate-700">50% hasta 14 días antes, 0% después</td>
                <td class="py-3 px-4 text-center"><span class="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-bold">50%</span></td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="py-3 px-4 font-semibold text-slate-900">No Reembolsable</td>
                <td class="py-3 px-4 text-slate-700">Sin cancelación ni cambios (tarifa -15%)</td>
                <td class="py-3 px-4 text-center"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">0%</span></td>
            </tr>
        </tbody>
    </table>
</div>

<h3>6.3. Sincronización con OTAs</h3>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>🔄</span>
        <span>Configuración del Channel Manager</span>
    </div>
    <p class="text-sm text-slate-700 mb-3">
        El channel manager debe estar correctamente configurado para evitar overbooking. Sigue estos pasos:
    </p>
</div>

<div class="my-8">
    <div class="space-y-4">
        <div class="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
            <div>
                <h5 class="font-bold text-slate-900 mb-1">Conectar cuentas OTA</h5>
                <p class="text-sm text-slate-600 mb-0">Vincula las cuentas de Booking.com, Airbnb, Expedia, Vrbo mediante API keys o credenciales</p>
            </div>
        </div>
        
        <div class="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
            <div>
                <h5 class="font-bold text-slate-900 mb-1">Mapear tipos de habitación</h5>
                <p class="text-sm text-slate-600 mb-0">Asocia cada tipo de apartamento del PMS con su equivalente en cada OTA (ej: "Estudio Standard" = "Studio Apartment" en Booking)</p>
            </div>
        </div>
        
        <div class="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
            <div>
                <h5 class="font-bold text-slate-900 mb-1">Configurar frecuencia de sincronización</h5>
                <p class="text-sm text-slate-600 mb-0">Establece actualización en tiempo real o máximo cada 5 minutos para disponibilidad y precios</p>
            </div>
        </div>
        
        <div class="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
            <div>
                <h5 class="font-bold text-slate-900 mb-1">Definir reglas de overbooking</h5>
                <p class="text-sm text-slate-600 mb-0">Establece un "buffer" de seguridad (ej: cerrar disponibilidad cuando queden 1-2 unidades)</p>
            </div>
        </div>
        
        <div class="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
            <div>
                <h5 class="font-bold text-slate-900 mb-1">Test de sincronización</h5>
                <p class="text-sm text-slate-600 mb-0">Realiza reservas de prueba en cada OTA y verifica que la disponibilidad se actualiza correctamente en todas las plataformas</p>
            </div>
        </div>
    </div>
</div>

<h3>6.4. Configuración del Booking Engine</h3>

<p>
    El motor de reservas de la web debe ofrecer una experiencia de usuario óptima:
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h5 class="font-bold text-green-900 mb-3">✅ Elementos Esenciales</h5>
        <ul class="space-y-2 text-sm text-slate-700">
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span>Selector de fechas con calendario visual</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span>Selector de número de huéspedes (adultos/niños)</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span>Visualización clara de tipos de apartamento disponibles</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span>Desglose de precios (tarifa, tasas, limpieza, total)</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span>Opción de añadir extras (parking, cuna, early check-in)</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-green-600 mt-0.5">✓</span>
                <span>Múltiples métodos de pago (tarjeta, PayPal, transferencia)</span>
            </li>
        </ul>
    </div>
    
    <div class="p-6 bg-amber-50 rounded-2xl border border-amber-100">
        <h5 class="font-bold text-amber-900 mb-3">⚠️ Errores a Evitar</h5>
        <ul class="space-y-2 text-sm text-slate-700">
            <li class="flex items-start gap-2">
                <span class="text-amber-500 mt-0.5">•</span>
                <span>Proceso de reserva con más de 5 pasos</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-amber-500 mt-0.5">•</span>
                <span>Costes ocultos que aparecen al final</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-amber-500 mt-0.5">•</span>
                <span>Formularios excesivamente largos</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-amber-500 mt-0.5">•</span>
                <span>Falta de confirmación inmediata por email</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-amber-500 mt-0.5">•</span>
                <span>No optimizado para móvil (responsive)</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-amber-500 mt-0.5">•</span>
                <span>Tiempos de carga superiores a 3 segundos</span>
            </li>
        </ul>
    </div>
</div>

<h3>6.5. Check-in Online</h3>

<p>
    Implementa un proceso de check-in digital que reduzca los tiempos de espera en recepción:
</p>

<div class="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
    <h5 class="font-bold text-slate-900 mb-4">Flujo del Check-in Online</h5>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div class="text-center p-4 bg-white rounded-xl border border-slate-200">
            <div class="text-3xl mb-2">📧</div>
            <div class="text-xs font-bold text-slate-900 mb-1">Email Automático</div>
            <p class="text-xs text-slate-600 mb-0">5 días antes: enlace al formulario</p>
        </div>
        <div class="text-center p-4 bg-white rounded-xl border border-slate-200">
            <div class="text-3xl mb-2">📝</div>
            <div class="text-xs font-bold text-slate-900 mb-1">Formulario</div>
            <p class="text-xs text-slate-600 mb-0">Datos huéspedes, hora llegada, matrícula</p>
        </div>
        <div class="text-center p-4 bg-white rounded-xl border border-slate-200">
            <div class="text-3xl mb-2">📸</div>
            <div class="text-xs font-bold text-slate-900 mb-1">Documentación</div>
            <p class="text-xs text-slate-600 mb-0">Foto DNI/pasaporte de cada adulto</p>
        </div>
        <div class="text-center p-4 bg-white rounded-xl border border-slate-200">
            <div class="text-3xl mb-2">✍️</div>
            <div class="text-xs font-bold text-slate-900 mb-1">Firma Digital</div>
            <p class="text-xs text-slate-600 mb-0">Aceptación términos y condiciones</p>
        </div>
        <div class="text-center p-4 bg-white rounded-xl border border-slate-200">
            <div class="text-3xl mb-2">🔑</div>
            <div class="text-xs font-bold text-slate-900 mb-1">Instrucciones</div>
            <p class="text-xs text-slate-600 mb-0">Código cerradura o ubicación llaves</p>
        </div>
    </div>
</div>

<div class="callout callout-success my-6">
    <div class="callout-title">
        <span>📝</span>
        <span>Actividad para el Alumnado</span>
    </div>
    <p class="text-sm text-slate-700 mb-3">
        Investiga 3 proveedores de PMS para alojamientos turísticos (ej: Cloudbeds, Sirvoy, AvaiBook) y 
        compara sus características en una tabla que incluya:
    </p>
    <ul class="space-y-2 text-sm text-slate-700 list-disc pl-6">
        <li>Precio mensual para 24 unidades</li>
        <li>Channel manager incluido</li>
        <li>Booking engine incluido</li>
        <li>OTAs con las que se conecta</li>
        <li>Idiomas disponibles</li>
        <li>Soporte en español</li>
        <li>Valoración media de usuarios</li>
    </ul>
    <p class="text-sm text-slate-700 mt-4 mb-0">
        Justifica cuál recomendarías para este proyecto y por qué.
    </p>
</div>
`;
