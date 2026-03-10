window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["estado-arte"] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🌐</span>
        <span>Estado del Arte en Monitorización de Sistemas</span>
    </div>
    <p>
        La monitorización de infraestructuras IT ha evolucionado desde simples checks de conectividad 
        hasta sistemas de AIOps (Artificial Intelligence for IT Operations) que predicen fallos antes 
        de que ocurran.
    </p>
</div>

<h3>2.1. Evolución Histórica</h3>

<h4>Primera Generación (1990s): Monitorización Básica</h4>
<p>
    Las primeras herramientas se centraban en verificar la disponibilidad de equipos mediante 
    <strong>ICMP Ping</strong>. Herramientas como <em>Nagios</em> (1999) introdujeron el concepto 
    de checks periódicos y alertas básicas.
</p>

<h4>Segunda Generación (2000s): Monitorización de Prestaciones</h4>
<p>
    Se incorporó la recolección de métricas de rendimiento (CPU, memoria, disco) mediante protocolos 
    como <strong>SNMP</strong> y agentes ligeros. <em>Cacti</em> y <em>MRTG</em> popularizaron los 
    gráficos de tendencias.
</p>

<h4>Tercera Generación (2010s): Monitorización Integral</h4>
<p>
    Surgieron soluciones que combinan monitorización de infraestructura, aplicaciones y experiencia 
    de usuario. <em>Zabbix</em>, <em>Prometheus</em> y <em>Datadog</em> lideran este segmento.
</p>

<h4>Cuarta Generación (2020s): AIOps y Observabilidad</h4>
<p>
    La actualidad se centra en la <strong>observabilidad</strong> (logs, métricas, traces) y la 
    aplicación de machine learning para detección de anomalías y predicción de fallos.
</p>

<h3>2.2. Análisis de Soluciones Existentes</h3>

<h4>Zabbix</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Característica</th>
            <th class="border border-slate-200 p-3 text-left">Valoración</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Licencia</td>
            <td class="border border-slate-200 p-3">GPL v2 (Open Source)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Arquitectura</td>
            <td class="border border-slate-200 p-3">Cliente-servidor con proxies distribuidos</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Protocolos</td>
            <td class="border border-slate-200 p-3">SNMP, IPMI, JMX, agentes nativos</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Escalabilidad</td>
            <td class="border border-slate-200 p-3">+100.000 dispositivos con arquitectura distribuida</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Curva de aprendizaje</td>
            <td class="border border-slate-200 p-3">Media-Alta</td>
        </tr>
    </tbody>
</table>

<h4>Prometheus + Grafana</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Característica</th>
            <th class="border border-slate-200 p-3 text-left">Valoración</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Licencia</td>
            <td class="border border-slate-200 p-3">Apache 2.0 (Open Source)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Arquitectura</td>
            <td class="border border-slate-200 p-3">Pull-based con exporters</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Fortaleza</td>
            <td class="border border-slate-200 p-3">Nativo para Kubernetes y microservicios</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Query Language</td>
            <td class="border border-slate-200 p-3">PromQL (potente pero complejo)</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Curva de aprendizaje</td>
            <td class="border border-slate-200 p-3">Alta</td>
        </tr>
    </tbody>
</table>

<h4>Soluciones Comerciales (Datadog, New Relic)</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Característica</th>
            <th class="border border-slate-200 p-3 text-left">Valoración</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Licencia</td>
            <td class="border border-slate-200 p-3">SaaS (pago por host/mes)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Implementación</td>
            <td class="border border-slate-200 p-3">Inmediata (cloud-native)</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">AIOps</td>
            <td class="border border-slate-200 p-3">Incluido (machine learning avanzado)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Coste</td>
            <td class="border border-slate-200 p-3">€15-25/host/mes (elevado para 400 equipos)</td>
        </tr>
    </tbody>
</table>

<h3>2.3. Justificación de la Tecnología Seleccionada</h3>
<p>
    Para el IES Serra Perenxisa se ha seleccionado <strong>Zabbix</strong> como solución base por:
</p>
<ul class="space-y-2 my-4">
    <li><span class="text-blue-600 font-bold">✓</span> <strong>Open Source:</strong> Sin costes de licenciamiento.</li>
    <li><span class="text-blue-600 font-bold">✓</span> <strong>Madurez:</strong> Más de 20 años de desarrollo continuo.</li>
    <li><span class="text-blue-600 font-bold">✓</span> <strong>Comunidad:</strong> Amplio soporte y plantillas predefinidas.</li>
    <li><span class="text-blue-600 font-bold">✓</span> <strong>Flexibilidad:</strong> Soporta múltiples protocolos y métodos de recolección.</li>
    <li><span class="text-blue-600 font-bold">✓</span> <strong>Escalabilidad:</strong> Crece con las necesidades del centro.</li>
    <li><span class="text-blue-600 font-bold">✓</span> <strong>Integración:</strong> APIs REST para integración con sistemas externos.</li>
</ul>

<h3>2.4. Estándares y Normativas de Referencia</h3>
<p>
    El diseño del sistema se alinea con los siguientes estándares profesionales:
</p>

<h4>ITIL v4 (Information Technology Infrastructure Library)</h4>
<p>
    El marco de mejores prácticas para gestión de servicios IT define procesos clave que este 
    proyecto implementa:
</p>
<ul class="space-y-2 my-4">
    <li><strong>Monitoring & Event Management:</strong> Detección y clasificación de eventos.</li>
    <li><strong>Incident Management:</strong> Flujo de trabajo para resolución de incidencias.</li>
    <li><strong>Problem Management:</strong> Análisis de causa raíz de incidencias recurrentes.</li>
    <li><strong>Service Asset & Configuration Management:</strong> Gestión del inventario (CMDB).</li>
</ul>

<h4>ISO/IEC 27001 (Seguridad de la Información)</h4>
<p>
    La información recopilada por el sistema de monitorización (configuraciones, vulnerabilidades, 
    patrones de uso) debe protegerse conforme a:
</p>
<ul class="space-y-2 my-4">
    <li><strong>Anexo A.12.4:</strong> Logging y monitorización.</li>
    <li><strong>Anexo A.9.2:</strong> Gestión de privilegios de acceso.</li>
    <li><strong>Anexo A.10.1:</strong> Cifrado de comunicaciones.</li>
</ul>

<h4>RFC 2722 (Network Accounting)</h4>
<p>
    Define buenas prácticas para la recolección de datos de accounting en redes, aplicable a la 
    monitorización de tráfico y uso de ancho de banda.
</p>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📚</span>
        <span>Actividad de Investigación para el Alumnado</span>
    </div>
    <p>
        Como parte de la implementación, deberás investigar y documentar:
    </p>
    <ol class="list-decimal list-inside space-y-2 mt-3">
        <li>Las diferencias entre SNMP v2c y v3, y por qué se recomienda v3.</li>
        <li>El funcionamiento del protocolo IPMI para monitorización de hardware.</li>
        <li>Cómo implementar netflow/sflow para análisis de tráfico de red.</li>
    </ol>
</div>
`;
