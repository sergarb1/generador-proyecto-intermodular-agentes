window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.diseno = `
<div class="callout callout-info">
    <div class="callout-title"><span>🎨</span> Objetivo de esta Sección</div>
    <p>Diseñar la solución tecnológica: arquitectura del sistema, selección de tecnologías, diseño de base de datos y flujos de procesos. Debes proporcionar una visión clara de cómo se organizará la solución.</p>
</div>

<h3>5.1. Arquitectura del Sistema: Diagrama Propuesto</h3>

<div class="callout callout-warning">
    <div class="callout-title"><span>📝</span> Tarea para el Alumnado</div>
    <p>Crea un diagrama (puede ser en Lucidchart, Draw.io, o incluso a mano fotografiado) que muestre:</p>
    <ul class="list-disc pl-6 space-y-1">
        <li><strong>Frontend:</strong> Portal web de clientes, aplicación administrativa</li>
        <li><strong>Backend:</strong> Servidor de aplicaciones, motor de reglas de negocio</li>
        <li><strong>Base de datos:</strong> Servidor de BD relacional</li>
        <li><strong>Integraciones:</strong> Conexiones a AEAT, Banco, Email</li>
        <li><strong>Seguridad:</strong> Firewall, SSL/TLS, autenticación</li>
    </ul>
    <p>Inserta la imagen en esta sección con: <code class="text-sm">&lt;img src="./images/arquitectura-sistema.jpg" alt="Arquitectura"&gt;</code></p>
</div>

<h3>5.2. Selección de Tecnologías</h3>

<p>Completa esta comparativa de opciones. <strong>No es suficiente elegir; debes justificar por qué esta opción es mejor que las alternativas.</strong></p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Capas/Componente</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Opción 1</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Opción 2</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Opción Elegida</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Justificación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200"><strong>ERP Principal</strong></td>
            <td class="p-4 border border-slate-200">Odoo</td>
            <td class="p-4 border border-slate-200">SAP Cloud</td>
            <td class="p-4 border border-slate-200">[Elige]</td>
            <td class="p-4 border border-slate-200">[Justifica: coste, escalabilidad, soporte en español, etc.]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Base de Datos</strong></td>
            <td class="p-4 border border-slate-200">PostgreSQL</td>
            <td class="p-4 border border-slate-200">[Otra opción]</td>
            <td class="p-4 border border-slate-200">[Elige]</td>
            <td class="p-4 border border-slate-200">[Justifica]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Cloud</strong></td>
            <td class="p-4 border border-slate-200">AWS</td>
            <td class="p-4 border border-slate-200">[Otra opción]</td>
            <td class="p-4 border border-slate-200">[Elige]</td>
            <td class="p-4 border border-slate-200">[Justifica]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Portal Web</strong></td>
            <td class="p-4 border border-slate-200">React</td>
            <td class="p-4 border border-slate-200">[Otra opción]</td>
            <td class="p-4 border border-slate-200">[Elige]</td>
            <td class="p-4 border border-slate-200">[Justifica]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Comunicaciones</strong></td>
            <td class="p-4 border border-slate-200">Microsoft Teams</td>
            <td class="p-4 border border-slate-200">[Otra opción]</td>
            <td class="p-4 border border-slate-200">[Elige]</td>
            <td class="p-4 border border-slate-200">[Justifica]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Copias de Seguridad</strong></td>
            <td class="p-4 border border-slate-200">Backup automático en cloud</td>
            <td class="p-4 border border-slate-200">[Otra opción]</td>
            <td class="p-4 border border-slate-200">[Elige]</td>
            <td class="p-4 border border-slate-200">[Justifica]</td>
        </tr>
    </tbody>
</table>

<h3>5.3. Diseño de Base de Datos</h3>

<p>Define las entidades principales y sus relaciones. Completa:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Entidad</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Campos Principales</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Relaciones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Clientes</strong></td>
            <td class="p-4 border border-slate-200">ID, Nombre, CIF, Email, Teléfono, Dirección, Sector</td>
            <td class="p-4 border border-slate-200">1:N con Facturas, 1:N con Contratos</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Facturas</strong></td>
            <td class="p-4 border border-slate-200">[Completa los campos]</td>
            <td class="p-4 border border-slate-200">[Relaciones]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Empleados</strong></td>
            <td class="p-4 border border-slate-200">[Completa los campos]</td>
            <td class="p-4 border border-slate-200">[Relaciones]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Proyectos</strong></td>
            <td class="p-4 border border-slate-200">[Completa los campos]</td>
            <td class="p-4 border border-slate-200">[Relaciones]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Gastos</strong></td>
            <td class="p-4 border border-slate-200">[Completa los campos]</td>
            <td class="p-4 border border-slate-200">[Relaciones]</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title"><span>📝</span> Tarea para el Alumnado</div>
    <p>Crea un Diagrama Entidad-Relación (DER) usando una herramienta como MySQL Workbench, Lucidchart o DBeaver. Incluye:</p>
    <ul class="list-disc pl-6 space-y-1">
        <li>Todas las entidades identificadas</li>
        <li>Todas las relaciones (1:1, 1:N, N:M)</li>
        <li>Claves primarias y foráneas</li>
        <li>Tipos de datos de cada atributo</li>
    </ul>
</div>

<h3>5.4. Flujos de Procesos Clave (Before & After)</h3>

<p>Para cada proceso crítico, documenta cómo funciona hoy vs. cómo funcionará después:</p>

<h4>Proceso 1: Emisión de Factura</h4>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">ANTES (Manual)</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">DESPUÉS (Automatizado)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200">
                <ol class="list-decimal pl-6 space-y-1">
                    <li>Consultor manual: aporta datos en email</li>
                    <li>Admin abre Excel, escribe datos</li>
                    <li>Admin genera PDF en Word</li>
                    <li>Admin firma digitalmente</li>
                    <li>Admin envía por email al cliente</li>
                    <li>Admin archivar en carpeta compartida</li>
                    <li>Tiempo total: 30 minutos</li>
                </ol>
            </td>
            <td class="p-4 border border-slate-200">
                <ol class="list-decimal pl-6 space-y-1">
                    <li>Consultor entra en ERP</li>
                    <li>Selecciona cliente (autocompletar)</li>
                    <li>Introduce concepto y cantidad</li>
                    <li>Sistema calcula impuestos</li>
                    <li>Sistema genera XML y PDF automáticamente</li>
                    <li>Sistema envía automáticamente al cliente</li>
                    <li>Factura archivada en BD automáticamente</li>
                    <li>Tiempo total: 3 minutos</li>
                </ol>
            </td>
        </tr>
    </tbody>
</table>

<h4>Proceso 2: Reporte Financiero Trimestral</h4>

<p>[Completa de forma similar]</p>

<h3>5.5. Diseño de Seguridad</h3>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Aspecto</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Medida Propuesta</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Norma Cumplida</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Autenticación</strong></td>
            <td class="p-4 border border-slate-200">2FA (Two-Factor Authentication)</td>
            <td class="p-4 border border-slate-200">RGPD Art. 32</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Cifrado</strong></td>
            <td class="p-4 border border-slate-200">SSL/TLS en tránsito, AES-256 en reposo</td>
            <td class="p-4 border border-slate-200">RGPD Art. 32</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Backup</strong></td>
            <td class="p-4 border border-slate-200">[Completa: frecuencia, ubicación, recuperación]</td>
            <td class="p-4 border border-slate-200">[Normativa aplicable]</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200"><strong>Control de Acceso</strong></td>
            <td class="p-4 border border-slate-200">[Completa: roles, permisos, auditoría]</td>
            <td class="p-4 border border-slate-200">[Normativa]</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title"><span>💡</span> Consejo</div>
    <p>La seguridad en una PYME debe ser <strong>proporcional al riesgo</strong>. No necesita la seguridad de un banco, pero sí proteger datos de clientes (RGPD). Balance entre seguridad y usabilidad.</p>
</div>
`;
