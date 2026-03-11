// Administración - Feria del Libro IES Serra Perenxisa
window.sectionsContent.administracion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📌</span>
        <span>Objetivo de esta Sección</span>
    </div>
    <p>Aprenderás a gestionar el dinero del evento de forma sencilla y transparente.</p>
</div>

<h3>7.1. Presupuesto - Ingresos y Gastos</h3>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span>
        <span>Tu Tarea</span>
    </div>
    <p>Completa este presupuesto con datos reales. Pide presupuestos a proveedores reales.</p>
</div>

<h4>💰 Ingresos - ¿De dónde sale el dinero?</h4>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left">Concepto</th>
            <th class="border border-slate-300 px-4 py-3 text-right">Cantidad</th>
            <th class="border border-slate-300 px-4 py-3 text-right">Precio</th>
            <th class="border border-slate-300 px-4 py-3 text-right">Total (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3">Subvención AMPA</td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[1]</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[Consultar]</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[_______]</em></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3">Subvención Ayuntamiento</td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[1]</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[Consultar]</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[_______]</em></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3">Alquiler stands (librerías)</td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[Nº stands]</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[50-100€]</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[_______]</em></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3">Venta de libros (si aplica)</td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[Estimar]</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[Variable]</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[_______]</em></td>
        </tr>
        <tr class="bg-slate-50 font-bold">
            <td class="border border-slate-300 px-4 py-3" colspan="3">TOTAL INGRESOS</td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[SUMAR]</em></td>
        </tr>
    </tbody>
</table>

<h4>💸 Gastos - ¿En qué se gasta el dinero?</h4>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left">Concepto</th>
            <th class="border border-slate-300 px-4 py-3 text-right">Total (€)</th>
            <th class="border border-slate-300 px-4 py-3 text-left">Proveedor</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3">Alquiler carpas/mesas</td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[Pedir 3 presupuestos]</em></td>
            <td class="border border-slate-300 px-4 py-3"><em>[Nombre empresa]</em></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3">Equipo de sonido</td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[¿El centro tiene?]</em></td>
            <td class="border border-slate-300 px-4 py-3"><em>[Si no, buscar]</em></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3">Carteles y programas</td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[Pedir presupuesto]</em></td>
            <td class="border border-slate-300 px-4 py-3"><em>[Imprenta local]</em></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3">Invitación a autores</td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[Viaje/alojamiento]</em></td>
            <td class="border border-slate-300 px-4 py-3"><em>[Autores locales]</em></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3">Merienda/refrigerio</td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[Opcional]</em></td>
            <td class="border border-slate-300 px-4 py-3"><em>[¿Quién lo trae?]</em></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3">Imprevistos (10%)</td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[10% del total]</em></td>
            <td class="border border-slate-300 px-4 py-3"><em>[Siempre hay]</em></td>
        </tr>
        <tr class="bg-slate-50 font-bold">
            <td class="border border-slate-300 px-4 py-3">TOTAL GASTOS</td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[SUMAR]</em></td>
            <td class="border border-slate-300 px-4 py-3"></td>
        </tr>
    </tbody>
</table>

<h4>✅ Balance Final</h4>

<div class="p-6 bg-slate-50 rounded-xl border border-slate-200 my-8">
    <p class="font-bold text-lg mb-4">Fórmula:</p>
    <p class="text-xl"><strong>INGRESOS - GASTOS = </strong> <em style="font-size: 1.5em;">[RESULTADO] €</em></p>
    <p class="mt-4 text-slate-600">
        <strong style="color: green;">Si es positivo o cero:</strong> ✅ El evento es viable<br>
        <strong style="color: red;">Si es negativo:</strong> ⚠️ Reduce gastos o busca más ingresos
    </p>
</div>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span>
        <span>Consejo de Presupuesto</span>
    </div>
    <p>Para un evento escolar, un presupuesto realista es 300-1500€. No necesitas miles de euros.</p>
</div>

<h3>7.2. Control de Gastos - Libro de Caja</h3>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📊</span>
        <span>Para el Día del Evento</span>
    </div>
    <p>Apunta TODO lo que gastes, aunque sea pequeño:</p>
</div>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left">Fecha</th>
            <th class="border border-slate-300 px-4 py-3 text-left">Concepto</th>
            <th class="border border-slate-300 px-4 py-3 text-right">Ingreso (€)</th>
            <th class="border border-slate-300 px-4 py-3 text-right">Gasto (€)</th>
            <th class="border border-slate-300 px-4 py-3 text-right">Saldo (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3"><em>[Fecha]</em></td>
            <td class="border border-slate-300 px-4 py-3"><em>Saldo inicial</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>0,00</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>0,00</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>0,00</em></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3"><em>[Fecha]</em></td>
            <td class="border border-slate-300 px-4 py-3"><em>[Ej: Subvención AMPA]</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[_______]</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em></em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[_______]</em></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3"><em>[Fecha]</em></td>
            <td class="border border-slate-300 px-4 py-3"><em>[Ej: Carteles imprenta]</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em></em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[_______]</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em>[_______]</em></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3"><em>[...]</em></td>
            <td class="border border-slate-300 px-4 py-3"><em>[...]</em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em></em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em></em></td>
            <td class="border border-slate-300 px-4 py-3 text-right"><em></em></td>
        </tr>
    </tbody>
</table>

<h3>7.3. Facturas y Justificantes</h3>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Importante</span>
    </div>
    <p>Guarda TODAS las facturas y tickets. Sin justificante, no se puede justificar el gasto.</p>
</div>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left">¿Qué guardar?</th>
            <th class="border border-slate-300 px-4 py-3 text-left">¿Por qué?</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3">✅ Facturas de proveedores</td>
            <td class="border border-slate-300 px-4 py-3">Para justificar gastos al centro/AMPA</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3">✅ Tickets pequeños (cinta, rotuladores)</td>
            <td class="border border-slate-300 px-4 py-3">Los gastos pequeños suman</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3">✅ Resguardos de transferencia</td>
            <td class="border border-slate-300 px-4 py-3">Para justificar ingresos</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3">✅ Emails de confirmación</td>
            <td class="border border-slate-300 px-4 py-3">Por si hay problemas con proveedores</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📁</span>
        <span>Organización</span>
    </div>
    <p>Crea una carpeta para el evento con estas subcarpetas:</p>
    <ul>
        <li>📂 01-Presupuestos</li>
        <li>📂 02-Facturas</li>
        <li>📂 03-Ingresos</li>
        <li>📂 04-Contratos</li>
        <li>📂 05-Permisos</li>
    </ul>
</div>
`;
