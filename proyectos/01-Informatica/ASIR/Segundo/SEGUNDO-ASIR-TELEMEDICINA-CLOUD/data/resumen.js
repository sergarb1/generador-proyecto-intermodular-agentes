window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.resumen = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📋</span> Objetivo de esta Sección
    </div>
    <p>El resumen es la primera sección que lee el tribunal. Debe ser conciso pero completo, destacando lo más relevante de tu proyecto.</p>
</div>

<h3>Guía para Redactar el Resumen Ejecutivo</h3>
<p>Un buen resumen debe responder a estas preguntas:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-2">🎯 ¿QUÉ es el proyecto?</h4>
        <p class="text-sm text-slate-600">Describe brevemente la infraestructura desarrollada y su propósito principal.</p>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">🏢 ¿PARA QUIÉN?</h4>
        <p class="text-sm text-slate-600">Identifica el cliente/empresa ficticia y el sector de actividad.</p>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-2">⚠️ ¿POR QUÉ?</h4>
        <p class="text-sm text-slate-600">Explica la problemática que resuelve y por qué es necesaria esta solución.</p>
    </div>
    <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
        <h4 class="font-bold text-orange-800 mb-2">🛠️ ¿CÓMO?</h4>
        <p class="text-sm text-slate-600">Menciona las tecnologías principales y el enfoque de implementación.</p>
    </div>
</div>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span> Consejo de Redacción
    </div>
    <p>Escribe el resumen <strong>al final</strong>, cuando tengas todo el proyecto completado. Así podrás resumir con precisión lo que realmente has hecho.</p>
</div>

<h3>Estructura Sugerida para el Resumen</h3>
<p>Sigue este esquema para redactar tu resumen (300-400 palabras):</p>

<pre class="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-6"><code class="language-text">Párrafo 1: Contexto y Problemática (80-100 palabras)
├── Presentación de MediConnect Solutions
├── Sector: telemedicina / salud digital
└── Problemas: caídas de servicio, inseguridad, sin escalabilidad

Párrafo 2: Solución Propuesta (100-120 palabras)
├── Infraestructura Cloud Híbrida (Proxmox + Azure)
├── Componentes principales: VPN Site-to-Site, VLANs, Load Balancer
└── Tecnologías: pfSense, Proxmox VE, Azure VNet, VM Scale Sets

Párrafo 3: Resultados y Beneficios (100-120 palabras)
├── Objetivos alcanzados: 99.9% uptime, cifrado AES-256
├── Beneficios: reducción de caídas, cumplimiento RGPD
└── Impacto: 8.000 pacientes atendidos sin interrupciones

Párrafo 4: Palabras Clave (5-8 términos)
└── Proxmox, Azure, VPN, VLAN, RGPD, Alta Disponibilidad, etc.</code></pre>

<h3>Ejemplo de Resumen para tu Proyecto</h3>
<div class="callout callout-info">
    <div class="callout-title">
        <span>📄</span> Ejemplo: Infraestructura Cloud Híbrida
    </div>
    <p class="text-sm text-slate-700">
        <strong>MediConnect Solutions</strong> es una clínica de telemedicina ubicada en Valencia que da servicio a más de 8.000 pacientes mensuales mediante videoconsultas en tiempo real. La infraestructura actual sufría caídas semanales que interrumpían las consultas, los datos viajaban sin cifrar incumpliendo el RGPD, y el sistema no podía escalar durante picos de demanda por campañas de salud.
        <br><br>
        Este proyecto diseña e implementa una <strong>Infraestructura Cloud Híbrida</strong> que combina servidores locales Proxmox para datos críticos con Microsoft Azure para servicios públicos escalables. La solución incluye segmentación de red mediante VLANs, túnel <strong>VPN Site-to-Site IPsec</strong> para conexión segura, balanceo de carga con Azure Load Balancer, y auto-scaling mediante VM Scale Sets. Los datos sensibles se almacenan cifrados con <strong>AES-256</strong> en reposo y <strong>TLS 1.3</strong> en tránsito.
        <br><br>
        Los resultados esperados incluyen un <strong>uptime del 99.9%</strong> anual, reducción del 90% en incidentes por saturación, y cumplimiento completo del RGPD mediante cifrado de extremo a extremo y políticas de backup automatizadas con RPO &lt; 24h. La arquitectura híbrida permite soportar 5 veces el tráfico normal durante picos de demanda mediante escalado automático en menos de 5 minutos.
        <br><br>
        <strong>Palabras clave:</strong> Proxmox, Microsoft Azure, VPN Site-to-Site, VLAN, Alta Disponibilidad, RGPD, Telemedicina, Cifrado AES-256.
    </p>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Redacta tu resumen siguiendo estos criterios:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Extensión:</strong> 300-400 palabras (aproximadamente 1 página)</li>
        <li><strong>Estilo:</strong> Formal pero accesible, evita jerga técnica muy específica</li>
        <li><strong>Formato:</strong> Párrafos bien separados, usa negritas para conceptos clave</li>
        <li><strong>Palabras clave:</strong> 5-8 términos al final, separados por comas</li>
        <li><strong>Idioma:</strong> Puede incluir un resumen en inglés ("Abstract") si es relevante</li>
    </ul>
</div>
`;
