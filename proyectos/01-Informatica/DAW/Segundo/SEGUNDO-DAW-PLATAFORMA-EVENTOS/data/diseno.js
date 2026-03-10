window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.diseno = `
<div class="space-y-6">
    <h3>Arquitectura del Sistema</h3>

    <p>
        EventHub Pro sigue una arquitectura <strong>cliente-servidor de 3 capas</strong> con separación 
        clara entre frontend, backend y persistencia. Esta decisión permite escalabilidad independiente 
        de cada capa y facilita el mantenimiento del código.
    </p>

    <div class="callout callout-info">
        <div class="callout-title">
            <span>🏗️</span> Patrón Arquitectónico
        </div>
        <p class="mb-0">
            Se implementa una variante de <strong>Arquitectura Hexagonal (Ports & Adapters)</strong> 
            donde el dominio de la aplicación (lógica de negocio) es independiente de frameworks, 
            bases de datos y interfaces de usuario. Esto permite testear el núcleo de negocio sin 
            dependencias externas y facilita cambios tecnológicos futuros.
        </p>
    </div>

    <h4>Diagrama de Arquitectura</h4>
    
    <div class="bg-slate-100 rounded-xl p-6 my-6 border border-slate-200">
        <pre class="text-xs md:text-sm overflow-x-auto text-slate-700"><code>
┌─────────────────────────────────────────────────────────────────────────┐
│                           CAPA DE PRESENTACIÓN                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│  │   Vue.js 3  │  │  Tailwind   │  │   Pinia     │  │  Vue Router │   │
│  │   SPA       │  │    CSS      │  │   Store     │  │             │   │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ HTTPS / JSON
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                            CAPA DE APLICACIÓN                           │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                      API Gateway (Express)                       │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐        │   │
│  │  │  Auth    │  │ Eventos  │  │  Tickets │  │  Users   │        │   │
│  │  │  Routes  │  │  Routes  │  │  Routes  │  │  Routes  │        │   │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘        │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                    Controladores (Controllers)                   │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                     Servicios (Business Logic)                   │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                    Repositorios (Data Access)                    │   │
│  └─────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ SQL / ORM
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                            CAPA DE DATOS                                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│  │ PostgreSQL  │  │   Redis     │  │     S3      │  │  FileStore  │   │
│  │   (RDS)     │  │   (Cache)   │  │  (Assets)   │  │   (Backups) │   │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
        </code></pre>
    </div>

    <h3>Diseño de la Base de Datos</h3>

    <p>
        El modelo de datos se ha diseñado siguiendo las formas normales de Codd para minimizar 
        redundancias y garantizar la integridad referencial. A continuación se presenta el 
        diagrama entidad-relación:
    </p>

    <div class="bg-slate-100 rounded-xl p-6 my-6 border border-slate-200 overflow-x-auto">
        <pre class="text-xs md:text-sm text-slate-700"><code>
┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐
│     usuarios     │       │  organizadores   │       │     eventos      │
├──────────────────┤       ├──────────────────┤       ├──────────────────┤
│ id (PK)          │       │ id (PK)          │       │ id (PK)          │
│ email            │◄──────│ usuario_id (FK)  │       │ organizador_id   │
│ password_hash    │       │ nombre           │       │ titulo           │
│ nombre           │       │ logo             │       │ descripcion      │
│ apellidos        │       │ web              │       │ fecha_inicio     │
│ avatar           │       │ creado_en        │       │ fecha_fin        │
│ rol              │       └──────────────────┘       │ ubicacion        │
│ activo           │                                  │ aforo_maximo     │
│ creado_en        │                                  │ estado           │
│ actualizado_en   │                                  │ banner_url       │
└──────────────────┘                                  │ creado_en        │
         │                                            └──────────────────┘
         │                                                     │
         │                    ┌──────────────────┐             │
         │                    │    entradas      │             │
         │                    ├──────────────────┤             │
         └───────────────────►│ id (PK)          │◄────────────┘
                              │ evento_id (FK)   │
                              │ usuario_id (FK)  │
                              │ tipo_entrada_id  │
                              │ precio           │
                              │ qr_code          │
                              │ estado           │
                              │ comprado_en      │
                              └──────────────────┘
                                       │
                                       │
                              ┌──────────────────┐
                              │  tipos_entrada   │
                              ├──────────────────┤
                              │ id (PK)          │
                              │ evento_id (FK)   │
                              │ nombre           │
                              │ precio           │
                              │ cantidad_max     │
                              │ cantidad_vendida │
                              │ venta_desde      │
                              │ venta_hasta      │
                              └──────────────────┘
        </code></pre>
    </div>

    <h4>Script SQL de Creación (Extracto)</h4>
    
    <div class="callout callout-warning">
        <div class="callout-title">
            <span>💻</span> Actividad para el Alumnado
        </div>
        <p class="mb-0">
            <strong>Ejercicio de implementación:</strong> Completa el script SQL de creación de 
            la base de datos incluyendo:
        </p>
        <ul class="mt-2 mb-0">
            <li>Constraints de NOT NULL donde sea apropiado</li>
            <li>Índices para las columnas de búsqueda frecuente (email, fecha_inicio, estado)</li>
            <li>Triggers para actualizar <code>cantidad_vendida</code> automáticamente</li>
            <li>Vistas materializadas para el dashboard de analíticas</li>
        </ul>
    </div>

    <h3>Diseño de la API REST</h3>

    <p>
        La API sigue los principios RESTful y el Richardson Maturity Model Level 2 (uso apropiado 
        de verbos HTTP y códigos de estado). Los endpoints principales son:
    </p>

    <table class="w-full border-collapse my-6 text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="border border-slate-300 px-4 py-3 text-left">Método</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Endpoint</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Descripción</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Auth</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><code class="bg-green-100 px-2 py-1 rounded">POST</code></td>
                <td class="border border-slate-300 px-4 py-3"><code>/api/auth/register</code></td>
                <td class="border border-slate-300 px-4 py-3">Registro de nuevo usuario</td>
                <td class="border border-slate-300 px-4 py-3">No</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><code class="bg-green-100 px-2 py-1 rounded">POST</code></td>
                <td class="border border-slate-300 px-4 py-3"><code>/api/auth/login</code></td>
                <td class="border border-slate-300 px-4 py-3">Autenticación y obtención de JWT</td>
                <td class="border border-slate-300 px-4 py-3">No</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><code class="bg-blue-100 px-2 py-1 rounded">GET</code></td>
                <td class="border border-slate-300 px-4 py-3"><code>/api/eventos</code></td>
                <td class="border border-slate-300 px-4 py-3">Listado de eventos públicos (paginado)</td>
                <td class="border border-slate-300 px-4 py-3">No</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><code class="bg-blue-100 px-2 py-1 rounded">GET</code></td>
                <td class="border border-slate-300 px-4 py-3"><code>/api/eventos/:id</code></td>
                <td class="border border-slate-300 px-4 py-3">Detalle de un evento específico</td>
                <td class="border border-slate-300 px-4 py-3">No</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><code class="bg-amber-100 px-2 py-1 rounded">POST</code></td>
                <td class="border border-slate-300 px-4 py-3"><code>/api/eventos</code></td>
                <td class="border border-slate-300 px-4 py-3">Crear nuevo evento</td>
                <td class="border border-slate-300 px-4 py-3">Sí (Organizador)</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><code class="bg-green-100 px-2 py-1 rounded">POST</code></td>
                <td class="border border-slate-300 px-4 py-3"><code>/api/tickets/comprar</code></td>
                <td class="border border-slate-300 px-4 py-3">Proceso de compra de entradas</td>
                <td class="border border-slate-300 px-4 py-3">Sí (Usuario)</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><code class="bg-blue-100 px-2 py-1 rounded">GET</code></td>
                <td class="border border-slate-300 px-4 py-3"><code>/api/usuarios/mis-entradas</code></td>
                <td class="border border-slate-300 px-4 py-3">Entradas compradas por el usuario</td>
                <td class="border border-slate-300 px-4 py-3">Sí (Usuario)</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><code class="bg-red-100 px-2 py-1 rounded">DELETE</code></td>
                <td class="border border-slate-300 px-4 py-3"><code>/api/eventos/:id</code></td>
                <td class="border border-slate-300 px-4 py-3">Cancelar evento (con validaciones)</td>
                <td class="border border-slate-300 px-4 py-3">Sí (Owner)</td>
            </tr>
        </tbody>
    </table>

    <h3>Diseño de Interfaces (UI/UX)</h3>

    <p>
        El diseño de interfaces sigue una metodología <strong>mobile-first</strong> con los 
        siguientes principios:
    </p>

    <ul>
        <li><strong>Consistencia:</strong> Sistema de diseño unificado con componentes reutilizables</li>
        <li><strong>Jerarquía visual:</strong> Uso de tamaño, color y espaciado para guiar la atención</li>
        <li><strong>Feedback inmediato:</strong> El usuario siempre sabe qué está ocurriendo (loaders, toasts, validaciones)</li>
        <li><strong>Prevención de errores:</strong> Validación en tiempo real y mensajes de error constructivos</li>
    </ul>

    <div class="callout callout-info">
        <div class="callout-title">
            <span>🎨</span> Guía de Estilos
        </div>
        <p class="mb-0">
            <strong>Paleta de colores:</strong>
        </p>
        <ul class="mt-2 mb-0">
            <li>Primario: <code>#2563eb</code> (Blue 600) - Acciones principales, enlaces</li>
            <li>Secundario: <code>#7c3aed</code> (Violet 600) - Elementos destacados</li>
            <li>Éxito: <code>#10b981</code> (Emerald 500) - Confirmaciones, estados positivos</li>
            <li>Advertencia: <code>#f59e0b</code> (Amber 500) - Alertas no críticas</li>
            <li>Error: <code>#ef4444</code> (Red 500) - Errores, acciones destructivas</li>
        </ul>
    </div>

    <div class="callout callout-warning">
        <div class="callout-title">
            <span>📐</span> Actividad para el Alumnado
        </div>
        <p class="mb-0">
            <strong>Ejercicio de diseño:</strong> Crea mockups de alta fidelidad en Figma para 
            las 5 pantallas principales (Home, Detalle Evento, Checkout, Dashboard Organizador, 
            Check-in). Aplica la guía de estilos proporcionada y realiza un test de usabilidad 
            con 3 usuarios. Documenta los cambios realizados tras el feedback.
        </p>
    </div>
</div>
`;
