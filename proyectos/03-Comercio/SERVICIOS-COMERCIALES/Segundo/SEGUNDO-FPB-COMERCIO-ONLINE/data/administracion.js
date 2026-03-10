window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["administracion"] = `

    <div class="callout callout-info">
        <div class="callout-title"><span>⚙️</span><span>¿Qué es la Administración del Proyecto?</span></div>
        <p class="text-sm">Describimos cómo se gestionará la tienda online una vez esté en funcionamiento.</p>
    </div>

    <h3>7.1. 📊 Gestión Diaria de la Tienda</h3>

    <p>
        El mantenimiento diario de la tienda online requiere dedicar tiempo a las siguientes tareas:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <div class="text-3xl mb-3">📦</div>
            <h4 class="!mt-0 !text-blue-700 !text-sm">Gestión de Pedidos</h4>
            <ul class="text-sm text-slate-600 space-y-2 mb-0">
                <li>• Revisar nuevos pedidos</li>
                <li>• Preparar envíos</li>
                <li>• Generar etiquetas</li>
                <li>• Enviar confirmaciones</li>
            </ul>
        </div>
        <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
            <div class="text-3xl mb-3">📞</div>
            <h4 class="!mt-0 !text-green-700 !text-sm">Atención al Cliente</h4>
            <ul class="text-sm text-slate-600 space-y-2 mb-0">
                <li>• Responder emails</li>
                <li>• Gestionar consultas</li>
                <li>• Resolver incidencias</li>
                <li>• Procesar devoluciones</li>
            </ul>
        </div>
        <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
            <div class="text-3xl mb-3">📈</div>
            <h4 class="!mt-0 !text-purple-700 !text-sm">Actualización</h4>
            <ul class="text-sm text-slate-600 space-y-2 mb-0">
                <li>• Actualizar stock</li>
                <li>• Añadir nuevos productos</li>
                <li>• Revisar precios</li>
                <li>• Crear ofertas</li>
            </ul>
        </div>
    </div>

    <h3>7.2. 📅 Calendario de Tareas</h3>

    <div class="overflow-x-auto my-8">
        <table class="w-full text-sm">
            <thead>
                <tr class="border-b-2 border-slate-200 bg-slate-50">
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Frecuencia</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Tarea</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Responsable</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Tiempo Estimado</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4"><span class="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">Diaria</span></td>
                    <td class="py-3 px-4 text-slate-600">Revisar y procesar pedidos</td>
                    <td class="py-3 px-4 text-slate-600">Personal de tienda</td>
                    <td class="py-3 px-4 text-slate-600">30 min</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4"><span class="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">Diaria</span></td>
                    <td class="py-3 px-4 text-slate-600">Responder emails y consultas</td>
                    <td class="py-3 px-4 text-slate-600">Atención al cliente</td>
                    <td class="py-3 px-4 text-slate-600">1 hora</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4"><span class="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">Semanal</span></td>
                    <td class="py-3 px-4 text-slate-600">Actualizar stock y productos</td>
                    <td class="py-3 px-4 text-slate-600">Responsable e-commerce</td>
                    <td class="py-3 px-4 text-slate-600">2 horas</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4"><span class="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">Semanal</span></td>
                    <td class="py-3 px-4 text-slate-600">Publicar en redes sociales</td>
                    <td class="py-3 px-4 text-slate-600">Community Manager</td>
                    <td class="py-3 px-4 text-slate-600">1 hora</td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4"><span class="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">Mensual</span></td>
                    <td class="py-3 px-4 text-slate-600">Análisis de ventas y KPIs</td>
                    <td class="py-3 px-4 text-slate-600">Dirección</td>
                    <td class="py-3 px-4 text-slate-600">3 horas</td>
                </tr>
                <tr>
                    <td class="py-3 px-4"><span class="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">Mensual</span></td>
                    <td class="py-3 px-4 text-slate-600">Backup y actualizaciones de seguridad</td>
                    <td class="py-3 px-4 text-slate-600">Técnico/Hosting</td>
                    <td class="py-3 px-4 text-slate-600">1 hora</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3>7.3. 📈 Indicadores de Rendimiento (KPIs)</h3>

    <p>
        Para medir el éxito de la tienda online, seguimos estos indicadores clave:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
        <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
            <div class="text-3xl font-bold text-blue-600 mb-2">🛒</div>
            <h4 class="!mt-0 !text-blue-700 !text-sm">Tasa de Conversión</h4>
            <p class="text-xs text-slate-600 mb-2">Porcentaje de visitantes que compran</p>
            <div class="text-lg font-bold text-slate-700">Objetivo: 2-3%</div>
        </div>
        <div class="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
            <div class="text-3xl font-bold text-green-600 mb-2">💶</div>
            <h4 class="!mt-0 !text-green-700 !text-sm">Ticket Medio</h4>
            <p class="text-xs text-slate-600 mb-2">Gasto promedio por pedido</p>
            <div class="text-lg font-bold text-slate-700">Objetivo: 35-45€</div>
        </div>
        <div class="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
            <div class="text-3xl font-bold text-purple-600 mb-2">🔄</div>
            <h4 class="!mt-0 !text-purple-700 !text-sm">Tasa de Repetición</h4>
            <p class="text-xs text-slate-600 mb-2">Clientes que vuelven a comprar</p>
            <div class="text-lg font-bold text-slate-700">Objetivo: 30%</div>
        </div>
        <div class="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-100">
            <div class="text-3xl font-bold text-orange-600 mb-2">⭐</div>
            <h4 class="!mt-0 !text-orange-700 !text-sm">Satisfacción (NPS)</h4>
            <p class="text-xs text-slate-600 mb-2">Net Promoter Score</p>
            <div class="text-lg font-bold text-slate-700">Objetivo: +50</div>
        </div>
    </div>

    <h3>7.4. 🔧 Mantenimiento Técnico</h3>

    <div class="callout callout-warning">
        <div class="callout-title"><span>⚠️</span><span>Tareas de Mantenimiento</span></div>
        <ul class="text-sm space-y-2 mb-0">
            <li>• <strong>Actualizaciones:</strong> Mantener WordPress, WooCommerce y plugins actualizados</li>
            <li>• <strong>Copias de seguridad:</strong> Realizar backups semanales automáticos</li>
            <li>• <strong>Seguridad:</strong> Revisar logs de acceso y actividad sospechosa</li>
            <li>• <strong>Rendimiento:</strong> Optimizar imágenes y limpiar base de datos mensualmente</li>
            <li>• <strong>SSL:</strong> Verificar que el certificado de seguridad está activo</li>
        </ul>
    </div>

    <h3>7.5. 📞 Gestión de Incidencias</h3>

    <p>
        Protocolo para manejar problemas comunes:
    </p>

    <div class="overflow-x-auto my-8">
        <table class="w-full text-sm">
            <thead>
                <tr class="border-b-2 border-slate-200 bg-slate-50">
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Incidencia</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Acción</th>
                    <th class="text-left py-3 px-4 font-bold text-slate-700">Plazo</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 text-slate-600">Producto agotado</td>
                    <td class="py-3 px-4 text-slate-600">Ofrecer alternativa o reembolso</td>
                    <td class="py-3 px-4"><span class="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">24h</span></td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 text-slate-600">Error en el pago</td>
                    <td class="py-3 px-4 text-slate-600">Verificar con pasarela, contactar cliente</td>
                    <td class="py-3 px-4"><span class="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">24h</span></td>
                </tr>
                <tr class="border-b border-slate-100">
                    <td class="py-3 px-4 text-slate-600">Pedido no recibido</td>
                    <td class="py-3 px-4 text-slate-600">Contactar con transportista, informar cliente</td>
                    <td class="py-3 px-4"><span class="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">48h</span></td>
                </tr>
                <tr>
                    <td class="py-3 px-4 text-slate-600">Producto dañado</td>
                    <td class="py-3 px-4 text-slate-600">Enviar reposición o reembolsar</td>
                    <td class="py-3 px-4"><span class="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">48h</span></td>
                </tr>
            </tbody>
        </table>
    </div>
`;
