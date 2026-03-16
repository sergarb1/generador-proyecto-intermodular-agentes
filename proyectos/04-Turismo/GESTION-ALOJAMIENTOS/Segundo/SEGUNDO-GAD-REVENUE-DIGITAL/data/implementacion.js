window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.implementacion = `<h3>6.1. Plan de Implementación Detallado</h3>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📅</span>
        <span>Cronograma de Implementación</span>
    </div>
    <p>El alumnado deberá desarrollar un cronograma detallado con hitos, responsables y dependencias para cada fase del proyecto.</p>
</div>

<h4>6.1.1. Fase 1: Configuración Inicial (Semanas 1-2)</h4>

<table class="w-full my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="text-left py-3 px-4">Tarea</th>
            <th class="text-left py-3 px-4">Duración</th>
            <th class="text-left py-3 px-4">Responsable</th>
            <th class="text-left py-3 px-4">Entregable</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b">
            <td class="py-3 px-4">Configuración de tipos de habitación y capacidades</td>
            <td class="py-3 px-4">2 días</td>
            <td class="py-3 px-4">Revenue Manager + Proveedor</td>
            <td class="py-3 px-4">Inventario configurado en sistema</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Carga de datos históricos (24 meses)</td>
            <td class="py-3 px-4">3 días</td>
            <td class="py-3 px-4">IT + Proveedor</td>
            <td class="py-3 px-4">Base de datos histórica importada</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Configuración de tarifas base por temporada</td>
            <td class="py-3 px-4">2 días</td>
            <td class="py-3 px-4">Revenue Manager</td>
            <td class="py-3 px-4">Matriz de tarifas inicial</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Definición de reglas de pricing automático</td>
            <td class="py-3 px-4">3 días</td>
            <td class="py-3 px-4">Dirección + Revenue Manager</td>
            <td class="py-3 px-4">Documento de reglas de negocio</td>
        </tr>
        <tr>
            <td class="py-3 px-4">Configuración de usuarios y permisos</td>
            <td class="py-3 px-4">1 día</td>
            <td class="py-3 px-4">IT + Proveedor</td>
            <td class="py-3 px-4">Usuarios creados con roles asignados</td>
        </tr>
    </tbody>
</table>

<h4>6.1.2. Fase 2: Integración de Canales (Semanas 3-5)</h4>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Punto Crítico de Implementación</span>
    </div>
    <p>La conexión con OTAs requiere validación de cada canal. Se recomienda comenzar con los canales de menor volumen para minimizar riesgos.</p>
</div>

<table class="w-full my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="text-left py-3 px-4">Canal</th>
            <th class="text-left py-3 px-4">Prioridad</th>
            <th class="text-left py-3 px-4">Tiempo Estimado</th>
            <th class="text-left py-3 px-4">Estado</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b">
            <td class="py-3 px-4">Booking.com</td>
            <td class="py-3 px-4"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
            <td class="py-3 px-4">3-5 días laborables</td>
            <td class="py-3 px-4">⏳ Pendiente</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Expedia</td>
            <td class="py-3 px-4"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
            <td class="py-3 px-4">3-5 días laborables</td>
            <td class="py-3 px-4">⏳ Pendiente</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Airbnb</td>
            <td class="py-3 px-4"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-bold">MEDIA</span></td>
            <td class="py-3 px-4">2-3 días laborables</td>
            <td class="py-3 px-4">⏳ Pendiente</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Web Directa (motor de reservas)</td>
            <td class="py-3 px-4"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
            <td class="py-3 px-4">5-7 días laborables</td>
            <td class="py-3 px-4">⏳ Pendiente</td>
        </tr>
        <tr>
            <td class="py-3 px-4">Otros (Vrbo, TripAdvisor, etc.)</td>
            <td class="py-3 px-4"><span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">BAJA</span></td>
            <td class="py-3 px-4">2-3 días por canal</td>
            <td class="py-3 px-4">⏳ Pendiente</td>
        </tr>
    </tbody>
</table>

<h4>6.1.3. Fase 3: Testing y Validación (Semana 6)</h4>

<p>El alumnado deberá diseñar un plan de testing que incluya:</p>

<ul class="list-disc pl-6 space-y-2">
    <li><strong>Testing funcional:</strong> Verificar que todas las características del sistema funcionan correctamente.</li>
    <li><strong>Testing de integración:</strong> Comprobar la sincronización entre PMS, channel manager y OTAs.</li>
    <li><strong>Testing de estrés:</strong> Simular múltiples reservas simultáneas para validar la estabilidad del sistema.</li>
    <li><strong>Testing de usabilidad:</strong> Evaluar la facilidad de uso con el personal real del hotel.</li>
    <li><strong>Testing de seguridad:</strong> Verificar el cumplimiento RGPD y la protección de datos de pago.</li>
</ul>

<h3>6.2. Protocolos de Actuación</h3>

<h4>6.2.1. Gestión de Overbooking</h4>

<div class="callout callout-error my-6">
    <div class="callout-title">
        <span>🚨</span>
        <span>Protocolo de Overbooking</span>
    </div>
    <ol class="list-decimal pl-6 space-y-2">
        <li><strong>Detección temprana:</strong> El sistema alertará cuando la ocupación prevista supere el 95%.</li>
        <li><strong>Identificación de reservas reubicables:</strong> Priorizar reservas de OTAs (menor coste de cancelación) sobre reservas directas.</li>
        <li><strong>Búsqueda de alojamiento alternativo:</strong> Contactar hoteles de categoría similar en un radio de 15 km.</li>
        <li><strong>Comunicación al cliente:</strong> Contactar personalmente, ofrecer upgrade gratuito en fecha alternativa + compensación económica.</li>
        <li><strong>Registro del incidente:</strong> Documentar causas, costes y acciones correctivas para evitar recurrencia.</li>
    </ol>
</div>

<h4>6.2.2. Gestión de Quejas y Reclamaciones</h4>

<table class="w-full my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="text-left py-3 px-4">Tipo de Queja</th>
            <th class="text-left py-3 px-4">Tiempo de Respuesta</th>
            <th class="text-left py-3 px-4">Acción Correctiva</th>
            <th class="text-left py-3 px-4">Compensación Máxima</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b">
            <td class="py-3 px-4">Limpieza insuficiente</td>
            <td class="py-3 px-4">Inmediato (< 30 min)</td>
            <td class="py-3 px-4">Re-limpieza + upgrade si disponible</td>
            <td class="py-3 px-4">20% descuento noche</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Ruido excesivo</td>
            <td class="py-3 px-4">Inmediato (< 15 min)</td>
            <td class="py-3 px-4">Cambio de habitación + amenities</td>
            <td class="py-3 px-4">Cena para 2 incluida</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Problemas con reservas</td>
            <td class="py-3 px-4">< 2 horas</td>
            <td class="py-3 px-4">Búsqueda de solución alternativa</td>
            <td class="py-3 px-4">Noche gratuita (si grave)</td>
        </tr>
        <tr>
            <td class="py-3 px-4">Servicio de restaurante</td>
            <td class="py-3 px-4">< 1 hora</td>
            <td class="py-3 px-4">Disculpas + cortesía del chef</td>
            <td class="py-3 px-4">Postre/vino gratuito</td>
        </tr>
    </tbody>
</table>

<h3>6.3. Plan de Formación del Personal</h3>

<div class="callout callout-success my-6">
    <div class="callout-title">
        <span>📚</span>
        <span>Programa de Capacitación</span>
    </div>
    <p>El éxito del sistema depende de la correcta formación del personal. Se recomienda:</p>
    <ul class="list-disc pl-6 space-y-2">
        <li><strong>Sesión general (4 horas):</strong> Presentación del sistema, objetivos y beneficios para todo el equipo.</li>
        <li><strong>Formación específica por rol (16 horas):</strong> Training práctico adaptado a las funciones de cada departamento.</li>
        <li><strong>Shadowing (8 horas):</strong> Acompañamiento por parte del proveedor durante los primeros días de operación.</li>
        <li><strong>Refuerzo mensual (2 horas):</strong> Sesiones de repaso y resolución de dudas durante los primeros 3 meses.</li>
    </ul>
</div>`;
