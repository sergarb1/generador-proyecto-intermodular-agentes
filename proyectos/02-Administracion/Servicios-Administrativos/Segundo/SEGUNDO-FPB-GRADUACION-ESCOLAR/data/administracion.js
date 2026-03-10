// Administración y Gestión
window.sectionsContent.administracion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>⚙️</span>
        <span>Control del Dinero y Papeles</span>
    </div>
    <p class="mb-0">En esta sección aprenderás a controlar el dinero del evento.</p>
</div>

<h3>7.1. Control del Dinero 💰</h3>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📌</span>
        <span>¿Qué vamos a hacer?</span>
    </div>
    <p>Vas a apuntar todo el dinero que entra y sale. Así sabrás en cada momento cuánto tenéis.</p>
</div>

<h4>📝 Ejemplo Resuelto:</h4>

<h4>Libro de Caja</h4>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Fecha</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Qué es</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Entra (€)</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Sale (€)</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Queda (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2">01/04</td>
            <td class="border border-slate-300 px-4 py-2">Empezamos</td>
            <td class="border border-slate-300 px-4 py-2">0,00</td>
            <td class="border border-slate-300 px-4 py-2">0,00</td>
            <td class="border border-slate-300 px-4 py-2">0,00</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">05/04</td>
            <td class="border border-slate-300 px-4 py-2">Paga María</td>
            <td class="border border-slate-300 px-4 py-2">15,00</td>
            <td class="border border-slate-300 px-4 py-2">-</td>
            <td class="border border-slate-300 px-4 py-2">15,00</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2">10/04</td>
            <td class="border border-slate-300 px-4 py-2">Señal fotógrafo</td>
            <td class="border border-slate-300 px-4 py-2">-</td>
            <td class="border border-slate-300 px-4 py-2">50,00</td>
            <td class="border border-slate-300 px-4 py-2">-35,00</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">15/04</td>
            <td class="border border-slate-300 px-4 py-2">Paga Juan</td>
            <td class="border border-slate-300 px-4 py-2">15,00</td>
            <td class="border border-slate-300 px-4 py-2">-</td>
            <td class="border border-slate-300 px-4 py-2">-20,00</td>
        </tr>
        <tr class="font-bold bg-slate-100">
            <td class="border border-slate-300 px-4 py-2" colspan="2">TOTAL</td>
            <td class="border border-slate-300 px-4 py-2">30,00€</td>
            <td class="border border-slate-300 px-4 py-2">50,00€</td>
            <td class="border border-slate-300 px-4 py-2">-20,00€</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>¡Atención!</span>
    </div>
    <ul class="my-4 space-y-2">
        <li><strong>Todo pago debe tener papel</strong> (factura o ticket)</li>
        <li><strong>Todo ingreso se apunta</strong> en el momento</li>
        <li><strong>No gastar más de lo que hay</strong></li>
    </ul>
</div>

<h4>Ahora Te Toca a Ti:</h4>

<ol>
    <li><strong>Paso 1:</strong> Abre un Excel o Google Sheets</li>
    <li><strong>Paso 2:</strong> Crea las columnas: Fecha, Qué es, Entra, Sale, Queda</li>
    <li><strong>Paso 3:</strong> Apunta cada dinero que entre o salga</li>
    <li><strong>Paso 4:</strong> Cada semana suma todo y mira cuánto queda</li>
</ol>

<h4>Comparar lo Previsto con lo Real</h4>

<p>Al final, compara lo que pensabas gastar con lo que has gastado:</p>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Qué</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Lo que pensabas</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Lo que has gastado</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Diferencia</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Birretes</td>
            <td class="border border-slate-300 px-4 py-2">640€</td>
            <td class="border border-slate-300 px-4 py-2">___€</td>
            <td class="border border-slate-300 px-4 py-2">___€</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">Fotógrafo</td>
            <td class="border border-slate-300 px-4 py-2">200€</td>
            <td class="border border-slate-300 px-4 py-2">___€</td>
            <td class="border border-slate-300 px-4 py-2">___€</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Decoración</td>
            <td class="border border-slate-300 px-4 py-2">150€</td>
            <td class="border border-slate-300 px-4 py-2">___€</td>
            <td class="border border-slate-300 px-4 py-2">___€</td>
        </tr>
        <tr class="font-bold bg-slate-100">
            <td class="border border-slate-300 px-4 py-2">TOTAL</td>
            <td class="border border-slate-300 px-4 py-2">___€</td>
            <td class="border border-slate-300 px-4 py-2">___€</td>
            <td class="border border-slate-300 px-4 py-2">___€</td>
        </tr>
    </tbody>
</table>

<p><strong>Si la diferencia es positiva:</strong> Has gastado menos ✅</p>
<p><strong>Si la diferencia es negativa:</strong> Has gastado más ⚠️</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span>
        <span>Así Sabes que Está Bien:</span>
    </div>
    <ul>
        <li>Tienes todo apuntado día a día</li>
        <li>Guardas todos los tickets y facturas</li>
        <li>El dinero que queda coincide con lo apuntado</li>
    </ul>
</div>

<h3>7.2. Facturas y Tickets 📄</h3>

<h4>Tipos de Papeles</h4>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Papel</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Cuándo se usa</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Quién lo da</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2"><strong>Factura</strong></td>
            <td class="border border-slate-300 px-4 py-2">Compras grandes</td>
            <td class="border border-slate-300 px-4 py-2">Tienda o profesional</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2"><strong>Ticket</strong></td>
            <td class="border border-slate-300 px-4 py-2">Compras pequeñas</td>
            <td class="border border-slate-300 px-4 py-2">Cualquier tienda</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2"><strong>Recibo</strong></td>
            <td class="border border-slate-300 px-4 py-2">Cuando pagas a una persona</td>
            <td class="border border-slate-300 px-4 py-2">La persona que cobra</td>
        </tr>
    </tbody>
</table>

<h4>Cómo Pedir un Pago</h4>

<div class="callout callout-info" style="font-family: monospace; font-size: 0.8rem; white-space: pre-wrap;">
SOLICITUD DE PAGO - GRADUACIÓN 2026

Fecha: __/__/____

DATOS DE QUIEN COBRA:
- Nombre: _______________________________
- DNI/NIF: _____________________________
- Cuenta bancaria: _____________________

DATOS DEL PAGO:
- Qué es: ______________________________
- Cuánto: __________euro
- Factura nº: _________________________

FIRMAN:

El que pide: _______________  Fecha: __/__/____
El que autoriza: __________  Fecha: __/__/____
</div>

<h3>7.3. Impuestos Básicos 📊</h3>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📌</span>
        <span>¿Qué vamos a hacer?</span>
    </div>
    <p>Vas a aprender qué impuestos se pagan cuando compras algo.</p>
</div>

<h4>El IVA</h4>

<p>Cuando compras algo, el precio lleva un impuesto llamado <strong>IVA</strong>.</p>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Qué compras</th>
            <th class="border border-slate-300 px-4 py-2 text-left">IVA</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Ejemplo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2">La mayoría de cosas</td>
            <td class="border border-slate-300 px-4 py-2">21%</td>
            <td class="border border-slate-300 px-4 py-2">Si cuesta 100€, pagas 121€</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">Comida</td>
            <td class="border border-slate-300 px-4 py-2">10%</td>
            <td class="border border-slate-300 px-4 py-2">Si cuesta 100€, pagas 110€</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Pan, leche, huevos</td>
            <td class="border border-slate-300 px-4 py-2">4%</td>
            <td class="border border-slate-300 px-4 py-2">Si cuesta 100€, pagas 104€</td>
        </tr>
    </tbody>
</table>

<p><strong>Cómo calcular el IVA:</strong></p>
<p>IVA = Precio × 0,21 (para el 21%)</p>
<p>Total = Precio + IVA</p>

<h4>📝 Ejemplo Resuelto:</h4>

<p>Un fotógrafo cobra 200€ más IVA:</p>
<ul>
    <li>Base: 200€</li>
    <li>IVA (21%): 200 × 0,21 = 42€</li>
    <li>Total: 200 + 42 = 242€</li>
</ul>

<h4>Ahora Te Toca a Ti:</h4>

<ol>
    <li><strong>Paso 1:</strong> Mira una factura que tengas</li>
    <li><strong>Paso 2:</strong> Busca la "base imponible"</li>
    <li><strong>Paso 3:</strong> Busca el "IVA"</li>
    <li><strong>Paso 4:</strong> Suma base + IVA = total</li>
    <li><strong>Paso 5:</strong> Comprueba que coincide con el "total a pagar"</li>
</ol>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>¡Atención!</span>
    </div>
    <p>El centro educativo es público. Pregunta en secretaría si hay que pagar IVA o no.</p>
</div>

<h3>7.4. Control del Tiempo 👥</h3>

<h4>Apuntar las Horas Trabajadas</h4>

<p>Es bueno apuntar cuántas horas dedica cada uno:</p>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Nombre</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Semana</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Horas</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Qué hizo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2">María</td>
            <td class="border border-slate-300 px-4 py-2">1-7 marzo</td>
            <td class="border border-slate-300 px-4 py-2">4h</td>
            <td class="border border-slate-300 px-4 py-2">Buscar presupuestos</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">Juan</td>
            <td class="border border-slate-300 px-4 py-2">1-7 marzo</td>
            <td class="border border-slate-300 px-4 py-2">3h</td>
            <td class="border border-slate-300 px-4 py-2">Hacer invitaciones</td>
        </tr>
    </tbody>
</table>

<h3>7.5. Seguridad y Riesgos ⚠️</h3>

<h4>Qué Puede Pasar y Cómo Evitarlo</h4>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Riesgo</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Cómo evitarlo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2"><strong>Caídas</strong></td>
            <td class="border border-slate-300 px-4 py-2">No subir a sillas, limpiar lo que se derrame</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2"><strong>Cansancio</strong></td>
            <td class="border border-slate-300 px-4 py-2">Hacer descansos, beber agua</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2"><strong>Cables sueltos</strong></td>
            <td class="border border-slate-300 px-4 py-2">Pegar los cables al suelo con cinta</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span>
        <span>Así Sabes que Está Bien:</span>
    </div>
    <ul>
        <li>Tienes un botiquín cerca</li>
        <li>Los cables están recogidos</li>
        <li>Sabes dónde están las salidas de emergencia</li>
    </ul>
</div>

<h3>7.6. Archivo de Documentos 📁</h3>

<h4>Cómo Guardar los Papeles</h4>

<div class="callout callout-warning" style="font-family: monospace; font-size: 0.8rem;">
📁 GRADUACION-2026/
│
├── 📁 01-ORGANIZACION/
│   ├── Actas de reuniones
│   └── Lista del equipo
│
├── 📁 02-DINERO/
│   ├── Presupuesto
│   ├── Libro de caja
│   └── Facturas
│
├── 📁 03-PROVEEDORES/
│   ├── Presupuestos
│   └── Contratos
│
├── 📁 04-FAMILIAS/
│   ├── Autorizaciones
│   └── Lista de asistentes
│
└── 📁 05-EVENTO/
    ├── Guion del acto
    └── Fotos
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>🔒</span>
        <span>¡Atención con los Datos!</span>
    </div>
    <p>Los documentos con datos personales (nombres, teléfonos, emails) deben guardarse en un sitio seguro. Solo el equipo organizador puede verlos.</p>
</div>

<h3>7.7. Lista de Cosas por Hacer ✅</h3>

<ul class="my-4 space-y-2">
    <li>Libro de caja actualizado cada semana</li>
    <li>Todas las facturas guardadas</li>
    <li>Presupuesto comparado con lo gastado</li>
    <li>Horas del equipo apuntadas</li>
    <li>Documentos archivados en carpetas</li>
</ul>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span>
        <span>Así Sabes que Está Bien:</span>
    </div>
    <ul>
        <li>Sabes cuánto dinero tenéis en cada momento</li>
        <li>Tienes todos los tickets y facturas</li>
        <li>Los documentos están ordenados</li>
    </ul>
</div>
`;
