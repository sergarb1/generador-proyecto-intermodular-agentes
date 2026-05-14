window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.introduccion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>👋</span> Contexto del Proyecto
    </div>
    <p>Esta sección describe la empresa y los problemas de seguridad críticos que debes resolver. Úsala como base para todo tu análisis técnico posterior.</p>
</div>

<h3>1.1. Descripción de la Empresa</h3>
<p><strong>MediConnect Solutions</strong> es una clínica de servicios médicos digitales ubicada en Valencia, especializada en telemedicina y consultas remotas. Cuentan con un equipo de <strong>25 médicos especialistas</strong> y dan servicio a más de <strong>8.000 pacientes mensuales</strong> de forma remota. Su infraestructura TIC consta de un CPD on-premise con servidores físicos y virtualizados, una red LAN con 3 switches gestionables, 2 servidores Linux (Ubuntu Server + CentOS), almacenamiento NAS, y acceso remoto vía VPN para los facultativos.</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <div class="text-3xl font-bold text-blue-600 mb-2">25</div>
        <div class="text-sm text-slate-600">Médicos Especialistas</div>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <div class="text-3xl font-bold text-green-600 mb-2">8.000+</div>
        <div class="text-sm text-slate-600">Pacientes Mensuales</div>
    </div>
    <div class="p-6 bg-red-50 rounded-2xl border border-red-100">
        <div class="text-3xl font-bold text-red-600 mb-2">0</div>
        <div class="text-sm text-slate-600">Medidas de Ciberseguridad Actuales</div>
    </div>
</div>

<div class="callout callout-error">
    <div class="callout-title">
        <span>🔥</span> Problemática Crítica de Seguridad
    </div>
    <p class="mb-3">La infraestructura actual de MediConnect carece de las medidas de seguridad más básicas, exponiendo datos sanitarios sensibles y la continuidad del negocio:</p>
    <ul class="space-y-3">
        <li class="flex gap-3 items-start">
            <span class="text-red-500 text-lg">🔓</span>
            <div>
                <strong class="text-sm font-bold text-red-700 block">Red Plana sin Segmentación</strong>
                <span class="text-xs text-slate-600">Todos los dispositivos comparten la misma red sin VLANs. Un atacante que acceda a un equipo administrativo puede llegar directamente a los servidores de historiales clínicos.</span>
            </div>
        </li>
        <li class="flex gap-3 items-start">
            <span class="text-red-500 text-lg">🦠</span>
            <div>
                <strong class="text-sm font-bold text-red-700 block">Servidores Sin Protección</strong>
                <span class="text-xs text-slate-600">Los servidores Linux no tienen hardening, carecen de antivirus, los puertos SSH están expuestos a Internet con autenticación por contraseña, y no existe un IDS/IPS que detecte intrusiones.</span>
            </div>
        </li>
        <li class="flex gap-3 items-start">
            <span class="text-red-500 text-lg">👁️</span>
            <div>
                <strong class="text-sm font-bold text-red-700 block">Ausencia de Monitorización</strong>
                <span class="text-xs text-slate-600">No hay un SIEM que centralice y correlacione logs. Los incidentes se detectan cuando un usuario reporta que algo no funciona, no cuando ocurre el ataque.</span>
            </div>
        </li>
        <li class="flex gap-3 items-start">
            <span class="text-red-500 text-lg">💾</span>
            <div>
                <strong class="text-sm font-bold text-red-700 block">Backups Sin Cifrar ni Automatizar</strong>
                <span class="text-xs text-slate-600">Las copias de seguridad se realizan manualmente una vez al mes, se almacenan sin cifrar en el mismo NAS que los datos originales, y nunca se han probado restauraciones.</span>
            </div>
        </li>
        <li class="flex gap-3 items-start">
            <span class="text-red-500 text-lg">📜</span>
            <div>
                <strong class="text-sm font-bold text-red-700 block">Incumplimiento Normativo</strong>
                <span class="text-xs text-slate-600">La falta de medidas técnicas de seguridad supone una violación del RGPD (artículos 25, 32 y 33) y del Esquema Nacional de Seguridad, con posibles sanciones de hasta 20 millones de euros.</span>
            </div>
        </li>
    </ul>
</div>

<h3>1.2. Propuesta Técnica</h3>
<p>Se propone un <strong>Sistema Integral de Ciberseguridad</strong> que blinde la infraestructura corporativa de MediConnect Solutions mediante las siguientes capas de defensa:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span>🛡️</span> Perímetro y Red
        </h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Firewall pfSense con IDS/IPS Suricata integrado</li>
            <li>Segmentación por VLANs (Admin, Médicos, Servidores, DMZ, Guest)</li>
            <li>VPN IPsec para acceso remoto seguro de facultativos</li>
            <li>Políticas de firewall por zona (DMZ, LAN, WAN)</li>
        </ul>
    </div>
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-3 flex items-center gap-2">
            <span>📊</span> Monitorización y Detección
        </h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>SIEM Wazuh (HIDS + FIM + correlación de logs)</li>
            <li>ELK Stack (Elasticsearch, Logstash, Kibana) para visualización</li>
            <li>OpenVAS para escaneo periódico de vulnerabilidades</li>
            <li>Alertas en tiempo real vía email y dashboard</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-3 flex items-center gap-2">
            <span>🔐</span> Hardening y Protección
        </h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Hardening de servidores Linux según CIS Benchmarks</li>
            <li>Automatización con Ansible (playbooks de hardening)</li>
            <li>Cifrado AES-256 en reposo + TLS 1.3 en tránsito</li>
            <li>Antivirus ClamAV + Rootkit Hunter (rkhunter)</li>
        </ul>
    </div>
    <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
        <h4 class="font-bold text-orange-800 mb-3 flex items-center gap-2">
            <span>📋</span> Cumplimiento y Continuidad
        </h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Políticas DLP (Data Loss Prevention) básicas</li>
            <li>Backups automatizados cifrados con RPO &lt; 4h</li>
            <li>Plan de Respuesta ante Incidentes (IRP)</li>
            <li>Documentación para auditoría RGPD/ENS</li>
        </ul>
    </div>
</div>

<h3>1.3. Objetivos SMART</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <div class="callout-title">
            <span>🎯</span> Objetivo 1
        </div>
        <p class="text-sm">Implementar un <strong>firewall perimetral pfSense con IDS/IPS</strong> que analice y filtre el 100% del tráfico de red, bloqueando ataques conocidos en tiempo real con una tasa de falsos positivos inferior al 5%.</p>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <div class="callout-title">
            <span>🎯</span> Objetivo 2
        </div>
        <p class="text-sm">Desplegar un <strong>SIEM basado en Wazuh</strong> que monitorice todos los servidores y dispositivos de red, con capacidad de detectar y alertar de amenazas en menos de 60 segundos desde su ocurrencia.</p>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <div class="callout-title">
            <span>🎯</span> Objetivo 3
        </div>
        <p class="text-sm">Aplicar <strong>hardening CIS Level 1</strong> en todos los servidores Linux mediante Ansible, eliminando el 100% de vulnerabilidades críticas y altas identificadas por OpenVAS en el escaneo inicial.</p>
    </div>
    <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
        <div class="callout-title">
            <span>🎯</span> Objetivo 4
        </div>
        <p class="text-sm">Establecer un <strong>plan de backups automatizados</strong> con cifrado AES-256, RPO &lt; 4 horas y RTO &lt; 2 horas, verificando la integridad de las copias mediante restauraciones de prueba semanales.</p>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Como alumno/a de ASIR, deberás:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Personalizar los datos de la empresa (nombre, ubicación, número de empleados)</li>
        <li>Ajustar los objetivos SMART para que sean específicos de tu implementación real</li>
        <li>Añadir más detalles técnicos sobre la infraestructura actual (modelos de switches, servidores, SO, etc.)</li>
        <li>Incluir un diagrama de red de la situación actual (puedes generarlo con draw.io)</li>
    </ul>
</div>
`;
