window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.implementacion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🎯</span>
        <span>Objetivo de esta Sección</span>
    </div>
    <p>En esta sección debes planificar temporalmente la puesta en marcha de tu empresa y definir los hitos y objetivos a corto plazo. Utiliza diagramas de Gantt y objetivos SMART.</p>
</div>

<h3>6.1. Guía para la Planificación Temporal</h3>

<p>Un plan de implementación te permite visualizar todas las tareas necesarias para poner en marcha tu empresa y su secuencia temporal.</p>

<h4>Diagrama de Gantt - Plantilla</h4>

<p>Completa el siguiente diagrama con las tareas de tu proyecto. Cada fila representa una tarea y las columnas son semanas o meses:</p>

<div class="bg-slate-50 rounded-xl border border-slate-200 p-6 my-6 overflow-x-auto">
    <table class="w-full text-sm">
        <thead>
            <tr class="border-b border-slate-300">
                <th class="text-left p-3 min-w-[200px]">Tarea / Actividad</th>
                <th class="text-center p-3 min-w-[40px]">S1</th>
                <th class="text-center p-3 min-w-[40px]">S2</th>
                <th class="text-center p-3 min-w-[40px]">S3</th>
                <th class="text-center p-3 min-w-[40px]">S4</th>
                <th class="text-center p-3 min-w-[40px]">S5</th>
                <th class="text-center p-3 min-w-[40px]">S6</th>
                <th class="text-center p-3 min-w-[40px]">S7</th>
                <th class="text-center p-3 min-w-[40px]">S8</th>
                <th class="text-center p-3 min-w-[40px]">S9</th>
                <th class="text-center p-3 min-w-[40px]">S10</th>
                <th class="text-center p-3 min-w-[40px]">S11</th>
                <th class="text-center p-3 min-w-[40px]">S12</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-slate-100">
                <td class="p-3 font-semibold">Trámites constitución</td>
                <td class="p-3 text-center" colspan="2">[Pinta las celdas]</td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
            </tr>
            <tr class="border-b border-slate-100">
                <td class="p-3 font-semibold">Búsqueda de local</td>
                <td class="p-3"></td>
                <td class="p-3 text-center" colspan="3">[Pinta las celdas]</td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
            </tr>
            <tr class="border-b border-slate-100">
                <td class="p-3 font-semibold">[Tu tarea 3]</td>
                <td class="p-3" colspan="4">[...]</td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
            </tr>
            <tr class="border-b border-slate-100">
                <td class="p-3 font-semibold">[Tu tarea 4]</td>
                <td class="p-3" colspan="4">[...]</td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
            </tr>
            <tr class="border-b border-slate-100">
                <td class="p-3 font-semibold">[Tu tarea 5]</td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3" colspan="4">[...]</td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
            </tr>
            <tr class="border-b border-slate-100">
                <td class="p-3 font-semibold">[Tu tarea 6]</td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3" colspan="4">[...]</td>
                <td class="p-3"></td>
                <td class="p-3"></td>
                <td class="p-3"></td>
            </tr>
        </tbody>
    </table>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span>
        <span>Tarea para el Alumnado</span>
    </div>
    <p>Para completar tu diagrama de Gantt:</p>
    <ol class="mt-2 space-y-1 text-sm list-decimal list-inside">
        <li>Enumera TODAS las tareas necesarias (sé exhaustivo)</li>
        <li>Estima la duración de cada tarea (en semanas)</li>
        <li>Identifica qué tareas dependen de otras (no puedes empezar B hasta acabar A)</li>
        <li>Asigna responsables a cada tarea</li>
        <li>Identifica el <strong>camino crítico</strong> (las tareas que si se retrasan, retrasan todo el proyecto)</li>
    </ol>
</div>

<h3>6.2. Guía para la Definición de Objetivos SMART</h3>

<p>Los objetivos SMART son una herramienta fundamental para medir el éxito de tu empresa. SMART son las siglas de:</p>

<div class="grid grid-cols-1 md:grid-cols-5 gap-4 my-8">
    <div class="p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
        <div class="text-3xl mb-2">📌</div>
        <h4 class="font-bold text-blue-800 text-lg">S</h4>
        <p class="text-xs text-blue-600">Specific (Específico)</p>
        <p class="text-xs text-blue-500 mt-2">Claro y concreto</p>
    </div>
    
    <div class="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
        <div class="text-3xl mb-2">📊</div>
        <h4 class="font-bold text-green-800 text-lg">M</h4>
        <p class="text-xs text-green-600">Measurable (Medible)</p>
        <p class="text-xs text-green-500 mt-2">Cuantificable</p>
    </div>
    
    <div class="p-4 bg-purple-50 rounded-lg border border-purple-200 text-center">
        <div class="text-3xl mb-2">🎯</div>
        <h4 class="font-bold text-purple-800 text-lg">A</h4>
        <p class="text-xs text-purple-600">Achievable (Alcanzable)</p>
        <p class="text-xs text-purple-500 mt-2">Realista</p>
    </div>
    
    <div class="p-4 bg-orange-50 rounded-lg border border-orange-200 text-center">
        <div class="text-3xl mb-2">📈</div>
        <h4 class="font-bold text-orange-800 text-lg">R</h4>
        <p class="text-xs text-orange-600">Relevant (Relevante)</p>
        <p class="text-xs text-orange-500 mt-2">Importante para el negocio</p>
    </div>
    
    <div class="p-4 bg-red-50 rounded-lg border border-red-200 text-center">
        <div class="text-3xl mb-2">⏰</div>
        <h4 class="font-bold text-red-800 text-lg">T</h4>
        <p class="text-xs text-red-600">Time-bound (Temporal)</p>
        <p class="text-xs text-red-500 mt-2">Con fecha límite</p>
    </div>
</div>

<h4>Plantilla para Objetivos SMART</h4>

<table class="w-full text-sm border-collapse my-4">
    <thead>
        <tr class="bg-slate-100 border-b border-slate-300">
            <th class="text-left p-3">Objetivo</th>
            <th class="text-left p-3">Específico</th>
            <th class="text-left p-3">Medible</th>
            <th class="text-left p-3">Alcanzable</th>
            <th class="text-left p-3">Relevante</th>
            <th class="text-left p-3">Temporal</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Facturación</td>
            <td class="p-3 text-xs">[¿Qué exactamente?]</td>
            <td class="p-3 text-xs">[¿Cómo lo mides?]</td>
            <td class="p-3 text-xs">[¿Por qué es realista?]</td>
            <td class="p-3 text-xs">[¿Por qué importa?]</td>
            <td class="p-3 text-xs">[¿Para cuándo?]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Clientes</td>
            <td class="p-3 text-xs">[...]</td>
            <td class="p-3 text-xs">[...]</td>
            <td class="p-3 text-xs">[...]</td>
            <td class="p-3 text-xs">[...]</td>
            <td class="p-3 text-xs">[...]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Marketing</td>
            <td class="p-3 text-xs">[...]</td>
            <td class="p-3 text-xs">[...]</td>
            <td class="p-3 text-xs">[...]</td>
            <td class="p-3 text-xs">[...]</td>
            <td class="p-3 text-xs">[...]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">Calidad</td>
            <td class="p-3 text-xs">[...]</td>
            <td class="p-3 text-xs">[...]</td>
            <td class="p-3 text-xs">[...]</td>
            <td class="p-3 text-xs">[...]</td>
            <td class="p-3 text-xs">[...]</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span>
        <span>Ejemplo de Objetivo SMART</span>
    </div>
    <p><strong>NO SMART:</strong> "Quiero tener muchos clientes"</p>
    <p class="mt-2"><strong>SMART:</strong> "Captar 25 clientes activos que generen una facturación recurrente de 3.000€/mes antes del 31 de agosto de 2026, medido mediante el CRM de la empresa."</p>
</div>

<h3>6.3. Guía para la Gestión de Riesgos del Proyecto</h3>

<p>Identifica los posibles riesgos que pueden afectar a tu plan de implementación y define medidas de mitigación:</p>

<table class="w-full text-sm border-collapse my-4">
    <thead>
        <tr class="bg-slate-100 border-b border-slate-300">
            <th class="text-left p-3">Riesgo</th>
            <th class="text-left p-3">Probabilidad (1-5)</th>
            <th class="text-left p-3">Impacto (1-5)</th>
            <th class="text-left p-3">Puntuación (P×I)</th>
            <th class="text-left p-3">Medida de Mitigación</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b border-slate-100">
            <td class="p-3">[Riesgo 1]</td>
            <td class="text-center p-3">[1-5]</td>
            <td class="text-center p-3">[1-5]</td>
            <td class="text-center p-3">[...]</td>
            <td class="p-3 text-xs">[Medida]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3">[Riesgo 2]</td>
            <td class="text-center p-3">[1-5]</td>
            <td class="text-center p-3">[1-5]</td>
            <td class="text-center p-3">[...]</td>
            <td class="p-3 text-xs">[Medida]</td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3">[Riesgo 3]</td>
            <td class="text-center p-3">[1-5]</td>
            <td class="text-center p-3">[1-5]</td>
            <td class="text-center p-3">[...]</td>
            <td class="p-3 text-xs">[Medida]</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-info">
    <div class="callout-title">
        <span>🛠️</span>
        <span>Herramientas Sugeridas</span>
    </div>
    <p>Para crear tu planificación:</p>
    <ul class="mt-2 space-y-1 text-sm">
        <li>• <strong>GanttProject</strong> (gratis, desktop): www.ganttproject.biz</li>
        <li>• <strong>Microsoft Project</strong> (pago, estándar empresarial)</li>
        <li>• <strong>Trello</strong> (gratis, kanban): www.trello.com</li>
        <li>• <strong>Asana</strong> (gratis para equipos pequeños): www.asana.com</li>
    </ul>
</div>
`;
