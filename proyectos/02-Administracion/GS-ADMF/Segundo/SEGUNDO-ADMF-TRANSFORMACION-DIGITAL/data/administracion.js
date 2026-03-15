window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.administracion = `
<div class="callout callout-info">
    <div class="callout-title"><span>⚙️</span> Objetivo de esta Sección</div>
    <p>Gestionar los aspectos administrativos, financieros y organizacionales del proyecto de transformación digital. Incluye presupuesto detallado, planificación, gestión de riesgos, y cambios organizacionales.</p>
</div>

<h3>7.1. Presupuesto Detallado del Proyecto</h3>

<p>Completa el presupuesto estimado para la transformación digital completa (6 meses):</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Concepto</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Cantidad</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Coste Unitario</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Subtotal</th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color: #f0fdf4;">
            <td colspan="4" class="p-4 border border-slate-200"><strong>1. LICENCIAS SOFTWARE</strong></td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">ERP (Odoo Enterprise, 6 meses)</td>
            <td class="p-4 border border-slate-200">1</td>
            <td class="p-4 border border-slate-200">[Investiga precio]</td>
            <td class="p-4 border border-slate-200">[Calcula]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">Microsoft Teams (18 usuarios, 6 meses)</td>
            <td class="p-4 border border-slate-200">18</td>
            <td class="p-4 border border-slate-200">€5/usuario/mes</td>
            <td class="p-4 border border-slate-200">€540</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">[Otro software necesario]</td>
            <td class="p-4 border border-slate-200"></td>
            <td class="p-4 border border-slate-200"></td>
            <td class="p-4 border border-slate-200">[Calcula]</td>
        </tr>
        <tr style="background-color: #f0fdf4;">
            <td colspan="4" class="p-4 border border-slate-200"><strong>2. INFRAESTRUCTURA CLOUD</strong></td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">Servidor cloud (AWS/Azure, 6 meses)</td>
            <td class="p-4 border border-slate-200">1</td>
            <td class="p-4 border border-slate-200">[Investiga: t3.large]</td>
            <td class="p-4 border border-slate-200">[Calcula]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">Base de datos (PostgreSQL, 6 meses)</td>
            <td class="p-4 border border-slate-200">1</td>
            <td class="p-4 border border-slate-200">[Investiga]</td>
            <td class="p-4 border border-slate-200">[Calcula]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">Backup automático</td>
            <td class="p-4 border border-slate-200">1</td>
            <td class="p-4 border border-slate-200">[Investiga]</td>
            <td class="p-4 border border-slate-200">[Calcula]</td>
        </tr>
        <tr style="background-color: #f0fdf4;">
            <td colspan="4" class="p-4 border border-slate-200"><strong>3. SERVICIOS PROFESIONALES</strong></td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">Consultoría ERP (60h @ €75/h)</td>
            <td class="p-4 border border-slate-200">60</td>
            <td class="p-4 border border-slate-200">€75</td>
            <td class="p-4 border border-slate-200">€4.500</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">Desarrollo Portal Web (120h @ €60/h)</td>
            <td class="p-4 border border-slate-200">120</td>
            <td class="p-4 border border-slate-200">€60</td>
            <td class="p-4 border border-slate-200">€7.200</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">Migración de datos (40h @ €80/h)</td>
            <td class="p-4 border border-slate-200">40</td>
            <td class="p-4 border border-slate-200">€80</td>
            <td class="p-4 border border-slate-200">€3.200</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">[Otros servicios]</td>
            <td class="p-4 border border-slate-200"></td>
            <td class="p-4 border border-slate-200"></td>
            <td class="p-4 border border-slate-200">[Calcula]</td>
        </tr>
        <tr style="background-color: #f0fdf4;">
            <td colspan="4" class="p-4 border border-slate-200"><strong>4. FORMACIÓN</strong></td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">Formación ERP (5 sesiones × 3h, 18 personas)</td>
            <td class="p-4 border border-slate-200">1</td>
            <td class="p-4 border border-slate-200">€1.200</td>
            <td class="p-4 border border-slate-200">€1.200</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">Materiales de formación</td>
            <td class="p-4 border border-slate-200">1</td>
            <td class="p-4 border border-slate-200">€500</td>
            <td class="p-4 border border-slate-200">€500</td>
        </tr>
        <tr style="background-color: #f0fdf4;">
            <td colspan="4" class="p-4 border border-slate-200"><strong>5. BUFFER DE CONTINGENCIA (15%)</strong></td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">Imprevistos</td>
            <td class="p-4 border border-slate-200">1</td>
            <td class="p-4 border border-slate-200">15% del subtotal</td>
            <td class="p-4 border border-slate-200">[Calcula]</td>
        </tr>
        <tr style="background-color: #fef0f0;">
            <td class="p-4 border border-slate-200"><strong>TOTAL PRESUPUESTO</strong></td>
            <td colspan="3" class="p-4 border border-slate-200"><strong>[Suma de todos los subtotales]</strong></td>
        </tr>
    </tbody>
</table>

<h3>7.2. Planificación Temporal (Hitos Críticos)</h3>

<p>Define los hitos del proyecto con fechas realistas (asumiendo inicio el 1 de septiembre):</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Hito</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Fecha Estimada</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Responsable</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Entregable</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Kickoff Proyecto</strong></td>
            <td class="p-4 border border-slate-200">1 de septiembre</td>
            <td class="p-4 border border-slate-200">Director + Consultor Externo</td>
            <td class="p-4 border border-slate-200">Acta de inicio, asignación de roles</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Infraestructura preparada</strong></td>
            <td class="p-4 border border-slate-200">15 de septiembre</td>
            <td class="p-4 border border-slate-200">[Responsable técnico]</td>
            <td class="p-4 border border-slate-200">Cloud operativo, backup configurado</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>ERP configurado (fase 1)</strong></td>
            <td class="p-4 border border-slate-200">30 de septiembre</td>
            <td class="p-4 border border-slate-200">[Responsable ERP]</td>
            <td class="p-4 border border-slate-200">Módulo facturación testeable</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Migración de datos (AUDIX)</strong></td>
            <td class="p-4 border border-slate-200">15 de octubre</td>
            <td class="p-4 border border-slate-200">[Responsable datos]</td>
            <td class="p-4 border border-slate-200">Datos migrados y validados</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>UAT completado</strong></td>
            <td class="p-4 border border-slate-200">1 de noviembre</td>
            <td class="p-4 border border-slate-200">Equipo AUDIX + Consultor</td>
            <td class="p-4 border border-slate-200">Reporte de testing, bugs corregidos</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Formación completada</strong></td>
            <td class="p-4 border border-slate-200">15 de noviembre</td>
            <td class="p-4 border border-slate-200">Formador Externo</td>
            <td class="p-4 border border-slate-200">Certificados de asistencia, manual de usuario</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>GO-LIVE</strong></td>
            <td class="p-4 border border-slate-200">1 de diciembre</td>
            <td class="p-4 border border-slate-200">Director + Equipo Técnico</td>
            <td class="p-4 border border-slate-200">Sistema en producción, soporte 24/7</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Revisión (30 días post-go-live)</strong></td>
            <td class="p-4 border border-slate-200">1 de enero</td>
            <td class="p-4 border border-slate-200">Director + Consultor</td>
            <td class="p-4 border border-slate-200">Lecciones aprendidas, KPIs validados</td>
        </tr>
    </tbody>
</table>

<h3>7.3. Gestión de Riesgos</h3>

<p>Identifica, evalúa y propón mitigación para riesgos principales:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Riesgo</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Probabilidad</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Impacto</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Estrategia de Mitigación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Resistencia del personal</strong></td>
            <td class="p-4 border border-slate-200">ALTA</td>
            <td class="p-4 border border-slate-200">ALTO</td>
            <td class="p-4 border border-slate-200">Comunicación clara, formación intensiva, incentivos por adopción</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Retrasos en implementación</strong></td>
            <td class="p-4 border border-slate-200">MEDIA</td>
            <td class="p-4 border border-slate-200">ALTO</td>
            <td class="p-4 border border-slate-200">Buffer temporal (20%), equipo técnico dedicado</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Pérdida de datos en migración</strong></td>
            <td class="p-4 border border-slate-200">BAJA</td>
            <td class="p-4 border border-slate-200">CRÍTICO</td>
            <td class="p-4 border border-slate-200">Validación rigurosa, backups múltiples, pruebas paralelas</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Exceso de presupuesto</strong></td>
            <td class="p-4 border border-slate-200">MEDIA</td>
            <td class="p-4 border border-slate-200">ALTO</td>
            <td class="p-4 border border-slate-200">Presupuesto con 15% contingencia, control mensual de costes</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">[Completa otros riesgos identificados]</td>
            <td class="p-4 border border-slate-200"></td>
            <td class="p-4 border border-slate-200"></td>
            <td class="p-4 border border-slate-200"></td>
        </tr>
    </tbody>
</table>

<h3>7.4. Gestión del Cambio Organizacional</h3>

<p><strong>La tecnología es el 20%; el cambio humano es el 80% del éxito.</strong></p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Acción</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Público Objetivo</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Cuándo</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Responsable</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Comunicación del cambio</strong></td>
            <td class="p-4 border border-slate-200">Toda la empresa</td>
            <td class="p-4 border border-slate-200">Mes 1: presentación general</td>
            <td class="p-4 border border-slate-200">Director</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Talleres de "Champions"</strong></td>
            <td class="p-4 border border-slate-200">Líderes por departamento (3 personas)</td>
            <td class="p-4 border border-slate-200">Mes 2: formación especializada</td>
            <td class="p-4 border border-slate-200">Consultor Externo</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Formación masiva</strong></td>
            <td class="p-4 border border-slate-200">Todo el personal (18 personas)</td>
            <td class="p-4 border border-slate-200">Mes 4-5: 5 sesiones de 3h</td>
            <td class="p-4 border border-slate-200">Formador Externo + Champions</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Soporte post-go-live</strong></td>
            <td class="p-4 border border-slate-200">Todos los usuarios</td>
            <td class="p-4 border border-slate-200">Mes 6 en adelante: helpdesk</td>
            <td class="p-4 border border-slate-200">Responsable IT + Champions</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Reconocimiento de éxitos</strong></td>
            <td class="p-4 border border-slate-200">Adoptadores tempranos</td>
            <td class="p-4 border border-slate-200">Continuo</td>
            <td class="p-4 border border-slate-200">Director</td>
        </tr>
    </tbody>
</table>

<h3>7.5. Métricas de Éxito (KPIs)</h3>

<p>Cómo validaremos que el proyecto fue exitoso:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">KPI</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Baseline (Hoy)</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Target (6 meses)</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Cómo Medir</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Tiempo emitir factura</strong></td>
            <td class="p-4 border border-slate-200">30 minutos</td>
            <td class="p-4 border border-slate-200">3 minutos</td>
            <td class="p-4 border border-slate-200">Cronómetro, promedio mensual</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Errores de facturación</strong></td>
            <td class="p-4 border border-slate-200">15-20%</td>
            <td class="p-4 border border-slate-200">&lt;1%</td>
            <td class="p-4 border border-slate-200">Auditoría mensual de facturas</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Satisfacción de usuarios</strong></td>
            <td class="p-4 border border-slate-200">N/A</td>
            <td class="p-4 border border-slate-200">&gt;80% satisfechos</td>
            <td class="p-4 border border-slate-200">Encuesta post-go-live</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Margen de beneficio</strong></td>
            <td class="p-4 border border-slate-200">12%</td>
            <td class="p-4 border border-slate-200">18%</td>
            <td class="p-4 border border-slate-200">Estados financieros trimestrales</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Teletrabajo habilitado</strong></td>
            <td class="p-4 border border-slate-200">0% personal remoto</td>
            <td class="p-4 border border-slate-200">80% con capacidad remota</td>
            <td class="p-4 border border-slate-200">Acceso VPN, licencias de usuarios remotos</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Rotación de personal</strong></td>
            <td class="p-4 border border-slate-200">3 dimisiones/año</td>
            <td class="p-4 border border-slate-200">&lt;1 dimisión/año</td>
            <td class="p-4 border border-slate-200">RRHH audit</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title"><span>💡</span> Consejo Final</div>
    <p>La administración del proyecto no termina en go-live. <strong>El éxito real se valida 30, 60 y 90 días después.</strong> Mantén un equipo de soporte ágil y versátil adaptaciones si es necesario.</p>
</div>
`;
