window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.implementacion = `
<div class="callout callout-info">
    <div class="callout-title"><span>💻</span> Objetivo de esta Sección</div>
    <p>Planificar la implementación técnica del proyecto en fases. Incluye configuración del sistema, migración de datos, testing y go-live. Esta es la fase donde el diseño se convierte en realidad.</p>
</div>

<h3>6.1. Plan de Implementación por Fases</h3>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Fase</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Duración</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Actividades Clave</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Entregables</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Fase 1: Preparación</strong></td>
            <td class="p-4 border border-slate-200">Semanas 1-2</td>
            <td class="p-4 border border-slate-200">Provisión de infraestructura cloud, creación de cuentas, preparación de datos</td>
            <td class="p-4 border border-slate-200">Entorno preparado, backup de datos legacy</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Fase 2: Configuración</strong></td>
            <td class="p-4 border border-slate-200">Semanas 3-6</td>
            <td class="p-4 border border-slate-200">[Completa las actividades específicas para tu ERP]</td>
            <td class="p-4 border border-slate-200">[Entregables de esta fase]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Fase 3: Migración</strong></td>
            <td class="p-4 border border-slate-200">Semanas 7-10</td>
            <td class="p-4 border border-slate-200">[Completa]</td>
            <td class="p-4 border border-slate-200">[Completa]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Fase 4: Testing</strong></td>
            <td class="p-4 border border-slate-200">Semanas 11-14</td>
            <td class="p-4 border border-slate-200">[Completa]</td>
            <td class="p-4 border border-slate-200">[Completa]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Fase 5: Formación</strong></td>
            <td class="p-4 border border-slate-200">Semanas 15-18</td>
            <td class="p-4 border border-slate-200">[Completa]</td>
            <td class="p-4 border border-slate-200">[Completa]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Fase 6: Go-Live</strong></td>
            <td class="p-4 border border-slate-200">Semanas 19-24</td>
            <td class="p-4 border border-slate-200">[Completa]</td>
            <td class="p-4 border border-slate-200">[Completa]</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title"><span>📝</span> Tarea para el Alumnado</div>
    <p>Crea un diagrama de Gantt (usando Excel, Google Sheets o Asana) que muestre:</p>
    <ul class="list-disc pl-6 space-y-1">
        <li>Cada fase y sus duraciones</li>
        <li>Dependencias entre fases</li>
        <li>Hitos críticos (go-live)</li>
        <li>Buffer de contingencia</li>
    </ul>
</div>

<h3>6.2. Diario de Configuración: Checklist por Módulo</h3>

<h4>Módulo: Facturación</h4>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Configuración</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Descripción</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Estado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200">Datos de Empresa</td>
            <td class="p-4 border border-slate-200">CIF, nombre legal, dirección, IBAN para pagos</td>
            <td class="p-4 border border-slate-200">[ ] Por hacer</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">Cuentas Contables</td>
            <td class="p-4 border border-slate-200">Plan contable adaptado a AUDIX</td>
            <td class="p-4 border border-slate-200">[ ] Por hacer</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">Plantillas de Factura</td>
            <td class="p-4 border border-slate-200">Logo, color, formato, firma digital</td>
            <td class="p-4 border border-slate-200">[ ] Por hacer</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">Tipos de IVA</td>
            <td class="p-4 border border-slate-200">0%, 4%, 10%, 21% (según tipos de servicio)</td>
            <td class="p-4 border border-slate-200">[ ] Por hacer</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">Integración AEAT</td>
            <td class="p-4 border border-slate-200">Conexión para envío de facturas electrónicas</td>
            <td class="p-4 border border-slate-200">[ ] Por hacer</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">[Completa otros elementos]</td>
            <td class="p-4 border border-slate-200"></td>
            <td class="p-4 border border-slate-200">[ ] Por hacer</td>
        </tr>
    </tbody>
</table>

<h4>Módulo: Recursos Humanos</h4>

<p>[Crea una tabla similar con las configuraciones específicas de RRHH]</p>

<h3>6.3. Migración de Datos</h3>

<p>Plan de migración desde sistemas legacy a la nueva solución:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Tipo de Dato</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Origen</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Destino</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Volumen</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Riesgos</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200">Clientes</td>
            <td class="p-4 border border-slate-200">CSV exportado de Access</td>
            <td class="p-4 border border-slate-200">Tabla Clientes en PostgreSQL</td>
            <td class="p-4 border border-slate-200">~800 registros</td>
            <td class="p-4 border border-slate-200">Datos duplicados, campos mal estructurados</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">Facturas históricas</td>
            <td class="p-4 border border-slate-200">PDFs en carpeta compartida</td>
            <td class="p-4 border border-slate-200">BD con metadatos indexables</td>
            <td class="p-4 border border-slate-200">~5000 facturas (5 años)</td>
            <td class="p-4 border border-slate-200">OCR imperfecto, nombres inconsistentes</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">[Completa más tipos]</td>
            <td class="p-4 border border-slate-200"></td>
            <td class="p-4 border border-slate-200"></td>
            <td class="p-4 border border-slate-200"></td>
            <td class="p-4 border border-slate-200"></td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title"><span>⚠️</span> Estrategia de Limpieza de Datos</div>
    <p>Antes de migrar, <strong>SIEMPRE</strong> limpia los datos:</p>
    <ul class="list-disc pl-6 space-y-1">
        <li>Identifica y elimina duplicados</li>
        <li>Estandariza formatos (fechas, números, texto)</li>
        <li>Valida integridad referencial</li>
        <li>Realiza reconciliación (sumas totales antes/después)</li>
    </ul>
</div>

<h3>6.4. Plan de Testing</h3>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Tipo de Test</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Descripción</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Criterio de Aceptación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Unit Testing</strong></td>
            <td class="p-4 border border-slate-200">Pruebas de funciones individuales (ej: cálculo de IVA)</td>
            <td class="p-4 border border-slate-200">100% de funciones deben pasar</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Integration Testing</strong></td>
            <td class="p-4 border border-slate-200">Pruebas de integración entre módulos (ERP + AEAT)</td>
            <td class="p-4 border border-slate-200">Todos los flujos de integración funcionan</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>UAT (User Acceptance)</strong></td>
            <td class="p-4 border border-slate-200">Pruebas por usuarios reales (administrativos, consultores)</td>
            <td class="p-4 border border-slate-200">80% de requisitos aprobados sin criticidades bloqueantes</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Load Testing</strong></td>
            <td class="p-4 border border-slate-200">Simular carga: 18 usuarios simultáneos</td>
            <td class="p-4 border border-slate-200">Tiempo respuesta < 2s en operaciones normales</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Security Testing</strong></td>
            <td class="p-4 border border-slate-200">Verificar autenticación, acceso a datos, inyección SQL</td>
            <td class="p-4 border border-slate-200">0 vulnerabilidades críticas</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title"><span>📝</span> Tarea para el Alumnado</div>
    <p>Crea un <strong>Plan de Testing Detallado</strong> con:</p>
    <ul class="list-disc pl-6 space-y-1">
        <li>10-15 casos de prueba específicos (ej: "Crear factura con cliente existente")</li>
        <li>Pasos para reproducir cada caso</li>
        <li>Resultado esperado vs actual</li>
        <li>Estado (Pasado/Fallido) y bugs encontrados</li>
    </ul>
</div>

<h3>6.5. Plan de Contingencia y Rollback</h3>

<p>¿Qué pasa si algo falla en go-live?</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Escenario de Crisis</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Probabilidad</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Plan de Respuesta</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200">La BD no se migra correctamente</td>
            <td class="p-4 border border-slate-200">MEDIA</td>
            <td class="p-4 border border-slate-200">Restaurar desde backup anterior, usar sistema legacy temporalmente</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">Portal web está muy lento</td>
            <td class="p-4 border border-slate-200">BAJA</td>
            <td class="p-4 border border-slate-200">Escalabilidad en cloud, balanceador de carga</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">Personal no sabe usar el nuevo ERP</td>
            <td class="p-4 border border-slate-200">ALTA</td>
            <td class="p-4 border border-slate-200">Sesiones de formación intensiva, helpdesk en vivo</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200">[Completa otros escenarios]</td>
            <td class="p-4 border border-slate-200"></td>
            <td class="p-4 border border-slate-200"></td>
        </tr>
    </tbody>
</table>

<h3>6.6. Go-Live: Estrategia de Transición</h3>

<p><strong>¿Cómo pasamos de un sistema a otro sin perder datos ni clientes?</strong></p>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">🎯 Big Bang</h4>
        <p class="text-sm text-slate-600">Cambio total en un día. Alto riesgo pero rápido. No recomendado para AUDIX.</p>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">⚙️ Phased (Recomendado)</h4>
        <p class="text-sm text-slate-600">Módulo por módulo (primero facturación, luego RRHH). Bajo riesgo, más tiempo.</p>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-2">🔄 Paralelo</h4>
        <p class="text-sm text-slate-600">Ambos sistemas activos 2-4 semanas. Máxima seguridad, pero operativamente costoso.</p>
    </div>
</div>

<p><strong>Recomendación para AUDIX:</strong> Estrategia Phased (módulo por módulo) durante 8 semanas, con periodo paralelo de 2 semanas para el módulo crítico de facturación.</p>
`;
