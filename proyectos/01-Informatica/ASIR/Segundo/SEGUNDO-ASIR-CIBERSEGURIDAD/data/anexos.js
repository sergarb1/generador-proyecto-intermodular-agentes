window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.anexos = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📎</span> Objetivo de esta Sección
    </div>
    <p>Los Anexos contienen información complementaria que no encaja en el cuerpo principal del proyecto pero es relevante para su comprensión. Incluye configuraciones detalladas, scripts, outputs de comandos y documentación adicional.</p>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Nota para el Alumnado
    </div>
    <p>Los siguientes son ejemplos de anexos que puedes incluir. Debes adaptarlos a tu proyecto real y añadir aquellos que sean relevantes.</p>
</div>

<h3>Anexo A: Scripts de Automatización</h3>
<p>Playbook de Ansible para hardening CIS Level 1 en Ubuntu Server 22.04:</p>
<div class="callout callout-info my-6">
    <pre class="text-xs overflow-x-auto bg-slate-900 text-slate-100 p-4 rounded-lg">
---
- name: CIS Level 1 Hardening para Ubuntu 22.04
  hosts: all
  become: yes
  tasks:
    - name: Configurar permisos de ficheros sensibles
      file:
        path: "{{ item.path }}"
        mode: "{{ item.mode }}"
      loop:
        - { path: /etc/passwd, mode: '0644' }
        - { path: /etc/shadow, mode: '0640' }
        - { path: /etc/group, mode: '0644' }
        - { path: /etc/gshadow, mode: '0640' }

    - name: Deshabilitar login root por SSH
      lineinfile:
        path: /etc/ssh/sshd_config
        regexp: '^PermitRootLogin'
        line: 'PermitRootLogin no'
      notify: restart sshd

    - name: Configurar fail2ban
      apt:
        name: fail2ban
        state: present
      notify: start fail2ban

  handlers:
    - name: restart sshd
      service:
        name: sshd
        state: restarted
    - name: start fail2ban
      service:
        name: fail2ban
        state: started
        enabled: yes</pre>
</div>

<h3>Anexo B: Configuraciones de Red</h3>
<p>Configuración de VLANs en switch gestionable Cisco SG350:</p>
<div class="callout callout-info my-6">
    <pre class="text-xs overflow-x-auto bg-slate-900 text-slate-100 p-4 rounded-lg">
! Configuración de VLANs
vlan database
  vlan 10 name ADMIN
  vlan 20 name MEDICOS
  vlan 30 name SERVIDORES
  vlan 40 name DMZ
  vlan 99 name GUEST
exit

! Configurar puerto trunk para pfSense
interface gigabitethernet1/0/1
  switchport mode trunk
  switchport trunk allowed vlan add 10,20,30,40,99
exit

! Configurar puertos de acceso por VLAN
interface gigabitethernet1/0/2-10
  switchport mode access
  switchport access vlan 10
exit</pre>
</div>

<h3>Anexo C: Reglas Personalizadas de Suricata</h3>
<div class="callout callout-info my-6">
    <pre class="text-xs overflow-x-auto bg-slate-900 text-slate-100 p-4 rounded-lg">
# Regla personalizada para detectar escaneo de puertos
alert tcp $EXTERNAL_NET any -> $HOME_NET any (msg:"Posible escaneo de puertos detectado"; 
    flow:stateless; threshold:type both, track by_src, count 50, seconds 10; 
    sid:1000001; rev:1;)

# Regla para detectar intentos de acceso SSH no autorizados
alert ssh $EXTERNAL_NET any -> $HOME_NET 22 (msg:"Múltiples intentos SSH fallidos - posible fuerza bruta"; 
    flow:to_server; threshold:type both, track by_src, count 5, seconds 60; 
    sid:1000002; rev:1;)</pre>
</div>

<h3>Anexo D: Informe de Escaneo de Vulnerabilidades</h3>
<p>Resultado del primer escaneo con OpenVAS (datos de ejemplo):</p>
<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold">Gravedad</th>
            <th class="p-4 text-left font-bold">Nº Vulnerabilidades</th>
            <th class="p-4 text-left font-bold">Ejemplos</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-t border-slate-200">
            <td class="p-4"><span class="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">Crítica</span></td>
            <td class="p-4">3</td>
            <td class="p-4">SSH con autenticación por contraseña, puertos administrativos expuestos, TLS 1.0 habilitado</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4"><span class="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold">Alta</span></td>
            <td class="p-4">12</td>
            <td class="p-4">Apache desactualizado, cabeceras HTTP inseguras, directorios listables</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4"><span class="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-bold">Media</span></td>
            <td class="p-4">25</td>
            <td class="p-4">Falta de CSP headers, cookies sin Secure flag, versiones visibles</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4"><span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Baja</span></td>
            <td class="p-4">18</td>
            <td class="p-4">Información de versión en banners, falta de X-Content-Type-Options</td>
        </tr>
    </tbody>
</table>

<h3>Estructura Sugerida de Anexos</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-3">📄 Documentación Técnica</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li>Scripts completos de automatización</li>
            <li>Configuraciones de respaldo (backup config)</li>
            <li>Diagramas de red a tamaño completo</li>
            <li>Capturas de pantalla de dashboards</li>
        </ul>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-3">📋 Evidencias</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li>Outputs de comandos de verificación</li>
            <li>Logs de instalación y configuración</li>
            <li>Resultados de pruebas de intrusión</li>
            <li>Informes de vulnerabilidades (antes/después)</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Los anexos deben ser <strong>reales</strong>, no copias de ejemplos. Incluye:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Todos los scripts que hayas desarrollado durante el proyecto</li>
        <li>Las configuraciones completas de los servicios desplegados</li>
        <li>Capturas de pantalla numeradas y con leyendas explicativas</li>
        <li>Los informes generados por las herramientas (OpenVAS, Wazuh, etc.)</li>
        <li>El manual de usuario para el personal de MediConnect Solutions</li>
        <li>Un glosario de términos técnicos utilizados en el proyecto</li>
    </ul>
</div>
`;
