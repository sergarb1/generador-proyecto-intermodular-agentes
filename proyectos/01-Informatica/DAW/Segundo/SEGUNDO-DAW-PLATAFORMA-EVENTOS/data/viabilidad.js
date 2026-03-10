window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.viabilidad = `
<div class="space-y-6">
    <h3>Viabilidad Técnica</h3>

    <p>
        El proyecto es técnicamente viable dado el stack tecnológico seleccionado y las competencias 
        adquiridas durante el ciclo formativo de DAW. A continuación se detallan los factores clave:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div class="p-5 bg-blue-50 rounded-xl border border-blue-200">
            <h4 class="font-bold text-blue-800 mb-2 flex items-center gap-2">
                <span>✅</span> Fortalezas Técnicas
            </h4>
            <ul class="text-sm text-blue-700 mb-0 space-y-1">
                <li>Tecnologías dominadas en el currículo (Vue.js, Node.js, SQL)</li>
                <li>Amplia documentación y comunidad disponible</li>
                <li>Arquitectura modular que permite desarrollo incremental</li>
                <li>Entornos de desarrollo gratuitos (VS Code, Docker Desktop)</li>
            </ul>
        </div>
        <div class="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 class="font-bold text-amber-800 mb-2 flex items-center gap-2">
                <span>⚠️</span> Riesgos Técnicos
            </h4>
            <ul class="text-sm text-amber-700 mb-0 space-y-1">
                <li>Curva de aprendizaje de TypeScript para desarrolladores JS</li>
                <li>Complejidad de la orquestación de contenedores Docker</li>
                <li>Gestión de concurrencia en venta de entradas (race conditions)</li>
                <li>Optimización de queries SQL para reporting en tiempo real</li>
            </ul>
        </div>
    </div>

    <h4>Matriz de Riesgos Técnicos</h4>
    <table class="w-full border-collapse my-6 text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="border border-slate-300 px-4 py-3 text-left">Riesgo</th>
                <th class="border border-slate-300 px-4 py-3 text-center">Probabilidad</th>
                <th class="border border-slate-300 px-4 py-3 text-center">Impacto</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Mitigación</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 px-4 py-3">Caída de servicios AWS</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Baja</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Alto</td>
                <td class="border border-slate-300 px-4 py-3">Multi-AZ deployment, backup en otra región</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">Brecha de seguridad (SQL injection, XSS)</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Media</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Crítico</td>
                <td class="border border-slate-300 px-4 py-3">ORM con prepared statements, sanitización de inputs, CSP headers</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">Deuda técnica por plazos ajustados</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Alta</td>
                <td class="border border-slate-300 px-4 py-3 text-center">Medio</td>
                <td class="border border-slate-300 px-4 py-3">Sprints de refactorización, code reviews obligatorias</td>
            </tr>
        </tbody>
    </table>

    <h3>Viabilidad Económica</h3>

    <p>
        El análisis económico se realiza desde dos perspectivas: coste de desarrollo y modelo de negocio 
        potencial para la comercialización del producto.
    </p>

    <h4>Coste de Desarrollo (96 horas)</h4>
    <table class="w-full border-collapse my-6 text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="border border-slate-300 px-4 py-3 text-left">Concepto</th>
                <th class="border border-slate-300 px-4 py-3 text-right">Cantidad</th>
                <th class="border border-slate-300 px-4 py-3 text-right">Coste Unitario</th>
                <th class="border border-slate-300 px-4 py-3 text-right">Total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 px-4 py-3">Horas desarrollo (becario)</td>
                <td class="border border-slate-300 px-4 py-3 text-right">96 h</td>
                <td class="border border-slate-300 px-4 py-3 text-right">12€/h</td>
                <td class="border border-slate-300 px-4 py-3 text-right">1.152€</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">Tutorización técnica</td>
                <td class="border border-slate-300 px-4 py-3 text-right">20 h</td>
                <td class="border border-slate-300 px-4 py-3 text-right">50€/h</td>
                <td class="border border-slate-300 px-4 py-3 text-right">1.000€</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">Infraestructura cloud (3 meses)</td>
                <td class="border border-slate-300 px-4 py-3 text-right">-</td>
                <td class="border border-slate-300 px-4 py-3 text-right">30€/mes</td>
                <td class="border border-slate-300 px-4 py-3 text-right">90€</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">Dominio y SSL</td>
                <td class="border border-slate-300 px-4 py-3 text-right">1 año</td>
                <td class="border border-slate-300 px-4 py-3 text-right">15€</td>
                <td class="border border-slate-300 px-4 py-3 text-right">15€</td>
            </tr>
            <tr class="bg-slate-50 font-semibold">
                <td class="border border-slate-300 px-4 py-3" colspan="3">TOTAL ESTIMADO</td>
                <td class="border border-slate-300 px-4 py-3 text-right">2.257€</td>
            </tr>
        </tbody>
    </table>

    <div class="callout callout-success">
        <div class="callout-title">
            <span>💰</span> Modelo de Monetización
        </div>
        <p>
            Se propone un modelo <strong>freemium</strong> con tres niveles:
        </p>
        <ul class="mb-0">
            <li><strong>Free:</strong> Hasta 3 eventos/mes, 100 asistentes máx. por evento. Gratuito.</li>
            <li><strong>Pro:</strong> Eventos ilimitados, 1000 asistentes máx. 29€/mes + 2% comisión.</li>
            <li><strong>Enterprise:</strong> White-label, API dedicada, SLA 99.9%. 199€/mes + 1% comisión.</li>
        </ul>
    </div>

    <h4>Proyección de Ingresos (Escenario Conservador)</h4>
    <p>
        Asumiendo una captación de 50 clientes Pro y 5 Enterprise en el primer año:
    </p>
    <ul>
        <li>Ingresos mensuales recurrentes (MRR): 50 × 29€ + 5 × 199€ = 2.445€</li>
        <li>Comisiones estimadas (volumen medio 5000€/mes por cliente Pro): 50 × 5000€ × 2% = 5.000€</li>
        <li><strong>MRR Total: 7.445€/mes</strong></li>
        <li><strong>ROI primer año:</strong> (7.445 × 12 - 2.257) / 2.257 × 100 = <strong>3.854%</strong></li>
    </ul>

    <h3>Viabilidad Operativa</h3>

    <p>
        El proyecto es operacionalmente viable considerando:
    </p>

    <ul>
        <li><strong>Recursos humanos:</strong> Un único desarrollador full-stack puede mantener la plataforma 
        en fase inicial. Se estima dedicación de 10h/semana para mantenimiento y soporte.</li>
        <li><strong>Automatización:</strong> El pipeline CI/CD reduce la carga operativa de despliegues 
        y testing manual.</li>
        <li><strong>Soporte:</strong> Sistema de tickets integrado con respuesta en 24h laborables para 
        clientes Pro, 4h para Enterprise.</li>
        <li><strong>Escalabilidad:</strong> La arquitectura serverless permite escalar automáticamente 
        sin intervención manual durante picos de demanda.</li>
    </ul>

    <div class="callout callout-info">
        <div class="callout-title">
            <span>📋</span> Actividad para el Alumnado
        </div>
        <p class="mb-0">
            <strong>Ejercicio de ampliación:</strong> Realiza un análisis DAFO (Debilidades, Amenazas, 
            Fortalezas, Oportunidades) completo del proyecto. Incluye al menos 5 puntos en cada categoría 
            y propone 3 estrategias DAFO cruzadas (ej: usar Fortalezas para aprovechar Oportunidades).
        </p>
    </div>
</div>
`;
