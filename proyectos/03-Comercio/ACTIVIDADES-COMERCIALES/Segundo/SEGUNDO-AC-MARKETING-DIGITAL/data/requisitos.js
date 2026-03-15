// requisitos.js - Análisis de requisitos
window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.requisitos = `
<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📋</span>
        <span>Análisis de Requisitos</span>
    </div>
    <p>Esta sección detalla todos los requisitos necesarios para implementar el plan de marketing digital: técnicos, humanos, legales y operativos.</p>
</div>

<h3>4.1. Requisitos Técnicos</h3>

<h4>4.1.1. Infraestructura Digital Básica</h4>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 px-4 py-3 text-left">Elemento</th>
            <th class="border border-slate-200 px-4 py-3 text-left">Requisito Mínimo</th>
            <th class="border border-slate-200 px-4 py-3 text-left">Recomendado</th>
            <th class="border border-slate-200 px-4 py-3 text-left">Prioridad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 px-4 py-3">Dominio Web</td>
            <td class="border border-slate-200 px-4 py-3">Nombre .com o .es disponible</td>
            <td class="border border-slate-200 px-4 py-3">Nombre corto, memorable, sin números</td>
            <td class="border border-slate-200 px-4 py-3">🔴 Alta</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 px-4 py-3">Hosting</td>
            <td class="border border-slate-200 px-4 py-3">5GB almacenamiento, SSL incluido</td>
            <td class="border border-slate-200 px-4 py-3">10GB+, CDN, backups diarios</td>
            <td class="border border-slate-200 px-4 py-3">🔴 Alta</td>
        </tr>
        <tr>
            <td class="border border-slate-200 px-4 py-3">CMS (Gestor de Contenidos)</td>
            <td class="border border-slate-200 px-4 py-3">WordPress o similar</td>
            <td class="border border-slate-200 px-4 py-3">WordPress + WooCommerce si vende online</td>
            <td class="border border-slate-200 px-4 py-3">🔴 Alta</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 px-4 py-3">Email Corporativo</td>
            <td class="border border-slate-200 px-4 py-3">info@tudominio.com</td>
            <td class="border border-slate-200 px-4 py-3">Múltiples cuentas (ventas, soporte, etc.)</td>
            <td class="border border-slate-200 px-4 py-3">🟡 Media</td>
        </tr>
        <tr>
            <td class="border border-slate-200 px-4 py-3">Certificado SSL</td>
            <td class="border border-slate-200 px-4 py-3">HTTPS básico (Let's Encrypt)</td>
            <td class="border border-slate-200 px-4 py-3">SSL premium con garantía</td>
            <td class="border border-slate-200 px-4 py-3">🔴 Alta</td>
        </tr>
    </tbody>
</table>

<h4>4.1.2. Presencia en Redes Sociales</h4>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
    <div class="callout callout-info">
        <div class="callout-title">
            <span>📘</span>
            <span>Facebook</span>
        </div>
        <p class="text-sm">Página de negocio (no perfil personal). Ideal para público 35+ y eventos locales.</p>
    </div>
    <div class="callout callout-info">
        <div class="callout-title">
            <span>📸</span>
            <span>Instagram</span>
        </div>
        <p class="text-sm">Cuenta business. Esencial para comercio visual (moda, decoración, alimentación).</p>
    </div>
    <div class="callout callout-info">
        <div class="callout-title">
            <span>📍</span>
            <span>Google My Business</span>
        </div>
        <p class="text-sm">Ficha optimizada con fotos, horarios y respuestas a reseñas. CRÍTICO para comercio local.</p>
    </div>
</div>

<h4>4.1.3. Herramientas de Analítica</h4>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 px-4 py-3 text-left">Herramienta</th>
            <th class="border border-slate-200 px-4 py-3 text-left">Función</th>
            <th class="border border-slate-200 px-4 py-3 text-left">Coste</th>
            <th class="border border-slate-200 px-4 py-3 text-left">Configuración</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 px-4 py-3">Google Analytics 4</td>
            <td class="border border-slate-200 px-4 py-3">Analítica web completa</td>
            <td class="border border-slate-200 px-4 py-3">Gratuito</td>
            <td class="border border-slate-200 px-4 py-3">Código de seguimiento en web</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 px-4 py-3">Google Search Console</td>
            <td class="border border-slate-200 px-4 py-3">Posicionamiento en Google</td>
            <td class="border border-slate-200 px-4 py-3">Gratuito</td>
            <td class="border border-slate-200 px-4 py-3">Verificación de propiedad</td>
        </tr>
        <tr>
            <td class="border border-slate-200 px-4 py-3">Meta Business Suite</td>
            <td class="border border-slate-200 px-4 py-3">Analítica Facebook e Instagram</td>
            <td class="border border-slate-200 px-4 py-3">Gratuito</td>
            <td class="border border-slate-200 px-4 py-3">Conectar cuentas de negocio</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 px-4 py-3">Google My Business Insights</td>
            <td class="border border-slate-200 px-4 py-3">Estadísticas de búsquedas locales</td>
            <td class="border border-slate-200 px-4 py-3">Gratuito</td>
            <td class="border border-slate-200 px-4 py-3">Automático con la ficha</td>
        </tr>
    </tbody>
</table>

<h3>4.2. Requisitos Humanos</h3>

<h4>4.2.1. Roles y Responsabilidades</h4>

<p>Para un pequeño comercio, los roles pueden ser asumidos por las mismas personas, pero es importante definir responsabilidades:</p>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 px-4 py-3 text-left">Rol</th>
            <th class="border border-slate-200 px-4 py-3 text-left">Responsabilidades</th>
            <th class="border border-slate-200 px-4 py-3 text-left">Tiempo Estimado</th>
            <th class="border border-slate-200 px-4 py-3 text-left">Perfil</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 px-4 py-3 font-semibold">Responsable Digital</td>
            <td class="border border-slate-200 px-4 py-3">Estrategia, supervisión, toma de decisiones</td>
            <td class="border border-slate-200 px-4 py-3">4h/semana</td>
            <td class="border border-slate-200 px-4 py-3">Dueño/a o encargado/a</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 px-4 py-3 font-semibold">Community Manager</td>
            <td class="border border-slate-200 px-4 py-3">Publicar contenido, responder comentarios y mensajes</td>
            <td class="border border-slate-200 px-4 py-3">30min/día</td>
            <td class="border border-slate-200 px-4 py-3">Personal joven del equipo</td>
        </tr>
        <tr>
            <td class="border border-slate-200 px-4 py-3 font-semibold">Creador de Contenido</td>
            <td class="border border-slate-200 px-4 py-3">Fotos, vídeos, textos para posts</td>
            <td class="border border-slate-200 px-4 py-3">2h/semana</td>
            <td class="border border-slate-200 px-4 py-3">Cualquier persona con smartphone</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 px-4 py-3 font-semibold">Atención al Cliente Online</td>
            <td class="border border-slate-200 px-4 py-3">Responder consultas, gestionar reclamaciones</td>
            <td class="border border-slate-200 px-4 py-3">Variable</td>
            <td class="border border-slate-200 px-4 py-3">Todo el equipo de ventas</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Consejo Importante</span>
    </div>
    <p>Si el comercio no tiene personal con competencias digitales, considere:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Formación básica para el equipo existente</li>
        <li>Contratar un becario o estudiante en prácticas de Marketing/Comercio</li>
        <li>Externalizar tareas específicas (ej: gestión de ads) a un freelancer</li>
    </ul>
</div>

<h3>4.3. Requisitos Legales</h3>

<h4>4.3.1. Cumplimiento Normativo</h4>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 px-4 py-3 text-left">Normativa</th>
            <th class="border border-slate-200 px-4 py-3 text-left">Requisito</th>
            <th class="border border-slate-200 px-4 py-3 text-left">Cómo Cumplir</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 px-4 py-3">RGPD (Protección de Datos)</td>
            <td class="border border-slate-200 px-4 py-3">Consentimiento para recoger emails/teléfonos</td>
            <td class="border border-slate-200 px-4 py-3">Checkbox en formularios, política de privacidad visible</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 px-4 py-3">LSSI (Comercio Electrónico)</td>
            <td class="border border-slate-200 px-4 py-3">Información legal en la web</td>
            <td class="border border-slate-200 px-4 py-3">Página de "Aviso Legal" con datos fiscales</td>
        </tr>
        <tr>
            <td class="border border-slate-200 px-4 py-3">Ley de Cookies</td>
            <td class="border border-slate-200 px-4 py-3">Aviso y consentimiento de cookies</td>
            <td class="border border-slate-200 px-4 py-3">Banner de cookies con opción de rechazar</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 px-4 py-3">Propiedad Intelectual</td>
            <td class="border border-slate-200 px-4 py-3">No usar imágenes/música sin licencia</td>
            <td class="border border-slate-200 px-4 py-3">Usar bancos de imágenes gratuitos o propios</td>
        </tr>
        <tr>
            <td class="border border-slate-200 px-4 py-3">Publicidad y Promociones</td>
            <td class="border border-slate-200 px-4 py-3">Transparencia en precios y condiciones</td>
            <td class="border border-slate-200 px-4 py-3">Mostrar precio final, condiciones claras de promociones</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📄</span>
        <span>Documentos Legales Necesarios</span>
    </div>
    <p>Tu web debe incluir estas páginas (enlaces en el footer):</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Aviso Legal:</strong> Datos identificativos del negocio, NIF, dirección, contacto</li>
        <li><strong>Política de Privacidad:</strong> Qué datos recoges, para qué, cómo protegerlos</li>
        <li><strong>Política de Cookies:</strong> Qué cookies usas y por qué</li>
        <li><strong>Términos y Condiciones:</strong> Si vendes online, condiciones de compra y devolución</li>
    </ul>
</div>

<h3>4.4. Requisitos Operativos</h3>

<h4>4.4.1. Procesos a Establecer</h4>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
        <h5 class="font-bold text-slate-800 mb-3">📦 Gestión de Pedidos Online</h5>
        <ol class="text-sm space-y-2 text-slate-600 list-decimal pl-4">
            <li>Recepción del pedido (email/notificación)</li>
            <li>Verificación de stock</li>
            <li>Preparación del pedido</li>
            <li>Confirmación al cliente</li>
            <li>Entrega o recogida en tienda</li>
            <li>Seguimiento post-venta</li>
        </ol>
    </div>
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
        <h5 class="font-bold text-slate-800 mb-3">💬 Atención al Cliente Digital</h5>
        <ol class="text-sm space-y-2 text-slate-600 list-decimal pl-4">
            <li>Monitorizar mensajes (máx. 24h respuesta)</li>
            <li>Clasificar por tipo (consulta, queja, pedido)</li>
            <li>Responder con tono profesional y cercano</li>
            <li>Registrar en CRM o archivo</li>
            <li>Seguimiento si es necesario</li>
        </ol>
    </div>
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
        <h5 class="font-bold text-slate-800 mb-3">📅 Planificación de Contenido</h5>
        <ol class="text-sm space-y-2 text-slate-600 list-decimal pl-4">
            <li>Definir calendario mensual de publicaciones</li>
            <li>Crear contenido con antelación (batch creation)</li>
            <li>Programar publicaciones (Buffer, Meta Business)</li>
            <li>Monitorizar engagement</li>
            <li>Ajustar según resultados</li>
        </ol>
    </div>
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
        <h5 class="font-bold text-slate-800 mb-3">📊 Medición de Resultados</h5>
        <ol class="text-sm space-y-2 text-slate-600 list-decimal pl-4">
            <li>Revisar Analytics semanalmente</li>
            <li>Generar informe mensual de KPIs</li>
            <li>Comparar con objetivos establecidos</li>
            <li>Identificar qué funciona y qué no</li>
            <li>Ajustar estrategia mensualmente</li>
        </ol>
    </div>
</div>

<h3>4.5. Checklist de Requisitos</h3>

<div class="callout callout-success my-6">
    <div class="callout-title">
        <span>✅</span>
        <span>Verificación de Requisitos</span>
    </div>
    <p>Antes de comenzar la implementación, verifica que cumples con:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
        <div class="flex items-start gap-2">
            <span class="text-green-600">☐</span>
            <span class="text-sm">Dominio web registrado y disponible</span>
        </div>
        <div class="flex items-start gap-2">
            <span class="text-green-600">☐</span>
            <span class="text-sm">Hosting contratado con SSL</span>
        </div>
        <div class="flex items-start gap-2">
            <span class="text-green-600">☐</span>
            <span class="text-sm">Cuentas de redes sociales creadas</span>
        </div>
        <div class="flex items-start gap-2">
            <span class="text-green-600">☐</span>
            <span class="text-sm">Google My Business verificado</span>
        </div>
        <div class="flex items-start gap-2">
            <span class="text-green-600">☐</span>
            <span class="text-sm">Documentos legales preparados</span>
        </div>
        <div class="flex items-start gap-2">
            <span class="text-green-600">☐</span>
            <span class="text-sm">Personal asignado a tareas digitales</span>
        </div>
        <div class="flex items-start gap-2">
            <span class="text-green-600">☐</span>
            <span class="text-sm">Herramientas de analítica configuradas</span>
        </div>
        <div class="flex items-start gap-2">
            <span class="text-green-600">☐</span>
            <span class="text-sm">Presupuesto aprobado y disponible</span>
        </div>
    </div>
</div>

<hr class="my-8">

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>📝</span>
        <span>Tu Tarea: Lista de Requisitos Personalizada</span>
    </div>
    <p>Para el comercio que hayas elegido, elabora:</p>
    <ol class="list-decimal pl-6 space-y-2 mt-2">
        <li>Lista de requisitos técnicos específicos (¿qué necesita exactamente?)</li>
        <li>Asignación de roles (¿quién hará qué?)</li>
        <li>Revisión de requisitos legales (¿cumple con RGPD?)</li>
        <li>Definición de procesos operativos (¿cómo gestionará pedidos/mensajes?)</li>
    </ol>
</div>
`;
