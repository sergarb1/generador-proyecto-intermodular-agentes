window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.resumen = `
<div class="space-y-6">
    <p class="lead">
        Este proyecto presenta <strong>EventHub Pro</strong>, una plataforma web integral de gestión de eventos 
        diseñada para resolver las limitaciones de las soluciones actuales en el mercado. La aplicación integra 
        funcionalidades de planificación, promoción, venta de entradas y análisis post-evento en una única 
        arquitectura cloud-native escalable.
    </p>

    <div class="callout callout-info">
        <div class="callout-title">
            <span>💡</span> Innovación Principal
        </div>
        <p class="mb-0">
            La plataforma destaca por su capacidad de orquestación multi-tenant, permitiendo que diferentes 
            organizaciones gestionen sus eventos de forma independiente mientras comparten infraestructura, 
            reduciendo costes operativos hasta en un 60%.
        </p>
    </div>

    <h3>Objetivos del Proyecto</h3>
    <ul>
        <li><strong>Desarrollar</strong> una SPA (Single Page Application) utilizando Vue.js 3 con Composition API y TypeScript</li>
        <li><strong>Implementar</strong> una API RESTful con Node.js/Express que siga los principios Richardson Maturity Level 3</li>
        <li><strong>Desplegar</strong> la infraestructura en AWS utilizando servicios serverless (Lambda, API Gateway, DynamoDB)</li>
        <li><strong>Establecer</strong> un pipeline CI/CD con GitHub Actions que automatice testing, build y deployment</li>
        <li><strong>Garantizar</strong> el cumplimiento del RGPD en el tratamiento de datos personales de asistentes</li>
        <li><strong>Documentar</strong> exhaustivamente siguiendo estándares ISO/IEC/IEEE 29119 para documentación de software</li>
    </ul>

    <h3>Módulos Integrados</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <strong class="text-primary">DWEC</strong>
            <p class="text-sm text-slate-600 mb-0">Desarrollo de interfaces ricos con Vue.js 3, gestión de estado con Pinia, routing avanzado</p>
        </div>
        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <strong class="text-primary">DIW</strong>
            <p class="text-sm text-slate-600 mb-0">Diseño responsive, accesibilidad WCAG 2.1 AA, UX research con usuarios reales</p>
        </div>
        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <strong class="text-primary">PMD</strong>
            <p class="text-sm text-slate-600 mb-0">Patrones MVC, Repository, Factory, Observer. Arquitectura hexagonal</p>
        </div>
        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <strong class="text-primary">SGE</strong>
            <p class="text-sm text-slate-600 mb-0">Gestión ágil con Scrum, planificación de sprints, retrospectivas</p>
        </div>
        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <strong class="text-primary">EIE</strong>
            <p class="text-sm text-slate-600 mb-0">Estudio de viabilidad económica, análisis de mercado, plan de empresa</p>
        </div>
        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <strong class="text-primary">FOL</strong>
            <p class="text-sm text-slate-600 mb-0">Legislación laboral, prevención de riesgos, contrato de desarrollo</p>
        </div>
    </div>

    <h3>Resultados Esperados</h3>
    <p>
        Al finalizar el desarrollo, se espera obtener una plataforma funcional capaz de gestionar hasta 
        <strong>10,000 eventos concurrentes</strong> con un tiempo de respuesta promedio inferior a 200ms, 
        disponible 99.9% del tiempo (SLA), y completamente documentada para su mantenimiento y evolución futura.
    </p>

    <div class="callout callout-warning">
        <div class="callout-title">
            <span>⚠️</span> Consideración Importante
        </div>
        <p class="mb-0">
            Este documento establece las bases y directrices del proyecto. El alumnado deberá completar 
            el desarrollo siguiendo las guías técnicas proporcionadas, investigando las tecnologías 
            específicas y aplicando los estándares profesionales indicados en cada sección.
        </p>
    </div>
</div>
`;
