// Introducción del Proyecto
window.sectionsContent.introduccion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>👋</span>
        <span>Bienvenida al Proyecto</span>
    </div>
    <p class="mb-0">Esta sección te presenta el contexto real del proyecto y la problemática que vas a resolver.</p>
</div>

<h3>1.1. Contexto del Proyecto 🏫</h3>

<h4>El Centro Educativo</h4>

<p>
    Imagina que tu centro educativo, el <strong>IES Serra Perenxisa</strong>, va a celebrar la <strong>graduación conjunta</strong> del alumnado que finaliza sus estudios de:
</p>

<ul>
    <li><strong>4º de Educación Secundaria Obligatoria (ESO)</strong></li>
    <li><strong>2º de FP Básica en Servicios Administrativos</strong></li>
</ul>

<p>
    Este evento representa un momento muy especial en la vida académica del alumnado, ya que marca el <strong>fin de una etapa</strong> y el comienzo de nuevos caminos profesionales y académicos.
</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎓</div>
        <h4 style="margin: 0 0 0.5rem 0; color: #1e40af;">Promoción 2026</h4>
        <p style="font-size: 0.9rem; margin: 0; color: #475569;">Aproximadamente 80-100 graduandos entre ESO y FPB</p>
    </div>
    <div class="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">👨‍👩‍👧‍👦</div>
        <h4 style="margin: 0 0 0.5rem 0; color: #166534;">Familias</h4>
        <p style="font-size: 0.9rem; margin: 0; color: #475569;">Unos 200-300 familiares asistentes esperados</p>
    </div>
    <div class="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">📅</div>
        <h4 style="margin: 0 0 0.5rem 0; color: #5b21b5;">Fecha Límite</h4>
        <p style="font-size: 0.9rem; margin: 0; color: #475569;">Junio 2026 - ¡El tiempo corre!</p>
    </div>
</div>

<h4>El Reto Organizativo</h4>

<p>Organizar una graduación escolar no es una tarea sencilla. Requiere:</p>

<ul>
    <li><strong>Coordinación entre múltiples grupos</strong>: alumnado, profesorado, familias, equipo directivo</li>
    <li><strong>Gestión de recursos económicos limitados</strong>: hay que optimizar cada euro</li>
    <li><strong>Cumplimiento de trámites administrativos</strong>: permisos, autorizaciones, contratos</li>
    <li><strong>Atención al detalle</strong>: el protocolo y la imagen del evento deben ser impecables</li>
</ul>

<h3>1.2. Problemática Detectada ⚠️</h3>

<p>En ediciones anteriores, la organización de la graduación ha presentado los siguientes <strong>problemas</strong>:</p>

<div class="callout callout-error">
    <div class="callout-title">
        <span>❌</span>
        <span>Problemas Habituales en Graduaciones Anteriores</span>
    </div>
    <ul style="margin: 0; padding-left: 1.5rem;">
        <li style="margin-bottom: 0.5rem;"><strong>Desorganización general:</strong> Falta de planificación temprana → decisiones de última hora</li>
        <li style="margin-bottom: 0.5rem;"><strong>Descontrol presupuestario:</strong> Gastos no previstos que superan el presupuesto inicial</li>
        <li style="margin-bottom: 0.5rem;"><strong>Comunicación deficiente:</strong> Información que no llega a tiempo a las familias</li>
        <li style="margin-bottom: 0.5rem;"><strong>Documentación incompleta:</strong> Autorizaciones y permisos gestionados tarde</li>
        <li style="margin-bottom: 0.5rem;"><strong>Coordinación insuficiente:</strong> El día del evento hay confusiones y duplicidad de tareas</li>
    </ul>
</div>

<h4>Consecuencias de una Mala Organización</h4>

<table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0;">
    <thead>
        <tr style="background: #f1f5f9; border-bottom: 2px solid #e2e8f0;">
            <th style="padding: 0.75rem; text-align: left; color: #1e293b;">Problema</th>
            <th style="padding: 0.75rem; text-align: left; color: #1e293b;">Consecuencia</th>
            <th style="padding: 0.75rem; text-align: left; color: #1e293b;">Impacto</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 0.75rem;">Falta de planificación</td>
            <td style="padding: 0.75rem;">Estrés y prisas de última hora</td>
            <td style="padding: 0.75rem;">😰 Alto</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
            <td style="padding: 0.75rem;">Descontrol económico</td>
            <td style="padding: 0.75rem;">Gastos excesivos para las familias</td>
            <td style="padding: 0.75rem;">💸 Alto</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 0.75rem;">Mala comunicación</td>
            <td style="padding: 0.75rem;">Familias mal informadas</td>
            <td style="padding: 0.75rem;">📢 Medio</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
            <td style="padding: 0.75rem;">Trámites incompletos</td>
            <td style="padding: 0.75rem;">Problemas legales o de seguridad</td>
            <td style="padding: 0.75rem;">⚖️ Muy Alto</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 0.75rem;">Coordinación deficiente</td>
            <td style="padding: 0.75rem;">Evento poco profesional</td>
            <td style="padding: 0.75rem;">🎭 Alto</td>
        </tr>
    </tbody>
</table>

<h3>1.3. Propuesta de Solución 💡</h3>

<h4>El Proyecto "Graduación Escolar 2026"</h4>

<p>
    Como alumnado de <strong>2º de FP Básica en Servicios Administrativos</strong>, vais a convertir este reto en una <strong>oportunidad de aprendizaje real</strong>, aplicando todos los conocimientos administrativos que habéis adquirido.
</p>

<p>Vuestra misión será crear una <strong>"Comisión Organizadora de Graduación"</strong> que se encargue de:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-5 bg-blue-50 rounded-xl border border-blue-100">
        <h4 style="margin-top: 0; color: #1e40af;">📋 Área Administrativa</h4>
        <ul style="margin: 0.5rem 0 0 1.25rem; font-size: 0.95rem;">
            <li>Redacción de documentos oficiales</li>
            <li>Solicitud de permisos y autorizaciones</li>
            <li>Gestión del archivo del evento</li>
            <li>Comunicación con el equipo directivo</li>
        </ul>
    </div>
    <div class="p-5 bg-green-50 rounded-xl border border-green-100">
        <h4 style="margin-top: 0; color: #166534;">💰 Área Económica</h4>
        <ul style="margin: 0.5rem 0 0 1.25rem; font-size: 0.95rem;">
            <li>Elaboración del presupuesto</li>
            <li>Búsqueda de financiación y patrocinios</li>
            <li>Control de ingresos y gastos</li>
            <li>Negociación con proveedores</li>
        </ul>
    </div>
    <div class="p-5 bg-purple-50 rounded-xl border border-purple-100">
        <h4 style="margin-top: 0; color: #5b21b5;">📢 Área de Comunicación</h4>
        <ul style="margin: 0.5rem 0 0 1.25rem; font-size: 0.95rem;">
            <li>Diseño de imagen corporativa</li>
            <li>Gestión de invitaciones</li>
            <li>Comunicación con familias</li>
            <li>Cobertura del evento (fotos/vídeo)</li>
        </ul>
    </div>
    <div class="p-5 bg-orange-50 rounded-xl border border-orange-100">
        <h4 style="margin-top: 0; color: #9a3412;">🎪 Área de Logística</h4>
        <ul style="margin: 0.5rem 0 0 1.25rem; font-size: 0.95rem;">
            <li>Reserva y preparación del espacio</li>
            <li>Coordinación de proveedores</li>
            <li>Organización del protocolo</li>
            <li>Atención a invitados el día del evento</li>
        </ul>
    </div>
</div>

<h3>1.4. Objetivos SMART 🎯</h3>

<p>Para asegurar el éxito del proyecto, establecemos los siguientes objetivos según la metodología <strong>SMART</strong>:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span>
        <span>Objetivos del Proyecto</span>
    </div>
    <table style="width: 100%; margin-top: 1rem; border-collapse: collapse;">
        <thead>
            <tr style="background: #f0fdf4; border-bottom: 2px solid #bbf7d0;">
                <th style="padding: 0.75rem; text-align: left; color: #166534;">Criterio</th>
                <th style="padding: 0.75rem; text-align: left; color: #166534;">Objetivo</th>
            </tr>
        </thead>
        <tbody>
            <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 0.75rem; font-weight: 600; color: #475569;">📌 Específico</td>
                <td style="padding: 0.75rem; color: #475569;">Organizar una graduación escolar completa para 80-100 graduandos</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
                <td style="padding: 0.75rem; font-weight: 600; color: #475569;">📊 Medible</td>
                <td style="padding: 0.75rem; color: #475569;">Presupuesto ejecutado con menos del 10% de desviación; 80% de satisfacción en encuesta</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 0.75rem; font-weight: 600; color: #475569;">🎯 Alcanzable</td>
                <td style="padding: 0.75rem; color: #475569;">Con los recursos del centro y la colaboración de las familias</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
                <td style="padding: 0.75rem; font-weight: 600; color: #475569;">💼 Relevante</td>
                <td style="padding: 0.75rem; color: #475569;">Aplica competencias profesionales del ciclo de Servicios Administrativos</td>
            </tr>
            <tr>
                <td style="padding: 0.75rem; font-weight: 600; color: #475569;">⏰ Temporal</td>
                <td style="padding: 0.75rem; color: #475569;">Evento a celebrar en junio 2026, con planificación desde marzo</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>1.5. Módulos Implicados 🔗</h3>

<p>Este proyecto integra contenidos de todos los módulos del ciclo:</p>

<table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0;">
    <thead>
        <tr style="background: #f1f5f9; border-bottom: 2px solid #e2e8f0;">
            <th style="padding: 0.75rem; text-align: left; color: #1e293b;">Módulo</th>
            <th style="padding: 0.75rem; text-align: left; color: #1e293b;">Aportación al Proyecto</th>
        </tr>
    </thead>
    <tbody>
        <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 0.75rem;"><strong>Operaciones administrativas</strong></td>
            <td style="padding: 0.75rem;">Elaboración de documentos, archivos, trámites</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
            <td style="padding: 0.75rem;"><strong>Gestión económica y tributaria</strong></td>
            <td style="padding: 0.75rem;">Presupuesto, facturas, impuestos básicos</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 0.75rem;"><strong>Comunicación y atención al cliente</strong></td>
            <td style="padding: 0.75rem;">Atención a familias, proveedores, protocolo</td>
        </tr>
        <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
            <td style="padding: 0.75rem;"><strong>Organización y archivo de documentos</strong></td>
            <td style="padding: 0.75rem;">Gestión documental del evento</td>
        </tr>
        <tr>
            <td style="padding: 0.75rem;"><strong>Formación y Orientación Laboral</strong></td>
            <td style="padding: 0.75rem;">Trabajo en equipo, prevención de riesgos</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-info">
    <div class="callout-title">
        <span>💡</span>
        <span>Consejo para el Alumnado</span>
    </div>
    <p class="mb-0">Este proyecto es tu oportunidad de demostrar que estás preparado/a para el mundo laboral. ¡Trátalo como si fuera un encargo real de una empresa!</p>
</div>
`;
