window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["estado-arte"] = `

<div class="callout callout-info">
    <div class="callout-title"><span>🌐</span><span>Estado del Arte - Investigación Tecnológica</span></div>
    <p class="text-sm">En esta sección debes demostrar que has investigado las tecnologías actuales del mercado. No se trata de copiar documentación, sino de <strong>comparar críticamente</strong> y justificar por qué eliges cada tecnología.</p>
</div>

<h3>2.1. Computación en la Nube para Entornos Sanitarios</h3>

<p>El sector sanitario presenta requisitos únicos que condicionan la elección de proveedores cloud. La normativa europea, especialmente el <strong>RGPD</strong> y la <strong>Ley de Protección de Datos</strong>, establece restricciones específicas para datos de salud.</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
    <div class="p-5 bg-blue-50 border border-blue-200 rounded-2xl">
        <h4 class="font-bold text-blue-800 mb-3 flex items-center gap-2"><span>☁️</span>AWS</h4>
        <ul class="text-sm space-y-2 text-slate-700">
            <li>✓ Certificación HIPAA</li>
            <li>✓ Región eu-central-1 (Frankfurt)</li>
            <li>✓ AWS Artifact para compliance</li>
            <li>✗ Coste variable impredecible</li>
        </ul>
    </div>
    <div class="p-5 bg-green-50 border border-green-200 rounded-2xl">
        <h4 class="font-bold text-green-800 mb-3 flex items-center gap-2"><span>🔷</span>Azure</h4>
        <ul class="text-sm space-y-2 text-slate-700">
            <li>✓ Blue Button API para salud</li>
            <li>✓ Datacenters en España</li>
            <li>✓ Integración con Office 365</li>
            <li>✗ Curva de aprendizaje elevada</li>
        </ul>
    </div>
    <div class="p-5 bg-purple-50 border border-purple-200 rounded-2xl">
        <h4 class="font-bold text-purple-800 mb-3 flex items-center gap-2"><span>🔸</span>Google Cloud</h4>
        <ul class="text-sm space-y-2 text-slate-700">
            <li>✓ Cloud Healthcare API</li>
            <li>✓ FHIR nativo</li>
            <li>✓ IA/ML integrado</li>
            <li>✗ Menor cuota gratuita</li>
        </ul>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title"><span>📝</span><span>Tu Tarea de Investigación</span></div>
    <p class="text-sm m-0">Amplía esta tabla con al menos <strong>2 proveedores adicionales</strong> (ej: OVHcloud, Scaleway) y justifica por qué AWS es la opción seleccionada para este proyecto. Incluye enlaces a documentación oficial.</p>
</div>

<h3>2.2. Virtualización On-Premise</h3>

<p>Para la capa local de la arquitectura híbrida, es esencial seleccionar una plataforma de virtualización robusta que permita gestionar eficientemente los recursos del CPD local.</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Plataforma</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Licencia</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Ventajas</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Inconvenientes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Proxmox VE</td>
            <td class="border border-slate-300 px-4 py-3">Open Source (AGPL)</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">KVM + LXC, web UI, backups integradas, clustering</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Soporte empresarial de pago</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">VMware vSphere</td>
            <td class="border border-slate-300 px-4 py-3">Propietaria</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Estándar enterprise, vMotion, DRS</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Coste elevado, complejo</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">Hyper-V</td>
            <td class="border border-slate-300 px-4 py-3">Incluido en Windows Server</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Integración Microsoft, gratuito</td>
            <td class="border border-slate-300 px-4 py-3 text-sm">Limitado a ecosistema Windows</td>
        </tr>
    </tbody>
</table>

<h3>2.3. Automatización con Scripts Bash</h3>

<p>La automatización es el corazón de este proyecto. Bash es el lenguaje de scripting estándar para administración de sistemas Linux, perfecto para tareas de automatización de infraestructura.</p>

<div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 my-6">
    <h4 class="font-bold text-lg mb-3 flex items-center gap-2"><span>🐚</span>Bash para Administración de Sistemas</h4>
    <p class="text-sm text-slate-600 mb-4">Bash es ideal para tareas del sistema, cron jobs, pipelines y automatización de infraestructura.</p>
    <div class="bg-slate-800 rounded-lg p-4 overflow-x-auto">
        <pre class="text-xs text-green-400 font-mono">
#!/bin/bash

# Ejemplo: Backup de base de datos y sincronización con S3
BACKUP_DIR="/backup"
DATE=$(date +%F)

# Crear backup
mysqldump -u root mediconnect | gzip > $BACKUP_DIR/db_$DATE.sql.gz

# Sincronizar con S3
aws s3 cp $BACKUP_DIR/db_$DATE.sql.gz s3://bucket/backup/ --recursive

# Registrar en log
echo "$(date): Backup completado" >> /var/log/backup.log
        </pre>
    </div>
</div>

<div class="callout callout-warning">
    <div class="callout-title"><span>📝</span><span>Tu Tarea de Investigación</span></div>
    <p class="text-sm m-0">Investiga comandos esenciales de Bash para administración: <code>awk</code>, <code>sed</code>, <code>grep</code>, tuberías (<code>|</code>), redirección de salida (<code>&gt;</code>, <code>2&gt;&amp;1</code>), y estructuras de control (<code>if</code>, <code>for</code>, <code>while</code>).</p>
</div>

<h3>2.4. Monitorización y Observabilidad</h3>

<p>Un sistema en producción sin monitorización es una bomba de relojería. Investiga las siguientes herramientas:</p>

<ul class="space-y-3 my-6">
    <li class="flex items-start gap-3">
        <span class="text-orange-500 text-xl mt-1">📊</span>
        <div>
            <strong>Prometheus + Grafana:</strong> Stack open-source líder para métricas time-series y visualización.
            <br><em>Investiga: ¿Qué es un exporter? ¿Cómo se configura un alertmanager?</em>
        </div>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-blue-500 text-xl mt-1">🔍</span>
        <div>
            <strong>Nagios/Zabbix:</strong> Soluciones clásicas de monitorización de infraestructura.
            <br><em>Investiga: ¿Qué ventajas tienen sobre Prometheus?</em>
        </div>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 text-xl mt-1">📋</span>
        <div>
            <strong>CloudWatch (AWS):</strong> Servicio nativo de monitorización de AWS.
            <br><em>Investiga: ¿Cuál es el coste estimado para este proyecto?</em>
        </div>
    </li>
</ul>

<div class="callout callout-info">
    <div class="callout-title"><span>🎯</span><span>Recomendación del Experto</span></div>
    <p class="text-sm m-0">Para un proyecto de segundo curso, se recomienda <strong>Prometheus + Grafana</strong> por ser open-source, tener gran comunidad y permitir demostrar conocimientos técnicos profundos en la defensa oral.</p>
</div>

<h3>2.5. Tendencias Emergentes</h3>

<p>Como alumno de segundo curso, se espera que menciones tecnologías emergentes que podrían evolucionar el proyecto en el futuro:</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
    <div class="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
        <span class="text-2xl mb-2 block">🚀</span>
        <h4 class="font-bold text-indigo-800 text-sm mb-2">Infraestructura como Código</h4>
        <p class="text-xs text-slate-600 m-0">Terraform, Ansible, Pulumi para gestionar infraestructura versionada.</p>
    </div>
    <div class="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
        <span class="text-2xl mb-2 block">📦</span>
        <h4 class="font-bold text-green-800 text-sm mb-2">Contenedores</h4>
        <p class="text-xs text-slate-600 m-0">Docker y Kubernetes para orquestación de microservicios.</p>
    </div>
    <div class="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-100">
        <span class="text-2xl mb-2 block">🔐</span>
        <h4 class="font-bold text-orange-800 text-sm mb-2">Zero Trust Security</h4>
        <p class="text-xs text-slate-600 m-0">Modelo de seguridad "nunca confíes, siempre verifica".</p>
    </div>
</div>

`;
