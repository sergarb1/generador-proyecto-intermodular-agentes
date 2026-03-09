window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.anexos = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📎</span> Objetivo de esta Sección
    </div>
    <p>Los anexos contienen material complementario que no encaja en el cuerpo principal pero que es relevante para entender el proyecto.</p>
</div>

<h3>11.1. Guía para Capturas de Pantalla</h3>
<p>Documenta visualmente tu proyecto con capturas organizadas:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>📸</span> Consejos para Capturas
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Resolución consistente:</strong> Todas las capturas del mismo tamaño o proporción</li>
        <li><strong>Anotaciones:</strong> Usa flechas o recuadros para destacar elementos importantes</li>
        <li><strong>Pies de foto:</strong> Cada captura debe tener una descripción de 1-2 frases</li>
        <li><strong>Organización:</strong> Agrupa por funcionalidad o tipo de usuario</li>
    </ul>
</div>

<h4>Capturas Sugeridas por Tipo de Proyecto</h4>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">📱 Aplicación Móvil</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Pantalla de login/registro</li>
            <li>Home/dashboard principal</li>
            <li>Listado de elementos principales</li>
            <li>Detalle de elemento</li>
            <li>Formularios de creación/edición</li>
            <li>Perfil de usuario y configuración</li>
            <li>Notificaciones push</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">🌐 Aplicación Web</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Página de inicio (landing page)</li>
            <li>Panel de administración</li>
            <li>Gestión de usuarios/entidades</li>
            <li>Informes y estadísticas</li>
            <li>Configuración del sistema</li>
            <li>Vista responsive (móvil y desktop)</li>
        </ul>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-2">⚙️ Backend/API</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Documentación Swagger/OpenAPI</li>
            <li>Colección de Postman</li>
            <li>Logs del servidor</li>
            <li>Panel de base de datos</li>
            <li>Dashboard de monitorización</li>
            <li>Pipeline de CI/CD</li>
        </ul>
    </div>
    <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
        <h4 class="font-bold text-orange-800 mb-2">📊 Administración</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Diagrama de Gantt del proyecto</li>
            <li>Matriz DAFO/CAME</li>
            <li>Presupuesto detallado</li>
            <li>Organigrama de la empresa</li>
            <li>Flujogramas de procesos</li>
            <li>Modelos de documentos</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Incluye al menos <strong>10-15 capturas de pantalla</strong> organizadas por categoría. Para cada una:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Añade un título descriptivo (ej: "Figura 1: Pantalla de login")</li>
        <li>Incluye un pie explicando qué se ve y por qué es relevante</li>
        <li>Si es un formulario, explica qué datos se piden y validaciones</li>
        <li>Menciona qué tecnología se usó para esa pantalla</li>
    </ul>
</div>

<h3>11.2. Guía para Fragmentos de Código Relevante</h3>
<p>Selecciona los fragmentos de código más interesantes o complejos de tu proyecto:</p>

<div class="callout callout-info">
    <div class="callout-title">
        <span>💻</span> Qué Código Incluir
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Algoritmos complejos que hayas implementado</li>
        <li>Patrones de diseño aplicados (Singleton, Factory, Observer, etc.)</li>
        <li>Configuraciones no triviales (autenticación, conexiones externas)</li>
        <li>Funciones utilitarias que resuelven problemas específicos</li>
        <li>Queries de base de datos optimizadas</li>
    </ul>
    <p class="mt-3 text-sm text-slate-600">Evita código boilerplate o generado automáticamente (ej: getters/setters básicos).</p>
</div>

<h4>Estructura para Cada Fragmento</h4>
<p>Para cada fragmento de código que incluyas, sigue esta estructura:</p>

<pre class="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-6"><code class="language-text">1. Contexto
   - ¿Qué problema resuelve este código?
   - ¿En qué módulo/archivo se encuentra?
   - ¿Qué tecnologías/librerías utiliza?

2. Código
   - Fragmento de 20-50 líneas (no más)
   - Con sintaxis resaltada
   - Comentarios solo si son necesarios para entender

3. Explicación
   - Describe qué hace cada parte importante
   - Menciona decisiones de diseño tomadas
   - Explica por qué esta solución y no otra

4. Alternativas Consideradas
   - ¿Qué otras soluciones existían?
   - ¿Por qué las descartaste?
   - ¿Qué trade-offs implicó tu elección?</code></pre>

<h3>11.3. Guía para el Manual de Usuario</h3>
<p>Crea una guía básica para que un usuario pueda utilizar tu aplicación:</p>

<h4>Secciones del Manual</h4>
<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Sección</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Contenido</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Extensión Sugerida</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Introducción</td>
            <td class="p-4 border border-slate-200 text-sm">Qué es la aplicación, para quién es</td>
            <td class="p-4 border border-slate-200 text-sm">1 párrafo</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Requisitos</td>
            <td class="p-4 border border-slate-200 text-sm">Sistema operativo, navegador, cuenta de usuario</td>
            <td class="p-4 border border-slate-200 text-sm">Lista con viñetas</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Instalación/Acceso</td>
            <td class="p-4 border border-slate-200 text-sm">Cómo descargar o acceder a la app</td>
            <td class="p-4 border border-slate-200 text-sm">3-5 pasos numerados</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Primeros Pasos</td>
            <td class="p-4 border border-slate-200 text-sm">Registro, login, configuración inicial</td>
            <td class="p-4 border border-slate-200 text-sm">1 página con capturas</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Funcionalidades</td>
            <td class="p-4 border border-slate-200 text-sm">Cada feature principal explicada</td>
            <td class="p-4 border border-slate-200 text-sm">1-2 páginas por feature</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">FAQ</td>
            <td class="p-4 border border-slate-200 text-sm">Preguntas frecuentes y soluciones</td>
            <td class="p-4 border border-slate-200 text-sm">5-10 preguntas</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Soporte</td>
            <td class="p-4 border border-slate-200 text-sm">Cómo contactar para ayuda</td>
            <td class="p-4 border border-slate-200 text-sm">1 párrafo con contacto</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📖</span> Formato del Manual
    </div>
    <p>Puedes crear el manual en formato:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>PDF:</strong> Fácil de imprimir y distribuir</li>
        <li><strong>Web:</strong> Usando GitBook, Notion, o una página simple</li>
        <li><strong>Markdown:</strong> ARCHIVO README.md o similar en el repositorio</li>
        <li><strong>Video:</strong> Screencast de 5-10 minutos mostrando la aplicación (opcional)</li>
    </ul>
</div>

<h3>11.4. Glosario de Términos</h3>
<p>Define los términos técnicos y de negocio utilizados en el proyecto:</p>

<h4>Ejemplo de Glosario</h4>
<pre class="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-6"><code class="language-text">API (Application Programming Interface):
  Interfaz que permite que dos aplicaciones se comuniquen 
  entre sí intercambiando datos de forma estructurada.

Autenticación:
  Proceso de verificar la identidad de un usuario, 
  normalmente mediante credenciales (email + contraseña).

Backend:
  Parte del software que se ejecuta en el servidor, 
  gestionando lógica de negocio, base de datos y APIs.

CI/CD (Continuous Integration/Continuous Deployment):
  Práctica de automatizar la integración y despliegue 
  de código mediante pipelines automatizados.

Endpoint:
  URL específica de una API que acepta peticiones HTTP 
  para realizar una operación concreta.

JWT (JSON Web Token):
  Estándar abierto para transmitir información de forma 
  segura entre partes como un objeto JSON firmado.

RGPD (Reglamento General de Protección de Datos):
  Normativa europea que regula el tratamiento de datos 
  personales de los ciudadanos de la UE.

SLA (Service Level Agreement):
  Acuerdo de nivel de servicio que define las métricas 
  de calidad y disponibilidad que debe cumplir un servicio.</code></pre>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Crea un glosario con al menos <strong>15-20 términos</strong> relevantes de tu proyecto. Incluye:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Términos técnicos de las tecnologías usadas</li>
        <li>Términos de negocio del sector de tu cliente</li>
        <li>Acrónimos comunes (API, REST, JWT, RGPD, etc.)</li>
        <li>Conceptos específicos de tu proyecto</li>
    </ul>
</div>

<h3>11.5. Otros Anexos Opcionales</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">📄 Modelos de Documentos</h4>
        <p class="text-sm text-slate-600 mb-2">Si tu proyecto genera documentos:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>Plantillas de informes</li>
            <li>Modelos de contratos</li>
            <li>Formatos de exportación</li>
        </ul>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">📊 Datos de Ejemplo</h4>
        <p class="text-sm text-slate-600 mb-2">Para demostrar el funcionamiento:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>Dataset de prueba</li>
            <li>Usuarios de ejemplo</li>
            <li>Casos de test</li>
        </ul>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">🎨 Diseño Gráfico</h4>
        <p class="text-sm text-slate-600 mb-2">Material de identidad visual:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>Logotipos y variantes</li>
            <li>Paleta de colores</li>
            <li>Tipografías usadas</li>
        </ul>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">📹 Material Audiovisual</h4>
        <p class="text-sm text-slate-600 mb-2">Contenido multimedia:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>Enlace a video demostrativo</li>
            <li>Grabación de presentación</li>
            <li>Tutorial en formato video</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📋</span> Checklist de Anexos
    </div>
    <p>Asegúrate de incluir al menos:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>✅ 10-15 capturas de pantalla organizadas y comentadas</li>
        <li>✅ 3-5 fragmentos de código relevante con explicación</li>
        <li>✅ Manual de usuario básico (PDF, web o Markdown)</li>
        <li>✅ Glosario con 15-20 términos técnicos y de negocio</li>
        <li>✅ Cualquier otro material que aporte valor al proyecto</li>
    </ul>
</div>
`;
