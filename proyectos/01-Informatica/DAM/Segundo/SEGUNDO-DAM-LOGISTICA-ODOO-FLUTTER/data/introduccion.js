window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.introduccion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🏢</span>
        <span>Contexto Empresarial</span>
    </div>
    <p>Conoce la empresa real donde se enmarca este proyecto y la problemática crítica que justifica el desarrollo de LogiScan Pro.</p>
</div>

<h2>1.1. Presentación de LogiTrans Mediterráneo S.L.</h2>

<h3>📍 Datos Generales de la Empresa</h3>

<div class="grid grid-cols-2 gap-4 my-6">

<div class="callout callout-success">

<p><strong>Nombre:</strong> LogiTrans Mediterráneo S.L.</p>
<p><strong>Sector:</strong> Logística y Transporte</p>
<p><strong>Ubicación:</strong> Polígono Industrial Mas Balà, Torrent (Valencia)</p>
<p><strong>Plantilla:</strong> 45 empleados</p>

</div>

<div class="callout callout-info">

<p><strong>Facturación anual:</strong> 3,2 millones €</p>
<p><strong>Clientes:</strong> 120 empresas activas</p>
<p><strong>Camiones diarios:</strong> 25-30 recepciones</p>
<p><strong>Paquetes/día:</strong> 8.000-12.000 unidades</p>

</div>

</div>

<h3>🏗️ Estructura Organizativa</h3>

<p>La empresa cuenta con los siguientes departamentos:</p>

<table class="my-6">
<thead>
<tr>
<th>Departamento</th>
<th>Personal</th>
<th>Funciones Principales</th>
</tr>
</thead>
<tbody>
<tr>
<td>Dirección General</td>
<td>2</td>
<td>Estrategia y relaciones comerciales</td>
</tr>
<tr>
<td>Administración</td>
<td>5</td>
<td>Facturación, contabilidad, RRHH</td>
</tr>
<tr>
<td>Operaciones Logísticas</td>
<td>28</td>
<td>Recepción, preparación, expedición</td>
</tr>
<tr>
<td>Conductores</td>
<td>8</td>
<td>Transporte y reparto</td>
</tr>
<tr>
<td>TI/Soporte</td>
<td>2</td>
<td>Sistemas informáticos y mantenimiento</td>
</tr>
</tbody>
</table>

<h3>️ Infraestructura Tecnológica Actual</h3>

<p>LogiTrans Mediterráneo implementó hace 3 años el ERP <strong>Odoo Enterprise v16</strong> para gestionar:</p>

<ul class="list-disc pl-6 space-y-2 my-4">
<li>📦 <strong>Módulo de Inventario:</strong> Control de stock y ubicaciones</li>
<li>🚚 <strong>Módulo de Flota:</strong> Gestión de vehículos y rutas</li>
<li> <strong>Módulo de Compras:</strong> Órdenes de aprovisionamiento</li>
<li>👥 <strong>Módulo de RRHH:</strong> Gestión de personal y turnos</li>
<li>💰 <strong>Módulo de Contabilidad:</strong> Facturación y balances</li>
</ul>

<hr class="my-8">

<h2>1.2. Problemática Crítica Detectada</h2>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Problema Principal</span>
    </div>
    <p>El proceso actual de recepción de mercancías presenta <strong>cuellos de botella significativos</strong> que impactan directamente en la productividad y satisfacción del cliente.</p>
</div>

<h3>📉 Flujo de Trabajo Actual (AS-IS)</h3>

<div class="callout callout-info my-6">
<pre class="text-sm overflow-x-auto">
┌─────────────────────────────────────────────────────────────────┐
│                    PROCESO DE RECEPCIÓN ACTUAL                   │
├─────────────────────────────────────────────────────────────────┤
│  1️⃣  Llega el camión al muelle de descarga                       │
│      ↓                                                           │
│  2️⃣  El conductor entrega el albarán en papel al administrativo  │
│      ↓                                                           │
│  3️⃣  El administrativo registra manualmente en Odoo              │
│      (tiempo promedio: 15-20 minutos)                            │
│      ↓                                                           │
│  4️⃣  Se avisa verbalmente a los operarios de almacén            │
│      ↓                                                           │
│  5️⃣  Los operarios descargan y verifican visualmente            │
│      (tiempo promedio: 30-40 minutos)                            │
│      ↓                                                           │
│  6️⃣  Se anotan incidencias en post-it o papel                   │
│      ↓                                                           │
│  7️⃣  El administrativo actualiza Odoo con las incidencias        │
│      (retraso: 2-4 horas o nunca)                                │
└─────────────────────────────────────────────────────────────────┘
</pre>
</div>

<h3>📊 Cuantificación del Impacto Negativo</h3>

<table class="my-6">
<thead>
<tr>
<th>Indicador</th>
<th>Valor Actual</th>
<th>Objetivo Deseado</th>
<th>Brecha</th>
</tr>
</thead>
<tbody>
<tr>
<td>Tiempo medio verificación/camión</td>
<td>45 min</td>
<td>15 min</td>
<td>-67%</td>
</tr>
<tr>
<td>Errores de registro no detectados</td>
<td>12%</td>
<td>&lt;1%</td>
<td>-92%</td>
</tr>
<tr>
<td>Incidencias reportadas a tiempo</td>
<td>45%</td>
<td>98%</td>
<td>+118%</td>
</tr>
<tr>
<td>Reclamaciones de clientes/mes</td>
<td>18</td>
<td>&lt;3</td>
<td>-83%</td>
</tr>
<tr>
<td>Horas extra operarios/semana</td>
<td>12</td>
<td>2</td>
<td>-83%</td>
</tr>
</tbody>
</table>

<div class="callout callout-error">
    <div class="callout-title">
        <span>💰</span>
        <span>Pérdidas Anuales Estimadas</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li><strong>Horas extra operarios:</strong> 18.720 €/año</li>
        <li><strong>Devoluciones por errores:</strong> 12.500 €/año</li>
        <li><strong>Penalizaciones por retraso:</strong> 8.400 €/año</li>
        <li><strong>Pérdida de clientes:</strong> 45.000 €/año (estimado)</li>
    </ul>
    <p class="mt-4 font-bold text-lg">Total: 84.620 €/año en pérdidas evitables</p>
</div>

<hr class="my-8">

<h2>1.3. Propuesta Técnica: LogiScan Pro</h2>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✨</span>
        <span>Solución Propuesta</span>
    </div>
    <p>Desarrollar un ecosistema digital integrado que automatice el flujo de información entre el ERP Odoo y los operarios de almacén mediante una aplicación móvil en Flutter.</p>
</div>

<h3>🔄 Nuevo Flujo de Trabajo (TO-BE)</h3>

<div class="callout callout-info my-6">
<pre class="text-sm overflow-x-auto">
┌─────────────────────────────────────────────────────────────────┐
│                 PROCESO DE RECEPCIÓN OPTIMIZADO                  │
├─────────────────────────────────────────────────────────────────┤
│  1️⃣  Llega el camión al muelle de descarga                       │
│      ↓                                                           │
│  2️⃣  El administrativo marca "Llegada" en Odoo                  │
│      ↓                                                           │
│  3️⃣   NOTIFICACIÓN PUSH automática a todos los operarios      │
│      ↓                                                           │
│  4️⃣  Operarios abren LogiScan Pro y ven el albarán              │
│      ↓                                                           │
│  5️⃣  Escanean QR/código de barras de cada paquete               │
│      ↓                                                           │
│  6️⃣  ✅ Odoo actualiza estado en TIEMPO REAL                    │
│      ↓                                                           │
│  7️⃣  Al finalizar: informe automático de incidencias            │
└─────────────────────────────────────────────────────────────────┘
</pre>
</div>

<h3>🏗️ Arquitectura de la Solución</h3>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">

<div class="callout callout-info">

<h4>🖥️ Backend (Odoo)</h4>
<ul class="list-disc pl-6 space-y-1">
<li>Módulo personalizado de notificaciones</li>
<li>API REST para consulta de albaranes</li>
<li>Webhooks para eventos de llegada</li>
<li>Base de datos PostgreSQL</li>
</ul>

</div>

<div class="callout callout-info">

<h4>📡 Middleware</h4>
<ul class="list-disc pl-6 space-y-1">
<li>Servidor Node.js/Express</li>
<li>Firebase Cloud Messaging</li>
<li>Cola de mensajes Redis</li>
<li>Autenticación JWT</li>
</ul>

</div>

<div class="callout callout-info">

<h4>📱 Frontend (Flutter)</h4>
<ul class="list-disc pl-6 space-y-1">
<li>App multiplataforma (iOS/Android)</li>
<li>Escáner integrado de QR/barras</li>
<li>Base de datos local SQLite</li>
<li>Sincronización offline</li>
</ul>

</div>

</div>

<hr class="my-8">

<h2>1.4. Objetivos SMART del Proyecto</h2>

<div class="callout callout-info">
    <div class="callout-title">
        <span>🎯</span>
        <span>Objetivos SMART</span>
    </div>
    <p>Los objetivos siguen la metodología SMART: Específicos, Medibles, Alcanzables, Relevantes y con Tiempo definido.</p>
</div>

<table class="my-6">
<thead>
<tr>
<th>#</th>
<th>Objetivo</th>
<th>Criterio SMART</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Reducir tiempo de verificación</td>
<td><strong>Específico:</strong> De 45 a 15 min/camión<br><strong>Medible:</strong> Cronometraje por operación<br><strong>Alcanzable:</strong> Con escaneo automático<br><strong>Relevante:</strong> Impacta productividad<br><strong>Tiempo:</strong> 3 meses tras implantación</td>
</tr>
<tr>
<td>2</td>
<td>Eliminar errores de registro</td>
<td><strong>Específico:</strong> Reducir del 12% al 1%<br><strong>Medible:</strong> Incidencias detectadas/mes<br><strong>Alcanzable:</strong> Validación automática<br><strong>Relevante:</strong> Reduce reclamaciones<br><strong>Tiempo:</strong> 2 meses tras implantación</td>
</tr>
<tr>
<td>3</td>
<td>Implementar trazabilidad completa</td>
<td><strong>Específico:</strong> 100% paquetes escaneados<br><strong>Medible:</strong> Logs en base de datos<br><strong>Alcanzable:</strong> Obligatorio escanear<br><strong>Relevante:</strong> Mejora servicio<br><strong>Tiempo:</strong> Desde el lanzamiento</td>
</tr>
<tr>
<td>4</td>
<td>Capacitar al 100% del personal</td>
<td><strong>Específico:</strong> 28 operarios formados<br><strong>Medible:</strong> Test de competencia<br><strong>Alcanzable:</strong> 4 sesiones de 2h<br><strong>Relevante:</strong> Garantiza adopción<br><strong>Tiempo:</strong> 1 mes tras despliegue</td>
</tr>
<tr>
<td>5</td>
<td>ROI positivo en 6 meses</td>
<td><strong>Específico:</strong> Recuperar inversión<br><strong>Medible:</strong> Ahorro vs. coste desarrollo<br><strong>Alcanzable:</strong> 84.620 € ahorro anual<br><strong>Relevante:</strong> Viabilidad económica<br><strong>Tiempo:</strong> 6 meses post-implantación</td>
</tr>
</tbody>
</table>

<hr class="my-8">

<h2>1.5. Alcance del Proyecto</h2>

<h3>✅ Incluido en el Alcance</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">

<div class="callout callout-success">

<h4>📦 Desarrollo de Software</h4>
<ul class="list-disc pl-6 space-y-1">
<li>✅ Módulo Odoo personalizado</li>
<li>✅ API REST de integración</li>
<li>✅ App Flutter iOS/Android</li>
<li>✅ Panel de administración web</li>
<li>✅ Sistema de notificaciones push</li>
</ul>

</div>

<div class="callout callout-success">

<h4>🏗️ Infraestructura</h4>
<ul class="list-disc pl-6 space-y-1">
<li>✅ Configuración servidores</li>
<li>✅ Base de datos PostgreSQL</li>
<li>✅ Firebase Cloud Messaging</li>
<li>✅ Certificados SSL/TLS</li>
<li>✅ Copias de seguridad automáticas</li>
</ul>

</div>

</div>

<h3>❌ Fuera del Alcance</h3>

<div class="callout callout-warning">
<ul class="list-disc pl-6 space-y-2">
<li>❌ Modificación de hardware (scanners, terminales)</li>
<li>❌ Integración con otros ERPs distintos a Odoo</li>
<li>❌ Desarrollo de funcionalidades de transporte/rutas</li>
<li>❌ Migración de datos históricos de otros sistemas</li>
<li>❌ Formación de clientes externos de la empresa</li>
</ul>
</div>

<hr class="my-8">

<h2>1.6. Estructura del Documento</h2>

<p>Este proyecto intermodular se organiza en las siguientes secciones:</p>

<table class="my-6">
<thead>
<tr>
<th>Sección</th>
<th>Contenido</th>
<th>Horas estimadas</th>
</tr>
</thead>
<tbody>
<tr>
<td>2. Estado del Arte</td>
<td>Análisis de soluciones existentes</td>
<td>10h</td>
</tr>
<tr>
<td>3. Estudio de Viabilidad</td>
<td>Análisis técnico, económico y temporal</td>
<td>12h</td>
</tr>
<tr>
<td>4. Requisitos</td>
<td>Especificación funcional y no funcional</td>
<td>14h</td>
</tr>
<tr>
<td>5. Diseño</td>
<td>Arquitectura y diseño técnico</td>
<td>16h</td>
</tr>
<tr>
<td>6. Implementación</td>
<td>Desarrollo y configuración</td>
<td>28h</td>
</tr>
<tr>
<td>7. Administración</td>
<td>Manual de explotación</td>
<td>8h</td>
</tr>
<tr>
<td>8. Herramientas</td>
<td>Documentación de apoyo</td>
<td>4h</td>
</tr>
<tr>
<td>9. Conclusiones</td>
<td>Valoración y líneas futuras</td>
<td>4h</td>
</tr>
<tr class="font-bold">
<td colspan="2">Total</td>
<td>96h</td>
</tr>
</tbody>
</table>
`;
