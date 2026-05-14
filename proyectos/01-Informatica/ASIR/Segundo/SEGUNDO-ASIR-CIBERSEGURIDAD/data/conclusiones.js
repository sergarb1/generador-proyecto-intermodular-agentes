window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.conclusiones = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🏁</span> Objetivo de esta Sección
    </div>
    <p>Las Conclusiones cierran el proyecto. Debes reflexionar sobre lo aprendido, los resultados obtenidos y las líneas de mejora futuras.</p>
</div>

<h3>9.1. Conclusiones Técnicas</h3>
<p>Al finalizar el proyecto, reflexiona sobre estos puntos:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <div class="callout-title">
            <span>✅</span> Objetivos Alcanzados
        </div>
        <ul class="list-disc pl-6 space-y-2 text-sm mt-3">
            <li>Firewall pfSense desplegado y configurado con Suricata IDS/IPS funcional</li>
            <li>Segmentación en 5 VLANs implementada en switches gestionables</li>
            <li>SIEM Wazuh operativo con agentes en todos los servidores críticos</li>
            <li>Hardening CIS Level 1 aplicado a servidores Ubuntu mediante Ansible</li>
            <li>OpenVAS realizando escaneos semanales automatizados</li>
            <li>Backups cifrados automatizados con RPO &lt; 4h y pruebas de restauración exitosas</li>
        </ul>
    </div>
    <div class="p-6 bg-yellow-50 rounded-2xl border border-yellow-100">
        <div class="callout-title">
            <span>⚠️</span> Dificultades Encontradas
        </div>
        <ul class="list-disc pl-6 space-y-2 text-sm mt-3">
            <li>Complejidad en la integración de Suricata en modo IPS (inline) con pfSense</li>
            <li>Ajuste fino de reglas del SIEM para evitar falsos positivos</li>
            <li>Rendimiento del firewall con todas las reglas de filtrado activas</li>
            <li>Compatibilidad de versiones entre Wazuh 4.x y ELK Stack 8.x</li>
            <li>Documenta aquí las dificultades reales que encontraste</li>
        </ul>
    </div>
</div>

<h3>9.2. Lecciones Aprendidas</h3>
<p>Documenta las lecciones más importantes que te llevas del proyecto:</p>
<ul class="list-disc pl-6 space-y-3 my-6">
    <li><strong>Seguridad por capas:</strong> Ninguna medida individual es suficiente. La combinación de firewall, IDS, SIEM y hardening crea una defensa en profundidad real.</li>
    <li><strong>Automatización es clave:</strong> Sin Ansible, aplicar hardening a múltiples servidores sería inviable. La infraestructura como código (IaC) es el futuro.</li>
    <li><strong>Monitorización continua:</strong> Más importante que prevenir es detectar a tiempo. Un buen SIEM cambia el paradigma de "confiar" a "verificar".</li>
    <li><strong>Cumplimiento normativo:</strong> La seguridad no es solo técnica, también es legal. Cumplir RGPD y ENS protege tanto los datos como a la organización.</li>
    <li><strong>Documentación:</strong> Sin una buena documentación, el mantenimiento del sistema es imposible. Cada configuración debe quedar registrada.</li>
</ul>

<h3>9.3. Trabajos Futuros</h3>
<p>Propuestas de mejora para continuar el proyecto:</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <span class="text-2xl block mb-2">☁️</span>
        <h4 class="font-bold text-blue-800 mb-2">Cloud Security</h4>
        <p class="text-sm text-slate-600">Extender la seguridad a la nube híbrida con AWS Security Hub o Azure Defender</p>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <span class="text-2xl block mb-2">🤖</span>
        <h4 class="font-bold text-purple-800 mb-2">SOAR</h4>
        <p class="text-sm text-slate-600">Automatizar respuesta a incidentes con Wazuh + TheHive + Cortex</p>
    </div>
    <div class="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
        <span class="text-2xl block mb-2">📊</span>
        <h4 class="font-bold text-indigo-800 mb-2">Ciberinteligencia</h4>
        <p class="text-sm text-slate-600">Integrar fuentes de Threat Intelligence (MISP, STIX/TAXII) en el SIEM</p>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Completa esta sección:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Escribe 2-3 párrafos de conclusión personal: ¿qué has aprendido como futuro técnico en ciberseguridad?</li>
        <li>Incluye una tabla comparativa del "Antes vs Después" del proyecto (estado inicial vs estado final)</li>
        <li>Añade métricas reales si las tienes: número de alertas detectadas, vulnerabilidades corregidas, tiempo de respuesta</li>
        <li>Propón al menos 3 mejoras concretas para una segunda fase del proyecto</li>
        <li>Incluye una reflexión sobre la ética profesional en ciberseguridad</li>
    </ul>
</div>
`;
