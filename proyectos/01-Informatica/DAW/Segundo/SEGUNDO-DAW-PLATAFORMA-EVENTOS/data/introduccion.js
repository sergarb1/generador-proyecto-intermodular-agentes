window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.introduccion = `
<div class="space-y-6">
    <h3>Contexto y Problemática</h3>
    
    <p>
        El sector de la organización de eventos en España representa un mercado de <strong>28.000 millones 
        de euros anuales</strong>, empleando directamente a más de 150.000 profesionales. Sin embargo, 
        un estudio reciente de la Asociación Española de Empresas de Organización de Eventos (AEEOE) revela 
        que el 73% de las pequeñas y medianas organizadoras dependen todavía de herramientas fragmentadas: 
        hojas de cálculo para la gestión de invitados, plataformas separadas para venta de entradas, y 
        soluciones ad-hoc para el check-in presencial.
    </p>

    <div class="callout callout-error">
        <div class="callout-title">
            <span>🔴</span> Problemática Detectada
        </div>
        <p class="mb-0">
            <strong>Escenario de crisis:</strong> Durante el evento "Tech Valencia 2024", una organizadora 
            local experimentó una caída del sistema de ticketing 2 horas antes del inicio debido a una 
            sobrecarga de peticiones. La falta de sincronización entre el sistema de ventas y el de 
            acceso provocó colas de 45 minutos y 200 asistentes sin poder entrar por discrepancias en 
            la base de datos. Este incidente generó pérdidas estimadas de 35.000€ y daño reputacional 
            irreversible.
        </p>
    </div>

    <p>
        Las soluciones enterprise existentes (Eventbrite, Cvent, Bizzabo) presentan barreras significativas 
        para las PYMES del sector:
    </p>

    <ul>
        <li><strong>Coste prohibitivo:</strong> Comisiones del 5-15% por entrada vendida más cuotas mensuales de 200-500€</li>
        <li><strong>Sobredimensionamiento:</strong> Funcionalidades complejas innecesarias para eventos de menos de 500 asistentes</li>
        <li><strong>Falta de soberanía de datos:</strong> Los datos de asistentes permanecen en servidores extranjeros sin control del organizador</li>
        <li><strong>Integraciones limitadas:</strong> APIs cerradas que dificultan la conexión con sistemas CRM/ERP locales</li>
    </ul>

    <h3>Justificación del Proyecto</h3>

    <p>
        <strong>EventHub Pro</strong> nace como respuesta a esta problemática, ofreciendo una alternativa 
        <strong>open-core</strong> que combina:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div class="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
            <div class="text-4xl mb-3">💰</div>
            <h4 class="font-bold text-slate-800 mb-2">Coste Reducido</h4>
            <p class="text-sm text-slate-600 mb-0">Comisión del 2% o self-hosted gratuito</p>
        </div>
        <div class="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
            <div class="text-4xl mb-3">🔧</div>
            <h4 class="font-bold text-slate-800 mb-2">Personalizable</h4>
            <p class="text-sm text-slate-600 mb-0">Código abierto, adaptable a necesidades específicas</p>
        </div>
        <div class="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-100">
            <div class="text-4xl mb-3">🇪🇺</div>
            <h4 class="font-bold text-slate-800 mb-2">RGPD Compliant</h4>
            <p class="text-sm text-slate-600 mb-0">Datos en servidores europeos, soberanía total</p>
        </div>
    </div>

    <h3>Alcance del Proyecto</h3>

    <p>
        El desarrollo se estructura en <strong>4 fases principales</strong> distribuidas en las 96 horas 
        del módulo de Proyecto Intermodular:
    </p>

    <table class="w-full border-collapse my-6">
        <thead>
            <tr class="bg-slate-100">
                <th class="border border-slate-300 px-4 py-3 text-left font-semibold">Fase</th>
                <th class="border border-slate-300 px-4 py-3 text-left font-semibold">Duración</th>
                <th class="border border-slate-300 px-4 py-3 text-left font-semibold">Entregables</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>1. Análisis y Diseño</strong></td>
                <td class="border border-slate-300 px-4 py-3">20h</td>
                <td class="border border-slate-300 px-4 py-3">Especificación de requisitos, mockups, arquitectura</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>2. Desarrollo Backend</strong></td>
                <td class="border border-slate-300 px-4 py-3">30h</td>
                <td class="border border-slate-300 px-4 py-3">API REST, base de datos, autenticación</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>3. Desarrollo Frontend</strong></td>
                <td class="border border-slate-300 px-4 py-3">30h</td>
                <td class="border border-slate-300 px-4 py-3">SPA Vue.js, componentes, integración API</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>4. Despliegue y Documentación</strong></td>
                <td class="border border-slate-300 px-4 py-3">16h</td>
                <td class="border border-slate-300 px-4 py-3">CI/CD, infraestructura cloud, manual técnico</td>
            </tr>
        </tbody>
    </table>

    <div class="callout callout-success">
        <div class="callout-title">
            <span>✅</span> Criterios de Éxito
        </div>
        <ul class="mb-0">
            <li>La plataforma soporta 1000 peticiones concurrentes sin degradación</li>
            <li>El tiempo de carga inicial es inferior a 2 segundos en 3G</li>
            <li>Se alcanza una puntuación Lighthouse de 90+ en todas las categorías</li>
            <li>El código tiene una cobertura de tests del 80% mínimo</li>
            <li>La documentación permite a un desarrollador junior incorporar al proyecto en menos de 4 horas</li>
        </ul>
    </div>
</div>
`;
