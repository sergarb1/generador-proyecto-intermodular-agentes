window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['diseno'] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🎨</span>
        <span>Diseño del Sistema</span>
    </div>
    <p>Define la arquitectura técnica, los componentes del sistema y las interfaces que guiarán la implementación.</p>
</div>

<h2>5.1. Arquitectura del Sistema</h2>

<h3>🏗️ Visión General</h3>

<div class="callout callout-info">
    <div class="callout-title">
        <span>🏛️</span>
        <span>Patrón Arquitectónico</span>
    </div>
    <p>El sistema sigue una arquitectura <strong>cliente-servidor con sincronización offline</strong>, donde la app móvil puede funcionar autónomamente y sincronizar cuando hay conectividad.</p>
</div>

<h3>Diagrama de Arquitectura</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
┌─────────────────────────────────────────────────────────────────────────┐
│                         ARQUITECTURA LOGISCAN PRO                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌──────────────┐         ┌──────────────┐         ┌──────────────┐     │
│  │   Odoo ERP   │◄───────►│   Middleware │◄───────►│  Firebase    │     │
│  │   (Backend)  │  REST   │   Node.js    │  FCM     │    Cloud     │     │
│  │              │  API    │   + Express  │          │  Messaging   │     │
│  └─────────────┘         ──────┬───────┘         └─────────────┘     │
│         │                        │                        │             │
│         ▼                        ▼                        ▼             │
│  ┌──────────────┐         ┌──────────────┐         ┌──────────────┐     │
│  │  PostgreSQL  │         │    Redis     │         │  Operarios   │     │
│  │   Database   │         │    Queue     │         │  (Disposit.) │     │
│  └──────────────┘         └──────────────┘         └──────────────┘     │
│                                                                          │
│         ▲                                                  │             │
│         │                                                  │             │
│         └─────────────────── Flutter App ◄─────────────────┘             │
│                     (SQLite Local + ML Kit)                              │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
</pre>
</div>

<h3>📋 Capas del Sistema</h3>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">

<div class="callout callout-info">

<h4>🖥️ Capa de Datos</h4>
<p><strong>Odoo + PostgreSQL</strong></p>
<ul class="list-disc pl-6 space-y-1">
<li>Albaranes y pedidos</li>
<li>Usuarios y permisos</li>
<li>Histórico de operaciones</li>
<li>Configuración de empresa</li>
</ul>

</div>

<div class="callout callout-info">

<h4>⚙️ Capa de Servicio</h4>
<p><strong>Node.js + Redis</strong></p>
<ul class="list-disc pl-6 space-y-1">
<li>API REST intermedia</li>
<li>Cola de notificaciones</li>
<li>Gestión de sesiones</li>
<li>Sincronización offline</li>
</ul>

</div>

<div class="callout callout-info">

<h4>📱 Capa de Presentación</h4>
<p><strong>Flutter App</strong></p>
<ul class="list-disc pl-6 space-y-1">
<li>Interfaz de operario</li>
<li>Escáner ML Kit</li>
<li>Base de datos SQLite</li>
<li>Notificaciones FCM</li>
</ul>

</div>

</div>

<hr class="my-8">

<h2>5.2. Diseño de la Base de Datos</h2>

<h3>📊 Modelo de Datos Odoo</h3>

<h4>Tablas Principales (existentes en Odoo)</h4>

<table class="my-6">
<thead>
<tr>
<th>Tabla</th>
<th>Descripción</th>
<th>Campos Principales</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>stock.picking</strong></td>
<td>Albaranes de entrada/salida</td>
<td>id, name, partner_id, scheduled_date, state</td>
</tr>
<tr>
<td><strong>stock.move</strong></td>
<td>Movimientos de stock</td>
<td>id, picking_id, product_id, product_qty, state</td>
</tr>
<tr>
<td><strong>stock.move.line</strong></td>
<td>Líneas de movimiento</td>
<td>id, move_id, lot_id, qty_done, package_id</td>
</tr>
<tr>
<td><strong>res.users</strong></td>
<td>Usuarios del sistema</td>
<td>id, name, login, email, groups_id</td>
</tr>
<tr>
<td><strong>res.partner</strong></td>
<td>Empresas/contactos</td>
<td>id, name, vat, street, city, country_id</td>
</tr>
</tbody>
</table>

<h4>Tablas Personalizadas (a crear)</h4>

<h5>logiscan.notification</h5>

<table class="my-6">
<thead>
<tr>
<th>Campo</th>
<th>Tipo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>Integer</td>
<td>Clave primaria</td>
</tr>
<tr>
<td>picking_id</td>
<td>Many2one</td>
<td>Referencia al albarán</td>
</tr>
<tr>
<td>user_id</td>
<td>Many2one</td>
<td>Usuario notificado</td>
</tr>
<tr>
<td>notification_type</td>
<td>Char</td>
<td>Tipo: 'llegada', 'incidencia', 'cierre'</td>
</tr>
<tr>
<td>message</td>
<td>Text</td>
<td>Contenido de la notificación</td>
</tr>
<tr>
<td>sent</td>
<td>Boolean</td>
<td>Enviada a FCM</td>
</tr>
<tr>
<td>created_date</td>
<td>Datetime</td>
<td>Fecha de creación</td>
</tr>
</tbody>
</table>

<h5>logiscan.scan.log</h5>

<table class="my-6">
<thead>
<tr>
<th>Campo</th>
<th>Tipo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>Integer</td>
<td>Clave primaria</td>
</tr>
<tr>
<td>picking_id</td>
<td>Many2one</td>
<td>Albarán asociado</td>
</tr>
<tr>
<td>user_id</td>
<td>Many2one</td>
<td>Operario que escaneó</td>
</tr>
<tr>
<td>product_code</td>
<td>Char</td>
<td>Código escaneado</td>
</tr>
<tr>
<td>scan_type</td>
<td>Char</td>
<td>'qr' o 'barcode'</td>
</tr>
<tr>
<td>valid</td>
<td>Boolean</td>
<td>Pertenece al albarán</td>
</tr>
<tr>
<td>scan_date</td>
<td>Datetime</td>
<td>Fecha del escaneo</td>
</tr>
<tr>
<td>device_id</td>
<td>Char</td>
<td>Identificador del dispositivo</td>
</tr>
</tbody>
</table>

<hr class="my-8">

<h2>5.3. Diseño de la API REST</h2>

<h3>🔌 Endpoints del Middleware</h3>

<h4>Autenticación</h4>

<table class="my-6">
<thead>
<tr>
<th>Método</th>
<th>Endpoint</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>POST</td>
<td>/api/auth/login</td>
<td>Autenticar usuario y obtener token</td>
</tr>
<tr>
<td>POST</td>
<td>/api/auth/refresh</td>
<td>Renovar token expirado</td>
</tr>
<tr>
<td>POST</td>
<td>/api/auth/logout</td>
<td>Invalidar token actual</td>
</tr>
</tbody>
</table>

<h4>Albaranes</h4>

<table class="my-6">
<thead>
<tr>
<th>Método</th>
<th>Endpoint</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>/api/picking/pending</td>
<td>Obtener albaranes pendientes</td>
</tr>
<tr>
<td>GET</td>
<td>/api/picking/:id</td>
<td>Obtener detalle de albarán</td>
</tr>
<tr>
<td>GET</td>
<td>/api/picking/:id/packages</td>
<td>Listar paquetes del albarán</td>
</tr>
<tr>
<td>PUT</td>
<td>/api/picking/:id/complete</td>
<td>Marcar albarán como completado</td>
</tr>
</tbody>
</table>

<h4>Escaneos</h4>

<table class="my-6">
<thead>
<tr>
<th>Método</th>
<th>Endpoint</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>POST</td>
<td>/api/scan</td>
<td>Registrar nuevo escaneo</td>
</tr>
<tr>
<td>GET</td>
<td>/api/scan/history</td>
<td>Histórico de escaneos del usuario</td>
</tr>
<tr>
<td>POST</td>
<td>/api/scan/sync</td>
<td>Sincronizar escaneos offline</td>
</tr>
</tbody>
</table>

<h4>Notificaciones</h4>

<table class="my-6">
<thead>
<tr>
<th>Método</th>
<th>Endpoint</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>POST</td>
<td>/api/notification/register</td>
<td>Registrar token FCM del dispositivo</td>
</tr>
<tr>
<td>GET</td>
<td>/api/notification/pending</td>
<td>Notificaciones pendientes</td>
</tr>
<tr>
<td>PUT</td>
<td>/api/notification/:id/read</td>
<td>Marcar como leída</td>
</tr>
</tbody>
</table>

<hr class="my-8">

<h2>5.4. Diseño de la Interfaz Móvil</h2>

<h3>📱 Pantallas Principales</h3>

<h4>1. Login</h4>
<ul class="list-disc pl-6 space-y-1">
<li>Logo de la aplicación</li>
<li>Campo de usuario</li>
<li>Campo de contraseña</li>
<li>Botón "Iniciar Sesión"</li>
</ul>

<h4>2. Lista de Albaranes</h4>
<ul class="list-disc pl-6 space-y-1">
<li>Barra superior con notificaciones y perfil</li>
<li>Tarjetas de albaranes con estado</li>
<li>Barra de progreso de escaneos</li>
<li>Indicador de paquetes escaneados/esperados</li>
</ul>

<h4>3. Escáner</h4>
<ul class="list-disc pl-6 space-y-1">
<li>Vista de cámara con marco de escaneo</li>
<li>Botón de flash</li>
<li>Contador de escaneos correctos/incorrectos</li>
<li>Último código escaneado</li>
<li>Botón "Finalizar"</li>
</ul>

<h4>4. Resumen Final</h4>
<ul class="list-disc pl-6 space-y-1">
<li>Icono de éxito/error</li>
<li>Información del albarán</li>
<li>Estadísticas (correctos, incorrectos, faltantes)</li>
<li>Botón para ver informe completo</li>
<li>Botones "Enviar" e "Inicio"</li>
</ul>

<h3>🎨 Guía de Estilo</h3>

<table class="my-6">
<thead>
<tr>
<th>Elemento</th>
<th>Especificación</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Colores Primarios</strong></td>
<td>Azul #2563eb, Blanco #ffffff</td>
</tr>
<tr>
<td><strong>Colores Secundarios</strong></td>
<td>Verde #10b981 (éxito), Rojo #ef4444 (error)</td>
</tr>
<tr>
<td><strong>Tipografía</strong></td>
<td>Plus Jakarta Sans</td>
</tr>
<tr>
<td><strong>Iconos</strong></td>
<td>Material Icons de Google</td>
</tr>
<tr>
<td><strong>Bordes</strong></td>
<td>Radius 12px para tarjetas</td>
</tr>
<tr>
<td><strong>Sombras</strong></td>
<td>Sutil, elevation 2-4</td>
</tr>
</tbody>
</table>

<hr class="my-8">

<h2>5.5. Estructura de Directorios</h2>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
logiscan-pro/
│
├── odoo-module/logiscan/
│   ├── models/
│   │   ├── __init__.py
│   │   ├── logiscan_notification.py
│   │   └── logiscan_scan_log.py
│   ├── controllers/
│   │   ├── __init__.py
│   │   └── main.py
│   ├── security/
│   │   └── ir.model.access.csv
│   ├── views/
│   │   └── notification_views.xml
│   ├── __init__.py
│   └── __manifest__.py
│
├── middleware/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   ├── picking.controller.js
│   │   │   └── scan.controller.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   └── validation.js
│   │   ├── routes/
│   │   │   └── index.js
│   │   ├── services/
│   │   │   ├── fcm.service.js
│   │   │   └── odoo.service.js
│   │   └── app.js
│   ├── tests/
│   ├── .env
│   └── package.json
│
└── flutter-app/
    ├── lib/
    │   ├── models/
    │   │   ├── picking.dart
    │   │   ├── package.dart
    │   │   └── user.dart
    │   ├── services/
    │   │   ├── api.service.dart
    │   │   ├── scan.service.dart
    │   │   ├── sync.service.dart
    │   │   └── auth.service.dart
    │   ├── screens/
    │   │   ├── login_screen.dart
    │   │   ├── home_screen.dart
    │   │   ├── scanner_screen.dart
    │   │   └── summary_screen.dart
    │   ├── widgets/
    │   │   ├── picking_card.dart
    │   │   └── scan_result.dart
    │   ├── utils/
    │   │   └── constants.dart
    │   └── main.dart
    ├── test/
    ├── pubspec.yaml
    └── README.md
</pre>
</div>

<hr class="my-8">

<h2>5.6. Consideraciones de Seguridad</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">

<div class="callout callout-success">

<h4>✅ Implementadas</h4>
<ol class="list-decimal pl-6 space-y-2">
<li><strong>HTTPS/TLS 1.3</strong> en todas las comunicaciones</li>
<li><strong>JWT</strong> para autenticación de API</li>
<li><strong>Hash bcrypt</strong> para contraseñas</li>
<li><strong>SQL parametrizado</strong> contra inyección</li>
<li><strong>Rate limiting</strong> en endpoints</li>
</ol>

</div>

<div class="callout callout-warning">

<h4>⚠️ A Considerar</h4>
<ol class="list-decimal pl-6 space-y-2">
<li><strong>Certificate Pinning</strong> en app móvil</li>
<li><strong>Biometría</strong> para login rápido</li>
<li><strong>MDM</strong> para gestión de dispositivos</li>
<li><strong>Auditoría</strong> de accesos y operaciones</li>
<li><strong>RGPD</strong> para datos personales</li>
</ol>

</div>

</div>
`;
