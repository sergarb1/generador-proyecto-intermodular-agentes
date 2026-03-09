/**
 * Sección: Estado del Arte
 * 
 * Análisis de trabajos previos, tecnologías existentes y soluciones disponibles en el mercado.
 * 
 * Estructura esperada:
 * - Análisis de tecnologías relacionadas
 * - Análisis de lenguajes y frameworks
 * - Estrategias o métodos existentes
 * - Análisis de la competencia
 * - Novedades que aporta este proyecto
 * 
 * @param {Object} projectData - Datos del proyecto
 * @returns {String} HTML content
 */
export function generateEstadoArte(projectData) {
    const {
        relatedTechnologies,
        existingSolutions,
        marketAnalysis,
        competitiveAnalysis,
        projectInnovations
    } = projectData;

    return `
        <div class="prose">
            <h3 id="tecnologias-relacionadas">Tecnologías Relacionadas</h3>
            <p>
                A continuación se presenta un análisis de las tecnologías más relevantes 
                en el ámbito del proyecto:
            </p>
            
            ${(relatedTechnologies || []).map(tech => `
                <div class="callout callout-info">
                    <div class="callout-title">
                        <span>🔧</span>
                        <span>${tech.name}</span>
                    </div>
                    <p>${tech.description}</p>
                    <p><strong>Ventajas:</strong> ${tech.advantages}</p>
                    <p><strong>Limitaciones:</strong> ${tech.limitations}</p>
                </div>
            `).join('\n            ')}

            <h3 id="soluciones-existentes">Soluciones Existentes</h3>
            <p>
                En el mercado actual existen diversas soluciones que abordan problemáticas similares:
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Solución</th>
                        <th>Tipo</th>
                        <th>Características Principales</th>
                        <th>Limitaciones</th>
                    </tr>
                </thead>
                <tbody>
                    ${(existingSolutions || []).map(solution => `
                        <tr>
                            <td>${solution.name}</td>
                            <td>${solution.type}</td>
                            <td>${solution.features}</td>
                            <td>${solution.limitations}</td>
                        </tr>
                    `).join('\n                    ')}
                </tbody>
            </table>

            <h3 id="analisis-mercado">Análisis del Mercado</h3>
            <p>
                ${marketAnalysis || 'Análisis del mercado...'}
            </p>

            <h3 id="analisis-competencia">Análisis de la Competencia</h3>
            <p>
                ${competitiveAnalysis || 'Análisis de la competencia...'}
            </p>

            <div class="callout callout-success">
                <div class="callout-title">
                    <span>💡</span>
                    <span>Aportaciones Innovadoras de este Proyecto</span>
                </div>
                <ul>
                    ${(projectInnovations || []).map(innovation => `<li>${innovation}</li>`).join('\n                    ')}
                </ul>
            </div>
        </div>
    `;
}

export const estadoArteTemplate = {
    relatedTechnologies: [],
    existingSolutions: [],
    marketAnalysis: '',
    competitiveAnalysis: '',
    projectInnovations: []
};

export const estadoArtePrompt = `
Genera el contenido para la sección de ESTADO DEL ARTE de un proyecto intermodular de {curso} curso de {ciclo}.

El proyecto trata sobre: {projectTheme}

Debes incluir:
1. Análisis de 3-5 tecnologías relacionadas con el proyecto
   - Para cada tecnología: descripción, ventajas y limitaciones
2. Análisis de 3-4 soluciones existentes en el mercado
   - Nombre, tipo, características principales y limitaciones
3. Análisis del mercado actual (tendencias, tamaño, crecimiento)
4. Análisis de la competencia directa e indirecta
5. 3-5 aportaciones innovadoras que este proyecto incorpora

IMPORTANTE:
- NO es un estudio de mercado exhaustivo
- Enfócate en lo que ya está hecho sobre el tema del proyecto
- Usa un tono técnico y profesional
- Incluye referencias a tecnologías concretas (nombres, versiones)
- Longitud mínima: 600 palabras
`;
