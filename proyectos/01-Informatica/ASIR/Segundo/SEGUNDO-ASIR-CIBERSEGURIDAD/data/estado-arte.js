window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['estado-arte'] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🌐</span> Objetivo de esta Sección
    </div>
    <p>El Estado del Arte es una investigación sobre soluciones existentes en el mercado. Debes demostrar que conoces las alternativas antes de proponer tu solución.</p>
</div>

<h3>2.1. Soluciones SIEM del Mercado</h3>
<p>Investiga y compara las siguientes soluciones SIEM (Security Information and Event Management):</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold">Solución</th>
            <th class="p-4 text-left font-bold">Tipo</th>
            <th class="p-4 text-left font-bold">Precio</th>
            <th class="p-4 text-left font-bold">Puntos Fuertes</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">Wazuh</td>
            <td class="p-4">Open Source</td>
            <td class="p-4">Gratuito</td>
            <td class="p-4">HIDS, FIM, SCAP, correlación, integración ELK</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">Splunk</td>
            <td class="p-4">Comercial</td>
            <td class="p-4">Desde $150/mes</td>
            <td class="p-4">Machine Learning, dashboards potentes, comunidad grande</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">OSSIM (AlienVault)</td>
            <td class="p-4">Open Source</td>
            <td class="p-4">Gratuito / Desde $1.500/año</td>
            <td class="p-4">Todo en uno: SIEM, asset discovery, vulnerabilidades</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">ELK Stack</td>
            <td class="p-4">Open Source</td>
            <td class="p-4">Gratuito</td>
            <td class="p-4">Escalabilidad, visualización avanzada, búsqueda potente</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">Graylog</td>
            <td class="p-4">Open Source</td>
            <td class="p-4">Gratuito / Desde $4.000/año</td>
            <td class="p-4">Fácil de desplegar, pipelines de procesamiento</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>💡</span> Tarea de Investigación
    </div>
    <p>Amplía esta tabla con al menos 2 soluciones más. Justifica por qué Wazuh es la mejor opción para una PYME como MediConnect Solutions (coste, flexibilidad, comunidad activa).</p>
</div>

<h3>2.2. Soluciones de Firewall y IDS/IPS</h3>
<p>Comparativa de soluciones para protección perimetral:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold">Solución</th>
            <th class="p-4 text-left font-bold">Tipo</th>
            <th class="p-4 text-left font-bold">Precio</th>
            <th class="p-4 text-left font-bold">Características Clave</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">pfSense</td>
            <td class="p-4">Open Source</td>
            <td class="p-4">Gratuito</td>
            <td class="p-4">Firewall, VPN, Suricata IDS/IPS, VLAN, QoS, reporting</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">OPNsense</td>
            <td class="p-4">Open Source</td>
            <td class="p-4">Gratuito</td>
            <td class="p-4">Interfaz moderna, plugins, firewall stateful, IPS</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">Cisco ASA</td>
            <td class="p-4">Comercial</td>
            <td class="p-4">Desde $1.000</td>
            <td class="p-4">Enterprise, soporte Cisco, AnyConnect VPN</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">Fortinet FortiGate</td>
            <td class="p-4">Comercial</td>
            <td class="p-4">Desde $500</td>
            <td class="p-4">UTM, NGFW, SD-WAN, filtrado web</td>
        </tr>
    </tbody>
</table>

<h3>2.3. Estándares y Frameworks de Seguridad</h3>
<p>Investiga estos marcos de referencia y explica su aplicación al proyecto:</p>

<ul class="list-disc pl-6 space-y-3 my-6">
    <li><strong>CIS Controls v8:</strong> Conjunto de 18 controles de seguridad priorizados. Identifica cuáles aplicas en tu proyecto (Control 1: Inventario, Control 6: Gestión de logs, Control 10: Copias de seguridad).</li>
    <li><strong>CIS Benchmarks:</strong> Guías de hardening específicas por SO/aplicación. Debes aplicar el benchmark para Ubuntu Server 22.04 LTS.</li>
    <li><strong>RGPD (Reglamento General de Protección de Datos):</strong> Asegura el cumplimiento de los artículos 25 (Privacidad desde el diseño), 32 (Seguridad del tratamiento) y 33 (Notificación de violaciones).</li>
    <li><strong>ENS (Esquema Nacional de Seguridad):</strong> Real Decreto 311/2022. Define la política de seguridad y las medidas que debe implementar la administración y sus proveedores.</li>
    <li><strong>ISO/IEC 27001:</strong> Estándar internacional para SGSI. Aunque no se certificará, el proyecto debe alinearse con sus dominios de control.</li>
    <li><strong>NIST Cybersecurity Framework:</strong> Marco con 5 funciones: Identificar, Proteger, Detectar, Responder, Recuperar. Ideal para estructurar tu memoria.</li>
</ul>

<div class="callout callout-success">
    <div class="callout-title">
        <span>📚</span> Referencias Recomendadas
    </div>
    <p class="text-sm">Para completar esta sección, consulta:</p>
    <ul class="list-disc pl-6 space-y-1 mt-2 text-sm">
        <li>Documentación oficial de Wazuh: <code class="text-xs">https://documentation.wazuh.com</code></li>
        <li>CIS Benchmarks: <code class="text-xs">https://www.cisecurity.org/cis-benchmarks</code></li>
        <li>Guía de hardening de Ubuntu: <code class="text-xs">https://ubuntu.com/security/hardening</code></li>
        <li>RGPD: <code class="text-xs">https://www.aepd.es/politica-de-privacidad/reglamento-general-de-proteccion-de-datos</code></li>
    </ul>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Completa esta sección:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Añade al menos 3 capturas de pantalla de las herramientas investigadas</li>
        <li>Incluye una tabla comparativa con precios actualizados (consulta las webs oficiales)</li>
        <li>Redacta una conclusión sobre por qué la combinación Wazuh + pfSense + Ansible es la más adecuada para una PYME sanitaria</li>
        <li>Incluye referencias bibliográficas en formato APA</li>
    </ul>
</div>
`;
