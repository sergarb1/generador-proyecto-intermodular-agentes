window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['requisitos'] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📋</span>
        <span>Análisis de Requisitos</span>
    </div>
    <p>Especifica de forma clara y medible qué debe hacer el sistema (requisitos funcionales) y cómo debe comportarse (requisitos no funcionales).</p>
</div>

<h2>4.1. Requisitos Funcionales</h2>

<h3>🎯 Metodología de Especificación</h3>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span>
        <span>Formato de Requisitos</span>
    </div>
    <p>Cada requisito debe seguir el formato: <strong>Verbo de acción + Objeto + Criterio de aceptación</strong>. Debe ser medible y testeable.</p>
</div>

<h3>RF-001: Gestión de Notificaciones de Llegada</h3>

<table class="my-6">
<thead>
<tr>
<th>Campo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ID</strong></td>
<td>RF-001</td>
</tr>
<tr>
<td><strong>Nombre</strong></td>
<td>Notificación push de llegada de camión</td>
</tr>
<tr>
<td><strong>Descripción</strong></td>
<td>El sistema debe enviar una notificación push a todos los operarios cuando un administrativo marque la llegada de un camión en Odoo</td>
</tr>
<tr>
<td><strong>Prioridad</strong></td>
<td>ALTA</td>
</tr>
<tr>
<td><strong>Criterios de Aceptación</strong></td>
<td>
<ul class="list-disc pl-6 space-y-1">
<li>La notificación llega en menos de 10 segundos</li>
<li>Se muestra el número de albarán</li>
<li>Se muestra la hora de llegada</li>
<li>Llega a todos los operarios activos</li>
</ul>
</td>
</tr>
</tbody>
</table>

<h3>RF-002: Visualización de Albaranes</h3>

<table class="my-6">
<thead>
<tr>
<th>Campo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ID</strong></td>
<td>RF-002</td>
</tr>
<tr>
<td><strong>Nombre</strong></td>
<td>Consultar albarán pendiente</td>
</tr>
<tr>
<td><strong>Descripción</strong></td>
<td>El operario debe poder ver el detalle del albarán con los paquetes esperados</td>
</tr>
<tr>
<td><strong>Prioridad</strong></td>
<td>ALTA</td>
</tr>
<tr>
<td><strong>Criterios de Aceptación</strong></td>
<td>
<ul class="list-disc pl-6 space-y-1">
<li>Muestra código de albarán</li>
<li>Lista todos los paquetes esperados</li>
<li>Indica estado de cada paquete (pendiente/escaneado)</li>
<li>Permite filtrar por estado</li>
</ul>
</td>
</tr>
</tbody>
</table>

<h3>RF-003: Escaneo de Códigos QR</h3>

<table class="my-6">
<thead>
<tr>
<th>Campo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ID</strong></td>
<td>RF-003</td>
</tr>
<tr>
<td><strong>Nombre</strong></td>
<td>Escanear código QR de paquete</td>
</tr>
<tr>
<td><strong>Descripción</strong></td>
<td>La app debe permitir escanear códigos QR usando la cámara del dispositivo</td>
</tr>
<tr>
<td><strong>Prioridad</strong></td>
<td>ALTA</td>
</tr>
<tr>
<td><strong>Criterios de Aceptación</strong></td>
<td>
<ul class="list-disc pl-6 space-y-1">
<li>Reconoce QR en menos de 2 segundos</li>
<li>Funciona con baja luminosidad</li>
<li>Confirma con vibración/sonido el escaneo</li>
<li>Previene escaneos duplicados accidentales</li>
</ul>
</td>
</tr>
</tbody>
</table>

<h3>RF-004: Escaneo de Códigos de Barras</h3>

<table class="my-6">
<thead>
<tr>
<th>Campo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ID</strong></td>
<td>RF-004</td>
</tr>
<tr>
<td><strong>Nombre</strong></td>
<td>Escanear código de barras EAN-13</td>
</tr>
<tr>
<td><strong>Descripción</strong></td>
<td>La app debe permitir escanear códigos de barras estándar EAN-13</td>
</tr>
<tr>
<td><strong>Prioridad</strong></td>
<td>ALTA</td>
</tr>
<tr>
<td><strong>Criterios de Aceptación</strong></td>
<td>
<ul class="list-disc pl-6 space-y-1">
<li>Soporta EAN-13 y Code-128</li>
<li>Reconoce en menos de 2 segundos</li>
<li>Maneja códigos dañados parcialmente</li>
<li>Confirma visualmente el código escaneado</li>
</ul>
</td>
</tr>
</tbody>
</table>

<h3>RF-005: Validación de Paquete</h3>

<table class="my-6">
<thead>
<tr>
<th>Campo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ID</strong></td>
<td>RF-005</td>
</tr>
<tr>
<td><strong>Nombre</strong></td>
<td>Validar paquete escaneado</td>
</tr>
<tr>
<td><strong>Descripción</strong></td>
<td>El sistema debe validar si el paquete escaneado pertenece al albarán actual</td>
</tr>
<tr>
<td><strong>Prioridad</strong></td>
<td>ALTA</td>
</tr>
<tr>
<td><strong>Criterios de Aceptación</strong></td>
<td>
<ul class="list-disc pl-6 space-y-1">
<li>Indica ✅ si pertenece al albarán</li>
<li>Indica ❌ si NO pertenece (alerta visual/sonora)</li>
<li>Registra timestamp de validación</li>
<li>Actualiza contador de paquetes válidos</li>
</ul>
</td>
</tr>
</tbody>
</table>

<h3>RF-006: Registro de Incidencias</h3>

<table class="my-6">
<thead>
<tr>
<th>Campo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ID</strong></td>
<td>RF-006</td>
</tr>
<tr>
<td><strong>Nombre</strong></td>
<td>Registrar incidencia de paquete</td>
</tr>
<tr>
<td><strong>Descripción</strong></td>
<td>El operario debe poder marcar un paquete como dañado o incorrecto</td>
</tr>
<tr>
<td><strong>Prioridad</strong></td>
<td>MEDIA</td>
</tr>
<tr>
<td><strong>Criterios de Aceptación</strong></td>
<td>
<ul class="list-disc pl-6 space-y-1">
<li>Permite seleccionar tipo de incidencia</li>
<li>Campo de texto para observaciones</li>
<li>Opcional: foto del daño</li>
<li>Notifica a administración inmediatamente</li>
</ul>
</td>
</tr>
</tbody>
</table>

<h3>RF-007: Sincronización Offline</h3>

<table class="my-6">
<thead>
<tr>
<th>Campo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ID</strong></td>
<td>RF-007</td>
</tr>
<tr>
<td><strong>Nombre</strong></td>
<td>Funcionamiento sin conectividad</td>
</tr>
<tr>
<td><strong>Descripción</strong></td>
<td>La app debe permitir escanear sin conexión y sincronizar cuando se recupere</td>
</tr>
<tr>
<td><strong>Prioridad</strong></td>
<td>ALTA</td>
</tr>
<tr>
<td><strong>Criterios de Aceptación</strong></td>
<td>
<ul class="list-disc pl-6 space-y-1">
<li>Almacena escaneos localmente</li>
<li>Indica claramente estado "offline"</li>
<li>Sincroniza automáticamente al recuperar conexión</li>
<li>Resuelve conflictos (último timestamp gana)</li>
</ul>
</td>
</tr>
</tbody>
</table>

<h3>RF-008: Cierre de Albarán</h3>

<table class="my-6">
<thead>
<tr>
<th>Campo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ID</strong></td>
<td>RF-008</td>
</tr>
<tr>
<td><strong>Nombre</strong></td>
<td>Finalizar verificación de albarán</td>
</tr>
<tr>
<td><strong>Descripción</strong></td>
<td>El operario debe poder marcar el albarán como completado</td>
</tr>
<tr>
<td><strong>Prioridad</strong></td>
<td>ALTA</td>
</tr>
<tr>
<td><strong>Criterios de Aceptación</strong></td>
<td>
<ul class="list-disc pl-6 space-y-1">
<li>Verifica todos los paquetes escaneados</li>
<li>Indica paquetes faltantes</li>
<li>Genera resumen de la operación</li>
<li>Envía confirmación a Odoo</li>
</ul>
</td>
</tr>
</tbody>
</table>

<h3>📊 Tabla Resumen de Requisitos Funcionales</h3>

<table class="my-6">
<thead>
<tr>
<th>ID</th>
<th>Nombre</th>
<th>Prioridad</th>
<th>Módulo</th>
</tr>
</thead>
<tbody>
<tr>
<td>RF-001</td>
<td>Notificación push llegada</td>
<td>ALTA</td>
<td>Notificaciones</td>
</tr>
<tr>
<td>RF-002</td>
<td>Visualizar albarán</td>
<td>ALTA</td>
<td>Albaranes</td>
</tr>
<tr>
<td>RF-003</td>
<td>Escanear QR</td>
<td>ALTA</td>
<td>Escáner</td>
</tr>
<tr>
<td>RF-004</td>
<td>Escanear Barras</td>
<td>ALTA</td>
<td>Escáner</td>
</tr>
<tr>
<td>RF-005</td>
<td>Validar paquete</td>
<td>ALTA</td>
<td>Validación</td>
</tr>
<tr>
<td>RF-006</td>
<td>Registrar incidencia</td>
<td>MEDIA</td>
<td>Incidencias</td>
</tr>
<tr>
<td>RF-007</td>
<td>Sincronización offline</td>
<td>ALTA</td>
<td>Sincronización</td>
</tr>
<tr>
<td>RF-008</td>
<td>Cierre de albarán</td>
<td>ALTA</td>
<td>Albaranes</td>
</tr>
<tr>
<td>RF-009</td>
<td>Histórico operaciones</td>
<td>BAJA</td>
<td>Consultas</td>
</tr>
<tr>
<td>RF-010</td>
<td>Autenticación usuarios</td>
<td>ALTA</td>
<td>Seguridad</td>
</tr>
</tbody>
</table>

<hr class="my-8">

<h2>4.2. Requisitos No Funcionales</h2>

<h3>⚙️ Especificación Técnica</h3>

<div class="callout callout-info">
    <div class="callout-title">
        <span>⚙️</span>
        <span>Requisitos de Calidad</span>
    </div>
    <p>Los requisitos no funcionales definen CÓMO debe comportarse el sistema. Deben ser medibles con métricas objetivas.</p>
</div>

<h3>RNF-001: Rendimiento de Escaneo</h3>

<table class="my-6">
<thead>
<tr>
<th>Campo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ID</strong></td>
<td>RNF-001</td>
</tr>
<tr>
<td><strong>Nombre</strong></td>
<td>Tiempo de respuesta de escaneo</td>
</tr>
<tr>
<td><strong>Descripción</strong></td>
<td>El sistema debe reconocer y validar un código en menos de 2 segundos</td>
</tr>
<tr>
<td><strong>Métrica</strong></td>
<td>Tiempo promedio &lt; 2s en el 95% de escaneos</td>
</tr>
<tr>
<td><strong>Método de Verificación</strong></td>
<td>Tests de estrés con 100 escaneos consecutivos</td>
</tr>
</tbody>
</table>

<h3>RNF-002: Disponibilidad</h3>

<table class="my-6">
<thead>
<tr>
<th>Campo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ID</strong></td>
<td>RNF-002</td>
</tr>
<tr>
<td><strong>Nombre</strong></td>
<td>Disponibilidad del sistema</td>
</tr>
<tr>
<td><strong>Descripción</strong></td>
<td>El sistema debe estar disponible el 99% del tiempo laboral</td>
</tr>
<tr>
<td><strong>Métrica</strong></td>
<td>Uptime ≥ 99% en horario 6:00-22:00</td>
</tr>
<tr>
<td><strong>Método de Verificación</strong></td>
<td>Monitorización con UptimeRobot</td>
</tr>
</tbody>
</table>

<h3>RNF-003: Capacidad de Usuarios</h3>

<table class="my-6">
<thead>
<tr>
<th>Campo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ID</strong></td>
<td>RNF-003</td>
</tr>
<tr>
<td><strong>Nombre</strong></td>
<td>Usuarios concurrentes</td>
</tr>
<tr>
<td><strong>Descripción</strong></td>
<td>El sistema debe soportar todos los operarios simultáneamente</td>
</tr>
<tr>
<td><strong>Métrica</strong></td>
<td>30 usuarios concurrentes sin degradación</td>
</tr>
<tr>
<td><strong>Método de Verificación</strong></td>
<td>Tests de carga con JMeter</td>
</tr>
</tbody>
</table>

<h3>RNF-004: Seguridad de Datos</h3>

<table class="my-6">
<thead>
<tr>
<th>Campo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ID</strong></td>
<td>RNF-004</td>
</tr>
<tr>
<td><strong>Nombre</strong></td>
<td>Protección de comunicaciones</td>
</tr>
<tr>
<td><strong>Descripción</strong></td>
<td>Todas las comunicaciones deben estar cifradas</td>
</tr>
<tr>
<td><strong>Métrica</strong></td>
<td>100% tráfico HTTPS/TLS 1.3</td>
</tr>
<tr>
<td><strong>Método de Verificación</strong></td>
<td>Análisis con Wireshark + SSL Labs</td>
</tr>
</tbody>
</table>

<h3>RNF-005: Usabilidad</h3>

<table class="my-6">
<thead>
<tr>
<th>Campo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ID</strong></td>
<td>RNF-005</td>
</tr>
<tr>
<td><strong>Nombre</strong></td>
<td>Facilidad de uso</td>
</tr>
<tr>
<td><strong>Descripción</strong></td>
<td>Un operario nuevo debe poder usar la app sin formación previa</td>
</tr>
<tr>
<td><strong>Métrica</strong></td>
<td>90% de éxito en primer uso sin ayuda</td>
</tr>
<tr>
<td><strong>Método de Verificación</strong></td>
<td>Tests con 5 usuarios no entrenados</td>
</tr>
</tbody>
</table>

<h3>📊 Tabla Resumen de Requisitos No Funcionales</h3>

<table class="my-6">
<thead>
<tr>
<th>ID</th>
<th>Nombre</th>
<th>Métrica</th>
<th>Prioridad</th>
</tr>
</thead>
<tbody>
<tr>
<td>RNF-001</td>
<td>Rendimiento escaneo</td>
<td>&lt; 2 segundos</td>
<td>ALTA</td>
</tr>
<tr>
<td>RNF-002</td>
<td>Disponibilidad</td>
<td>≥ 99%</td>
<td>ALTA</td>
</tr>
<tr>
<td>RNF-003</td>
<td>Usuarios concurrentes</td>
<td>30 simultáneos</td>
<td>MEDIA</td>
</tr>
<tr>
<td>RNF-004</td>
<td>Seguridad</td>
<td>100% HTTPS</td>
<td>ALTA</td>
</tr>
<tr>
<td>RNF-005</td>
<td>Usabilidad</td>
<td>90% éxito primer uso</td>
<td>ALTA</td>
</tr>
<tr>
<td>RNF-006</td>
<td>Portabilidad</td>
<td>Android 8+/iOS 12+</td>
<td>MEDIA</td>
</tr>
<tr>
<td>RNF-007</td>
<td>Escalabilidad</td>
<td>100K registros</td>
<td>BAJA</td>
</tr>
<tr>
<td>RNF-008</td>
<td>Mantenibilidad</td>
<td>Score &gt; 80%</td>
<td>MEDIA</td>
</tr>
</tbody>
</table>

<hr class="my-8">

<h2>4.3. Glosario de Términos</h2>

<table class="my-6">
<thead>
<tr>
<th>Término</th>
<th>Definición</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Albarán</strong></td>
<td>Documento que acompaña a la mercancía con el detalle de paquetes</td>
</tr>
<tr>
<td><strong>SKU</strong></td>
<td>Stock Keeping Unit - Identificador único de producto</td>
</tr>
<tr>
<td><strong>EAN-13</strong></td>
<td>European Article Number - Código de barras de 13 dígitos</td>
</tr>
<tr>
<td><strong>QR</strong></td>
<td>Quick Response - Código bidimensional legible por cámara</td>
</tr>
<tr>
<td><strong>WMS</strong></td>
<td>Warehouse Management System - Sistema de gestión de almacenes</td>
</tr>
<tr>
<td><strong>Push</strong></td>
<td>Notificación enviada del servidor al dispositivo</td>
</tr>
<tr>
<td><strong>Offline-first</strong></td>
<td>Diseño que prioriza funcionamiento sin conexión</td>
</tr>
<tr>
<td><strong>Timestamp</strong></td>
<td>Marca de tiempo que indica cuándo ocurrió un evento</td>
</tr>
</tbody>
</table>
`;
