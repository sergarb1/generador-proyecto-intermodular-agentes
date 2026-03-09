window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.diseno = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🎨</span> Objetivo de esta Sección
    </div>
    <p>Aquí definirás <strong>cómo será tu infraestructura</strong> antes de implementar. Un buen diseño previene errores costosos y facilita la implementación.</p>
</div>

<h3>5.1. Guía para la Arquitectura de Red</h3>
<p>La arquitectura de red es el plano fundamental de tu infraestructura. Para un diseño híbrido como el de MediConnect:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span> Consejo Pedagógico
    </div>
    <p>Dibuja tu arquitectura de red <strong>antes de configurar nada</strong>. Usa herramientas como draw.io, Lucidchart o incluso papel y lápiz.</p>
</div>

<h4>Componentes a Identificar</h4>
<p>Para tu proyecto, identifica y documenta cada capa de la arquitectura:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Capa</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Preguntas Guía</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Ejemplos</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Red Local (On-Premise)</td>
            <td class="p-4 border border-slate-200 text-sm">¿Qué servidores hay? ¿Cómo se segmenta?</td>
            <td class="p-4 border border-slate-200 text-sm">Proxmox, pfSense, VLANs, NAS</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Conexión Segura</td>
            <td class="p-4 border border-slate-200 text-sm">¿Cómo se conectan ambas redes?</td>
            <td class="p-4 border border-slate-200 text-sm">VPN Site-to-Site IPsec, Azure VPN Gateway</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Cloud Público (Azure)</td>
            <td class="p-4 border border-slate-200 text-sm">¿Qué servicios en la nube? ¿Cómo se organizan?</td>
            <td class="p-4 border border-slate-200 text-sm">VNet, Subnets, VMs, Load Balancer, CDN</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Seguridad Perimetral</td>
            <td class="p-4 border border-slate-200 text-sm">¿Cómo se protege el perímetro?</td>
            <td class="p-4 border border-slate-200 text-sm">Firewall, NSG, WAF, DDoS Protection</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Actividad Práctica
    </div>
    <p>Crea un <strong>diagrama de arquitectura de red</strong> que muestre:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Todos los dispositivos de red (firewall, switches, routers)</li>
        <li>Las VLANs con sus IDs y rangos de IP</li>
        <li>La conexión VPN (con protocolo de cifrado)</li>
        <li>Los servidores locales (Proxmox, NAS, etc.)</li>
        <li>Los recursos en Azure (VNet, subnets, VMs, servicios)</li>
        <li>Las reglas de firewall principales (puertos abiertos/cerrados)</li>
    </ul>
    <p class="mt-3">Incluye el diagrama como imagen en esta sección y explica cada componente.</p>
</div>

<h3>5.2. Guía para la Segmentación de Red (VLANs)</h3>
<p>La segmentación mediante VLANs mejora la seguridad y el rendimiento:</p>

<h4>Plantilla de Diseño de VLANs</h4>
<p>Completa la siguiente tabla con las VLANs de tu proyecto:</p>

<pre class="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-6"><code class="language-text">┌───────────┬──────────────────────┬─────────────────┬──────────────────┬─────────────────────┐
│ VLAN ID   │ Nombre               │ Rango IP        │ Propósito        │ Dispositivos        │
├───────────┼──────────────────────┼─────────────────┼──────────────────┼─────────────────────┤
│ 10        │ VLAN_MANAGEMENT      │ 10.10.10.0/24   │ Gestión infra    │ Proxmox, iLO, IPMI  │
│ 20        │ VLAN_DATOS_MEDICOS   │ 10.10.20.0/24   │ Historias clíni. │ NAS, DB Server      │
│ 30        │ VLAN_VIDEOCONSULTA   │ 10.10.30.0/24   │ Video streaming  │ Servidores RTMP     │
│ 40        │ VLAN_INVITADOS       │ 10.10.40.0/24   │ WiFi pacientes   │ APs WiFi (aislada)  │
│ 50        │ VLAN_BACKUP          │ 10.10.50.0/24   │ Tráfico backups  │ Backup server, NAS  │
├───────────┼──────────────────────┼─────────────────┼──────────────────┼─────────────────────┤
│ 100       │ AZURE_VNET_MAIN      │ 172.16.0.0/16   │ Red virtual Azure│ Subnets múltiples   │
└───────────┴──────────────────────┴─────────────────┴──────────────────┴─────────────────────┘</code></pre>

<div class="callout callout-info">
    <div class="callout-title">
        <span>🔒</span> Consideraciones de Seguridad
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Aislamiento:</strong> Las VLANs no deben comunicarse entre sí sin pasar por el firewall</li>
        <li><strong>Reglas estrictas:</strong> Solo permite el tráfico necesario (principio de mínimo privilegio)</li>
        <li><strong>VLAN de gestión:</strong> Nunca expongas la VLAN de management a Internet</li>
        <li><strong>Documentación:</strong> Mantén un inventario actualizado de qué dispositivo está en cada VLAN</li>
    </ul>
</div>

<h3>5.3. Guía para el Diseño de Almacenamiento</h3>
<p>El almacenamiento de datos médicos requiere especial atención por su sensibilidad y volumen:</p>

<h4>Opciones de Almacenamiento para Considerar</h4>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">💾 Almacenamiento Local (NAS)</h4>
        <p class="text-sm text-slate-600 mb-3">Para datos críticos que deben estar on-premise:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>RAID 6 o RAID 10 para redundancia</li>
            <li>Cifrado de discos completos (LUKS)</li>
            <li>Snapshots automáticos cada 4 horas</li>
            <li>Capacidad: 50 TB iniciales</li>
        </ul>
    </div>
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">☁️ Azure Blob Storage</h4>
        <p class="text-sm text-slate-600 mb-3">Para backups y archivos menos críticos:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>Hot tier: acceso frecuente</li>
            <li>Cool tier: backups a 30+ días</li>
            <li>Archive tier: retención legal larga</li>
            <li>Geo-redundancia (GRS) activada</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">🔄 Almacenamiento Híbrido</h4>
        <p class="text-sm text-slate-600 mb-3">Combinación de ambos enfoques:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>Local: datos activos (últimos 2 años)</li>
            <li>Cloud: histórico y backups</li>
            <li>Sincronización automática</li>
            <li>Política de retención 20 años</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📋</span> Tarea para el Alumnado
    </div>
    <p>Para tu proyecto, diseña el sistema de almacenamiento incluyendo:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Niveles RAID:</strong> Justifica tu elección (RAID 5, 6, 10, etc.)</li>
        <li><strong>Cifrado:</strong> Qué algoritmo usarás (AES-256, LUKS, BitLocker)</li>
        <li><strong>Política de backups:</strong> Frecuencia, tipo (completo/incremental), retención</li>
        <li><strong>Ubicación:</strong> Qué datos van on-premise y cuáles a la nube</li>
        <li><strong>Presupuesto:</strong> Coste estimado del almacenamiento mensual</li>
    </ul>
</div>

<h3>5.4. Guía para el Diseño de Seguridad</h3>
<p>La seguridad es crítica en proyectos de telemedicina por los datos sensibles manejados:</p>

<h4>Capas de Seguridad a Implementar</h4>
<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Capa</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Medidas</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Herramientas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Perímetro</td>
            <td class="p-4 border border-slate-200 text-sm">Firewall, VPN, DDoS protection</td>
            <td class="p-4 border border-slate-200 text-sm">pfSense, Azure Firewall, Cloudflare</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Red</td>
            <td class="p-4 border border-slate-200 text-sm">Segmentación VLAN, NSG, ACLs</td>
            <td class="p-4 border border-slate-200 text-sm">pfSense reglas, Azure NSG</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Host</td>
            <td class="p-4 border border-slate-200 text-sm">Hardening, antivirus, actualizaciones</td>
            <td class="p-4 border border-slate-200 text-sm">Lynis, ClamAV, WSUS</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Aplicación</td>
            <td class="p-4 border border-slate-200 text-sm">WAF, validación de inputs, logging</td>
            <td class="p-4 border border-slate-200 text-sm">Azure WAF, ModSecurity</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Datos</td>
            <td class="p-4 border border-slate-200 text-sm">Cifrado en reposo y tránsito</td>
            <td class="p-4 border border-slate-200 text-sm">AES-256, TLS 1.3, Let's Encrypt</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Acceso</td>
            <td class="p-4 border border-slate-200 text-sm">Autenticación fuerte, MFA, SSO</td>
            <td class="p-4 border border-slate-200 text-sm">Azure AD, Authy, YubiKey</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📚</span> Recursos para Investigar
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Azure Security Benchmark:</strong> https://docs.microsoft.com/es-es/security/benchmark/azure/</li>
        <li><strong>CIS Benchmarks:</strong> https://www.cisecurity.org/cis-benchmarks/</li>
        <li><strong>OWASP Top 10:</strong> https://owasp.org/www-project-top-ten/</li>
        <li><strong>Guías AEPD:</strong> https://www.aepd.es/es/guias-y-herramientas</li>
    </ul>
</div>

<h3>5.5. Guía para el Diseño de Alta Disponibilidad</h3>
<p>Para garantizar el 99.9% de uptime requerido:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-2">🔄 Load Balancing</h4>
        <p class="text-sm text-slate-600 mb-3">Distribuye el tráfico entre múltiples servidores:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>Azure Load Balancer (capa 4)</li>
            <li>Azure Application Gateway (capa 7)</li>
            <li>HAProxy on-premise</li>
            <li>Health checks cada 30 segundos</li>
        </ul>
    </div>
    <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
        <h4 class="font-bold text-orange-800 mb-2">🔁 Failover Automático</h4>
        <p class="text-sm text-slate-600 mb-3">Recuperación ante fallos de hardware:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>Proxmox HA para VMs críticas</li>
            <li>Azure Availability Sets</li>
            <li>Azure Availability Zones (si disponible)</li>
            <li>Failover clustering para bases de datos</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">📊 Auto-Scaling</h4>
        <p class="text-sm text-slate-600 mb-3">Escalado automático según demanda:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>Azure VM Scale Sets</li>
            <li>Reglas basadas en CPU (>80%)</li>
            <li>Reglas basadas en memoria (>85%)</li>
            <li>Escalado horizontal (más instancias)</li>
        </ul>
    </div>
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">💾 Backup y Recovery</h4>
        <p class="text-sm text-slate-600 mb-3">Copias de seguridad automatizadas:</p>
        <ul class="list-disc pl-6 space-y-1 text-xs text-slate-500">
            <li>Azure Backup para VMs</li>
            <li>Proxmox Backup Server</li>
            <li>Backups incrementales diarios</li>
            <li>Test de restauración trimestral</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Actividad Práctica
    </div>
    <p>Para tu diseño de alta disponibilidad:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Calcula el uptime teórico de tu arquitectura (multiplica uptime de cada componente)</li>
        <li>Define RTO (Recovery Time Objective) y RPO (Recovery Point Objective)</li>
        <li>Diseña un plan de failover: ¿qué pasa si falla X componente?</li>
        <li>Documenta cómo monitorizarás la disponibilidad</li>
    </ul>
</div>
`;
