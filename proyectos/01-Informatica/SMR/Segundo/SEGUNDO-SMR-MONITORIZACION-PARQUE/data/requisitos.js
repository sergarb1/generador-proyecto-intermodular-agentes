window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.requisitos = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📋</span>
        <span>Análisis de Requisitos del Sistema</span>
    </div>
    <p>
        Este documento especifica los requisitos funcionales, no funcionales y técnicos que debe 
        cumplir el sistema de monitorización para satisfacer las necesidades del IES Serra Perenxisa.
    </p>
</div>

<h3>4.1. Requisitos Funcionales</h3>
<p>
    Los requisitos funcionales describen las capacidades que el sistema debe proporcionar a sus usuarios.
</p>

<h4>RF-01: Monitorización de Estado de Equipos</h4>
<table class="w-full border-collapse my-6">
    <tr class="bg-slate-50">
        <th class="border border-slate-200 p-3 text-left w-40">Descripción</th>
        <td class="border border-slate-200 p-3">El sistema debe monitorizar el estado de conectividad de todos los equipos del parque informático mediante ICMP ping cada 60 segundos.</td>
    </tr>
    <tr>
        <th class="border border-slate-200 p-3 text-left">Prioridad</th>
        <td class="border border-slate-200 p-3"><span class="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-bold">CRÍTICA</span></td>
    </tr>
    <tr class="bg-slate-50">
        <th class="border border-slate-200 p-3 text-left">Criterio Aceptación</th>
        <td class="border border-slate-200 p-3">El 99% de los equipos deben ser monitorizados con una latencia máxima de detección de 3 minutos.</td>
    </tr>
</table>

<h4>RF-02: Monitorización de Prestaciones</h4>
<table class="w-full border-collapse my-6">
    <tr class="bg-slate-50">
        <th class="border border-slate-200 p-3 text-left w-40">Descripción</th>
        <td class="border border-slate-200 p-3">El sistema debe recopilar métricas de CPU, memoria RAM, uso de disco y temperatura cada 5 minutos para cada equipo con agente instalado.</td>
    </tr>
    <tr>
        <th class="border border-slate-200 p-3 text-left">Prioridad</th>
        <td class="border border-slate-200 p-3"><span class="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-bold">CRÍTICA</span></td>
    </tr>
    <tr class="bg-slate-50">
        <th class="border border-slate-200 p-3 text-left">Criterio Aceptación</th>
        <td class="border border-slate-200 p-3">Las métricas deben estar disponibles con una precisión del 95% y resolución de 5 minutos.</td>
    </tr>
</table>

<h4>RF-03: Sistema de Alertas</h4>
<table class="w-full border-collapse my-6">
    <tr class="bg-slate-50">
        <th class="border border-slate-200 p-3 text-left w-40">Descripción</th>
        <td class="border border-slate-200 p-3">El sistema debe generar alertas automáticas cuando se superen umbrales configurables (CPU >90%, RAM >95%, Disco >90%, Equipo offline).</td>
    </tr>
    <tr>
        <th class="border border-slate-200 p-3 text-left">Prioridad</th>
        <td class="border border-slate-200 p-3"><span class="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-bold">CRÍTICA</span></td>
    </tr>
    <tr class="bg-slate-50">
        <th class="border border-slate-200 p-3 text-left">Criterio Aceptación</th>
        <td class="border border-slate-200 p-3">Las alertas críticas deben notificarse en menos de 2 minutos desde la detección del evento.</td>
    </tr>
</table>

<h4>RF-04: Notificaciones Multicanal</h4>
<table class="w-full border-collapse my-6">
    <tr class="bg-slate-50">
        <th class="border border-slate-200 p-3 text-left w-40">Descripción</th>
        <td class="border border-slate-200 p-3">El sistema debe enviar notificaciones vía email y Telegram para alertas críticas, y solo vía email para alertas informativas.</td>
    </tr>
    <tr>
        <th class="border border-slate-200 p-3 text-left">Prioridad</th>
        <td class="border border-slate-200 p-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-bold">ALTA</span></td>
    </tr>
    <tr class="bg-slate-50">
        <th class="border border-slate-200 p-3 text-left">Criterio Aceptación</th>
        <td class="border border-slate-200 p-3">El 100% de las alertas críticas deben generar notificaciones en ambos canales.</td>
    </tr>
</table>

<h4>RF-05: Inventario Automático</h4>
<table class="w-full border-collapse my-6">
    <tr class="bg-slate-50">
        <th class="border border-slate-200 p-3 text-left w-40">Descripción</th>
        <td class="border border-slate-200 p-3">El sistema debe recopilar automáticamente información de hardware (modelo CPU, RAM, discos, MAC) y software (SO, versión, patches) cada 24 horas.</td>
    </tr>
    <tr>
        <th class="border border-slate-200 p-3 text-left">Prioridad</th>
        <td class="border border-slate-200 p-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-bold">ALTA</span></td>
    </tr>
    <tr class="bg-slate-50">
        <th class="border border-slate-200 p-3 text-left">Criterio Aceptación</th>
        <td class="border border-slate-200 p-3">El inventario debe actualizarse diariamente con una precisión superior al 98%.</td>
    </tr>
</table>

<h4>RF-06: Dashboards Visuales</h4>
<table class="w-full border-collapse my-6">
    <tr class="bg-slate-50">
        <th class="border border-slate-200 p-3 text-left w-40">Descripción</th>
        <td class="border border-slate-200 p-3">El sistema debe proporcionar dashboards configurables con vistas globales del estado del parque, por ubicaciones y por tipos de equipo.</td>
    </tr>
    <tr>
        <th class="border border-slate-200 p-3 text-left">Prioridad</th>
        <td class="border border-slate-200 p-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-bold">ALTA</span></td>
    </tr>
    <tr class="bg-slate-50">
        <th class="border border-slate-200 p-3 text-left">Criterio Aceptación</th>
        <td class="border border-slate-200 p-3">Los dashboards deben cargarse en menos de 3 segundos y actualizarse automáticamente cada 30 segundos.</td>
    </tr>
</table>

<h4>RF-07: Reportes Históricos</h4>
<table class="w-full border-collapse my-6">
    <tr class="bg-slate-50">
        <th class="border border-slate-200 p-3 text-left w-40">Descripción</th>
        <td class="border border-slate-200 p-3">El sistema debe generar reportes semanales y mensuales de disponibilidad, incidencias y tendencias de uso de recursos.</td>
    </tr>
    <tr>
        <th class="border border-slate-200 p-3 text-left">Prioridad</th>
        <td class="border border-slate-200 p-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">MEDIA</span></td>
    </tr>
    <tr class="bg-slate-50">
        <th class="border border-slate-200 p-3 text-left">Criterio Aceptación</th>
        <td class="border border-slate-200 p-3">Los reportes deben poder exportarse en formato PDF y programarse para envío automático por email.</td>
    </tr>
</table>

<h4>RF-08: Gestión de Usuarios y Permisos</h4>
<table class="w-full border-collapse my-6">
    <tr class="bg-slate-50">
        <th class="border border-slate-200 p-3 text-left w-40">Descripción</th>
        <td class="border border-slate-200 p-3">El sistema debe soportar roles diferenciados: Administrador (acceso total), Técnico (lectura/escritura), Profesor (solo lectura de sus aulas).</td>
    </tr>
    <tr>
        <th class="border border-slate-200 p-3 text-left">Prioridad</th>
        <td class="border border-slate-200 p-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-bold">ALTA</span></td>
    </tr>
    <tr class="bg-slate-50">
        <th class="border border-slate-200 p-3 text-left">Criterio Aceptación</th>
        <td class="border border-slate-200 p-3">Los permisos deben aplicarse correctamente a todas las vistas y acciones del sistema.</td>
    </tr>
</table>

<h3>4.2. Requisitos No Funcionales</h3>
<p>
    Los requisitos no funcionales especifican criterios de calidad y restricciones del sistema.
</p>

<h4>RNF-01: Disponibilidad</h4>
<p class="my-4">
    El sistema de monitorización debe estar disponible el <strong>99,5% del tiempo lectivo</strong> 
    (lunes a viernes, 8:00-20:00). Esto permite aproximadamente 3,65 horas de indisponibilidad al mes 
    para mantenimiento programado.
</p>

<h4>RNF-02: Rendimiento</h4>
<ul class="space-y-2 my-4">
    <li><strong>Tiempo de respuesta:</strong> Los dashboards deben cargar en menos de 3 segundos.</li>
    <li><strong>Latencia de detección:</strong> Las incidencias críticas deben detectarse en menos de 3 minutos.</li>
    <li><strong>Throughput:</strong> El sistema debe procesar 10.000 métricas por minuto sin degradación.</li>
</ul>

<h4>RNF-03: Escalabilidad</h4>
<p class="my-4">
    La arquitectura debe permitir escalar horizontalmente para soportar hasta <strong>1.000 equipos</strong> 
    mediante la adición de Zabbix Proxies sin cambios mayores en la configuración.
</p>

<h4>RNF-04: Seguridad</h4>
<ul class="space-y-2 my-4">
    <li><strong>Autenticación:</strong> Soporte para LDAP del centro (Active Directory).</li>
    <li><strong>Cifrado:</strong> Todas las comunicaciones deben usar TLS 1.3.</li>
    <li><strong>Auditoría:</strong> Registro de todas las acciones de administración (quién, qué, cuándo).</li>
    <li><strong>Hardening:</strong> El servidor debe cumplir con la línea base de seguridad CIS.</li>
</ul>

<h4>RNF-05: Mantenibilidad</h4>
<ul class="space-y-2 my-4">
    <li><strong>Documentación:</strong> Todo el código y configuración debe estar documentado.</li>
    <li><strong>Versionado:</strong> La configuración debe almacenarse en Git.</li>
    <li><strong>Backup:</strong> La base de datos debe respaldarse cada 6 horas con RPO < 1 hora.</li>
</ul>

<h4>RNF-06: Usabilidad</h4>
<ul class="space-y-2 my-4">
    <li><strong>Interfaz:</strong> Dashboard intuitivo que requiera menos de 1 hora de formación.</li>
    <li><strong>Accesibilidad:</strong> Cumplimiento WCAG 2.1 nivel AA para el frontend.</li>
    <li><strong>Responsive:</strong> Visualización correcta en tablets y móviles para alertas.</li>
</ul>

<h3>4.3. Requisitos Técnicos</h3>

<h4>RT-01: Sistema Operativo del Servidor</h4>
<p class="my-4">
    El servidor Zabbix debe ejecutarse sobre <strong>Ubuntu Server 22.04 LTS</strong> o 
    <strong>Debian 12</strong>, con soporte hasta 2027-2028.
</p>

<h4>RT-02: Base de Datos</h4>
<p class="my-4">
    Se requiere <strong>PostgreSQL 14 o superior</strong> con configuración optimizada para 
    cargas de trabajo de series temporales (timescaledb opcional).
</p>

<h4>RT-03: Agentes</h4>
<p class="my-4">
    Los agentes Zabbix deben ser compatibles con:
</p>
<ul class="space-y-2 my-4">
    <li><strong>Windows:</strong> Windows 10/11, Windows Server 2016-2022</li>
    <li><strong>Linux:</strong> Ubuntu 20.04+, Debian 11+, CentOS/RHEL 8+</li>
</ul>

<h4>RT-04: Red</h4>
<ul class="space-y-2 my-4">
    <li><strong>Puertos:</strong> 10050 (agente), 10051 (server), 443 (frontend web)</li>
    <li><strong>Protocolos:</strong> TCP/IP, SNMP v3, IPMI (opcional)</li>
    <li><strong>VLAN:</strong> Los equipos de monitorización deben estar en VLAN separada</li>
</ul>

<h3>4.4. Matriz de Trazabilidad</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Requisito</th>
            <th class="border border-slate-200 p-3 text-left">Módulo SMR Relacionado</th>
            <th class="border border-slate-200 p-3 text-left">Criterio Evaluación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">RF-01, RF-02</td>
            <td class="border border-slate-200 p-3">Sistemas Operativos en Red</td>
            <td class="border border-slate-200 p-3">Configuración de servicios de monitorización</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">RF-03, RF-04</td>
            <td class="border border-slate-200 p-3">Seguridad Informática</td>
            <td class="border border-slate-200 p-3">Implementación de políticas de alertas</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">RF-05</td>
            <td class="border border-slate-200 p-3">Gestión de Bases de Datos</td>
            <td class="border border-slate-200 p-3">Consultas SQL para inventario</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">RF-06, RF-07</td>
            <td class="border border-slate-200 p-3">Aplicaciones Web</td>
            <td class="border border-slate-200 p-3">Personalización de interfaz web</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">RNF-04</td>
            <td class="border border-slate-200 p-3">Seguridad y Alta Disponibilidad</td>
            <td class="border border-slate-200 p-3">Hardening y cifrado de comunicaciones</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span>
        <span>Actividad para el Alumnado</span>
    </div>
    <p>
        Deberás completar la siguiente tabla con al menos 3 requisitos adicionales que consideres 
        relevantes para tu implementación específica:
    </p>
    <table class="w-full border-collapse my-6">
        <thead>
            <tr class="bg-slate-50">
                <th class="border border-slate-200 p-3 text-left">Código</th>
                <th class="border border-slate-200 p-3 text-left">Descripción</th>
                <th class="border border-slate-200 p-3 text-left">Prioridad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-200 p-3">RF-09:</td>
                <td class="border border-slate-200 p-3"></td>
                <td class="border border-slate-200 p-3"></td>
            </tr>
            <tr class="bg-slate-50">
                <td class="border border-slate-200 p-3">RF-10:</td>
                <td class="border border-slate-200 p-3"></td>
                <td class="border border-slate-200 p-3"></td>
            </tr>
            <tr>
                <td class="border border-slate-200 p-3">RNF-07:</td>
                <td class="border border-slate-200 p-3"></td>
                <td class="border border-slate-200 p-3"></td>
            </tr>
        </tbody>
    </table>
</div>
`;
