window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.resumen = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📄</span>
        <span>Resumen Ejecutivo</span>
    </div>
    <p>
        Este proyecto presenta el diseño e implementación de un <strong>sistema integral de monitorización y gestión 
        de parque microinformático</strong> para el IES Serra Perenxisa. La solución aborda la necesidad crítica de 
        supervisar en tiempo real el estado de los equipos, detectar incidencias de forma proactiva y mantener un 
        inventario actualizado de todos los recursos tecnológicos del centro educativo.
    </p>
</div>

<h3>Contexto y Problemática</h3>
<p>
    El IES Serra Perenxisa cuenta con más de 400 equipos distribuidos en aulas, laboratorios y despachos. 
    Actualmente, la gestión de estas instalaciones se realiza de forma reactiva: el profesorado reporta 
    incidencias cuando estas ya han afectado al desarrollo de las clases. Esta aproximación genera:
</p>
<ul class="space-y-2 my-4">
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Tiempos de respuesta elevados:</strong> Las incidencias permanecen sin detectar hasta que un usuario las reporta.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Falta de trazabilidad:</strong> No existe histórico de fallos por equipo para identificar patrones.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Inventario desactualizado:</strong> La información de hardware y software se recopila manualmente.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Intervenciones costosas:</strong> Los técnicos se desplazan sin información previa del problema.</span>
    </li>
</ul>

<h3>Solución Propuesta</h3>
<p>
    Se ha diseñado una arquitectura de monitorización basada en el stack <strong>Zabbix + Agentes ligeros</strong> 
    que permite:
</p>
<ul class="space-y-2 my-4">
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Monitorización en tiempo real:</strong> CPU, memoria, disco, red y servicios críticos.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Alertas proactivas:</strong> Notificaciones automáticas vía email/Telegram ante umbrales críticos.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Inventario automatizado:</strong> Recolección periódica de información de hardware y software.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Dashboards visuales:</strong> Paneles de control para visualizar el estado global del parque.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Reportes históricos:</strong> Análisis de tendencias y planificación de renovaciones.</span>
    </li>
</ul>

<h3>Metodología</h3>
<p>
    El proyecto sigue una metodología basada en estándares profesionales:
</p>
<ul class="space-y-2 my-4">
    <li><strong>ITIL v4:</strong> Para la gestión de servicios y incidencias.</li>
    <li><strong>ISO/IEC 27001:</strong> Para la seguridad de la información recopilada.</li>
    <li><strong>RFC 2722:</strong> Para las políticas de accounting y monitorización de red.</li>
</ul>

<h3>Resultados Esperados</h3>
<p>
    La implementación de este sistema permitirá reducir el tiempo medio de detección de incidencias 
    en un <strong>85%</strong>, disminuir las visitas técnicas innecesarias en un <strong>60%</strong> y 
    mantener un inventario actualizado automáticamente con una precisión superior al <strong>98%</strong>.
</p>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>📝 Instrucciones para el Alumnado</span>
    </div>
    <p>
        <strong>Este proyecto es PEDAGÓGICO y debe ser completado por ti.</strong> Las secciones de 
        Introducción, Estado del Arte, Viabilidad y Diseño están desarrolladas como EJEMPLO y GUÍA. 
        Deberás completar personalmente:
    </p>
    <ul class="list-disc list-inside space-y-2 mt-3">
        <li><strong>Sección 6 (Implementación):</strong> Configurar realmente Zabbix, PostgreSQL y los agentes.</li>
        <li><strong>Sección 7 (Administración):</strong> Documentar los procedimientos reales de tu despliegue.</li>
        <li><strong>Sección 8 (Herramientas):</strong> Adaptar los scripts a tu entorno específico.</li>
        <li><strong>Sección 9 (Conclusiones):</strong> Redactar tu valoración personal del proyecto.</li>
        <li><strong>Bibliografía:</strong> Añadir fuentes que hayas consultado realmente.</li>
        <li><strong>Anexos:</strong> Incluir capturas de pantalla de TU implementación real.</li>
    </ul>
    <p class="mt-4">
        Los datos del IES Serra Perenxisa son REALES, pero la implementación práctica DEBES HACERLA TÚ 
        en tu propio entorno de pruebas (máquinas virtuales, laboratorio del centro, etc.).
    </p>
</div>

<h3>📋 Checklist de Completado del Proyecto</h3>
<div class="bg-slate-50 rounded-lg p-6 my-6 border border-slate-200">
    <table class="w-full">
        <thead>
            <tr class="bg-slate-100">
                <th class="border border-slate-300 p-2 text-left">Sección</th>
                <th class="border border-slate-300 p-2 text-left">Estado</th>
                <th class="border border-slate-300 p-2 text-left">Completado por</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 p-2">1. Introducción</td>
                <td class="border border-slate-300 p-2"><span class="text-green-600">✓ Ejemplo completo</span></td>
                <td class="border border-slate-300 p-2">Profesorado</td>
            </tr>
            <tr class="bg-slate-50">
                <td class="border border-slate-300 p-2">2. Estado del Arte</td>
                <td class="border border-slate-300 p-2"><span class="text-green-600">✓ Ejemplo completo</span></td>
                <td class="border border-slate-300 p-2">Profesorado</td>
            </tr>
            <tr>
                <td class="border border-slate-300 p-2">3. Viabilidad</td>
                <td class="border border-slate-300 p-2"><span class="text-green-600">✓ Ejemplo completo</span></td>
                <td class="border border-slate-300 p-2">Profesorado</td>
            </tr>
            <tr class="bg-slate-50">
                <td class="border border-slate-300 p-2">4. Requisitos</td>
                <td class="border border-slate-300 p-2"><span class="text-green-600">✓ Ejemplo completo</span></td>
                <td class="border border-slate-300 p-2">Profesorado</td>
            </tr>
            <tr>
                <td class="border border-slate-300 p-2">5. Diseño</td>
                <td class="border border-slate-300 p-2"><span class="text-green-600">✓ Ejemplo completo</span></td>
                <td class="border border-slate-300 p-2">Profesorado</td>
            </tr>
            <tr class="bg-slate-50">
                <td class="border border-slate-300 p-2">6. Implementación</td>
                <td class="border border-slate-300 p-2"><span class="text-yellow-600">⚠ GUÍA - Completar</span></td>
                <td class="border border-slate-300 p-2"><strong>ALUMNADO</strong></td>
            </tr>
            <tr>
                <td class="border border-slate-300 p-2">7. Administración</td>
                <td class="border border-slate-300 p-2"><span class="text-yellow-600">⚠ GUÍA - Completar</span></td>
                <td class="border border-slate-300 p-2"><strong>ALUMNADO</strong></td>
            </tr>
            <tr class="bg-slate-50">
                <td class="border border-slate-300 p-2">8. Herramientas</td>
                <td class="border border-slate-300 p-2"><span class="text-yellow-600">⚠ GUÍA - Adaptar</span></td>
                <td class="border border-slate-300 p-2"><strong>ALUMNADO</strong></td>
            </tr>
            <tr>
                <td class="border border-slate-300 p-2">9. Conclusiones</td>
                <td class="border border-slate-300 p-2"><span class="text-yellow-600">⚠ GUÍA - Redactar</span></td>
                <td class="border border-slate-300 p-2"><strong>ALUMNADO</strong></td>
            </tr>
        </tbody>
    </table>
</div>
`;
