window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['implementacion'] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>💻</span>
        <span>Implementación</span>
    </div>
    <p>Guía detallada para el desarrollo de cada componente del sistema, con ejemplos de código y buenas prácticas.</p>
</div>

<h2>6.1. Configuración del Entorno de Desarrollo</h2>

<h3>🛠️ Herramientas Necesarias</h3>

<table class="my-6">
<thead>
<tr>
<th>Herramienta</th>
<th>Versión</th>
<th>URL</th>
<th>Uso</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Python</strong></td>
<td>3.10+</td>
<td>python.org</td>
<td>Desarrollo módulo Odoo</td>
</tr>
<tr>
<td><strong>Node.js</strong></td>
<td>18+</td>
<td>nodejs.org</td>
<td>Middleware API</td>
</tr>
<tr>
<td><strong>Flutter SDK</strong></td>
<td>3.x</td>
<td>flutter.dev</td>
<td>App móvil</td>
</tr>
<tr>
<td><strong>PostgreSQL</strong></td>
<td>14+</td>
<td>postgresql.org</td>
<td>Base de datos Odoo</td>
</tr>
<tr>
<td><strong>Odoo</strong></td>
<td>16.x</td>
<td>odoo.com</td>
<td>ERP base</td>
</tr>
<tr>
<td><strong>VS Code</strong></td>
<td>Latest</td>
<td>code.visualstudio.com</td>
<td>IDE principal</td>
</tr>
</tbody>
</table>

<h3>📝 Comandos de Inicialización</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
# 1. Clonar repositorio del proyecto
git clone https://github.com/tu-usuario/logiscan-pro.git
cd logiscan-pro

# 2. Configurar entorno virtual Python para Odoo
python -m venv venv-odoo
source venv-odoo/bin/activate  # Linux/Mac

# 3. Instalar dependencias de Node.js
cd middleware
npm install

# 4. Configurar Flutter
cd ../flutter-app
flutter doctor
flutter pub get

# 5. Verificar instalación
flutter --version
node --version
python --version
</pre>
</div>

<hr class="my-8">

<h2>6.2. Desarrollo del Módulo Odoo</h2>

<h3>📦 Estructura del Módulo</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
logiscan/
├── __init__.py
├── __manifest__.py
├── models/
│   ├── __init__.py
│   ├── logiscan_notification.py
│   └── logiscan_scan_log.py
├── controllers/
│   ├── __init__.py
│   └── main.py
├── security/
│   └── ir.model.access.csv
├── views/
│   └── notification_views.xml
└── static/
    └── description/
        └── icon.png
</pre>
</div>

<h3>📄 Archivo __manifest__.py</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
{
    'name': 'LogiScan Pro',
    'version': '16.0.1.0.0',
    'category': 'Warehouse',
    'summary': 'Integración con app móvil para escaneo de paquetes',
    'author': 'IES Serra Perenxisa',
    'website': 'https://iesserraperenxisa.es',
    'license': 'LGPL-3',
    'depends': ['base', 'stock', 'web'],
    'data': [
        'security/ir.model.access.csv',
        'views/notification_views.xml',
    ],
    'installable': True,
    'application': False,
}
</pre>
</div>

<h3>📝 Modelo de Notificaciones</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
from odoo import models, fields, api

class LogiscanNotification(models.Model):
    _name = 'logiscan.notification'
    _description = 'Notificación LogiScan'
    
    picking_id = fields.Many2one('stock.picking', required=True)
    user_id = fields.Many2one('res.users', required=True)
    notification_type = fields.Selection([
        ('arrival', 'Llegada'),
        ('incident', 'Incidencia'),
        ('complete', 'Cierre')
    ], required=True)
    message = fields.Text()
    sent = fields.Boolean(default=False)
    read = fields.Boolean(default=False)
    created_date = fields.Datetime(default=fields.Datetime.now)
</pre>
</div>

<hr class="my-8">

<h2>6.3. Desarrollo del Middleware Node.js</h2>

<h3>📦 package.json</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
{
  "name": "logiscan-middleware",
  "version": "1.0.0",
  "main": "src/app.js",
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "xmlrpc": "^1.3.2",
    "firebase-admin": "^11.5.0",
    "jsonwebtoken": "^9.0.0"
  }
}
</pre>
</div>

<h3>🌐 app.js - Servidor Principal</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const pickingRoutes = require('./routes/picking.routes');
const scanRoutes = require('./routes/scan.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/picking', pickingRoutes);
app.use('/api/scan', scanRoutes);

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.listen(PORT, () => {
    console.log(`🚀 LogiScan Middleware en puerto ${PORT}`);
});
</pre>
</div>

<h3>🔔 Servicio FCM</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY
    })
});

async function sendNotification(token, title, body, data) {
    const message = {
        notification: { title, body },
        data,
        token
    };
    return await admin.messaging().send(message);
}
</pre>
</div>

<hr class="my-8">

<h2>6.4. Desarrollo de la App Flutter</h2>

<h3>📦 pubspec.yaml (dependencias)</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
dependencies:
  flutter:
    sdk: flutter
  dio: ^5.3.0
  sqflite: ^2.2.8+4
  google_mlkit_barcode_scanning: ^0.10.0
  firebase_core: ^2.15.1
  firebase_messaging: ^14.6.7
  provider: ^6.0.5
  shared_preferences: ^2.2.0
</pre>
</div>

<h3>📱 main.dart</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'screens/login_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(const LogiScanApp());
}

class LogiScanApp extends StatelessWidget {
  const LogiScanApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'LogiScan Pro',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF2563EB),
        ),
        useMaterial3: true,
      ),
      home: const LoginScreen(),
    );
  }
}
</pre>
</div>

<h3>📷 Escáner de Códigos</h3>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
import 'package:google_mlkit_barcode_scanning/google_mlkit_barcode_scanning.dart';

class ScanService {
  final BarcodeScanner _scanner = BarcodeScanner();
  
  Future&lt;String&gt; scan(InputImage image) async {
    final barcodes = await _scanner.processImage(image);
    if (barcodes.isNotEmpty) {
      return barcodes.first.rawValue ?? '';
    }
    return '';
  }
}
</pre>
</div>

<hr class="my-8">

<h2>6.5. Testing y Validación</h2>

<h3>🧪 Plan de Tests</h3>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">

<div class="callout callout-info">

<h4>Tests Unitarios</h4>
<ul class="list-disc pl-6 space-y-1">
<li>Servicios Flutter</li>
<li>Controladores Node.js</li>
<li>Modelos Odoo</li>
</ul>
<p class="text-sm mt-2"><strong>Herramientas:</strong> Jest, unittest</p>

</div>

<div class="callout callout-info">

<h4>Tests de Integración</h4>
<ul class="list-disc pl-6 space-y-1">
<li>API REST completa</li>
<li>Sincronización offline</li>
<li>Notificaciones FCM</li>
</ul>
<p class="text-sm mt-2"><strong>Herramientas:</strong> Postman, Supertest</p>

</div>

<div class="callout callout-info">

<h4>Tests de Aceptación</h4>
<ul class="list-disc pl-6 space-y-1">
<li>Flujo completo de escaneo</li>
<li>Usabilidad con operarios</li>
<li>Rendimiento en producción</li>
</ul>
<p class="text-sm mt-2"><strong>Herramientas:</strong> Manual</p>

</div>

</div>

<h3>✅ Criterios de Aceptación</h3>

<table class="my-6">
<thead>
<tr>
<th>Requisito</th>
<th>Test</th>
<th>Resultado Esperado</th>
</tr>
</thead>
<tbody>
<tr>
<td>RF-001</td>
<td>Enviar notificación y medir tiempo</td>
<td>&lt; 10 segundos</td>
</tr>
<tr>
<td>RF-003</td>
<td>Escanear 50 QR consecutivos</td>
<td>100% detectados</td>
</tr>
<tr>
<td>RF-007</td>
<td>Trabajar sin WiFi y sincronizar</td>
<td>Datos conservados</td>
</tr>
<tr>
<td>RNF-001</td>
<td>Medir tiempo de respuesta</td>
<td>&lt; 2 segundos</td>
</tr>
<tr>
<td>RNF-005</td>
<td>Usuario nuevo sin formación</td>
<td>90% éxito</td>
</tr>
</tbody>
</table>
`;
