window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.herramientas = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🛠️</span> Objetivo de esta Sección
    </div>
    <p>Documentarás las herramientas utilizadas durante el proyecto. Esto demuestra tu capacidad para trabajar con entornos profesionales.</p>
</div>

<h3>8.1. Guía para el Inventario de Herramientas</h3>
<p>Clasifica las herramientas por categoría de uso:</p>

<h4>Categorías de Herramientas</h4>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">💻 Desarrollo</h4>
        <ul class="list-disc pl-6 space-y-1 text-sm text-slate-600">
            <li>IDEs / Editores de código</li>
            <li>Compiladores / Intérpretes</li>
            <li>Debuggers</li>
            <li>Extensiones y plugins</li>
        </ul>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">🔧 Testing</h4>
        <ul class="list-disc pl-6 space-y-1 text-sm text-slate-600">
            <li>Frameworks de tests</li>
            <li>Herramientas de profiling</li>
            <li>Testing de APIs</li>
            <li>Testing de rendimiento</li>
        </ul>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">📦 Despliegue</h4>
        <ul class="list-disc pl-6 space-y-1 text-sm text-slate-600">
            <li>Servidores / Cloud</li>
            <li>Contenedores (Docker)</li>
            <li>CI/CD</li>
            <li>Monitorización</li>
        </ul>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">📋 Gestión</h4>
        <ul class="list-disc pl-6 space-y-1 text-sm text-slate-600">
            <li>Control de versiones</li>
            <li>Gestión de proyectos</li>
            <li>Comunicación en equipo</li>
            <li>Documentación</li>
        </ul>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">🎨 Diseño</h4>
        <ul class="list-disc pl-6 space-y-1 text-sm text-slate-600">
            <li>Diseño de interfaces</li>
            <li>Prototipado</li>
            <li>Edición de imágenes</li>
            <li>Diagramas</li>
        </ul>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">🔒 Seguridad</h4>
        <ul class="list-disc pl-6 space-y-1 text-sm text-slate-600">
            <li>Análisis de vulnerabilidades</li>
            <li>Gestión de secretos</li>
            <li>Certificados SSL</li>
            <li>Backups</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Actividad Práctica
    </div>
    <p>Crea una tabla con TODAS las herramientas que has usado. Para cada una incluye:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Nombre y versión</li>
        <li>Categoría (de las anteriores)</li>
        <li>Propósito en tu proyecto</li>
        <li>Alternativas que consideraste</li>
        <li>Enlace oficial</li>
    </ul>
</div>

<h4>Ejemplo de Tabla de Herramientas</h4>
<pre class="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-6"><code class="language-text">┌───────────────┬────────────┬────────────────────────────┬─────────────────────┐
│ Herramienta   │ Versión    │ Propósito                  │ Alternativas        │
├───────────────┼────────────┼────────────────────────────┼─────────────────────┤
│ VS Code       │ 1.85       │ Editor de código principal │ WebStorm, Sublime   │
│ Node.js       │ 20 LTS     │ Runtime del backend        │ Python, Java        │
│ PostgreSQL    │ 16         │ Base de datos relacional   │ MySQL, MongoDB      │
│ Git           │ 2.43       │ Control de versiones       │ SVN, Mercurial      │
│ Figma         │ -          │ Diseño de interfaces       │ Adobe XD, Sketch    │
│ Postman       │ 10.x       │ Testing de APIs            │ Insomnia, httpie    │
│ Docker        │ 24.x       │ Contenedores               │ Podman, Vagrant     │
│ GitHub        │ -          │ Repositorio y CI/CD        │ GitLab, Bitbucket   │
└───────────────┴────────────┴────────────────────────────┴─────────────────────┘</code></pre>

<h3>8.2. Guía para el Flujo de Trabajo con Git</h3>
<p>Documenta cómo has utilizado el control de versiones:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>🎯</span> Lo que el Tribunal Quiere Ver
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Historial coherente:</strong> Commits frecuentes y bien organizados</li>
        <li><strong>Mensajes descriptivos:</strong> Que expliquen el QUÉ y POR QUÉ</li>
        <li><strong>Ramas feature:</strong> Evidencia de trabajo organizado</li>
        <li><strong>Pull Requests:</strong> Si trabajaste en equipo o hiciste code review</li>
    </ul>
</div>

<h4>Información a Documentar</h4>
<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Aspecto</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Qué Incluir</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Ejemplo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Repositorio</td>
            <td class="p-4 border border-slate-200 text-sm">URL pública o captura</td>
            <td class="p-4 border border-slate-200 text-sm">https://github.com/usuario/proyecto</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Estrategia de Branching</td>
            <td class="p-4 border border-slate-200 text-sm">Diagrama de ramas usadas</td>
            <td class="p-4 border border-slate-200 text-sm">main ← develop ← feature/*</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Estadísticas</td>
            <td class="p-4 border border-slate-200 text-sm">Número de commits, contribuidores</td>
            <td class="p-4 border border-slate-200 text-sm">150+ commits, 1 autor</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Conflictos</td>
            <td class="p-4 border border-slate-200 text-sm">Describe algún conflicto resuelto</td>
            <td class="p-4 border border-slate-200 text-sm">Merge conflict en package.json</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📚</span> Comandos Git Útiles para Documentar
    </div>
    <pre class="bg-slate-900 text-slate-100 p-4 rounded-xl mt-3 overflow-x-auto"><code class="language-bash"># Ver historial de commits
git log --oneline --graph --all

# Ver estadísticas del repositorio
git shortlog -sn

# Ver cambios por archivo
git log --stat

# Ver autor de cada línea
git blame archivo.js</code></pre>
</div>

<h3>8.3. Guía para Integración Continua (CI/CD)</h3>
<p>Si has implementado CI/CD, documenta tu pipeline:</p>

<h4>Elementos de un Pipeline CI/CD</h4>
<div class="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
    <div class="p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">
        <div class="text-2xl mb-2">🔄</div>
        <h5 class="font-bold text-blue-800 text-sm">Build</h5>
        <p class="text-xs text-slate-600 mt-1">Compilación del proyecto</p>
    </div>
    <div class="p-4 bg-green-50 rounded-xl border border-green-100 text-center">
        <div class="text-2xl mb-2">✅</div>
        <h5 class="font-bold text-green-800 text-sm">Test</h5>
        <p class="text-xs text-slate-600 mt-1">Ejecución de tests</p>
    </div>
    <div class="p-4 bg-purple-50 rounded-xl border border-purple-100 text-center">
        <div class="text-2xl mb-2">🔍</div>
        <h5 class="font-bold text-purple-800 text-sm">Lint</h5>
        <p class="text-xs text-slate-600 mt-1">Análisis de código</p>
    </div>
    <div class="p-4 bg-orange-50 rounded-xl border border-orange-100 text-center">
        <div class="text-2xl mb-2">🚀</div>
        <h5 class="font-bold text-orange-800 text-sm">Deploy</h5>
        <p class="text-xs text-slate-600 mt-1">Despliegue automático</p>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📋</span> Tarea para el Alumnado
    </div>
    <p>Si has implementado CI/CD, incluye:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Archivo de configuración del pipeline (.github/workflows/, .gitlab-ci.yml, etc.)</li>
        <li>Captura de pantalla de los builds ejecutados</li>
        <li>Explicación de qué dispara el pipeline (push, PR, schedule)</li>
        <li>Qué pasos se ejecutan en cada build</li>
    </ul>
    <p class="mt-3 text-sm text-slate-600">Si NO has implementado CI/CD, explica qué herramienta usarías y cómo configurarías el pipeline.</p>
</div>

<h3>8.4. Guía para la Documentación Técnica</h3>
<p>La documentación es crucial para el mantenimiento del software:</p>

<h4>Tipos de Documentación a Generar</h4>
<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Tipo</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Audiencia</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Contenido Típico</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Herramienta</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">README</td>
            <td class="p-4 border border-slate-200 text-sm">Todos los usuarios</td>
            <td class="p-4 border border-slate-200 text-sm">Descripción, instalación, uso básico</td>
            <td class="p-4 border border-slate-200 text-sm">Markdown</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">API Docs</td>
            <td class="p-4 border border-slate-200 text-sm">Desarrolladores</td>
            <td class="p-4 border border-slate-200 text-sm">Endpoints, parámetros, ejemplos</td>
            <td class="p-4 border border-slate-200 text-sm">Swagger, Postman</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Manual Usuario</td>
            <td class="p-4 border border-slate-200 text-sm">Usuarios finales</td>
            <td class="p-4 border border-slate-200 text-sm">Tutoriales paso a paso, FAQs</td>
            <td class="p-4 border border-slate-200 text-sm">Notion, GitBook</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Comentarios Código</td>
            <td class="p-4 border border-slate-200 text-sm">Desarrolladores</td>
            <td class="p-4 border border-slate-200 text-sm">Explicación de funciones complejas</td>
            <td class="p-4 border border-slate-200 text-sm">JSDoc, Python docstrings</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📝</span> Checklist de Documentación
    </div>
    <p>Asegúrate de incluir en tu proyecto:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>✅ README.md con descripción, instalación y uso</li>
        <li>✅ Documentación de la API (Swagger o similar)</li>
        <li>✅ Comentarios en funciones/métodos complejos</li>
        <li>✅ Manual de usuario básico (puede ser un PDF o web)</li>
        <li>✅ Instrucciones de despliegue para otros desarrolladores</li>
    </ul>
</div>
`;
