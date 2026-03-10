window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["implementacion"] = `

    <div class="callout callout-info">
        <div class="callout-title"><span>💻</span><span>¿Qué es la Implementación?</span></div>
        <p class="text-sm">Guía paso a paso para crear y configurar la tienda online usando WooCommerce.</p>
    </div>

    <h3>6.1. 📋 Planificación de la Implementación</h3>

    <p>
        Seguimos una metodología estructurada en fases para asegurar que todos los pasos se completan correctamente:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
        <div class="p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">
            <div class="text-2xl font-bold text-blue-600 mb-1">Fase 1</div>
            <p class="text-xs text-slate-600 mb-0">Configuración</p>
        </div>
        <div class="p-4 bg-green-50 rounded-xl border border-green-100 text-center">
            <div class="text-2xl font-bold text-green-600 mb-1">Fase 2</div>
            <p class="text-xs text-slate-600 mb-0">Productos</p>
        </div>
        <div class="p-4 bg-purple-50 rounded-xl border border-purple-100 text-center">
            <div class="text-2xl font-bold text-purple-600 mb-1">Fase 3</div>
            <p class="text-xs text-slate-600 mb-0">Pagos</p>
        </div>
        <div class="p-4 bg-orange-50 rounded-xl border border-orange-100 text-center">
            <div class="text-2xl font-bold text-orange-600 mb-1">Fase 4</div>
            <p class="text-xs text-slate-600 mb-0">Lanzamiento</p>
        </div>
    </div>

    <h3>6.2. 🔧 Fase 1: Configuración Inicial</h3>

    <div class="callout callout-info">
        <div class="callout-title"><span>📦</span><span>Paso 1.1 - Contratar Hosting y Dominio</span></div>
        <ul class="text-sm space-y-2 mb-0">
            <li>• Elige un proveedor de hosting (SiteGround, Webempresa, Raiola...)</li>
            <li>• Registra el dominio <strong>ec omarketvalencia.es</strong> (o similar)</li>
            <li>• Instala WordPress desde el panel de control del hosting</li>
            <li>• Accede al panel de administración: <code>tudominio.es/wp-admin</code></li>
        </ul>
    </div>

    <div class="callout callout-info">
        <div class="callout-title"><span>🛒</span><span>Paso 1.2 - Instalar WooCommerce</span></div>
        <ul class="text-sm space-y-2 mb-0">
            <li>• Ve a <strong>Plugins → Añadir nuevo</strong></li>
            <li>• Busca "WooCommerce"</li>
            <li>• Haz clic en "Instalar ahora" y luego "Activar"</li>
            <li>• Completa el asistente de configuración inicial</li>
        </ul>
    </div>

    <div class="callout callout-info">
        <div class="callout-title"><span>🎨</span><span>Paso 1.3 - Elegir e Instalar Tema</span></div>
        <ul class="text-sm space-y-2 mb-0">
            <li>• Ve a <strong>Apariencia → Temas → Añadir nuevo</strong></li>
            <li>• Busca temas gratuitos como "Astra", "OceanWP" o "Storefront"</li>
            <li>• Instala y activa el tema elegido</li>
            <li>• Personaliza colores y logo en <strong>Apariencia → Personalizar</strong></li>
        </ul>
    </div>

    <h3>6.3. 📦 Fase 2: Carga de Productos</h3>

    <p>
        Cada producto debe tener información completa y atractiva para el cliente:
    </p>

    <div class="overflow-x-auto my-8">
        <table class="w-full text-sm">
            <thead>
                <tr class="border-b-2 border-slate-200 bg-slate-50">
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Campo</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Descripción</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Ejemplo</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 font-medium">Nombre</td>
                    <td class="py-3 px-4 text-slate-600">Título claro y descriptivo</td>
                    <td class="py-3 px-4 text-slate-600">"Aceite de Oliva Virgen Extra 500ml"</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 font-medium">Descripción</td>
                    <td class="py-3 px-4 text-slate-600">Detalles del producto, beneficios</td>
                    <td class="py-3 px-4 text-slate-600">"Aceite 100% ecológico de..."</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 font-medium">Precio</td>
                    <td class="py-3 px-4 text-slate-600">Precio final con IVA</td>
                    <td class="py-3 px-4 text-slate-600">8,95€</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 font-medium">Imágenes</td>
                    <td class="py-3 px-4 text-slate-600">Fotos de calidad del producto</td>
                    <td class="py-3 px-4 text-slate-600">Mínimo 3 fotos</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 font-medium">Categoría</td>
                    <td class="py-3 px-4 text-slate-600">Sección donde se clasifica</td>
                    <td class="py-3 px-4 text-slate-600">Alimentación → Aceites</td>
                </tr>
                <tr>
                    <td class="py-3 px-4 font-medium">Stock</td>
                    <td class="py-3 px-4 text-slate-600">Cantidad disponible</td>
                    <td class="py-3 px-4 text-slate-600">50 unidades</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="callout callout-warning">
        <div class="callout-title"><span>📸</span><span>Consejos para las Fotos</span></div>
        <ul class="text-sm space-y-2 mb-0">
            <li>• Usa luz natural, nunca flash directo</li>
            <li>• Fondo blanco o neutro para productos</li>
            <li>• Muestra el producto desde varios ángulos</li>
            <li>• Incluye una foto del producto en uso/contexto</li>
            <li>• Tamaño recomendado: mínimo 800x800 píxeles</li>
        </ul>
    </div>

    <h3>6.4. 💳 Fase 3: Configuración de Pagos y Envíos</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <h4 class="!mt-0 !text-blue-700">💳 Métodos de Pago</h4>
            <ul class="text-sm text-slate-600 space-y-2 mb-0">
                <li>• <strong>Transferencia bancaria:</strong> Sin comisiones, pero más lento</li>
                <li>• <strong>Contra reembolso:</strong> Popular en España, coste adicional</li>
                <li>• <strong>Tarjeta (Stripe):</strong> Rápido y seguro, ~1.4% + 0.25€</li>
                <li>• <strong>PayPal:</strong> Muy usado, ~3.4% + 0.35€</li>
            </ul>
        </div>
        <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
            <h4 class="!mt-0 !text-green-700">📦 Métodos de Envío</h4>
            <ul class="text-sm text-slate-600 space-y-2 mb-0">
                <li>• <strong>Recogida en tienda:</strong> Gratis</li>
                <li>• <strong>Envío estándar (24-48h):</strong> 4,95€</li>
                <li>• <strong>Envío urgente (24h):</strong> 7,95€</li>
                <li>• <strong>Envío gratis:</strong> Pedidos superiores a 50€</li>
            </ul>
        </div>
    </div>

    <h3>6.5. 🚀 Fase 4: Pruebas y Lanzamiento</h3>

    <p>
        Antes de abrir la tienda al público, realiza pruebas exhaustivas:
    </p>

    <div class="callout callout-success">
        <div class="callout-title"><span>✅</span><span>Checklist de Lanzamiento</span></div>
        <ul class="text-sm space-y-2 mb-0">
            <li class="flex gap-2"><input type="checkbox" class="mt-1"> Todos los productos cargados con fotos</li>
            <li class="flex gap-2"><input type="checkbox" class="mt-1"> Precios y stocks correctos</li>
            <li class="flex gap-2"><input type="checkbox" class="mt-1"> Formas de pago configuradas y probadas</li>
            <li class="flex gap-2"><input type="checkbox" class="mt-1"> Gastos de envío correctamente calculados</li>
            <li class="flex gap-2"><input type="checkbox" class="mt-1"> Emails de confirmación se envían</li>
            <li class="flex gap-2"><input type="checkbox" class="mt-1"> Web se ve bien en móvil y tablet</li>
            <li class="flex gap-2"><input type="checkbox" class="mt-1"> Páginas legales (privacidad, cookies) creadas</li>
            <li class="flex gap-2"><input type="checkbox" class="mt-1"> Formulario de contacto funciona</li>
        </ul>
    </div>

    <div class="callout callout-warning">
        <div class="callout-title"><span>🧪</span><span>Prueba Real de Compra</span></div>
        <p class="text-sm mb-0">Realiza un pedido de prueba completo (puedes usar el modo sandbox de PayPal o una transferencia real pequeña) para verificar que todo funciona correctamente.</p>
    </div>
`;
