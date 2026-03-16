window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.diseno = `<h3>5.1. Arquitectura del Sistema RevenueStay Pro</h3>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>🏗️</span>
        <span>Diagrama de Arquitectura</span>
    </div>
    <p>El alumnado deberá diseñar un diagrama de arquitectura que muestre la interconexión entre los diferentes componentes del sistema.</p>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
    <div class="callout callout-success">
        <div class="callout-title">
            <span>📊</span>
            <span>Capa de Datos</span>
        </div>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li>Base de datos histórica de reservas</li>
            <li>Datos de competencia (rate shopping)</li>
            <li>Eventos locales y calendario</li>
            <li>Datos meteorológicos</li>
        </ul>
    </div>
    
    <div class="callout callout-success">
        <div class="callout-title">
            <span>⚙️</span>
            <span>Capa de Lógica</span>
        </div>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li>Motor de pricing dinámico</li>
            <li>Algoritmos de forecasting</li>
            <li>Reglas de negocio configurables</li>
            <li>Gestor de sincronización de canales</li>
        </ul>
    </div>
    
    <div class="callout callout-success">
        <div class="callout-title">
            <span>🖥️</span>
            <span>Capa de Presentación</span>
        </div>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li>Dashboard de revenue management</li>
            <li>Motor de reservas web</li>
            <li>Extranet para OTAs</li>
            <li>App móvil para huéspedes</li>
        </ul>
    </div>
</div>

<h3>5.2. Diseño de la Estrategia de Pricing</h3>

<p>El alumnado deberá desarrollar una estrategia de pricing dinámico que contemple los siguientes escenarios:</p>

<h4>5.2.1. Matriz de Precios por Temporada</h4>

<table class="w-full my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="text-left py-3 px-4">Temporada</th>
            <th class="text-left py-3 px-4">Periodo</th>
            <th class="text-left py-3 px-4">Tarifa Base Doble</th>
            <th class="text-left py-3 px-4">Tarifa Base Suite</th>
            <th class="text-left py-3 px-4">Ocupación Objetivo</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b">
            <td class="py-3 px-4"><strong>Baja</strong></td>
            <td class="py-3 px-4">Nov - Mar (excepto Navidad)</td>
            <td class="py-3 px-4">€85-110</td>
            <td class="py-3 px-4">€140-180</td>
            <td class="py-3 px-4">40-55%</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><strong>Media</strong></td>
            <td class="py-3 px-4">Abr - May, Oct</td>
            <td class="py-3 px-4">€120-150</td>
            <td class="py-3 px-4">€190-240</td>
            <td class="py-3 px-4">60-75%</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><strong>Alta</strong></td>
            <td class="py-3 px-4">Jun - Sep</td>
            <td class="py-3 px-4">€160-220</td>
            <td class="py-3 px-4">€260-350</td>
            <td class="py-3 px-4">85-95%</td>
        </tr>
        <tr>
            <td class="py-3 px-4"><strong>Picos</strong></td>
            <td class="py-3 px-4">Festivos, eventos, fines de semana</td>
            <td class="py-3 px-4">€200-280</td>
            <td class="py-3 px-4">€320-450</td>
            <td class="py-3 px-4">95-100%</td>
        </tr>
    </tbody>
</table>

<h4>5.2.2. Reglas de Pricing Dinámico</h4>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>📝</span>
        <span>Actividad: Diseño de Reglas</span>
    </div>
    <p>El alumnado deberá definir reglas de pricing automático. Ejemplos de partida:</p>
    <ul class="list-disc pl-6 space-y-2">
        <li><strong>Regla 1:</strong> Si ocupación a 30 días < 40%, reducir tarifa base un 15%.</li>
        <li><strong>Regla 2:</strong> Si ocupación a 7 días > 80%, incrementar tarifa un 25%.</li>
        <li><strong>Regla 3:</strong> Si competencia baja precios un 20%, igualar automáticamente (con límite mínimo).</li>
        <li><strong>Regla 4:</strong> Si hay evento local confirmado, aplicar suplemento del 30%.</li>
        <li><strong>Regla 5:</strong> Estancias de 4+ noches: descuento automático del 12%.</li>
    </ul>
</div>

<h3>5.3. Diseño del Customer Journey</h3>

<p>El alumnado deberá mapear la experiencia completa del cliente desde la inspiración hasta el post-estancia:</p>

<table class="w-full my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="text-left py-3 px-4">Fase</th>
            <th class="text-left py-3 px-4">Touchpoints</th>
            <th class="text-left py-3 px-4">Acciones del Sistema</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b">
            <td class="py-3 px-4"><strong>1. Inspiración</strong></td>
            <td class="py-3 px-4">Redes sociales, web, OTAs, recomendaciones</td>
            <td class="py-3 px-4">Contenido visual atractivo, SEO local, gestión de reviews</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><strong>2. Búsqueda</strong></td>
            <td class="py-3 px-4">Google, TripAdvisor, Booking, web directa</td>
            <td class="py-3 px-4">Paridad de tarifas, disponibilidad actualizada, fotos actualizadas</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><strong>3. Reserva</strong></td>
            <td class="py-3 px-4">Motor de reservas, teléfono, email, OTA</td>
            <td class="py-3 px-4">Proceso simplificado, upselling, confirmación inmediata</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><strong>4. Pre-estancia</strong></td>
            <td class="py-3 px-4">Email pre-arrival, check-in online</td>
            <td class="py-3 px-4">Email automático a las 72h, enlace check-in, oferta de servicios</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><strong>5. Estancia</strong></td>
            <td class="py-3 px-4">Check-in, habitación, restaurante, spa, check-out</td>
            <td class="py-3 px-4">Llave digital, personalización, gestión de peticiones</td>
        </tr>
        <tr>
            <td class="py-3 px-4"><strong>6. Post-estancia</strong></td>
            <td class="py-3 px-4">Email agradecimiento, solicitud review, newsletter</td>
            <td class="py-3 px-4">Email a las 24h, enlace TripAdvisor, oferta de repetición</td>
        </tr>
    </tbody>
</table>

<h3>5.4. Diseño de Servicios Adicionales</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="callout callout-info">
        <div class="callout-title">
            <span>🍽️</span>
            <span>Restaurante Gastronómico</span>
        </div>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li>Menú degustación estacional (productos km 0)</li>
            <li>Desayuno buffet premium incluido en suites</li>
            <li>Room service 24 horas</li>
            <li>Experiencias culinarias con el chef (cooking classes)</li>
        </ul>
    </div>
    
    <div class="callout callout-info">
        <div class="callout-title">
            <span>💆</span>
            <span>Spa & Bienestar</span>
        </div>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li>Circuitos termales (sauna, hammam, piscina climatizada)</li>
            <li>Tratamientos faciales y corporales</li>
            <li>Paquetes románticos y de desconexión</li>
            <li>Yoga matinal en terraza con vistas al mar</li>
        </ul>
    </div>
    
    <div class="callout callout-info">
        <div class="callout-title">
            <span>🚴</span>
            <span>Actividades Locales</span>
        </div>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li>Rutas de senderismo guiadas (Delta del Ebro)</li>
            <li>Visitas culturales (Castillo de Peñíscola, casco antiguo)</li>
            <li>Alquiler de bicicletas eléctricas</li>
            <li>Excursiones en barco a calas cercanas</li>
        </ul>
    </div>
    
    <div class="callout callout-info">
        <div class="callout-title">
            <span>📶</span>
            <span>Servicios Digitales</span>
        </div>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li>WiFi de alta velocidad en todas las zonas</li>
            <li>Espacios de coworking equipados</li>
            <li>Concierge virtual vía WhatsApp</li>
            <li>Smart TV con streaming personalizado</li>
        </ul>
    </div>
</div>`;
