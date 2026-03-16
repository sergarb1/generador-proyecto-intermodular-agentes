window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.administracion = `<h3>7.1. Gestión de Reservas y Operaciones Diarias</h3>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📋</span>
        <span>Checklist Diario de Recepción</span>
    </div>
    <p>El alumnado deberá elaborar un checklist operativo para el personal de recepción que incluya todas las tareas críticas diarias.</p>
</div>

<h4>7.1.1. Rutina de Mañana (7:00 - 15:00)</h4>

<table class="w-full my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="text-left py-3 px-4">Hora</th>
            <th class="text-left py-3 px-4">Tarea</th>
            <th class="text-left py-3 px-4">Responsable</th>
            <th class="text-left py-3 px-4">Sistema</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b">
            <td class="py-3 px-4">07:00</td>
            <td class="py-3 px-4">Revisión de ocupación del día y salidas</td>
            <td class="py-3 px-4">Recepcionista turno mañana</td>
            <td class="py-3 px-4">PMS Dashboard</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">07:30</td>
            <td class="py-3 px-4">Verificación de tarifas del día (revenue automático)</td>
            <td class="py-3 px-4">Revenue Manager</td>
            <td class="py-3 px-4">RevenueStay Pro</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">08:00</td>
            <td class="py-3 px-4">Preparación de llegadas VIP y grupos</td>
            <td class="py-3 px-4">Recepcionista + Gobernanta</td>
            <td class="py-3 px-4">PMS + Email</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">09:00</td>
            <td class="py-3 px-4">Check-out de huéspedes salientes</td>
            <td class="py-3 px-4">Recepcionista</td>
            <td class="py-3 px-4">PMS Check-out</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">11:00</td>
            <td class="py-3 px-4">Reunión de housekeeping (habitaciones listas)</td>
            <td class="py-3 px-4">Recepción + Housekeeping</td>
            <td class="py-3 px-4">PMS Housekeeping</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">12:00</td>
            <td class="py-3 px-4">Gestión de reservas nuevas y modificaciones</td>
            <td class="py-3 px-4">Recepcionista</td>
            <td class="py-3 px-4">Channel Manager</td>
        </tr>
        <tr>
            <td class="py-3 px-4">14:00</td>
            <td class="py-3 px-4">Pase de guardia a turno tarde</td>
            <td class="py-3 px-4">Ambos recepcionistas</td>
            <td class="py-3 px-4">Logbook digital</td>
        </tr>
    </tbody>
</table>

<h4>7.1.2. Rutina de Tarde (15:00 - 23:00)</h4>

<table class="w-full my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="text-left py-3 px-4">Hora</th>
            <th class="text-left py-3 px-4">Tarea</th>
            <th class="text-left py-3 px-4">Responsable</th>
            <th class="text-left py-3 px-4">Sistema</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b">
            <td class="py-3 px-4">15:00</td>
            <td class="py-3 px-4">Inicio de check-in (hora oficial)</td>
            <td class="py-3 px-4">Recepcionista turno tarde</td>
            <td class="py-3 px-4">PMS Check-in</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">16:00</td>
            <td class="py-3 px-4">Revisión de disponibilidad para walk-ins</td>
            <td class="py-3 px-4">Recepcionista</td>
            <td class="py-3 px-4">RevenueStay Pro</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">18:00</td>
            <td class="py-3 px-4">Confirmación de reservas para día siguiente</td>
            <td class="py-3 px-4">Recepcionista</td>
            <td class="py-3 px-4">Email automático</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">20:00</td>
            <td class="py-3 px-4">Cierre de caja y arqueo</td>
            <td class="py-3 px-4">Recepcionista</td>
            <td class="py-3 px-4">PMS Finanzas</td>
        </tr>
        <tr>
            <td class="py-3 px-4">22:00</td>
            <td class="py-3 px-4">Preparación de llegadas tempranas (día siguiente)</td>
            <td class="py-3 px-4">Recepcionista noche</td>
            <td class="py-3 px-4">PMS Arrivals</td>
        </tr>
    </tbody>
</table>

<h3>7.2. Reporting y Cuadros de Mando</h3>

<p>El alumnado deberá diseñar los informes periódicos que se generarán para la toma de decisiones:</p>

<h4>7.2.1. Daily Flash Report (Diario)</h4>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📊</span>
        <span>Contenido del Daily Flash</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li>Ocupación del día actual (%)</li>
        <li>Número de llegadas y salidas</li>
        <li>ADR del día (tarifa media)</li>
        <li>RevPAR acumulado del mes</li>
        <li>Ingresos de F&B del día anterior</li>
        <li>Incidencias destacadas</li>
        <li>Comentarios de huéspedes (reviews recientes)</li>
    </ul>
</div>

<h4>7.2.2. Monthly Business Review (Mensual)</h4>

<table class="w-full my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="text-left py-3 px-4">KPI</th>
            <th class="text-left py-3 px-4">Mes Actual</th>
            <th class="text-left py-3 px-4">Mes Anterior</th>
            <th class="text-left py-3 px-4">Mismo Mes Año Anterior</th>
            <th class="text-left py-3 px-4">Variación %</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b">
            <td class="py-3 px-4">Ocupación Media</td>
            <td class="py-3 px-4">__%</td>
            <td class="py-3 px-4">__%</td>
            <td class="py-3 px-4">__%</td>
            <td class="py-3 px-4">__%</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">ADR</td>
            <td class="py-3 px-4">€__</td>
            <td class="py-3 px-4">€__</td>
            <td class="py-3 px-4">€__</td>
            <td class="py-3 px-4">__%</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">RevPAR</td>
            <td class="py-3 px-4">€__</td>
            <td class="py-3 px-4">€__</td>
            <td class="py-3 px-4">€__</td>
            <td class="py-3 px-4">__%</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Reservas Directas %</td>
            <td class="py-3 px-4">__%</td>
            <td class="py-3 px-4">__%</td>
            <td class="py-3 px-4">__%</td>
            <td class="py-3 px-4">__%</td>
        </tr>
        <tr>
            <td class="py-3 px-4">NPS Score</td>
            <td class="py-3 px-4">__</td>
            <td class="py-3 px-4">__</td>
            <td class="py-3 px-4">__</td>
            <td class="py-3 px-4">__</td>
        </tr>
    </tbody>
</table>

<h3>7.3. Prevención de Riesgos Laborales en Hostelería</h3>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Riesgos Específicos del Sector</span>
    </div>
    <p>El alumnado deberá identificar los riesgos laborales más comunes en hoteles y proponer medidas preventivas.</p>
</div>

<table class="w-full my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="text-left py-3 px-4">Riesgo</th>
            <th class="text-left py-3 px-4">Departamento</th>
            <th class="text-left py-3 px-4">Medidas Preventivas</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b">
            <td class="py-3 px-4">Caídas al mismo nivel</td>
            <td class="py-3 px-4">Housekeeping, Cocina</td>
            <td class="py-3 px-4">Suelos antideslizantes, calzado adecuado, limpieza inmediata de derrames</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Trastornos musculoesqueléticos</td>
            <td class="py-3 px-4">Housekeeping, Cocina</td>
            <td class="py-3 px-4">Técnicas de levantamiento, pausas activas, equipos ergonómicos</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Quemaduras y cortes</td>
            <td class="py-3 px-4">Cocina, Restaurante</td>
            <td class="py-3 px-4">EPIs específicos, formación en manipulación, protocolos de seguridad</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Estrés laboral</td>
            <td class="py-3 px-4">Recepción, Dirección</td>
            <td class="py-3 px-4">Gestión de turnos, apoyo psicológico, formación en gestión de conflictos</td>
        </tr>
        <tr>
            <td class="py-3 px-4">Exposición a productos químicos</td>
            <td class="py-3 px-4">Housekeeping, Mantenimiento</td>
            <td class="py-3 px-4">Fichas de seguridad, ventilación adecuada, EPIs específicos</td>
        </tr>
    </tbody>
</table>

<h3>7.4. Marketing Turístico Digital</h3>

<p>El alumnado deberá diseñar un plan de marketing digital para aumentar las reservas directas:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="callout callout-success">
        <div class="callout-title">
            <span>🔍</span>
            <span>SEO Local</span>
        </div>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li>Optimización Google My Business</li>
            <li>Palabras clave: "hotel boutique Peñíscola", "hotel con spa costa azahar"</li>
            <li>Contenido de blog sobre experiencias locales</li>
            <li>Optimización de velocidad web (Core Web Vitals)</li>
        </ul>
    </div>
    
    <div class="callout callout-success">
        <div class="callout-title">
            <span>📱</span>
            <span>Redes Sociales</span>
        </div>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li>Instagram: 3 posts/semana + stories diarias</li>
            <li>Facebook: Eventos, promociones, comunidad local</li>
            <li>TikTok: Vídeos cortos de experiencias (spa, gastronomía)</li>
            <li>LinkedIn: Contenido corporativo y de eventos</li>
        </ul>
    </div>
    
    <div class="callout callout-success">
        <div class="callout-title">
            <span>📧</span>
            <span>Email Marketing</span>
        </div>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li>Newsletter mensual con novedades y ofertas</li>
            <li>Emails automatizados (pre-arrival, post-stay, cumpleaños)</li>
            <li>Segmentación por tipo de cliente (parejas, familias, business)</li>
            <li>Campañas de reactivación para clientes inactivos</li>
        </ul>
    </div>
    
    <div class="callout callout-success">
        <div class="callout-title">
            <span>💳</span>
            <span>Programa de Fidelización</span>
        </div>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li>Niveles: Silver (2 estancias), Gold (5 estancias), Platinum (10+ estancias)</li>
            <li>Beneficios: upgrade, late check-out, welcome amenity, descuentos F&B</li>
            <li>Tarifa exclusiva miembros (15% descuento)</li>
            <li>Experiencias VIP para nivel Platinum</li>
        </ul>
    </div>
</div>`;
