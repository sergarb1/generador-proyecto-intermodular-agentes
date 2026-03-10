window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["requisitos"] = `

    <div class="callout callout-info">
        <div class="callout-title"><span>📋</span><span>¿Qué son los Requisitos?</span></div>
        <p class="text-sm">Definimos qué debe hacer la tienda online y qué necesita el cliente para que funcione correctamente.</p>
    </div>

    <h3>4.1. 🎯 Requisitos Funcionales</h3>

    <p>
        Los requisitos funcionales describen las funciones que debe ofrecer la tienda online:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <h4 class="!mt-0 !text-blue-700">🛒 Gestión de Productos</h4>
            <ul class="text-sm text-slate-600 space-y-2 mb-0">
                <li>• Catálogo con fotos y descripciones</li>
                <li>• Clasificación por categorías</li>
                <li>• Control de stock disponible</li>
                <li>• Precios con IVA incluido</li>
            </ul>
        </div>
        <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
            <h4 class="!mt-0 !text-green-700">👤 Gestión de Clientes</h4>
            <ul class="text-sm text-slate-600 space-y-2 mb-0">
                <li>• Registro de nuevos usuarios</li>
                <li>• Inicio de sesión seguro</li>
                <li>• Historial de pedidos</li>
                <li>• Datos de envío guardados</li>
            </ul>
        </div>
        <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
            <h4 class="!mt-0 !text-purple-700">💳 Procesos de Compra</h4>
            <ul class="text-sm text-slate-600 space-y-2 mb-0">
                <li>• Carrito de la compra</li>
                <li>• Múltiples formas de pago</li>
                <li>• Cálculo de gastos de envío</li>
                <li>• Confirmación por email</li>
            </ul>
        </div>
        <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
            <h4 class="!mt-0 !text-orange-700">📞 Atención al Cliente</h4>
            <ul class="text-sm text-slate-600 space-y-2 mb-0">
                <li>• Formulario de contacto</li>
                <li>• Preguntas frecuentes (FAQ)</li>
                <li>• Política de devoluciones</li>
                <li>• Chat de soporte (opcional)</li>
            </ul>
        </div>
    </div>

    <h3>4.2. 🔒 Requisitos No Funcionales</h3>

    <p>
        Los requisitos no funcionionales describen cómo debe comportarse el sistema:
    </p>

    <div class="overflow-x-auto my-8">
        <table class="w-full text-sm">
            <thead>
                <tr class="border-b-2 border-slate-200 bg-slate-50">
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Característica</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Requisito</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Prioridad</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4">🔐 Seguridad</td>
                    <td class="py-3 px-4 text-slate-600">Certificado SSL, pagos encriptados</td>
                    <td class="py-3 px-4"><span class="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">ALTA</span></td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4">⚡ Rendimiento</td>
                    <td class="py-3 px-4 text-slate-600">Carga de páginas en menos de 3 segundos</td>
                    <td class="py-3 px-4"><span class="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">MEDIA</span></td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4">📱 Adaptabilidad</td>
                    <td class="py-3 px-4 text-slate-600">Diseño responsive (móvil, tablet, desktop)</td>
                    <td class="py-3 px-4"><span class="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">ALTA</span></td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4">🌐 Disponibilidad</td>
                    <td class="py-3 px-4 text-slate-600">Accesible 24/7, excepto mantenimiento</td>
                    <td class="py-3 px-4"><span class="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">MEDIA</span></td>
                </tr>
                <tr>
                    <td class="py-3 px-4">♿ Accesibilidad</td>
                    <td class="py-3 px-4 text-slate-600">Navegación sencilla, textos legibles</td>
                    <td class="py-3 px-4"><span class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">BAJA</span></td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3>4.3. 📦 Catálogo de Productos Inicial</h3>

    <p>
        EcoMarket Valencia contará con las siguientes categorías de productos. Completa con al menos 5 productos por categoría:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
            <div class="text-3xl mb-3">🥗</div>
            <h4 class="!mt-0 !text-green-700 !text-sm">Alimentación</h4>
            <ul class="text-sm text-slate-600 space-y-1 mb-0">
                <li>• [Producto 1]</li>
                <li>• [Producto 2]</li>
                <li>• [Producto 3]</li>
                <li>• [Producto 4]</li>
                <li>• [Producto 5]</li>
            </ul>
        </div>
        <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <div class="text-3xl mb-3">🧴</div>
            <h4 class="!mt-0 !text-blue-700 !text-sm">Cosmética</h4>
            <ul class="text-sm text-slate-600 space-y-1 mb-0">
                <li>• [Producto 1]</li>
                <li>• [Producto 2]</li>
                <li>• [Producto 3]</li>
                <li>• [Producto 4]</li>
                <li>• [Producto 5]</li>
            </ul>
        </div>
        <div class="p-6 bg-amber-50 rounded-2xl border border-amber-100">
            <div class="text-3xl mb-3">🏠</div>
            <h4 class="!mt-0 !text-amber-700 !text-sm">Hogar</h4>
            <ul class="text-sm text-slate-600 space-y-1 mb-0">
                <li>• [Producto 1]</li>
                <li>• [Producto 2]</li>
                <li>• [Producto 3]</li>
                <li>• [Producto 4]</li>
                <li>• [Producto 5]</li>
            </ul>
        </div>
    </div>

    <div class="callout callout-warning">
        <div class="callout-title"><span>📝</span><span>Tu Tarea</span></div>
        <p class="text-sm mb-0">Investiga productos ecológicos reales que se puedan comercializar. Incluye nombre, precio aproximado y proveedor potencial.</p>
    </div>

    <h3>4.4. 🔐 Protección de Datos (RGPD)</h3>

    <p>
        La tienda online debe cumplir con la normativa de protección de datos europea:
    </p>

    <div class="callout callout-info">
        <div class="callout-title"><span>📜</span><span>Documentos Obligatorios</span></div>
        <ul class="text-sm space-y-2 mb-0">
            <li>• <strong>Política de Privacidad:</strong> Informa cómo se tratan los datos personales</li>
            <li>• <strong>Política de Cookies:</strong> Explica qué cookies se usan y por qué</li>
            <li>• <strong>Términos y Condiciones:</strong> Establece las reglas de compra y uso</li>
            <li>• <strong>Política de Devoluciones:</strong> Describe el proceso de devoluciones (14 días por ley)</li>
        </ul>
    </div>

    <div class="callout callout-success">
        <div class="callout-title"><span>✅</span><span>Checklist RGPD</span></div>
        <ul class="text-sm space-y-2 mb-0">
            <li class="flex gap-2"><input type="checkbox" class="mt-1"> Casillas de aceptación explícita (no premarcadas)</li>
            <li class="flex gap-2"><input type="checkbox" class="mt-1"> Posibilidad de descargar datos personales</li>
            <li class="flex gap-2"><input type="checkbox" class="mt-1"> Opción de eliminar cuenta y datos</li>
            <li class="flex gap-2"><input type="checkbox" class="mt-1"> Conexión segura HTTPS en todo el sitio</li>
        </ul>
    </div>
`;
