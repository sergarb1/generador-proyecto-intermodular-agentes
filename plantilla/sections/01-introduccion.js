/**
 * Sección: Introducción
 * 
 * Esta sección presenta el proyecto, su contexto, objetivos y la problemática que resuelve.
 * 
 * NOTA PARA EL ALUMNO: Esta sección debe ser completada por ti con la información
 * de tu proyecto específico. Las sugerencias a continuación te guiarán.
 * 
 * Estructura esperada:
 * - Breve descripción del proyecto y su objetivo
 * - Contexto donde se desarrollará el proyecto
 * - Problemática existente y cómo se está solucionando actualmente
 * - Propuesta para mejorar o solucionar el problema
 * - Reflexiones o dudas que se resolverán en el proyecto
 * 
 * @param {Object} projectData - Datos del proyecto proporcionados por el agente
 * @returns {String} HTML content for the introduction section
 */
export function generateIntroduccion(projectData) {
    const {
        projectTitle,
        companyContext,
        problemStatement,
        currentSolution,
        proposedSolution,
        projectGoals,
        keyQuestions
    } = projectData;

    return `
        <div class="prose">
            <div class="callout callout-info mb-6">
                <div class="callout-title">
                    <span>📝</span>
                    <span>Instrucciones para el alumno</span>
                </div>
                <p class="text-sm">
                    Completa esta sección con la información de tu proyecto. Debes escribir aproximadamente 
                    <strong>2-3 páginas</strong> cubriendo todos los puntos que se indican a continuación.
                </p>
            </div>

            <h3 id="descripcion-proyecto">1.1. Descripción del Proyecto</h3>
            <div class="callout callout-warning">
                <p><strong>Lo que debes incluir:</strong></p>
                <ul>
                    <li>Explica en qué consiste tu proyecto con tus propias palabras</li>
                    <li>Describe el contexto empresarial proporcionado</li>
                    <li>Indica cuál es tu rol en este proyecto</li>
                </ul>
                <p class="mt-2 text-sm text-gray-600">
                    💡 <strong>Sugerencia:</strong> Comienza con un párrafo introductorio que presente el proyecto, 
                    luego describe la empresa y finalmente explica qué vas a hacer tú.
                </p>
            </div>
            <p class="text-gray-500 italic">[Escribe aquí tu descripción del proyecto - mínimo 2 párrafos]</p>

            <h3 id="contexto-empresarial">1.2. Contexto Empresarial</h3>
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                <p class="font-medium mb-2">Información del contexto:</p>
                <p class="text-sm">${companyContext || '[Contexto proporcionado por el profesor]'}</p>
            </div>
            <div class="callout callout-warning">
                <p><strong>Lo que debes investigar:</strong></p>
                <ul>
                    <li>¿A qué se dedica esta empresa?</li>
                    <li>¿Cuál es su tamaño (número de empleados, facturación)?</li>
                    <li>¿Qué tecnologías utiliza actualmente?</li>
                </ul>
            </div>
            <p class="text-gray-500 italic">[Amplía la información del contexto empresarial - mínimo 1 párrafo]</p>

            <div class="callout callout-warning my-6">
                <div class="callout-title">
                    <span>⚠️</span>
                    <span>Problemática Detectada</span>
                </div>
                <p class="mb-2"><strong>Descripción de la problemática:</strong></p>
                <p class="text-sm">${problemStatement || '[Problemática proporcionada por el profesor]'}</p>
                <p class="mt-4"><strong>Lo que debes explicar:</strong></p>
                <ul>
                    <li>¿Por qué es un problema esta situación?</li>
                    <li>¿A quién afecta?</li>
                    <li>¿Qué consecuencias tiene no resolverlo?</li>
                </ul>
            </div>
            <p class="text-gray-500 italic">[Explica la problemática con tus palabras - mínimo 1 párrafo]</p>

            <h3 id="situacion-actual">1.3. Situación Actual</h3>
            <div class="callout callout-warning">
                <p><strong>Debes describir:</strong></p>
                <ul>
                    <li>¿Cómo se está solucionando el problema actualmente?</li>
                    <li>¿Qué limitaciones tiene la solución actual?</li>
                    <li>¿Por qué es necesario un cambio?</li>
                </ul>
            </div>
            <p class="text-gray-500 italic">[Describe la situación actual - mínimo 1 párrafo]</p>

            <div class="callout callout-success my-6">
                <div class="callout-title">
                    <span>✅</span>
                    <span>Propuesta de Mejora</span>
                </div>
                <p class="mb-2"><strong>Tu propuesta debe incluir:</strong></p>
                <p class="text-sm">${proposedSolution || '[Descripción de la propuesta proporcionada por el profesor]'}</p>
            </div>
            <div class="callout callout-warning">
                <p><strong>Lo que debes explicar:</strong></p>
                <ul>
                    <li>¿En qué consiste tu solución?</li>
                    <li>¿Cómo resuelve la problemática?</li>
                    <li>¿Qué ventajas tiene sobre la situación actual?</li>
                </ul>
            </div>
            <p class="text-gray-500 italic">[Describe tu propuesta de mejora - mínimo 2 párrafos]</p>

            <h3 id="objetivos-principales">1.4. Objetivos del Proyecto</h3>
            <div class="callout callout-warning">
                <p><strong>Debes definir 3-5 objetivos SMART:</strong></p>
                <ul>
                    <li>Específicos (qué exactamente)</li>
                    <li>Medibles (cómo sabrás que lo has conseguido)</li>
                    <li>Alcanzables (que puedas realizar en el tiempo disponible)</li>
                    <li>Relevantes (que importen para el negocio)</li>
                    <li>Temporales (con plazo definido)</li>
                </ul>
            </div>
            <ul class="list-none">
                ${(projectGoals || []).length > 0 
                    ? (projectGoals || []).map(goal => `<li class="mb-2">✅ <strong>Objetivo proporcionado:</strong> ${goal}</li>`).join('\n                ')
                    : '<li class="text-gray-500 italic">[Escribe aquí tu primer objetivo]</li>\n                <li class="text-gray-500 italic">[Escribe aquí tu segundo objetivo]</li>\n                <li class="text-gray-500 italic">[Escribe aquí tu tercer objetivo]</li>'
                }
            </ul>

            <h3 id="preguntas-clave">1.5. Preguntas Clave</h3>
            <div class="callout callout-warning">
                <p><strong>Formula 2-4 preguntas que tu proyecto resolverá:</strong></p>
            </div>
            <ol>
                ${(keyQuestions || []).length > 0 
                    ? (keyQuestions || []).map(question => `<li>${question}</li>`).join('\n                ')
                    : '<li class="text-gray-500 italic">[Escribe aquí tu primera pregunta]</li>\n                <li class="text-gray-500 italic">[Escribe aquí tu segunda pregunta]</li>'
                }
            </ol>

            <div class="callout callout-info mt-8">
                <div class="callout-title">
                    <span>📊</span>
                    <span>Criterios de Evaluación</span>
                </div>
                <p class="text-sm">Esta sección se evaluará considerando:</p>
                <ul class="text-sm">
                    <li>✓ Claridad en la descripción del proyecto</li>
                    <li>✓ Comprensión del contexto empresarial</li>
                    <li>✓ Coherencia entre problemática y solución propuesta</li>
                    <li>✓ Objetivos bien definidos y medibles</li>
                    <li>✓ Redacción clara y sin faltas de ortografía</li>
                </ul>
            </div>
        </div>
    `;
}

/**
 * Template vacío para que el agente LLM sepa qué datos debe generar
 */
export const introduccionTemplate = {
    description: '',
    companyContext: '',
    problemStatement: '',
    currentSolution: '',
    proposedSolution: '',
    projectGoals: [],
    keyQuestions: []
};

/**
 * Prompt para el agente LLM
 */
export const introduccionPrompt = `
Genera el contenido para la sección de INTRODUCCIÓN de un proyecto intermodular de {curso} curso de {ciclo}.

El proyecto trata sobre: {projectTheme}

Contexto de la empresa: {companyContext}

Debes incluir:
1. Una descripción clara del proyecto (2-3 párrafos)
2. El contexto empresarial donde se enmarca
3. La problemática que se busca resolver
4. Cómo se está solucionando actualmente
5. Tu propuesta de mejora
6. 3-5 objetivos principales del proyecto
7. 2-4 preguntas clave que el proyecto resolverá

IMPORTANTE:
- Usa un tono profesional pero accesible
- Evita lenguaje académico (no menciones RD, BOE, Resultados de Aprendizaje)
- Enfócate en el valor de negocio y técnico
- Longitud mínima: 500 palabras
`;
