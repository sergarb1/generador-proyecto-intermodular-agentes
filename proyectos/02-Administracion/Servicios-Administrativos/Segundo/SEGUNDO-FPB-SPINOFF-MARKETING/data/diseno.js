// Diseño Organizativo (Adaptado FPB)
window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.diseno = `
<h3>5.1. 👥 Estructura de la Empresa</h3>

<h4>Organigrama de Digital Marketing Pro</h4>

<p>Un <strong>organigrama</strong> es un dibujo que muestra quién manda sobre quién en una empresa.</p>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📊</span>
        <span>¿Qué es un organigrama?</span>
    </div>
    <p>Es un esquema que muestra los puestos de trabajo y las relaciones entre ellos. Las líneas verticales indican quién depende de quién.</p>
</div>

<h4>Nuestro Organigrama</h4>

<div class="bg-slate-100 p-4 rounded-lg font-mono text-xs my-4 overflow-x-auto">
<pre>
                    ┌─────────────────────┐
                    │   SOCIO DIRECTOR    │
                    │   (CEO)             │
                    └──────────┬──────────┘
                               │
            ┌──────────────────┼──────────────────┐
            │                  │                  │
    ┌───────▼────────┐ ┌──────▼───────┐ ┌───────▼────────┐
    │   COMERCIAL    │ │  MARKETING   │ │  ADMINISTRATIVO│
    │                │ │              │ │                │
    │ Buscar clientes│ │ Hacer campañas│ │ Facturas y     │
    │ Presupuestos   │ │ Redes sociales│ │ contabilidad   │
    └────────────────┘ └──────────────┘ └────────────────┘
</pre>
</div>

<h4>Descripción de Puestos</h4>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-blue-50">
            <th class="border border-slate-300 px-4 py-2 text-left">Puesto</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Persona</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Funciones Principales</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2"><strong>Socio Director</strong></td>
            <td class="border border-slate-300 px-4 py-2">Socio 1</td>
            <td class="border border-slate-300 px-4 py-2">Dirigir la empresa, firmar contratos, tomar decisiones</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2"><strong>Responsable Comercial</strong></td>
            <td class="border border-slate-300 px-4 py-2">Socio 1</td>
            <td class="border border-slate-300 px-4 py-2">Buscar clientes, hacer presupuestos, negociar</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2"><strong>Responsable Marketing</strong></td>
            <td class="border border-slate-300 px-4 py-2">Socio 2</td>
            <td class="border border-slate-300 px-4 py-2">Gestionar redes sociales, crear campañas, diseñar</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2"><strong>Responsable Administrativo</strong></td>
            <td class="border border-slate-300 px-4 py-2">Socio 3</td>
            <td class="border border-slate-300 px-4 py-2">Facturas, contabilidad, trámites, atención al cliente</td>
        </tr>
    </tbody>
</table>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-xl border border-blue-100">
        <div class="text-4xl mb-3">👔</div>
        <h4 class="font-bold text-blue-800 mb-2">Director/a</h4>
        <p class="text-sm text-blue-700">Toma las decisiones importantes y representa a la empresa.</p>
    </div>
    <div class="p-6 bg-green-50 rounded-xl border border-green-100">
        <div class="text-4xl mb-3">📱</div>
        <h4 class="font-bold text-green-800 mb-2">Marketing</h4>
        <p class="text-sm text-green-700">Crea contenido para redes y campañas publicitarias.</p>
    </div>
    <div class="p-6 bg-purple-50 rounded-xl border border-purple-100">
        <div class="text-4xl mb-3">📄</div>
        <h4 class="font-bold text-purple-800 mb-2">Administración</h4>
        <p class="text-sm text-purple-700">Lleva las cuentas, facturas y papeles de la empresa.</p>
    </div>
</div>

<h3>5.2. 🎯 Modelo de Negocio: Canvas</h3>

<h4>¿Qué es el Canvas?</h4>

<p>El <strong>Business Model Canvas</strong> es un lienzo con 9 cuadros que explica cómo funciona nuestro negocio.</p>

<div class="callout callout-info">
    <div class="callout-title">
        <span>💡</span>
        <span>Los 9 Bloques del Canvas</span>
    </div>
    <p>Es una herramienta visual que nos ayuda a entender todos los aspectos de nuestro negocio en una sola página.</p>
</div>

<h4>Nuestro Canvas Completado</h4>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-purple-50">
            <th class="border border-slate-300 px-4 py-2 text-left">Bloque</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Descripción</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Nuestro Caso</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2"><strong>1. Segmentos de clientes</strong></td>
            <td class="border border-slate-300 px-4 py-2">¿A quién vendemos?</td>
            <td class="border border-slate-300 px-4 py-2">PYMES y comercios locales</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2"><strong>2. Propuesta de valor</strong></td>
            <td class="border border-slate-300 px-4 py-2">¿Qué ofrecemos?</td>
            <td class="border border-slate-300 px-4 py-2">Marketing digital a precio asequible</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2"><strong>3. Canales</strong></td>
            <td class="border border-slate-300 px-4 py-2">¿Cómo llegamos al cliente?</td>
            <td class="border border-slate-300 px-4 py-2">Web, redes sociales, teléfono, visitas</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2"><strong>4. Relación con clientes</strong></td>
            <td class="border border-slate-300 px-4 py-2">¿Cómo los tratamos?</td>
            <td class="border border-slate-300 px-4 py-2">Cercana, personalizada, continua</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2"><strong>5. Fuentes de ingresos</strong></td>
            <td class="border border-slate-300 px-4 py-2">¿Cómo ganamos dinero?</td>
            <td class="border border-slate-300 px-4 py-2">Cuotas mensuales por servicios</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2"><strong>6. Recursos clave</strong></td>
            <td class="border border-slate-300 px-4 py-2">¿Qué necesitamos?</td>
            <td class="border border-slate-300 px-4 py-2">Ordenadores, software, equipo</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2"><strong>7. Actividades clave</strong></td>
            <td class="border border-slate-300 px-4 py-2">¿Qué hacemos?</td>
            <td class="border border-slate-300 px-4 py-2">Diseñar, publicar, anunciar, facturar</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2"><strong>8. Socios clave</strong></td>
            <td class="border border-slate-300 px-4 py-2">¿Quién nos ayuda?</td>
            <td class="border border-slate-300 px-4 py-2">Proveedores de software, gestoría</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2"><strong>9. Estructura de costes</strong></td>
            <td class="border border-slate-300 px-4 py-2">¿Qué gastos tenemos?</td>
            <td class="border border-slate-300 px-4 py-2">Alquiler, software, salarios, impuestos</td>
        </tr>
    </tbody>
</table>

<h3>5.3. 📦 Portafolio de Servicios</h3>

<h4>Nuestros Packs de Servicios</h4>

<p>Ofrecemos 3 packs para que los clientes elijan:</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-xl border-2 border-slate-200">
        <h4 class="font-bold text-slate-800 text-lg mb-2">🥉 PACK BÁSICO</h4>
        <p class="text-3xl font-bold text-blue-600 mb-4">150 €/mes</p>
        <ul class="text-sm text-slate-600 space-y-2">
            <li>✅ 8 publicaciones al mes</li>
            <li>✅ 1 red social (Instagram o Facebook)</li>
            <li>✅ Respuesta a comentarios</li>
            <li>❌ No incluye diseño gráfico</li>
            <li>❌ No incluye publicidad pagada</li>
        </ul>
    </div>
    
    <div class="p-6 bg-blue-50 rounded-xl border-2 border-blue-400 relative">
        <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold">MÁS VENDIDO</span>
        <h4 class="font-bold text-blue-800 text-lg mb-2">🥈 PACK MEDIO</h4>
        <p class="text-3xl font-bold text-blue-600 mb-4">300 €/mes</p>
        <ul class="text-sm text-blue-700 space-y-2">
            <li>✅ 15 publicaciones al mes</li>
            <li>✅ 2 redes sociales</li>
            <li>✅ 2 diseños gráficos (carteles, flyers)</li>
            <li>✅ Campaña de anuncios (20 € incluidos)</li>
            <li>✅ Informe mensual de resultados</li>
        </ul>
    </div>
    
    <div class="p-6 bg-slate-50 rounded-xl border-2 border-slate-200">
        <h4 class="font-bold text-slate-800 text-lg mb-2">🥇 PACK COMPLETO</h4>
        <p class="text-3xl font-bold text-blue-600 mb-4">500 €/mes</p>
        <ul class="text-sm text-slate-600 space-y-2">
            <li>✅ 30 publicaciones al mes</li>
            <li>✅ Todas las redes sociales</li>
            <li>✅ Diseños ilimitados</li>
            <li>✅ Campaña de anuncios (50 € incluidos)</li>
            <li>✅ Página web básica</li>
            <li>✅ Reunión semanal</li>
        </ul>
    </div>
</div>

<h3>5.4. 📋 Checklist de Puesta en Marcha</h3>

<h4>Lista de Comprobación</h4>

<p>Marca con una ✅ cada tarea completada:</p>

<ul class="list-none space-y-2 my-4">
    <li class="flex items-center gap-2"><input type="checkbox" class="w-4 h-4"> 1. Certificado negativo del nombre obtenido</li>
    <li class="flex items-center gap-2"><input type="checkbox" class="w-4 h-4"> 2. Cuenta bancaria abierta con dinero ingresado</li>
    <li class="flex items-center gap-2"><input type="checkbox" class="w-4 h-4"> 3. Escritura firmada en notaría</li>
    <li class="flex items-center gap-2"><input type="checkbox" class="w-4 h-4"> 4. NIF conseguido en Hacienda</li>
    <li class="flex items-center gap-2"><input type="checkbox" class="w-4 h-4"> 5. Empresa inscrita en Registro Mercantil</li>
    <li class="flex items-center gap-2"><input type="checkbox" class="w-4 h-4"> 6. Alta en Seguridad Social de los socios</li>
    <li class="flex items-center gap-2"><input type="checkbox" class="w-4 h-4"> 7. Licencia de actividad del Ayuntamiento</li>
    <li class="flex items-center gap-2"><input type="checkbox" class="w-4 h-4"> 8. Seguro de responsabilidad civil contratado</li>
    <li class="flex items-center gap-2"><input type="checkbox" class="w-4 h-4"> 9. Oficina alquilada y preparada</li>
    <li class="flex items-center gap-2"><input type="checkbox" class="w-4 h-4"> 10. Ordenadores y software instalados</li>
</ul>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span>
        <span>¡Listo para Empezar!</span>
    </div>
    <p>Cuando tengas todas las casillas marcadas, tu empresa estará lista para recibir clientes.</p>
</div>
`;
