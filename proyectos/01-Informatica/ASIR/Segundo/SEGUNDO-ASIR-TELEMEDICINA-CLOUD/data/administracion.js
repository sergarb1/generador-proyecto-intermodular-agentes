window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.administracion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📊</span> Objetivo de esta Sección
    </div>
    <p>Planificarás y presupuestarás el proyecto. Demuestra que eres capaz de gestionar tiempo, costes y riesgos como un profesional.</p>
</div>

<h3>7.1. Guía para la Planificación Temporal</h3>
<p>Para un proyecto de ASIR de segundo curso (96 horas), considera esta distribución:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Fase</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Semanas</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Horas</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Entregables</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Investigación</td>
            <td class="p-4 border border-slate-200">1-2</td>
            <td class="p-4 border border-slate-200">12h</td>
            <td class="p-4 border border-slate-200">Estado del arte, DAFO</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Diseño</td>
            <td class="p-4 border border-slate-200">3-4</td>
            <td class="p-4 border border-slate-200">20h</td>
            <td class="p-4 border border-slate-200">Arquitectura de red, presupuesto</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Implementación 1</td>
            <td class="p-4 border border-slate-200">5-7</td>
            <td class="p-4 border border-slate-200">28h</td>
            <td class="p-4 border border-slate-200">Proxmox, pfSense, VLANs, VPN</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Implementación 2</td>
            <td class="p-4 border border-slate-200">8-10</td>
            <td class="p-4 border border-slate-200">24h</td>
            <td class="p-4 border border-slate-200">Azure, Load Balancer, Backups</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Testing</td>
            <td class="p-4 border border-slate-200">11-12</td>
            <td class="p-4 border border-slate-200">8h</td>
            <td class="p-4 border border-slate-200">Tests de conectividad, seguridad, rendimiento</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Documentación</td>
            <td class="p-4 border border-slate-200">13-14</td>
            <td class="p-4 border border-slate-200">4h</td>
            <td class="p-4 border border-slate-200">Memoria final, presentación</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Crea un <strong>diagrama de Gantt</strong> que incluya:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Todas las tareas desglosadas (mínimo 20 tareas)</li>
        <li>Dependencias entre tareas</li>
        <li>Hitos principales (marcados visualmente)</li>
        <li>Porcentaje de completitud real</li>
    </ul>
</div>

<h3>7.2. Gestión de Riesgos</h3>
<p>Identifica y mitiga los riesgos del proyecto:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-red-50 rounded-2xl border border-red-100">
        <h4 class="font-bold text-red-800 mb-3">🔴 Riesgos Altos</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Caídas de Azure durante la implementación</li>
            <li>Problemas de compatibilidad VPN pfSense-Azure</li>
            <li>Pérdida de datos durante migraciones</li>
        </ul>
    </div>
    <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
        <h4 class="font-bold text-orange-800 mb-3">🟠 Riesgos Medios</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Retrasos por curva de aprendizaje de tecnologías</li>
            <li>Exceso de costes cloud no previstos</li>
            <li>Problemas de rendimiento en videollamadas</li>
        </ul>
    </div>
    <div class="p-6 bg-yellow-50 rounded-2xl border border-yellow-100">
        <h4 class="font-bold text-yellow-800 mb-3">🟡 Riesgos Bajos</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Cambios en requisitos del proyecto</li>
            <li>Disponibilidad limitada del tutor</li>
            <li>Problemas de compatibilidad de navegadores</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-3">✅ Mitigación</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Backups diarios antes de cambios críticos</li>
            <li>Documentación exhaustiva de procedimientos</li>
            <li>Reuniones semanales de seguimiento</li>
            <li>Monitorización de costes Azure con alertas</li>
        </ul>
    </div>
</div>
`;

window.sectionsContent.herramientas = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🛠️</span> Objetivo de esta Sección
    </div>
    <p>Documentarás las herramientas utilizadas durante el proyecto. Esto demuestra tu capacidad para trabajar con entornos profesionales.</p>
</div>

<h3>8.1. Inventario de Herramientas</h3>
<p>Clasifica las herramientas por categoría:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Herramienta</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Versión</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Propósito</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Alternativas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Proxmox VE</td>
            <td class="p-4 border border-slate-200 text-sm">8.x</td>
            <td class="p-4 border border-slate-200 text-sm">Virtualización on-premise</td>
            <td class="p-4 border border-slate-200 text-sm">VMware ESXi, Hyper-V</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">pfSense</td>
            <td class="p-4 border border-slate-200 text-sm">2.7.x</td>
            <td class="p-4 border border-slate-200 text-sm">Firewall y VPN</td>
            <td class="p-4 border border-slate-200 text-sm">OPNsense, Fortigate</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Microsoft Azure</td>
            <td class="p-4 border border-slate-200 text-sm">-</td>
            <td class="p-4 border border-slate-200 text-sm">Cloud público</td>
            <td class="p-4 border border-slate-200 text-sm">AWS, Google Cloud</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Proxmox Backup Server</td>
            <td class="p-4 border border-slate-200 text-sm">3.x</td>
            <td class="p-4 border border-slate-200 text-sm">Backups incrementales</td>
            <td class="p-4 border border-slate-200 text-sm">Veeam, Nakivo</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">PowerShell</td>
            <td class="p-4 border border-slate-200 text-sm">7.x</td>
            <td class="p-4 border border-slate-200 text-sm">Automatización Azure</td>
            <td class="p-4 border border-slate-200 text-sm">Azure CLI, Bash</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Wireshark</td>
            <td class="p-4 border border-slate-200 text-sm">4.x</td>
            <td class="p-4 border border-slate-200 text-sm">Análisis de tráfico</td>
            <td class="p-4 border border-slate-200 text-sm">tcpdump, Fiddler</td>
        </tr>
    </tbody>
</table>

<h3>8.2. Control de Versiones con Git</h3>
<p>Documenta tu uso de Git:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>🎯</span> Buenas Prácticas Git
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Commits atómicos:</strong> Un cambio = un commit</li>
        <li><strong>Mensajes descriptivos:</strong> Explica QUÉ y POR QUÉ</li>
        <li><strong>Ramas feature:</strong> Una rama por funcionalidad</li>
        <li><strong>Push frecuente:</strong> No trabajes más de 1 día sin hacer push</li>
    </ul>
</div>
`;

window.sectionsContent.conclusiones = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🏁</span> Objetivo de esta Sección
    </div>
    <p>Las conclusiones son tu oportunidad para reflexionar sobre lo aprendido, los desafíos superados y las líneas futuras del proyecto.</p>
</div>

<h3>9.1. Conclusiones Técnicas</h3>
<p>Resume los aspectos técnicos más relevantes:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span> Puntos a Tratar
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>¿Se cumplieron todos los requisitos definidos inicialmente?</li>
        <li>¿Qué tecnologías funcionaron bien? ¿Cuáles dieron problemas?</li>
        <li>¿El sistema es escalable y mantenible?</li>
        <li>¿Qué métricas de rendimiento se alcanzaron?</li>
    </ul>
</div>

<h3>9.2. Conclusiones Personales</h3>
<p>Reflexiona sobre tu crecimiento personal y profesional:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">📚 Aprendizajes Técnicos</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Nuevas tecnologías dominadas (Proxmox, Azure, pfSense)</li>
            <li>Arquitecturas cloud híbridas</li>
            <li>Seguridad de redes y VPNs</li>
            <li>Gestión de backups y recuperación</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">🤝 Habilidades Blandas</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Gestión del tiempo y priorización</li>
            <li>Documentación técnica</li>
            <li>Resolución de problemas complejos</li>
            <li>Trabajo autónomo y autodidacta</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>✍️</span> Reflexión Personal
    </div>
    <p>Responde sinceramente a estas preguntas (200-300 palabras):</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>¿Qué aspecto del proyecto te ha resultado más interesante?</li>
        <li>¿Qué harías de manera diferente si volvieras a empezar?</li>
        <li>¿Cómo te ha preparado este proyecto para tu futuro profesional?</li>
        <li>¿Qué consejo le darías a un compañero que empiece este proyecto el año que viene?</li>
    </ul>
</div>

<h3>9.3. Líneas de Futuro</h3>
<p>Explora cómo podría evolucionar tu proyecto:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Categoría</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Mejoras Sugeridas</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Prioridad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Seguridad</td>
            <td class="p-4 border border-slate-200 text-sm">Implementar Zero Trust, MFA obligatorio</td>
            <td class="p-4 border border-slate-200"><span class="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Crítica</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Rendimiento</td>
            <td class="p-4 border border-slate-200 text-sm">CDN para contenido estático, caching Redis</td>
            <td class="p-4 border border-slate-200"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Alta</span></td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Disponibilidad</td>
            <td class="p-4 border border-slate-200 text-sm">Multi-region en Azure, Kubernetes</td>
            <td class="p-4 border border-slate-200"><span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Media</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Funcionalidades</td>
            <td class="p-4 border border-slate-200 text-sm">IA para triaje, chatbot de atención</td>
            <td class="p-4 border border-slate-200"><span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Baja</span></td>
        </tr>
    </tbody>
</table>
`;

window.sectionsContent.bibliografia = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📚</span> Objetivo de esta Sección
    </div>
    <p>Referencia todas las fuentes que has consultado. Una buena bibliografía demuestra rigor y capacidad de investigación.</p>
</div>

<h3>10.1. Referencias Sugeridas para ASIR</h3>

<h4>Documentación Oficial</h4>
<ul class="list-disc pl-6 space-y-3 my-6">
    <li>
        <strong>Proxmox VE Documentation.</strong> Proxmox Server Solutions GmbH (2025).<br>
        <a href="https://pve.proxmox.com/wiki/Main_Page" class="text-blue-600 hover:underline" target="_blank">https://pve.proxmox.com/wiki/Main_Page</a>
    </li>
    <li>
        <strong>pfSense Documentation.</strong> Rubicon Communications, LLC (2025).<br>
        <a href="https://docs.netgate.com/pfsense/en/latest/" class="text-blue-600 hover:underline" target="_blank">https://docs.netgate.com/pfsense/en/latest/</a>
    </li>
    <li>
        <strong>Microsoft Azure Documentation.</strong> Microsoft Corporation (2025).<br>
        <a href="https://docs.microsoft.com/es-es/azure/" class="text-blue-600 hover:underline" target="_blank">https://docs.microsoft.com/es-es/azure/</a>
    </li>
    <li>
        <strong>Azure VPN Gateway.</strong> Microsoft Corporation (2025).<br>
        <a href="https://docs.microsoft.com/es-es/azure/vpn-gateway/" class="text-blue-600 hover:underline" target="_blank">https://docs.microsoft.com/es-es/azure/vpn-gateway/</a>
    </li>
</ul>

<h4>Normativa y Seguridad</h4>
<ul class="list-disc pl-6 space-y-3 my-6">
    <li>
        <strong>Reglamento (UE) 2016/679 (RGPD).</strong> Diario Oficial de la Unión Europea.<br>
        <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj" class="text-blue-600 hover:underline" target="_blank">https://eur-lex.europa.eu/eli/reg/2016/679/oj</a>
    </li>
    <li>
        <strong>Ley 41/2002 de Autonomía del Paciente.</strong> BOE núm. 293.<br>
        <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2002-22188" class="text-blue-600 hover:underline" target="_blank">https://www.boe.es/buscar/act.php?id=BOE-A-2002-22188</a>
    </li>
    <li>
        <strong>OWASP Top 10.</strong> OWASP Foundation (2025).<br>
        <a href="https://owasp.org/www-project-top-ten/" class="text-blue-600 hover:underline" target="_blank">https://owasp.org/www-project-top-ten/</a>
    </li>
    <li>
        <strong>Esquema Nacional de Seguridad (ENS).</strong> RD 3/2010.<br>
        <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331" class="text-blue-600 hover:underline" target="_blank">https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331</a>
    </li>
</ul>

<h4>Libros y Publicaciones</h4>
<ul class="list-disc pl-6 space-y-3 my-6">
    <li>
        <strong>Tanenbaum, A. & Wetherall, D. (2023).</strong> <em>Redes de Computadoras</em>. Pearson Educación.
    </li>
    <li>
        <strong>Stallings, W. (2023).</strong> <em>Criptografía y Seguridad de Redes</em>. Pearson Educación.
    </li>
    <li>
        <strong>Humble, J. & Farley, D. (2023).</strong> <em>Continuous Delivery</em>. Addison-Wesley.
    </li>
</ul>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Completa la bibliografía con al menos <strong>15-20 referencias</strong> de calidad. Incluye documentación oficial, normativa, libros y tutoriales que hayas usado realmente.</p>
</div>
`;

window.sectionsContent.anexos = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📎</span> Objetivo de esta Sección
    </div>
    <p>Los anexos contienen material complementario que no encaja en el cuerpo principal pero que es relevante para entender el proyecto.</p>
</div>

<h3>11.1. Capturas de Pantalla</h3>
<p>Documenta visualmente tu infraestructura:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>📸</span> Capturas Sugeridas
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Dashboard de Proxmox VE con las VMs creadas</li>
        <li>Interfaz de pfSense mostrando interfaces y reglas</li>
        <li>Túnel VPN IPsec establecido (estado "Up")</li>
        <li>Portal de Azure mostrando VNet, subnets y VMs</li>
        <li>Configuración del Load Balancer</li>
        <li>Reglas de auto-scaling configuradas</li>
        <li>Dashboard de monitorización (Grafana o Azure Monitor)</li>
        <li>Políticas de backup configuradas</li>
        <li>Tests de conectividad (ping, traceroute, nmap)</li>
    </ul>
</div>

<h3>11.2. Fragmentos de Configuración</h3>
<p>Incluye las configuraciones más relevantes:</p>

<pre class="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-6"><code class="language-text">Ejemplo: Configuración de interfaz en pfSense

# /etc/rc.conf
ifconfig_em0="inet 192.168.1.1 netmask 255.255.255.0"
ifconfig_em1="inet 10.10.10.1 netmask 255.255.255.0"
gateway_enable="YES"

# Reglas de firewall esenciales
pass in quick on em0 proto tcp from any to any port 443 keep state
pass in quick on em0 proto tcp from any to any port 80 keep state
pass out quick on em1 all keep state</code></pre>

<h3>11.3. Glosario de Términos</h3>
<p>Define los términos técnicos usados:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Término</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Definición</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Cloud Híbrido</td>
            <td class="p-4 border border-slate-200 text-sm">Combinación de infraestructura on-premise y cloud público, conectadas de forma segura.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">VPN Site-to-Site</td>
            <td class="p-4 border border-slate-200 text-sm">Túnel cifrado entre dos redes locales, permitiendo comunicación segura a través de Internet.</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">VLAN</td>
            <td class="p-4 border border-slate-200 text-sm">Red local virtual que permite segmentar físicamente una red en múltiples redes lógicas.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Load Balancer</td>
            <td class="p-4 border border-slate-200 text-sm">Dispositivo que distribuye el tráfico de red entre múltiples servidores para mejorar rendimiento y disponibilidad.</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Auto-Scaling</td>
            <td class="p-4 border border-slate-200 text-sm">Capacidad de añadir o quitar recursos automáticamente según la demanda.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">RTO/RPO</td>
            <td class="p-4 border border-slate-200 text-sm">Recovery Time Objective (tiempo máximo de recuperación) y Recovery Point Objective (pérdida máxima de datos aceptable).</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📋</span> Checklist de Anexos
    </div>
    <p>Asegúrate de incluir al menos:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>✅ 10-15 capturas de pantalla organizadas y comentadas</li>
        <li>✅ 3-5 fragmentos de configuración relevante</li>
        <li>✅ Glosario con 15-20 términos técnicos</li>
        <li>✅ Diagrama de arquitectura de red completo</li>
        <li>✅ Cualquier otro material que aporte valor al proyecto</li>
    </ul>
</div>
`;
