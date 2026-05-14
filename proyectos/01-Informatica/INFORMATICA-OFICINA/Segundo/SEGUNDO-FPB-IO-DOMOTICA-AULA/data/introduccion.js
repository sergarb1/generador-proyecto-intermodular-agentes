window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.introduccion = `
<h3>1.1. Contexto del Proyecto</h3>

<p>El <strong>IES Serra Perenxisa</strong> es un centro educativo de Formaci\u00f3n Profesional situado en la localidad de Torrent (Valencia). El centro cuenta con talleres y aulas equipadas con ordenadores para la formaci\u00f3n del alumnado de FP B\u00e1sica, Grado Medio y Grado Superior.</p>

<p>En el aula-taller de inform\u00e1tica, las clases suelen durar <strong>55 minutos</strong>. Se ha detectado que:</p>

<ul class="list-disc pl-6 space-y-2">
    <li>\ud83d\udd25 En los meses de calor, la temperatura del aula puede superar los <strong>30\u00baC</strong>, dificultando la concentraci\u00f3n.</li>
    <li>\u23f0 El alumnado a menudo no es consciente de cu\u00e1ndo queda poco tiempo de clase y no revisa su trabajo antes de irse.</li>
    <li>\ud83d\udee1\ufe0f No existe ning\u00fan sistema autom\u00e1tico que regule el ambiente o avise del final de la clase.</li>
</ul>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>\u26a0\ufe0f</span>
        <span>Problema a resolver</span>
    </div>
    <p>El aula necesita un sistema que <strong>enfr\u00ede autom\u00e1ticamente</strong> cuando haga calor y que <strong>avise visual y sonoramente</strong> al alumnado unos minutos antes de acabar la clase para que puedan revisar y guardar su trabajo.</p>
</div>

<h3>1.2. Propuesta T\u00e9cnica</h3>

<p>Se propone dise\u00f1ar y construir un <strong>sistema de dom\u00f3tica educativa</strong> basado en <strong>Arduino Uno</strong> que realice las siguientes funciones:</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
        <span class="text-4xl block mb-4">\ud83c\udf21\ufe0f</span>
        <h4 class="font-bold text-lg mb-2">Control de Temperatura</h4>
        <p class="text-sm text-slate-600">Un sensor DHT11 mide la temperatura. Si supera los 26\u00baC, se activa un rel\u00e9 que enciende un ventilador.</p>
    </div>
    <div class="p-6 bg-yellow-50 rounded-2xl border border-yellow-100 text-center">
        <span class="text-4xl block mb-4">\ud83d\udca1</span>
        <h4 class="font-bold text-lg mb-2">Aviso Lum\u00ednico</h4>
        <p class="text-sm text-slate-600">Un LED de alto brillo se enciende 3 minutos antes del final de la clase.</p>
    </div>
    <div class="p-6 bg-red-50 rounded-2xl border border-red-100 text-center">
        <span class="text-4xl block mb-4">\ud83d\udd14</span>
        <h4 class="font-bold text-lg mb-2">Aviso Sonoro</h4>
        <p class="text-sm text-slate-600">Un zumbador (buzzer) activo emite 3 pitidos largos junto con la luz de aviso.</p>
    </div>
</div>

<h3>1.3. Objetivos SMART</h3>

<table class="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm my-8">
    <thead class="bg-slate-800 text-white">
        <tr>
            <th class="p-4 text-left font-bold">#</th>
            <th class="p-4 text-left font-bold">Objetivo</th>
            <th class="p-4 text-left font-bold">Indicador</th>
        </tr>
    </thead>
    <tbody class="divide-y divide-slate-200">
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">1</td>
            <td class="p-4">Mantener la temperatura del aula por debajo de 26\u00baC</td>
            <td class="p-4">El ventilador se activa en menos de 10 segundos al superar los 26\u00baC</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">2</td>
            <td class="p-4">Avisar al alumnado 3 minutos antes del final de la clase</td>
            <td class="p-4">LED y zumbador se activan exactamente a los 52 minutos de clase</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">3</td>
            <td class="p-4">Construir el prototipo en 8 sesiones de trabajo</td>
            <td class="p-4">Prototipo funcional montado y probado en el plazo previsto</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">4</td>
            <td class="p-4">Documentar todo el proceso</td>
            <td class="p-4">Memoria t\u00e9cnica completa con fotos y esquemas</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-info">
    <div class="callout-title">
        <span>\ud83d\udcd8</span>
        <span>\u00bfQu\u00e9 vas a aprender?</span>
    </div>
    <p>Con este proyecto aprender\u00e1s a: montar circuitos electr\u00f3nicos b\u00e1sicos, programar Arduino, medir temperatura con sensores, controlar motores y luces, y documentar t\u00e9cnicamente tu trabajo. \u00a1Todo en un proyecto real para tu aula!</p>
</div>
`;
