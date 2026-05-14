window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.diseno = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🎨</span> Objetivo de esta Sección
    </div>
    <p>La sección de Diseño describe la arquitectura de la solución. Debes incluir diagramas, esquemas de red y la pila tecnológica seleccionada.</p>
</div>

<h3>5.1. Arquitectura Física y Lógica de Red</h3>
<p>Diseña la nueva topología de red segmentada con las siguientes zonas:</p>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📐</span> Esquema de Segmentación por VLANs
    </div>
    <pre class="text-xs overflow-x-auto bg-slate-900 text-slate-100 p-4 rounded-lg mt-3">
VLAN 10 - ADMIN (Equipos administrativos)
   ├── 5 PCs de administración
   ├── 2 impresoras de red
   └── Acceso: solo a ERP y correo

VLAN 20 - MEDICOS (Equipos facultativos)
   ├── 25 PCs de consultas
   ├── Acceso: a servidor historiales clínicos
   └── Sin acceso a Internet (solo intranet)

VLAN 30 - SERVIDORES (CPD)
   ├── Servidor Web (DMZ)
   ├── Servidor Base de Datos
   ├── Servidor de Ficheros (NAS)
   └── SIEM Wazuh + ELK

VLAN 40 - DMZ (Servicios públicos)
   ├── Portal de pacientes (web)
   ├── Servidor VPN (acceso remoto)
   └── Proxy reverso

VLAN 99 - GUEST (WiFi visitantes)
   ├── Solo acceso Internet
   └── Aislamiento total de red interna</pre>
</div>

<h3>5.2. Pila Tecnológica</h3>
<p>Selecciona y justifica cada tecnología del stack:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold">Capa</th>
            <th class="p-4 text-left font-bold">Tecnología</th>
            <th class="p-4 text-left font-bold">Versión</th>
            <th class="p-4 text-left font-bold">Justificación</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-t border-slate-200">
            <td class="p-4">Firewall / Router</td>
            <td class="p-4 font-medium">pfSense</td>
            <td class="p-4">2.7.x</td>
            <td class="p-4">Open source, maduro, comunidad grande, soporte VLAN, VPN, Suricata integrable</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">IDS/IPS</td>
            <td class="p-4 font-medium">Suricata</td>
            <td class="p-4">7.x</td>
            <td class="p-4">Multi-hilo, soporta reglas Emerging Threats, detección por protocolo</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">SIEM / HIDS</td>
            <td class="p-4 font-medium">Wazuh + ELK</td>
            <td class="p-4">4.x / 8.x</td>
            <td class="p-4">Integración nativa, FIM, SCAP, dashboards Kibana, alertas</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">Escáner Vulnerabilidades</td>
            <td class="p-4 font-medium">OpenVAS (Greenbone)</td>
            <td class="p-4">22.x</td>
            <td class="p-4">Open source, base de datos NVDA actualizada, informes exportables</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">Hardening Automatizado</td>
            <td class="p-4 font-medium">Ansible</td>
            <td class="p-4">2.16.x</td>
            <td class="p-4">Playbooks reutilizables, sin agentes, idempotente, CIS Benchmarks disponibles</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">Backup</td>
            <td class="p-4 font-medium">BorgBackup + rsync</td>
            <td class="p-4">1.2.x</td>
            <td class="p-4">Deduplicación, cifrado, compresión, backups diferenciales eficientes</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">SO Servidores</td>
            <td class="p-4 font-medium">Ubuntu Server LTS</td>
            <td class="p-4">22.04 / 24.04</td>
            <td class="p-4">Soporte largo plazo, amplia documentación, paquetes actualizados</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">Switch Gestionable</td>
            <td class="p-4 font-medium">Cisco SG350 / MikroTik</td>
            <td class="p-4">-</td>
            <td class="p-4">Soporte 802.1Q, STP, port mirroring para monitoreo</td>
        </tr>
    </tbody>
</table>

<h3>5.3. Diagrama de Red Propuesto</h3>
<div class="callout callout-warning">
    <div class="callout-title">
        <span>📐</span> Tarea para el Alumnado
    </div>
    <p>Genera un diagrama de red profesional con <strong>draw.io</strong> o <strong>Lucidchart</strong> que incluya:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Los 3 switches gestionables con enlaces trunk 802.1Q</li>
        <li>El firewall pfSense con sus 3 interfaces (WAN, LAN, DMZ)</li>
        <li>Los servidores virtualizados (Proxmox o VMware) con las máquinas del SIEM, OpenVAS, Backup</li>
        <li>Los clientes por VLAN (Admin, Médicos, Guest)</li>
        <li>Túneles VPN IPsec para acceso remoto de los 25 médicos</li>
        <li>El flujo de logs hacia el SIEM Wazuh</li>
        <li>NOTA: Guarda el diagrama en <code class="text-xs">images/diagrama-red.png</code> y enlázalo aquí</li>
    </ul>
</div>

<h3>5.4. Diseño de Políticas de Firewall</h3>
<p>Define las reglas de firewall para cada interfaz:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold">Origen</th>
            <th class="p-4 text-left font-bold">Destino</th>
            <th class="p-4 text-left font-bold">Puerto</th>
            <th class="p-4 text-left font-bold">Protocolo</th>
            <th class="p-4 text-left font-bold">Acción</th>
            <th class="p-4 text-left font-bold">Descripción</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-t border-slate-200">
            <td class="p-4">VLAN_ADMIN</td>
            <td class="p-4">VLAN_SERVIDORES</td>
            <td class="p-4">443, 3389, 22</td>
            <td class="p-4">TCP</td>
            <td class="p-4"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Permitir</span></td>
            <td class="p-4">Acceso administrativo a servidores</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">VLAN_MEDICOS</td>
            <td class="p-4">VLAN_SERVIDORES</td>
            <td class="p-4">443, 3306</td>
            <td class="p-4">TCP</td>
            <td class="p-4"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Permitir</span></td>
            <td class="p-4">Acceso a web de historiales y BD</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">CUALQUIERA</td>
            <td class="p-4">DMZ (web)</td>
            <td class="p-4">443</td>
            <td class="p-4">TCP</td>
            <td class="p-4"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Permitir</span></td>
            <td class="p-4">Acceso público al portal de pacientes</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">CUALQUIERA</td>
            <td class="p-4">LAN_INTERNA</td>
            <td class="p-4">-</td>
            <td class="p-4">-</td>
            <td class="p-4"><span class="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">Denegar</span></td>
            <td class="p-4">Bloquear acceso directo desde WAN a LAN</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">VLAN_GUEST</td>
            <td class="p-4">CUALQUIERA</td>
            <td class="p-4">80, 443</td>
            <td class="p-4">TCP</td>
            <td class="p-4"><span class="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-bold">Permitir limitado</span></td>
            <td class="p-4">Solo navegación web, aislada de VLANs internas</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Completa esta sección con:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Diagrama de red profesional (draw.io) guardado en images/</li>
        <li>Diagrama de flujo de datos: cómo viaja la información del paciente desde la consulta hasta el backup</li>
        <li>Esquema de la arquitectura del SIEM (Wazuh agents ↔ Wazuh manager ↔ ELK Stack)</li>
        <li>Wireframe del dashboard de Kibana con los paneles que monitorizarás</li>
        <li>Diseño de la política de contraseñas y 2FA</li>
    </ul>
</div>
`;
