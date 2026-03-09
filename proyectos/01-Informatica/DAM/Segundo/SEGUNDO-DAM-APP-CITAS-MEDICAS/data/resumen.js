window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.resumen = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📋</span> Objetivo de esta Sección
    </div>
    <p>El resumen es la primera sección que lee el tribunal. Debe ser conciso pero completo, destacando lo más relevante de tu proyecto.</p>
</div>

<h3>Guía para Redactar el Resumen Ejecutivo</h3>
<p>Un buen resumen debe responder a estas preguntas:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">🎯 ¿QUÉ es el proyecto?</h4>
        <p class="text-sm text-slate-600">Describe brevemente la aplicación/sistema desarrollado y su propósito principal.</p>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">🏢 ¿PARA QUIÉN?</h4>
        <p class="text-sm text-slate-600">Identifica el cliente/empresa ficticia y el sector de actividad.</p>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-2">⚠️ ¿POR QUÉ?</h4>
        <p class="text-sm text-slate-600">Explica la problemática que resuelve y por qué es necesaria esta solución.</p>
    </div>
    <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
        <h4 class="font-bold text-orange-800 mb-2">🛠️ ¿CÓMO?</h4>
        <p class="text-sm text-slate-600">Menciona las tecnologías principales y el enfoque de implementación.</p>
    </div>
</div>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span> Consejo de Redacción
    </div>
    <p>Escribe el resumen <strong>al final</strong>, cuando tengas todo el proyecto completado. Así podrás resumir con precisión lo que realmente has hecho.</p>
</div>

<h3>Estructura Sugerida para el Resumen</h3>
<p>Sigue este esquema para redactar tu resumen (300-400 palabras):</p>

<pre class="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-6"><code class="language-text">Párrafo 1: Contexto y Problemática (80-100 palabras)
├── Presentación de la empresa/cliente
├── Sector de actividad y tamaño
└── Problema principal que motiva el proyecto

Párrafo 2: Solución Propuesta (100-120 palabras)
├── Descripción de la aplicación/sistema
├── Funcionalidades principales
└── Tecnologías más relevantes utilizadas

Párrafo 3: Resultados y Beneficios (100-120 palabras)
├── Objetivos alcanzados
├── Beneficios cuantificables (ahorro de tiempo, reducción de errores, etc.)
└── Impacto esperado en la organización

Párrafo 4: Palabras Clave (5-8 términos)
└── Tecnologías, metodologías y conceptos clave del proyecto</code></pre>

<h3>Palabras Clave</h3>
<p>Incluye entre 5-8 palabras clave que definan tu proyecto. Ejemplos:</p>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
        <span class="text-sm font-bold text-slate-700">React Native</span>
    </div>
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
        <span class="text-sm font-bold text-slate-700">Node.js</span>
    </div>
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
        <span class="text-sm font-bold text-slate-700">PostgreSQL</span>
    </div>
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
        <span class="text-sm font-bold text-slate-700">API REST</span>
    </div>
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
        <span class="text-sm font-bold text-slate-700">JWT</span>
    </div>
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
        <span class="text-sm font-bold text-slate-700">AWS</span>
    </div>
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
        <span class="text-sm font-bold text-slate-700">RGPD</span>
    </div>
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
        <span class="text-sm font-bold text-slate-700">Agile</span>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Redacta tu resumen siguiendo estos criterios:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Extensión:</strong> 300-400 palabras (aproximadamente 1 página)</li>
        <li><strong>Estilo:</strong> Formal pero accesible, evita jerga técnica muy específica</li>
        <li><strong>Formato:</strong> Párrafos bien separados, usa negritas para conceptos clave</li>
        <li><strong>Palabras clave:</strong> 5-8 términos al final, separados por comas</li>
        <li><strong>Idioma:</strong> Puede incluir un resumen en inglés ("Abstract") si es relevante</li>
    </ul>
</div>

<h3>Ejemplo de Resumen (para inspirarte)</h3>
<div class="callout callout-info">
    <div class="callout-title">
        <span>📄</span> Ejemplo: MediConnect
    </div>
    <p class="text-sm text-slate-700">
        <strong>MediSalud Valencia S.L.</strong> es una clínica privada con 15 especialistas y más de 3.000 pacientes activos que enfrentaba graves problemas de gestión de citas. El personal administrativo dedicaba 3 horas diarias a coordinar agendas por teléfono, resultando en una pérdida del 30% de llamadas y un ausentismo del 25% en citas programadas.
        <br><br>
        Este proyecto desarrolla <strong>MediConnect</strong>, una aplicación multiplataforma que permite a los pacientes reservar, modificar y cancelar citas de forma autónoma, mientras que el personal médico y administrativo dispone de herramientas avanzadas para gestionar agendas y historiales clínicos. La solución implementa una arquitectura cliente-servidor con <strong>React Native</strong> para el frontend móvil, <strong>Node.js + Express</strong> para la API REST backend, y <strong>PostgreSQL</strong> como base de datos relacional.
        <br><br>
        Los resultados esperados incluyen una reducción del 40% en gestión telefónica, disminución del 25% en ausentismo mediante recordatorios automáticos, y digitalización completa de historiales clínicos cumpliendo con la normativa <strong>RGPD</strong>. La aplicación está desplegada en <strong>AWS</strong> con alta disponibilidad y escalabilidad automática.
        <br><br>
        <strong>Palabras clave:</strong> React Native, Node.js, PostgreSQL, API REST, JWT, AWS, RGPD, Telemedicina.
    </p>
</div>
`;
