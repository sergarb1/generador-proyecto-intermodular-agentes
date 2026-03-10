window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.introduccion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>👋</span>
        <span>Introducción al Proyecto</span>
    </div>
    <p>
        La transformación digital de los centros educativos ha generado una dependencia crítica de las 
        infraestructuras tecnológicas. Un fallo en un equipo puede interrumpir clases completas, afectar 
        a procesos de evaluación o impedir el acceso a recursos educativos esenciales.
    </p>
</div>

<h3>1.1. Motivación del Proyecto</h3>
<p>
    Durante las prácticas en el departamento de informática del IES Serra Perenxisa, se identificó una 
    carencia significativa: <strong>no existía ningún sistema de monitorización proactiva</strong> del 
    parque informático. El equipo de mantenimiento solo actuaba cuando el profesorado reportaba problemas, 
    lo que generaba:
</p>
<ul class="space-y-2 my-4">
    <li><strong>Pérdida de tiempo lectivo:</strong> Clases interrumpidas esperando soluciones.</li>
    <li><strong>Frustración del profesorado:</strong> Incertidumbre sobre si los equipos funcionarán.</li>
    <li><strong>Costes elevados:</strong> Visitas técnicas sin diagnóstico previo.</li>
    <li><strong>Obsolescencia no detectada:</strong> Equipos que deberían renovarse pasan desapercibidos.</li>
</ul>

<h3>1.2. Objetivos del Proyecto</h3>

<h4>Objetivo General</h4>
<p>
    Diseñar e implementar un sistema integral de monitorización y gestión del parque microinformático 
    del IES Serra Perenxisa que permita la detección proactiva de incidencias y el mantenimiento de 
    un inventario actualizado automáticamente.
</p>

<h4>Objetivos Específicos</h4>
<ul class="space-y-2 my-4">
    <li><span class="text-blue-600 font-bold">OE-01:</span> Monitorizar en tiempo real el estado de hardware (CPU, RAM, disco, temperatura).</li>
    <li><span class="text-blue-600 font-bold">OE-02:</span> Supervisar la conectividad de red y servicios críticos de cada equipo.</li>
    <li><span class="text-blue-600 font-bold">OE-03:</span> Implementar un sistema de alertas automáticas ante umbrales críticos.</li>
    <li><span class="text-blue-600 font-bold">OE-04:</span> Recopilar automáticamente inventario de hardware y software instalado.</li>
    <li><span class="text-blue-600 font-bold">OE-05:</span> Generar dashboards visuales para el equipo de mantenimiento.</li>
    <li><span class="text-blue-600 font-bold">OE-06:</span> Producir reportes históricos para planificación de renovaciones.</li>
    <li><span class="text-blue-600 font-bold">OE-07:</span> Integrar notificaciones vía email y Telegram para incidencias críticas.</li>
</ul>

<h3>1.3. Alcance del Proyecto</h3>
<p>
    El proyecto abarca la monitorización de aproximadamente <strong>400 equipos</strong> distribuidos en:
</p>
<ul class="space-y-2 my-4">
    <li><strong>Aulas de informática:</strong> 8 aulas con 25 equipos cada una (200 equipos).</li>
    <li><strong>Laboratorios especializados:</strong> 3 laboratorios con 30 equipos (90 equipos).</li>
    <li><strong>Equipos de profesorado:</strong> Ordenadores en despachos y aulas generales (80 equipos).</li>
    <li><strong>Servidores del centro:</strong> 5 servidores físicos y 15 máquinas virtuales.</li>
    <li><strong>Equipos de administración:</strong> 25 equipos en secretaría y dirección.</li>
</ul>

<div class="relative my-8">
    <img src="./images/monitoring.jpg" alt="Centro de monitorización de sistemas" class="w-full rounded-2xl shadow-xl">
    <p class="text-sm text-slate-500 mt-2 text-center">Figura 1: Ejemplo de dashboard de monitorización de sistemas.</p>
</div>

<h3>1.4. Estructura del Documento</h3>
<p>
    Este documento se organiza en las siguientes secciones:
</p>
<ul class="space-y-2 my-4">
    <li><strong>Sección 2 - Estado del Arte:</strong> Análisis de soluciones existentes y tecnologías de monitorización.</li>
    <li><strong>Sección 3 - Estudio de Viabilidad:</strong> Evaluación técnica, económica y operativa.</li>
    <li><strong>Sección 4 - Análisis de Requisitos:</strong> Requisitos funcionales, no funcionales y técnicos.</li>
    <li><strong>Sección 5 - Diseño:</strong> Arquitectura, componentes y diagramas del sistema.</li>
    <li><strong>Sección 6 - Implementación:</strong> Guías paso a paso para el despliegue efectivo.</li>
    <li><strong>Sección 7 - Administración:</strong> Procedimientos de mantenimiento y operación.</li>
    <li><strong>Sección 8 - Herramientas de Apoyo:</strong> Documentación complementaria y recursos.</li>
    <li><strong>Sección 9 - Conclusiones:</strong> Valoración del proyecto y líneas futuras.</li>
</ul>

<h3>1.5. Relación con el Currículo de SMR</h3>
<p>
    Este proyecto intermodular integra contenidos de múltiples módulos del ciclo:
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Módulo</th>
            <th class="border border-slate-200 p-3 text-left">Contenidos Aplicados</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Gestión de Bases de Datos</td>
            <td class="border border-slate-200 p-3">Configuración de PostgreSQL para Zabbix</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Sistemas Operativos en Red</td>
            <td class="border border-slate-200 p-3">Despliegue de servidores Linux/Windows</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Seguridad Informática</td>
            <td class="border border-slate-200 p-3">Hardening, cifrado, gestión de accesos</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Aplicaciones Web</td>
            <td class="border border-slate-200 p-3">Frontend del dashboard de Zabbix</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Redes Locales</td>
            <td class="border border-slate-200 p-3">VLANs, SNMP, configuración de red</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Seguridad y Alta Disponibilidad</td>
            <td class="border border-slate-200 p-3">Backups, clustering, redundancia</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title">
        <span>🎯</span>
        <span>Competencias Profesionales</span>
    </div>
    <p>
        Este proyecto desarrolla competencias directamente transferibles al mercado laboral: 
        administración de sistemas de monitorización enterprise, gestión de incidencias ITIL, 
        y operación de infraestructuras críticas.
    </p>
</div>
`;
