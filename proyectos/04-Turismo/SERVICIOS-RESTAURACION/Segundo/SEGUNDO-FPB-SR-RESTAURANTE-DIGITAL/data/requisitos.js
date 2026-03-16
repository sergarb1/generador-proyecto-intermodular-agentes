window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.requisitos = `
<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📋</span>
        <span>Análisis de Requisitos del Proyecto</span>
    </div>
    <p>En esta sección definirás <strong>qué necesita</strong> el restaurante para completar su transformación digital.</p>
</div>

<h3>4.1. Requisitos Funcionales 🎯</h3>

<p>Los requisitos funcionales describen <strong>qué debe hacer</strong> el sistema digital del restaurante:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-xl border border-blue-100">
        <h4 class="font-bold text-blue-700 mb-3 flex items-center gap-2">
            <span>📱</span> Sistema de Reservas
        </h4>
        <ul class="space-y-2 text-sm">
            <li>• Permitir reservas 24/7 desde la web</li>
            <li>• Mostrar disponibilidad en tiempo real</li>
            <li>• Enviar confirmación por email y SMS</li>
            <li>• Recordatorio automático 24h antes</li>
            <li>• Permitir modificación/cancelación online</li>
            <li>• Registrar datos del cliente (nombre, teléfono, email)</li>
            <li>• Opción para indicar alergias o preferencias</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-xl border border-green-100">
        <h4 class="font-bold text-green-700 mb-3 flex items-center gap-2">
            <span>🍽️</span> Carta Digital
        </h4>
        <ul class="space-y-2 text-sm">
            <li>• Accesible mediante código QR en cada mesa</li>
            <li>• Mostrar fotos de alta calidad de los platos</li>
            <li>• Incluir información de alérgenos (14 principales)</li>
            <li>• Precios con IVA incluido visibles</li>
            <li>• Secciones claras (entrantes, principales, postres...)</li>
            <li>• Posibilidad de actualizar menú diariamente</li>
            <li>• Versión en español e inglés (turismo)</li>
        </ul>
    </div>
    <div class="p-6 bg-purple-50 rounded-xl border border-purple-100">
        <h4 class="font-bold text-purple-700 mb-3 flex items-center gap-2">
            <span>⭐</span> Gestión de Clientes
        </h4>
        <ul class="space-y-2 text-sm">
            <li>• Base de datos de clientes con historial</li>
            <li>• Registro de preferencias y alergias</li>
            <li>• Sistema de fidelización (puntos o descuentos)</li>
            <li>• Envío de emails promocionales (con consentimiento)</li>
            <li>• Recordatorio de cumpleaños con oferta especial</li>
        </ul>
    </div>
    <div class="p-6 bg-orange-50 rounded-xl border border-orange-100">
        <h4 class="font-bold text-orange-700 mb-3 flex items-center gap-2">
            <span>📸</span> Presencia Online
        </h4>
        <ul class="space-y-2 text-sm">
            <li>• Web responsive (adaptable a móviles)</li>
            <li>• Integración con Google Business Profile</li>
            <li>• Enlaces a redes sociales (Instagram, Facebook)</li>
            <li>• Sección de contacto con mapa de ubicación</li>
            <li>• Horarios actualizados visibles</li>
            <li>• Formulario de contacto y teléfono clicable</li>
        </ul>
    </div>
</div>

<hr class="my-8">

<h3>4.2. Requisitos No Funcionales ⚙️</h3>

<p>Los requisitos no funcionales describen <strong>cómo debe comportarse</strong> el sistema:</p>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 p-3 text-left">Categoría</th>
            <th class="border border-slate-300 p-3 text-left">Requisito</th>
            <th class="border border-slate-300 p-3 text-center">Prioridad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 p-3" rowspan="3"><strong>Rendimiento</strong></td>
            <td class="border border-slate-300 p-3">La web debe cargar en menos de 3 segundos</td>
            <td class="border border-slate-300 p-3 text-center">🔴 Alta</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">El sistema de reservas debe soportar 100 consultas simultáneas</td>
            <td class="border border-slate-300 p-3 text-center">🟡 Media</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3">La carta digital debe verse correctamente en cualquier móvil</td>
            <td class="border border-slate-300 p-3 text-center">🔴 Alta</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3" rowspan="2"><strong>Seguridad</strong></td>
            <td class="border border-slate-300 p-3">Los datos de clientes deben estar protegidos (RGPD)</td>
            <td class="border border-slate-300 p-3 text-center">🔴 Alta</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3">Conexión HTTPS obligatoria en toda la web</td>
            <td class="border border-slate-300 p-3 text-center">🔴 Alta</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3" rowspan="2"><strong>Usabilidad</strong></td>
            <td class="border border-slate-300 p-3">El personal debe poder usar el sistema con 2h de formación</td>
            <td class="border border-slate-300 p-3 text-center">🔴 Alta</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">Los clientes deben poder reservar en menos de 2 minutos</td>
            <td class="border border-slate-300 p-3 text-center">🟡 Media</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3"><strong>Disponibilidad</strong></td>
            <td class="border border-slate-300 p-3">El sistema debe estar disponible 99% del tiempo</td>
            <td class="border border-slate-300 p-3 text-center">🟡 Media</td>
        </tr>
    </tbody>
</table>

<hr class="my-8">

<h3>4.3. Perfil del Usuario 👥</h3>

<p>Identifica los diferentes tipos de usuarios que interactuarán con el sistema:</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
        <div class="text-4xl mb-3">🍽️</div>
        <h4 class="font-bold text-slate-700 mb-2">Cliente Final</h4>
        <ul class="space-y-2 text-sm">
            <li><strong>Edad:</strong> 18-75 años</li>
            <li><strong>Perfil:</strong> Comensales locales y turistas</li>
            <li><strong>Necesidades:</strong> Reservar fácil, ver menú, contactar</li>
            <li><strong>Dispositivo:</strong> Móvil (80%), ordenador (20%)</li>
        </ul>
    </div>
    <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
        <div class="text-4xl mb-3">👨‍🍳</div>
        <h4 class="font-bold text-slate-700 mb-2">Personal de Sala</h4>
        <ul class="space-y-2 text-sm">
            <li><strong>Usuarios:</strong> 4 personas</li>
            <li><strong>Necesidades:</strong> Ver reservas del día, gestionar mesas</li>
            <li><strong>Formación:</strong> Básica en digital</li>
            <li><strong>Dispositivo:</strong> Tablet o móvil del restaurante</li>
        </ul>
    </div>
    <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
        <div class="text-4xl mb-3">📊</div>
        <h4 class="font-bold text-slate-700 mb-2">Gerencia</h4>
        <ul class="space-y-2 text-sm">
            <li><strong>Usuarios:</strong> 2 propietarios</li>
            <li><strong>Necesidades:</strong> Estadísticas, gestión de clientes, marketing</li>
            <li><strong>Formación:</strong> Media en digital</li>
            <li><strong>Dispositivo:</strong> Ordenador y móvil personal</li>
        </ul>
    </div>
</div>

<hr class="my-8">

<h3>4.4. Restricciones del Proyecto ⚠️</h3>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>🚧</span>
        <span>Limitaciones a Considerar</span>
    </div>
    <ul class="space-y-2">
        <li>• <strong>Presupuesto limitado:</strong> Máximo 1.500€ de inversión inicial</li>
        <li>• <strong>Tiempo de implementación:</strong> 3 meses como máximo</li>
        <li>• <strong>Formación del personal:</strong> Máximo 8 horas por empleado</li>
        <li>• <strong>Compatibilidad:</strong> Debe funcionar con el TPV actual</li>
        <li>• <strong>Idiomas:</strong> Español e inglés mínimo (turismo en Valencia)</li>
        <li>• <strong>Accesibilidad:</strong> Cumplir normativa básica de accesibilidad web</li>
    </ul>
</div>

<hr class="my-8">

<h3>4.5. Criterios de Aceptación ✅</h3>

<p>Define cuándo se considerará <strong>completado</strong> el proyecto:</p>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 p-3 text-left">Criterio</th>
            <th class="border border-slate-300 p-3 text-center">Cómo Verificar</th>
            <th class="border border-slate-300 p-3 text-center">Responsable</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 p-3">Sistema de reservas operativo</td>
            <td class="border border-slate-300 p-3 text-center">Hacer 5 reservas de prueba</td>
            <td class="border border-slate-300 p-3 text-center">Alumnado + Tutor</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">Carta QR funcional en sala</td>
            <td class="border border-slate-300 p-3 text-center">Escanear desde 3 móviles diferentes</td>
            <td class="border border-slate-300 p-3 text-center">Alumnado</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3">Personal formado</td>
            <td class="border border-slate-300 p-3 text-center">Cuestionario de evaluación</td>
            <td class="border border-slate-300 p-3 text-center">Tutor + Gerencia</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">Web publicada y accesible</td>
            <td class="border border-slate-300 p-3 text-center">Verificar desde diferentes navegadores</td>
            <td class="border border-slate-300 p-3 text-center">Alumnado</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3">Primeras 10 reservas online</td>
            <td class="border border-slate-300 p-3 text-center">Registro en el sistema</td>
            <td class="border border-slate-300 p-3 text-center">Gerencia</td>
        </tr>
    </tbody>
</table>
`;
