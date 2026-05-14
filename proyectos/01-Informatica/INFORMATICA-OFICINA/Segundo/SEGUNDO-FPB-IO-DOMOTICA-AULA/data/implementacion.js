window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.implementacion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>\ud83d\udee0\ufe0f</span>
        <span>\u00bfQu\u00e9 vamos a hacer?</span>
    </div>
    <p>\u00a1Lleg\u00f3 el momento de construir! Vamos a montar el circuito en la protoboard y programar el Arduino. Sigue los pasos en orden y no saltes ninguno.</p>
</div>

<h3>6.1. Montaje del Circuito</h3>

<h4>Paso 1: Prepara la protoboard</h4>
<p>Coloca la protoboard en la mesa con las pistas horizontales hacia ti. Aseg\u00farate de que las filas est\u00e1n numeradas (A, B, C...) para seguir las conexiones.</p>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>\u26a0\ufe0f</span>
        <span>\u00a1Atenci\u00f3n!</span>
    </div>
    <p>Recuerda: en la protoboard, las filas de la misma letra est\u00e1n conectadas horizontalmente. Los carriles laterales (+ y -) conectan toda la columna verticalmente.</p>
</div>

<h4>Paso 2: Coloca los componentes</h4>

<table class="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm my-8">
    <thead class="bg-slate-800 text-white">
        <tr>
            <th class="p-4 text-left font-bold">Orden</th>
            <th class="p-4 text-left font-bold">Componente</th>
            <th class="p-4 text-left font-bold">Instrucciones</th>
        </tr>
    </thead>
    <tbody class="divide-y divide-slate-200">
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">1</td>
            <td class="p-4">Arduino Uno</td>
            <td class="p-4">Coloca el Arduino al lado de la protoboard (no va montado encima). Conecta GND a la l\u00ednea negativa (-) de la protoboard y 5V a la l\u00ednea positiva (+).</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">2</td>
            <td class="p-4">Sensor DHT11</td>
            <td class="p-4">Pin 1 (izquierda) a 5V, Pin 2 a pin digital 2 de Arduino, Pin 3 (derecha) a GND.</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">3</td>
            <td class="p-4">M\u00f3dulo rel\u00e9</td>
            <td class="p-4">VCC a 5V, GND a GND, IN a pin digital 3 de Arduino. El ventilador se conecta al borne NC (Normal Cerrado) o NO (Normal Abierto) seg\u00fan se prefiera.</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">4</td>
            <td class="p-4">LED rojo</td>
            <td class="p-4">\u00c1nodo (pata larga) a resistencia 220\u03a9, resistencia a pin digital 4. C\u00e1todo (pata corta) a GND.</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">5</td>
            <td class="p-4">Buzzer activo</td>
            <td class="p-4">Pin positivo (+) a pin digital 5, pin negativo (-) a GND.</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">6</td>
            <td class="p-4">Ventilador USB</td>
            <td class="p-4">Corta el cable USB del ventilador, pela los cables rojo (+5V) y negro (GND), y con\u00e9ctalos al m\u00f3dulo rel\u00e9 (NO y COM).</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title">
        <span>\u2705</span>
        <span>Checklist de montaje</span>
    </div>
    <ul class="list-disc pl-6 space-y-1">
        <li>\u2611 He colocado todos los componentes en la protoboard</li>
        <li>\u2611 He conectado GND de Arduino a la l\u00ednea negativa de la protoboard</li>
        <li>\u2611 He conectado 5V de Arduino a la l\u00ednea positiva de la protoboard</li>
        <li>\u2611 He comprobado que no hay cables sueltos</li>
        <li>\u2611 He pedido al profesorado que revise el circuito antes de conectarlo</li>
    </ul>
</div>

<h3>6.2. Programaci\u00f3n del Arduino</h3>

<p>Ahora vamos a escribir el programa (c\u00f3digo) que har\u00e1 funcionar el sistema. Abre el <strong>Arduino IDE</strong> en el ordenador y sigue estos pasos:</p>

<ol class="list-decimal pl-6 space-y-3">
    <li><strong>Conecta el Arduino</strong> al ordenador mediante el cable USB.</li>
    <li><strong>Selecciona la placa:</strong> Ve a "Herramientas > Placa > Arduino Uno".</li>
    <li><strong>Selecciona el puerto:</strong> Ve a "Herramientas > Puerto" y elige el puerto COM donde aparezca "Arduino Uno".</li>
    <li><strong>Instala la librer\u00eda DHT:</strong> Ve a "Herramientas > Gestionar bibliotecas...", busca "DHT sensor library" de Adafruit e inst\u00e1lala.</li>
</ol>

<h4>C\u00f3digo del programa</h4>

<p>Copia este c\u00f3digo en el editor de Arduino IDE. Lee los comentarios para entender qu\u00e9 hace cada parte:</p>

<div class="callout callout-info my-6">
<pre class="text-xs overflow-x-auto">
#include &lt;DHT.h&gt;

// Definir pines
#define PIN_DHT 2
#define PIN_RELE 3
#define PIN_LED 4
#define PIN_BUZZER 5

// Configurar sensor DHT11
DHT dht(PIN_DHT, DHT11);

// Variables para tiempo de clase
unsigned long inicioClase;
const unsigned long DURACION_CLASE = 3300000; // 55 minutos en ms
const unsigned long TIEMPO_AVISO = 300000;    // 3 minutos antes = 52 min = 3120000ms
                                             // 55min = 3300000ms -> avisa a 3000000ms
const float TEMP_MAX = 26.0;
const float TEMP_MIN = 24.0;

void setup() {
  Serial.begin(9600);
  pinMode(PIN_RELE, OUTPUT);
  pinMode(PIN_LED, OUTPUT);
  pinMode(PIN_BUZZER, OUTPUT);
  
  digitalWrite(PIN_RELE, LOW); // Ventilador apagado
  digitalWrite(PIN_LED, LOW);  // LED apagado
  digitalWrite(PIN_BUZZER, LOW); // Buzzer apagado
  
  dht.begin();
  
  inicioClase = millis(); // Registrar inicio de clase
  
  Serial.println("Sistema de Domotica para el Aula - INICIADO");
  Serial.println("Temperatura actual: ");
}

void loop() {
  // Leer temperatura
  float temperatura = dht.readTemperature();
  
  // Mostrar temperatura en monitor serie
  if (isnan(temperatura)) {
    Serial.println("Error: no se puede leer el sensor DHT11");
  } else {
    Serial.print("Temperatura: ");
    Serial.print(temperatura);
    Serial.println(" *C");
  }
  
  // --- CONTROL DEL VENTILADOR ---
  if (temperatura &gt; TEMP_MAX) {
    digitalWrite(PIN_RELE, HIGH); // Encender ventilador
    Serial.println("Ventilador ENCENDIDO");
  } else if (temperatura &lt; TEMP_MIN) {
    digitalWrite(PIN_RELE, LOW);  // Apagar ventilador
    Serial.println("Ventilador APAGADO");
  }
  
  // --- CONTROL DE AVISO FIN DE CLASE ---
  unsigned long tiempoActual = millis();
  unsigned long tiempoTranscurrido = tiempoActual - inicioClase;
  
  // Si han pasado al menos 52 minutos (3120000 ms = 52*60000)
  if (tiempoTranscurrido &gt;= TIEMPO_AVISO &amp;&amp; tiempoTranscurrido &lt; TIEMPO_AVISO + 30000) {
    digitalWrite(PIN_LED, HIGH);  // Encender LED
    digitalWrite(PIN_BUZZER, HIGH); // Activar buzzer
    Serial.println("AVISO: Quedan 3 minutos de clase!");
  } else {
    digitalWrite(PIN_LED, LOW);
    digitalWrite(PIN_BUZZER, LOW);
  }
  
  delay(5000); // Esperar 5 segundos entre lecturas
}
</pre>
</div>

<h3>6.3. Pruebas del Sistema</h3>

<p>Una vez cargado el c\u00f3digo en Arduino, realiza estas pruebas:</p>

<table class="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm my-8">
    <thead class="bg-slate-800 text-white">
        <tr>
            <th class="p-4 text-left font-bold">Prueba</th>
            <th class="p-4 text-left font-bold">C\u00f3mo hacerla</th>
            <th class="p-4 text-left font-bold">Resultado esperado</th>
            <th class="p-4 text-left font-bold">\u00bfFunciona?</th>
        </tr>
    </thead>
    <tbody class="divide-y divide-slate-200">
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Temperatura</td>
            <td class="p-4">Sopla suavemente sobre el sensor DHT11 con un secador (sin calor extremo)</td>
            <td class="p-4">El ventilador deber\u00eda encenderse</td>
            <td class="p-4">[S\u00ed / No]</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Enfriamiento</td>
            <td class="p-4">Acerca un cubito de hielo cerca del sensor (sin mojarlo)</td>
            <td class="p-4">El ventilador deber\u00eda apagarse</td>
            <td class="p-4">[S\u00ed / No]</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Aviso final</td>
            <td class="p-4">Espera 52 minutos o modifica el c\u00f3digo para que el tiempo de aviso sea 10 segundos (solo para pruebas)</td>
            <td class="p-4">LED y buzzer se activan</td>
            <td class="p-4">[S\u00ed / No]</td>
        </tr>
        <tr class="hover:bg-slate-50">
            <td class="p-4 font-bold">Monitor serie</td>
            <td class="p-4">Abre el monitor serie en Arduino IDE (icono de lupa)</td>
            <td class="p-4">Se ven los mensajes de temperatura y estado</td>
            <td class="p-4">[S\u00ed / No]</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title">
        <span>\u2705</span>
        <span>Checklist de implementaci\u00f3n</span>
    </div>
    <ul class="list-disc pl-6 space-y-1">
        <li>\u2611 He montado el circuito siguiendo el orden de la tabla</li>
        <li>\u2611 El profesorado ha revisado el circuito antes de conectarlo</li>
        <li>\u2611 He escrito el c\u00f3digo o lo he copiado al Arduino IDE</li>
        <li>\u2611 He compilado y cargado el programa sin errores</li>
        <li>\u2611 He realizado las 4 pruebas y anotado los resultados</li>
    </ul>
</div>
`;
