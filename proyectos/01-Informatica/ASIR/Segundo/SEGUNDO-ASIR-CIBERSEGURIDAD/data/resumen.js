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
        <p class="text-sm text-slate-600">Describe el sistema integral de ciberseguridad implementado y su alcance en la protección de la infraestructura corporativa.</p>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-2">🏢 ¿PARA QUIÉN?</h4>
        <p class="text-sm text-slate-600">Identifica el cliente/empresa ficticia, el sector al que pertenece y el contexto de negocio que motiva el proyecto.</p>
    </div>
    <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100">
        <h4 class="font-bold text-purple-800 mb-2">⚠️ ¿POR QUÉ?</h4>
        <p class="text-sm text-slate-600">Explica la problemática de seguridad que resuelve y las vulnerabilidades críticas detectadas en la infraestructura actual.</p>
    </div>
    <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
        <h4 class="font-bold text-orange-800 mb-2">🛠️ ¿CÓMO?</h4>
        <p class="text-sm text-slate-600">Menciona las herramientas y tecnologías principales: SIEM, IDS/IPS, firewall, cifrado, hardening, segmentación de red y políticas de seguridad.</p>
    </div>
</div>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span> Consejo de Redacción
    </div>
    <p>Escribe el resumen <strong>al final</strong>, cuando tengas todo el proyecto completado. Así podrás resumir con precisión lo que realmente has implementado.</p>
</div>

<h3>Estructura Sugerida para el Resumen</h3>
<p>Sigue este esquema para redactar tu resumen (300-400 palabras):</p>

<pre class="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-6"><code class="language-text">Párrafo 1: Contexto y Problemática (80-100 palabras)
├── Presentación de MediConnect Solutions
├── Sector: salud digital / telemedicina
└── Problemas: brechas de seguridad, malware, datos sensibles expuestos

Párrafo 2: Solución Propuesta (100-120 palabras)
├── Sistema Integral de Ciberseguridad
├── Componentes: Wazuh SIEM, pfSense, VLANs, OpenVAS, hardening Gnu/Linux
└── Tecnologías: ELK Stack, Suricata IDS, ClamAV, Ansible, OpenSSL

Párrafo 3: Resultados y Beneficios (100-120 palabras)
├── Objetivos alcanzados: detección en tiempo real, cumplimiento RGPD
├── Beneficios: reducción de incidentes, blindaje de infraestructura
└── Impacto: protección de datos de 8.000 pacientes con cifrado AES-256

Párrafo 4: Palabras Clave (5-8 términos)
└── Wazuh, pfSense, Suricata, VLAN, RGPD, Hardening, SIEM, Cifrado</code></pre>

<h3>Ejemplo de Resumen para tu Proyecto</h3>
<div class="callout callout-info">
    <div class="callout-title">
        <span>📄</span> Ejemplo: Sistema Integral de Ciberseguridad
    </div>
    <p class="text-sm text-slate-700">
        <strong>MediConnect Solutions</strong> es una clínica de telemedicina valenciana que atiende a más de 8.000 pacientes mensuales mediante consultas remotas y gestión digital de historiales clínicos. La infraestructura actual presentaba vulnerabilidades críticas: ausencia de segmentación de red, servidores sin hardening, carencia de un SIEM centralizado y políticas de backup inexistentes, exponiendo datos sensibles a posibles ataques y  sanciones por incumplimiento del RGPD.
        <br><br>
        Este proyecto implanta un <strong>Sistema Integral de Ciberseguridad</strong> basado en Wazuh como SIEM/HIDS centralizado para monitorización y detección de amenazas, pfSense como firewall perimetral con Suricata IDS/IPS, segmentación mediante VLANs por departamento, hardening de servidores Linux con CIS Benchmarks automatizado vía Ansible, y cifrado AES-256 para datos en reposo más TLS 1.3 en tránsito. Incluye además un plan de copias de seguridad automatizadas con RPO &lt; 4h.
        <br><br>
        Los resultados esperados incluyen detección de amenazas en menos de 60 segundos, cumplimiento completo del RGPD y ENS, reducción del 95% en incidentes de seguridad, y una infraestructura corporativa blindada frente a ataques externos e internos. El sistema permite además auditorías continuas y generación automática de informes de cumplimiento normativo.
        <br><br>
        <strong>Palabras clave:</strong> Wazuh, pfSense, Suricata, VLAN, RGPD, Hardening, SIEM, Cifrado AES-256, Ansible, CIS Benchmarks.
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
