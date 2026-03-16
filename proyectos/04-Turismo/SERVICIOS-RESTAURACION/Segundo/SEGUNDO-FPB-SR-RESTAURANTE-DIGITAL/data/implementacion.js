window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.implementacion = `
<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>💻</span>
        <span>Implementación de la Solución</span>
    </div>
    <p>En esta sección <strong>configurarás</strong> las herramientas digitales seleccionadas para el restaurante.</p>
</div>

<h3>6.1. Configuración del Sistema de Reservas 📱</h3>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>📋</span>
        <span>Actividad Práctica</span>
    </div>
    <p>Configura una cuenta de pruebas en <strong>TheFork Manager</strong> o <strong>CoverManager</strong> siguiendo estos pasos:</p>
</div>

<h4>Paso 1: Registro en la Plataforma</h4>
<ol class="list-decimal pl-6 space-y-3">
    <li>Accede a <a href="https://manager.thefork.es/" target="_blank" class="text-blue-600 underline">manager.thefork.es</a> o <a href="https://covermanager.com/" target="_blank" class="text-blue-600 underline">covermanager.com</a></li>
    <li>Haz clic en "Dar de alta mi restaurante"</li>
    <li>Completa el formulario con:
        <ul class="list-disc pl-6 mt-2 space-y-1">
            <li>Nombre del restaurante: "El Rincón del Sabor"</li>
            <li>Dirección completa</li>
            <li>Teléfono y email de contacto</li>
            <li>Tipo de cocina: Mediterránea</li>
            <li>Rango de precios: 25-30€</li>
        </ul>
    </li>
</ol>

<h4>Paso 2: Configuración de Horarios y Capacidad</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 p-3 text-left">Parámetro</th>
            <th class="border border-slate-300 p-3 text-center">Valor Sugerido</th>
            <th class="border border-slate-300 p-3 text-left">Explicación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 p-3">Días de apertura</td>
            <td class="border border-slate-300 p-3 text-center">Martes a Domingo</td>
            <td class="border border-slate-300 p-3">Lunes cerrado (descanso semanal)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">Horario de comida</td>
            <td class="border border-slate-300 p-3 text-center">13:00 - 16:00</td>
            <td class="border border-slate-300 p-3">Última reserva a las 15:30</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3">Horario de cena</td>
            <td class="border border-slate-300 p-3 text-center">20:00 - 23:00</td>
            <td class="border border-slate-300 p-3">Última reserva a las 22:00</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">Capacidad máxima</td>
            <td class="border border-slate-300 p-3 text-center">45 comensales</td>
            <td class="border border-slate-300 p-3">Distribuidos en 12 mesas</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3">Tiempo medio por mesa</td>
            <td class="border border-slate-300 p-3 text-center">90 minutos</td>
            <td class="border border-slate-300 p-3">Para calcular rotación</td>
        </tr>
    </tbody>
</table>

<h4>Paso 3: Configuración de Notificaciones</h4>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-xl border border-blue-100">
        <h4 class="font-bold text-blue-700 mb-3">📧 Email al Cliente</h4>
        <ul class="space-y-2 text-sm">
            <li>✅ Confirmación inmediata de reserva</li>
            <li>✅ Recordatorio 24 horas antes</li>
            <li>✅ Agradecimiento post-visita</li>
            <li>✅ Solicitud de valoración</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-xl border border-green-100">
        <h4 class="font-bold text-green-700 mb-3">📱 SMS/WhatsApp</h4>
        <ul class="space-y-2 text-sm">
            <li>✅ Confirmación con enlace para cancelar</li>
            <li>✅ Recordatorio el mismo día por la mañana</li>
            <li>⚠️ Opcional: Oferta especial cumpleaños</li>
        </ul>
    </div>
</div>

<hr class="my-8">

<h3>6.2. Creación de la Carta Digital QR 🍽️</h3>

<h4>Paso 1: Diseñar la Carta en Canva</h4>
<ol class="list-decimal pl-6 space-y-3">
    <li>Accede a <a href="https://www.canva.com/" target="_blank" class="text-blue-600 underline">www.canva.com</a> (cuenta gratuita)</li>
    <li>Busca plantillas de "Menú de restaurante"</li>
    <li>Selecciona un diseño vertical (optimizado para móvil)</li>
    <li>Personaliza con:
        <ul class="list-disc pl-6 mt-2 space-y-1">
            <li>Logo del restaurante</li>
            <li>Colores corporativos (naranja, crema, gris)</li>
            <li>Fotos de los platos (puedes usar bancos de imágenes gratuitos)</li>
            <li>Precios con IVA incluido</li>
            <li>Iconos de alérgenos</li>
        </ul>
    </li>
    <li>Exporta como <strong>PDF interactivo</strong> o <strong>PNG de alta calidad</strong></li>
</ol>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>💡</span>
        <span>Consejo de Experto</span>
    </div>
    <p class="mb-0">Crea <strong>dos versiones</strong> de la carta: una para comida y otra para cena. Esto permite actualizar los platos del día fácilmente sin modificar todo el menú.</p>
</div>

<h4>Paso 2: Generar los Códigos QR</h4>
<ol class="list-decimal pl-6 space-y-3">
    <li>Sube la carta digital a un servicio de alojamiento:
        <ul class="list-disc pl-6 mt-2 space-y-1">
            <li>Opción A: Google Drive (compartir como "Cualquiera con el enlace puede ver")</li>
            <li>Opción B: Dropbox (crear enlace compartido)</li>
            <li>Opción C: Subir a la web del restaurante</li>
        </ul>
    </li>
    <li>Copia el enlace público de la carta</li>
    <li>Accede a un generador de QR gratuito:
        <ul class="list-disc pl-6 mt-2 space-y-1">
            <li><a href="https://qr-code-generator.com/" target="_blank" class="text-blue-600 underline">qr-code-generator.com</a></li>
            <li><a href="https://www.qr-code-generator.com/" target="_blank" class="text-blue-600 underline">www.qr-code-generator.com</a></li>
        </ul>
    </li>
    <li>Pega el enlace y genera el código QR</li>
    <li>Descarga el QR en formato PNG (alta resolución, mínimo 500x500px)</li>
    <li>Imprime los QR en cartulina o plástico para colocar en las mesas</li>
</ol>

<h4>Paso 3: Colocar los QR en las Mesas</h4>
<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>📋</span>
        <span>Consideraciones de Diseño</span>
    </div>
    <ul class="space-y-2">
        <li>• Tamaño mínimo del QR: <strong>5x5 cm</strong> para fácil escaneo</li>
        <li>• Colocar a una altura visible (soporte de mesa o pie de mesa)</li>
        <li>• Incluir instrucciones breves: "Escanea para ver el menú"</li>
        <li>• Tener al menos 2-3 QR de repuesto por si se dañan</li>
        <li>• Considera usar soportes de acrílico o madera para mayor durabilidad</li>
    </ul>
</div>

<hr class="my-8">

<h3>6.3. Configuración de Google Business Profile 🗺️</h3>

<p>Google Business Profile es <strong>esencial</strong> para que el restaurante aparezca en búsquedas locales y Google Maps.</p>

<h4>Pasos de Configuración</h4>
<ol class="list-decimal pl-6 space-y-3">
    <li>Accede a <a href="https://www.google.com/business/" target="_blank" class="text-blue-600 underline">www.google.com/business</a></li>
    <li>Haz clic en "Gestionar ahora"</li>
    <li>Introduce el nombre del negocio: "El Rincón del Sabor"</li>
    <li>Selecciona la categoría: <strong>Restaurante</strong></li>
    <li>Añade la dirección completa</li>
    <li>Define el área de servicio (opcional, si haces delivery)</li>
    <li>Añade teléfono y sitio web</li>
    <li>Verifica el establecimiento (por correo postal o teléfono)</li>
</ol>

<h4>Información que Debes Completar</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 p-3 text-left">Elemento</th>
            <th class="border border-slate-300 p-3 text-left">Contenido Sugerido</th>
            <th class="border border-slate-300 p-3 text-center">Importancia</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 p-3">Fotos del exterior</td>
            <td class="border border-slate-300 p-3">Fachada, entrada, terraza</td>
            <td class="border border-slate-300 p-3 text-center">🔴 Alta</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">Fotos del interior</td>
            <td class="border border-slate-300 p-3">Sala, mesas, decoración</td>
            <td class="border border-slate-300 p-3 text-center">🔴 Alta</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3">Fotos de platos</td>
            <td class="border border-slate-300 p-3">Al menos 10 platos estrella</td>
            <td class="border border-slate-300 p-3 text-center">🔴 Alta</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">Descripción del negocio</td>
            <td class="border border-slate-300 p-3">150-200 palabras sobre el restaurante</td>
            <td class="border border-slate-300 p-3 text-center">🟡 Media</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3">Horarios</td>
            <td class="border border-slate-300 p-3">Actualizados semanalmente</td>
            <td class="border border-slate-300 p-3 text-center">🔴 Alta</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">Atributos</td>
            <td class="border border-slate-300 p-3">Terraza, WiFi, accesible, parking...</td>
            <td class="border border-slate-300 p-3 text-center">🟡 Media</td>
        </tr>
    </tbody>
</table>

<hr class="my-8">

<h3>6.4. Creación de Contenido para Redes Sociales 📸</h3>

<h4>Plan de Contenidos para Instagram (Primeras 2 semanas)</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 p-3 text-center">Día</th>
            <th class="border border-slate-300 p-3 text-left">Tipo de Contenido</th>
            <th class="border border-slate-300 p-3 text-left">Descripción</th>
            <th class="border border-slate-300 p-3 text-center">Hashtags</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 p-3 text-center">Lunes</td>
            <td class="border border-slate-300 p-3">Plato de la semana</td>
            <td class="border border-slate-300 p-3">Foto profesional del plato estrella</td>
            <td class="border border-slate-300 p-3 text-center">#Valencia #Gastronomia</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3 text-center">Martes</td>
            <td class="border border-slate-300 p-3">Detrás de cámaras</td>
            <td class="border border-slate-300 p-3">Video corto del chef preparando</td>
            <td class="border border-slate-300 p-3 text-center">#Chef #Cocina</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3 text-center">Miércoles</td>
            <td class="border border-slate-300 p-3">Producto local</td>
            <td class="border border-slate-300 p-3">Historia sobre proveedor km 0</td>
            <td class="border border-slate-300 p-3 text-center">#Km0 #Local</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3 text-center">Jueves</td>
            <td class="border border-slate-300 p-3">Testimonio cliente</td>
            <td class="border border-slate-300 p-3">Repost de una reseña positiva</td>
            <td class="border border-slate-300 p-3 text-center">#Reseña #Clientes</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3 text-center">Viernes</td>
            <td class="border border-slate-300 p-3">Menú del fin de semana</td>
            <td class="border border-slate-300 p-3">Anuncio de especiales de viernes</td>
            <td class="border border-slate-300 p-3 text-center">#FinDeSemana #Cena</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3 text-center">Sábado</td>
            <td class="border border-slate-300 p-3">Ambiente del restaurante</td>
            <td class="border border-slate-300 p-3">Foto de la sala con comensales</td>
            <td class="border border-slate-300 p-3 text-center">#Ambiente #Sabado</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3 text-center">Domingo</td>
            <td class="border border-slate-300 p-3">Postre especial</td>
            <td class="border border-slate-300 p-3">Foto atractiva del postre del día</td>
            <td class="border border-slate-300 p-3 text-center">#Postre #Domingo</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success my-6">
    <div class="callout-title">
        <span>✅</span>
        <span>Checklist de Implementación</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ul class="space-y-2">
            <li>☐ Sistema de reservas configurado y probado</li>
            <li>☐ Emails de confirmación personalizados</li>
            <li>☐ Carta digital diseñada y alojada</li>
            <li>☐ Códigos QR generados e impresos</li>
            <li>☐ Google Business Profile verificado</li>
        </ul>
        <ul class="space-y-2">
            <li>☐ 14 publicaciones de Instagram programadas</li>
            <li>☐ Web principal con formulario de reservas</li>
            <li>☐ Política de privacidad publicada</li>
            <li>☐ Personal formado en el uso de las herramientas</li>
            <li>☐ Pruebas realizadas con clientes de prueba</li>
        </ul>
    </div>
</div>
`;
