window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.requisitos = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🎯</span> Objetivo de esta Sección
    </div>
    <p>En esta sección debes definir <strong>qué debe hacer el sistema</strong>, no cómo lo hace. Los requisitos son la base de todo el proyecto: de ellos dependerá el diseño, la implementación y las pruebas.</p>
</div>

<h3>4.1. Guía para el Análisis Funcional</h3>
<p>Los requisitos funcionales describen las capacidades que debe ofrecer el sistema. Para redactarlos correctamente:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span> Consejo Pedagógico
    </div>
    <p>Usa <strong>verbos de acción</strong> en presente: "El sistema permitirá...", "El usuario podrá...", "La aplicación mostrará..."</p>
</div>

<h4>Investiga y Define tus Requisitos</h4>
<p>Para tu proyecto, identifica al menos <strong>4 categorías de requisitos funcionales</strong>. Ejemplos de categorías:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Categoría</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Preguntas Guía</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Ejemplo de Requisito</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Gestión de Usuarios</td>
            <td class="p-4 border border-slate-200 text-sm">¿Quién usará el sistema? ¿Qué roles existen?</td>
            <td class="p-4 border border-slate-200 text-sm"><em>"El sistema permitirá el registro con validación por email"</em></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Gestión de Datos</td>
            <td class="p-4 border border-slate-200 text-sm">¿Qué información se almacena? ¿Cómo se modifica?</td>
            <td class="p-4 border border-slate-200 text-sm"><em>"El usuario podrá exportar sus datos en formato PDF"</em></td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Notificaciones</td>
            <td class="p-4 border border-slate-200 text-sm">¿Cuándo se notifica al usuario? ¿Por qué canal?</td>
            <td class="p-4 border border-slate-200 text-sm"><em>"El sistema enviará recordatorios 24h antes del evento"</em></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Informes/Consultas</td>
            <td class="p-4 border border-slate-200 text-sm">¿Qué consultas necesita el usuario? ¿Qué filtros?</td>
            <td class="p-4 border border-slate-200 text-sm"><em>"El administrador podrá filtrar usuarios por fecha de registro"</em></td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📋</span> Tarea para el Alumnado
    </div>
    <p>Define entre <strong>12 y 20 requisitos funcionales</strong> para tu proyecto, organizados en categorías. Usa la convención <strong>RF-XXX</strong> (ej: RF-001, RF-002) para facilitar la trazabilidad.</p>
</div>

<h3>4.2. Guía para Requisitos No Funcionales</h3>
<p>Los requisitos no funcionales definen <strong>cómo de bien</strong> debe funcionar el sistema. Son criterios de calidad:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">⚡ Rendimiento</h4>
        <p class="text-sm text-slate-600 mb-3">¿Qué tiempos de respuesta son aceptables?</p>
        <p class="text-xs text-slate-500">Ej: "La API responderá en menos de 200ms para el 95% de peticiones"</p>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">🔒 Seguridad</h4>
        <p class="text-sm text-slate-600 mb-3">¿Qué protección de datos se requiere?</p>
        <p class="text-xs text-slate-500">Ej: "Las contraseñas se almacenarán con hash bcrypt"</p>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-2">📈 Escalabilidad</h4>
        <p class="text-sm text-slate-600 mb-3">¿Cuántos usuarios concurrentes debe soportar?</p>
        <p class="text-xs text-slate-500">Ej: "El sistema soportará 500 usuarios simultáneos"</p>
    </div>
    <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
        <h4 class="font-bold text-orange-800 mb-2">📱 Compatibilidad</h4>
        <p class="text-sm text-slate-600 mb-3">¿En qué plataformas debe funcionar?</p>
        <p class="text-xs text-slate-500">Ej: "Compatible con iOS 14+ y Android 10+"</p>
    </div>
</div>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📚</span> Recursos para Investigar
    </div>
    <p>Consulta estas fuentes para definir requisitos no funcionales realistas:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>OWASP Top 10:</strong> https://owasp.org/www-project-top-ten/ (seguridad)</li>
        <li><strong>ISO 25010:</strong> Modelo de calidad de producto software</li>
        <li><strong>Google Performance Guidelines:</strong> https://web.dev/performance/</li>
    </ul>
</div>

<h3>4.3. Matriz de Trazabilidad</h3>
<p>La matriz de trazabilidad relaciona cada requisito con su implementación y pruebas:</p>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Actividad Práctica
    </div>
    <p>Crea una tabla que relacione:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>ID del requisito (ej: RF-001)</li>
        <li>Caso de uso asociado</li>
        <li>Componente(s) del sistema que lo implementan</li>
        <li>Prueba(s) que lo validan (unitaria, integración, E2E)</li>
    </ul>
    <p class="mt-3 text-sm text-slate-600">Esta matriz te ayudará a verificar que ningún requisito queda sin implementar y facilitará las pruebas finales.</p>
</div>

<pre class="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-6"><code class="language-text">Ejemplo de matriz:
┌───────────┬──────────────────┬─────────────────────┬──────────────────────┐
│ Requisito │ Caso de Uso      │ Componente          │ Prueba               │
├───────────┼──────────────────┼─────────────────────┼──────────────────────┤
│ RF-001    │ Registro usuario │ AuthController      │ test_auth_register.js│
│ RF-002    │ Login            │ AuthService         │ test_auth_login.js   │
└───────────┴──────────────────┴─────────────────────┴──────────────────────┘</code></pre>
`;
