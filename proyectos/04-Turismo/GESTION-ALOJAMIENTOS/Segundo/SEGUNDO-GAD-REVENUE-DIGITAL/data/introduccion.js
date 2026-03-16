window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.introduccion = `<h3>1.1. Contexto Empresarial: Hotel Boutique "Villa Mediterránea"</h3>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>🏨</span>
        <span>Ficha del Establecimiento</span>
    </div>
    <table class="w-full text-sm">
        <thead>
            <tr class="border-b">
                <th class="text-left py-2">Característica</th>
                <th class="text-left py-2">Descripción</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b">
                <td class="py-2"><strong>Nombre</strong></td>
                <td class="py-2">Hotel Boutique Villa Mediterránea</td>
            </tr>
            <tr class="border-b">
                <td class="py-2"><strong>Ubicación</strong></td>
                <td class="py-2">Peñíscola, Castellón (Comunidad Valenciana)</td>
            </tr>
            <tr class="border-b">
                <td class="py-2"><strong>Categoría</strong></td>
                <td class="py-2">4 Estrellas Superior</td>
            </tr>
            <tr class="border-b">
                <td class="py-2"><strong>Número de Habitaciones</strong></td>
                <td class="py-2">42 habitaciones (28 dobles, 10 suites, 4 familiares)</td>
            </tr>
            <tr class="border-b">
                <td class="py-2"><strong>Temporada</strong></td>
                <td class="py-2">Alta (junio-septiembre), Media (abril-mayo, octubre), Baja (noviembre-marzo)</td>
            </tr>
            <tr>
                <td class="py-2"><strong>Público Objetivo</strong></td>
                <td class="py-2">Parejas 30-55 años, turismo cultural, escapadas de bienestar</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>1.2. Problemática Crítica Actual</h3>

<p>El Hotel Villa Mediterránea enfrenta los siguientes desafíos que impactan directamente en su rentabilidad:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="callout callout-warning">
        <div class="callout-title">
            <span>⚠️</span>
            <span>Pérdidas por Pricing Ineficiente</span>
        </div>
        <p class="text-sm">Se estima una pérdida anual de <strong>€85.000</strong> por no ajustar precios según demanda real. Las tarifas se mantienen estáticas durante meses sin responder a eventos locales, festivos o cambios en la competencia.</p>
    </div>
    
    <div class="callout callout-warning">
        <div class="callout-title">
            <span>⚠️</span>
            <span>Dependencia Excesiva de OTAs</span>
        </div>
        <p class="text-sm">El <strong>65%</strong> de las reservas provienen de Booking.com y Expedia, con comisiones del 15-18%. El objetivo es reducir esta dependencia al 40% mediante ventas directas.</p>
    </div>
    
    <div class="callout callout-warning">
        <div class="callout-title">
            <span>⚠️</span>
            <span>Overbooking No Gestionado</span>
        </div>
        <p class="text-sm">En la temporada alta 2024, se produjeron <strong>7 incidentes de overbooking</strong> no planificado, generando costes de reubicación de €12.000 y daño reputacional.</p>
    </div>
    
    <div class="callout callout-warning">
        <div class="callout-title">
            <span>⚠️</span>
            <span>Falta de Digitalización</span>
        </div>
        <p class="text-sm">No existe sistema de check-in online, las comandas de restaurante son en papel y no hay integración entre el PMS y los canales de venta.</p>
    </div>
</div>

<h3>1.3. Propuesta Técnica: RevenueStay Pro</h3>

<p>Este proyecto propone la implementación de <strong>RevenueStay Pro</strong>, un sistema integral que combina:</p>

<ul class="list-disc pl-6 space-y-2">
    <li><strong>Módulo de Revenue Management:</strong> Algoritmos de pricing dinámico basados en demanda histórica, eventos locales y precios de competencia.</li>
    <li><strong>Channel Manager Integrado:</strong> Sincronización en tiempo real de disponibilidad y tarifas entre web propia, OTAs y GDS.</li>
    <li><strong>Dashboard de KPIs:</strong> Visualización en tiempo real de ADR, RevPAR, Occupancy %, GOPPAR y NPS.</li>
    <li><strong>Sistema de Reservas Directas:</strong> Motor de reservas propio con tarifas exclusivas y programas de fidelización.</li>
    <li><strong>Protocolos de Actuación:</strong> Guías para gestión de overbooking, quejas y situaciones excepcionales.</li>
</ul>

<h3>1.4. Objetivos SMART del Proyecto</h3>

<table class="w-full my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="text-left py-3 px-4">Objetivo</th>
            <th class="text-left py-3 px-4">Meta Cuantificable</th>
            <th class="text-left py-3 px-4">Plazo</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b">
            <td class="py-3 px-4">Aumentar RevPAR</td>
            <td class="py-3 px-4">+18% respecto al año anterior</td>
            <td class="py-3 px-4">12 meses</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Reducir dependencia OTAs</td>
            <td class="py-3 px-4">Del 65% al 40% de reservas</td>
            <td class="py-3 px-4">18 meses</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Mejorar ocupación en temporada baja</td>
            <td class="py-3 px-4">Del 35% al 55%</td>
            <td class="py-3 px-4">2 temporadas</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Incrementar NPS</td>
            <td class="py-3 px-4">De 42 a 65 puntos</td>
            <td class="py-3 px-4">12 meses</td>
        </tr>
        <tr>
            <td class="py-3 px-4">Eliminar incidentes overbooking</td>
            <td class="py-3 px-4">0 incidentes no gestionados</td>
            <td class="py-3 px-4">6 meses</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success my-6">
    <div class="callout-title">
        <span>💡</span>
        <span>Impacto Esperado</span>
    </div>
    <p>La implementación de RevenueStay Pro generará un incremento estimado de <strong>€145.000 anuales</strong> en ingresos brutos, con una inversión inicial de €35.000 (ROI en 3 meses).</p>
</div>`;
