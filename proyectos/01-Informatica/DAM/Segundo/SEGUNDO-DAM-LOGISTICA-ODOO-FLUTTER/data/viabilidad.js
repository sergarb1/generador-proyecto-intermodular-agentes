window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['viabilidad'] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📈</span>
        <span>Estudio de Viabilidad</span>
    </div>
    <p>Evalúa la viabilidad técnica, económica y temporal del proyecto para garantizar su éxito antes de comenzar el desarrollo.</p>
</div>

<h2>3.1. Viabilidad Técnica</h2>

<h3>🔧 Análisis de Capacidades Requeridas</h3>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>🎯</span>
        <span>Competencias Necesarias</span>
    </div>
    <p>Identifica las habilidades técnicas que debes adquirir o reforzar durante el desarrollo del proyecto.</p>
</div>

<table class="my-6">
<thead>
<tr>
<th>Área Tecnológica</th>
<th>Nivel Requerido</th>
<th>Estado Actual</th>
<th>Plan de Formación</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Python (Odoo)</strong></td>
<td>Intermedio</td>
<td>⚠️ Básico</td>
<td>20h tutoriales + práctica</td>
</tr>
<tr>
<td><strong>Dart/Flutter</strong></td>
<td>Intermedio</td>
<td>⚠️ Básico</td>
<td>25h curso + proyectos</td>
</tr>
<tr>
<td><strong>Node.js</strong></td>
<td>Básico</td>
<td>✅ Conocido</td>
<td>10h repaso</td>
</tr>
<tr>
<td><strong>PostgreSQL</strong></td>
<td>Básico</td>
<td>✅ Conocido</td>
<td>5h específico Odoo</td>
</tr>
<tr>
<td><strong>Firebase/FCM</strong></td>
<td>Básico</td>
<td>❌ Nuevo</td>
<td>15h documentación</td>
</tr>
<tr>
<td><strong>API REST</strong></td>
<td>Intermedio</td>
<td>✅ Conocido</td>
<td>5h prácticas</td>
</tr>
<tr>
<td><strong>Git/GitHub</strong></td>
<td>Intermedio</td>
<td>✅ Conocido</td>
<td>-</td>
</tr>
</tbody>
</table>

<h3>📊 Evaluación de Riesgos Técnicos</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">

<div class="callout callout-info">

<h4>✅ Factores Favorables</h4>
<ol class="list-decimal pl-6 space-y-2">
<li><strong>Tecnologías maduras</strong> y documentadas</li>
<li><strong>Comunidades activas</strong> de soporte</li>
<li><strong>Hardware estándar</strong> (smartphones existentes)</li>
<li><strong>ERP ya implantado</strong> en la empresa</li>
<li><strong>Código abierto</strong> sin licencias</li>
</ol>

</div>

<div class="callout callout-warning">

<h4>⚠️ Posibles Obstáculos</h4>
<ol class="list-decimal pl-6 space-y-2">
<li><strong>Curva de aprendizaje</strong> de Odoo módulo</li>
<li><strong>Integración FCM</strong> con Odoo</li>
<li><strong>Gestión offline</strong> compleja</li>
<li><strong>Variedad de dispositivos</strong> móviles</li>
<li><strong>Conectividad WiFi</strong> almacén</li>
</ol>

</div>

</div>

<h3>🛠️ Plan de Mitigación de Riesgos</h3>

<table class="my-6">
<thead>
<tr>
<th>Riesgo</th>
<th>Probabilidad</th>
<th>Impacto</th>
<th>Mitigación</th>
</tr>
</thead>
<tbody>
<tr>
<td>Dificultad módulo Odoo</td>
<td>Media</td>
<td>Alto</td>
<td>Mentor externo + documentación</td>
</tr>
<tr>
<td>Problemas sincronización</td>
<td>Media</td>
<td>Medio</td>
<td>Tests exhaustivos offline</td>
</tr>
<tr>
<td>Incompatibilidad dispositivos</td>
<td>Baja</td>
<td>Medio</td>
<td>Matriz de dispositivos testeados</td>
</tr>
<tr>
<td>Caídas de conectividad</td>
<td>Alta</td>
<td>Bajo</td>
<td>Diseño offline-first</td>
</tr>
<tr>
<td>Retraso en desarrollo</td>
<td>Media</td>
<td>Alto</td>
<td>Sprints cortos + hitos semanales</td>
</tr>
</tbody>
</table>

<hr class="my-8">

<h2>3.2. Viabilidad Económica</h2>

<h3>💰 Análisis de Costes</h3>

<div class="callout callout-info">
    <div class="callout-title">
        <span>💵</span>
        <span>Metodología de Cálculo</span>
    </div>
    <p>Calcula todos los costes directos e indirectos del proyecto, incluyendo desarrollo, infraestructura, formación y mantenimiento.</p>
</div>

<h3>Costes de Desarrollo (Inversión Inicial)</h3>

<table class="my-6">
<thead>
<tr>
<th>Concepto</th>
<th>Cantidad</th>
<th>Precio Unitario</th>
<th>Total</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Horas desarrollo</strong></td>
<td>96h</td>
<td>25€/h*</td>
<td>2.400 €</td>
</tr>
<tr>
<td><strong>Servidor pruebas</strong></td>
<td>6 meses</td>
<td>15€/mes</td>
<td>90 €</td>
</tr>
<tr>
<td><strong>Dominio + SSL</strong></td>
<td>1 año</td>
<td>50€/año</td>
<td>50 €</td>
</tr>
<tr>
<td><strong>Cuentas desarrollador</strong></td>
<td>2</td>
<td>100€</td>
<td>200 €</td>
</tr>
<tr>
<td><strong>Material fungible</strong></td>
<td>-</td>
<td>-</td>
<td>100 €</td>
</tr>
<tr>
<td><strong>Formación complementaria</strong></td>
<td>-</td>
<td>-</td>
<td>150 €</td>
</tr>
<tr class="font-bold bg-slate-100">
<td colspan="3">TOTAL DESARROLLO</td>
<td>2.990 €</td>
</tr>
</tbody>
</table>
<p class="text-sm text-slate-500">* Valor simbólico para proyecto formativo. En entorno real: 40-60€/h</p>

<h3>Costes Anuales de Explotación</h3>

<table class="my-6">
<thead>
<tr>
<th>Concepto</th>
<th>Coste Anual</th>
<th>Observaciones</th>
</tr>
</thead>
<tbody>
<tr>
<td>Servidor VPS producción</td>
<td>240 €/año</td>
<td>20€/mes</td>
</tr>
<tr>
<td>Firebase (plan Spark)</td>
<td>0 €</td>
<td>Gratuito hasta límites altos</td>
</tr>
<tr>
<td>Cuentas desarrollador</td>
<td>0 €</td>
<td>Pago único ya realizado</td>
</tr>
<tr>
<td>Mantenimiento (2h/mes)</td>
<td>600 €/año</td>
<td>25€/h × 24h</td>
</tr>
<tr>
<td>Copias seguridad</td>
<td>60 €/año</td>
<td>Almacenamiento extra</td>
</tr>
<tr class="font-bold bg-slate-100">
<td>TOTAL ANUAL</td>
<td>900 €</td>
<td></td>
</tr>
</tbody>
</table>

<h3>📊 Análisis de Retorno de Inversión (ROI)</h3>

<div class="callout callout-success">
    <div class="callout-title">
        <span>📈</span>
        <span>Cálculo del ROI</span>
    </div>
    <p>Compara la inversión con los ahorros generados para determinar la rentabilidad del proyecto.</p>
</div>

<h3>Ahorros Anuales Estimados</h3>

<table class="my-6">
<thead>
<tr>
<th>Concepto</th>
<th>Ahorro Anual</th>
<th>Cálculo</th>
</tr>
</thead>
<tbody>
<tr>
<td>Reducción horas extra</td>
<td>18.720 €</td>
<td>12h/semana × 52 semanas × 30€/h</td>
</tr>
<tr>
<td>Menos devoluciones</td>
<td>12.500 €</td>
<td>18 reclamaciones/mes → 3 × 750€</td>
</tr>
<tr>
<td>Penalizaciones evitadas</td>
<td>8.400 €</td>
<td>Contratos con SLA</td>
</tr>
<tr>
<td>Mejora productividad</td>
<td>24.000 €</td>
<td>30 min/día × 250 días × 32€/h</td>
</tr>
<tr class="font-bold bg-slate-100">
<td>TOTAL AHORROS</td>
<td>63.620 €</td>
<td></td>
</tr>
</tbody>
</table>

<h3>Cálculo del ROI</h3>

<div class="callout callout-info my-6">
<pre class="text-sm overflow-x-auto">
┌─────────────────────────────────────────────────────────────┐
│                    FÓRMULA DEL ROI                           │
├─────────────────────────────────────────────────────────────┤
│  ROI = (Beneficios - Inversión) / Inversión × 100           │
│                                                              │
│  Año 1:                                                      │
│  - Inversión: 2.990 € (desarrollo) + 900 € (explotación)    │
│  - Beneficios: 63.620 € (ahorros)                           │
│  - ROI = (63.620 - 3.890) / 3.890 × 100 = 1.535%            │
│                                                              │
│  Payback (Recuperación):                                    │
│  - 3.890 € / (63.620 € / 12 meses) = 0,73 meses             │
│  - Menos de 3 semanas para recuperar la inversión           │
└─────────────────────────────────────────────────────────────┘
</pre>
</div>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span>
        <span>Conclusión Económica</span>
    </div>
    <p>El proyecto es <strong>altamente rentable</strong> con un ROI del 1.535% en el primer año. La inversión se recupera en menos de un mes de operación.</p>
</div>

<hr class="my-8">

<h2>3.3. Viabilidad Temporal</h2>

<h3>📅 Planificación del Proyecto</h3>

<div class="callout callout-info">
    <div class="callout-title">
        <span>⏱️</span>
        <span>Duración Total: 96 Horas</span>
    </div>
    <p>El proyecto está diseñado para completarse en un curso académico, con margen para imprevistos.</p>
</div>

<h3>Diagrama de Gantt</h3>

<table class="my-6">
<thead>
<tr>
<th>Fase</th>
<th>Semanas</th>
<th>Horas</th>
<th>Hito Principal</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>1. Análisis</strong></td>
<td>1-2</td>
<td>12h</td>
<td>Documento de requisitos</td>
</tr>
<tr>
<td><strong>2. Diseño</strong></td>
<td>3-4</td>
<td>16h</td>
<td>Arquitectura aprobada</td>
</tr>
<tr>
<td><strong>3. Desarrollo Backend</strong></td>
<td>5-7</td>
<td>20h</td>
<td>Módulo Odoo funcional</td>
</tr>
<tr>
<td><strong>4. Desarrollo App</strong></td>
<td>8-11</td>
<td>28h</td>
<td>App Flutter completa</td>
</tr>
<tr>
<td><strong>5. Integración</strong></td>
<td>12-13</td>
<td>12h</td>
<td>Sistema integrado</td>
</tr>
<tr>
<td><strong>6. Testing</strong></td>
<td>14</td>
<td>6h</td>
<td>Tests superados</td>
</tr>
<tr>
<td><strong>7. Documentación</strong></td>
<td>15-16</td>
<td>8h</td>
<td>Memoria completa</td>
</tr>
<tr>
<td><strong>8. Presentación</strong></td>
<td>17</td>
<td>2h</td>
<td>Defensa pública</td>
</tr>
</tbody>
</table>

<h3>🚩 Hitos Críticos</h3>

<div class="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">

<div class="callout callout-info">

<h4>Hito 1</h4>
<p><strong>Semana 2</strong></p>
<p>Requisitos validados por tutor y empresa</p>

</div>

<div class="callout callout-info">

<h4>Hito 2</h4>
<p><strong>Semana 4</strong></p>
<p>Diseño arquitectónico aprobado</p>

</div>

<div class="callout callout-info">

<h4>Hito 3</h4>
<p><strong>Semana 7</strong></p>
<p>Backend Odoo funcional</p>

</div>

<div class="callout callout-info">

<h4>Hito 4</h4>
<p><strong>Semana 11</strong></p>
<p>App Flutter completa</p>

</div>

</div>

<hr class="my-8">

<h2>3.4. Viabilidad Organizativa</h2>

<h3>👥 Aceptación por los Usuarios</h3>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>👥</span>
        <span>Gestión del Cambio</span>
    </div>
    <p>El éxito del proyecto depende de la adopción por parte de los operarios. Planifica la formación y el soporte.</p>
</div>

<h3>Plan de Adopción</h3>

<table class="my-6">
<thead>
<tr>
<th>Fase</th>
<th>Acción</th>
<th>Responsable</th>
<th>Duración</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>1. Sensibilización</strong></td>
<td>Presentación beneficios</td>
<td>Dirección</td>
<td>1h</td>
</tr>
<tr>
<td><strong>2. Formación</strong></td>
<td>4 sesiones prácticas</td>
<td>Desarrollador</td>
<td>8h</td>
</tr>
<tr>
<td><strong>3. Piloto</strong></td>
<td>2 operarios prueba</td>
<td>Tutor + Alumno</td>
<td>1 semana</td>
</tr>
<tr>
<td><strong>4. Despliegue</strong></td>
<td>Todos los operarios</td>
<td>IT + Alumno</td>
<td>1 semana</td>
</tr>
<tr>
<td><strong>5. Soporte</strong></td>
<td>Resolución dudas</td>
<td>Alumno</td>
<td>2 semanas</td>
</tr>
</tbody>
</table>

<h3>📋 Criterios de Aceptación</h3>

<ul class="list-disc pl-6 space-y-2 my-4">
<li>90% de operarios capaces de usar la app sin ayuda</li>
<li>Tiempo de verificación reducido en 60% mínimo</li>
<li>0 incidencias críticas en primera semana</li>
<li>Satisfacción usuario &gt; 4/5 en encuesta</li>
</ul>

<hr class="my-8">

<h2>3.5. Conclusiones de Viabilidad</h2>

<h3>✅ Resumen Ejecutivo</h3>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span>
        <span>Proyecto VIABLE</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li><strong>Técnicamente viable:</strong> Tecnologías maduras y accesibles</li>
        <li><strong>Económicamente rentable:</strong> ROI &gt; 1.500% primer año</li>
        <li><strong>Temporalmente posible:</strong> 96h en 17 semanas</li>
        <li><strong>Organizativamente aceptado:</strong> Beneficios claros para usuarios</li>
    </ul>
</div>

<h3>🚦 Semáforo de Viabilidad</h3>

<table class="my-6">
<thead>
<tr>
<th>Dimensión</th>
<th>Estado</th>
<th>Justificación</th>
</tr>
</thead>
<tbody>
<tr>
<td>Técnica</td>
<td>🟢</td>
<td>Riesgos controlados</td>
</tr>
<tr>
<td>Económica</td>
<td>🟢</td>
<td>Alta rentabilidad</td>
</tr>
<tr>
<td>Temporal</td>
<td>🟢</td>
<td>Planificación realista</td>
</tr>
<tr>
<td>Organizativa</td>
<td>🟢</td>
<td>Beneficios evidentes</td>
</tr>
<tr class="font-bold bg-slate-100">
<td>GLOBAL</td>
<td>🟢</td>
<td>PROYECTO APROBADO</td>
</tr>
</tbody>
</table>
`;
