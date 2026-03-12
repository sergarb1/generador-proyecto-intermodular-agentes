// Implementación (Adaptado FPB)
window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.implementacion = `
<h3>6.1. 📅 Planificación del Trabajo</h3>

<h4>Calendario de Implementación</h4>

<p>Vamos a dividir el trabajo en <strong>4 fases</strong>, cada una con tareas concretas:</p>

<div class="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
    <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 class="font-bold text-blue-800 mb-2">🏁 FASE 1</h4>
        <p class="text-xs text-blue-600 font-bold mb-2">Semanas 1-4</p>
        <p class="text-sm text-blue-700">Trámites y constitución de la empresa</p>
    </div>
    
    <div class="p-4 bg-green-50 rounded-lg border border-green-200">
        <h4 class="font-bold text-green-800 mb-2">🔧 FASE 2</h4>
        <p class="text-xs text-green-600 font-bold mb-2">Semanas 5-8</p>
        <p class="text-sm text-green-700">Preparar oficina y herramientas</p>
    </div>
    
    <div class="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <h4 class="font-bold text-yellow-800 mb-2">📢 FASE 3</h4>
        <p class="text-xs text-yellow-600 font-bold mb-2">Semanas 9-12</p>
        <p class="text-sm text-yellow-700">Publicidad y búsqueda de clientes</p>
    </div>
    
    <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
        <h4 class="font-bold text-purple-800 mb-2">🚀 FASE 4</h4>
        <p class="text-xs text-purple-600 font-bold mb-2">Semanas 13-16</p>
        <p class="text-sm text-purple-700">Primeros trabajos para clientes</p>
    </div>
</div>

<h3>6.2. 📝 Tareas Guiadas Paso a Paso</h3>

<h4>TAREA 1: Crear un Presupuesto para Cliente</h4>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📌</span>
        <span>¿Qué vamos a hacer?</span>
    </div>
    <p>Vamos a crear un presupuesto para un cliente que quiere gestionar sus redes sociales.</p>
</div>

<h5>📋 Ejemplo Resuelto:</h5>

<div class="bg-slate-100 p-4 rounded-lg font-mono text-xs my-4 overflow-x-auto">
<pre>DIGITAL MARKETING PRO S.L.
Calle Colón, 45, Valencia
Tel: 963 00 00 00
Email: info@digitalmarketingpro.es
NIF: B12345678

PRESUPUESTO Nº: 2026-001
Fecha: 15 de enero de 2026
Cliente: Panadería El Trigal
NIF Cliente: B98765432

CONCEPTO                    CANTIDAD    PRECIO    TOTAL
Gestión Instagram           1 mes       150 €     150 €
8 publicaciones/mes         1 mes       Incluido  -
Diseño de 2 carteles        2           25 €      50 €
                                              ─────────
SUBTOTAL                                         200 €
IVA (21%)                                       42 €
                                              ─────────
TOTAL                                           242 €</pre>
</div>

<h5>Ahora Te Toca a Ti:</h5>

<ol>
<li><strong>Paso 1:</strong> Abre tu procesador de textos (Word, Google Docs, LibreOffice)</li>
<li><strong>Paso 2:</strong> Copia el formato de arriba con los datos de tu cliente inventado</li>
<li><strong>Paso 3:</strong> Cambia los conceptos y precios según el servicio que ofrezcas</li>
<li><strong>Paso 4:</strong> Calcula el IVA (21% del subtotal)</li>
<li><strong>Paso 5:</strong> Suma subtotal + IVA para getting el total</li>
</ol>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>¡Atención!</span>
    </div>
    <p>El IVA siempre es el 21%. Para calcularlo: multiplica el subtotal por 0,21</p>
</div>

<h5>✅ Así Sabes que Está Bien:</h5>

<ul>
<li>El presupuesto tiene número de referencia</li>
<li>Tiene fecha y datos del cliente</li>
<li>Los cálculos son correctos</li>
<li>Se parece al ejemplo de arriba</li>
</ul>

<hr>

<h4>TAREA 2: Crear una Factura</h4>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📌</span>
        <span>¿Qué vamos a hacer?</span>
    </div>
    <p>Vamos a crear una factura para cobrar un trabajo ya realizado.</p>
</div>

<h5>📋 Ejemplo Resuelto:</h5>

<div class="bg-slate-100 p-4 rounded-lg font-mono text-xs my-4 overflow-x-auto">
<pre>FACTURA Nº: 2026-001
Fecha: 1 de febrero de 2026

EMISOR: DIGITAL MARKETING PRO S.L.
Calle Colón, 45, Valencia
NIF: B12345678

CLIENTE: Panadería El Trigal
Calle Mayor, 23, Valencia
NIF: B98765432

CONCEPTO                    CANTIDAD    PRECIO    TOTAL
Servicios febrero 2026      1 mes       200 €     200 €
Pack Medio Redes Sociales
                                              ─────────
BASE IMPOSIBLE                                   200 €
IVA (21%)                                        42 €
                                              ─────────
TOTAL A COBRAR                                   242 €

FORMA DE PAGO: Transferencia bancaria
IBAN: ES12 3456 7890 1234 5678 9012
Vencimiento: 15 de febrero de 2026</pre>
</div>

<h5>Ahora Te Toca a Ti:</h5>

<ol>
<li><strong>Paso 1:</strong> Usa la misma plantilla que el presupuesto</li>
<li><strong>Paso 2:</strong> Cambia "PRESUPUESTO" por "FACTURA"</li>
<li><strong>Paso 3:</strong> Añade el número de factura (correlativo)</li>
<li><strong>Paso 4:</strong> Añade los datos bancarios para el pago</li>
<li><strong>Paso 5:</strong> Pon una fecha de vencimiento (15 días después)</li>
</ol>

<h5>✅ Así Sabes que Está Bien:</h5>

<ul>
<li>La factura tiene número único</li>
<li>Tiene todos los datos fiscales</li>
<li>Incluye forma y fecha de pago</li>
<li>Los cálculos coinciden con el presupuesto</li>
</ul>

<hr>

<h4>TAREA 3: Crear un Contrato de Servicios</h4>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📌</span>
        <span>¿Qué vamos a hacer?</span>
    </div>
    <p>Vamos a crear un contrato simple entre la empresa y el cliente.</p>
</div>

<h5>📋 Modelo de Contrato:</h5>

<div class="bg-slate-100 p-4 rounded-lg font-mono text-xs my-4 overflow-x-auto">
<pre>CONTRATO DE PRESTACIÓN DE SERVICIOS DE MARKETING DIGITAL

En Valencia, a ___ de ___________ de 2026

REUNIDOS

De una parte, DIGITAL MARKETING PRO S.L., con NIF B12345678
y domicilio en Calle Colón, 45, Valencia.

De otra parte, [NOMBRE DEL CLIENTE], con NIF ___________
y domicilio en ________________________________.

EXPONEN

Que ambas partes acuerdan firmar este contrato con las
siguientes condiciones:

PRIMERA.- OBJETO
Digital Marketing Pro gestionará las redes sociales del cliente.

SEGUNDA.- DURACIÓN
El contrato dura 12 meses, desde ___/___/2026 hasta ___/___/2027.

TERCERA.- PRECIO
El cliente pagará ___ €/mes + IVA.

CUARTA.- FORMA DE PAGO
El pago se hará por transferencia bancaria antes del día 5
de cada mes.

QUINTA.- SERVICIOS INCLUIDOS
- 8 publicaciones mensuales en Instagram
- Respuesta a comentarios y mensajes
- Informe mensual de resultados

Y en prueba de conformidad, firman por duplicado.


_________________                    _________________
Digital Marketing Pro                El Cliente</pre>
</div>

<h5>Ahora Te Toca a Ti:</h5>

<ol>
<li><strong>Paso 1:</strong> Copia el modelo en tu procesador de textos</li>
<li><strong>Paso 2:</strong> Rellena los espacios en blanco con datos de un cliente</li>
<li><strong>Paso 3:</strong> Añade o quita servicios según el pack contratado</li>
<li><strong>Paso 4:</strong> Revisa que todas las fechas tengan sentido</li>
</ol>

<h5>✅ Así Sabes que Está Bien:</h5>

<ul>
<li>Todos los campos en blanco están rellenados</li>
<li>Las fechas son coherentes</li>
<li>El precio coincide con el pack elegido</li>
<li>Hay espacio para dos firmas</li>
</ul>

<hr>

<h4>TAREA 4: Crear una Hoja de Cálculo de Control</h4>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📌</span>
        <span>¿Qué vamos a hacer?</span>
    </div>
    <p>Vamos a crear una tabla en Excel para controlar los ingresos y gastos.</p>
</div>

<h5>📋 Ejemplo de Tabla:</h5>

<table>
<thead>
<tr><th>Fecha</th><th>Concepto</th><th>Tipo</th><th>Importe</th></tr>
</thead>
<tbody>
<tr><td>15/01/2026</td><td>Cobro factura 2026-001</td><td>Ingreso</td><td>242 €</td></tr>
<tr><td>20/01/2026</td><td>Pago software Canva</td><td>Gasto</td><td>15 €</td></tr>
<tr><td>01/02/2026</td><td>Cobro factura 2026-002</td><td>Ingreso</td><td>350 €</td></tr>
<tr><td>05/02/2026</td><td>Pago alquiler oficina</td><td>Gasto</td><td>400 €</td></tr>
</tbody>
</table>

<h5>Fórmulas para Excel:</h5>

<div class="bg-slate-100 p-4 rounded-lg font-mono text-xs my-4 overflow-x-auto">
<pre>Para sumar todos los ingresos:
=SUMAR.SI(C2:C100;"Ingreso";D2:D100)

Para sumar todos los gastos:
=SUMAR.SI(C2:C100;"Gasto";D2:D100)

Para calcular beneficio:
=Ingresos - Gastos</pre>
</div>

<h5>Ahora Te Toca a Ti:</h5>

<ol>
<li><strong>Paso 1:</strong> Abre Excel o Google Sheets</li>
<li><strong>Paso 2:</strong> Crea las 4 columnas: Fecha, Concepto, Tipo, Importe</li>
<li><strong>Paso 3:</strong> Añade 10 filas con datos inventados</li>
<li><strong>Paso 4:</strong> Usa las fórmulas de arriba para calcular totales</li>
<li><strong>Paso 5:</strong> Comprueba que el beneficio es correcto</li>
</ol>

<h5>✅ Así Sabes que Está Bien:</h5>

<ul>
<li>La tabla tiene al menos 10 filas de datos</li>
<li>Las fórmulas funcionan y dan resultados</li>
<li>Los ingresos menos gastos = beneficio</li>
<li>Se ve claro qué es ingreso y qué es gasto</li>
</ul>

</div>
`;
