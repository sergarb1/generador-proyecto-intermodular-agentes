window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.administracion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>⚙️</span> Objetivo de esta Sección
    </div>
    <p>La sección de Administración describe cómo se gestionará y mantendrá el sistema a lo largo del tiempo. Incluye procedimientos de operación diaria, monitorización y respuesta ante incidentes.</p>
</div>

<h3>7.1. Plan de Operación Diaria</h3>
<p>Define las tareas de administración rutinarias:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold">Frecuencia</th>
            <th class="p-4 text-left font-bold">Tarea</th>
            <th class="p-4 text-left font-bold">Responsable</th>
            <th class="p-4 text-left font-bold">Herramienta</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-t border-slate-200">
            <td class="p-4">Diaria</td>
            <td class="p-4">Revisar dashboard Wazuh: alertas críticas y eventos recientes</td>
            <td class="p-4">Administrador</td>
            <td class="p-4">Kibana Dashboard</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">Diaria</td>
            <td class="p-4">Verificar estado de backups (comprobación automática)</td>
            <td class="p-4">Automático</td>
            <td class="p-4">Borg + cron + email report</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">Semanal</td>
            <td class="p-4">Revisar informe de vulnerabilidades OpenVAS</td>
            <td class="p-4">Administrador</td>
            <td class="p-4">Greenbone Security Assistant</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">Semanal</td>
            <td class="p-4">Actualizar reglas Suricata (ET Open)</td>
            <td class="p-4">Automático</td>
            <td class="p-4">pfSense / crontab</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">Mensual</td>
            <td class="p-4">Prueba de restauración de backup completa</td>
            <td class="p-4">Administrador</td>
            <td class="p-4">Borg extract + verificación</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">Mensual</td>
            <td class="p-4">Revisar logs de acceso SSH y autenticaciones fallidas</td>
            <td class="p-4">Administrador</td>
            <td class="p-4">Wazuh + Kibana</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">Trimestral</td>
            <td class="p-4">Auditoría de cumplimiento CIS Benchmarks</td>
            <td class="p-4">Administrador</td>
            <td class="p-4">Wazuh SCAP + OpenSCAP</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">Anual</td>
            <td class="p-4">Revisión completa de políticas de seguridad</td>
            <td class="p-4">Equipo directivo</td>
            <td class="p-4">Documentación</td>
        </tr>
    </tbody>
</table>

<h3>7.2. Plan de Respuesta ante Incidentes (IRP)</h3>
<p>Define el protocolo a seguir cuando se detecte un incidente de seguridad:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-red-50 rounded-2xl border border-red-100">
        <div class="callout-title">
            <span>🚨</span> Fase 1: Detección y Clasificación
        </div>
        <p class="text-sm mt-3">Al recibir una alerta del SIEM:</p>
        <ol class="list-decimal pl-6 space-y-2 text-sm mt-2">
            <li>Verificar la alerta en el dashboard de Kibana</li>
            <li>Clasificar gravedad (Crítica, Alta, Media, Baja)</li>
            <li>Registrar en el libro de incidencias</li>
            <li>Notificar al equipo de seguridad</li>
        </ol>
    </div>
    <div class="p-6 bg-orange-50 rounded-2xl border border-orange-100">
        <div class="callout-title">
            <span>🛑</span> Fase 2: Contención
        </div>
        <p class="text-sm mt-3">Para incidentes críticos/altos:</p>
        <ol class="list-decimal pl-6 space-y-2 text-sm mt-2">
            <li>Aislar el sistema afectado de la red</li>
            <li>Bloquear IPs origen en pfSense (alienvault)</li>
            <li>Tomar imagen forense del sistema</li>
            <li>Preservar evidencias (logs, volcados de memoria)</li>
        </ol>
    </div>
    <div class="p-6 bg-yellow-50 rounded-2xl border border-yellow-100">
        <div class="callout-title">
            <span>🔍</span> Fase 3: Erradicación
        </div>
        <p class="text-sm mt-3">Eliminar la amenaza:</p>
        <ol class="list-decimal pl-6 space-y-2 text-sm mt-2">
            <li>Identificar la causa raíz del incidente</li>
            <li>Eliminar malware/configuración maliciosa</li>
            <li>Aplicar parches o reglas adicionales</li>
            <li>Ejecutar escaneo completo con OpenVAS</li>
        </ol>
    </div>
    <div class="p-6 bg-green-50 rounded-2xl border border-green-100">
        <div class="callout-title">
            <span>✅</span> Fase 4: Recuperación y Lecciones
        </div>
        <p class="text-sm mt-3">Restaurar y aprender:</p>
        <ol class="list-decimal pl-6 space-y-2 text-sm mt-2">
            <li>Restaurar desde backup si es necesario</li>
            <li>Redactar informe post-mortem del incidente</li>
            <li>Actualizar reglas SIEM/IDS si procede</li>
            <li>Reunión de lecciones aprendidas con el equipo</li>
        </ol>
    </div>
</div>

<h3>7.3. Política de Backups</h3>
<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold">Datos</th>
            <th class="p-4 text-left font-bold">Frecuencia</th>
            <th class="p-4 text-left font-bold">Retención</th>
            <th class="p-4 text-left font-bold">Destino</th>
            <th class="p-4 text-left font-bold">Cifrado</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-t border-slate-200">
            <td class="p-4">Historiales Clínicos (BD)</td>
            <td class="p-4">Cada 4h</td>
            <td class="p-4">30 días + 12 meses mensual</td>
            <td class="p-4">NAS Local + Cloud</td>
            <td class="p-4">AES-256</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">Configuración servidores</td>
            <td class="p-4">Diaria</td>
            <td class="p-4">90 días</td>
            <td class="p-4">NAS Local</td>
            <td class="p-4">AES-256</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">Logs SIEM</td>
            <td class="p-4">Diaria</td>
            <td class="p-4">12 meses (RGPD)</td>
            <td class="p-4">NAS Local</td>
            <td class="p-4">AES-256</td>
        </tr>
        <tr class="border-t border-slate-200">
            <td class="p-4">Configuración pfSense</td>
            <td class="p-4">Tras cada cambio</td>
            <td class="p-4">Indefinido (versiones)</td>
            <td class="p-4">NAS + Git</td>
            <td class="p-4">GPG</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Tarea para el Alumnado
    </div>
    <p>Completa esta sección:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Define al menos 3 scripts de automatización (backups, actualización reglas, limpieza logs) con su código y explicación</li>
        <li>Crea un checklist de administración semanal en formato tabla</li>
        <li>Documenta un procedimiento detallado de restauración de backup paso a paso</li>
        <li>Incluye una plantilla de informe post-incidente para rellenar cuando ocurra un ataque</li>
        <li>Añade el plan de formación para el personal: qué deben saber médicos, administración y técnicos</li>
    </ul>
</div>
`;
