window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.implementacion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>💻</span> Objetivo de esta Sección
    </div>
    <p>La Implementación es el diario de a bordo del proyecto. Documenta paso a paso cómo desplegaste cada componente, los comandos utilizados y las decisiones técnicas tomadas.</p>
</div>

<h3>6.1. Instalación y Configuración de pfSense</h3>
<p>Pasos para desplegar el firewall perimetral:</p>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📥</span> Instalación Base
    </div>
    <pre class="text-xs overflow-x-auto bg-slate-900 text-slate-100 p-4 rounded-lg mt-3">
1. Descargar ISO de pfSense 2.7.x desde https://www.pfsense.org/download/
2. Crear máquina virtual o USB booteable
3. Instalación: asignar interfaces WAN (vtnet0), LAN (vtnet1), DMZ (vtnet2)
4. Configuración inicial por consola:
   - IP LAN: 192.168.1.1/24
   - IP DMZ: 10.0.1.1/24
   - Gateway WAN por DHCP
5. Acceder a webGUI en https://192.168.1.1
6. Wizard inicial: hostname, dominio, DNS servers</pre>
</div>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>🔀</span> Configuración de VLANs
    </div>
    <pre class="text-xs overflow-x-auto bg-slate-900 text-slate-100 p-4 rounded-lg mt-3">
Interfaces → VLANs → Añadir:
- VLAN 10 - Admin: 192.168.10.0/24
- VLAN 20 - Medicos: 192.168.20.0/24
- VLAN 30 - Servidores: 192.168.30.0/24
- VLAN 99 - Guest: 192.168.99.0/24

Asignar cada VLAN a la interfaz LAN (vtnet1) con tagged 802.1Q

Firewall → Rules:
- Crear reglas por interfaz/VLAN
- Denegar tráfico entre VLANs por defecto
- Permitir solo tráfico explícitamente autorizado</pre>
</div>

<h3>6.2. Despliegue de Suricata IDS/IPS</h3>
<p>Integración de Suricata en pfSense:</p>
<pre class="text-xs overflow-x-auto bg-slate-900 text-slate-100 p-4 rounded-lg my-6">
System → Package Manager → Available Packages:
1. Instalar "suricata" package
2. Services → Suricata → Global Settings:
   - Habilitar Suricata
   - Seleccionar interfaces a monitorizar (WAN + LAN + DMZ)
3. Descargar reglas Emerging Threats Open
4. Configurar modo IPS (inline) en la interfaz WAN
5. Definir policy: drop de reglas con clasificación "attempted-recon"
6. Programar actualización automática de reglas</pre>

<h3>6.3. Instalación del SIEM Wazuh + ELK Stack</h3>
<p>Despliegue del sistema central de monitorización:</p>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📊</span> Instalación de Wazuh Manager + ELK
    </div>
    <pre class="text-xs overflow-x-auto bg-slate-900 text-slate-100 p-4 rounded-lg mt-3">
# Servidor Wazuh (Ubuntu Server 22.04)
curl -sO https://packages.wazuh.com/4.x/wazuh-install.sh
bash wazuh-install.sh -a

# El script instala:
# - Wazuh Manager (gestión de agentes y reglas)
# - Wazuh Indexer (almacenamiento) 
# - Wazuh Dashboard (interfaz Kibana personalizada)
# - Filebeat (envío de logs)

# Verificar estado del cluster:
systemctl status wazuh-manager
systemctl status wazuh-indexer
systemctl status wazuh-dashboard</pre>
</div>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>🖥️</span> Instalación de Agentes Wazuh en clientes
    </div>
    <pre class="text-xs overflow-x-auto bg-slate-900 text-slate-100 p-4 rounded-lg mt-3">
# En cada servidor a monitorizar:
curl -sO https://packages.wazuh.com/4.x/wazuh-agent.sh
bash wazuh-agent.sh -a -m 192.168.30.10 -p 1515

# Configurar agente (ossec.conf):
# - Logs del sistema (/var/log/syslog, /var/log/auth.log)
# - File Integrity Monitoring (FIM)
# - Escaneo de rootkits
# - Detección de malware

systemctl start wazuh-agent
systemctl enable wazuh-agent</pre>
</div>

<h3>6.4. Hardening de Servidores con Ansible</h3>
<p>Automatización del hardening según CIS Benchmarks:</p>
<pre class="text-xs overflow-x-auto bg-slate-900 text-slate-100 p-4 rounded-lg my-6">
# Nodo de control Ansible
apt install ansible
ansible-galaxy collection install community.general

# Estructura de playbooks:
ansible/
├── playbooks/
│   ├── hardening-ubuntu.yml    # CIS Level 1 hardening
│   ├── config-ssh.yml          # Hardening SSH
│   ├── config-auditd.yml       # Reglas de auditoría
│   └── config-fail2ban.yml     # Protección fuerza bruta
├── roles/
│   ├── cis-hardening/          # Role de hardening
│   └── clamav/                 # Role antivirus
└── inventory.ini

# Ejecutar hardening:
ansible-playbook -i inventory.ini playbooks/hardening-ubuntu.yml</pre>

<h3>6.5. Configuración de OpenVAS</h3>
<pre class="text-xs overflow-x-auto bg-slate-900 text-slate-100 p-4 rounded-lg my-6">
# Instalación de Greenbone Vulnerability Manager
apt install postgresql
apt install gvm

# Configuración inicial:
gvm-setup
gvm-start

# Acceso vía web: https://192.168.30.20:9392
# Crear tarea de escaneo:
# - Target: 192.168.0.0/16 (toda la red interna)
# - Scan config: "Full and fast"
# - Schedule: semanal (cada domingo a las 2:00 AM)
# - Alert: enviar informe por email al administrador</pre>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Completa esta sección documentando:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Diario de implementación:</strong> Fecha, tarea realizada, problemas encontrados y solución</li>
        <li><strong>Capturas de pantalla</strong> de cada paso importante (configuración pfSense, dashboard Kibana, alertas Wazuh, informe OpenVAS)</li>
        <li><strong>Comandos exactos</strong> utilizados (no copies de ejemplo, pon los que realmente ejecutaste)</li>
        <li><strong>Incidencias:</strong> Documenta al menos 3 problemas que surgieron durante la implementación y cómo los resolviste</li>
        <li><strong>Pruebas de validación:</strong> Muestra los resultados de pruebas de intrusión, escaneos de puertos y simulación de ataques</li>
    </ul>
</div>
`;
