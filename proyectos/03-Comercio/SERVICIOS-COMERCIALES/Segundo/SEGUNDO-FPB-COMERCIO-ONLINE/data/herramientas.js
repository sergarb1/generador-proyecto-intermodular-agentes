window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["herramientas"] = `

    <div class="callout callout-info">
        <div class="callout-title"><span>🛠️</span><span>¿Qué son las Herramientas de Apoyo?</span></div>
        <p class="text-sm">Listado de software, plataformas y recursos utilizados para desarrollar el proyecto.</p>
    </div>

    <h3>8.1. 💻 Herramientas Principales</h3>

    <p>
        Estas son las herramientas esenciales para crear y gestionar la tienda online:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
            <div class="flex items-center gap-3 mb-4">
                <div class="text-3xl">🌐</div>
                <div>
                    <h4 class="!mt-0 !text-purple-700 !text-sm !mb-1">WordPress</h4>
                    <p class="text-xs text-slate-500 mb-0">Gestor de contenidos (CMS)</p>
                </div>
            </div>
            <p class="text-sm text-slate-600 mb-3">Plataforma gratuita para crear sitios web. Fácil de usar y con gran comunidad de soporte.</p>
            <a href="https://wordpress.org" target="_blank" class="text-xs text-purple-600 font-medium hover:underline">wordpress.org →</a>
        </div>

        <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
            <div class="flex items-center gap-3 mb-4">
                <div class="text-3xl">🛒</div>
                <div>
                    <h4 class="!mt-0 !text-green-700 !text-sm !mb-1">WooCommerce</h4>
                    <p class="text-xs text-slate-500 mb-0">Plugin de e-commerce</p>
                </div>
            </div>
            <p class="text-sm text-slate-600 mb-3">Convierte WordPress en una tienda online completa. Gratuito y muy flexible.</p>
            <a href="https://woocommerce.com" target="_blank" class="text-xs text-green-600 font-medium hover:underline">woocommerce.com →</a>
        </div>

        <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <div class="flex items-center gap-3 mb-4">
                <div class="text-3xl">🎨</div>
                <div>
                    <h4 class="!mt-0 !text-blue-700 !text-sm !mb-1">Canva</h4>
                    <p class="text-xs text-slate-500 mb-0">Diseño gráfico online</p>
                </div>
            </div>
            <p class="text-sm text-slate-600 mb-3">Herramienta gratuita para crear banners, logos y gráficos para la web y redes sociales.</p>
            <a href="https://canva.com" target="_blank" class="text-xs text-blue-600 font-medium hover:underline">canva.com →</a>
        </div>

        <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
            <div class="flex items-center gap-3 mb-4">
                <div class="text-3xl">📸</div>
                <div>
                    <h4 class="!mt-0 !text-orange-700 !text-sm !mb-1">TinyPNG</h4>
                    <p class="text-xs text-slate-500 mb-0">Optimización de imágenes</p>
                </div>
            </div>
            <p class="text-sm text-slate-600 mb-3">Comprime imágenes sin perder calidad para que la web cargue más rápido.</p>
            <a href="https://tinypng.com" target="_blank" class="text-xs text-orange-600 font-medium hover:underline">tinypng.com →</a>
        </div>
    </div>

    <h3>8.2. 💳 Pasarelas de Pago</h3>

    <div class="overflow-x-auto my-8">
        <table class="w-full text-sm">
            <thead>
                <tr class="border-b-2 border-slate-200 bg-slate-50">
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Plataforma</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Tipo</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Comisiones</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Ventajas</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 font-medium">💙 Stripe</td>
                    <td class="py-3 px-4 text-slate-600">Tarjeta</td>
                    <td class="py-3 px-4 text-slate-600">1.4% + 0.25€</td>
                    <td class="py-3 px-4 text-slate-600">Fácil integración, seguro</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 font-medium">🅿️ PayPal</td>
                    <td class="py-3 px-4 text-slate-600">Monedero digital</td>
                    <td class="py-3 px-4 text-slate-600">3.4% + 0.35€</td>
                    <td class="py-3 px-4 text-slate-600">Muy conocido, confianza</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 font-medium">🏦 Transferencia</td>
                    <td class="py-3 px-4 text-slate-600">Bancaria</td>
                    <td class="py-3 px-4 text-slate-600">0€</td>
                    <td class="py-3 px-4 text-slate-600">Sin comisiones, pero lento</td>
                </tr>
                <tr>
                    <td class="py-3 px-4 font-medium">💵 Contra reembolso</td>
                    <td class="py-3 px-4 text-slate-600">Efectivo</td>
                    <td class="py-3 px-4 text-slate-600">~2€ por envío</td>
                    <td class="py-3 px-4 text-slate-600">Popular en España</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3>8.3. 📊 Herramientas de Análisis</h3>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <div class="text-3xl mb-3">📈</div>
            <h4 class="!mt-0 !text-blue-700 !text-sm">Google Analytics</h4>
            <p class="text-xs text-slate-600 mb-3">Analiza el tráfico de tu web: visitantes, páginas vistas, origen del tráfico...</p>
            <a href="https://analytics.google.com" target="_blank" class="text-xs text-blue-600 font-medium hover:underline">analytics.google.com →</a>
        </div>
        <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
            <div class="text-3xl mb-3">🔍</div>
            <h4 class="!mt-0 !text-green-700 !text-sm">Google Search Console</h4>
            <p class="text-xs text-slate-600 mb-3">Monitoriza el posicionamiento en Google y errores de indexación.</p>
            <a href="https://search.google.com/search-console" target="_blank" class="text-xs text-green-600 font-medium hover:underline">search.google.com →</a>
        </div>
        <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
            <div class="text-3xl mb-3">🔥</div>
            <h4 class="!mt-0 !text-purple-700 !text-sm">Hotjar (Opcional)</h4>
            <p class="text-xs text-slate-600 mb-3">Mapas de calor para ver cómo interactúan los usuarios con tu web.</p>
            <a href="https://hotjar.com" target="_blank" class="text-xs text-purple-600 font-medium hover:underline">hotjar.com →</a>
        </div>
    </div>

    <h3>8.4. 📱 Redes Sociales y Marketing</h3>

    <p>
        Herramientas para promocionar la tienda online:
    </p>

    <div class="overflow-x-auto my-8">
        <table class="w-full text-sm">
            <thead>
                <tr class="border-b-2 border-slate-200 bg-slate-50">
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Herramienta</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Uso</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Precio</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 font-medium">📷 Instagram</td>
                    <td class="py-3 px-4 text-slate-600">Mostrar productos, stories, reels</td>
                    <td class="py-3 px-4 text-slate-600">Gratis</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 font-medium">📘 Facebook</td>
                    <td class="py-3 px-4 text-slate-600">Página de empresa, anuncios</td>
                    <td class="py-3 px-4 text-slate-600">Gratis (ads de pago)</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 font-medium">📌 Pinterest</td>
                    <td class="py-3 px-4 text-slate-600">Inspiración, productos visuales</td>
                    <td class="py-3 px-4 text-slate-600">Gratis</td>
                </tr>
                <tr>
                    <td class="py-3 px-4 font-medium">📧 Mailchimp</td>
                    <td class="py-3 px-4 text-slate-600">Email marketing, newsletters</td>
                    <td class="py-3 px-4 text-slate-600">Gratis hasta 500 contactos</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="callout callout-success">
        <div class="callout-title"><span>💡</span><span>Consejo de Experto</span></div>
        <p class="text-sm mb-0">No necesitas usar todas las herramientas a la vez. Empieza con lo básico (WordPress + WooCommerce + Instagram) y ve añadiendo según crezca tu negocio.</p>
    </div>
`;
