window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.implementacion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>💻</span> Objetivo de esta Sección
    </div>
    <p>Documentarás <strong>cómo has construido la infraestructura</strong>. No se trata de pegar todo el output, sino de explicar los hitos importantes, problemas resueltos y configuraciones clave.</p>
</div>

<h3>6.1. Guía para el Diario de Implementación</h3>
<p>Un diario de implementación documenta los pasos que has seguido para montar la infraestructura:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span> Consejo Pedagógico
    </div>
    <p>Empieza este diario <strong>el primer día</strong> de implementación. Te será muy útil cuando tengas que explicar tu proyecto ante el tribunal y para crear el manual de procedimientos.</p>
</div>

<h4>Fases de Implementación para Documentar</h4>
<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Fase</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Tareas Principales</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Entregables</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">1. Preparación</td>
            <td class="p-4 border border-slate-200 text-sm">Instalar Proxmox, configurar red básica</td>
            <td class="p-4 border border-slate-200 text-sm">Screenshot del dashboard Proxmox</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">2. Firewall/pfSense</td>
            <td class="p-4 border border-slate-200 text-sm">Configurar interfaces, reglas, NAT</td>
            <td class="p-4 border border-slate-200 text-sm">Captura de reglas de firewall</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">3. VLANs</td>
            <td class="p-4 border border-slate-200 text-sm">Crear VLANs, asignar puertos, configurar trunk</td>
            <td class="p-4 border border-slate-200 text-sm">Diagrama de red con VLANs</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">4. VPN Site-to-Site</td>
            <td class="p-4 border border-slate-200 text-sm">Configurar IPsec en pfSense y Azure VPN Gateway</td>
            <td class="p-4 border border-slate-200 text-sm">Captura del túnel "Up"</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">5. Azure VNet</td>
            <td class="p-4 border border-slate-200 text-sm">Crear VNet, subnets, NSGs, VMs</td>
            <td class="p-4 border border-slate-200 text-sm">Captura del portal Azure</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">6. Load Balancer</td>
            <td class="p-4 border border-slate-200 text-sm">Configurar Azure Load Balancer o Application Gateway</td>
            <td class="p-4 border border-slate-200 text-sm">Captura de reglas de balanceo</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">7. VM Scale Sets</td>
            <td class="p-4 border border-slate-200 text-sm">Configurar auto-scaling rules</td>
            <td class="p-4 border border-slate-200 text-sm">Captura de reglas de escalado</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">8. Backups</td>
            <td class="p-4 border border-slate-200 text-sm">Configurar Proxmox Backup Server o Azure Backup</td>
            <td class="p-4 border border-slate-200 text-sm">Política de backups configurada</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">9. Monitorización</td>
            <td class="p-4 border border-slate-200 text-sm">Instalar Prometheus/Grafana o Azure Monitor</td>
            <td class="p-4 border border-slate-200 text-sm">Dashboard de monitorización</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">10. Testing</td>
            <td class="p-4 border border-slate-200 text-sm">Pruebas de conectividad, failover, carga</td>
            <td class="p-4 border border-slate-200 text-sm">Informe de tests realizados</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Actividad Práctica
    </div>
    <p>Para cada fase de implementación, documenta:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Objetivo de la fase:</strong> ¿Qué quieres conseguir?</li>
        <li><strong>Comandos/configuración:</strong> Los pasos clave (no todo, solo lo relevante)</li>
        <li><strong>Capturas de pantalla:</strong> Evidencia visual de que funciona</li>
        <li><strong>Problemas encontrados:</strong> Qué salió mal y cómo lo solucionaste</li>
        <li><strong>Tiempo estimado:</strong> Cuánto tardaste en esta fase</li>
    </ul>
</div>

<h3>6.2. Guía para Configuraciones Clave</h3>
<p>Documenta las configuraciones más importantes de tu infraestructura:</p>

<h4>Ejemplo: Configuración de VPN IPsec en pfSense</h4>
<pre class="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-6"><code class="language-text">Fase 1 (IKEv2):
- Authentication Method: EAP-MSCHAPv2
- Encryption Algorithm: AES-256-GCM
- DH Group: 21 (521-bit)
- Lifetime: 28800 seconds

Fase 2 (IPsec):
- Protocol: ESP
- Encryption: AES-256-GCM
- PFS: Group 21
- Lifetime: 3600 seconds

Remote Network: 172.16.0.0/16 (Azure VNet)
Local Network: 10.10.0.0/16 (Red local)</code></pre>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📋</span> Configuraciones a Documentar
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Configuración de VLANs en pfSense/switch</li>
        <li>Reglas de firewall (las más importantes)</li>
        <li>Configuración de la VPN (Fase 1 y Fase 2)</li>
        <li>Reglas del Load Balancer</li>
        <li>Políticas de auto-scaling</li>
        <li>Configuración de backups (qué, cuándo, dónde)</li>
    </ul>
</div>

<h3>6.3. Guía para Testing y Verificación</h3>
<p>Demuestra que tu infraestructura funciona correctamente:</p>

<h4>Tests a Realizar</h4>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">✅ Test de Conectividad</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Ping entre red local y Azure (10.10.x.x ↔ 172.16.x.x)</li>
            <li>Traceroute para verificar ruta</li>
            <li>Test de resolución DNS</li>
            <li>Acceso a servicios web (HTTP/HTTPS)</li>
        </ul>
    </div>
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">✅ Test de Seguridad</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Escaneo de puertos (nmap) para verificar firewall</li>
            <li>Test de velocidad VPN (iperf3)</li>
            <li>Verificación de cifrado (SSL Labs test)</li>
            <li>Intento de acceso no autorizado (debe fallar)</li>
        </ul>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-2">✅ Test de Rendimiento</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Test de carga con múltiples usuarios simultáneos</li>
            <li>Medición de latencia en videollamadas</li>
            <li>Throughput de red (ancho de banda real)</li>
            <li>Tiempo de respuesta de aplicaciones</li>
        </ul>
    </div>
    <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
        <h4 class="font-bold text-orange-800 mb-2">✅ Test de Failover</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Apagar una VM y verificar que otra toma el relevo</li>
            <li>Cortar conexión VPN y verificar reconexión automática</li>
            <li>Simular fallo de disco y verificar RAID</li>
            <li>Restaurar backup y verificar integridad</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📊</span> Tarea para el Alumnado
    </div>
    <p>Crea una tabla de resultados de testing:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Nombre del test</li>
        <li>Fecha de realización</li>
        <li>Resultado esperado vs. resultado real</li>
        <li>¿Aprobado o fallido?</li>
        <li>Acciones correctivas (si falló)</li>
    </ul>
</div>
`;
