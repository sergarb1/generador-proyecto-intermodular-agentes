window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["resumen"] = `

<div class="callout callout-info">
    <div class="callout-title"><span>📄</span><span>Resumen Ejecutivo</span></div>
    <p class="text-sm">Este proyecto presenta una solución integral de infraestructura híbrida cloud-on-premise para MediConnect Solutions, una empresa del sector sanitario que requiere modernizar sus sistemas manteniendo la soberanía de datos sensibles.</p>
</div>

<h3>📋 Descripción General</h3>

<p>El proyecto <strong>CloudNet Automation</strong> nace de la necesidad de MediConnect Solutions de migrar parte de su infraestructura tecnológica a la nube mientras mantiene el control total sobre los datos médicos sensibles de sus pacientes. La solución propuesta combina lo mejor de ambos mundos: la escalabilidad y flexibilidad del cloud público con la seguridad y control del on-premise.</p>

<p>Se ha diseñado una arquitectura híbrida que utiliza <strong>AWS</strong> para servicios públicos y escalables, mientras que los datos críticos se mantienen en servidores locales virtualizados con <strong>Proxmox VE</strong>. La automatización mediante scripts en <strong>Bash</strong> garantiza la consistencia entre ambos entornos y reduce la carga operativa del equipo de IT.</p>

<h3>🎯 Objetivos Principales</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
    <div class="p-5 bg-blue-50 border border-blue-200 rounded-2xl shadow-sm">
        <span class="text-2xl mb-2 block">☁️</span>
        <h4 class="font-bold text-blue-800 mb-2">Infraestructura Híbrida</h4>
        <p class="text-sm text-slate-600 m-0">Implementar una arquitectura que combine AWS y servidores locales con sincronización automática.</p>
    </div>
    <div class="p-5 bg-green-50 border border-green-200 rounded-2xl shadow-sm">
        <span class="text-2xl mb-2 block">🤖</span>
        <h4 class="font-bold text-green-800 mb-2">Automatización Total</h4>
        <p class="text-sm text-slate-600 m-0">Desarrollar scripts para despliegue, monitorización y backup sin intervención manual.</p>
    </div>
    <div class="p-5 bg-purple-50 border border-purple-200 rounded-2xl shadow-sm">
        <span class="text-2xl mb-2 block">🔒</span>
        <h4 class="font-bold text-purple-800 mb-2">Seguridad RGPD</h4>
        <p class="text-sm text-slate-600 m-0">Garantizar el cumplimiento normativo en el tratamiento de datos sanitarios.</p>
    </div>
    <div class="p-5 bg-orange-50 border border-orange-200 rounded-2xl shadow-sm">
        <span class="text-2xl mb-2 block">📊</span>
        <h4 class="font-bold text-orange-800 mb-2">Monitorización 24/7</h4>
        <p class="text-sm text-slate-600 m-0">Implementar sistema de alertas y dashboards para el equipo de operaciones.</p>
    </div>
</div>

<h3>🔧 Tecnologías Clave</h3>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Categoría</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Tecnología</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Uso en el Proyecto</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Cloud Público</td>
            <td class="border border-slate-300 px-4 py-3">AWS (EC2, S3, RDS)</td>
            <td class="border border-slate-300 px-4 py-3">Servicios web y almacenamiento no crítico</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Virtualización</td>
            <td class="border border-slate-300 px-4 py-3">Proxmox VE</td>
            <td class="border border-slate-300 px-4 py-3">Servidores locales y contenedores LXC</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Automatización</td>
            <td class="border border-slate-300 px-4 py-3">Bash, AWS CLI</td>
            <td class="border border-slate-300 px-4 py-3">Scripts de sincronización y backup</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Redes</td>
            <td class="border border-slate-300 px-4 py-3">VPN Site-to-Site</td>
            <td class="border border-slate-300 px-4 py-3">Conexión segura cloud-on-premise</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Monitorización</td>
            <td class="border border-slate-300 px-4 py-3">Prometheus + Grafana</td>
            <td class="border border-slate-300 px-4 py-3">Métricas y alertas del sistema</td>
        </tr>
    </tbody>
</table>

<h3>📈 Resultados Esperados</h3>

<ul class="space-y-3 my-6">
    <li class="flex items-start gap-3">
        <span class="text-green-500 text-xl mt-1">✓</span>
        <span><strong>Reducción del 40%</strong> en costes operativos de infraestructura</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 text-xl mt-1">✓</span>
        <span><strong>99.9% de disponibilidad</strong> garantizada mediante arquitecturas redundantes</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 text-xl mt-1">✓</span>
        <span><strong>Cumplimiento RGPD</strong> auditado para datos sanitarios</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 text-xl mt-1">✓</span>
        <span><strong>Automatización del 80%</strong> de tareas rutinarias de administración</span>
    </li>
</ul>

<div class="callout callout-warning">
    <div class="callout-title"><span>⚠️</span><span>Nota Importante</span></div>
    <p class="text-sm m-0">Este documento es una <strong>guía docente</strong> que orienta al alumnado sobre cómo estructurar y desarrollar cada sección del proyecto. No proporciona soluciones completas, sino que indica los caminos de investigación y las estructuras recomendadas.</p>
</div>

`;
