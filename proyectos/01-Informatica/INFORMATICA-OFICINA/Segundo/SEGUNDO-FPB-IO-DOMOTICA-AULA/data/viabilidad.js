window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.viabilidad = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>\ud83d\udcca</span>
        <span>\u00bfQu\u00e9 vamos a analizar?</span>
    </div>
    <p>Antes de construir el sistema, debemos comprobar si es posible hacerlo. Vamos a estudiar si tenemos los materiales necesarios (viabilidad t\u00e9cnica), si el precio es asequible (viabilidad econ\u00f3mica) y si realmente va a funcionar en el aula (viabilidad operativa).</p>
</div>

<h3>3.1. Viabilidad T\u00e9cnica</h3>

<p>\u00bfTenemos los conocimientos y materiales para hacer este proyecto? La respuesta es <strong>s\u00ed</strong>, porque:</p>

<ul class="list-disc pl-6 space-y-2">
    <li>\ud83d\udd27 Arduino Uno es una placa f\u00e1cil de usar y hay muchos tutoriales en internet.</li>
    <li>\ud83d\udcd6 En clase hemos visto c\u00f3mo montar circuitos b\u00e1sicos con LEDs y resistencias.</li>
    <li>\ud83d\udcbb El software Arduino IDE es gratuito y se instala en cualquier ordenador.</li>
    <li>\ud83d\udee0\ufe0f Los componentes electr\u00f3nicos se pueden comprar en tiendas online por poco dinero.</li>
</ul>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>\ud83d\udee0\ufe0f</span>
        <span>Tu tarea</span>
    </div>
    <p>Completa esta tabla en tu memoria explicando por qu\u00e9 es posible (o no) cada parte:</p>
</div>

<table class="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm my-8">
    <thead class="bg-slate-800 text-white">
        <tr>
            <th class="p-4 text-left font-bold">Aspecto</th>
            <th class="p-4 text-left font-bold">\u00bfEs posible?</th>
            <th class="p-4 text-left font-bold">Explicaci\u00f3n</th>
        </tr>
    </thead>
    <tbody class="divide-y divide-slate-200">
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Montar el circuito</td>
            <td class="p-4 text-green-600 font-bold">S\u00ed</td>
            <td class="p-4">[Escribe por qu\u00e9]</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Programar Arduino</td>
            <td class="p-4 text-green-600 font-bold">S\u00ed</td>
            <td class="p-4">[Escribe por qu\u00e9]</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Conectar el ventilador</td>
            <td class="p-4 text-green-600 font-bold">S\u00ed</td>
            <td class="p-4">[Escribe por qu\u00e9]</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Sincronizar con el horario</td>
            <td class="p-4 text-green-600 font-bold">S\u00ed</td>
            <td class="p-4">[Escribe por qu\u00e9]</td>
        </tr>
    </tbody>
</table>

<h3>3.2. Viabilidad Econ\u00f3mica</h3>

<p>Vamos a calcular cu\u00e1nto cuesta construir el prototipo. Estos son los precios orientativos:</p>

<table class="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm my-8">
    <thead class="bg-slate-800 text-white">
        <tr>
            <th class="p-4 text-left font-bold">Componente</th>
            <th class="p-4 text-left font-bold">Cantidad</th>
            <th class="p-4 text-left font-bold">Precio aprox.</th>
        </tr>
    </thead>
    <tbody class="divide-y divide-slate-200">
        <tr class="hover:bg-slate-50">
            <td class="p-4">Placa Arduino Uno</td>
            <td class="p-4">1</td>
            <td class="p-4">20 \u20ac</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4">Sensor DHT11</td>
            <td class="p-4">1</td>
            <td class="p-4">4 \u20ac</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4">M\u00f3dulo rel\u00e9 5V</td>
            <td class="p-4">1</td>
            <td class="p-4">5 \u20ac</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4">LED 5mm (color rojo)</td>
            <td class="p-4">1</td>
            <td class="p-4">0.50 \u20ac</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4">Resistencia 220\u03a9</td>
            <td class="p-4">1</td>
            <td class="p-4">0.10 \u20ac</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4">Buzzer activo 5V</td>
            <td class="p-4">1</td>
            <td class="p-4">2 \u20ac</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4">Ventilador USB</td>
            <td class="p-4">1</td>
            <td class="p-4">10 \u20ac</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4">Cables, protoboard, fuente</td>
            <td class="p-4">1 lote</td>
            <td class="p-4">10 \u20ac</td>
        </tr>
        <tr class="bg-slate-100 font-bold">
            <td class="p-4" colspan="2">TOTAL</td>
            <td class="p-4">~ 51.60 \u20ac</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title">
        <span>\u2705</span>
        <span>Checklist de viabilidad</span>
    </div>
    <ul class="list-disc pl-6 space-y-1">
        <li>\u2611 He rellenado la tabla de viabilidad t\u00e9cnica</li>
        <li>\u2611 He calculado el presupuesto total</li>
        <li>\u2611 He comprobado que el presupuesto entra en el l\u00edmite del departamento</li>
        <li>\u2611 He decidido si el proyecto es viable (S\u00ed / No / Con cambios)</li>
    </ul>
</div>
`;
