window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['herramientas'] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🛠️</span>
        <span>Herramientas de Apoyo</span>
    </div>
    <p>Recursos, documentación y herramientas utilizadas durante el desarrollo del proyecto.</p>
</div>

<h2>8.1. Herramientas de Desarrollo</h2>

<h3>💻 Entorno de Desarrollo Integrado (IDE)</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">

<div class="callout callout-info">

<h4>Visual Studio Code</h4>
<p><strong>Extensiones recomendadas:</strong></p>
<ul class="list-disc pl-6 space-y-1">
<li>Python (Microsoft)</li>
<li>Dart (Dart Code)</li>
<li>Flutter (Dart Code)</li>
<li>ESLint</li>
<li>Prettier</li>
<li>GitLens</li>
<li>REST Client</li>
<li>Docker</li>
<li>PostgreSQL Explorer</li>
</ul>

</div>

<div class="callout callout-info">

<h4>Android Studio</h4>
<p><strong>Para desarrollo Flutter:</strong></p>
<ul class="list-disc pl-6 space-y-1">
<li>Flutter Plugin</li>
<li>Dart Plugin</li>
<li>Android Emulator</li>
<li>Device Mirror</li>
<li>Firebase Test Lab</li>
</ul>

</div>

</div>

<h3>🔧 Herramientas de Línea de Comandos</h3>

<table class="my-6">
<thead>
<tr>
<th>Herramienta</th>
<th>Comando</th>
<th>Uso</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Git</strong></td>
<td><code class="text-sm">git status</code></td>
<td>Control de versiones</td>
</tr>
<tr>
<td><strong>Flutter</strong></td>
<td><code class="text-sm">flutter doctor</code></td>
<td>Diagnóstico del entorno</td>
</tr>
<tr>
<td><strong>NPM</strong></td>
<td><code class="text-sm">npm install</code></td>
<td>Gestión de paquetes Node.js</td>
</tr>
<tr>
<td><strong>PIP</strong></td>
<td><code class="text-sm">pip install</code></td>
<td>Gestión de paquetes Python</td>
</tr>
<tr>
<td><strong>PostgreSQL</strong></td>
<td><code class="text-sm">psql</code></td>
<td>Cliente de base de datos</td>
</tr>
<tr>
<td><strong>cURL</strong></td>
<td><code class="text-sm">curl -X GET</code></td>
<td>Testing de APIs</td>
</tr>
<tr>
<td><strong>Docker</strong></td>
<td><code class="text-sm">docker run</code></td>
<td>Contenedores (opcional)</td>
</tr>
</tbody>
</table>

<hr class="my-8">

<h2>8.2. Herramientas de Diseño y Documentación</h2>

<h3>🎨 Diseño de Interfaces</h3>

<table class="my-6">
<thead>
<tr>
<th>Herramienta</th>
<th>URL</th>
<th>Uso</th>
<th>Precio</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Figma</strong></td>
<td>figma.com</td>
<td>Diseño de interfaces</td>
<td>Gratis (plan básico)</td>
</tr>
<tr>
<td><strong>Draw.io</strong></td>
<td>draw.io</td>
<td>Diagramas UML, flujo</td>
<td>Gratis</td>
</tr>
<tr>
<td><strong>Excalidraw</strong></td>
<td>excalidraw.com</td>
<td>Wireframes a mano alzada</td>
<td>Gratis</td>
</tr>
<tr>
<td><strong>Canva</strong></td>
<td>canva.com</td>
<td>Gráficos para documentación</td>
<td>Gratis</td>
</tr>
</tbody>
</table>

<h3>📐 Diagramas y Modelado</h3>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📊</span>
        <span>Tipos de Diagramas Necesarios</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li><strong>Diagrama de Casos de Uso:</strong> Actores y funcionalidades</li>
        <li><strong>Diagrama de Clases:</strong> Estructura de datos</li>
        <li><strong>Diagrama de Secuencia:</strong> Interacciones entre componentes</li>
        <li><strong>Diagrama de Actividad:</strong> Flujos de trabajo</li>
        <li><strong>Diagrama de Despliegue:</strong> Infraestructura física</li>
    </ul>
</div>

<h3>📝 Documentación Técnica</h3>

<table class="my-6">
<thead>
<tr>
<th>Herramienta</th>
<th>Uso</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Markdown</strong></td>
<td>Documentación en repositorio</td>
</tr>
<tr>
<td><strong>Notion</strong></td>
<td>Gestión de conocimiento del proyecto</td>
</tr>
<tr>
<td><strong>Obsidian</strong></td>
<td>Notas interconectadas</td>
</tr>
<tr>
<td><strong>Google Docs</strong></td>
<td>Documentación colaborativa</td>
</tr>
</tbody>
</table>

<hr class="my-8">

<h2>8.3. Herramientas de Testing</h2>

<h3>🧪 Testing de APIs</h3>

<div class="callout callout-success">

<h4>Postman</h4>
<p><strong>Características principales:</strong></p>
<ul class="list-disc pl-6 space-y-2">
<li>Colecciones de requests organizadas</li>
<li>Variables de entorno (dev/prod)</li>
<li>Tests automatizados con JavaScript</li>
<li>Documentación automática</li>
<li>Mock servers</li>
</ul>
<p><strong>Descarga:</strong> postman.com/downloads</p>

</div>

<h3>🧪 Testing de Aplicaciones Móviles</h3>

<table class="my-6">
<thead>
<tr>
<th>Herramienta</th>
<th>Plataforma</th>
<th>Uso</th>
<th>Precio</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Flutter Test</strong></td>
<td>Multi</td>
<td>Tests unitarios Flutter</td>
<td>Gratis</td>
</tr>
<tr>
<td><strong>Firebase Test Lab</strong></td>
<td>Android/iOS</td>
<td>Tests en dispositivos reales</td>
<td>Gratis (límites)</td>
</tr>
<tr>
<td><strong>Appetize.io</strong></td>
<td>Web</td>
<td>Emulador en navegador</td>
<td>Freemium</td>
</tr>
<tr>
<td><strong>BrowserStack</strong></td>
<td>Web</td>
<td>Testing en dispositivos reales</td>
<td>Pago</td>
</tr>
</tbody>
</table>

<hr class="my-8">

<h2>8.4. Control de Versiones</h2>

<h3>📊 Git y GitHub</h3>

<div class="callout callout-info my-6">
<pre class="text-sm overflow-x-auto">
main (producción)
  │
  ├── develop (integración)
  │     │
  │     ├── feature/odoo-module
  │     ├── feature/flutter-app
  │     ├── feature/middleware
  │     └── feature/documentation
  │
  └── hotfix/ (correcciones urgentes)
</pre>
</div>

<h3>Comandos Git Esenciales</h3>

<div class="callout callout-info my-6">
<pre class="text-sm overflow-x-auto">
# Configurar usuario
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Iniciar repositorio
git init

# Clonar repositorio existente
git clone https://github.com/usuario/logiscan-pro.git

# Crear rama nueva
git checkout -b feature/nueva-funcionalidad

# Añadir cambios
git add .

# Hacer commit
git commit -m "feat: añadir escaneo de códigos QR"

# Subir cambios
git push origin feature/nueva-funcionalidad
</pre>
</div>

<h3>📝 Convención de Commits</h3>

<table class="my-6">
<thead>
<tr>
<th>Tipo</th>
<th>Descripción</th>
<th>Ejemplo</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="text-sm">feat</code></td>
<td>Nueva funcionalidad</td>
<td><code class="text-sm">feat: añadir notificaciones push</code></td>
</tr>
<tr>
<td><code class="text-sm">fix</code></td>
<td>Corrección de bug</td>
<td><code class="text-sm">fix: corregir validación de QR</code></td>
</tr>
<tr>
<td><code class="text-sm">docs</code></td>
<td>Documentación</td>
<td><code class="text-sm">docs: actualizar README</code></td>
</tr>
<tr>
<td><code class="text-sm">style</code></td>
<td>Formato/código</td>
<td><code class="text-sm">style: formatear con prettier</code></td>
</tr>
<tr>
<td><code class="text-sm">refactor</code></td>
<td>Refactorización</td>
<td><code class="text-sm">refactor: simplificar servicio de auth</code></td>
</tr>
<tr>
<td><code class="text-sm">test</code></td>
<td>Tests</td>
<td><code class="text-sm">test: añadir tests de escaneo</code></td>
</tr>
<tr>
<td><code class="text-sm">chore</code></td>
<td>Tareas de mantenimiento</td>
<td><code class="text-sm">chore: actualizar dependencias</code></td>
</tr>
</tbody>
</table>

<hr class="my-8">

<h2>8.5. Recursos de Aprendizaje</h2>

<h3>📚 Documentación Oficial</h3>

<table class="my-6">
<thead>
<tr>
<th>Tecnología</th>
<th>URL</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Odoo</strong></td>
<td>https://www.odoo.com/documentation/16.0/</td>
</tr>
<tr>
<td><strong>Flutter</strong></td>
<td>https://docs.flutter.dev/</td>
</tr>
<tr>
<td><strong>Dart</strong></td>
<td>https://dart.dev/guides</td>
</tr>
<tr>
<td><strong>Firebase</strong></td>
<td>https://firebase.google.com/docs</td>
</tr>
<tr>
<td><strong>Node.js</strong></td>
<td>https://nodejs.org/docs/</td>
</tr>
<tr>
<td><strong>Express</strong></td>
<td>https://expressjs.com/</td>
</tr>
<tr>
<td><strong>PostgreSQL</strong></td>
<td>https://www.postgresql.org/docs/</td>
</tr>
<tr>
<td><strong>ML Kit</strong></td>
<td>https://developers.google.com/ml-kit</td>
</tr>
</tbody>
</table>

<h3>🎓 Cursos y Tutoriales</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">

<div class="callout callout-info">

<h4>Odoo Development</h4>
<ul class="list-disc pl-6 space-y-2">
<li><strong>Odoo Mates (YouTube)</strong> - Series de desarrollo Odoo</li>
<li><strong>Odoo.sh Documentation</strong> - Despliegue en cloud</li>
<li><strong>Odoo Community Association</strong> - Módulos de ejemplo</li>
</ul>

</div>

<div class="callout callout-info">

<h4>Flutter Development</h4>
<ul class="list-disc pl-6 space-y-2">
<li><strong>Flutter Official (YouTube)</strong> - Canal oficial</li>
<li><strong>Reso Coder</strong> - Arquitectura limpia en Flutter</li>
<li><strong>Flutterly (YouTube)</strong> - Tutoriales prácticos</li>
<li><strong>CodeWithAndrea</strong> - Flutter para profesionales</li>
</ul>

</div>

</div>

<h3>📖 Libros Recomendados</h3>

<table class="my-6">
<thead>
<tr>
<th>Título</th>
<th>Autor</th>
<th>Tema</th>
</tr>
</thead>
<tbody>
<tr>
<td>"Odoo Development Essentials"</td>
<td>Daniel Reis</td>
<td>Desarrollo Odoo</td>
</tr>
<tr>
<td>"Flutter Complete Reference"</td>
<td>Alberto Mié</td>
<td>Flutter</td>
</tr>
<tr>
<td>"Node.js Design Patterns"</td>
<td>Mario Casciaro</td>
<td>Node.js</td>
</tr>
<tr>
<td>"Clean Code"</td>
<td>Robert C. Martin</td>
<td>Buenas prácticas</td>
</tr>
</tbody>
</table>
`;
