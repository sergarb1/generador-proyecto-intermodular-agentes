window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.anexos = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>\ud83d\udcce</span>
        <span>Material complementario</span>
    </div>
    <p>En los anexos se incluye toda la documentaci\u00f3n extra que complementa el proyecto: fichas t\u00e9cnicas, plantillas, c\u00f3digos fuente, etc.</p>
</div>

<h3>Anexo A: C\u00f3digo completo de Arduino</h3>

<p>El c\u00f3digo completo del programa se encuentra en la secci\u00f3n de Implementaci\u00f3n. Puedes descargarlo tambi\u00e9n como archivo .ino.</p>

<h3>Anexo B: Plantilla de memoria del proyecto</h3>

<p>Usa esta estructura para organizar tu memoria escrita:</p>

<ol class="list-decimal pl-6 space-y-2">
    <li>Portada (t\u00edtulo, nombre, curso, fecha)</li>
    <li>\u00cdndice</li>
    <li>Resumen</li>
    <li>Introducci\u00f3n (contexto, problema, objetivos)</li>
    <li>Estado del arte (investigaci\u00f3n)</li>
    <li>Estudio de viabilidad</li>
    <li>An\u00e1lisis de requisitos</li>
    <li>Dise\u00f1o (diagramas, esquemas, fotos)</li>
    <li>Implementaci\u00f3n (montaje, c\u00f3digo, pruebas)</li>
    <li>Administraci\u00f3n (manual de uso, mantenimiento)</li>
    <li>Herramientas utilizadas</li>
    <li>Conclusiones y reflexi\u00f3n</li>
    <li>Bibliograf\u00eda</li>
    <li>Anexos</li>
</ol>

<h3>Anexo C: R\u00fabrica de evaluaci\u00f3n</h3>

<table class="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm my-8">
    <thead class="bg-slate-800 text-white">
        <tr>
            <th class="p-4 text-left font-bold">Criterio</th>
            <th class="p-4 text-left font-bold">Excelente (10)</th>
            <th class="p-4 text-left font-bold">Bien (7)</th>
            <th class="p-4 text-left font-bold">Mejorable (4)</th>
        </tr>
    </thead>
    <tbody class="divide-y divide-slate-200">
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Montaje del circuito</td>
            <td class="p-4">Todos los componentes est\u00e1n correctamente conectados</td>
            <td class="p-4">Hay 1-2 errores de conexi\u00f3n</td>
            <td class="p-4">Varios componentes mal conectados</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Programaci\u00f3n</td>
            <td class="p-4">El c\u00f3digo funciona sin errores y est\u00e1 comentado</td>
            <td class="p-4">El c\u00f3digo funciona pero tiene pocos comentarios</td>
            <td class="p-4">El c\u00f3digo tiene errores o no funciona</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Memoria</td>
            <td class="p-4">Completa, bien organizada, con fotos y esquemas</td>
            <td class="p-4">Falta alguna secci\u00f3n o detalle</td>
            <td class="p-4">Incompleta o desorganizada</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Trabajo en equipo</td>
            <td class="p-4">Colaboraci\u00f3n excelente, reparto equitativo</td>
            <td class="p-4">Colaboraci\u00f3n buena con alg\u00fan conflicto</td>
            <td class="p-4">Poca colaboraci\u00f3n o trabajo desigual</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Presentaci\u00f3n final</td>
            <td class="p-4">Exposici\u00f3n clara, demuestra comprensi\u00f3n total</td>
            <td class="p-4">Exposici\u00f3n correcta pero con dudas</td>
            <td class="p-4">Exposici\u00f3n confusa o sin preparar</td>
        </tr>
    </tbody>
</table>

<h3>Anexo D: Hojas de registro</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold mb-3">Registro de temperatura</h4>
        <table class="w-full border-collapse text-sm">
            <thead>
                <tr class="bg-slate-200">
                    <th class="p-2">Hora</th>
                    <th class="p-2">Temp</th>
                    <th class="p-2">Ventilador</th>
                </tr>
            </thead>
            <tbody>
                <tr><td class="p-2 border">[hora]</td><td class="p-2 border">[temp]</td><td class="p-2 border">[on/off]</td></tr>
                <tr><td class="p-2 border">[hora]</td><td class="p-2 border">[temp]</td><td class="p-2 border">[on/off]</td></tr>
            </tbody>
        </table>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold mb-3">Registro de pruebas</h4>
        <table class="w-full border-collapse text-sm">
            <thead>
                <tr class="bg-slate-200">
                    <th class="p-2">Fecha</th>
                    <th class="p-2">Prueba</th>
                    <th class="p-2">Resultado</th>
                </tr>
            </thead>
            <tbody>
                <tr><td class="p-2 border">[fecha]</td><td class="p-2 border">[prueba]</td><td class="p-2 border">[ok/fail]</td></tr>
                <tr><td class="p-2 border">[fecha]</td><td class="p-2 border">[prueba]</td><td class="p-2 border">[ok/fail]</td></tr>
            </tbody>
        </table>
    </div>
</div>

<div class="callout callout-success">
    <div class="callout-title">
        <span>\u2705</span>
        <span>Checklist de anexos</span>
    </div>
    <ul class="list-disc pl-6 space-y-1">
        <li>\u2611 He incluido el c\u00f3digo fuente completo</li>
        <li>\u2611 He seguido la plantilla de memoria</li>
        <li>\u2611 He a\u00f1adido la r\u00fabrica de evaluaci\u00f3n</li>
        <li>\u2611 He completado las hojas de registro</li>
    </ul>
</div>
`;
