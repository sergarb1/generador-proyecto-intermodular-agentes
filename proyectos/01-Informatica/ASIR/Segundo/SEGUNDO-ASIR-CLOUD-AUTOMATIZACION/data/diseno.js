window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["diseno"] = `

<div class="callout callout-info">
    <div class="callout-title"><span>🎨</span><span>Diseño del Sistema</span></div>
    <p class="text-sm">En esta sección describes CÓMO vas a implementar los requisitos. Incluye diagramas, arquitecturas y decisiones técnicas justificadas.</p>
</div>

<h3>5.1. Arquitectura General del Sistema</h3>

<p>La arquitectura híbrida combina infraestructura cloud (AWS) y on-premise (Proxmox) conectadas mediante VPN segura.</p>

<div class="p-8 bg-slate-50 rounded-2xl border-2 border-slate-200 my-8">
    <h4 class="font-bold text-slate-700 mb-4 flex items-center gap-2"><span>📐</span>Diagrama de Arquitectura (Descripción)</h4>
    <p class="text-sm text-slate-600 mb-4">Debes crear un diagrama visual usando herramientas como <strong>draw.io</strong>, <strong>Lucidchart</strong> o <strong>Excalidraw</strong>. La arquitectura debe incluir:</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 bg-white rounded-xl border border-slate-200">
            <h5 class="font-bold text-blue-700 mb-2 text-sm">☁️ Capa Cloud (AWS)</h5>
            <ul class="text-xs space-y-1 text-slate-600">
                <li>• VPC con subnets públicas y privadas</li>
                <li>• Application Load Balancer</li>
                <li>• EC2 instances (auto-scaling group)</li>
                <li>• S3 bucket para backups</li>
                <li>• RDS para datos no críticos</li>
                <li>• NAT Gateway para salida a Internet</li>
            </ul>
        </div>
        <div class="p-4 bg-white rounded-xl border border-slate-200">
            <h5 class="font-bold text-green-700 mb-2 text-sm">🏢 Capa Local (Proxmox)</h5>
            <ul class="text-xs space-y-1 text-slate-600">
                <li>• VM PostgreSQL (datos sensibles)</li>
                <li>• VM Active Directory / LDAP</li>
                <li>• VM Proxy inverso (Nginx)</li>
                <li>• LXC para monitorización</li>
                <li>• Firewall pfSense/OPNsense</li>
            </ul>
        </div>
    </div>
</div>

<h3>5.2. Diseño de Red</h3>

<h4>5.2.1. Esquema de Direccionamiento IP</h4>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Segmento</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Red CIDR</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Uso</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">VLAN</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">AWS VPC</td>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm">10.0.0.0/16</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Infraestructura cloud completa</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">N/A</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Subnet Pública</td>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm">10.0.1.0/24</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">ALB, NAT Gateway, Bastion</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">N/A</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Subnet Privada</td>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm">10.0.2.0/24</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">EC2 applications, RDS</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">N/A</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Red Local</td>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm">192.168.10.0/24</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Servidores Proxmox</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">VLAN 10</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Red Gestión</td>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm">192.168.20.0/24</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Administración (IPMI, iDRAC)</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">VLAN 20</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Túnel VPN</td>
            <td class="border border-slate-300 px-4 py-3 font-mono text-sm">172.16.0.0/30</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Conexión punto a punto</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">N/A</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title"><span>⚠️</span><span>Importante</span></div>
    <p class="text-sm m-0">Asegúrate de que los rangos IP de AWS y local <strong>no se solapen</strong>. Esto es crítico para que la VPN funcione correctamente.</p>
</div>

<h4>5.2.2. Configuración VPN Site-to-Site</h4>

<p>Para conectar AWS con el CPD local, se utilizará <strong>IPSec</strong> mediante OpenVPN o StrongSwan.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-5 bg-blue-50 rounded-xl border border-blue-200">
        <h5 class="font-bold text-blue-800 mb-3 flex items-center gap-2"><span>🔧</span>OpenVPN</h5>
        <ul class="text-sm space-y-2 text-slate-700">
            <li>✓ Más fácil de configurar</li>
            <li>✓ Funciona detrás de NAT</li>
            <li>✓ Gran comunidad</li>
            <li>✗ Overhead ligeramente mayor</li>
        </ul>
    </div>
    <div class="p-5 bg-green-50 rounded-xl border border-green-200">
        <h5 class="font-bold text-green-800 mb-3 flex items-center gap-2"><span>🔐</span>StrongSwan (IPSec)</h5>
        <ul class="text-sm space-y-2 text-slate-700">
            <li>✓ Estándar enterprise</li>
            <li>✓ Menor overhead</li>
            <li>✓ Hardware acceleration</li>
            <li>✗ Configuración más compleja</li>
        </ul>
    </div>
</div>

<h3>5.3. Diseño de la Base de Datos</h3>

<p>Los datos se distribuyen según su sensibilidad:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Tipo de Dato</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Ubicación</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Justificación</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Cifrado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 text-sm">Historias clínicas</td>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">Local (PostgreSQL)</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">RGPD - Datos categoría especial</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">AES-256 en reposo</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 text-sm">Credenciales usuarios</td>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">Local (LDAP)</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Autenticación soberana</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">bcrypt + TLS</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 text-sm">Imágenes médicas</td>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">AWS S3</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Anonimizadas, sin datos personales</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">SSE-S3</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 text-sm">Logs de aplicación</td>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">AWS CloudWatch</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Escalabilidad y análisis</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">TLS en tránsito</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 text-sm">Backups históricos</td>
            <td class="border border-slate-300 px-4 py-3 font-semibold text-sm">AWS S3 Glacier</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Bajo coste, recuperación lenta</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">AES-256</td>
        </tr>
    </tbody>
</table>

<h3>5.4. Pila Tecnológica Completa</h3>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
    <div class="p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200 text-center">
        <span class="text-3xl mb-2 block">☁️</span>
        <h5 class="font-bold text-orange-800 text-sm">Cloud</h5>
        <p class="text-xs text-slate-600 mt-1">AWS EC2, S3, RDS, VPC</p>
    </div>
    <div class="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 text-center">
        <span class="text-3xl mb-2 block">🖥️</span>
        <h5 class="font-bold text-green-800 text-sm">Virtualización</h5>
        <p class="text-xs text-slate-600 mt-1">Proxmox VE 8.x</p>
    </div>
    <div class="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 text-center">
        <span class="text-3xl mb-2 block">🐍</span>
        <h5 class="font-bold text-blue-800 text-sm">Automatización</h5>
        <p class="text-xs text-slate-600 mt-1">Python 3.11, Bash 5.x</p>
    </div>
    <div class="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 text-center">
        <span class="text-3xl mb-2 block">📊</span>
        <h5 class="font-bold text-purple-800 text-sm">Monitorización</h5>
        <p class="text-xs text-slate-600 mt-1">Prometheus + Grafana</p>
    </div>
    <div class="p-4 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl border border-red-200 text-center">
        <span class="text-3xl mb-2 block">🔒</span>
        <h5 class="font-bold text-red-800 text-sm">Seguridad</h5>
        <p class="text-xs text-slate-600 mt-1">OpenVPN, UFW, Fail2Ban</p>
    </div>
    <div class="p-4 bg-gradient-to-br from-cyan-50 to-sky-50 rounded-xl border border-cyan-200 text-center">
        <span class="text-3xl mb-2 block">🗄️</span>
        <h5 class="font-bold text-cyan-800 text-sm">Base de Datos</h5>
        <p class="text-xs text-slate-600 mt-1">PostgreSQL 15, MySQL 8</p>
    </div>
    <div class="p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl border border-yellow-200 text-center">
        <span class="text-3xl mb-2 block">🌐</span>
        <h5 class="font-bold text-yellow-800 text-sm">Web Server</h5>
        <p class="text-xs text-slate-600 mt-1">Nginx, Apache</p>
    </div>
    <div class="p-4 bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl border border-slate-200 text-center">
        <span class="text-3xl mb-2 block">📦</span>
        <h5 class="font-bold text-slate-800 text-sm">Control Versiones</h5>
        <p class="text-xs text-slate-600 mt-1">Git + GitHub</p>
    </div>
</div>

<h3>5.5. Plan de Implementación por Fases</h3>

<div class="relative my-8">
    <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500"></div>
    <div class="space-y-8">
        <div class="relative pl-12">
            <div class="absolute left-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">1</div>
            <h4 class="font-bold text-slate-800 mb-2">Fase 1: Infraestructura Base (Semana 1-2)</h4>
            <ul class="text-sm text-slate-600 space-y-1">
                <li>→ Configurar VPC y subnets en AWS</li>
                <li>→ Desplegar instancia EC2 bastión</li>
                <li>→ Instalar Proxmox en servidor local</li>
                <li>→ Crear VMs base en Proxmox</li>
            </ul>
        </div>
        <div class="relative pl-12">
            <div class="absolute left-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">2</div>
            <h4 class="font-bold text-slate-800 mb-2">Fase 2: Conectividad (Semana 3)</h4>
            <ul class="text-sm text-slate-600 space-y-1">
                <li>→ Configurar VPN site-to-site</li>
                <li>→ Establecer reglas de firewall</li>
                <li>→ Probar conectividad bidireccional</li>
                <li>→ Configurar routing estático</li>
            </ul>
        </div>
        <div class="relative pl-12">
            <div class="absolute left-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">3</div>
            <h4 class="font-bold text-slate-800 mb-2">Fase 3: Servicios (Semana 4-5)</h4>
            <ul class="text-sm text-slate-600 space-y-1">
                <li>→ Desplegar aplicación web en EC2</li>
                <li>→ Configurar base de datos local</li>
                <li>→ Implementar proxy inverso</li>
                <li>→ Configurar SSL/TLS</li>
            </ul>
        </div>
        <div class="relative pl-12">
            <div class="absolute left-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">4</div>
            <h4 class="font-bold text-slate-800 mb-2">Fase 4: Automatización (Semana 6)</h4>
            <ul class="text-sm text-slate-600 space-y-1">
                <li>→ Desarrollar scripts de backup</li>
                <li>→ Configurar cron jobs</li>
                <li>→ Implementar monitorización</li>
                <li>→ Crear dashboards Grafana</li>
            </ul>
        </div>
        <div class="relative pl-12">
            <div class="absolute left-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">5</div>
            <h4 class="font-bold text-slate-800 mb-2">Fase 5: Testing y Documentación (Semana 7-8)</h4>
            <ul class="text-sm text-slate-600 space-y-1">
                <li>→ Pruebas de estrés y carga</li>
                <li>→ Pruebas de recuperación ante desastres</li>
                <li>→ Redactar documentación técnica</li>
                <li>→ Preparar presentación final</li>
            </ul>
        </div>
    </div>
</div>

<div class="callout callout-info">
    <div class="callout-title"><span>🎯</span><span>Consejo de Diseño</span></div>
    <p class="text-sm m-0">Incluye al menos <strong>3 diagramas visuales</strong> en tu memoria: arquitectura general, diagrama de red y flujo de datos. Usa colores consistentes y una leyenda clara.</p>
</div>

`;
