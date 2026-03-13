window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['estado-arte'] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🌐</span>
        <span>Estado del Arte</span>
    </div>
    <p>Analiza las soluciones existentes en el mercado para la gestión logística y el escaneo de códigos, identificando sus fortalezas y limitaciones.</p>
</div>

<h2>2.1. Sistemas de Gestión Logística en el Mercado</h2>

<h3>📊 Panorama General</h3>

<p>El mercado de sistemas de gestión de almacenes (WMS - Warehouse Management Systems) ha experimentado un crecimiento significativo, impulsado por la digitalización y el comercio electrónico.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">

<div class="callout callout-info">

<h4>📈 Tamaño del Mercado Global</h4>
<ul class="list-disc pl-6 space-y-2">
<li>Valor 2024: <strong>2.800 millones USD</strong></li>
<li>Proyección 2030: <strong>6.500 millones USD</strong></li>
<li>CAGR: <strong>14,2%</strong> anual</li>
</ul>
<p class="text-sm text-slate-500 mt-2"><em>Fuente: MarketsandMarkets Research</em></p>

</div>

<div class="callout callout-success">

<h4>🎯 Tendencias Principales</h4>
<ol class="list-decimal pl-6 space-y-2">
<li>Integración con IA para predicción de demanda</li>
<li>Escaneo móvil sin hardware especializado</li>
<li>Sincronización en tiempo real cloud</li>
<li>Interfaces intuitivas tipo consumer apps</li>
</ol>

</div>

</div>

<hr class="my-8">

<h2>2.2. Análisis de ERPs con Módulo Logístico</h2>

<h3>🏆 Principales Soluciones Empresariales</h3>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>🔍</span>
        <span>Metodología de Análisis</span>
    </div>
    <p>Para tu proyecto, debes investigar cada solución considerando: funcionalidad logística, capacidades de integración, coste total de propiedad y curva de aprendizaje.</p>
</div>

<h3>Tabla Comparativa de ERPs</h3>

<table class="my-6">
<thead>
<tr>
<th>ERP</th>
<th>Módulo WMS</th>
<th>API REST</th>
<th>Mobile Ready</th>
<th>Precio (medio)</th>
<th>Valoración</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Odoo</strong></td>
<td>✅ Nativo</td>
<td>✅ Completa</td>
<td>✅ Apps oficiales</td>
<td>€€</td>
<td>⭐⭐⭐⭐⭐</td>
</tr>
<tr>
<td><strong>SAP Business One</strong></td>
<td>✅ Avanzado</td>
<td>✅ Completa</td>
<td>⚠️ Limitado</td>
<td>€€€€</td>
<td>⭐⭐⭐⭐</td>
</tr>
<tr>
<td><strong>Microsoft Dynamics 365</strong></td>
<td>✅ Avanzado</td>
<td>✅ Completa</td>
<td>✅ Integrado</td>
<td>€€€€</td>
<td>⭐⭐⭐⭐</td>
</tr>
<tr>
<td><strong>Oracle NetSuite</strong></td>
<td>✅ Completo</td>
<td>✅ Completa</td>
<td>✅ Nativo</td>
<td>€€€€</td>
<td>⭐⭐⭐⭐</td>
</tr>
<tr>
<td><strong>Dolibarr</strong></td>
<td>⚠️ Básico</td>
<td>⚠️ Limitada</td>
<td>❌ No</td>
<td>€</td>
<td>⭐⭐⭐</td>
</tr>
<tr>
<td><strong>Tryton</strong></td>
<td>⚠️ Básico</td>
<td>✅ Sí</td>
<td>❌ No</td>
<td>€</td>
<td>⭐⭐⭐</td>
</tr>
</tbody>
</table>

<h3>🥇 Por qué Odoo es la Elección Adecuada</h3>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span>
        <span>Ventajas de Odoo para este Proyecto</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li><strong>Open Source:</strong> Código modificable sin restricciones</li>
        <li><strong>Python:</strong> Lenguaje accesible para desarrollo de módulos</li>
        <li><strong>API XML-RPC/JSON-RPC:</strong> Integración sencilla</li>
        <li><strong>Comunidad activa:</strong> Soporte y documentación extensa</li>
        <li><strong>Modular:</strong> Solo se paga por lo que se necesita</li>
        <li><strong>Multiempresa:</strong> Escalable a múltiples clientes</li>
    </ul>
</div>

<hr class="my-8">

<h2>2.3. Tecnologías de Escaneo de Códigos</h2>

<h3>📱 Evolución de las Soluciones de Escaneo</h3>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">

<div class="callout callout-info">

<h4>1️⃣ Generación 1: Hardware Dedicado</h4>
<p><strong>Pistolas láser</strong></p>
<ul class="list-disc pl-6 space-y-1">
<li>✅ Muy rápidas y precisas</li>
<li>❌ Coste elevado (300-800€)</li>
<li>❌ Hardware específico</li>
<li>❌ Sin integración directa</li>
</ul>

</div>

<div class="callout callout-info">

<h4>2️⃣ Generación 2: Terminales RFID</h4>
<p><strong>Lectores RFID</strong></p>
<ul class="list-disc pl-6 space-y-1">
<li>✅ Sin línea de visión directa</li>
<li>✅ Múltiples lecturas simultáneas</li>
<li>❌ Etiquetas caras (0,10-0,50€)</li>
<li>❌ Interferencias metálicas</li>
</ul>

</div>

<div class="callout callout-info">

<h4>3️⃣ Generación 3: Cámaras Smartphone</h4>
<p><strong>Apps con cámara</strong></p>
<ul class="list-disc pl-6 space-y-1">
<li>✅ Hardware ya disponible</li>
<li>✅ Coste marginal cero</li>
<li>✅ Actualizaciones OTA</li>
<li>⚠️ Depende de iluminación</li>
</ul>

</div>

</div>

<h3>📊 Comparativa de Librerías de Escaneo</h3>

<table class="my-6">
<thead>
<tr>
<th>Librería</th>
<th>Plataforma</th>
<th>QR</th>
<th>Código Barras</th>
<th>Rendimiento</th>
<th>Licencia</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ML Kit (Google)</strong></td>
<td>iOS/Android</td>
<td>✅</td>
<td>✅</td>
<td>Excelente</td>
<td>Gratuita</td>
</tr>
<tr>
<td><strong>ZXing</strong></td>
<td>Multi</td>
<td>✅</td>
<td>✅</td>
<td>Bueno</td>
<td>Apache 2.0</td>
</tr>
<tr>
<td><strong>ZBar</strong></td>
<td>Multi</td>
<td>✅</td>
<td>✅</td>
<td>Regular</td>
<td>LGPL</td>
</tr>
<tr>
<td><strong>Scandit</strong></td>
<td>Multi</td>
<td>✅</td>
<td>✅</td>
<td>Excelente</td>
<td>Comercial</td>
</tr>
<tr>
<td><strong>Dynamsoft</strong></td>
<td>Multi</td>
<td>✅</td>
<td>✅</td>
<td>Excelente</td>
<td>Comercial</td>
</tr>
</tbody>
</table>

<div class="callout callout-info">
    <div class="callout-title">
        <span>💡</span>
        <span>Recomendación para tu Proyecto</span>
    </div>
    <p>Utiliza <strong>Google ML Kit</strong> para Flutter. Ofrece el mejor equilibrio entre rendimiento, facilidad de uso y coste (gratuito). Soporta detección múltiple y funciona offline.</p>
</div>

<hr class="my-8">

<h2>2.4. Frameworks de Desarrollo Multiplataforma</h2>

<h3>📱 Análisis de Alternativas para la App Móvil</h3>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚖️</span>
        <span>Criterios de Evaluación</span>
    </div>
    <p>Evalúa cada framework según: rendimiento, curva de aprendizaje, ecosistema de librerías, soporte de la comunidad y capacidad de integración con hardware.</p>
</div>

<h3>Tabla Comparativa de Frameworks</h3>

<table class="my-6">
<thead>
<tr>
<th>Framework</th>
<th>Lenguaje</th>
<th>Rendimiento</th>
<th>Ecosistema</th>
<th>Curva</th>
<th>Elección</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Flutter</strong></td>
<td>Dart</td>
<td>⭐⭐⭐⭐⭐</td>
<td>⭐⭐⭐⭐</td>
<td>Media</td>
<td>✅ Recomendado</td>
</tr>
<tr>
<td><strong>React Native</strong></td>
<td>JavaScript</td>
<td>⭐⭐⭐⭐</td>
<td>⭐⭐⭐⭐⭐</td>
<td>Baja</td>
<td>⚠️ Alternativa</td>
</tr>
<tr>
<td><strong>Xamarin</strong></td>
<td>C#</td>
<td>⭐⭐⭐⭐</td>
<td>⭐⭐⭐</td>
<td>Media</td>
<td>❌</td>
</tr>
<tr>
<td><strong>Ionic</strong></td>
<td>Web</td>
<td>⭐⭐⭐</td>
<td>⭐⭐⭐⭐</td>
<td>Baja</td>
<td>❌</td>
</tr>
<tr>
<td><strong>Native (Swift/Kotlin)</strong></td>
<td>Nativo</td>
<td>⭐⭐⭐⭐⭐</td>
<td>⭐⭐⭐⭐⭐</td>
<td>Alta</td>
<td>❌ Duplica trabajo</td>
</tr>
</tbody>
</table>

<h3>🎯 Justificación de Flutter</h3>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✨</span>
        <span>Por qué Flutter para LogiScan Pro</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li><strong>Single Codebase:</strong> Un solo código para iOS y Android</li>
        <li><strong>Hot Reload:</strong> Desarrollo iterativo rápido</li>
        <li><strong>Widgets Material/Cupertino:</strong> UI nativa automática</li>
        <li><strong>ML Kit integrado:</strong> Librerías de escaneo oficiales</li>
        <li><strong>Rendimiento nativo:</strong> Compilación AOT (Ahead of Time)</li>
        <li><strong>Soporte offline:</strong> SQLite y almacenamiento local</li>
    </ul>
</div>

<hr class="my-8">

<h2>2.5. Sistemas de Notificación Push</h2>

<h3>🔔 Tecnologías Disponibles</h3>

<table class="my-6">
<thead>
<tr>
<th>Servicio</th>
<th>Plataforma</th>
<th>Precio</th>
<th>Fiabilidad</th>
<th>Integración</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Firebase Cloud Messaging</strong></td>
<td>iOS/Android</td>
<td>Gratis</td>
<td>99,9%</td>
<td>✅ Flutter nativo</td>
</tr>
<tr>
<td><strong>Apple Push Notification</strong></td>
<td>iOS</td>
<td>Gratis</td>
<td>99,9%</td>
<td>⚠️ Solo iOS</td>
</tr>
<tr>
<td><strong>OneSignal</strong></td>
<td>Multi</td>
<td>Freemium</td>
<td>99,5%</td>
<td>✅ SDK Flutter</td>
</tr>
<tr>
<td><strong>Pusher Beams</strong></td>
<td>Multi</td>
<td>Freemium</td>
<td>99,5%</td>
<td>✅ SDK Flutter</td>
</tr>
<tr>
<td><strong>AWS SNS</strong></td>
<td>Multi</td>
<td>Pay-per-use</td>
<td>99,9%</td>
<td>⚠️ Configuración compleja</td>
</tr>
</tbody>
</table>

<div class="callout callout-info">
    <div class="callout-title">
        <span>💡</span>
        <span>Recomendación</span>
    </div>
    <p><strong>Firebase Cloud Messaging (FCM)</strong> es la opción óptima: gratuito, fiable, con SDK oficial para Flutter y fácil integración con backend Node.js.</p>
</div>

<hr class="my-8">

<h2>2.6. Conclusiones del Estado del Arte</h2>

<h3>📋 Síntesis del Análisis</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">

<div class="callout callout-success">

<h4>✅ Tecnologías Seleccionadas</h4>
<table class="text-sm">
<thead>
<tr>
<th>Componente</th>
<th>Tecnología</th>
<th>Justificación</th>
</tr>
</thead>
<tbody>
<tr>
<td>ERP</td>
<td>Odoo v16</td>
<td>Open Source, API completa</td>
</tr>
<tr>
<td>Framework Móvil</td>
<td>Flutter 3.x</td>
<td>Multiplataforma, rendimiento</td>
</tr>
<tr>
<td>Escaneo</td>
<td>ML Kit</td>
<td>Gratuito, preciso, offline</td>
</tr>
<tr>
<td>Notificaciones</td>
<td>FCM</td>
<td>Gratis, fiable, integrado</td>
</tr>
<tr>
<td>Backend</td>
<td>Node.js + Express</td>
<td>Ligero, escalable</td>
</tr>
<tr>
<td>Base de Datos</td>
<td>PostgreSQL</td>
<td>Robusta, incluida en Odoo</td>
</tr>
</tbody>
</table>

</div>

<div class="callout callout-info">

<h4>🔬 Innovación del Proyecto</h4>
<p>LogiScan Pro aporta innovación al combinar:</p>
<ol class="list-decimal pl-6 space-y-2">
<li><strong>Integración nativa</strong> Odoo ↔ Flutter</li>
<li><strong>Escaneo sin hardware</strong> especializado</li>
<li><strong>Notificaciones en tiempo real</strong></li>
<li><strong>Funcionamiento offline</strong> sincronizado</li>
<li><strong>Código abierto</strong> modificable</li>
</ol>

</div>

</div>

<h3>📚 Fuentes Consultadas</h3>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📝</span>
        <span>Nota para el Alumno</span>
    </div>
    <p>Debes ampliar esta sección con al menos 10 fuentes adicionales entre documentación oficial, artículos técnicos y estudios de mercado. Incluye enlaces y fecha de consulta.</p>
</div>

<table class="my-6">
<thead>
<tr>
<th>Fuente</th>
<th>Tipo</th>
<th>URL</th>
<th>Fecha Consulta</th>
</tr>
</thead>
<tbody>
<tr>
<td>Odoo Documentation</td>
<td>Oficial</td>
<td>odoo.com/documentation</td>
<td>[Fecha]</td>
</tr>
<tr>
<td>Flutter Documentation</td>
<td>Oficial</td>
<td>flutter.dev/docs</td>
<td>[Fecha]</td>
</tr>
<tr>
<td>Firebase Documentation</td>
<td>Oficial</td>
<td>firebase.google.com/docs</td>
<td>[Fecha]</td>
</tr>
<tr>
<td>ML Kit Documentation</td>
<td>Oficial</td>
<td>developers.google.com/ml-kit</td>
<td>[Fecha]</td>
</tr>
<tr>
<td>Gartner WMS Report</td>
<td>Estudio</td>
<td>gartner.com</td>
<td>[Fecha]</td>
</tr>
</tbody>
</table>
`;
