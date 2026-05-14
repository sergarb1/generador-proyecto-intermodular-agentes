window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.viabilidad = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📈</span> Objetivo de esta Sección
    </div>
    <p>El Estudio de Viabilidad analiza si el proyecto es factible técnica, económica y organizativamente. Debes demostrar que la solución propuesta es realista y aporta valor.</p>
</div>

<h3>3.1. Viabilidad Técnica</h3>
<p>Analiza los recursos técnicos necesarios:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold">Componente</th>
            <th class="p-4 text-left font-bold">Hardware Recomendado</th>
            <th class="p-4 text-left font-bold">Software</th>
            <th class="p-4 text-left font-bold">Observaciones</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">Firewall Perimetral</td>
            <td class="p-4">PC sobremesa (CPU 4 cores, 8GB RAM, 3 NICs)</td>
            <td class="p-4">pfSense 2.7.x + Suricata 7.x</td>
            <td class="p-4">Aprovecha hardware existente</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">SIEM / HIDS</td>
            <td class="p-4">Servidor virtual (4 vCPU, 16GB RAM, 200GB SSD)</td>
            <td class="p-4">Wazuh 4.x + ELK Stack 8.x</td>
            <td class="p-4">Virtualizable en el CPD actual</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">Escáner Vulnerabilidades</td>
            <td class="p-4">2 vCPU, 4GB RAM, 50GB</td>
            <td class="p-4">OpenVAS (Greenbone)</td>
            <td class="p-4">Escaneo periódico automatizado</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">Automatización Hardening</td>
            <td class="p-4">1 vCPU, 2GB RAM (nodo de control)</td>
            <td class="p-4">Ansible + AWX (opcional)</td>
            <td class="p-4">Sin agentes, solo SSH</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4 font-medium">Backup Server</td>
            <td class="p-4">4 vCPU, 8GB RAM, 2TB NAS</td>
            <td class="p-4">Bacula / BorgBackup + rsync</td>
            <td class="p-4">Cifrado AES-256 en reposo</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span> Conclusión Técnica
    </div>
    <p>Todas las soluciones propuestas son <strong>open source</strong> y pueden ejecutarse sobre el hardware existente de MediConnect Solutions. No se requiere inversión en licencias ni hardware adicional significativo. El principal coste es el tiempo de configuración y puesta en marcha.</p>
</div>

<h3>3.2. Viabilidad Económica</h3>
<p>Desglose de costes del proyecto (estima los valores según tu implementación real):</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold">Concepto</th>
            <th class="p-4 text-left font-bold">Coste Estimado</th>
            <th class="p-4 text-left font-bold">Tipo</th>
            <th class="p-4 text-left font-bold">Notas</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-t border-slate-200">
            <td class="p-4">Hardware firewall (si aplica)</td>
            <td class="p-4">0-300 €</td>
            <td class="p-4">Puntual</td>
            <td class="p-4">Reutilizable de equipos existentes</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">Horas de implantación</td>
            <td class="p-4">96 h * 40 €/h = 3.840 €</td>
            <td class="p-4">Puntual</td>
            <td class="p-4">Técnico ASIR especializado</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">Formación del personal</td>
            <td class="p-4">500 €</td>
            <td class="p-4">Puntual</td>
            <td class="p-4">2 sesiones presenciales</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">Mantenimiento anual</td>
            <td class="p-4">1.200 €/año</td>
            <td class="p-4">Recurrente</td>
            <td class="p-4">Actualizaciones, soporte, backups</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">Licencias software</td>
            <td class="p-4">0 €</td>
            <td class="p-4">Recurrente</td>
            <td class="p-4">Todo open source (Wazuh, pfSense, Ansible)</td>
        </tr>
        <tr class="border-t border-slate-200 bg-green-50 font-bold">
            <td class="p-4">TOTAL Primer Año</td>
            <td class="p-4">~5.540 €</td>
            <td class="p-4">-</td>
            <td class="p-4">-</td>
        </tr>
    </tbody>
</table>

<h3>3.3. Análisis de Retorno de Inversión (ROI)</h3>
<p>Cuantifica el ahorro que supone implementar las medidas de seguridad:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-red-50 rounded-2xl border border-red-100">
        <h4 class="font-bold text-red-800 mb-3 flex items-center gap-2">
            <span>⚠️</span> Coste de NO hacer el proyecto
        </h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Sanción RGPD: hasta 20 M € o 4% facturación anual</li>
            <li>Pérdida de datos de pacientes: incalculable</li>
            <li>Coste de un ransomware: ~200.000 € de media en PYMEs</li>
            <li>Parada del servicio de telemedicina: ~12.000 €/día</li>
            <li>Daño reputacional: pérdida de pacientes y partners</li>
        </ul>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <h4 class="font-bold text-green-800 mb-3 flex items-center gap-2">
            <span>✅</span> Beneficios de implementar
        </h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>Cumplimiento RGPD/ENS: evita sanciones</li>
            <li>Detección temprana de amenazas: reduce impacto</li>
            <li>Automatización de backups: protege la información</li>
            <li>Hardening: elimina el 95% de vulnerabilidades críticas</li>
            <li>Confianza de pacientes: ventaja competitiva</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Completa esta sección:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Investiga precios reales de hardware y actualiza la tabla de costes</li>
        <li>Calcula el ROI con una fórmula: (Beneficio - Inversión) / Inversión * 100</li>
        <li>Añade un análisis DAFO del proyecto (Debilidades, Amenazas, Fortalezas, Oportunidades)</li>
        <li>Incluye un cronograma detallado con diagrama de Gantt</li>
        <li>Justifica la viabilidad organizativa: ¿quién mantendrá el sistema después de la implantación?</li>
    </ul>
</div>
`;
