window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["viabilidad"] = `

<div class="callout callout-info">
    <div class="callout-title"><span>📈</span><span>Estudio de Viabilidad</span></div>
    <p class="text-sm">Esta sección demuestra que tu proyecto es realista y sostenible. Debes analizar viabilidad económica, técnica, operativa y temporal con datos concretos.</p>
</div>

<h3>3.1. Viabilidad Económica</h3>

<p>El análisis de costes es fundamental para cualquier proyecto de infraestructura. A continuación se presenta una estimación que deberás completar con investigación actualizada.</p>

<h4>3.1.1. Costes de Infraestructura Cloud (AWS)</h4>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Servicio</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Configuración</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Coste Mensual</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Coste Anual</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">EC2</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">t3.medium (2 vCPU, 4GB RAM)</td>
            <td class="border border-slate-300 px-4 py-3">~30€</td>
            <td class="border border-slate-300 px-4 py-3">360€</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">S3</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">100GB Standard</td>
            <td class="border border-slate-300 px-4 py-3">~2.50€</td>
            <td class="border border-slate-300 px-4 py-3">30€</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">RDS</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">db.t3.micro (MySQL)</td>
            <td class="border border-slate-300 px-4 py-3">~15€</td>
            <td class="border border-slate-300 px-4 py-3">180€</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Data Transfer</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">50GB/mes saliente</td>
            <td class="border border-slate-300 px-4 py-3">~5€</td>
            <td class="border border-slate-300 px-4 py-3">60€</td>
        </tr>
        <tr class="bg-slate-50 font-bold">
            <td class="border border-slate-300 px-4 py-3" colspan="2">TOTAL AWS</td>
            <td class="border border-slate-300 px-4 py-3">~52.50€</td>
            <td class="border border-slate-300 px-4 py-3">630€</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title"><span>💡</span><span>Investiga</span></div>
    <p class="text-sm m-0">Consulta la <a href="https://calculator.aws/" target="_blank" class="text-blue-600 underline">calculadora oficial de AWS</a> y actualiza estos precios. Considera también la <strong>Free Tier</strong> disponible para estudiantes (12 meses gratis en muchos servicios).</p>
</div>

<h4>3.1.2. Costes de Infraestructura Local (On-Premise)</h4>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Concepto</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Descripción</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Coste</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Servidor Físico</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Dell PowerEdge R740 (usado)</td>
            <td class="border border-slate-300 px-4 py-3">2.500€ (único)</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Proxmox VE</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Licencia Community</td>
            <td class="border border-slate-300 px-4 py-3">0€</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Electricidad</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">~150W consumo, 0.15€/kWh</td>
            <td class="border border-slate-300 px-4 py-3">~160€/año</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Internet</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Fibra 600Mbps IP fija</td>
            <td class="border border-slate-300 px-4 py-3">600€/año</td>
        </tr>
    </tbody>
</table>

<h4>3.1.3. Comparativa con Situación Actual</h4>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-red-50 rounded-2xl border border-red-200">
        <h4 class="font-bold text-red-800 mb-4 flex items-center gap-2"><span>📉</span>Situación Actual</h4>
        <table class="w-full text-sm">
            <tbody>
                <tr class="border-b border-red-100">
                    <td class="py-2">Mantenimiento hardware</td>
                    <td class="py-2 text-right font-bold">45.000€/año</td>
                </tr>
                <tr class="border-b border-red-100">
                    <td class="py-2">Electricidad (servidores antiguos)</td>
                    <td class="py-2 text-right font-bold">3.200€/año</td>
                </tr>
                <tr class="border-b border-red-100">
                    <td class="py-2">Horas administración manual</td>
                    <td class="py-2 text-right font-bold">20h/semana</td>
                </tr>
                <tr class="bg-red-100 font-bold">
                    <td class="py-2 px-3">TOTAL ESTIMADO</td>
                    <td class="py-2 text-right px-3">~48.200€/año</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-200">
        <h4 class="font-bold text-green-800 mb-4 flex items-center gap-2"><span>📈</span>Con CloudNet Automation</h4>
        <table class="w-full text-sm">
            <tbody>
                <tr class="border-b border-green-100">
                    <td class="py-2">AWS (anual)</td>
                    <td class="py-2 text-right font-bold">630€/año</td>
                </tr>
                <tr class="border-b border-green-100">
                    <td class="py-2">Electricidad local</td>
                    <td class="py-2 text-right font-bold">160€/año</td>
                </tr>
                <tr class="border-b border-green-100">
                    <td class="py-2">Internet</td>
                    <td class="py-2 text-right font-bold">600€/año</td>
                </tr>
                <tr class="border-b border-green-100">
                    <td class="py-2">Administración automatizada</td>
                    <td class="py-2 text-right font-bold">5h/semana</td>
                </tr>
                <tr class="bg-green-100 font-bold">
                    <td class="py-2 px-3">TOTAL ESTIMADO</td>
                    <td class="py-2 text-right px-3">~1.390€/año</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="callout callout-success">
    <div class="callout-title"><span>💰</span><span>Ahorro Estimado</span></div>
    <p class="text-sm m-0"><strong>97% de reducción de costes</strong> (de 48.200€ a 1.390€/año). El ROI se alcanzaría en menos de 2 meses considerando la inversión inicial del servidor.</p>
</div>

<h3>3.2. Viabilidad Técnica</h3>

<p>Analiza si la tecnología seleccionada está al alcance de tus capacidades y recursos:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Tecnología</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Nivel Requerido</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Recursos Formativos</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Viabilidad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">AWS EC2/S3</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Intermedio</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">AWS Educate, documentación oficial</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Proxmox VE</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Intermedio</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Foros Proxmox, tutoriales YouTube</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Python/Bash</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Intermedio-Avanzado</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Módulos formativos del ciclo</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">VPN Site-to-Site</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Avanzado</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">StrongSwan, OpenVPN docs</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-bold">MEDIA</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Prometheus+Grafana</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Intermedio</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Documentación oficial, labs</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
    </tbody>
</table>

<h3>3.3. Viabilidad Operativa</h3>

<p>El equipo de IT de MediConnect Solutions tiene 3 administradores. Evalúa si la solución puede ser mantenida por ellos:</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
    <div class="p-5 bg-blue-50 rounded-xl border border-blue-200">
        <span class="text-2xl mb-2 block">📚</span>
        <h4 class="font-bold text-blue-800 mb-2">Formación Necesaria</h4>
        <p class="text-sm text-slate-600 m-0">20 horas de formación en AWS Console y scripts de automatización.</p>
    </div>
    <div class="p-5 bg-green-50 rounded-xl border border-green-200">
        <span class="text-2xl mb-2 block">📖</span>
        <h4 class="font-bold text-green-800 mb-2">Documentación</h4>
        <p class="text-sm text-slate-600 m-0">Manuales de procedimiento y runbooks para incidentes comunes.</p>
    </div>
    <div class="p-5 bg-purple-50 rounded-xl border border-purple-200">
        <span class="text-2xl mb-2 block">🔄</span>
        <h4 class="font-bold text-purple-800 mb-2">Curva de Aprendizaje</h4>
        <p class="text-sm text-slate-600 m-0">2-3 semanas para familiarización completa con el nuevo entorno.</p>
    </div>
</div>

<h3>3.4. Viabilidad Temporal - Cronograma</h3>

<p>El proyecto se desarrollará en <strong>96 horas lectivas</strong>. Distribuye el tiempo de la siguiente manera:</p>

<div class="relative my-8">
    <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>
    <div class="space-y-6">
        <div class="relative pl-12">
            <div class="absolute left-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
            <h4 class="font-bold text-slate-800">Semanas 1-2: Investigación y Diseño</h4>
            <p class="text-sm text-slate-600 m-0">Estado del arte, requisitos, diseño de arquitectura (24h)</p>
        </div>
        <div class="relative pl-12">
            <div class="absolute left-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
            <h4 class="font-bold text-slate-800">Semanas 3-5: Implementación Cloud</h4>
            <p class="text-sm text-slate-600 m-0">Despliegue AWS, configuración de red, seguridad (32h)</p>
        </div>
        <div class="relative pl-12">
            <div class="absolute left-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
            <h4 class="font-bold text-slate-800">Semanas 6-7: Implementación Local</h4>
            <p class="text-sm text-slate-600 m-0">Proxmox, VMs, conexión VPN (24h)</p>
        </div>
        <div class="relative pl-12">
            <div class="absolute left-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
            <h4 class="font-bold text-slate-800">Semana 8: Automatización</h4>
            <p class="text-sm text-slate-600 m-0">Scripts Python/Bash, monitorización (16h)</p>
        </div>
    </div>
</div>

`;
