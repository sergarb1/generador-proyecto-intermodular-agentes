window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["requisitos"] = `

<div class="callout callout-info">
    <div class="callout-title"><span>📋</span><span>Análisis de Requisitos</span></div>
    <p class="text-sm">Los requisitos definen QUÉ debe hacer el sistema (no CÓMO). Deben ser claros, medibles y verificables. Usa verbos de acción en infinitivo.</p>
</div>

<h3>4.1. Requisitos Funcionales</h3>

<p>Los requisitos funcionales describen las capacidades que el sistema debe proporcionar al usuario o administrador.</p>

<h4>4.1.1. Gestión de Infraestructura Cloud</h4>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700 w-24">ID</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Requisito</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700 w-32">Prioridad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm font-bold">RF-01</td>
            <td class="border border-slate-300 px-4 py-3">Desplegar instancias EC2 automáticamente mediante scripts</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm font-bold">RF-02</td>
            <td class="border border-slate-300 px-4 py-3">Configurar balanceadores de carga para distribuir tráfico web</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm font-bold">RF-03</td>
            <td class="border border-slate-300 px-4 py-3">Almacenar backups históricos en S3 con cifrado del lado del servidor</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm font-bold">RF-04</td>
            <td class="border border-slate-300 px-4 py-3">Escalar horizontalmente según métricas de CPU (>80% durante 5 min)</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-bold">MEDIA</span></td>
        </tr>
    </tbody>
</table>

<h4>4.1.2. Gestión de Infraestructura Local</h4>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700 w-24">ID</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Requisito</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700 w-32">Prioridad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm font-bold">RF-05</td>
            <td class="border border-slate-300 px-4 py-3">Crear máquinas virtuales en Proxmox para base de datos y autenticación</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm font-bold">RF-06</td>
            <td class="border border-slate-300 px-4 py-3">Establecer túnel VPN site-to-site entre local y AWS</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm font-bold">RF-07</td>
            <td class="border border-slate-300 px-4 py-3">Configurar contenedores LXC para servicios ligeros (DNS, proxy)</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">BAJA</span></td>
        </tr>
    </tbody>
</table>

<h4>4.1.3. Automatización y Scripts</h4>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700 w-24">ID</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Requisito</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700 w-32">Prioridad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm font-bold">RF-08</td>
            <td class="border border-slate-300 px-4 py-3">Sincronizar automáticamente backups locales con S3 cada 24h</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm font-bold">RF-09</td>
            <td class="border border-slate-300 px-4 py-3">Enviar alertas por email/Telegram cuando CPU > 90%</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm font-bold">RF-10</td>
            <td class="border border-slate-300 px-4 py-3">Generar informe semanal de uso de recursos en PDF</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-bold">MEDIA</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm font-bold">RF-11</td>
            <td class="border border-slate-300 px-4 py-3">Rotar logs automáticamente y eliminar mayores de 30 días</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">BAJA</span></td>
        </tr>
    </tbody>
</table>

<h4>4.1.4. Seguridad y Cumplimiento</h4>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700 w-24">ID</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Requisito</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700 w-32">Prioridad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm font-bold">RF-12</td>
            <td class="border border-slate-300 px-4 py-3">Cifrar todas las comunicaciones con TLS 1.3</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm font-bold">RF-13</td>
            <td class="border border-slate-300 px-4 py-3">Implementar autenticación MFA para acceso administrativo</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm font-bold">RF-14</td>
            <td class="border border-slate-300 px-4 py-3">Registrar todos los accesos a datos sensibles (audit trail)</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm font-bold">RF-15</td>
            <td class="border border-slate-300 px-4 py-3">Enmascarar datos personales en entornos de testing</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-bold">MEDIA</span></td>
        </tr>
    </tbody>
</table>

<h3>4.2. Requisitos No Funcionales</h3>

<p>Los requisitos no funcionales definen propiedades del sistema (rendimiento, seguridad, usabilidad).</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-200">
        <h4 class="font-bold text-blue-800 mb-4 flex items-center gap-2"><span>⚡</span>Rendimiento</h4>
        <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-2">
                <span class="text-blue-500 mt-0.5">▸</span>
                <span><strong>RNF-01:</strong> Latencia máxima de 200ms para peticiones API</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-500 mt-0.5">▸</span>
                <span><strong>RNF-02:</strong> Throughput mínimo de 1000 req/segundo</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-500 mt-0.5">▸</span>
                <span><strong>RNF-03:</strong> Tiempo de recuperación ante fallos < 5 minutos</span>
            </li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-200">
        <h4 class="font-bold text-green-800 mb-4 flex items-center gap-2"><span>🔒</span>Seguridad</h4>
        <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-2">
                <span class="text-green-500 mt-0.5">▸</span>
                <span><strong>RNF-04:</strong> Cumplimiento RGPD para datos de categoría especial</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-green-500 mt-0.5">▸</span>
                <span><strong>RNF-05:</strong> Backups cifrados con AES-256</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-green-500 mt-0.5">▸</span>
                <span><strong>RNF-06:</strong> Retención de logs de auditoría: 2 años</span>
            </li>
        </ul>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-200">
        <h4 class="font-bold text-purple-800 mb-4 flex items-center gap-2"><span>📊</span>Disponibilidad</h4>
        <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-2">
                <span class="text-purple-500 mt-0.5">▸</span>
                <span><strong>RNF-07:</strong> SLA del 99.9% (8.76h de downtime máximo/año)</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-purple-500 mt-0.5">▸</span>
                <span><strong>RNF-08:</strong> Redundancia N+1 en todos los componentes críticos</span>
            </li>
        </ul>
    </div>
    <div class="p-6 bg-orange-50 rounded-2xl border border-orange-200">
        <h4 class="font-bold text-orange-800 mb-4 flex items-center gap-2"><span>🔧</span>Mantenibilidad</h4>
        <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-2">
                <span class="text-orange-500 mt-0.5">▸</span>
                <span><strong>RNF-09:</strong> Documentación actualizada de todos los scripts</span>
            </li>
            <li class="flex items-start gap-2">
                <span class="text-orange-500 mt-0.5">▸</span>
                <span><strong>RNF-10:</strong> Código versionado en Git con commits descriptivos</span>
            </li>
        </ul>
    </div>
</div>

<h3>4.3. Métricas de Rendimiento Objetivo</h3>

<p>Define cómo medirás el éxito de cada requisito. Esta tabla te ayudará durante las pruebas:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Métrica</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Valor Objetivo</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Herramienta de Medición</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Frecuencia</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Latencia API</td>
            <td class="border border-slate-300 px-4 py-3">< 200ms (p95)</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Prometheus + histogramas</td>
            <td class="border border-slate-300 px-4 py-3">Continua</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Disponibilidad</td>
            <td class="border border-slate-300 px-4 py-3">99.9%</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Uptime Kuma / Ping</td>
            <td class="border border-slate-300 px-4 py-3">Mensual</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Tiempo Backup</td>
            <td class="border border-slate-300 px-4 py-3">< 30 minutos</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Logs de scripts</td>
            <td class="border border-slate-300 px-4 py-3">Diaria</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Uso CPU</td>
            <td class="border border-slate-300 px-4 py-3">< 70% promedio</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Grafana dashboard</td>
            <td class="border border-slate-300 px-4 py-3">Continua</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title"><span>📝</span><span>Tu Tarea</span></div>
    <p class="text-sm m-0">Amplía esta sección con al menos <strong>5 requisitos adicionales</strong> específicos de tu implementación. Piensa en casos edge y situaciones excepcionales que tu sistema debe manejar.</p>
</div>

`;
