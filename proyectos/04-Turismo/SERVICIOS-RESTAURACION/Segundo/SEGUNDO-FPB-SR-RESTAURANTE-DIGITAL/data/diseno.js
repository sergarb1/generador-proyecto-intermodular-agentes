window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.diseno = `
<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>🎨</span>
        <span>Diseño de la Solución Digital</span>
    </div>
    <p>En esta sección <strong>diseñarás</strong> la estructura y apariencia del sistema digital del restaurante.</p>
</div>

<h3>5.1. Arquitectura del Sistema 🏗️</h3>

<p>El sistema digital del restaurante se compone de los siguientes módulos interconectados:</p>

<div class="callout callout-info my-6">
    <pre class="text-sm bg-blue-50 p-4 rounded-lg overflow-x-auto border border-blue-200">
┌─────────────────────────────────────────────────────────────┐
│                    SITIO WEB PRINCIPAL                       │
│  (WordPress / Wix / Desarrollo a medida)                     │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│   RESERVAS    │    │   CARTA QR    │    │   CONTACTO    │
│     ONLINE    │    │    DIGITAL    │    │     Y MAPA    │
└───────────────┘    └───────────────┘    └───────────────┘
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│  TheFork /    │    │   Canva /     │    │   Google      │
│  CoverManager │    │  PDF Interac. │    │   My Business │
└───────────────┘    └───────────────┘    └───────────────┘
        │
        ▼
┌───────────────┐
│   EMAIL/SMS   │
│  AUTOMÁTICOS  │
└───────────────┘
    </pre>
</div>

<hr class="my-8">

<h3>5.2. Diseño del Sistema de Reservas 📱</h3>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>📋</span>
        <span>Actividad para el Alumnado</span>
    </div>
    <p>Diseña el <strong>formulario de reservas</strong> que tendrá la web. Debe incluir:</p>
</div>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 p-3 text-left">Campo</th>
            <th class="border border-slate-300 p-3 text-center">Tipo</th>
            <th class="border border-slate-300 p-3 text-center">Obligatorio</th>
            <th class="border border-slate-300 p-3 text-left">Ejemplo/Notas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 p-3">Nombre completo</td>
            <td class="border border-slate-300 p-3 text-center">Texto</td>
            <td class="border border-slate-300 p-3 text-center">✅ Sí</td>
            <td class="border border-slate-300 p-3">María García López</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">Teléfono</td>
            <td class="border border-slate-300 p-3 text-center">Teléfono</td>
            <td class="border border-slate-300 p-3 text-center">✅ Sí</td>
            <td class="border border-slate-300 p-3">+34 600 123 456</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3">Email</td>
            <td class="border border-slate-300 p-3 text-center">Email</td>
            <td class="border border-slate-300 p-3 text-center">✅ Sí</td>
            <td class="border border-slate-300 p-3">maria@email.com</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">Fecha</td>
            <td class="border border-slate-300 p-3 text-center">Selector fecha</td>
            <td class="border border-slate-300 p-3 text-center">✅ Sí</td>
            <td class="border border-slate-300 p-3">Máximo 30 días anticipación</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3">Hora</td>
            <td class="border border-slate-300 p-3 text-center">Selector hora</td>
            <td class="border border-slate-300 p-3 text-center">✅ Sí</td>
            <td class="border border-slate-300 p-3">13:00-16:00 / 20:00-23:00</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">Número de personas</td>
            <td class="border border-slate-300 p-3 text-center">Número</td>
            <td class="border border-slate-300 p-3 text-center">✅ Sí</td>
            <td class="border border-slate-300 p-3">1-12 personas (más: consultar)</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3">Alergias/intolerancias</td>
            <td class="border border-slate-300 p-3 text-center">Texto libre</td>
            <td class="border border-slate-300 p-3 text-center">⚠️ Opcional</td>
            <td class="border border-slate-300 p-3">Gluten, lactosa, frutos secos...</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">Comentarios adicionales</td>
            <td class="border border-slate-300 p-3 text-center">Texto libre</td>
            <td class="border border-slate-300 p-3 text-center">⚠️ Opcional</td>
            <td class="border border-slate-300 p-3">Trona, silla de ruedas, celebración...</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3">Acepto política de privacidad</td>
            <td class="border border-slate-300 p-3 text-center">Checkbox</td>
            <td class="border border-slate-300 p-3 text-center">✅ Sí</td>
            <td class="border border-slate-300 p-3">Enlace a política de privacidad</td>
        </tr>
    </tbody>
</table>

<h4>📐 Wireframe del Formulario de Reservas</h4>
<div class="callout callout-info my-6">
    <pre class="text-sm bg-slate-50 p-4 rounded-lg overflow-x-auto border border-slate-200">
┌─────────────────────────────────────────────────────────┐
│           🍽️ RESERVA TU MESA - El Rincón del Sabor     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Nombre completo *                                      │
│  ┌─────────────────────────────────────────────────┐   │
│  │                                                 │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Teléfono *          Email *                            │
│  ┌──────────────┐    ┌──────────────────────────┐      │
│  │              │    │                          │      │
│  └──────────────┘    └──────────────────────────┘      │
│                                                         │
│  Fecha *             Hora *         Personas *          │
│  ┌──────────────┐    ┌──────────┐   ┌──────────┐       │
│  │ 📅 DD/MM/AAAA│    │ ⏰ 13:00 │   │ 👥 4     │       │
│  └──────────────┘    └──────────┘   └──────────┘       │
│                                                         │
│  ¿Alergias o intolerancias? (opcional)                  │
│  ┌─────────────────────────────────────────────────┐   │
│  │                                                 │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ☐ Acepto la política de privacidad *                   │
│                                                         │
│              ┌─────────────────────────┐                │
│              │   ✅ CONFIRMAR RESERVA  │                │
│              └─────────────────────────┘                │
│                                                         │
└─────────────────────────────────────────────────────────┘
    </pre>
</div>

<hr class="my-8">

<h3>5.3. Diseño de la Carta Digital QR 🍽️</h3>

<p>La carta digital debe ser <strong>visual, atractiva y fácil de navegar</strong> en dispositivos móviles.</p>

<h4>📱 Estructura de la Carta Digital</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 p-3 text-left">Sección</th>
            <th class="border border-slate-300 p-3 text-center">Elementos</th>
            <th class="border border-slate-300 p-3 text-left">Consideraciones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 p-3"><strong>Encabezado</strong></td>
            <td class="border border-slate-300 p-3 text-center">Logo, nombre, menú del día</td>
            <td class="border border-slate-300 p-3">Identidad visual clara</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3"><strong>Entrantes</strong></td>
            <td class="border border-slate-300 p-3 text-center">6-8 opciones con fotos</td>
            <td class="border border-slate-300 p-3">Destacar productos locales</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3"><strong>Principales</strong></td>
            <td class="border border-slate-300 p-3 text-center">8-10 opciones (carne, pescado, veg)</td>
            <td class="border border-slate-300 p-3">Iconos de alérgenos visibles</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3"><strong>Postres</strong></td>
            <td class="border border-slate-300 p-3 text-center">4-6 opciones</td>
            <td class="border border-slate-300 p-3">Fotos muy atractivas</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3"><strong>Bebidas</strong></td>
            <td class="border border-slate-300 p-3 text-center">Vinos, cervezas, refrescos</td>
            <td class="border border-slate-300 p-3">Sugerencias de maridaje</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3"><strong>Información legal</strong></td>
            <td class="border border-slate-300 p-3 text-center">Alérgenos, IVA, contacto</td>
            <td class="border border-slate-300 p-3">Obligatorio por ley</td>
        </tr>
    </tbody>
</table>

<h4>🎨 Paleta de Colores y Tipografía</h4>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
        <h4 class="font-bold text-slate-700 mb-3">🎨 Colores Corporativos</h4>
        <div class="space-y-3">
            <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-lg bg-orange-600 border border-slate-300"></div>
                <div>
                    <div class="font-bold">Naranja Principal</div>
                    <div class="text-sm text-slate-500">#EA580C - Calidez, apetito</div>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-lg bg-amber-100 border border-slate-300"></div>
                <div>
                    <div class="font-bold">Crema Fondo</div>
                    <div class="text-sm text-slate-500">#FEF3C7 - Limpieza, claridad</div>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-lg bg-slate-800 border border-slate-300"></div>
                <div>
                    <div class="font-bold">Gris Oscuro Texto</div>
                    <div class="text-sm text-slate-500">#1E293B - Legibilidad</div>
                </div>
            </div>
        </div>
    </div>
    <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
        <h4 class="font-bold text-slate-700 mb-3">📝 Tipografía</h4>
        <div class="space-y-3">
            <div class="p-3 bg-white rounded border border-slate-200">
                <div class="text-xs text-slate-500 mb-1">Títulos</div>
                <div class="text-xl font-bold">Playfair Display</div>
                <div class="text-sm text-slate-500">Elegante, tradicional</div>
            </div>
            <div class="p-3 bg-white rounded border border-slate-200">
                <div class="text-xs text-slate-500 mb-1">Cuerpo de texto</div>
                <div class="text-lg">Lato / Open Sans</div>
                <div class="text-sm text-slate-500">Legible en móviles</div>
            </div>
        </div>
    </div>
</div>

<hr class="my-8">

<h3>5.4. Diseño de la Web Principal 🌐</h3>

<p>La web del restaurante debe transmitir la <strong>esencia del establecimiento</strong> y facilitar la conversión (reservas).</p>

<h4>📐 Estructura de la Página de Inicio (Homepage)</h4>
<div class="callout callout-info my-6">
    <pre class="text-sm bg-slate-50 p-4 rounded-lg overflow-x-auto border border-slate-200">
┌─────────────────────────────────────────────────────────┐
│  LOGO        Inicio  Menú  Reservas  Contacto   📱🔍    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ╔═══════════════════════════════════════════════════╗ │
│  ║                                                   ║ │
│  ║     [IMAGEN HERO: Plato estrella del restaurante] ║ │
│  ║                                                   ║ │
│  ║         COCINA MEDITERRÁNEA CON ALMA              ║ │
│  ║                                                   ║ │
│  ║              [🍽️ RESERVAR AHORA]                 ║ │
│  ║                                                   ║ │
│  ╚═══════════════════════════════════════════════════╝ │
│                                                         │
│  ────────────  NUESTROS PLATES DESTACADOS  ─────────── │
│                                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐   │
│  │ [FOTO]  │  │ [FOTO]  │  │ [FOTO]  │  │ [FOTO]  │   │
│  │ Paella  │  │ Arroz   │  │ All i   │  │ Postres │   │
│  │  18€    │  │  16€    │  │  14€    │  │  8€     │   │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘   │
│                                                         │
│  ────────────  LO QUE DICEN NUESTROS CLIENTES  ─────── │
│                                                         │
│  ⭐⭐⭐⭐⭐ "Excelente comida y trato familiar" - María   │
│                                                         │
│  ────────────  HORARIO Y UBICACIÓN  ────────────────── │
│                                                         │
│  📍 Calle del Sabor, 123, Valencia                     │
│  🕐 Mar-Dom: 13:00-16:00 | 20:00-23:00                 │
│  📞 963 123 456                                        │
│                                                         │
│  [MAPA DE GOOGLE]                                       │
│                                                         │
│  ───────────────────────────────────────────────────── │
│  © 2025 El Rincón del Sabor | Instagram | Facebook     │
└─────────────────────────────────────────────────────────┘
    </pre>
</div>

<hr class="my-8">

<h3>5.5. Checklist de Diseño ✅</h3>

<div class="callout callout-success my-6">
    <div class="callout-title">
        <span>📋</span>
        <span>Elementos que Debe Incluir el Diseño</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ul class="space-y-2">
            <li>☐ Logo del restaurante en alta resolución</li>
            <li>☐ Paleta de colores definida (3-4 colores)</li>
            <li>☐ Tipografías seleccionadas (títulos + cuerpo)</li>
            <li>☐ Fotos profesionales de al menos 8 platos</li>
            <li>☐ Iconos de alérgenos normalizados</li>
        </ul>
        <ul class="space-y-2">
            <li>☐ Formulario de reservas funcional</li>
            <li>☐ Códigos QR generados para cada mesa</li>
            <li>☐ Enlaces a redes sociales</li>
            <li>☐ Mapa de Google integrado</li>
            <li>☐ Política de privacidad visible</li>
        </ul>
    </div>
</div>
`;
