window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.diseno = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>\ud83c\udfa8</span>
        <span>\u00bfQu\u00e9 vamos a dise\u00f1ar?</span>
    </div>
    <p>Ahora vamos a dibujar c\u00f3mo se conectan todos los componentes. El dise\u00f1o es como un "plano" del circuito. No hace falta que sea perfecto; basta con que se entienda c\u00f3mo se conecta cada pieza.</p>
</div>

<h3>5.1. Diagrama de Bloques</h3>

<p>As\u00ed se conectan los componentes del sistema:</p>

<div class="bg-white p-8 rounded-2xl border border-slate-200 my-8 text-center">
    <pre class="text-xs overflow-x-auto font-mono leading-loose">
    ┌─────────────┐     ┌──────────────┐     ┌──────────────────┐
    │ Sensor      │────>│              │     │  Módulo Relé     │────> Ventilador
    │ DHT11       │     │   ARDUINO    │     │  (encender/apagar)│
    │ (temp+hume) │     │     UNO      │     └──────────────────┘
    └─────────────┘     │              │     ┌──────────────────┐
                        │  (procesa)   │────>│  LED rojo        │
    ┌─────────────┐     │              │     │  (aviso visual)   │
    │ Ordenador   │<───>│  (USB)       │     └──────────────────┘
    │ (Monitor    │     │              │     ┌──────────────────┐
    │  Serie)     │     │              │────>│  Buzzer activo   │
    └─────────────┘     └──────────────┘     │  (aviso sonoro)   │
                                             └──────────────────┘
    </pre>
    <p class="text-sm text-slate-500 mt-4">Diagrama de bloques del sistema de dom\u00f3tica para el aula</p>
</div>

<h3>5.2. Lista de Componentes</h3>

<table class="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm my-8">
    <thead class="bg-slate-800 text-white">
        <tr>
            <th class="p-4 text-left font-bold">Componente</th>
            <th class="p-4 text-left font-bold">Cantidad</th>
            <th class="p-4 text-left font-bold">Conexi\u00f3n en Arduino</th>
        </tr>
    </thead>
    <tbody class="divide-y divide-slate-200">
        <tr class="hover:bg-slate-50">
            <td class="p-4">Arduino Uno</td>
            <td class="p-4">1</td>
            <td class="p-4">Placa principal</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4">Sensor DHT11</td>
            <td class="p-4">1</td>
            <td class="p-4">Pin digital 2 (+VCC a 5V, GND a GND)</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4">M\u00f3dulo rel\u00e9 5V</td>
            <td class="p-4">1</td>
            <td class="p-4">Pin digital 3 (+VCC a 5V, GND a GND)</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4">LED rojo 5mm</td>
            <td class="p-4">1</td>
            <td class="p-4">Pin digital 4 (con resistencia 220\u03a9)</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4">Buzzer activo</td>
            <td class="p-4">1</td>
            <td class="p-4">Pin digital 5 (+VCC, GND)</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4">Resistencia 220\u03a9</td>
            <td class="p-4">1</td>
            <td class="p-4">Entre LED y pin digital 4</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4">Protoboard</td>
            <td class="p-4">1</td>
            <td class="p-4">Para montar el circuito sin soldar</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4">Cables jumper</td>
            <td class="p-4">15-20</td>
            <td class="p-4">Para conectar componentes</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4">Fuente de alimentaci\u00f3n USB</td>
            <td class="p-4">1</td>
            <td class="p-4">Para alimentar el Arduino</td>
        </tr>
    </tbody>
</table>

<h3>5.3. Tu tarea: dibuja el circuito</h3>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>\ud83d\uddd2\ufe0f</span>
        <span>Tarea de dise\u00f1o</span>
    </div>
    <p>Dibuja en tu cuaderno o en un programa (Paint, Tinkercad, draw.io) el circuito completo. Marca:</p>
</div>

<ol class="list-decimal pl-6 space-y-3">
    <li>\ud83d\udd0c D\u00f3nde se conecta cada cable (pin n\u00famero).</li>
    <li>\ud83d\udfe1 Qu\u00e9 componente va en cada zona de la protoboard.</li>
    <li>\u26a1 D\u00f3nde va la resistencia (para no quemar el LED).</li>
    <li>\ud83d\udcf7 Haz una foto de tu dise\u00f1o y p\u00e9gala en la memoria.</li>
</ol>

<div class="callout callout-success">
    <div class="callout-title">
        <span>\u2705</span>
        <span>Checklist de dise\u00f1o</span>
    </div>
    <ul class="list-disc pl-6 space-y-1">
        <li>\u2611 He dibujado el diagrama de bloques</li>
        <li>\u2611 He listado todos los componentes con sus conexiones</li>
        <li>\u2611 He dibujado el circuito en la protoboard</li>
        <li>\u2611 He etiquetado cada pin de Arduino</li>
    </ul>
</div>
`;
