window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.herramientas = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>\ud83d\udee0\ufe0f</span>
        <span>\u00bfQu\u00e9 herramientas necesitamos?</span>
    </div>
    <p>Para construir este proyecto necesitar\u00e1s herramientas f\u00edsicas (para montar) y software (para programar). Aqu\u00ed tienes la lista completa.</p>
</div>

<h3>8.1. Herramientas F\u00edsicas</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold mb-3 flex items-center gap-2"><span>\ud83d\udd27</span> Herramientas de montaje</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li>Protoboard (placa de pruebas)</li>
            <li>Cables jumper (macho-macho y macho-hembra)</li>
            <li>Pelacables y cortador</li>
            <li>Destornillador peque\u00f1o (para el rel\u00e9)</li>
            <li>Pinzas de precisi\u00f3n</li>
        </ul>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold mb-3 flex items-center gap-2"><span>\ud83d\udcdf</span> Instrumentos de medici\u00f3n</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li>Mult\u00edmetro digital</li>
            <li>Term\u00f3metro ambiente (para calibrar)</li>
            <li>Cable USB (tipo A-B para Arduino)</li>
        </ul>
    </div>
</div>

<h3>8.2. Software</h3>

<table class="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm my-8">
    <thead class="bg-slate-800 text-white">
        <tr>
            <th class="p-4 text-left font-bold">Programa</th>
            <th class="p-4 text-left font-bold">\u00bfPara qu\u00e9 sirve?</th>
            <th class="p-4 text-left font-bold">D\u00f3nde descargarlo</th>
        </tr>
    </thead>
    <tbody class="divide-y divide-slate-200">
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Arduino IDE</td>
            <td class="p-4">Escribir y cargar el c\u00f3digo en la placa</td>
            <td class="p-4">arduino.cc/en/software</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">LibreOffice / Word</td>
            <td class="p-4">Escribir la memoria del proyecto</td>
            <td class="p-4">libreoffice.org (gratuito)</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Tinkercad</td>
            <td class="p-4">Simular el circuito antes de montarlo</td>
            <td class="p-4">tinkercad.com (gratuito con cuenta)</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Fritzing</td>
            <td class="p-4">Dibujar esquemas profesionales del circuito</td>
            <td class="p-4">fritzing.org</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Paint / GIMP</td>
            <td class="p-4">Editar fotos y crear diagramas</td>
            <td class="p-4">gimp.org (gratuito)</td>
        </tr>
    </tbody>
</table>

<h3>8.3. Tu tarea: prueba Tinkercad</h3>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>\ud83d\udcbb</span>
        <span>Actividad con Tinkercad</span>
    </div>
    <p>Antes de montar el circuito real, vamos a simularlo en Tinkercad:</p>
</div>

<ol class="list-decimal pl-6 space-y-3">
    <li>Crea una cuenta gratuita en <strong>tinkercad.com</strong>.</li>
    <li>Ve a "Circuitos" y crea un nuevo circuito.</li>
    <li>A\u00f1ade los componentes: Arduino Uno, sensor DHT11, rel\u00e9, LED, buzzer.</li>
    <li>Con\u00e9ctalos igual que en el dise\u00f1o.</li>
    <li>Carga el c\u00f3digo y haz clic en "Iniciar simulaci\u00f3n".</li>
    <li>\u00bfFunciona igual que en la realidad? Anota las diferencias.</li>
</ol>

<div class="callout callout-success">
    <div class="callout-title">
        <span>\u2705</span>
        <span>Checklist de herramientas</span>
    </div>
    <ul class="list-disc pl-6 space-y-1">
        <li>\u2611 He reunido todas las herramientas f\u00edsicas necesarias</li>
        <li>\u2611 He instalado Arduino IDE en el ordenador</li>
        <li>\u2611 He instalado la librer\u00eda DHT sensor library</li>
        <li>\u2611 He simulado el circuito en Tinkercad</li>
    </ul>
</div>
`;
