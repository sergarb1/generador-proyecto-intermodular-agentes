window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.requisitos = `
<div class="callout callout-info">
    <div class="callout-title"><span>📋</span> Objetivo de esta Sección</div>
    <p>Definir los requisitos funcionales, no funcionales y técnicos para la transformación digital de AUDIX. Estos requisitos servirán como base para el diseño e implementación.</p>
</div>

<h3>4.1. Requisitos Funcionales por Módulo</h3>

<p>Completa la siguiente tabla para cada módulo. Un ejemplo está relleno; tú debes desarrollar los demás:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Módulo</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Requisito</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Prioridad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Facturación</strong></td>
            <td class="p-4 border border-slate-200">El sistema debe generar facturas electrónicas en formato XML según normativa española</td>
            <td class="p-4 border border-slate-200">CRÍTICA</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Facturación</strong></td>
            <td class="p-4 border border-slate-200">[Completa otro requisito]</td>
            <td class="p-4 border border-slate-200">[Alta/Media/Baja]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Contabilidad</strong></td>
            <td class="p-4 border border-slate-200">[Completa]</td>
            <td class="p-4 border border-slate-200">[Alta/Media/Baja]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>RRHH</strong></td>
            <td class="p-4 border border-slate-200">[Completa]</td>
            <td class="p-4 border border-slate-200">[Alta/Media/Baja]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Portal Clientes</strong></td>
            <td class="p-4 border border-slate-200">[Completa]</td>
            <td class="p-4 border border-slate-200">[Alta/Media/Baja]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Informes Dinámicos</strong></td>
            <td class="p-4 border border-slate-200">[Completa]</td>
            <td class="p-4 border border-slate-200">[Alta/Media/Baja]</td>
        </tr>
    </tbody>
</table>

<h3>4.2. Requisitos No Funcionales</h3>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Categoría</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Requisito</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Disponibilidad</strong></td>
            <td class="p-4 border border-slate-200">El sistema debe estar disponible 99.5% del tiempo (máx 4h downtime/mes)</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Seguridad</strong></td>
            <td class="p-4 border border-slate-200">[Completa: cifrado, autenticación, backups]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Rendimiento</strong></td>
            <td class="p-4 border border-slate-200">[Completa: tiempo de respuesta, carga simultánea]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Escalabilidad</strong></td>
            <td class="p-4 border border-slate-200">[Completa: crecimiento previsto]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Usabilidad</strong></td>
            <td class="p-4 border border-slate-200">[Completa: interfaz intuitiva para usuarios poco técnicos]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Cumplimiento Normativo</strong></td>
            <td class="p-4 border border-slate-200">RGPD, Facturación Electrónica, Ley de Teletrabajo, LSSI-CE</td>
        </tr>
    </tbody>
</table>

<h3>4.3. Matriz de Usuarios y Casos de Uso</h3>

<p>Identifica qué roles de usuario tendrá el sistema y qué acciones pueden hacer. Ejemplo:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Rol</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Casos de Uso</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Módulos Accesibles</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Administrativo</strong></td>
            <td class="p-4 border border-slate-200">Crear factura, registrar gasto, emitir recibo</td>
            <td class="p-4 border border-slate-200">Facturación, Contabilidad, Gastos</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Consultor</strong></td>
            <td class="p-4 border border-slate-200">[Completa]</td>
            <td class="p-4 border border-slate-200">[Completa]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Director</strong></td>
            <td class="p-4 border border-slate-200">[Completa]</td>
            <td class="p-4 border border-slate-200">[Completa]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Cliente (Externo)</strong></td>
            <td class="p-4 border border-slate-200">[Completa]</td>
            <td class="p-4 border border-slate-200">[Portal Clientes]</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title"><span>📝</span> Tarea para el Alumnado</div>
    <p>Entrevista al menos 3 personas de diferentes departamentos en una empresa real o simulada. Pregunta: "¿Qué tareas haces diariamente? ¿Cuál es la más tediosa? ¿Qué harías si se automatizara?". Usa sus respuestas para completar esta tabla.</p>
</div>

<h3>4.4. Especificación de Integraciones</h3>

<p>Define qué sistemas externos debe integrar la solución:</p>

<ul class="list-disc pl-6 space-y-2">
    <li><strong>Banco:</strong> API de extracción de movimientos (reconciliación automática)</li>
    <li><strong>AEAT:</strong> Presentación automática de IVA modelo 303</li>
    <li><strong>Correo electrónico:</strong> Envío automático de facturas y recordatorios</li>
    <li><strong>Redes sociales:</strong> Publicación de informes resumidos (LinkedIn, Twitter)</li>
    <li><strong>Herramientas externas:</strong> [Completa según investigación]</li>
</ul>

<div class="callout callout-success">
    <div class="callout-title"><span>💡</span> Consejo</div>
    <p>Busca APIs públicas en plataformas como RapidAPI.com o el repositorio oficial de cada proveedor. Documenta: URL, autenticación requerida, límites de uso.</p>
</div>
`;
