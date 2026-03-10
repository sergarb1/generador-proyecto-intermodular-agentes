window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.requisitos = `
<div class="space-y-6">
    <h3>Requisitos Funcionales</h3>

    <p>
        Los requisitos funcionales describen las capacidades que debe ofrecer el sistema. 
        Se organizan por módulos funcionales:
    </p>

    <h4>RF-1: Gestión de Usuarios y Autenticación</h4>
    <table class="w-full border-collapse my-6 text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="border border-slate-300 px-4 py-3 text-left w-24">ID</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Descripción</th>
                <th class="border border-slate-300 px-4 py-3 text-center">Prioridad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-1.1</td>
                <td class="border border-slate-300 px-4 py-3">Registro de usuarios con email y contraseña</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Alta</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-1.2</td>
                <td class="border border-slate-300 px-4 py-3">Login con JWT (JSON Web Tokens)</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Alta</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-1.3</td>
                <td class="border border-slate-300 px-4 py-3">Recuperación de contraseña vía email</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Media</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-1.4</td>
                <td class="border border-slate-300 px-4 py-3">Autenticación OAuth2 (Google, GitHub)</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Baja</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-1.5</td>
                <td class="border border-slate-300 px-4 py-3">Gestión de roles (Admin, Organizador, Asistente)</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Alta</td>
            </tr>
        </tbody>
    </table>

    <h4>RF-2: Gestión de Eventos</h4>
    <table class="w-full border-collapse my-6 text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="border border-slate-300 px-4 py-3 text-left w-24">ID</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Descripción</th>
                <th class="border border-slate-300 px-4 py-3 text-center">Prioridad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-2.1</td>
                <td class="border border-slate-300 px-4 py-3">Creación de eventos con título, descripción, fecha, ubicación</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Alta</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-2.2</td>
                <td class="border border-slate-300 px-4 py-3">Subida de imágenes y banner personalizado</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Alta</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-2.3</td>
                <td class="border border-slate-300 px-4 py-3">Configuración de múltiples tipos de entrada (General, VIP, Early Bird)</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Alta</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-2.4</td>
                <td class="border border-slate-300 px-4 py-3">Límite de aforo por tipo de entrada</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Alta</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-2.5</td>
                <td class="border border-slate-300 px-4 py-3">Edición y cancelación de eventos</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Media</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-2.6</td>
                <td class="border border-slate-300 px-4 py-3">Clonación de eventos recurrentes</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Baja</td>
            </tr>
        </tbody>
    </table>

    <h4>RF-3: Venta y Gestión de Entradas</h4>
    <table class="w-full border-collapse my-6 text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="border border-slate-300 px-4 py-3 text-left w-24">ID</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Descripción</th>
                <th class="border border-slate-300 px-4 py-3 text-center">Prioridad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-3.1</td>
                <td class="border border-slate-300 px-4 py-3">Búsqueda y filtrado de eventos públicos</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Alta</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-3.2</td>
                <td class="border border-slate-300 px-4 py-3">Carrito de compra con múltiples entradas</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Alta</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-3.3</td>
                <td class="border border-slate-300 px-4 py-3">Integración con pasarela de pago (Stripe)</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Alta</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-3.4</td>
                <td class="border border-slate-300 px-4 py-3">Generación de entradas QR únicas</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Alta</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-3.5</td>
                <td class="border border-slate-300 px-4 py-3">Envío de entradas por email con PDF adjunto</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Alta</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-3.6</td>
                <td class="border border-slate-300 px-4 py-3">Sistema de reembolso parcial/total</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Media</td>
            </tr>
        </tbody>
    </table>

    <h4>RF-4: Check-in Presencial</h4>
    <table class="w-full border-collapse my-6 text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="border border-slate-300 px-4 py-3 text-left w-24">ID</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Descripción</th>
                <th class="border border-slate-300 px-4 py-3 text-center">Prioridad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-4.1</td>
                <td class="border border-slate-300 px-4 py-3">Escaneo de códigos QR con cámara del dispositivo</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Alta</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-4.2</td>
                <td class="border border-slate-300 px-4 py-3">Validación en tiempo real de entradas</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Alta</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-4.3</td>
                <td class="border border-slate-300 px-4 py-3">Registro de hora de entrada por asistente</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Media</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-4.4</td>
                <td class="border border-slate-300 px-4 py-3">Modo offline con sincronización posterior</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Baja</td>
            </tr>
        </tbody>
    </table>

    <h4>RF-5: Reporting y Analíticas</h4>
    <table class="w-full border-collapse my-6 text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="border border-slate-300 px-4 py-3 text-left w-24">ID</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Descripción</th>
                <th class="border border-slate-300 px-4 py-3 text-center">Prioridad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-5.1</td>
                <td class="border border-slate-300 px-4 py-3">Dashboard con ventas en tiempo real</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Alta</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-5.2</td>
                <td class="border border-slate-300 px-4 py-3">Exportación de datos a CSV/Excel</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Media</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-5.3</td>
                <td class="border border-slate-300 px-4 py-3">Gráficas de evolución de ventas</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Media</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">RF-5.4</td>
                <td class="border border-slate-300 px-4 py-3">Informe post-evento con métricas clave</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Baja</td>
            </tr>
        </tbody>
    </table>

    <h3>Requisitos No Funcionales</h3>

    <p>
        Los requisitos no funcionales definen las propiedades de calidad del sistema:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div class="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
            <h4 class="font-bold text-indigo-800 mb-3 flex items-center gap-2">
                <span>⚡</span> Rendimiento
            </h4>
            <ul class="text-sm text-indigo-700 space-y-2 mb-0">
                <li><strong>RNF-1:</strong> Tiempo de respuesta API &lt; 200ms (p95)</li>
                <li><strong>RNF-2:</strong> First Contentful Paint &lt; 1.5s en 4G</li>
                <li><strong>RNF-3:</strong> Soporte para 1000 usuarios concurrentes</li>
                <li><strong>RNF-4:</strong> Throughput mínimo de 100 req/segundo</li>
            </ul>
        </div>
        <div class="p-5 bg-green-50 rounded-xl border border-green-200">
            <h4 class="font-bold text-green-800 mb-3 flex items-center gap-2">
                <span>🔒</span> Seguridad
            </h4>
            <ul class="text-sm text-green-700 space-y-2 mb-0">
                <li><strong>RNF-5:</strong> Contraseñas hash con bcrypt (cost factor 12)</li>
                <li><strong>RNF-6:</strong> HTTPS obligatorio con TLS 1.3</li>
                <li><strong>RNF-7:</strong> Rate limiting: 100 req/min por IP</li>
                <li><strong>RNF-8:</strong> Sanitización de todos los inputs del usuario</li>
            </ul>
        </div>
        <div class="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 class="font-bold text-amber-800 mb-3 flex items-center gap-2">
                <span>📱</span> Usabilidad
            </h4>
            <ul class="text-sm text-amber-700 space-y-2 mb-0">
                <li><strong>RNF-9:</strong> Responsive design (mobile-first)</li>
                <li><strong>RNF-10:</strong> Accesibilidad WCAG 2.1 Nivel AA</li>
                <li><strong>RNF-11:</strong> Soporte multi-idioma (español/inglés)</li>
                <li><strong>RNF-12:</strong> Navegación intuitiva (máx. 3 clicks para acciones principales)</li>
            </ul>
        </div>
        <div class="p-5 bg-blue-50 rounded-xl border border-blue-200">
            <h4 class="font-bold text-blue-800 mb-3 flex items-center gap-2">
                <span>🔄</span> Disponibilidad
            </h4>
            <ul class="text-sm text-blue-700 space-y-2 mb-0">
                <li><strong>RNF-13:</strong> SLA 99.9% (tiempo de inactividad &lt; 8.76h/año)</li>
                <li><strong>RNF-14:</strong> Backup automático cada 24h</li>
                <li><strong>RNF-15:</strong> RTO &lt; 4h, RPO &lt; 1h</li>
                <li><strong>RNF-16:</strong> Monitoring 24/7 con alertas automáticas</li>
            </ul>
        </div>
    </div>

    <div class="callout callout-warning">
        <div class="callout-title">
            <span>⚠️</span> Actividad para el Alumnado
        </div>
        <p class="mb-0">
            <strong>Ejercicio de especificación:</strong> Para cada requisito funcional de prioridad "Alta", 
            elabora un diagrama de secuencia UML que muestre la interacción entre los componentes del sistema. 
            Utiliza herramientas como draw.io o Lucidchart. Incluye al menos 3 escenarios alternativos 
            (ej: pago fallido, entrada agotada, sesión expirada).
        </p>
    </div>
</div>
`;
