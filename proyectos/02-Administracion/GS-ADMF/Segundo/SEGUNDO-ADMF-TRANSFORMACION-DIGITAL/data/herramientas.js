window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.herramientas = `
<div class="callout callout-info">
    <div class="callout-title"><span>🛠️</span> Objetivo de esta Sección</div>
    <p>Documentar las herramientas, tecnologías y recursos que se necesitan para ejecutar el proyecto. Incluye software, servicios en cloud, metodologías de trabajo y referencias técnicas.</p>
</div>

<h3>8.1. Stack Tecnológico Recomendado</h3>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Capas</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Tecnología</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Propósito</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Coste Estimado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200"><strong>ERP/Backend</strong></td>
            <td class="p-4 border border-slate-200">Odoo Community/Enterprise</td>
            <td class="p-4 border border-slate-200">Sistema de gestión integrado (facturación, contabilidad, RRHH)</td>
            <td class="p-4 border border-slate-200">€0-€2.500/mes</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Base de Datos</strong></td>
            <td class="p-4 border border-slate-200">PostgreSQL</td>
            <td class="p-4 border border-slate-200">Almacenamiento relacional de datos</td>
            <td class="p-4 border border-slate-200">€0 (open source)</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Cloud Infrastructure</strong></td>
            <td class="p-4 border border-slate-200">AWS/Azure/Google Cloud</td>
            <td class="p-4 border border-slate-200">Hosting, escalabilidad, backups automáticos</td>
            <td class="p-4 border border-slate-200">€200-€500/mes</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Frontend Portal</strong></td>
            <td class="p-4 border border-slate-200">React.js</td>
            <td class="p-4 border border-slate-200">Portal web para clientes</td>
            <td class="p-4 border border-slate-200">€0 (open source)</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Comunicaciones</strong></td>
            <td class="p-4 border border-slate-200">Microsoft Teams</td>
            <td class="p-4 border border-slate-200">Videoconferencia, chat, colaboración</td>
            <td class="p-4 border border-slate-200">€5/usuario/mes</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Automatización</strong></td>
            <td class="p-4 border border-slate-200">Zapier o integración nativa</td>
            <td class="p-4 border border-slate-200">Flujos automáticos (ej: email post-factura)</td>
            <td class="p-4 border border-slate-200">€0-€30/mes</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Reportes/BI</strong></td>
            <td class="p-4 border border-slate-200">Metabase o Odoo Reports</td>
            <td class="p-4 border border-slate-200">Dashboards, análisis de datos</td>
            <td class="p-4 border border-slate-200">€0-€50/mes</td>
        </tr>
    </tbody>
</table>

<h3>8.2. Herramientas de Gestión del Proyecto</h3>

<p>Para coordinar el equipo durante la implementación:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Herramienta</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Uso</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Alternativas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Asana / Monday.com</strong></td>
            <td class="p-4 border border-slate-200">Planificación de tareas, tracking de progreso</td>
            <td class="p-4 border border-slate-200">Jira, ClickUp, Notion</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Google Drive / SharePoint</strong></td>
            <td class="p-4 border border-slate-200">Documentación colaborativa</td>
            <td class="p-4 border border-slate-200">Onedrive, Dropbox</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Lucidchart / Draw.io</strong></td>
            <td class="p-4 border border-slate-200">Diagramas (arquitectura, procesos, RACI)</td>
            <td class="p-4 border border-slate-200">Miro, Mural</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Excel / Google Sheets</strong></td>
            <td class="p-4 border border-slate-200">Control de riesgos, presupuestos, horas</td>
            <td class="p-4 border border-slate-200">Airtable</td>
        </tr>
    </tbody>
</table>

<h3>8.3. Herramientas de Desarrollo/Configuración</h3>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Herramienta</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Propósito</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Git (GitHub/GitLab)</strong></td>
            <td class="p-4 border border-slate-200">Control de versiones del código del portal web</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Docker</strong></td>
            <td class="p-4 border border-slate-200">Containerización para despliegue consistente</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Jenkins / GitHub Actions</strong></td>
            <td class="p-4 border border-slate-200">CI/CD (integración/despliegue continuo)</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Postman</strong></td>
            <td class="p-4 border border-slate-200">Testing de APIs de integración</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>MySQL Workbench / pgAdmin</strong></td>
            <td class="p-4 border border-slate-200">Administración de base de datos</td>
        </tr>
    </tbody>
</table>

<h3>8.4. Estándares y Normas de Cumplimiento</h3>

<p><strong>La transformación digital de AUDIX debe cumplir estos requisitos legales y técnicos:</strong></p>

<ul class="list-disc pl-6 space-y-2">
    <li><strong>RGPD (Reglamento General de Protección de Datos):</strong> Protección de datos personales de clientes y empleados. Art. 32 (medidas técnicas de seguridad), Art. 33-34 (notificación de brechas)</li>
    <li><strong>Facturación Electrónica:</strong> RD 1619/2012 (obligatorio desde 2025 para todas las facturas B2G)</li>
    <li><strong>LSSI-CE:</strong> Ley de Servicios de la Sociedad de la Información (privacidad, cookies, comercio electrónico)</li>
    <li><strong>Ley de Teletrabajo:</strong> Derechos y obligaciones para empleados remotos</li>
    <li><strong>Ley Orgánica de Prevención de Riesgos Laborales:</strong> Seguridad en teletrabajo</li>
    <li><strong>ISO/IEC 27001:</strong> Sistema de gestión de seguridad de la información (opcional pero recomendado)</li>
</ul>

<div class="callout callout-warning">
    <div class="callout-title"><span>⚠️</span> Obligación Legal</div>
    <p>AUDIX debe <strong>documentar el cumplimiento</strong> de estas normas. Crea una matriz de cumplimiento indicando qué control técnico/administrativo satisface cada requisito legal.</p>
</div>

<h3>8.5. Guía de Git: Control de Versiones del Proyecto</h3>

<p>Si el portal web se desarrolla internamente, sigue esta estructura de repositorio:</p>

<div class="callout callout-info my-6">
    <pre class="text-xs overflow-x-auto">
audix-portal/
├── README.md (documentación del proyecto)
├── .gitignore (archivos a no versionear)
├── package.json (dependencias Node.js)
├── src/
│   ├── components/ (componentes React reutilizables)
│   ├── pages/ (páginas principales)
│   ├── styles/ (estilos CSS/SCSS)
│   ├── api/ (llamadas a backend)
│   └── utils/ (funciones auxiliares)
├── public/ (archivos estáticos)
├── tests/ (pruebas unitarias)
├── .github/workflows/ (CI/CD automation)
└── docs/ (documentación técnica)
    </pre>
</div>

<h3>8.6. Metodología de Trabajo: AGILE/SCRUM</h3>

<p>Se recomienda usar SCRUM para la implementación:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Ceremonia</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Frecuencia</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Asistentes</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Duración</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Daily Standup</strong></td>
            <td class="p-4 border border-slate-200">Diaria (lunes-viernes)</td>
            <td class="p-4 border border-slate-200">Equipo técnico (3-4 personas)</td>
            <td class="p-4 border border-slate-200">15 minutos</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Sprint Planning</strong></td>
            <td class="p-4 border border-slate-200">Cada 2 semanas (inicio de sprint)</td>
            <td class="p-4 border border-slate-200">Equipo completo + Product Owner</td>
            <td class="p-4 border border-slate-200">2 horas</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Sprint Review</strong></td>
            <td class="p-4 border border-slate-200">Cada 2 semanas (fin de sprint)</td>
            <td class="p-4 border border-slate-200">Equipo + Stakeholders (director, consultores)</td>
            <td class="p-4 border border-slate-200">1.5 horas</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Sprint Retrospective</strong></td>
            <td class="p-4 border border-slate-200">Cada 2 semanas (post-review)</td>
            <td class="p-4 border border-slate-200">Equipo técnico</td>
            <td class="p-4 border border-slate-200">1 hora</td>
        </tr>
    </tbody>
</table>

<h3>8.7. Documentación Técnica Requerida</h3>

<p>Todo proyecto debe tener esta documentación actualizada:</p>

<ul class="list-disc pl-6 space-y-2">
    <li><strong>Manual de Usuario:</strong> Instrucciones paso a paso para cada rol (administrativo, consultor, cliente)</li>
    <li><strong>Manual Técnico:</strong> Arquitectura, deployment, troubleshooting</li>
    <li><strong>API Documentation:</strong> Especificación de endpoints, parámetros, respuestas</li>
    <li><strong>Database Schema:</strong> Diagrama ER, diccionario de datos</li>
    <li><strong>Security Policy:</strong> Procedimientos de acceso, backups, recuperación ante desastres</li>
    <li><strong>Business Process Documentation:</strong> Flujos antes/después de cada proceso</li>
</ul>

<div class="callout callout-success">
    <div class="callout-title"><span>💡</span> Consejo</span></div>
    <p>Documenta todo <strong>mientras desarrollas</strong>, no al final. La documentación al día es crítica para:</p>
    <ul class="list-disc pl-6 space-y-1">
        <li>Onboarding de nuevo personal</li>
        <li>Troubleshooting rápido</li>
        <li>Auditorías de cumplimiento</li>
    </ul>
</div>

<h3>8.8. Plan de Continuidad y Soporte Post-Implementación</h3>

<p>Después del go-live (mes 6 en adelante), se recomienda:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Período</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Soporte Requerido</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Coste Estimado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Mes 1 (Estabilización)</strong></td>
            <td class="p-4 border border-slate-200">Soporte 24/7 para bugs críticos, hotfixes</td>
            <td class="p-4 border border-slate-200">€1.500</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Meses 2-6 (Transición)</strong></td>
            <td class="p-4 border border-slate-200">Soporte 8-18h, mejoras menores</td>
            <td class="p-4 border border-slate-200">€800/mes</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Año 2+ (Mantenimiento)</strong></td>
            <td class="p-4 border border-slate-200">Actualizaciones trimestrales, evoluciones</td>
            <td class="p-4 border border-slate-200">€500-€1.000/mes</td>
        </tr>
    </tbody>
</table>
`;
