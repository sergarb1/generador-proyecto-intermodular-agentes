window.sectionsContent = window.sectionsContent || {};
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
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">IPsec</td>
            <td class="p-4 border border-slate-200 text-sm">Conjunto de protocolos para asegurar comunicaciones IP mediante autenticación y cifrado.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">VNet</td>
            <td class="p-4 border border-slate-200 text-sm">Red virtual en Azure que aísla y segmenta recursos cloud.</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">NSG</td>
            <td class="p-4 border border-slate-200 text-sm">Network Security Group: firewall de Azure para filtrar tráfico de red.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Proxmox VE</td>
            <td class="p-4 border border-slate-200 text-sm">Plataforma de virtualización open-source basada en KVM y LXC.</td>
        </tr>
    </tbody>
</table>

<h3>11.4. Manual de Procedimientos</h3>
<p>Incluye procedimientos básicos de operación:</p>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📖</span> Procedimientos Sugeridos
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Cómo crear una nueva VM en Proxmox</li>
        <li>Cómo añadir una regla de firewall en pfSense</li>
        <li>Cómo escalar manualmente las VMs en Azure</li>
        <li>Cómo restaurar un backup</li>
        <li>Cómo monitorizar el estado del túnel VPN</li>
        <li>Cómo añadir un nuevo usuario al sistema</li>
    </ul>
</div>

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
        <li>✅ Manual de procedimientos básico</li>
        <li>✅ Cualquier otro material que aporte valor al proyecto</li>
    </ul>
</div>
`;
