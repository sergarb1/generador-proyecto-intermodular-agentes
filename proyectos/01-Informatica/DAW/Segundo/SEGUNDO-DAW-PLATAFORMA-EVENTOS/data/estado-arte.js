window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.estadoArte = `
<div class="space-y-6">
    <h3>Análisis del Mercado Actual</h3>

    <p>
        El panorama de soluciones para gestión de eventos se caracteriza por una fuerte fragmentación. 
        A continuación se presenta un análisis comparativo de las principales alternativas disponibles:
    </p>

    <h4>Competencia Directa</h4>

    <table class="w-full border-collapse my-6 text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="border border-slate-300 px-4 py-3 text-left">Plataforma</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Modelo</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Comisión</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Limitaciones</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>Eventbrite</strong></td>
                <td class="border border-slate-300 px-4 py-3">SaaS</td>
                <td class="border border-slate-300 px-4 py-3">3.7% + 1.99€/entrada</td>
                <td class="border border-slate-300 px-4 py-3">Personalización limitada, branding de Eventbrite obligatorio</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>Cvent</strong></td>
                <td class="border border-slate-300 px-4 py-3">Enterprise</td>
                <td class="border border-slate-300 px-4 py-3">Desde 1500€/mes</td>
                <td class="border border-slate-300 px-4 py-3">Exceso de funcionalidades, curva de aprendizaje pronunciada</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>Bizzabo</strong></td>
                <td class="border border-slate-300 px-4 py-3">Híbrido</td>
                <td class="border border-slate-300 px-4 py-3">499€/evento</td>
                <td class="border border-slate-300 px-4 py-3">Enfoque en eventos virtuales, menos relevante para presenciales</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>Meetup</strong></td>
                <td class="border border-slate-300 px-4 py-3">SaaS</td>
                <td class="border border-slate-300 px-4 py-3">299€/año (organizador)</td>
                <td class="border border-slate-300 px-4 py-3">Solo eventos recurrentes, sin venta de entradas integrada</td>
            </tr>
        </tbody>
    </table>

    <div class="callout callout-info">
        <div class="callout-title">
            <span>📊</span> Oportunidad de Mercado
        </div>
        <p class="mb-0">
            El análisis revela un <strong>hueco en el segmento mid-market</strong>: organizadores que 
            gestionan entre 5-50 eventos anuales con 100-2000 asistentes cada uno. Este segmento 
            representa aproximadamente 12.000 empresas en España según datos del INE 2024.
        </p>
    </div>

    <h3>Tecnologías Base</h3>

    <p>
        Para el desarrollo de EventHub Pro se ha realizado un estudio tecnológico exhaustivo, 
        seleccionando las siguientes herramientas por su madurez, comunidad y adecuación al caso de uso:
    </p>

    <h4>Frontend</h4>
    <ul>
        <li><strong>Vue.js 3</strong> - Framework progresivo con Composition API. Se selecciona sobre React 
        por su curva de aprendizaje más suave y sobre Angular por su menor bundle size.</li>
        <li><strong>TypeScript</strong> - Tipado estático para detectar errores en tiempo de desarrollo. 
        Obligatorio según estándares de calidad del equipo.</li>
        <li><strong>TailwindCSS</strong> - Utility-first CSS framework que acelera el desarrollo de interfaces 
        consistentes y responsive.</li>
        <li><strong>Pinia</strong> - Store oficial de Vue.js para gestión de estado global. Más ligero y 
        modular que Vuex.</li>
    </ul>

    <h4>Backend</h4>
    <ul>
        <li><strong>Node.js 20 LTS</strong> - Entorno de ejecución JavaScript asíncrono. Ideal para I/O 
        intensivo como APIs REST.</li>
        <li><strong>Express.js</strong> - Framework minimalista con amplio ecosistema de middlewares.</li>
        <li><strong>PostgreSQL 16</strong> - Base de datos relacional open-source. Se elige sobre MongoDB 
        por la naturaleza estructurada de los datos de eventos.</li>
        <li><strong>Redis</strong> - Caché en memoria para sesiones y datos frecuentemente accedidos.</li>
    </ul>

    <h4>Infraestructura</h4>
    <ul>
        <li><strong>AWS</strong> - Proveedor cloud para hosting. Servicios: EC2, RDS, S3, CloudFront, Lambda.</li>
        <li><strong>Docker</strong> - Contenerización para garantizar consistencia entre entornos.</li>
        <li><strong>GitHub Actions</strong> - CI/CD pipeline para automatización de builds y deployments.</li>
    </ul>

    <div class="callout callout-warning">
        <div class="callout-title">
            <span>⚠️</span> Actividad para el Alumnado
        </div>
        <p class="mb-0">
            <strong>Investigación requerida:</strong> Profundiza en al menos 3 alternativas tecnológicas 
            no mencionadas (ej: SvelteKit, FastAPI, Supabase). Justifica por escrito por qué se descartan 
            frente a las seleccionadas, considerando: madurez del proyecto, tamaño de comunidad, 
            documentación disponible y coste de licencias.
        </p>
    </div>

    <h3>Referencias Normativas</h3>

    <p>
        El desarrollo deberá cumplir con las siguientes normativas y estándares:
    </p>

    <ul>
        <li><strong>RGPD (Reglamento General de Protección de Datos)</strong> - Reglamento (UE) 2016/679. 
        Especial atención a los artículos 15-22 sobre derechos de los interesados.</li>
        <li><strong>WCAG 2.1 Nivel AA</strong> - Pautas de Accesibilidad al Contenido Web. Obligatorio para 
        proyectos públicos según Ley 11/2007.</li>
        <li><strong>ISO/IEC 27001</strong> - Sistema de Gestión de Seguridad de la Información. 
        Aunque no se busca certificación, se siguen sus controles como guía.</li>
        <li><strong>OWASP Top 10 2021</strong> - Principales vulnerabilidades de seguridad web. 
        Cada punto debe ser mitigado explícitamente.</li>
    </ul>
</div>
`;
