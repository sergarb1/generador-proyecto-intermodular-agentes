window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.requisitos = `<h3>4.1. Requisitos Funcionales del Sistema</h3>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>📋</span>
        <span>Guía de Especificación de Requisitos</span>
    </div>
    <p>El alumnado deberá detallar los requisitos funcionales que debe cumplir el sistema RevenueStay Pro, organizados por módulos.</p>
</div>

<h4>4.1.1. Módulo de Revenue Management</h4>

<table class="w-full my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="text-left py-3 px-4">ID</th>
            <th class="text-left py-3 px-4">Requisito</th>
            <th class="text-left py-3 px-4">Prioridad</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b">
            <td class="py-3 px-4"><code>RF-RM-01</code></td>
            <td class="py-3 px-4">El sistema debe calcular automáticamente tarifas óptimas basándose en ocupación histórica, eventos locales y precios de competencia.</td>
            <td class="py-3 px-4"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><code>RF-RM-02</code></td>
            <td class="py-3 px-4">El sistema debe permitir establecer reglas de pricing manual (mínimos, máximos, incrementos porcentuales).</td>
            <td class="py-3 px-4"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><code>RF-RM-03</code></td>
            <td class="py-3 px-4">El sistema debe generar alertas cuando la ocupación prevista difiera significativamente de la histórica.</td>
            <td class="py-3 px-4"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-bold">MEDIA</span></td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><code>RF-RM-04</code></td>
            <td class="py-3 px-4">El sistema debe permitir crear tarifas diferenciadas por tipo de habitación, canal de venta y condiciones de cancelación.</td>
            <td class="py-3 px-4"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr>
            <td class="py-3 px-4"><code>RF-RM-05</code></td>
            <td class="py-3 px-4">El sistema debe proyectar ocupación y revenue para los próximos 365 días.</td>
            <td class="py-3 px-4"><span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">BAJA</span></td>
        </tr>
    </tbody>
</table>

<h4>4.1.2. Módulo de Channel Management</h4>

<table class="w-full my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="text-left py-3 px-4">ID</th>
            <th class="text-left py-3 px-4">Requisito</th>
            <th class="text-left py-3 px-4">Prioridad</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b">
            <td class="py-3 px-4"><code>RF-CM-01</code></td>
            <td class="py-3 px-4">El sistema debe sincronizar disponibilidad y tarifas en tiempo real con al menos 15 OTAs principales.</td>
            <td class="py-3 px-4"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><code>RF-CM-02</code></td>
            <td class="py-3 px-4">El sistema debe prevenir overbooking mediante bloqueo automático de inventario.</td>
            <td class="py-3 px-4"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><code>RF-CM-03</code></td>
            <td class="py-3 px-4">El sistema debe permitir cerrar/abrir canales individualmente de forma manual.</td>
            <td class="py-3 px-4"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-bold">MEDIA</span></td>
        </tr>
        <tr>
            <td class="py-3 px-4"><code>RF-CM-04</code></td>
            <td class="py-3 px-4">El sistema debe mantener paridad de tarifas o permitir diferencias estratégicas configurables.</td>
            <td class="py-3 px-4"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
    </tbody>
</table>

<h4>4.1.3. Módulo de Reservas Directas</h4>

<table class="w-full my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="text-left py-3 px-4">ID</th>
            <th class="text-left py-3 px-4">Requisito</th>
            <th class="text-left py-3 px-4">Prioridad</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b">
            <td class="py-3 px-4"><code>RF-RD-01</code></td>
            <td class="py-3 px-4">El motor de reservas debe estar integrado en la web del hotel y ser responsive (móvil, tablet, desktop).</td>
            <td class="py-3 px-4"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><code>RF-RD-02</code></td>
            <td class="py-3 px-4">El sistema debe ofrecer tarifas exclusivas web (mínimo 10% descuento respecto a OTAs).</td>
            <td class="py-3 px-4"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><code>RF-RD-03</code></td>
            <td class="py-3 px-4">El sistema debe permitir upselling de servicios (desayuno, late check-out, spa) durante el proceso de reserva.</td>
            <td class="py-3 px-4"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-bold">MEDIA</span></td>
        </tr>
        <tr>
            <td class="py-3 px-4"><code>RF-RD-04</code></td>
            <td class="py-3 px-4">El sistema debe enviar confirmaciones automáticas por email y SMS con enlace de check-in online.</td>
            <td class="py-3 px-4"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-bold">MEDIA</span></td>
        </tr>
    </tbody>
</table>

<h3>4.2. Requisitos No Funcionales</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="callout callout-info">
        <div class="callout-title">
            <span>⚡</span>
            <span>Rendimiento</span>
        </div>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li>Tiempo de respuesta < 2 segundos para consultas de disponibilidad</li>
            <li>Sincronización de canales en < 30 segundos</li>
            <li>Soporte para 50+ usuarios concurrentes</li>
            <li>Disponibilidad 99,9% (máximo 8 horas de downtime anual)</li>
        </ul>
    </div>
    
    <div class="callout callout-info">
        <div class="callout-title">
            <span>🔒</span>
            <span>Seguridad</span>
        </div>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li>Cumplimiento RGPD para datos de clientes</li>
            <li>Cifrado SSL/TLS para todas las transacciones</li>
            <li>Autenticación de dos factores para administradores</li>
            <li>Backups diarios con retención de 90 días</li>
        </ul>
    </div>
    
    <div class="callout callout-info">
        <div class="callout-title">
            <span>🔧</span>
            <span>Usabilidad</span>
        </div>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li>Interfaz disponible en español e inglés</li>
            <li>Dashboard personalizable por rol de usuario</li>
            <li>Formación incluida de 40 horas para el personal</li>
            <li>Soporte técnico 24/7 en español</li>
        </ul>
    </div>
    
    <div class="callout callout-info">
        <div class="callout-title">
            <span>🔗</span>
            <span>Integración</span>
        </div>
        <ul class="list-disc pl-6 space-y-2 text-sm">
            <li>API REST documentada para integraciones personalizadas</li>
            <li>Compatibilidad con PMS líderes (Oracle Opera, Cloudbeds, Mews)</li>
            <li>Conectores nativos con principales OTAs</li>
            <li>Webhooks para notificaciones en tiempo real</li>
        </ul>
    </div>
</div>

<h3>4.3. Perfil de Usuarios del Sistema</h3>

<table class="w-full my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="text-left py-3 px-4">Rol</th>
            <th class="text-left py-3 px-4">Responsabilidades</th>
            <th class="text-left py-3 px-4">Permisos</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b">
            <td class="py-3 px-4"><strong>Director/a de Hotel</strong></td>
            <td class="py-3 px-4">Toma de decisiones estratégicas, aprobación de tarifas especiales</td>
            <td class="py-3 px-4">Lectura/escritura total, acceso a reporting ejecutivo</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><strong>Revenue Manager</strong></td>
            <td class="py-3 px-4">Gestión diaria de tarifas, análisis de competencia, forecasting</td>
            <td class="py-3 px-4">Lectura/escritura total en módulo RM, configuración de reglas</td>
        </tr>
        <tr class="border-b">
            <td class="py-3 px-4"><strong>Recepcionista</strong></td>
            <td class="py-3 px-4">Gestión de reservas, check-in/out, atención al cliente</td>
            <td class="py-3 px-4">Lectura de tarifas, creación/modificación reservas, sin acceso a configuración RM</td>
        </tr>
        <tr>
            <td class="py-3 px-4"><strong>Responsable de Reservas</strong></td>
            <td class="py-3 px-4">Gestión de grupos, contratos corporativos, OTAs</td>
            <td class="py-3 px-4">Lectura/escritura en módulo reservas, lectura en RM</td>
        </tr>
    </tbody>
</table>`;
