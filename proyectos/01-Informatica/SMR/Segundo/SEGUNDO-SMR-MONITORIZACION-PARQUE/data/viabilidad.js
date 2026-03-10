window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.viabilidad = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📈</span>
        <span>Estudio de Viabilidad del Proyecto</span>
    </div>
    <p>
        Este análisis evalúa la viabilidad técnica, económica y operativa del sistema de monitorización 
        propuesto, considerando los recursos disponibles en el IES Serra Perenxisa.
    </p>
</div>

<h3>3.1. Viabilidad Técnica</h3>

<h4>Infraestructura Hardware Disponible</h4>
<p>
    El centro dispone de los siguientes recursos para alojar la solución:
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Recurso</th>
            <th class="border border-slate-200 p-3 text-left">Especificaciones</th>
            <th class="border border-slate-200 p-3 text-left">Estado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Servidor Principal</td>
            <td class="border border-slate-200 p-3">Intel Xeon E-2246G, 64GB RAM, 2TB SSD RAID1</td>
            <td class="border border-slate-200 p-3"><span class="text-green-600 font-bold">✓ Disponible</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Servidor Secundario</td>
            <td class="border border-slate-200 p-3">Intel Xeon E-2224, 32GB RAM, 1TB SSD</td>
            <td class="border border-slate-200 p-3"><span class="text-green-600 font-bold">✓ Disponible</span></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Almacenamiento NAS</td>
            <td class="border border-slate-200 p-3">Synology DS920+, 16TB útiles</td>
            <td class="border border-slate-200 p-3"><span class="text-green-600 font-bold">✓ Disponible</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Red</td>
            <td class="border border-slate-200 p-3">Backbone 10Gbps, acceso 1Gbps</td>
            <td class="border border-slate-200 p-3"><span class="text-green-600 font-bold">✓ Disponible</span></td>
        </tr>
    </tbody>
</table>

<h4>Requisitos Técnicos de Zabbix</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Componente</th>
            <th class="border border-slate-200 p-3 text-left">Mínimo</th>
            <th class="border border-slate-200 p-3 text-left">Recomendado (400 hosts)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">CPU</td>
            <td class="border border-slate-200 p-3">2 núcleos</td>
            <td class="border border-slate-200 p-3">8+ núcleos</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">RAM</td>
            <td class="border border-slate-200 p-3">4 GB</td>
            <td class="border border-slate-200 p-3">32-64 GB</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Disco</td>
            <td class="border border-slate-200 p-3">50 GB</td>
            <td class="border border-slate-200 p-3">500 GB+ SSD</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Base de Datos</td>
            <td class="border border-slate-200 p-3">MySQL/PostgreSQL</td>
            <td class="border border-slate-200 p-3">PostgreSQL 14+</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span>
        <span>Conclusión Viabilidad Técnica</span>
    </div>
    <p>
        La infraestructura actual del centro <strong>cubre sobradamente</strong> los requisitos técnicos 
        para desplegar Zabbix con capacidad para monitorizar 400+ equipos. Se recomienda utilizar el 
        servidor principal para la base de datos y el secundario para el servidor Zabbix, distribuyendo 
        la carga.
    </p>
</div>

<h3>3.2. Viabilidad Económica</h3>

<h4>Análisis de Costes</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Concepto</th>
            <th class="border border-slate-200 p-3 text-left">Coste</th>
            <th class="border border-slate-200 p-3 text-left">Periodo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Licencias Software</td>
            <td class="border border-slate-200 p-3">€0 (Open Source)</td>
            <td class="border border-slate-200 p-3">Permanente</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Hardware Adicional</td>
            <td class="border border-slate-200 p-3">€0 (infraestructura existente)</td>
            <td class="border border-slate-200 p-3">-</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Formación Personal</td>
            <td class="border border-slate-200 p-3">€0 (autoformación con documentación oficial)</td>
            <td class="border border-slate-200 p-3">-</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Mantenimiento Anual</td>
            <td class="border border-slate-200 p-3">€0 (gestión interna)</td>
            <td class="border border-slate-200 p-3">Anual</td>
        </tr>
        <tr class="border-t-2 border-slate-300">
            <td class="border border-slate-200 p-3 font-bold">COSTE TOTAL</td>
            <td class="border border-slate-200 p-3 font-bold text-green-600">€0</td>
            <td class="border border-slate-200 p-3">-</td>
        </tr>
    </tbody>
</table>

<h4>Comparativa con Solución Comercial</h4>
<p>
    Una solución SaaS como Datadog para 400 hosts tendría un coste aproximado de:
</p>
<ul class="space-y-2 my-4">
    <li><strong>Plan Standard:</strong> $15/host/mes × 400 hosts = $6.000/mes</li>
    <li><strong>Coste anual:</strong> $72.000/año (≈ €66.000/año)</li>
    <li><strong>Coste a 5 años:</strong> €330.000</li>
</ul>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💰</span>
        <span>Ahorro Estimado</span>
    </div>
    <p>
        La implementación de Zabbix supone un <strong>ahorro de €330.000</strong> en 5 años respecto 
        a una solución comercial equivalente, sin comprometer funcionalidades esenciales.
    </p>
</div>

<h3>3.3. Viabilidad Operativa</h3>

<h4>Recursos Humanos</h4>
<p>
    El centro cuenta con:
</p>
<ul class="space-y-2 my-4">
    <li><strong>1 Técnico de Sistemas:</strong> Responsable del mantenimiento diario.</li>
    <li><strong>2 Profesores de FCT:</strong> Soporte técnico especializado.</li>
    <li><strong>Alumnado de SMR en prácticas:</strong> Apoyo en tareas de implementación y monitoring.</li>
</ul>

<h4>Impacto Operativo</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Fase</th>
            <th class="border border-slate-200 p-3 text-left">Duración</th>
            <th class="border border-slate-200 p-3 text-left">Impacto</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Instalación Servidor</td>
            <td class="border border-slate-200 p-3">4 horas</td>
            <td class="border border-slate-200 p-3"><span class="text-green-600">Nulo</span> (servidor dedicado)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Despliegue Agentes</td>
            <td class="border border-slate-200 p-3">2 semanas</td>
            <td class="border border-slate-200 p-3"><span class="text-yellow-600">Bajo</span> (reinicios necesarios)</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Configuración Alertas</td>
            <td class="border border-slate-200 p-3">1 semana</td>
            <td class="border border-slate-200 p-3"><span class="text-green-600">Nulo</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Puesta en Producción</td>
            <td class="border border-slate-200 p-3">1 semana</td>
            <td class="border border-slate-200 p-3"><span class="text-yellow-600">Bajo</span> (periodo de ajuste)</td>
        </tr>
    </tbody>
</table>

<h4>Riesgos Operativos</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Riesgo</th>
            <th class="border border-slate-200 p-3 text-left">Probabilidad</th>
            <th class="border border-slate-200 p-3 text-left">Mitigación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Saturación del servidor</td>
            <td class="border border-slate-200 p-3">Baja</td>
            <td class="border border-slate-200 p-3">Monitorizar el propio Zabbix, escalar si necesario</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Falsos positivos en alertas</td>
            <td class="border border-slate-200 p-3">Media</td>
            <td class="border border-slate-200 p-3">Ajuste fino de umbrales durante periodo de prueba</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Resistencia al cambio</td>
            <td class="border border-slate-200 p-3">Baja</td>
            <td class="border border-slate-200 p-3">Formación y comunicación de beneficios al profesorado</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span>
        <span>Conclusión Viabilidad Operativa</span>
    </div>
    <p>
        El proyecto es <strong>operativamente viable</strong>. Los recursos humanos disponibles son 
        suficientes y el impacto durante la implementación es mínimo. Los riesgos identificados son 
        gestionables con las medidas de mitigación propuestas.
    </p>
</div>

<h3>3.4. Cronograma Estimado</h3>
<div class="bg-slate-50 rounded-xl p-6 my-6">
    <ul class="space-y-4">
        <li class="flex items-center gap-4">
            <span class="w-32 text-sm font-bold text-slate-600">Semana 1-2:</span>
            <div class="flex-1 bg-slate-200 rounded-full h-3">
                <div class="bg-blue-600 h-3 rounded-full" style="width: 20%"></div>
            </div>
            <span class="text-sm">Instalación y configuración del servidor</span>
        </li>
        <li class="flex items-center gap-4">
            <span class="w-32 text-sm font-bold text-slate-600">Semana 3-4:</span>
            <div class="flex-1 bg-slate-200 rounded-full h-3">
                <div class="bg-blue-600 h-3 rounded-full" style="width: 40%"></div>
            </div>
            <span class="text-sm">Despliegue de agentes en equipos piloto</span>
        </li>
        <li class="flex items-center gap-4">
            <span class="w-32 text-sm font-bold text-slate-600">Semana 5-8:</span>
            <div class="flex-1 bg-slate-200 rounded-full h-3">
                <div class="bg-blue-600 h-3 rounded-full" style="width: 70%"></div>
            </div>
            <span class="text-sm">Despliegue masivo de agentes (400 equipos)</span>
        </li>
        <li class="flex items-center gap-4">
            <span class="w-32 text-sm font-bold text-slate-600">Semana 9-10:</span>
            <div class="flex-1 bg-slate-200 rounded-full h-3">
                <div class="bg-blue-600 h-3 rounded-full" style="width: 90%"></div>
            </div>
            <span class="text-sm">Configuración de alertas y dashboards</span>
        </li>
        <li class="flex items-center gap-4">
            <span class="w-32 text-sm font-bold text-slate-600">Semana 11-12:</span>
            <div class="flex-1 bg-slate-200 rounded-full h-3">
                <div class="bg-green-600 h-3 rounded-full" style="width: 100%"></div>
            </div>
            <span class="text-sm">Puesta en producción y formación</span>
        </li>
    </ul>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📋</span>
        <span>Actividad para el Alumnado</span>
    </div>
    <p>
        Como parte de la implementación, deberás elaborar un <strong>diario de despliegue</strong> 
        documentando:
    </p>
    <ul class="list-disc list-inside space-y-2 mt-3">
        <li>Tiempo real de cada fase del cronograma.</li>
        <li>Incidencias encontradas y soluciones aplicadas.</li>
        <li>Lecciones aprendidas y mejoras para futuros despliegues.</li>
    </ul>
</div>
`;
