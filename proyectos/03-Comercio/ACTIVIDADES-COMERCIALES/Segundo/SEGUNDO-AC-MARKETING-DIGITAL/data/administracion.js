// administracion.js - Gestión comercial y atención al cliente
window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.administracion = `
<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>⚙️</span>
        <span>Administración: Gestión Comercial</span>
    </div>
    <p>Esta sección cubre la gestión comercial, procesos de venta, atención al cliente y fidelización en el entorno digital.</p>
</div>

<h3>7.1. Proceso de Venta Digital</h3>

<p>El funnel de ventas digital adapta el proceso tradicional de venta al entorno online:</p>

<h4>7.1.1. Embudo de Conversión (AIDA Digital)</h4>

<div class="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
    <div class="callout callout-info">
        <div class="callout-title">
            <span>👁️</span>
            <span>Atención</span>
        </div>
        <p class="text-sm">El cliente descubre la marca a través de redes sociales, Google o publicidad.</p>
        <p class="text-xs mt-2"><strong>Métrica:</strong> Alcance, impresiones</p>
    </div>
    <div class="callout callout-info">
        <div class="callout-title">
            <span>🎯</span>
            <span>Interés</span>
        </div>
        <p class="text-sm">Visita la web, sigue en redes, consume contenido.</p>
        <p class="text-xs mt-2"><strong>Métrica:</strong> Visitas web, tiempo en página</p>
    </div>
    <div class="callout callout-info">
        <div class="callout-title">
            <span>💭</span>
            <span>Deseo</span>
        </div>
        <p class="text-sm">Añade al carrito, se suscribe al newsletter, pide información.</p>
        <p class="text-xs mt-2"><strong>Métrica:</strong> Tasa de adición al carrito, leads</p>
    </div>
    <div class="callout callout-info">
        <div class="callout-title">
            <span>✅</span>
            <span>Acción</span>
        </div>
        <p class="text-sm">Completa la compra o visita la tienda física.</p>
        <p class="text-xs mt-2"><strong>Métrica:</strong> Tasa de conversión, ventas</p>
    </div>
</div>

<h4>7.1.2. Fases del Proceso de Venta</h4>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 px-4 py-3 text-left">Fase</th>
            <th class="border border-slate-200 px-4 py-3 text-left">Acciones Clave</th>
            <th class="border border-slate-200 px-4 py-3 text-left">Herramientas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 px-4 py-3 font-semibold">1. Prospección</td>
            <td class="border border-slate-200 px-4 py-3">Atraer tráfico cualificado mediante contenido y ads</td>
            <td class="border border-slate-200 px-4 py-3">Meta Ads, Google Ads, SEO, Instagram</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 px-4 py-3 font-semibold">2. Calificación</td>
            <td class="border border-slate-200 px-4 py-3">Identificar clientes con mayor potencial de compra</td>
            <td class="border border-slate-200 px-4 py-3">Formularios web, lead magnets, quizzes</td>
        </tr>
        <tr>
            <td class="border border-slate-200 px-4 py-3 font-semibold">3. Presentación</td>
            <td class="border border-slate-200 px-4 py-3">Mostrar productos de forma atractiva y relevante</td>
            <td class="border border-slate-200 px-4 py-3">Fichas de producto, vídeos, demos en vivo</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 px-4 py-3 font-semibold">4. Manejo de Objeciones</td>
            <td class="border border-slate-200 px-4 py-3">Responder dudas y preocupaciones del cliente</td>
            <td class="border border-slate-200 px-4 py-3">FAQ, chat en vivo, WhatsApp, teléfono</td>
        </tr>
        <tr>
            <td class="border border-slate-200 px-4 py-3 font-semibold">5. Cierre</td>
            <td class="border border-slate-200 px-4 py-3">Facilitar la compra y eliminar fricción</td>
            <td class="border border-slate-200 px-4 py-3">Carrito optimizado, múltiples métodos de pago</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 px-4 py-3 font-semibold">6. Fidelización</td>
            <td class="border border-slate-200 px-4 py-3">Convertir compradores en clientes recurrentes</td>
            <td class="border border-slate-200 px-4 py-3">Email marketing, programa de puntos, CRM</td>
        </tr>
    </tbody>
</table>

<h3>7.2. Atención al Cliente Digital</h3>

<h4>7.2.1. Canales de Atención</h4>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
        <h5 class="font-bold text-slate-800 mb-2">💬 WhatsApp Business</h5>
        <ul class="text-sm text-slate-600 space-y-1">
            <li>• Respuesta en < 2 horas</li>
            <li>• Mensajes automáticos de bienvenida</li>
            <li>• Catálogo de productos integrado</li>
            <li>• Etiquetas para organizar clientes</li>
        </ul>
    </div>
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
        <h5 class="font-bold text-slate-800 mb-2">📧 Email</h5>
        <ul class="text-sm text-slate-600 space-y-1">
            <li>• Respuesta en < 24 horas</li>
            <li>• Plantillas para preguntas frecuentes</li>
            <li>• Seguimiento post-compra automático</li>
            <li>• Encuestas de satisfacción</li>
        </ul>
    </div>
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
        <h5 class="font-bold text-slate-800 mb-2">📱 Redes Sociales</h5>
        <ul class="text-sm text-slate-600 space-y-1">
            <li>• Monitorizar menciones y mensajes</li>
            <li>• Responder comentarios públicamente</li>
            <li>• Llevar conversaciones complejas a privado</li>
            <li>• Tiempo de respuesta < 4 horas</li>
        </ul>
    </div>
</div>

<h4>7.2.2. Protocolo de Respuesta</h4>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📋</span>
        <span>Reglas de Oro de la Atención Digital</span>
    </div>
    <ol class="list-decimal pl-6 space-y-2">
        <li><strong>Rapidez:</strong> Responder siempre en menos de 24 horas (idealmente en 2-4 horas)</li>
        <li><strong>Tono:</strong> Cercano pero profesional, usar el nombre del cliente</li>
        <li><strong>Empatía:</strong> Validar la preocupación del cliente antes de ofrecer solución</li>
        <li><strong>Solución:</strong> Ofrecer alternativas concretas, no excusas</li>
        <li><strong>Seguimiento:</strong> Confirmar que el cliente quedó satisfecho</li>
        <li><strong>Registro:</strong> Documentar la interacción para futuras referencias</li>
    </ol>
</div>

<h4>7.2.3. Gestión de Quejas y Reclamaciones</h4>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 px-4 py-3 text-left">Tipo</th>
            <th class="border border-slate-200 px-4 py-3 text-left">Ejemplo</th>
            <th class="border border-slate-200 px-4 py-3 text-left">Respuesta Recomendada</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 px-4 py-3">Producto defectuoso</td>
            <td class="border border-slate-200 px-4 py-3">"La camisa llegó con un agujero"</td>
            <td class="border border-slate-200 px-4 py-3">Disculparse, ofrecer reemplazo inmediato o reembolso completo, enviar etiqueta de devolución gratuita</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 px-4 py-3">Retraso en entrega</td>
            <td class="border border-slate-200 px-4 py-3">"Llevo 10 días esperando mi pedido"</td>
            <td class="border border-slate-200 px-4 py-3">Disculparse, explicar causa, ofrecer descuento en próxima compra, priorizar envío</td>
        </tr>
        <tr>
            <td class="border border-slate-200 px-4 py-3">Producto no coincide con descripción</td>
            <td class="border border-slate-200 px-4 py-3">"El color no es el de la foto"</td>
            <td class="border border-slate-200 px-4 py-3">Reconocer el error, mejorar la descripción/foto, ofrecer devolución gratuita</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 px-4 py-3">Mal trato recibido</td>
            <td class="border border-slate-200 px-4 py-3">"La dependienta fue maleducada"</td>
            <td class="border border-slate-200 px-4 py-3">Investigar internamente, disculparse sinceramente, ofrecer compensación, formar al personal</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Manejo de Crisis en Redes Sociales</span>
    </div>
    <p>Si una queja se hace pública en redes:</p>
    <ol class="list-decimal pl-6 space-y-2 mt-2">
        <li>Responder rápidamente (máximo 1 hora)</li>
        <li>Disculparse públicamente de forma sincera</li>
        <li>Ofrecer llevar la conversación a privado (DM, email, teléfono)</li>
        <li>Resolver el problema de forma satisfactoria</li>
        <li>Pedir al cliente que actualice su comentario si quedó satisfecho</li>
        <li><strong>NUNCA</strong> eliminar comentarios negativos (empeora la situación)</li>
    </ol>
</div>

<h3>7.3. Medición de Satisfacción</h3>

<h4>7.3.1. KPIs de Atención al Cliente</h4>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 px-4 py-3 text-left">KPI</th>
            <th class="border border-slate-200 px-4 py-3 text-left">Fórmula</th>
            <th class="border border-slate-200 px-4 py-3 text-left">Objetivo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 px-4 py-3">NPS (Net Promoter Score)</td>
            <td class="border border-slate-200 px-4 py-3">% Promotores - % Detractores</td>
            <td class="border border-slate-200 px-4 py-3">> 50 (excelente), > 30 (bueno)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 px-4 py-3">CSAT (Customer Satisfaction)</td>
            <td class="border border-slate-200 px-4 py-3">Clientes satisfechos / Total respuestas</td>
            <td class="border border-slate-200 px-4 py-3">> 80%</td>
        </tr>
        <tr>
            <td class="border border-slate-200 px-4 py-3">Tiempo de Respuesta</td>
            <td class="border border-slate-200 px-4 py-3">Suma tiempos / Número de consultas</td>
            <td class="border border-slate-200 px-4 py-3">< 4 horas (redes), < 24 horas (email)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 px-4 py-3">Tasa de Resolución</td>
            <td class="border border-slate-200 px-4 py-3">Consultas resueltas / Total consultas</td>
            <td class="border border-slate-200 px-4 py-3">> 90%</td>
        </tr>
    </tbody>
</table>

<h4>7.3.2. Encuesta NPS</h4>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📊</span>
        <span>La Pregunta NPS</span>
    </div>
    <pre class="text-sm overflow-x-auto bg-slate-100 p-4 rounded-lg">"En una escala del 0 al 10, ¿qué probabilidades hay de que recomiendes [COMERCIO] a un amigo o familiar?"</pre>
    <p class="mt-3 text-sm"><strong>Clasificación:</strong></p>
    <ul class="list-disc pl-6 space-y-1 text-sm">
        <li><strong>9-10 (Promotores):</strong> Clientes leales que recomiendan activamente</li>
        <li><strong>7-8 (Neutros):</strong> Satisfechos pero no entusiastas</li>
        <li><strong>0-6 (Detractores):</strong> Insatisfechos, pueden dañar la marca</li>
    </ul>
</div>

<h3>7.4. Programa de Fidelización</h3>

<h4>7.4.1. Elementos Clave</h4>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="callout callout-success">
        <div class="callout-title">
            <span>🎁</span>
            <span>Sistema de Puntos</span>
        </div>
        <p class="text-sm">1€ = 1 punto. Canjear por descuentos o productos.</p>
    </div>
    <div class="callout callout-success">
        <div class="callout-title">
            <span>🏆</span>
            <span>Niveles/VIP</span>
        </div>
        <p class="text-sm">Bronce, Plata, Oro según gasto acumulado. Beneficios escalonados.</p>
    </div>
    <div class="callout callout-success">
        <div class="callout-title">
            <span>🎂</span>
            <span>Recompensas Personales</span>
        </div>
        <p class="text-sm">Descuento especial en cumpleaños, aniversario como cliente.</p>
    </div>
    <div class="callout callout-success">
        <div class="callout-title">
            <span>⭐</span>
            <span>Acceso Anticipado</span>
        </div>
        <p class="text-sm">Primero en ver nuevas colecciones, ventas privadas.</p>
    </div>
</div>

<h4>7.4.2. Ejemplo de Programa</h4>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 px-4 py-3 text-left">Nivel</th>
            <th class="border border-slate-200 px-4 py-3 text-left">Requisito</th>
            <th class="border border-slate-200 px-4 py-3 text-left">Beneficios</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 px-4 py-3 font-semibold">🥉 Bronce</td>
            <td class="border border-slate-200 px-4 py-3">Registro gratuito</td>
            <td class="border border-slate-200 px-4 py-3">1 punto por euro, newsletter exclusiva</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 px-4 py-3 font-semibold">🥈 Plata</td>
            <td class="border border-slate-200 px-4 py-3">+300€ gasto anual</td>
            <td class="border border-slate-200 px-4 py-3">1.5 puntos por euro, envío gratis >50€, descuento cumpleaños 15%</td>
        </tr>
        <tr>
            <td class="border border-slate-200 px-4 py-3 font-semibold">🥇 Oro</td>
            <td class="border border-slate-200 px-4 py-3">+800€ gasto anual</td>
            <td class="border border-slate-200 px-4 py-3">2 puntos por euro, envío siempre gratis, acceso VIP a ventas privadas, regalo aniversario</td>
        </tr>
    </tbody>
</table>

<h3>7.5. CRM para Pequeños Comercios</h3>

<p>Un CRM (Customer Relationship Management) ayuda a gestionar las relaciones con clientes:</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
        <h5 class="font-bold text-slate-800 mb-2">📇 HubSpot CRM</h5>
        <p class="text-sm text-slate-600">Gratuito, ideal para empezar. Gestiona contactos, emails y deals.</p>
        <p class="text-xs text-slate-400 mt-2">Gratis (versión básica)</p>
    </div>
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
        <h5 class="font-bold text-slate-800 mb-2">📱 Zoho CRM</h5>
        <p class="text-sm text-slate-600">Completo y escalable. Automatización de ventas y marketing.</p>
        <p class="text-xs text-slate-400 mt-2">Desde 14€/usuario/mes</p>
    </div>
    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
        <h5 class="font-bold text-slate-800 mb-2">📊 Google Sheets</h5>
        <p class="text-sm text-slate-600">Solución manual pero efectiva para volúmenes bajos de clientes.</p>
        <p class="text-xs text-slate-400 mt-2">Gratuito</p>
    </div>
</div>

<h4>7.5.1. Datos a Registrar por Cliente</h4>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 px-4 py-3 text-left">Categoría</th>
            <th class="border border-slate-200 px-4 py-3 text-left">Datos</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 px-4 py-3 font-semibold">Básicos</td>
            <td class="border border-slate-200 px-4 py-3">Nombre, email, teléfono, fecha de nacimiento</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 px-4 py-3 font-semibold">Preferencias</td>
            <td class="border border-slate-200 px-4 py-3">Categorías favoritas, tallas, colores preferidos</td>
        </tr>
        <tr>
            <td class="border border-slate-200 px-4 py-3 font-semibold">Historial</td>
            <td class="border border-slate-200 px-4 py-3">Compras anteriores, importe medio, frecuencia</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 px-4 py-3 font-semibold">Interacciones</td>
            <td class="border border-slate-200 px-4 py-3">Consultas realizadas, quejas, feedback</td>
        </tr>
    </tbody>
</table>

<hr class="my-8">

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>📝</span>
        <span>Tu Tarea: Plan de Gestión Comercial</span>
    </div>
    <p>Para el comercio elegido, desarrolla:</p>
    <ol class="list-decimal pl-6 space-y-2 mt-2">
        <li>Mapa del customer journey (desde que descubre la marca hasta que compra y repite)</li>
        <li>Protocolo de atención al cliente específico (tono, tiempos, canales)</li>
        <li>Plantilla de respuesta para 5 situaciones comunes</li>
        <li>Diseño de un programa de fidelización (niveles, beneficios, condiciones)</li>
        <li>Estructura de CRM a implementar (qué datos registrar y cómo usarlos)</li>
    </ol>
</div>
`;
