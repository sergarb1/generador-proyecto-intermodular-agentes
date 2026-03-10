// Requisitos del Proyecto
window.sectionsContent.requisitos = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📋</span>
        <span>Análisis de Requisitos</span>
    </div>
    <p class="mb-0">En esta sección identificarás todos los trámites, permisos y documentación necesaria.</p>
</div>

<h3>4.1. Trámites Administrativos 📝</h3>

<h4>Checklist de Trámites</h4>

<p>Completa y marca cada trámite a medida que lo vayas gestionando:</p>

<h4 style="margin-top:0; color:#1e40af;">Trámites con el Equipo Directivo</h4>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Trámite</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Modelo/Tipo</th>
            <th class="border border-slate-300 px-4 py-2 text-left">¿Cuándo?</th>
            <th class="border border-slate-300 px-4 py-2 text-left">¿Quién?</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Estado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Solicitud de uso de instalaciones</td>
            <td class="border border-slate-300 px-4 py-2">Instancia oficial</td>
            <td class="border border-slate-300 px-4 py-2">Marzo</td>
            <td class="border border-slate-300 px-4 py-2">Equipo organizador</td>
            <td class="border border-slate-300 px-4 py-2">⬜ Pendiente</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">Aprobación del presupuesto</td>
            <td class="border border-slate-300 px-4 py-2">Memoria económica</td>
            <td class="border border-slate-300 px-4 py-2">Abril</td>
            <td class="border border-slate-300 px-4 py-2">Coordinador/a</td>
            <td class="border border-slate-300 px-4 py-2">⬜ Pendiente</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Autorización de salida académica (si procede)</td>
            <td class="border border-slate-300 px-4 py-2">Formulario centro</td>
            <td class="border border-slate-300 px-4 py-2">Mayo</td>
            <td class="border border-slate-300 px-4 py-2">Secretaría</td>
            <td class="border border-slate-300 px-4 py-2">⬜ Pendiente</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">Reserva de fecha en calendario escolar</td>
            <td class="border border-slate-300 px-4 py-2">-</td>
            <td class="border border-slate-300 px-4 py-2">Marzo</td>
            <td class="border border-slate-300 px-4 py-2">Jefatura de Estudios</td>
            <td class="border border-slate-300 px-4 py-2">⬜ Pendiente</td>
        </tr>
    </tbody>
</table>

<h4 style="margin-top:0; color:#1e40af;">Trámites con las Familias</h4>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Documento</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Finalidad</th>
            <th class="border border-slate-300 px-4 py-2 text-left">¿Cuándo recoger?</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Modelo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Autorización de participación</td>
            <td class="border border-slate-300 px-4 py-2">Permiso para que el alumno participe</td>
            <td class="border border-slate-300 px-4 py-2">Abril</td>
            <td class="border border-slate-300 px-4 py-2">Ver Anexo 1</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">Autorización de uso de imagen</td>
            <td class="border border-slate-300 px-4 py-2">Fotos/vídeos del evento</td>
            <td class="border border-slate-300 px-4 py-2">Abril</td>
            <td class="border border-slate-300 px-4 py-2">Ver Anexo 2</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Confirmación de asistencia (RSVP)</td>
            <td class="border border-slate-300 px-4 py-2">Número de invitados</td>
            <td class="border border-slate-300 px-4 py-2">Mayo</td>
            <td class="border border-slate-300 px-4 py-2">Ver Anexo 3</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">Justificante de pago</td>
            <td class="border border-slate-300 px-4 py-2">Aportación económica</td>
            <td class="border border-slate-300 px-4 py-2">Mayo</td>
            <td class="border border-slate-300 px-4 py-2">Recibo/Transferencia</td>
        </tr>
    </tbody>
</table>

<h4 style="margin-top:0; color:#1e40af;">Trámites con Proveedores</h4>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Proveedor</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Documento Necesario</th>
            <th class="border border-slate-300 px-4 py-2 text-left">¿Cuándo firmar?</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Aspectos Clave</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Fotógrafo</td>
            <td class="border border-slate-300 px-4 py-2">Contrato de prestación de servicios</td>
            <td class="border border-slate-300 px-4 py-2">Antes del evento</td>
            <td class="border border-slate-300 px-4 py-2">Derechos de imagen, número de horas, entrega</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">Catering</td>
            <td class="border border-slate-300 px-4 py-2">Pedido confirmado</td>
            <td class="border border-slate-300 px-4 py-2">1 semana antes</td>
            <td class="border border-slate-300 px-4 py-2">Número de personas, alérgenos, horario</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Tienda birretes</td>
            <td class="border border-slate-300 px-4 py-2">Pedido formal</td>
            <td class="border border-slate-300 px-4 py-2">Abril</td>
            <td class="border border-slate-300 px-4 py-2">Tallas, fecha de entrega, precio</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">Imprenta</td>
            <td class="border border-slate-300 px-4 py-2">Presupuesto aceptado</td>
            <td class="border border-slate-300 px-4 py-2">Mayo</td>
            <td class="border border-slate-300 px-4 py-2">Calidad, cantidad, fecha de recogida</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Importante: Contratos y Proveedores</span>
    </div>
    <p>Si el contrato lo firma el centro educativo, debe hacerlo el equipo directivo. El alumnado puede negociar condiciones, pero la firma legal corresponde a la dirección del centro.</p>
</div>

<h3>4.2. Documentación Oficial a Generar 📄</h3>

<h4>Modelos de Documentos</h4>

<p>Deberás crear los siguientes documentos. Usa procesador de textos (Word/Google Docs):</p>

<h4 style="margin-top:0; color:#1e40af;">1. Solicitud Formal a Dirección</h4>

<div class="callout callout-info" style="font-family: monospace; font-size: 0.85rem; white-space: pre-wrap; background: #f8fafc;">
A LA ATENCIÓN DEL EQUIPO DIRECTIVO DEL IES SERRA PERENXISA

D./Dña. [Nombre del representante del alumnado], alumno/a de 2º FPB Servicios Administrativos,
como representante de la Comisión Organizadora de la Graduación 2026,

EXPONE:

Que deseamos organizar el acto de graduación del alumnado de 4º ESO y 2º FPB,
que tendrá lugar en junio de 2026.

SOLICITA:

1. Autorización para el uso del [Salón de Actos/Gimnasio] el día [FECHA] a las [HORA].
2. Autorización para realizar las actividades de organización del evento.
3. Apoyo institucional para las gestiones con proveedores.

Adjuntamos memoria del proyecto y presupuesto estimado.

En [Población], a [FECHA]

Fdo.: [Nombre y Apellidos]
    Representante del Alumnado
    2º FPB Servicios Administrativos
</div>

<h4 style="margin-top:0; color:#1e40af;">2. Carta a las Familias (Información del Proyecto)</h4>

<div class="callout callout-info" style="font-family: monospace; font-size: 0.85rem; white-space: pre-wrap; background: #f8fafc;">
ESTIMADAS FAMILIAS:

Nos dirigimos a ustedes para informarles que el alumnado de 2º FPB Servicios Administrativos,
en colaboración con el alumnado de 4º ESO, está organizando el acto de graduación 2026.

Adjuntamos información detallada sobre:
- Fecha y lugar del evento
- Programa previsto
- Aportación económica solicitada
- Plazos de inscripción

Quedamos a su disposición para cualquier consulta.

Atentamente,

La Comisión Organizadora
IES Serra Perenxisa
[Contacto: email/teléfono]
</div>

<h4 style="margin-top:0; color:#1e40af;">3. Presupuesto para Familias</h4>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Concepto</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Importe</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Aportación por graduando/a</td>
            <td class="border border-slate-300 px-4 py-2">15,00€</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">Entradas adicionales (familiares)</td>
            <td class="border border-slate-300 px-4 py-2">5,00€ por entrada</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Birrete y estola (opcional)</td>
            <td class="border border-slate-300 px-4 py-2">8,00€</td>
        </tr>
        <tr class="font-bold bg-slate-100">
            <td class="border border-slate-300 px-4 py-2">Total estimado por graduando</td>
            <td class="border border-slate-300 px-4 py-2">23,00€</td>
        </tr>
    </tbody>
</table>

<p><strong>Formas de pago aceptadas:</strong></p>
<ul class="my-4 space-y-2">
    <li>Transferencia bancaria a la cuenta del AMPA</li>
    <li>Efectivo en Secretaría (con justificante)</li>
    <li>Bizum (si está disponible)</li>
</ul>

<p><strong>Plazo límite de pago:</strong> [FECHA]</p>

<h3>4.3. Requisitos Legales y Normativos ⚖️</h3>

<h4>Protección de Datos (RGPD)</h4>

<p>El <strong>Reglamento General de Protección de Datos</strong> es fundamental en eventos escolares:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-5 bg-blue-50 rounded-xl border border-blue-200">
        <h4 style="margin-top: 0; color: #1e40af;">📷 Uso de Imagen</h4>
        <ul class="my-3 space-y-1" style="font-size: 0.95rem;">
            <li>Necesario consentimiento escrito de familias</li>
            <li>Informar del uso que se dará a las imágenes</li>
            <li>Respetar derecho al olvido (quien no quiera salir)</li>
            <li>No publicar en redes sin autorización explícita</li>
        </ul>
    </div>
    <div class="p-5 bg-green-50 rounded-xl border border-green-200">
        <h4 style="margin-top: 0; color: #166534;">📧 Datos de Contacto</h4>
        <ul class="my-3 space-y-1" style="font-size: 0.95rem;">
            <li>Usar emails solo para información del evento</li>
            <li>No compartir listas de contactos con terceros</li>
            <li>Eliminar datos tras finalizar el evento</li>
            <li>Usar CCO en emails masivos para proteger privacidad</li>
        </ul>
    </div>
</div>

<h4>Normativa de Seguridad</h4>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Aspecto</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Requisito</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Responsable</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2">🚪 <strong>Aforo</strong></td>
            <td class="border border-slate-300 px-4 py-2">No superar capacidad del espacio</td>
            <td class="border border-slate-300 px-4 py-2">Equipo organizador</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">🧯 <strong>Emergencias</strong></td>
            <td class="border border-slate-300 px-4 py-2">Conocer salidas y protocolo de evacuación</td>
            <td class="border border-slate-300 px-4 py-2">Todo el equipo</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2">⚕️ <strong>Primeros Auxilios</strong></td>
            <td class="border border-slate-300 px-4 py-2">Tener botiquín y persona formada</td>
            <td class="border border-slate-300 px-4 py-2">Coordinador/a</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">🔒 <strong>Accesos</strong></td>
            <td class="border border-slate-300 px-4 py-2">Controlar entrada/salida de invitados</td>
            <td class="border border-slate-300 px-4 py-2">Equipo de acogida</td>
        </tr>
    </tbody>
</table>

<h4>Accesibilidad</h4>

<p>Asegúrate de que el evento es <strong>accesible para todas las personas</strong>:</p>

<ul class="my-4 space-y-2">
    <li>El espacio tiene acceso para sillas de ruedas</li>
    <li>Hay asientos reservados para personas con movilidad reducida</li>
    <li>El sonido es audible para personas con dificultad auditiva</li>
    <li>La información está en formato legible para todos</li>
</ul>

<h3>4.4. Flujo de Trabajo Administrativo 📊</h3>

<h4>Diagrama de Proceso</h4>

<p>Diseña un flujograma que muestre el proceso completo. Aquí tienes una plantilla:</p>

<div class="callout callout-info" style="font-family: monospace; font-size: 0.8rem; overflow-x: auto;">
┌─────────────────┐
│ 1. Constitución │
│    del Equipo   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ 2. Investigación│
│    y Presupuestos│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ 3. Aprobación   │
│    Dirección    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ 4. Comunicación │
│    a Familias   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ 5. Recogida de  │
│    Autorizaciones│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ 6. Confirmación │
│    de Proveedores│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ 7. Celebración  │
│    del Evento   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ 8. Evaluación   │
│    y Cierre     │
└─────────────────┘
</div>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span>
        <span>Tarea Práctica</span>
    </div>
    <p>Crea tu propio diagrama de flujo usando <strong>Draw.io</strong> (gratis online) o PowerPoint, e inclúyelo en los Anexos de tu proyecto.</p>
</div>

<h3>4.5. Checklist Final de Requisitos ✅</h3>

<p>Antes de continuar, verifica que has completado:</p>

<ul class="my-4 space-y-2">
    <li>Lista completa de trámites identificados</li>
    <li>Modelos de documentos creados (al menos borradores)</li>
    <li>Conocimiento de normativa RGPD aplicado</li>
    <li>Flujo de trabajo diseñado</li>
    <li>Checklist de seguimiento preparado</li>
</ul>

<div class="callout callout-info">
    <div class="callout-title">
        <span>💡</span>
        <span>Consejo de Organización</span>
    </div>
    <p class="mb-0">Crea una <strong>carpeta compartida</strong> (Google Drive/OneDrive) para almacenar toda la documentación del proyecto. ¡Te será muy útil!</p>
</div>
`;
