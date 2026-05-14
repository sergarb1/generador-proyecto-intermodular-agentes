window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.requisitos = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📋</span> Objetivo de esta Sección
    </div>
    <p>El Análisis de Requisitos define qué debe hacer el sistema. Debes diferenciar entre requisitos funcionales (lo que hace) y no funcionales (cómo lo hace).</p>
</div>

<h3>4.1. Requisitos Funcionales</h3>
<p>Define los requisitos usando verbos de acción. Cada requisito debe ser específico, medible y verificable.</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold">ID</th>
            <th class="p-4 text-left font-bold">Requisito</th>
            <th class="p-4 text-left font-bold">Prioridad</th>
            <th class="p-4 text-left font-bold">Verificación</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-mono text-xs">RF-01</td>
            <td class="p-4">El firewall debe filtrar el tráfico por puerto, protocolo e IP origen/destino</td>
            <td class="p-4"><span class="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">Crítica</span></td>
            <td class="p-4">Pruebas de conectividad con iperf3 y nmap</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-mono text-xs">RF-02</td>
            <td class="p-4">El IDS/IPS debe detectar y bloquear patrones de ataque conocidos en tiempo real</td>
            <td class="p-4"><span class="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">Crítica</span></td>
            <td class="p-4">Simulación de ataques con Metasploit</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-mono text-xs">RF-03</td>
            <td class="p-4">El SIEM debe centralizar logs de todos los servidores y dispositivos de red</td>
            <td class="p-4"><span class="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold">Alta</span></td>
            <td class="p-4">Comprobar datos en Kibana dashboards</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-mono text-xs">RF-04</td>
            <td class="p-4">El sistema debe segmentar la red en al menos 4 VLANs con políticas de acceso diferenciadas</td>
            <td class="p-4"><span class="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">Crítica</span></td>
            <td class="p-4">Verificar aislamiento entre VLANs con ping</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-mono text-xs">RF-05</td>
            <td class="p-4">El sistema debe realizar escaneos de vulnerabilidades automatizados semanalmente</td>
            <td class="p-4"><span class="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold">Alta</span></td>
            <td class="p-4">Verificar informes generados por OpenVAS</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-mono text-xs">RF-06</td>
            <td class="p-4">Las copias de seguridad deben automatizarse con cifrado y verificación de integridad</td>
            <td class="p-4"><span class="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">Crítica</span></td>
            <td class="p-4">Restauración de prueba exitosa</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-mono text-xs">RF-07</td>
            <td class="p-4">El acceso remoto de los médicos debe realizarse mediante VPN con autenticación multifactor</td>
            <td class="p-4"><span class="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold">Alta</span></td>
            <td class="p-4">Prueba de conexión VPN + 2FA</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-mono text-xs">RF-08</td>
            <td class="p-4">El sistema debe generar alertas de seguridad en tiempo real por email y dashboard</td>
            <td class="p-4"><span class="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold">Alta</span></td>
            <td class="p-4">Configurar regla de correlación y probar</td>
        </tr>
    </tbody>
</table>

<h3>4.2. Requisitos No Funcionales</h3>
<p>Define las propiedades del sistema (rendimiento, seguridad, disponibilidad):</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-3">🔒 Seguridad</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li><strong>RNF-SEG-01:</strong> Cifrado AES-256 para datos en reposo</li>
            <li><strong>RNF-SEG-02:</strong> TLS 1.3 para comunicaciones en red</li>
            <li><strong>RNF-SEG-03:</strong> Autenticación SSH por clave pública, no contraseña</li>
            <li><strong>RNF-SEG-04:</strong> Política de contraseñas: mínimo 12 caracteres, complejidad alta</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-3">⚡ Rendimiento</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li><strong>RNF-RND-01:</strong> Latencia de red entre VLANs &lt; 2ms</li>
            <li><strong>RNF-RND-02:</strong> Throughput del firewall &gt; 1 Gbps</li>
            <li><strong>RNF-RND-03:</strong> Tiempo de detección de amenazas &lt; 60 seg</li>
            <li><strong>RNF-RND-04:</strong> Dashboard SIEM carga en &lt; 3 segundos</li>
        </ul>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-3">📦 Disponibilidad</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li><strong>RNF-DIS-01:</strong> Uptime del firewall &gt; 99.9%</li>
            <li><strong>RNF-DIS-02:</strong> RPO (Recovery Point Objective) &lt; 4 horas</li>
            <li><strong>RNF-DIS-03:</strong> RTO (Recovery Time Objective) &lt; 2 horas</li>
            <li><strong>RNF-DIS-04:</strong> Mantenimiento programado en ventana nocturna</li>
        </ul>
    </div>
    <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
        <h4 class="font-bold text-orange-800 mb-3">📋 Cumplimiento</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li><strong>RNF-CUM-01:</strong> Cumplir RGPD art. 25, 32 y 33</li>
            <li><strong>RNF-CUM-02:</strong> Alinearse con ENS nivel MEDIO</li>
            <li><strong>RNF-CUM-03:</strong> Seguir CIS Benchmarks Level 1</li>
            <li><strong>RNF-CUM-04:</strong> Generar informes de auditoría automáticos</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Completa esta sección:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Añade al menos 5 requisitos funcionales más</li>
        <li>Define requisitos de integración con sistemas existentes</li>
        <li>Incluye una matriz de trazabilidad (requisito ↔ módulo del sistema)</li>
        <li>Para cada requisito no funcional, especifica cómo se medirá y qué herramienta de test se usará</li>
        <li>Define el protocolo de aceptación del proyecto: ¿quién firma el acta de conformidad?</li>
    </ul>
</div>
`;
