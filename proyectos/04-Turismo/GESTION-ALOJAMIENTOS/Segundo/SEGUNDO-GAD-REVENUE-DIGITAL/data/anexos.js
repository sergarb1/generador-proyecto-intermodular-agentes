window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.anexos = `<h3>📎 Anexos Técnicos</h3>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📑</span>
        <span>Documentación Complementaria</span>
    </div>
    <p>El alumnado deberá completar los siguientes anexos con la documentación técnica generada durante el desarrollo del proyecto.</p>
</div>

<h4>Anexo A: Glosario de Términos de Revenue Management</h4>

<table class="w-full my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="text-left py-3 px-4 w-1/3">Término</th>
            <th class="text-left py-3 px-4">Definición</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b">
            <td class="py-3 px-4"><strong>ADR</strong> (Average Daily Rate)</td>
            <td class="py-3 px-4">Tarifa media diaria. Se calcula dividiendo los ingresos por habitaciones vendidas entre el número de habitaciones vendidas.</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><strong>RevPAR</strong> (Revenue per Available Room)</td>
            <td class="py-3 px-4">Ingreso por habitación disponible. Indicador clave que combina ocupación y tarifa media.</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><strong>GOPPAR</strong> (Gross Operating Profit per Available Room)</td>
            <td class="py-3 px-4">Beneficio operativo bruto por habitación disponible. Mide la rentabilidad real del hotel.</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><strong>OTA</strong> (Online Travel Agency)</td>
            <td class="py-3 px-4">Agencia de viajes online. Ejemplos: Booking.com, Expedia, Airbnb.</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><strong>PMS</strong> (Property Management System)</td>
            <td class="py-3 px-4">Sistema de gestión hotelera. Software principal para gestionar operaciones del hotel.</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><strong>Channel Manager</strong></td>
            <td class="py-3 px-4">Sistema que sincroniza disponibilidad y tarifas entre múltiples canales de venta.</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><strong>Overbooking</strong></td>
            <td class="py-3 px-4">Situación donde se aceptan más reservas que habitaciones disponibles.</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><strong>Pick-up</strong></td>
            <td class="py-3 px-4">Velocidad de reservas. Número de reservas nuevas en un periodo determinado.</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><strong>LOS</strong> (Length of Stay)</td>
            <td class="py-3 px-4">Duración media de la estancia. Número promedio de noches por reserva.</td>
        </tr>
        <tr>
            <td class="py-3 px-4"><strong>NPS</strong> (Net Promoter Score)</td>
            <td class="py-3 px-4">Indicador de satisfacción y lealtad del cliente. Escala de -100 a +100.</td>
        </tr>
    </tbody>
</table>

<h4>Anexo B: Plantilla de Daily Flash Report</h4>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>📊</span>
        <span>Modelo de Informe Diario</span>
    </div>
    <pre class="text-xs overflow-x-auto bg-slate-100 p-4 rounded-lg">
╔══════════════════════════════════════════════════════════╗
║  DAILY FLASH REPORT - Hotel Villa Mediterránea           ║
║  Fecha: __/__/____                                       ║
╠══════════════════════════════════════════════════════════╣
║  OCUPACIÓN                                               ║
║  ─────────────────────────────────────────────────────   ║
║  Habitaciones Totales: 42                                ║
║  Ocupadas Hoy: ___ (___%)                                ║
║  Llegadas: ___  |  Salidas: ___                          ║
║  In House: ___                                           ║
╠══════════════════════════════════════════════════════════╣
║  RENDIMIENTO                                             ║
║  ─────────────────────────────────────────────────────   ║
║  ADR Hoy: €___  |  ADR Mes Acumulado: €___               ║
║  RevPAR Hoy: €___  |  RevPAR Mes Acumulado: €___         ║
║  Presupuesto RevPAR: €___  |  Desviación: ___%          ║
╠══════════════════════════════════════════════════════════╣
║  CANALES DE RESERVA (Mes Acumulado)                      ║
║  ─────────────────────────────────────────────────────   ║
║  Web Directa: ___%  |  Booking.com: ___%                 ║
║  Expedia: ___%  |  Teléfono: ___%                        ║
║  Otros: ___%                                             ║
╠══════════════════════════════════════════════════════════╣
║  F&B                                                     ║
║  ─────────────────────────────────────────────────────   ║
║  Ingresos Restaurante Ayer: €___                         ║
║  Ingresos Room Service Ayer: €___                        ║
║  Ocupación Desayunos: ___%                               ║
╠══════════════════════════════════════════════════════════╣
║  INCIDENCIAS / COMENTARIOS                               ║
║  ─────────────────────────────────────────────────────   ║
║  •                                                         ║
║  •                                                         ║
║  •                                                         ║
╠══════════════════════════════════════════════════════════╣
║  REVIEWS RECIENTES                                       ║
║  ─────────────────────────────────────────────────────   ║
║  Booking: ___/10  |  TripAdvisor: ___/5  |  Google: ___/5 ║
║  Último comentario: "..."                                ║
╚══════════════════════════════════════════════════════════╝
    </pre>
</div>

<h4>Anexo C: Checklist de Implementación</h4>

<table class="w-full my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="text-left py-3 px-4">Fase</th>
            <th class="text-left py-3 px-4">Tarea</th>
            <th class="text-left py-3 px-4">Completado</th>
            <th class="text-left py-3 px-4">Fecha</th>
            <th class="text-left py-3 px-4">Responsable</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b">
            <td class="py-3 px-4" rowspan="5">Configuración</td>
            <td class="py-3 px-4">Crear tipos de habitación en sistema</td>
            <td class="py-3 px-4">⬜</td>
            <td class="py-3 px-4">__</td>
            <td class="py-3 px-4">__</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Importar datos históricos (24 meses)</td>
            <td class="py-3 px-4">⬜</td>
            <td class="py-3 px-4">__</td>
            <td class="py-3 px-4">__</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Configurar tarifas base por temporada</td>
            <td class="py-3 px-4">⬜</td>
            <td class="py-3 px-4">__</td>
            <td class="py-3 px-4">__</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Definir reglas de pricing automático</td>
            <td class="py-3 px-4">⬜</td>
            <td class="py-3 px-4">__</td>
            <td class="py-3 px-4">__</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Crear usuarios y asignar permisos</td>
            <td class="py-3 px-4">⬜</td>
            <td class="py-3 px-4">__</td>
            <td class="py-3 px-4">__</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4" rowspan="5">Integración</td>
            <td class="py-3 px-4">Conectar con Booking.com</td>
            <td class="py-3 px-4">⬜</td>
            <td class="py-3 px-4">__</td>
            <td class="py-3 px-4">__</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Conectar con Expedia</td>
            <td class="py-3 px-4">⬜</td>
            <td class="py-3 px-4">__</td>
            <td class="py-3 px-4">__</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Integrar motor de reservas en web</td>
            <td class="py-3 px-4">⬜</td>
            <td class="py-3 px-4">__</td>
            <td class="py-3 px-4">__</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Sincronizar con PMS existente</td>
            <td class="py-3 px-4">⬜</td>
            <td class="py-3 px-4">__</td>
            <td class="py-3 px-4">__</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Configurar email automáticos</td>
            <td class="py-3 px-4">⬜</td>
            <td class="py-3 px-4">__</td>
            <td class="py-3 px-4">__</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4" rowspan="3">Testing</td>
            <td class="py-3 px-4">Realizar reservas de prueba por todos los canales</td>
            <td class="py-3 px-4">⬜</td>
            <td class="py-3 px-4">__</td>
            <td class="py-3 px-4">__</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Verificar sincronización de tarifas</td>
            <td class="py-3 px-4">⬜</td>
            <td class="py-3 px-4">__</td>
            <td class="py-3 px-4">__</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Validar reporting y dashboards</td>
            <td class="py-3 px-4">⬜</td>
            <td class="py-3 px-4">__</td>
            <td class="py-3 px-4">__</td>
        </tr>
        <tr>
            <td class="py-3 px-4" rowspan="2">Formación</td>
            <td class="py-3 px-4">Sesión general de presentación</td>
            <td class="py-3 px-4">⬜</td>
            <td class="py-3 px-4">__</td>
            <td class="py-3 px-4">__</td>
        </tr>
        <tr>
            <td class="py-3 px-4">Training específico por departamento</td>
            <td class="py-3 px-4">⬜</td>
            <td class="py-3 px-4">__</td>
            <td class="py-3 px-4">__</td>
        </tr>
    </tbody>
</table>

<h4>Anexo D: Cronograma del Proyecto (Diagrama de Gantt)</h4>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📅</span>
        <span>Timeline de Implementación - 12 Semanas</span>
    </div>
    <p>El alumnado deberá crear un diagrama de Gantt detallado utilizando herramientas como Microsoft Project, Excel o software online (GanttProject, TeamGantt).</p>
    <table class="w-full mt-4">
        <thead>
            <tr class="bg-slate-50">
                <th class="text-left py-3 px-4">Fase</th>
                <th class="text-left py-3 px-4">Semanas</th>
                <th class="text-left py-3 px-4">Hitos Principales</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b">
                <td class="py-3 px-4">1. Diagnóstico y Selección</td>
                <td class="py-3 px-4">1-3</td>
                <td class="py-3 px-4">RFP completado, proveedores seleccionados</td>
            </tr>
            <tr class="border-b">
                <td class="py-3 px-4">2. Configuración Inicial</td>
                <td class="py-3 px-4">4-5</td>
                <td class="py-3 px-4">Sistema configurado, datos importados</td>
            </tr>
            <tr class="border-b">
                <td class="py-3 px-4">3. Integración de Canales</td>
                <td class="py-3 px-4">6-8</td>
                <td class="py-3 px-4">OTAs conectadas, channel manager activo</td>
            </tr>
            <tr class="border-b">
                <td class="py-3 px-4">4. Testing</td>
                <td class="py-3 px-4">9-10</td>
                <td class="py-3 px-4">Testing completado, incidencias resueltas</td>
            </tr>
            <tr class="border-b">
                <td class="py-3 px-4">5. Formación</td>
                <td class="py-3 px-4">11</td>
                <td class="py-3 px-4">Personal formado y certificado</td>
            </tr>
            <tr>
                <td class="py-3 px-4">6. Go-Live</td>
                <td class="py-3 px-4">12</td>
                <td class="py-3 px-4">Sistema en producción, monitorización activa</td>
            </tr>
        </tbody>
    </table>
</div>

<h4>Anexo E: Presupuesto Detallado</h4>

<table class="w-full my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="text-left py-3 px-4">Concepto</th>
            <th class="text-left py-3 px-4">Coste Inicial</th>
            <th class="text-left py-3 px-4">Coste Recurrente</th>
            <th class="text-left py-3 px-4">Proveedor</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b">
            <td class="py-3 px-4">Licencia RMS (anual)</td>
            <td class="py-3 px-4">€6.000</td>
            <td class="py-3 px-4">€500/mes</td>
            <td class="py-3 px-4">[A determinar]</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Channel Manager</td>
            <td class="py-3 px-4">€2.000</td>
            <td class="py-3 px-4">€250/mes</td>
            <td class="py-3 px-4">[A determinar]</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Motor de Reservas</td>
            <td class="py-3 px-4">€8.000</td>
            <td class="py-3 px-4">€150/mes</td>
            <td class="py-3 px-4">[A determinar]</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Integración PMS</td>
            <td class="py-3 px-4">€5.000</td>
            <td class="py-3 px-4">-</td>
            <td class="py-3 px-4">[A determinar]</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Formación</td>
            <td class="py-3 px-4">€4.000</td>
            <td class="py-3 px-4">-</td>
            <td class="py-3 px-4">Proveedor software</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Consultoría RM</td>
            <td class="py-3 px-4">€7.500</td>
            <td class="py-3 px-4">€1.000/mes (6 meses)</td>
            <td class="py-3 px-4">[A determinar]</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4">Contingencia (10%)</td>
            <td class="py-3 px-4">€3.250</td>
            <td class="py-3 px-4">-</td>
            <td class="py-3 px-4">-</td>
        </tr>
        <tr class="bg-blue-50">
            <td class="py-3 px-4 font-bold">TOTAL</td>
            <td class="py-3 px-4 font-bold">€35.750</td>
            <td class="py-3 px-4 font-bold">€1.900/mes</td>
            <td class="py-3 px-4">-</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success my-6">
    <div class="callout-title">
        <span>📁</span>
        <span>Entregables del Alumnado</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li>Documento completo del proyecto en formato PDF.</li>
        <li>Presentación ejecutiva (15-20 diapositivas).</li>
        <li>Diagramas de arquitectura y procesos (visio, draw.io o similar).</li>
        <li>Plantillas de reporting completadas con datos de ejemplo.</li>
        <li>Cronograma detallado en formato Gantt.</li>
        <li>Presupuesto desglosado en formato Excel.</li>
    </ul>
</div>`;
