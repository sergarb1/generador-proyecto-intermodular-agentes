window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["introduccion"] = `

<div class="callout callout-info">
    <div class="callout-title"><span>👋</span><span>Bienvenido/a al Proyecto CloudNet Automation</span></div>
    <p class="text-sm">En esta sección inicial vas a contextualizar el proyecto, presentando la empresa, la problemática detectada y los objetivos que guiarán todo tu trabajo. Es el cimiento sobre el que construirás el resto del documento.</p>
</div>

<h3>1.1. Contexto Empresarial</h3>

<div class="p-8 bg-blue-50/50 rounded-3xl border border-blue-100 my-8">
    <h4 class="text-blue-700 font-bold mb-4 flex items-center gap-2"><span>🏢</span><span>MediConnect Solutions - Datos de la Empresa</span></h4>
    
    <table class="w-full my-4">
        <tbody>
            <tr class="border-b border-blue-100">
                <td class="py-3 font-semibold text-slate-600 w-48">Sector</td>
                <td class="py-3 text-slate-800">Tecnologías de la Salud / HealthTech</td>
            </tr>
            <tr class="border-b border-blue-100">
                <td class="py-3 font-semibold text-slate-600">Tamaño</td>
                <td class="py-3 text-slate-800">150 empleados | 3 sedes en España</td>
            </tr>
            <tr class="border-b border-blue-100">
                <td class="py-3 font-semibold text-slate-600">Facturación</td>
                <td class="py-3 text-slate-800">12 millones €/año</td>
            </tr>
            <tr>
                <td class="py-3 font-semibold text-slate-600">Actividad Principal</td>
                <td class="py-3 text-slate-800">Plataforma de telemedicina y gestión de historiales clínicos</td>
            </tr>
        </tbody>
    </table>
</div>

<p>MediConnect Solutions es una empresa en pleno crecimiento que ofrece una plataforma integral de telemedicina. Su infraestructura actual, basada íntegramente en servidores físicos on-premise, está mostrando graves limitaciones para escalar durante picos de demanda y para garantizar la continuidad del negocio.</p>

<h3>1.2. Problemática Crítica Detectada</h3>

<div class="callout callout-error">
    <div class="callout-title"><span>🔥</span><span>Problemas Actuales de Infraestructura</span></div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div class="bg-red-50 p-4 rounded-xl">
            <p class="font-bold text-red-800 mb-2">📉 Latencia Elevada</p>
            <p class="text-sm text-red-700 m-0">Tiempos de respuesta de 800ms+ durante horas punta, causando abandono de sesiones.</p>
        </div>
        <div class="bg-red-50 p-4 rounded-xl">
            <p class="font-bold text-red-800 mb-2">💸 Costes de Mantenimiento</p>
            <p class="text-sm text-red-700 m-0">45.000€/año en mantenimiento de hardware obsoleto (más de 7 años de antigüedad).</p>
        </div>
        <div class="bg-red-50 p-4 rounded-xl">
            <p class="font-bold text-red-800 mb-2">⚠️ Sin Redundancia</p>
            <p class="text-sm text-red-700 m-0">Único punto de fallo en el CPD. Incidente de 6 horas en noviembre 2024.</p>
        </div>
        <div class="bg-red-50 p-4 rounded-xl">
            <p class="font-bold text-red-800 mb-2">🔐 Riesgo de Cumplimiento</p>
            <p class="text-sm text-red-700 m-0">Backups manuales sin cifrado. Auditoría RGPD pendiente con fecha límite marzo 2026.</p>
        </div>
    </div>
</div>

<h3>1.3. Propuesta Técnica</h3>

<p>El proyecto <strong>CloudNet Automation</strong> propone una migración gradual a una arquitectura híbrida que combine:</p>

<ul class="space-y-3 my-6">
    <li class="flex items-start gap-3">
        <span class="text-blue-500 text-xl mt-1">🔷</span>
        <span><strong>Cloud Público (AWS):</strong> Para la capa de presentación, API REST y almacenamiento de datos no sensibles (imágenes médicas anonimizadas, logs, backups históricos).</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 text-xl mt-1">🟢</span>
        <span><strong>On-Premise (Proxmox):</strong> Para la base de datos de historiales clínicos, autenticación de usuarios y sistemas críticos que requieren soberanía de datos.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-purple-500 text-xl mt-1">🟣</span>
        <span><strong>Automatización:</strong> Scripts Bash para sincronización bidireccional, backups programados, monitorización proactiva y recuperación ante desastres.</span>
    </li>
</ul>

<h3>1.4. Objetivos SMART del Proyecto</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
    <div class="p-5 bg-white border-2 border-slate-200 rounded-2xl shadow-sm hover:border-blue-400 transition-colors">
        <span class="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">Específico</span>
        <p class="text-sm font-semibold text-slate-700 m-0">Migrar el 60% de la carga de trabajo a AWS manteniendo datos críticos on-premise</p>
    </div>
    <div class="p-5 bg-white border-2 border-slate-200 rounded-2xl shadow-sm hover:border-green-400 transition-colors">
        <span class="text-xs font-bold text-green-600 uppercase tracking-widest block mb-2">Medible</span>
        <p class="text-sm font-semibold text-slate-700 m-0">Reducir latencia a <200ms y alcanzar 99.9% de uptime medido con Prometheus</p>
    </div>
    <div class="p-5 bg-white border-2 border-slate-200 rounded-2xl shadow-sm hover:border-purple-400 transition-colors">
        <span class="text-xs font-bold text-purple-600 uppercase tracking-widest block mb-2">Alcanzable</span>
        <p class="text-sm font-semibold text-slate-700 m-0">Usar tecnologías open-source (Proxmox, Prometheus) y capa gratuita de AWS para estudiantes</p>
    </div>
    <div class="p-5 bg-white border-2 border-slate-200 rounded-2xl shadow-sm hover:border-orange-400 transition-colors">
        <span class="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-2">Relevante</span>
        <p class="text-sm font-semibold text-slate-700 m-0">Alinear con necesidades reales del sector HealthTech y requisitos RGPD</p>
    </div>
    <div class="p-5 bg-white border-2 border-slate-200 rounded-2xl shadow-sm hover:border-red-400 transition-colors md:col-span-2">
        <span class="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">Temporal</span>
        <p class="text-sm font-semibold text-slate-700 m-0">Completar implementación en 96 horas lectivas con hitos semanales definidos</p>
    </div>
</div>

<h3>1.5. Estructura del Documento</h3>

<p>Este proyecto se organiza en <strong>9 secciones principales</strong> que guiarán tu desarrollo:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Sección</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Contenido</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Horas Estimadas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">1. Introducción</td>
            <td class="border border-slate-300 px-4 py-3">Contexto y objetivos</td>
            <td class="border border-slate-300 px-4 py-3">8h</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">2. Estado del Arte</td>
            <td class="border border-slate-300 px-4 py-3">Investigación tecnológica</td>
            <td class="border border-slate-300 px-4 py-3">12h</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">3. Viabilidad</td>
            <td class="border border-slate-300 px-4 py-3">Análisis económico y técnico</td>
            <td class="border border-slate-300 px-4 py-3">10h</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">4. Requisitos</td>
            <td class="border border-slate-300 px-4 py-3">Especificación funcional</td>
            <td class="border border-slate-300 px-4 py-3">10h</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">5. Diseño</td>
            <td class="border border-slate-300 px-4 py-3">Arquitectura y planificación</td>
            <td class="border border-slate-300 px-4 py-3">16h</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">6. Implementación</td>
            <td class="border border-slate-300 px-4 py-3">Desarrollo y configuración</td>
            <td class="border border-slate-300 px-4 py-3">24h</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">7. Administración</td>
            <td class="border border-slate-300 px-4 py-3">Mantenimiento y operaciones</td>
            <td class="border border-slate-300 px-4 py-3">8h</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">8. Herramientas</td>
            <td class="border border-slate-300 px-4 py-3">Documentación y apoyo</td>
            <td class="border border-slate-300 px-4 py-3">4h</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 font-semibold">9. Conclusiones</td>
            <td class="border border-slate-300 px-4 py-3">Evaluación y aprendizaje</td>
            <td class="border border-slate-300 px-4 py-3">4h</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title"><span>💡</span><span>Consejo del Tribunal</span></div>
    <p class="text-sm m-0">En las pruebas de defensa, el tribunal valora especialmente que los objetivos estén <strong>cuantificados</strong>. Evita frases como "mejorar el rendimiento" y usa "reducir la latencia un 75%". Los números concretos demuestran planificación.</p>
</div>

`;
