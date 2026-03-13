window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['anexos'] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📎</span>
        <span>Anexos Técnicos</span>
    </div>
    <p>Documentación complementaria, código fuente adicional y materiales de soporte del proyecto.</p>
</div>

<h2>Anexo A: Código Fuente de Ejemplo</h2>

<h3>A.1: Estructura del Proyecto</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
logiscan-pro/
│
├── odoo-module/                    # Módulo personalizado de Odoo
│   ├── logiscan/
│   │   ├── models/                 # Modelos de datos
│   │   ├── controllers/            # Controladores API
│   │   ├── security/               # Permisos y accesos
│   │   ├── views/                  # Vistas XML
│   │   └── __manifest__.py
│
├── middleware/                     # Servidor Node.js
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.js
│   └── package.json
│
├── flutter-app/                    # Aplicación móvil
│   ├── lib/
│   │   ├── models/
│   │   ├── services/
│   │   ├── screens/
│   │   ├── widgets/
│   │   └── main.dart
│   └── pubspec.yaml
│
└── docs/                           # Documentación
    ├── api/
    ├── database/
    └── deployment/
</pre>
</div>

<h3>A.2: Modelo de Notificaciones Odoo (Ejemplo)</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
# logiscan/models/logiscan_notification.py

from odoo import models, fields, api

class LogiscanNotification(models.Model):
    _name = 'logiscan.notification'
    _description = 'Notificación LogiScan para operarios'
    
    picking_id = fields.Many2one('stock.picking', string='Albarán', required=True)
    user_id = fields.Many2one('res.users', string='Usuario', required=True)
    notification_type = fields.Selection([
        ('arrival', 'Llegada de Camión'),
        ('incident', 'Incidencia'),
        ('complete', 'Cierre de Albarán')
    ], string='Tipo', required=True)
    
    message = fields.Text(string='Mensaje')
    sent = fields.Boolean(string='Enviada', default=False)
    read = fields.Boolean(string='Leída', default=False)
    created_date = fields.Datetime(string='Fecha de Creación', default=fields.Datetime.now)
</pre>
</div>

<h3>A.3: Servicio Flutter de Escaneo (Ejemplo)</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
// lib/services/scan_service.dart

import 'package:google_mlkit_barcode_scanning/google_mlkit_barcode_scanning.dart';

class ScanService {
  final BarcodeScanner _scanner = BarcodeScanner();
  
  Future&lt;String&gt; scanBarcode(InputImage image) async {
    try {
      final List&lt;Barcode&gt; barcodes = await _scanner.processImage(image);
      if (barcodes.isNotEmpty) {
        return barcodes.first.rawValue ?? '';
      }
      return '';
    } catch (e) {
      throw Exception('Error scanning: $e');
    }
  }
  
  Future&lt;bool&gt; validatePackage(String code, int pickingId) async {
    // TODO: Implement validation logic
    return true;
  }
}
</pre>
</div>

<hr class="my-8">

<h2>Anexo B: Diagramas</h2>

<h3>B.1: Arquitectura del Sistema</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
┌─────────────────────────────────────────────────────────────────┐
│                    ARQUITECTURA LOGISCAN PRO                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐         ┌──────────────┐         ┌──────────┐ │
│  │   Odoo ERP   │◄───────►│   Middleware │◄───────►│ Firebase │ │
│  │   (Backend)  │  REST   │   Node.js    │  FCM     │  Cloud   │ │
│  └──────────────┘         └──────────────┘         └──────────┘ │
│         │                        │                        │      │
│         ▼                        ▼                        ▼      │
│  ┌──────────────┐         ┌──────────────┐         ┌──────────┐ │
│  │  PostgreSQL  │         │    Redis     │         │ Operarios│ │
│  └──────────────┘         └──────────────┘         │ (Flutter)│ │
│                                                    └──────────┘ │
└─────────────────────────────────────────────────────────────────┘
</pre>
</div>

<h3>B.2: Flujo de Recepción de Mercancías</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
┌─────────────────────────────────────────────────────────────┐
│              FLUJO DE RECEPCIÓN OPTIMIZADO                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1️⃣  Llega el camión al muelle de descarga                   │
│      ↓                                                       │
│  2️⃣  El administrativo marca "Llegada" en Odoo              │
│      ↓                                                       │
│  3️⃣   NOTIFICACIÓN PUSH automática a todos los operarios   │
│      ↓                                                       │
│  4️⃣  Operarios abren LogiScan Pro y ven el albarán          │
│      ↓                                                       │
│  5️⃣  Escanean QR/código de barras de cada paquete           │
│      ↓                                                       │
│  6️⃣  ✅ Odoo actualiza estado en TIEMPO REAL               │
│      ↓                                                       │
│  7️⃣  Al finalizar: informe automático de incidencias        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
</pre>
</div>

<hr class="my-8">

<h2>Anexo C: Manuales</h2>

<h3>C.1: Guía Rápida para Operarios</h3>

<div class="callout callout-success">

<h4>Primer Uso</h4>
<ol class="list-decimal pl-6 space-y-2">
<li><strong>Descargar la aplicación:</strong> Google Play Store o App Store → Buscar "LogiScan Pro"</li>
<li><strong>Iniciar sesión:</strong> Usuario y contraseña de Odoo</li>
<li><strong>Configurar notificaciones:</strong> Aceptar permisos de notificación</li>
</ol>

<h4>Flujo de Trabajo Diario</h4>
<ol class="list-decimal pl-6 space-y-2">
<li>📱 Recibes notificación: "Nuevo camión en muelle"</li>
<li>🏠 Abres la app y ves el albarán en "Pendientes"</li>
<li>📷 Pulsas el albarán y se abre el escáner</li>
<li>🔦 Apuntas a cada paquete y escaneas el código</li>
<li>✅ La app confirma con verde (correcto) o rojo (error)</li>
<li>🏁 Cuando terminas, pulsas "Finalizar"</li>
<li>📊 Ves el resumen: X correctos, Y incorrectos</li>
</ol>

</div>

<h3>C.2: Resolución de Problemas Comunes</h3>

<table class="my-6">
<thead>
<tr>
<th>Problema</th>
<th>Solución</th>
</tr>
</thead>
<tbody>
<tr>
<td>La cámara no enfoca</td>
<td>Limpiar lente, activar flash</td>
</tr>
<tr>
<td>Código no se lee</td>
<td>Acercar/alejar, probar otro ángulo</td>
</tr>
<tr>
<td>Sin conexión WiFi</td>
<td>Seguir escaneando, se sincroniza después</td>
</tr>
<tr>
<td>Notificación no llega</td>
<td>Verificar volumen, reiniciar app</td>
</tr>
<tr>
<td>App se cierra</td>
<td>Forzar cierre, volver a abrir</td>
</tr>
</tbody>
</table>

<hr class="my-8">

<h2>Anexo D: Glosario</h2>

<table class="my-6">
<thead>
<tr>
<th>Término</th>
<th>Definición</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>API REST</strong></td>
<td>Interfaz de programación de aplicaciones que usa HTTP</td>
</tr>
<tr>
<td><strong>FCM</strong></td>
<td>Firebase Cloud Messaging - servicio de notificaciones push</td>
</tr>
<tr>
<td><strong>JWT</strong></td>
<td>JSON Web Token - estándar para autenticación</td>
</tr>
<tr>
<td><strong>ML Kit</strong></td>
<td>Google Machine Learning Kit - librerías de ML</td>
</tr>
<tr>
<td><strong>Odoo</strong></td>
<td>Sistema ERP de código abierto</td>
</tr>
<tr>
<td><strong>ORM</strong></td>
<td>Object-Relational Mapping - mapeo objeto-relacional</td>
</tr>
<tr>
<td><strong>QR</strong></td>
<td>Quick Response - código bidimensional</td>
</tr>
<tr>
<td><strong>WMS</strong></td>
<td>Warehouse Management System - sistema de gestión de almacenes</td>
</tr>
<tr>
<td><strong>Albarán</strong></td>
<td>Documento de entrega de mercancía</td>
</tr>
<tr>
<td><strong>Picking</strong></td>
<td>Preparación de pedidos</td>
</tr>
<tr>
<td><strong>SKU</strong></td>
<td>Stock Keeping Unit - referencia de producto</td>
</tr>
<tr>
<td><strong>Trazabilidad</strong></td>
<td>Capacidad de seguir el historial de un producto</td>
</tr>
</tbody>
</table>

<hr class="my-8">

<h2>Anexo E: Imágenes del Proyecto</h2>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📸</span>
        <span>Galería de Capturas</span>
    </div>
    <p>Las capturas de pantalla de la aplicación se encuentran en la carpeta <code>images/</code>.</p>
</div>

<table class="my-6">
<thead>
<tr>
<th>Imagen</th>
<th>Descripción</th>
<th>Ruta</th>
</tr>
</thead>
<tbody>
<tr>
<td>Hero del proyecto</td>
<td>Almacén logístico</td>
<td>./images/hero-logistica.jpg</td>
</tr>
<tr>
<td>Login</td>
<td>Pantalla de inicio de sesión</td>
<td>./images/login.png</td>
</tr>
<tr>
<td>Home</td>
<td>Lista de albaranes</td>
<td>./images/home.png</td>
</tr>
<tr>
<td>Scanner</td>
<td>Pantalla de escáner</td>
<td>./images/scanner.png</td>
</tr>
<tr>
<td>Resumen</td>
<td>Resumen final</td>
<td>./images/summary.png</td>
</tr>
<tr>
<td>Odoo</td>
<td>Vista de albarán en Odoo</td>
<td>./images/odoo-picking.png</td>
</tr>
<tr>
<td>Dashboard</td>
<td>Panel de control</td>
<td>./images/dashboard.png</td>
</tr>
</tbody>
</table>
`;
