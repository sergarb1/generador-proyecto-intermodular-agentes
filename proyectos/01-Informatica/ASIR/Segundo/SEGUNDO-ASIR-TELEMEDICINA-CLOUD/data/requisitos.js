window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.requisitos = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📋</span> Objetivo de esta Sección
    </div>
    <p>En esta sección definirás <strong>qué debe hacer el sistema</strong>, no cómo lo hace. Los requisitos son la base de todo el proyecto: de ellos dependerá el diseño, la implementación y las pruebas.</p>
</div>

<h3>4.1. Guía para el Análisis Funcional</h3>
<p>Los requisitos funcionales describen las capacidades que debe ofrecer el sistema. Para redactarlos correctamente:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span> Consejo Pedagógico
    </div>
    <p>Usa <strong>verbos de acción</strong> en presente: "El sistema debe permitir...", "El usuario podrá...", "La aplicación mostrará..."</p>
</div>

<h4>Investiga y Define tus Requisitos</h4>
<p>Para tu proyecto de infraestructura, identifica al menos <strong>4 categorías de requisitos funcionales</strong>. Ejemplos de categorías:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Categoría</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Preguntas Guía</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Ejemplo de Requisito</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Gestión de Usuarios</td>
            <td class="p-4 border border-slate-200 text-sm">¿Quién usará el sistema? ¿Qué roles existen?</td>
            <td class="p-4 border border-slate-200 text-sm"><em>"El sistema debe permitir autenticación con 2FA para personal médico"</em></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Videoconferencia</td>
            <td class="p-4 border border-slate-200 text-sm">¿Qué funcionalidades necesita una videollamada médica?</td>
            <td class="p-4 border border-slate-200 text-sm"><em>"El sistema debe cifrar el vídeo con TLS 1.3 en tránsito"</em></td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Historias Clínicas</td>
            <td class="p-4 border border-slate-200 text-sm">¿Qué datos se almacenan? ¿Cómo se accede?</td>
            <td class="p-4 border border-slate-200 text-sm"><em>"El médico podrá acceder al historial en menos de 3 segundos"</em></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Backups y Recuperación</td>
            <td class="p-4 border border-slate-200 text-sm">¿Qué se copia? ¿Cuándo? ¿Cómo se restaura?</td>
            <td class="p-4 border border-slate-200 text-sm"><em>"El sistema realizará backups incrementales cada 24 horas"</em></td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Monitorización</td>
            <td class="p-4 border border-slate-200 text-sm">¿Qué métricas se vigilan? ¿Cuándo se alerta?</td>
            <td class="p-4 border border-slate-200 text-sm"><em>"El sistema enviará alertas si el CPU supera el 85% por 5 minutos"</em></td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📋</span> Tarea para el Alumnado
    </div>
    <p>Define entre <strong>12 y 20 requisitos funcionales</strong> para tu proyecto, organizados en categorías. Usa la convención <strong>RF-XXX</strong> (ej: RF-001, RF-002) para facilitar la trazabilidad.</p>
</div>

<h3>4.2. Guía para Requisitos No Funcionales</h3>
<p>Los requisitos no funcionales definen <strong>cómo de bien</strong> debe funcionar el sistema. Son criterios de calidad:</p>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2 flex items-center gap-2">
            <span>⚡</span> Rendimiento
        </h4>
        <p class="text-sm text-slate-600 mb-3">Tiempos de respuesta y throughput del sistema:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>Latencia de videollamada &lt; 150ms</li>
            <li>Carga de historial &lt; 3 segundos</li>
            <li>Throughput de red mínimo 100 Mbps</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2 flex items-center gap-2">
            <span>🔒</span> Seguridad
        </h4>
        <p class="text-sm text-slate-600 mb-3">Protección de datos y acceso:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>Cifrado AES-256 en reposo</li>
            <li>TLS 1.3 en tránsito</li>
            <li>2FA para todo el personal</li>
        </ul>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-2 flex items-center gap-2">
            <span>📈</span> Disponibilidad
        </h4>
        <p class="text-sm text-slate-600 mb-3">Tiempo de actividad del sistema:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>99.9% uptime anual</li>
            <li>RTO &lt; 4 horas (tiempo recuperación)</li>
            <li>RPO &lt; 24 horas (pérdida datos)</li>
        </ul>
    </div>
    <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
        <h4 class="font-bold text-orange-800 mb-2 flex items-center gap-2">
            <span>🔄</span> Escalabilidad
        </h4>
        <p class="text-sm text-slate-600 mb-3">Capacidad de crecimiento:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>Soportar 5x tráfico en picos</li>
            <li>Auto-scaling en menos de 5 minutos</li>
            <li>Hasta 500 videollamadas simultáneas</li>
        </ul>
    </div>
    <div class="p-6 bg-red-50 rounded-2xl border border-red-100">
        <h4 class="font-bold text-red-800 mb-2 flex items-center gap-2">
            <span>📜</span> Cumplimiento Legal
        </h4>
        <p class="text-sm text-slate-600 mb-3">Normativas aplicables:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>RGPD (datos personales)</li>
            <li>Ley 41/2002 (historia clínica)</li>
            <li>Esquema Nacional de Seguridad</li>
        </ul>
    </div>
    <div class="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
        <h4 class="font-bold text-indigo-800 mb-2 flex items-center gap-2">
            <span>💾</span> Capacidad
        </h4>
        <p class="text-sm text-slate-600 mb-3">Almacenamiento y crecimiento:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>50 TB iniciales para imágenes médicas</li>
            <li>Crecimiento 10% mensual estimado</li>
            <li>Retención mínima 20 años</li>
        </ul>
    </div>
</div>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📚</span> Recursos para Investigar
    </div>
    <p>Consulta estas fuentes para definir requisitos no funcionales realistas:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>RGPD:</strong> https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673</li>
        <li><strong>ISO 27001:</strong> Sistema de Gestión de Seguridad de la Información</li>
        <li><strong>Azure SLA:</strong> https://azure.microsoft.com/es-es/support/legal/sla/</li>
        <li><strong>SEPD:</strong> https://www.aepd.es/es (guías para sector salud)</li>
    </ul>
</div>

<h3>4.3. Matriz de Trazabilidad</h3>
<p>La matriz de trazabilidad relaciona cada requisito con su implementación y verificación:</p>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Actividad Práctica
    </div>
    <p>Crea una tabla que relacione:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>ID del requisito (ej: RF-001)</li>
        <li>Componente del sistema que lo implementa (ej: pfSense, Proxmox, Azure VM)</li>
        <li>Prueba que lo verifica (ej: test de carga, auditoría de seguridad)</li>
        <li>Documentación asociada (ej: manual de configuración, política de backups)</li>
    </ul>
</div>

<pre class="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-6"><code class="language-text">Ejemplo de matriz de trazabilidad:
┌───────────┬──────────────────────┬─────────────────────┬──────────────────────┬─────────────────────┐
│ Requisito │ Componente           │ Prueba              │ Documentación        │ Estado              │
├───────────┼──────────────────────┼─────────────────────┼──────────────────────┼─────────────────────┤
│ RF-001    │ pfSense VPN          │ Test de túnel       │ Manual VPN           │ Implementado ✓      │
│ RF-002    │ Proxmox + Ceph       │ Test de escritura   │ Política Storage     │ Implementado ✓      │
│ RFN-001   │ Azure Load Balancer  │ Test de carga       │ SLA Azure            │ Verificado ✓        │
│ RFN-002   │ Let's Encrypt SSL    │ SSL Labs test       │ Certificado SSL      │ Pendiente ⏳          │
└───────────┴──────────────────────┴─────────────────────┴──────────────────────┴─────────────────────┘</code></pre>

<div class="callout callout-success">
    <div class="callout-title">
        <span>🎯</span> Consejo para ASIR
    </div>
    <p>En proyectos de infraestructura, los requisitos no funcionales (seguridad, disponibilidad, escalabilidad) son tan importantes como los funcionales. Dedica tiempo a investigarlos y definirlos con métricas concretas.</p>
</div>
`;
