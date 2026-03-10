window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["diseno"] = `

    <div class="callout callout-info">
        <div class="callout-title"><span>🎨</span><span>¿Qué es el Diseño?</span></div>
        <p class="text-sm">Definimos la estructura visual, la navegación y la experiencia de usuario de la tienda online.</p>
    </div>

    <h3>5.1. ️ Arquitectura de la Información</h3>

    <p>
        La estructura de navegación debe ser clara y sencilla para que los clientes encuentren fácilmente lo que buscan:
    </p>

    <div class="bg-slate-50 rounded-2xl border border-slate-200 p-8 my-8">
        <div class="text-center">
            <div class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-bold mb-4">🏠 Inicio</div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            <div class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium">🥗 Alimentación</div>
            <div class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium">🧴 Cosmética</div>
            <div class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium">🏠 Hogar</div>
            <div class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium">📦 Packs</div>
            <div class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium">📞 Contacto</div>
        </div>
        <div class="text-center text-sm text-slate-500 mt-4">
            + Carrito | Mi Cuenta | Buscar
        </div>
    </div>

    <h3>5.2. 🎨 Identidad Visual</h3>

    <p>
        La identidad visual debe transmitir los valores de la marca: ecología, salud y proximidad:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div class="p-6 bg-green-50 rounded-2xl border border-green-200">
            <h4 class="!mt-0 !text-green-700 !text-sm">🎨 Paleta de Colores</h4>
            <div class="flex gap-2 mb-3">
                <div class="w-12 h-12 rounded-lg bg-green-600 shadow"></div>
                <div class="w-12 h-12 rounded-lg bg-green-400 shadow"></div>
                <div class="w-12 h-12 rounded-lg bg-amber-400 shadow"></div>
                <div class="w-12 h-12 rounded-lg bg-slate-800 shadow"></div>
            </div>
            <p class="text-xs text-slate-600 mb-0">Verde (naturaleza), Ámbar (calidez), Gris (profesionalidad)</p>
        </div>
        <div class="p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <h4 class="!mt-0 !text-blue-700 !text-sm">📝 Tipografía</h4>
            <div class="space-y-2">
                <div class="text-2xl font-bold">Plus Jakarta Sans</div>
                <div class="text-sm text-slate-600">Títulos y textos principales</div>
            </div>
            <p class="text-xs text-slate-600 mt-3 mb-0">Moderna, legible y profesional</p>
        </div>
        <div class="p-6 bg-purple-50 rounded-2xl border border-purple-200">
            <h4 class="!mt-0 !text-purple-700 !text-sm">🖼️ Estilo de Imágenes</h4>
            <p class="text-xs text-slate-600 mb-2">Fotografías naturales con:</p>
            <ul class="text-xs text-slate-600 space-y-1 mb-0">
                <li>• Luz natural</li>
                <li>• Fondos limpios</li>
                <li>• Productos en contexto</li>
            </ul>
        </div>
    </div>

    <h3>5.3. 📐 Wireframes (Bocetos)</h3>

    <p>
        Los wireframes son bocetos que muestran la disposición de los elementos en cada página:
    </p>

    <div class="callout callout-warning">
        <div class="callout-title"><span>📝</span><span>Tu Tarea de Diseño</span></div>
        <p class="text-sm mb-0">Dibuja en papel o usando herramientas digitales (Figma, Canva) el diseño de las siguientes páginas:</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="p-6 bg-white rounded-2xl border-2 border-dashed border-slate-300">
            <h4 class="!mt-0 !text-slate-700">🏠 Página de Inicio</h4>
            <div class="bg-slate-100 rounded-lg p-4 h-48 flex items-center justify-center text-slate-400 text-sm">
                [Dibuja aquí tu boceto]<br>
                - Logo y menú<br>
                - Banner principal<br>
                - Productos destacados<br>
                - Footer
            </div>
        </div>
        <div class="p-6 bg-white rounded-2xl border-2 border-dashed border-slate-300">
            <h4 class="!mt-0 !text-slate-700">📦 Página de Producto</h4>
            <div class="bg-slate-100 rounded-lg p-4 h-48 flex items-center justify-center text-slate-400 text-sm">
                [Dibuja aquí tu boceto]<br>
                - Foto del producto<br>
                - Nombre y precio<br>
                - Descripción<br>
                - Botón "Añadir"
            </div>
        </div>
    </div>

    <h3>5.4. 🛒 Proceso de Compra (User Journey)</h3>

    <p>
        El proceso de compra debe ser lo más sencillo posible para reducir el abandono del carrito:
    </p>

    <div class="overflow-x-auto my-8">
        <table class="w-full text-sm">
            <thead>
                <tr class="border-b-2 border-slate-200 bg-slate-50">
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Paso</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Acción del Usuario</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Elementos Necesarios</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 font-bold text-blue-600">1</td>
                    <td class="py-3 px-4 text-slate-600">Explora el catálogo</td>
                    <td class="py-3 px-4 text-slate-600">Buscador, filtros, categorías</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 font-bold text-blue-600">2</td>
                    <td class="py-3 px-4 text-slate-600">Selecciona productos</td>
                    <td class="py-3 px-4 text-slate-600">Ficha de producto, botón "Añadir"</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 font-bold text-blue-600">3</td>
                    <td class="py-3 px-4 text-slate-600">Revisa el carrito</td>
                    <td class="py-3 px-4 text-slate-600">Resumen, cantidades, total</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 font-bold text-blue-600">4</td>
                    <td class="py-3 px-4 text-slate-600">Introduce datos de envío</td>
                    <td class="py-3 px-4 text-slate-600">Formulario, validación</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 font-bold text-blue-600">5</td>
                    <td class="py-3 px-4 text-slate-600">Selecciona forma de pago</td>
                    <td class="py-3 px-4 text-slate-600">Tarjeta, PayPal, transferencia</td>
                </tr>
                <tr>
                    <td class="py-3 px-4 font-bold text-blue-600">6</td>
                    <td class="py-3 px-4 text-slate-600">Confirma el pedido</td>
                    <td class="py-3 px-4 text-slate-600">Resumen final, email de confirmación</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="callout callout-success">
        <div class="callout-title"><span>💡</span><span>Consejo de Experto</span></div>
        <p class="text-sm mb-0">Permite la compra como "invitado" sin obligar a registrarse. Esto reduce el abandono del carrito hasta un 30%.</p>
    </div>
`;
