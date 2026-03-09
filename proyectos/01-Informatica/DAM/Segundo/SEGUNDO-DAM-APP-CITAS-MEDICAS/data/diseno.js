window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.diseno = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🎨</span> Objetivo de esta Sección
    </div>
    <p>Aquí debes definir <strong>cómo será tu sistema</strong> antes de implementar. Un buen diseño previene errores costosos y facilita el trabajo en equipo.</p>
</div>

<h3>5.1. Guía para la Arquitectura del Sistema</h3>
<p>La arquitectura define la organización global de tu sistema. Para proyectos de DAM, considera:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span> Consejo Pedagógico
    </div>
    <p>Dibuja tu arquitectura <strong>antes de codificar</strong>. Usa herramientas como draw.io, Lucidchart o incluso papel y lápiz.</p>
</div>

<h4>Componentes a Identificar</h4>
<p>Para tu proyecto, identifica y documenta:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Capa</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Preguntas Guía</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Ejemplos</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Presentación</td>
            <td class="p-4 border border-slate-200 text-sm">¿Cómo interactúa el usuario? ¿Qué plataformas?</td>
            <td class="p-4 border border-slate-200 text-sm">App móvil, Web, Escritorio</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Negocio/Lógica</td>
            <td class="p-4 border border-slate-200 text-sm">¿Qué reglas de negocio hay? ¿Cómo se procesan datos?</td>
            <td class="p-4 border border-slate-200 text-sm">API REST, Microservicios</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Datos</td>
            <td class="p-4 border border-slate-200 text-sm">¿Qué se almacena? ¿Cómo se persiste?</td>
            <td class="p-4 border border-slate-200 text-sm">PostgreSQL, MongoDB, Firebase</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Infraestructura</td>
            <td class="p-4 border border-slate-200 text-sm">¿Dónde se ejecuta? ¿Cómo se despliega?</td>
            <td class="p-4 border border-slate-200 text-sm">AWS, Azure, On-premise</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Actividad Práctica
    </div>
    <p>Crea un <strong>diagrama de arquitectura</strong> que muestre:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Todos los componentes del sistema</li>
        <li>Las conexiones entre ellos (flechas con dirección)</li>
        <li>Tecnologías usadas en cada capa</li>
        <li>Servicios externos (email, pagos, almacenamiento)</li>
    </ul>
    <p class="mt-3">Incluye el diagrama como imagen en esta sección y explica cada componente.</p>
</div>

<h3>5.2. Guía para la Pila Tecnológica</h3>
<p>La selección de tecnologías debe estar <strong>justificada</strong>, no elegida al azar:</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">🔍 Investiga</h4>
        <p class="text-sm text-slate-600">Compara al menos 3 opciones para cada categoría. Usa fuentes oficiales, benchmarks y opiniones de la comunidad.</p>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">⚖️ Evalúa</h4>
        <p class="text-sm text-slate-600">Considera: curva de aprendizaje, comunidad, documentación, rendimiento, coste, licencias.</p>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-2">📋 Justifica</h4>
        <p class="text-sm text-slate-600">Explica POR QUÉ elegiste cada tecnología y por qué descartaste las alternativas.</p>
    </div>
</div>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📚</span> Recursos para Investigar
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Stack Overflow Developer Survey:</strong> https://survey.stackoverflow.co/ (tendencias anuales)</li>
        <li><strong>State of JS / State of CSS:</strong> https://stateofjs.com/ (ecosistema JavaScript)</li>
        <li><strong>GitHub Octoverse:</strong> https://octoverse.github.com/ (lenguajes y tecnologías más usadas)</li>
        <li><strong>Roadmap.sh:</strong> https://roadmap.sh/ (rutas de aprendizaje por perfil)</li>
    </ul>
</div>

<h4>Tabla Comparativa de Tecnologías</h4>
<p>Crea una tabla comparativa para cada categoría de tu stack. Ejemplo:</p>

<pre class="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-6"><code class="language-text">Ejemplo: Comparativa de Frameworks Móviles
┌─────────────┬────────────┬─────────────┬────────────┬──────────────┐
│ Criterio    │ React Nat. │ Flutter     │ Ionic      │ Nativo       │
├─────────────┼────────────┼─────────────┼────────────┼──────────────┤
│ Rendimiento │ Bueno      │ Excelente   │ Regular    │ Óptimo       │
│ Curva       │ Suave      │ Media       │ Suave      │ Empinada     │
│ Comunidad   │ Grande      │ Mediana     │ Grande     │ Grande       │
│ Código      │ Compartido │ Compartido  │ Compartido │ Separado     │
│ Elección ✓  │ SELECCION. │ Alternativa │ Descartado │ Descartado   │
└─────────────┴────────────┴─────────────┴────────────┴──────────────┘</code></pre>

<h3>5.3. Guía para el Diseño de Base de Datos</h3>
<p>Un buen diseño de base de datos es crucial para el rendimiento y mantenibilidad:</p>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Actividad Práctica
    </div>
    <p>Para tu proyecto, crea:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Diagrama ER (Entidad-Relación):</strong> Muestra todas las entidades, atributos y relaciones</li>
        <li><strong>DDL de creación:</strong> Sentencias CREATE TABLE con tipos de datos, claves primarias y foráneas</li>
        <li><strong>Índices:</strong> Justifica qué columnas indexar y por qué</li>
        <li><strong>Política de backups:</strong> Frecuencia, tipo (completo/diferencial), retención</li>
    </ul>
</div>

<div class="callout callout-info">
    <div class="callout-title">
        <span>🛠️</span> Herramientas Sugeridas
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>draw.io / diagrams.net:</strong> Diagramas ER gratuitos y online</li>
        <li><strong>DBeaver:</strong> Gestión de bases de datos, genera diagramas automáticamente</li>
        <li><strong>dbdiagram.io:</strong> Diseño de BD con sintaxis DSL</li>
        <li><strong>pgAdmin:</strong> Para PostgreSQL, incluye diseñador visual</li>
    </ul>
</div>

<h3>5.4. Guía para el Diseño de API REST</h3>
<p>Si tu proyecto incluye backend, documenta tu API siguiendo estándares:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Aspecto</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Recomendación</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Ejemplo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Versionado</td>
            <td class="p-4 border border-slate-200 text-sm">Incluye versión en la URL</td>
            <td class="p-4 border border-slate-200 font-mono text-sm">/api/v1/usuarios</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Autenticación</td>
            <td class="p-4 border border-slate-200 text-sm">Bearer Token en header</td>
            <td class="p-4 border border-slate-200 font-mono text-sm">Authorization: Bearer eyJ...</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Métodos HTTP</td>
            <td class="p-4 border border-slate-200 text-sm">Usa verbos correctamente</td>
            <td class="p-4 border border-slate-200 text-sm">GET (leer), POST (crear), PUT (actualizar), DELETE (borrar)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Códigos de Estado</td>
            <td class="p-4 border border-slate-200 text-sm">Respuestas HTTP estándar</td>
            <td class="p-4 border border-slate-200 text-sm">200 (OK), 201 (Creado), 400 (Error), 404 (No encontrado)</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📋</span> Documenta tus Endpoints
    </div>
    <p>Para CADA endpoint de tu API, incluye:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Método HTTP y URL completa</li>
        <li>Parámetros (query, path, body) con tipos y validaciones</li>
        <li>Respuesta exitosa (código 200/201 con cuerpo JSON)</li>
        <li>Possibles errores (400, 401, 403, 404, 500)</li>
        <li>Ejemplo de petición cURL o Postman</li>
    </ul>
    <p class="mt-3">Considera usar <strong>Swagger/OpenAPI</strong> para documentación automática.</p>
</div>
`;
