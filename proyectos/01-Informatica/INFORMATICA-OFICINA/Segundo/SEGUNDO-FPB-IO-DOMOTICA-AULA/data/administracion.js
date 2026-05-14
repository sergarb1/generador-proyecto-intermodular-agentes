window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.administracion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>\u2699\ufe0f</span>
        <span>\u00bfQu\u00e9 vamos a ver?</span>
    </div>
    <p>Una vez que el sistema funciona, hay que saber c\u00f3mo mantenerlo y qu\u00e9 hacer si algo falla. En esta secci\u00f3n aprender\u00e1s a administrar y cuidar tu proyecto.</p>
</div>

<h3>7.1. Manual de Uso</h3>

<p>El sistema est\u00e1 dise\u00f1ado para que funcione solo. Solo hay que seguir estos pasos:</p>

<ol class="list-decimal pl-6 space-y-3">
    <li><strong>Encender:</strong> Conecta el cable USB del Arduino a la corriente o al ordenador. El sistema arranca solo.</li>
    <li><strong>Funcionamiento normal:</strong> No hay que hacer nada. El ventilador se encender\u00e1 si hace calor y la luz/sonido avisar\u00e1 al final.</li>
    <li><strong>Apagar:</strong> Desconecta el cable USB. El sistema se apaga.</li>
    <li><strong>Reset:</strong> Pulsa el bot\u00f3n de reset en la placa Arduino si el sistema se comporta de forma extra\u00f1a.</li>
</ol>

<h3>7.2. Mantenimiento</h3>

<table class="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm my-8">
    <thead class="bg-slate-800 text-white">
        <tr>
            <th class="p-4 text-left font-bold">Tarea</th>
            <th class="p-4 text-left font-bold">Frecuencia</th>
            <th class="p-4 text-left font-bold">Instrucciones</th>
        </tr>
    </thead>
    <tbody class="divide-y divide-slate-200">
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Limpiar el ventilador</td>
            <td class="p-4">1 vez al mes</td>
            <td class="p-4">Apagar el sistema. Pasar un pa\u00f1o seco por las aspas del ventilador para quitar el polvo.</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Revisar cables</td>
            <td class="p-4">1 vez al mes</td>
            <td class="p-4">Comprobar que todos los cables est\u00e1n bien conectados y no est\u00e1n pelados o rotos.</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Probar el sensor</td>
            <td class="p-4">1 vez al trimestre</td>
            <td class="p-4">Acercar una fuente de calor suave al DHT11 y verificar que el ventilador se activa.</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Actualizar hora</td>
            <td class="p-4">Cada cambio de horario</td>
            <td class="p-4">Si se usa control horario, ajustar la hora de inicio de clase en el c\u00f3digo.</td>
        </tr>
    </tbody>
</table>

<h3>7.3. Soluci\u00f3n de Problemas</h3>

<table class="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm my-8">
    <thead class="bg-slate-800 text-white">
        <tr>
            <th class="p-4 text-left font-bold">Problema</th>
            <th class="p-4 text-left font-bold">Posible causa</th>
            <th class="p-4 text-left font-bold">Soluci\u00f3n</th>
        </tr>
    </thead>
    <tbody class="divide-y divide-slate-200">
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">El ventilador no se enciende</td>
            <td class="p-4">Cable suelto o rel\u00e9 mal conectado</td>
            <td class="p-4">Revisar conexiones del rel\u00e9 (VCC, GND, IN) y del ventilador</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">LED siempre encendido</td>
            <td class="p-4">C\u00f3digo incorrecto o pin equivocado</td>
            <td class="p-4">Revisar que el LED est\u00e9 en el pin 4 y el c\u00f3digo coincida</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">El sensor marca 0\u00baC</td>
            <td class="p-4">Sensor DHT11 mal conectado o librer\u00eda no instalada</td>
            <td class="p-4">Comprobar cables del sensor y reinstalar librer\u00eda DHT</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">No se oye el buzzer</td>
            <td class="p-4">Buzzer conectado al rev\u00e9s</td>
            <td class="p-4">El buzzer activo tiene polaridad: (+) al pin, (-) a GND</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Arduino no se conecta</td>
            <td class="p-4">Cable USB da\u00f1ado o puerto incorrecto</td>
            <td class="p-4">Probar otro cable USB y seleccionar el puerto correcto en el IDE</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>\ud83d\udd0d</span>
        <span>Tu tarea</span>
    </div>
    <p>\u00bfSe te ocurre otro problema que pueda surgir? A\u00f1\u00e1delo a la tabla con su posible causa y soluci\u00f3n.</p>
</div>

<h3>7.4. Checklist de administraci\u00f3n</h3>
<ul class="list-disc pl-6 space-y-2">
    <li>\u2611 He escrito el manual de usuario del sistema</li>
    <li>\u2611 He completado el plan de mantenimiento</li>
    <li>\u2611 He a\u00f1adido un problema nuevo a la tabla de soluci\u00f3n de problemas</li>
    <li>\u2611 He comprobado que el sistema funciona correctamente despu\u00e9s del mantenimiento</li>
</ul>
`;
