window.sectionsContent.administracion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📌</span>
        <span>Objetivo de esta Sección</span>
    </div>
    <p>Aplicarás tus conocimientos administrativos a la gestión real de la campaña: control de donaciones, presupuesto, comunicación corporativa y cumplimiento normativo.</p>
</div>

<h3>7.1. Registro y Control de Donaciones</h3>

<p>Llevar un control preciso de las donaciones es esencial para medir el impacto y rendir cuentas a la ONG. Diseña tu propio registro:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left">Fecha</th>
            <th class="border border-slate-300 px-4 py-3 text-left">Tipo de Alimento</th>
            <th class="border border-slate-300 px-4 py-3 text-right">Cantidad (unidades)</th>
            <th class="border border-slate-300 px-4 py-3 text-right">Peso (kg)</th>
            <th class="border border-slate-300 px-4 py-3 text-left">Donado por</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3"><em>[Fecha]</em></td>
            <td class="border border-slate-300 px-4 py-3"><em>[Arroz, lentejas, leche...]</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[Nº]</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[Kg]</em></td>
            <td class="border border-slate-300 px-4 py-3"><em>[Curso / Anónimo]</em></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3"><em>...</em></td>
            <td class="border border-slate-300 px-4 py-3"><em>...</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>...</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>...</em></td>
            <td class="border border-slate-300 px-4 py-3"><em>...</em></td>
        </tr>
        <tr class="bg-slate-50 font-bold">
            <td class="border border-slate-300 px-4 py-3" colspan="2">TOTALES</td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[SUMAR]</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[SUMAR]</em></td>
            <td class="border border-slate-300 px-4 py-3"></td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span>
        <span>Consejo Administrativo</span>
    </div>
    <p>Usa un archivo de Google Sheets compartido con todo el equipo. Así cada persona puede registrar en tiempo real. Además, puedes generar gráficos automáticos para el termómetro digital.</p>
</div>

<h3>7.2. Presupuesto y Control de Gastos</h3>

<p>Aunque la campaña busca coste cero, es importante documentar cualquier gasto o donación en especie:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left">Concepto</th>
            <th class="border border-slate-300 px-4 py-3 text-right">Ingreso (€)</th>
            <th class="border border-slate-300 px-4 py-3 text-right">Gasto (€)</th>
            <th class="border border-slate-300 px-4 py-3 text-left">Aportado por</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3">Donación de copistería local (carteles)</td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[Valor estimado]</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"></td>
            <td class="border border-slate-300 px-4 py-3">Copistería [Nombre]</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3">Cesión de cajas por supermercado local</td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[Valor estimado]</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"></td>
            <td class="border border-slate-300 px-4 py-3">Supermercado [Nombre]</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3">Gasto en material de oficina</td>
            <td class="border border-slate-300 px-4 py-3 text-right"></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[Cantidad]</em></td>
            <td class="border border-slate-300 px-4 py-3">Departamento</td>
        </tr>
        <tr class="bg-slate-50 font-bold">
            <td class="border border-slate-300 px-4 py-3">TOTALES</td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[SUMAR]</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[SUMAR]</em></td>
            <td class="border border-slate-300 px-4 py-3">BALANCE: <em>[CALCULAR]</em></td>
        </tr>
    </tbody>
</table>

<h3>7.3. Plan de Comunicación</h3>

<p>La comunicación es clave para el éxito de la campaña. Define tu estrategia:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left">Canal</th>
            <th class="border border-slate-300 px-4 py-3 text-left">Público Objetivo</th>
            <th class="border border-slate-300 px-4 py-3 text-left">Contenido</th>
            <th class="border border-slate-300 px-4 py-3 text-left">Frecuencia</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3">Carteles físicos</td>
            <td class="border border-slate-300 px-4 py-3">Toda la comunidad educativa</td>
            <td class="border border-slate-300 px-4 py-3">Información general, fechas, puntos de recogida</td>
            <td class="border border-slate-300 px-4 py-3">Única colocación</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3">Instagram / X del centro</td>
            <td class="border border-slate-300 px-4 py-3">Alumnado, familias</td>
            <td class="border border-slate-300 px-4 py-3">Lanzamiento, actualizaciones, retos, resultados</td>
            <td class="border border-slate-300 px-4 py-3">Diario en fase de recogida</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3">Correo electrónico / TokApp</td>
            <td class="border border-slate-300 px-4 py-3">Familias</td>
            <td class="border border-slate-300 px-4 py-3">Circular informativa, agradecimiento final</td>
            <td class="border border-slate-300 px-4 py-3">2 veces (inicio y cierre)</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3">Tutorías</td>
            <td class="border border-slate-300 px-4 py-3">Alumnado</td>
            <td class="border border-slate-300 px-4 py-3">Presentación, motivación, recordatorios</td>
            <td class="border border-slate-300 px-4 py-3">Semanal</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3">Web del centro</td>
            <td class="border border-slate-300 px-4 py-3">Público externo</td>
            <td class="border border-slate-300 px-4 py-3">Noticia del evento</td>
            <td class="border border-slate-300 px-4 py-3">Inicio y cierre</td>
        </tr>
    </tbody>
</table>

<h3>7.4. Obligaciones Legales y Fiscales</h3>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Aspectos Legales a Considerar</span>
    </div>
    <p>Aunque es una actividad escolar, debes conocer estos aspectos:</p>
</div>

<ul class="list-disc pl-6 space-y-2">
    <li><strong>Protección de datos (RGPD / LOPDGDD):</strong> Si publicas fotos de menores, necesitas autorización expresa de las familias.</li>
    <li><strong>Seguro escolar:</strong> Verifica que el alumnado participante está cubierto por el seguro del centro.</li>
    <li><strong>Convenio con la ONG:</strong> Formaliza por escrito la entrega de alimentos. La ONG debe emitir un certificado de recepción.</li>
    <li><strong>Control sanitario:</strong> Los alimentos deben estar en buen estado, no caducados y correctamente envasados. La ONG te indicará los requisitos.</li>
    <li><strong>Transparencia:</strong> Publica los resultados de forma clara (kg recogidos, entidades beneficiadas). La confianza de la comunidad es clave.</li>
</ul>

<h3>7.5. Memoria Final del Proyecto</h3>

<p>Al finalizar la campaña, elabora una memoria profesional que incluya:</p>

<ol class="list-decimal pl-6 space-y-2">
    <li><strong>Portada</strong> con nombre del proyecto, centro, equipo y fecha</li>
    <li><strong>Resumen ejecutivo</strong> (qué se hizo, resultados principales)</li>
    <li><strong>Desarrollo del proyecto</strong> (fases, tareas realizadas, incidencias)</li>
    <li><strong>Resultados</strong> (kg recogidos, participantes, entidades colaboradoras)</li>
    <li><strong>Registro de donaciones</strong> (tabla completa)</li>
    <li><strong>Balance económico</strong> (ingresos, gastos, donaciones en especie)</li>
    <li><strong>Impacto social</strong> (a cuántas personas beneficia, ODS relacionados)</li>
    <li><strong>Conclusiones y propuestas de mejora</strong></li>
    <li><strong>Anexos</strong> (carteles, fotos, certificados, autorizaciones)</li>
</ol>

<div class="callout callout-success">
    <div class="callout-title">
        <span>🏁</span>
        <span>Meta Final</span>
    </div>
    <p>La memoria final es el entregable principal de tu proyecto. Debe tener un acabado profesional, como si la presentaras a la dirección de una empresa. Cuida el diseño, la ortografía y la presentación de datos.</p>
</div>
`;
