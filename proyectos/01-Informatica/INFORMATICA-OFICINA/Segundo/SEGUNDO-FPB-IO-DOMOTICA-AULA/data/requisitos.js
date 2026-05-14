window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.requisitos = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>\ud83d\udcdb</span>
        <span>\u00bfQu\u00e9 vamos a definir?</span>
    </div>
    <p>Los requisitos son las "reglas" que debe cumplir nuestro sistema. Vamos a escribir qu\u00e9 tiene que hacer (requisitos funcionales) y c\u00f3mo debe comportarse (requisitos no funcionales).</p>
</div>

<h3>4.1. Requisitos Funcionales</h3>

<p>Son las acciones concretas que debe realizar el sistema:</p>

<table class="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm my-8">
    <thead class="bg-slate-800 text-white">
        <tr>
            <th class="p-4 text-left font-bold">C\u00f3digo</th>
            <th class="p-4 text-left font-bold">Requisito</th>
            <th class="p-4 text-left font-bold">Prioridad</th>
        </tr>
    </thead>
    <tbody class="divide-y divide-slate-200">
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">RF-01</td>
            <td class="p-4">El sistema debe medir la temperatura del aula cada 5 segundos</td>
            <td class="p-4"><span class="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">Alta</span></td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">RF-02</td>
            <td class="p-4">Si la temperatura supera los 26\u00baC, el ventilador debe encenderse</td>
            <td class="p-4"><span class="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">Alta</span></td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">RF-03</td>
            <td class="p-4">Si la temperatura baja de 24\u00baC, el ventilador debe apagarse</td>
            <td class="p-4"><span class="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">Alta</span></td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">RF-04</td>
            <td class="p-4">El LED y el buzzer deben activarse 3 minutos antes del final de la clase</td>
            <td class="p-4"><span class="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">Media</span></td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">RF-05</td>
            <td class="p-4">El aviso (luz + sonido) debe durar 30 segundos</td>
            <td class="p-4"><span class="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">Media</span></td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">RF-06</td>
            <td class="p-4">El sistema debe mostrar la temperatura actual en el monitor serie del ordenador</td>
            <td class="p-4"><span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Baja</span></td>
        </tr>
    </tbody>
</table>

<h3>4.2. Requisitos No Funcionales</h3>

<table class="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm my-8">
    <thead class="bg-slate-800 text-white">
        <tr>
            <th class="p-4 text-left font-bold">C\u00f3digo</th>
            <th class="p-4 text-left font-bold">Requisito</th>
            <th class="p-4 text-left font-bold">Descripci\u00f3n</th>
        </tr>
    </thead>
    <tbody class="divide-y divide-slate-200">
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">RNF-01</td>
            <td class="p-4">Seguridad</td>
            <td class="p-4">El circuito debe funcionar a 5V, sin riesgo de descarga el\u00e9ctrica</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">RNF-02</td>
            <td class="p-4">Facilidad de uso</td>
            <td class="p-4">El sistema debe encenderse solo al conectar la alimentaci\u00f3n, sin configuraci\u00f3n extra</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">RNF-03</td>
            <td class="p-4">Robustez</td>
            <td class="p-4">El sistema debe funcionar al menos 4 horas seguidas sin fallos</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">RNF-04</td>
            <td class="p-4">Documentaci\u00f3n</td>
            <td class="p-4">El proyecto debe incluir un manual de usuario y un esquema del circuito</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>\u270f\ufe0f</span>
        <span>Tu tarea</span>
    </div>
    <p>\u00bfSe te ocurre alg\u00fan requisito m\u00e1s? A\u00f1ade 2 requisitos funcionales y 1 no funcional a la lista. Por ejemplo: "El sistema debe poder resetearse con un bot\u00f3n".</p>
</div>

<h4>3.3. Checklist de requisitos</h4>
<ul class="list-disc pl-6 space-y-2">
    <li>\u2611 He le\u00eddo y entendido todos los requisitos funcionales</li>
    <li>\u2611 He a\u00f1adido 2 requisitos funcionales nuevos</li>
    <li>\u2611 He a\u00f1adido 1 requisito no funcional nuevo</li>
    <li>\u2611 He comprobado que no falta ning\u00fan requisito importante</li>
</ul>
`;
