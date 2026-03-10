window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["anexos"] = `

    <div class="callout callout-info">
        <div class="callout-title"><span>📎</span><span>¿Qué son los Anexos?</span></div>
        <p class="text-sm">Documentación adicional, plantillas y materiales complementarios del proyecto.</p>
    </div>

    <h3>11.1. 📄 Anexo A: Plantilla de Ficha de Producto</h3>

    <div class="bg-slate-50 rounded-2xl border border-slate-200 p-6 my-8">
        <h4 class="!mt-0 !text-slate-700 !text-sm mb-4">Plantilla para registrar cada producto</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
                <label class="block text-slate-600 mb-1"><strong>Nombre del producto:</strong></label>
                <div class="border-b border-slate-300 pb-2 text-slate-400 italic">[Escribe aquí]</div>
            </div>
            <div>
                <label class="block text-slate-600 mb-1"><strong>Categoría:</strong></label>
                <div class="border-b border-slate-300 pb-2 text-slate-400 italic">[Alimentación / Cosmética / Hogar]</div>
            </div>
            <div>
                <label class="block text-slate-600 mb-1"><strong>Precio (con IVA):</strong></label>
                <div class="border-b border-slate-300 pb-2 text-slate-400 italic">[00,00€]</div>
            </div>
            <div>
                <label class="block text-slate-600 mb-1"><strong>Stock inicial:</strong></label>
                <div class="border-b border-slate-300 pb-2 text-slate-400 italic">[Unidades]</div>
            </div>
            <div class="md:col-span-2">
                <label class="block text-slate-600 mb-1"><strong>Descripción corta:</strong></label>
                <div class="border-b border-slate-300 pb-2 text-slate-400 italic">[Máximo 150 caracteres]</div>
            </div>
            <div class="md:col-span-2">
                <label class="block text-slate-600 mb-1"><strong>Descripción completa:</strong></label>
                <div class="border border-slate-300 rounded-lg p-3 h-24 text-slate-400 italic">[Detalles del producto, ingredientes, origen, beneficios...]</div>
            </div>
        </div>
    </div>

    <h3>11.2. 📋 Anexo B: Checklist de Lanzamiento</h3>

    <div class="overflow-x-auto my-8">
        <table class="w-full text-sm">
            <thead>
                <tr class="border-b-2 border-slate-200 bg-slate-50">
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Tarea</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Responsable</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 text-slate-600">✅ Dominio y hosting contratados</td>
                    <td class="py-3 px-4 text-slate-600">Responsable proyecto</td>
                    <td class="py-3 px-4"><input type="checkbox"></td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 text-slate-600">✅ WordPress instalado</td>
                    <td class="py-3 px-4 text-slate-600">Responsable técnico</td>
                    <td class="py-3 px-4"><input type="checkbox"></td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 text-slate-600">✅ WooCommerce configurado</td>
                    <td class="py-3 px-4 text-slate-600">Responsable técnico</td>
                    <td class="py-3 px-4"><input type="checkbox"></td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 text-slate-600">✅ Tema instalado y personalizado</td>
                    <td class="py-3 px-4 text-slate-600">Diseñador</td>
                    <td class="py-3 px-4"><input type="checkbox"></td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 text-slate-600">✅ Productos cargados (mínimo 20)</td>
                    <td class="py-3 px-4 text-slate-600">Equipo comercial</td>
                    <td class="py-3 px-4"><input type="checkbox"></td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 text-slate-600">✅ Pasarelas de pago activadas</td>
                    <td class="py-3 px-4 text-slate-600">Responsable técnico</td>
                    <td class="py-3 px-4"><input type="checkbox"></td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 text-slate-600">✅ Gastos de envío configurados</td>
                    <td class="py-3 px-4 text-slate-600">Responsable logística</td>
                    <td class="py-3 px-4"><input type="checkbox"></td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 text-slate-600">✅ Páginas legales creadas</td>
                    <td class="py-3 px-4 text-slate-600">Responsable legal</td>
                    <td class="py-3 px-4"><input type="checkbox"></td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 text-slate-600">✅ Pedido de prueba realizado</td>
                    <td class="py-3 px-4 text-slate-600">Equipo completo</td>
                    <td class="py-3 px-4"><input type="checkbox"></td>
                </tr>
                <tr class="bg-green-50">
                    <td class="py-3 px-4 font-bold text-green-700">🚀 LANZAMIENTO OFICIAL</td>
                    <td class="py-3 px-4 text-slate-600">Todos</td>
                    <td class="py-3 px-4"><input type="checkbox"></td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3>11.3. 📧 Anexo C: Modelos de Emails</h3>

    <div class="bg-slate-50 rounded-2xl border border-slate-200 p-6 my-8">
        <h4 class="!mt-0 !text-slate-700 !text-sm mb-4">Email de Confirmación de Pedido</h4>
        <div class="bg-white rounded-lg border border-slate-200 p-4 text-sm font-mono">
            <p class="text-slate-600 mb-2"><strong>Asunto:</strong> ¡Gracias por tu compra en EcoMarket Valencia! 🌿</p>
            <p class="text-slate-600 mb-2">Hola [Nombre del cliente],</p>
            <p class="text-slate-600 mb-2">Gracias por confiar en EcoMarket Valencia. Tu pedido #[Número] ha sido confirmado.</p>
            <p class="text-slate-600 mb-2"><strong>Resumen del pedido:</strong></p>
            <ul class="text-slate-600 mb-4 ml-4">
                <li>• [Producto 1] x [Cantidad] = [Precio]</li>
                <li>• [Producto 2] x [Cantidad] = [Precio]</li>
                <li><strong>Total: [Total]€</strong></li>
            </ul>
            <p class="text-slate-600 mb-2">Te enviaremos otro email cuando tu pedido sea enviado.</p>
            <p class="text-slate-600 mb-4">¡Que disfrutes de tus productos ecológicos!</p>
            <p class="text-slate-600">Equipo de EcoMarket Valencia</p>
        </div>
    </div>

    <h3>11.4. 📊 Anexo D: Presupuesto Detallado</h3>

    <div class="overflow-x-auto my-8">
        <table class="w-full text-sm">
            <thead>
                <tr class="border-b-2 border-slate-200 bg-slate-50">
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Concepto</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Cantidad</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Precio Unit.</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 text-slate-600">Dominio .es (anual)</td>
                    <td class="py-3 px-4 text-slate-600">1</td>
                    <td class="py-3 px-4 text-slate-600">15,00€</td>
                    <td class="py-3 px-4 font-medium text-slate-700">15,00€</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 text-slate-600">Hosting anual</td>
                    <td class="py-3 px-4 text-slate-600">1</td>
                    <td class="py-3 px-4 text-slate-600">180,00€</td>
                    <td class="py-3 px-4 font-medium text-slate-700">180,00€</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 text-slate-600">Plantilla premium</td>
                    <td class="py-3 px-4 text-slate-600">1</td>
                    <td class="py-3 px-4 text-slate-600">60,00€</td>
                    <td class="py-3 px-4 font-medium text-slate-700">60,00€</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 text-slate-600">Sesión de fotos</td>
                    <td class="py-3 px-4 text-slate-600">1</td>
                    <td class="py-3 px-4 text-slate-600">200,00€</td>
                    <td class="py-3 px-4 font-medium text-slate-700">200,00€</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 text-slate-600">Plugins premium (opcional)</td>
                    <td class="py-3 px-4 text-slate-600">3</td>
                    <td class="py-3 px-4 text-slate-600">50,00€</td>
                    <td class="py-3 px-4 font-medium text-slate-700">150,00€</td>
                </tr>
                <tr class="bg-blue-50">
                    <td class="py-3 px-4 font-bold text-blue-700">TOTAL INVERSIÓN INICIAL</td>
                    <td class="py-3 px-4 text-slate-600">-</td>
                    <td class="py-3 px-4 text-slate-600">-</td>
                    <td class="py-3 px-4 font-bold text-blue-700">605,00€</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3>11.5. 📱 Anexo E: Capturas de Pantalla</h3>

    <div class="callout callout-warning">
        <div class="callout-title"><span>📸</span><span>Instrucciones</span></div>
        <p class="text-sm mb-3">Añade capturas de pantalla de tu tienda online en las siguientes páginas:</p>
        <ul class="text-sm space-y-2 mb-0">
            <li>• Página de inicio completa</li>
            <li>• Página de producto individual</li>
            <li>• Carrito de la compra</li>
            <li>• Proceso de checkout</li>
            <li>• Panel de administración de WooCommerce</li>
            <li>• Email de confirmación recibido</li>
        </ul>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 p-8 text-center">
            <div class="text-4xl mb-4">📷</div>
            <p class="text-sm text-slate-500 mb-0">[Inserta aquí captura de la Página de Inicio]</p>
        </div>
        <div class="bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 p-8 text-center">
            <div class="text-4xl mb-4">📷</div>
            <p class="text-sm text-slate-500 mb-0">[Inserta aquí captura de Ficha de Producto]</p>
        </div>
    </div>

    <div class="callout callout-success">
        <div class="callout-title"><span>🎉</span><span>¡Proyecto Completado!</span></div>
        <p class="text-sm mb-0">Este documento forma parte de tu portfolio profesional. Guárdalo y úsalo para mostrar tus competencias en futuras entrevistas de trabajo.</p>
    </div>
`;
