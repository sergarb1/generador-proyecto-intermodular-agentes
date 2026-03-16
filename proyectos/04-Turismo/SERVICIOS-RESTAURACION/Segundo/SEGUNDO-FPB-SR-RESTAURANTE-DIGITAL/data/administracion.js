window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.administracion = `
<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>⚙️</span>
        <span>Administración y Gestión Diaria</span>
    </div>
    <p>En esta sección establecerás los <strong>protocolos de gestión</strong> para el funcionamiento diario del sistema digital.</p>
</div>

<h3>7.1. Protocolo de Gestión de Reservas 📱</h3>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>📋</span>
        <span>Procedimiento Diario</span>
    </div>
    <p>El personal de sala debe seguir estos pasos cada día:</p>
</div>

<h4>🌅 Por la Mañana (Apertura)</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 p-3 text-center">Hora</th>
            <th class="border border-slate-300 p-3 text-left">Tarea</th>
            <th class="border border-slate-300 p-3 text-center">Responsable</th>
            <th class="border border-slate-300 p-3 text-center">Verificación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 p-3 text-center">10:00</td>
            <td class="border border-slate-300 p-3">Revisar reservas del día en el sistema</td>
            <td class="border border-slate-300 p-3 text-center">Jefe de sala</td>
            <td class="border border-slate-300 p-3 text-center">✅ Listado impreso</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3 text-center">10:15</td>
            <td class="border border-slate-300 p-3">Confirmar reservas pendientes por teléfono</td>
            <td class="border border-slate-300 p-3 text-center">Recepción</td>
            <td class="border border-slate-300 p-3 text-center">✅ Todas confirmadas</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3 text-center">10:45</td>
            <td class="border border-slate-300 p-3">Preparar mesas según reservas (ubicación, nº personas)</td>
            <td class="border border-slate-300 p-3 text-center">Sala</td>
            <td class="border border-slate-300 p-3 text-center">✅ Mesas asignadas</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3 text-center">11:00</td>
            <td class="border border-slate-300 p-3">Verificar alergias/preferencias registradas</td>
            <td class="border border-slate-300 p-3 text-center">Cocina + Sala</td>
            <td class="border border-slate-300 p-3 text-center">✅ Notas en comandas</td>
        </tr>
    </tbody>
</table>

<h4>🌆 Durante el Servicio</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 p-3 text-left">Situación</th>
            <th class="border border-slate-300 p-3 text-left">Acción Requerida</th>
            <th class="border border-slate-300 p-3 text-center">Responsable</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 p-3">Cliente llega sin reserva</td>
            <td class="border border-slate-300 p-3">Consultar disponibilidad en sistema y registrar como "walk-in"</td>
            <td class="border border-slate-300 p-3 text-center">Recepción</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">Cliente con reserva no aparece</td>
            <td class="border border-slate-300 p-3">Esperar 15 min, luego marcar como "no-show" y liberar mesa</td>
            <td class="border border-slate-300 p-3 text-center">Jefe de sala</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3">Cliente quiere modificar reserva</td>
            <td class="border border-slate-300 p-3">Actualizar en sistema (hora/personas) si hay disponibilidad</td>
            <td class="border border-slate-300 p-3 text-center">Recepción</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">Overbooking (más reservas que mesas)</td>
            <td class="border border-slate-300 p-3">Ofrecer alternativa (otra hora, otro día) o descuento en próxima visita</td>
            <td class="border border-slate-300 p-3 text-center">Gerencia</td>
        </tr>
    </tbody>
</table>

<h4>🌙 Cierre del Día</h4>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
        <h4 class="font-bold text-slate-700 mb-3">📊 Registro de Datos</h4>
        <ul class="space-y-2 text-sm">
            <li>• Anotar nº total de cubiertos servidos</li>
            <li>• Registrar nº de no-shows del día</li>
            <li>• Apuntar incidencias técnicas si las hay</li>
            <li>• Guardar copia de seguridad de reservas</li>
        </ul>
    </div>
    <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
        <h4 class="font-bold text-slate-700 mb-3">📱 Revisión del Sistema</h4>
        <ul class="space-y-2 text-sm">
            <li>• Verificar que todas las reservas están cerradas</li>
            <li>• Comprobar que los emails de confirmación se enviaron</li>
            <li>• Revisar nuevas reservas para días siguientes</li>
            <li>• Actualizar disponibilidad si es necesario</li>
        </ul>
    </div>
</div>

<hr class="my-8">

<h3>7.2. Protocolo de Atención de Quejas y Reclamaciones ⚠️</h3>

<div class="callout callout-error my-6">
    <div class="callout-title">
        <span>🚨</span>
        <span>Importante</span>
    </div>
    <p class="mb-0">Una queja bien gestionada puede convertir a un cliente insatisfecho en un cliente fiel. Sigue el método <strong>LEARN</strong>:</p>
</div>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 p-3 text-center">Paso</th>
            <th class="border border-slate-300 p-3 text-left">Acción</th>
            <th class="border border-slate-300 p-3 text-left">Ejemplo de Frase</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 p-3 text-center font-bold">L</td>
            <td class="border border-slate-300 p-3"><strong>Listen</strong> (Escuchar)</td>
            <td class="border border-slate-300 p-3">"Le escucho, cuénteme qué ha ocurrido"</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3 text-center font-bold">E</td>
            <td class="border border-slate-300 p-3"><strong>Empathize</strong> (Empatizar)</td>
            <td class="border border-slate-300 p-3">"Entiendo perfectamente su molestia"</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3 text-center font-bold">A</td>
            <td class="border border-slate-300 p-3"><strong>Apologize</strong> (Disculparse)</td>
            <td class="border border-slate-300 p-3">"Le pedimos disculpas por lo ocurrido"</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3 text-center font-bold">R</td>
            <td class="border border-slate-300 p-3"><strong>React</strong> (Reaccionar)</td>
            <td class="border border-slate-300 p-3">"Vamos a solucionarlo inmediatamente"</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3 text-center font-bold">N</td>
            <td class="border border-slate-300 p-3"><strong>Nurture</strong> (Cuidar)</td>
            <td class="border border-slate-300 p-3">"Esperamos volver a recibirle pronto"</td>
        </tr>
    </tbody>
</table>

<h4>📝 Registro de Incidencias</h4>
<p>Toda queja debe quedar registrada en el sistema para su seguimiento:</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 p-3 text-left">Campo</th>
            <th class="border border-slate-300 p-3 text-left">Descripción</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 p-3">Fecha y hora</td>
            <td class="border border-slate-300 p-3">Cuándo ocurrió la incidencia</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">Cliente afectado</td>
            <td class="border border-slate-300 p-3">Nombre y datos de contacto</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3">Tipo de incidencia</td>
            <td class="border border-slate-300 p-3">Comida fría, espera larga, error en cuenta, trato...</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">Descripción</td>
            <td class="border border-slate-300 p-3">Relato detallado de lo ocurrido</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3">Solución aplicada</td>
            <td class="border border-slate-300 p-3">Descuento, plato de cortesía, invitación...</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">Seguimiento</td>
            <td class="border border-slate-300 p-3">Email de disculpa, llamada de seguimiento...</td>
        </tr>
    </tbody>
</table>

<hr class="my-8">

<h3>7.3. Gestión de la Base de Datos de Clientes 👥</h3>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>💡</span>
        <span>Importancia del RGPD</span>
    </div>
    <p>El tratamiento de datos de clientes debe cumplir estrictamente con el <strong>Reglamento General de Protección de Datos (RGPD)</strong>.</p>
</div>

<h4>✅ Obligaciones Legales</h4>
<ul class="list-disc pl-6 space-y-3">
    <li><strong>Consentimiento explícito:</strong> El cliente debe aceptar explícitamente el tratamiento de sus datos (checkbox no premarcado)</li>
    <li><strong>Finalidad clara:</strong> Informar para qué se usan los datos (reservas, marketing, fidelización)</li>
    <li><strong>Derecho al olvido:</strong> El cliente puede solicitar la eliminación de sus datos en cualquier momento</li>
    <li><strong>Acceso y rectificación:</strong> El cliente puede consultar y modificar sus datos</li>
    <li><strong>Seguridad:</strong> Los datos deben estar protegidos con medidas técnicas adecuadas</li>
    <li><strong>Política de privacidad:</strong> Debe estar visible y accesible en la web</li>
</ul>

<h4>📊 Segmentación de Clientes para Marketing</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 p-3 text-left">Segmento</th>
            <th class="border border-slate-300 p-3 text-left">Criterio</th>
            <th class="border border-slate-300 p-3 text-left">Acción de Marketing</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 p-3">Clientes frecuentes</td>
            <td class="border border-slate-300 p-3">+5 visitas en 6 meses</td>
            <td class="border border-slate-300 p-3">Programa de fidelización, descuentos exclusivos</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">Clientes ocasionales</td>
            <td class="border border-slate-300 p-3">2-4 visitas en 6 meses</td>
            <td class="border border-slate-300 p-3">Emails con novedades, menú del mes</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3">Primera visita</td>
            <td class="border border-slate-300 p-3">1 visita registrada</td>
            <td class="border border-slate-300 p-3">Email de bienvenida, oferta segunda visita</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">Clientes inactivos</td>
            <td class="border border-slate-300 p-3">Sin visitas en 6 meses</td>
            <td class="border border-slate-300 p-3">Campaña de recuperación, descuento especial</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3">Cumpleaños</td>
            <td class="border border-slate-300 p-3">Fecha de cumpleaños registrada</td>
            <td class="border border-slate-300 p-3">Email con regalo/postre gratuito esa semana</td>
        </tr>
    </tbody>
</table>

<hr class="my-8">

<h3>7.4. Protocolo de Gestión de Reseñas Online ⭐</h3>

<h4>📱 Monitorización Diaria</h4>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-xl border border-blue-100">
        <h4 class="font-bold text-blue-700 mb-3">Google My Business</h4>
        <ul class="space-y-2 text-sm">
            <li>• Revisar diariamente</li>
            <li>• Responder en 24-48h</li>
            <li>• Agradecer las positivas</li>
            <li>• Gestionar las negativas</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-xl border border-green-100">
        <h4 class="font-bold text-green-700 mb-3">TheFork / TripAdvisor</h4>
        <ul class="space-y-2 text-sm">
            <li>• Revisar cada 2 días</li>
            <li>• Responder profesionalmente</li>
            <li>• Invitar a volver</li>
            <li>• Reportar reseñas falsas</li>
        </ul>
    </div>
    <div class="p-6 bg-purple-50 rounded-xl border border-purple-100">
        <h4 class="font-bold text-purple-700 mb-3">Instagram / Facebook</h4>
        <ul class="space-y-2 text-sm">
            <li>• Revisar comentarios en posts</li>
            <li>• Responder mensajes directos</li>
            <li>• Compartir menciones de clientes</li>
            <li>• Moderar comentarios inapropiados</li>
        </ul>
    </div>
</div>

<h4>✍️ Plantillas de Respuesta a Reseñas</h4>

<div class="callout callout-success my-6">
    <div class="callout-title">
        <span>⭐</span>
        <span>Reseña Positiva (5 estrellas)</span>
    </div>
    <pre class="text-sm bg-green-50 p-4 rounded-lg overflow-x-auto border border-green-200">
¡Hola [Nombre]!

Muchas gracias por tu valoración de 5 estrellas y por tus amables palabras. 
Nos alegra mucho saber que disfrutaste de [mencionar plato o aspecto destacado].

Todo el equipo de "El Rincón del Sabor" trabaja cada día para ofrecer 
la mejor experiencia gastronómica.

¡Esperamos verte pronto de nuevo!

Un saludo cordial,
[Nombre del gerente]
    </pre>
</div>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Reseña Negativa (1-3 estrellas)</span>
    </div>
    <pre class="text-sm bg-yellow-50 p-4 rounded-lg overflow-x-auto border border-yellow-200">
Estimado/a [Nombre],

Lamentamos sinceramente que su experiencia no haya estado a la altura 
de sus expectativas. En "El Rincón del Sabor" nos esforzamos por ofrecer 
un servicio de calidad y sentimos haber fallado en esta ocasión.

Nos gustaría poder hablar personalmente con usted para conocer más 
detalles y ofrecerle una solución. Puede contactar con nosotros en 
[teléfono] o [email].

Esperamos tener la oportunidad de demostrarle nuestra verdadera calidad.

Atentamente,
[Nombre del gerente]
    </pre>
</div>

<hr class="my-8">

<h3>7.5. Checklist de Administración Diaria ✅</h3>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📋</span>
        <span>Tareas Diarias del Personal</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ul class="space-y-2">
            <li>☐ Revisar reservas del día (10:00)</li>
            <li>☐ Confirmar reservas pendientes</li>
            <li>☐ Preparar mesas según reservas</li>
            <li>☐ Verificar alergias registradas</li>
            <li>☐ Actualizar disponibilidad en sistema</li>
        </ul>
        <ul class="space-y-2">
            <li>☐ Responder reseñas online</li>
            <li>☐ Registrar incidencias del día</li>
            <li>☐ Publicar en redes sociales</li>
            <li>☐ Revisar reservas días siguientes</li>
            <li>☐ Cerrar caja y cuadrar reservas</li>
        </ul>
    </div>
</div>
`;
