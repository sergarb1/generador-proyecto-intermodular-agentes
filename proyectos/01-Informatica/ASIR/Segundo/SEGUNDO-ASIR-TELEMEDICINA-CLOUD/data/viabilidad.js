window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.viabilidad = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📈</span> Objetivo de esta Sección
    </div>
    <p>La viabilidad demuestra que tu proyecto es realista y sostenible desde múltiples perspectivas: técnica, económica y operativa.</p>
</div>

<h3>3.1. Guía para el Análisis DAFO y CAME</h3>
<p>El análisis DAFO (Debilidades, Amenazas, Fortalezas, Oportunidades) evalúa la viabilidad estratégica. Deriva estrategias CAME:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span> Consejo Pedagógico
    </div>
    <p>El DAFO no es solo una lista: úsalo para derivar estrategias CAME (Corregir, Afrontar, Mantener, Explotar).</p>
</div>

<h4>Plantilla de Estrategias CAME</h4>
<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Estrategia</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Propósito</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Preguntas Guía</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Ejemplo para MediConnect</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Corregir Debilidades</td>
            <td class="p-4 border border-slate-200 text-sm">Minimizar factores internos negativos</td>
            <td class="p-4 border border-slate-200 text-sm">¿Qué puedo mejorar internamente?</td>
            <td class="p-4 border border-slate-200 text-sm">Formación en Azure (certificación AZ-104)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Afrontar Amenazas</td>
            <td class="p-4 border border-slate-200 text-sm">Contrarrestar factores externos negativos</td>
            <td class="p-4 border border-slate-200 text-sm">¿Cómo me protejo de riesgos externos?</td>
            <td class="p-4 border border-slate-200 text-sm">Implementar cifrado E2E y backups 3-2-1</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Mantener Fortalezas</td>
            <td class="p-4 border border-slate-200 text-sm">Preservar factores internos positivos</td>
            <td class="p-4 border border-slate-200 text-sm">¿Qué ventajas debo preservar?</td>
            <td class="p-4 border border-slate-200 text-sm">Documentación exhaustiva de procedimientos</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Explotar Oportunidades</td>
            <td class="p-4 border border-slate-200 text-sm">Maximizar factores externos positivos</td>
            <td class="p-4 border border-slate-200 text-sm">¿Qué oportunidades puedo aprovechar?</td>
            <td class="p-4 border border-slate-200 text-sm">Solicitar fondos europeos digitalización sanitaria</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Completa una matriz CAME con al menos <strong>2-3 estrategias por categoría</strong>. Para cada una:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Describe la estrategia de forma concreta y accionable</li>
        <li>Indica qué elemento del DAFO aborda (referencia cruzada)</li>
        <li>Estima el esfuerzo requerido (bajo/medio/alto)</li>
        <li>Define un plazo estimado de implementación</li>
    </ul>
</div>

<h3>3.2. Guía para la Viabilidad Técnica</h3>
<p>Evalúa si tienes los recursos técnicos para completar el proyecto:</p>

<h4>Checklist de Viabilidad Técnica para ASIR</h4>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">✅ Hardware y Equipamiento</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>¿Tienes servidor para Proxmox o usarás nested virtualization?</li>
            <li>¿Necesitas licencias de pfSense Plus o usarás versión CE?</li>
            <li>¿Tienes conexión a Internet estable para Azure?</li>
            <li>¿Necesitas hardware específico (switches gestionables)?</li>
        </ul>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">✅ Software y Herramientas</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>¿Todas las herramientas son gratuitas o tienes licencia educativa?</li>
            <li>¿Conoces Proxmox VE o necesitas formación previa?</li>
            <li>¿Tienes experiencia con Azure Portal y PowerShell?</li>
            <li>¿Las herramientas son compatibles con tu hardware?</li>
        </ul>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">✅ Conocimientos Técnicos</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>¿Dominas redes TCP/IP, VLANs, routing?</li>
            <li>¿Tienes experiencia con virtualización (KVM, Hyper-V)?</li>
            <li>¿Sabes configurar VPNs IPsec Site-to-Site?</li>
            <li>¿Conoces las normativas RGPD y sector salud?</li>
        </ul>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">✅ Recursos Externos</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>¿Tienes acceso a un tutor/mentor disponible?</li>
            <li>¿Existen comunidades activas para resolver dudas? (Foros Proxmox, Reddit r/sysadmin)</li>
            <li>¿Hay documentación oficial suficiente?</li>
            <li>¿Puedes acceder a Azure con créditos gratuitos (estudiante)?</li>
        </ul>
    </div>
</div>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📋</span> Evaluación de Viabilidad Técnica
    </div>
    <p>Para cada ítem del checklist anterior, indica:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Estado:</strong> ✅ Cubierto / ⚠️ Parcial / ❌ No cubierto</li>
        <li><strong>Acciones necesarias:</strong> Qué harás para cubrir los gaps</li>
        <li><strong>Plazo:</strong> Cuándo tendrás resuelto cada punto</li>
    </ul>
</div>

<h3>3.3. Guía para el Presupuesto y ROI</h3>
<p>El presupuesto demuestra que conoces los costes reales de tu infraestructura:</p>

<h4>Plantilla de Presupuesto para Infraestructura Cloud Híbrida</h4>
<pre class="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-6"><code class="language-text">┌─────────────────────────────────────────────────────────────────┐
│ 1. COSTES INICIALES (CAPEX)                                     │
├─────────────────────────────────────────────────────────────────┤
│ Hardware local (servidor Proxmox, NAS, switches) € _________    │
│ Licencias (pfSense Plus, Windows Server)       € _________      │
│ Certificaciones (Azure AZ-104, formación)      € _________      │
│ Configuración inicial (mano de obra)           € _________      │
├─────────────────────────────────────────────────────────────────┤
│ INVERSIÓN INICIAL TOTAL                        € _________      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ 2. COSTES OPERATIVOS MENSUALES (OPEX)                           │
├─────────────────────────────────────────────────────────────────┤
│ Azure VMs (2x B2s, 1x B4ms)                    € _________      │
│ Azure VPN Gateway                                € _________    │
│ Azure Load Balancer                            € _________      │
│ Azure Blob Storage (100 GB)                    € _________      │
│ Azure Backup (2 VMs)                           € _________      │
│ Electricidad servidores locales                € _________      │
│ Mantenimiento y soporte                        € _________      │
├─────────────────────────────────────────────────────────────────┤
│ COSTE MENSUAL TOTAL                            € _________      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ 3. AHORROS GENERADOS                                            │
├─────────────────────────────────────────────────────────────────┤
│ Reducción de caídas de servicio (8h/mes × €500/h) € _________   │
│ Menos tiempo de gestión manual (20h/mes × €25/h) € _________    │
│ Evitar multas RGPD (riesgo estimado)           € _________      │
│ Mejora de productividad médica                 € _________      │
├─────────────────────────────────────────────────────────────────┤
│ AHORRO MENSUAL ESTIMADO                        € _________      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ 4. CÁLCULO DEL ROI                                              │
├─────────────────────────────────────────────────────────────────┤
│ ROI anual = ((Ahorro anual - Inversión) / Inversión) × 100      │
│ ROI = _________ %                                               │
│                                                                 │
│ Periodo de recuperación (Payback): ___ meses                    │
└─────────────────────────────────────────────────────────────────┘</code></pre>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📚</span> Recursos para Calcular Presupuestos
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Azure Pricing Calculator:</strong> https://azure.microsoft.com/es-es/pricing/calculator/</li>
        <li><strong>Proxmox Calculator:</strong> https://www.proxmox.com/en/pricing</li>
        <li><strong>Electricidad:</strong> https://www.omie.es/ (precio mayorista electricidad)</li>
        <li><strong>TCO Calculator:</strong> https://mct.azurewebsites.net/ (comparativa on-premise vs cloud)</li>
    </ul>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Completa el presupuesto de tu proyecto:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Investiga precios reales</strong> en las webs oficiales de proveedores</li>
        <li><strong>Considera créditos gratuitos:</strong> Azure for Students ($100), GitHub Student Pack</li>
        <li><strong>Calcula el ROI a 1 año:</strong> ¿Cuánto se recupera en el primer año?</li>
        <li><strong>Calcula el Payback:</strong> ¿En cuántos meses se amortiza la inversión?</li>
        <li><strong>Considera escenarios:</strong> pesimista (más costes), realista, optimista (más ahorros)</li>
    </ul>
</div>

<h3>3.4. Guía para la Viabilidad Legal y Normativa</h3>
<p>Los proyectos de telemedicina están sujetos a normativas estrictas:</p>

<h4>Normativas Aplicables a Tu Proyecto</h4>
<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Normativa</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Ámbito</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Requisitos Clave</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Cómo Cumplir</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">RGPD (UE 2016/679)</td>
            <td class="p-4 border border-slate-200 text-sm">Protección de datos personales</td>
            <td class="p-4 border border-slate-200 text-sm">Consentimiento, cifrado, derecho al olvido</td>
            <td class="p-4 border border-slate-200 text-sm">Cifrar datos, registro de actividades, DPO</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Ley 41/2002</td>
            <td class="p-4 border border-slate-200 text-sm">Historia clínica digital</td>
            <td class="p-4 border border-slate-200 text-sm">Conservación 20 años, acceso seguro</td>
            <td class="p-4 border border-slate-200 text-sm">Backups 20 años, control de accesos</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">ENS (RD 3/2010)</td>
            <td class="p-4 border border-slate-200 text-sm">Esquema Nacional de Seguridad</td>
            <td class="p-4 border border-slate-200 text-sm">Auditorías, gestión de incidentes</td>
            <td class="p-4 border border-slate-200 text-sm">Políticas de seguridad, logging centralizado</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Directiva NIS2</td>
            <td class="p-4 border border-slate-200 text-sm">Seguridad de redes y sistemas</td>
            <td class="p-4 border border-slate-200 text-sm">Notificación de incidentes 24h</td>
            <td class="p-4 border border-slate-200 text-sm">Plan de respuesta a incidentes</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title">
        <span>📋</span> Checklist de Cumplimiento RGPD
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>✅ Registro de actividades de tratamiento documentado</li>
        <li>✅ Delegado de Protección de Datos (DPO) asignado</li>
        <li>✅ Evaluación de impacto (EIPD) realizada</li>
        <li>✅ Cifrado de datos en reposo (AES-256) y tránsito (TLS 1.3)</li>
        <li>✅ Control de accesos con autenticación fuerte (MFA)</li>
        <li>✅ Política de retención y supresión de datos definida</li>
        <li>✅ Procedimiento de ejercicio de derechos (ARCO-POL)</li>
        <li>✅ Registro de violaciones de seguridad (breach log)</li>
    </ul>
</div>
`;
