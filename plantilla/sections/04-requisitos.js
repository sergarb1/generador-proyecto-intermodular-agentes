/**
 * Sección: Análisis de Requisitos
 * 
 * Identificación y análisis de las necesidades y expectativas del cliente.
 * 
 * Estructura esperada:
 * - Descripción de requisitos (texto explicativo)
 * - Diagramas de caso de uso (o descripción para generarlos)
 * - Análisis de riesgos y vulnerabilidades
 * 
 * @param {Object} projectData - Datos del proyecto
 * @returns {String} HTML content
 */
export function generateRequisitos(projectData) {
    const {
        functionalRequirements,
        nonFunctionalRequirements,
        useCases,
        riskAnalysis,
        vulnerabilities
    } = projectData;

    return `
        <div class="prose">
            <h3 id="descripcion-requisitos">Descripción de Requisitos</h3>
            <p>
                En esta sección se identifican y analizan las necesidades y expectativas 
                del cliente o usuario final en relación al proyecto.
            </p>

            <h4 id="requisitos-funcionales">Requisitos Funcionales</h4>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Requisito</th>
                        <th>Prioridad</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    ${(functionalRequirements || []).map(req => `
                        <tr>
                            <td><code>${req.id}</code></td>
                            <td>${req.name}</td>
                            <td>
                                <span class="px-2 py-1 rounded text-xs font-medium ${
                                    req.priority === 'Alta' ? 'bg-red-100 text-red-800' :
                                    req.priority === 'Media' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-green-100 text-green-800'
                                }">
                                    ${req.priority}
                                </span>
                            </td>
                            <td>${req.description}</td>
                        </tr>
                    `).join('\n                    ')}
                </tbody>
            </table>

            <h4 id="requisitos-no-funcionales">Requisitos No Funcionales</h4>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Categoría</th>
                        <th>Requisito</th>
                        <th>Métrica</th>
                    </tr>
                </thead>
                <tbody>
                    ${(nonFunctionalRequirements || []).map(req => `
                        <tr>
                            <td><code>${req.id}</code></td>
                            <td>${req.category}</td>
                            <td>${req.name}</td>
                            <td>${req.metric}</td>
                        </tr>
                    `).join('\n                    ')}
                </tbody>
            </table>

            <h3 id="casos-uso">Diagramas de Caso de Uso</h3>
            <p>
                A continuación se describen los casos de uso más relevantes del sistema:
            </p>
            
            ${(useCases || []).map(useCase => `
                <div class="callout callout-info">
                    <div class="callout-title">
                        <span>🎭</span>
                        <span>${useCase.name}</span>
                    </div>
                    <p><strong>Actor:</strong> ${useCase.actor}</p>
                    <p><strong>Descripción:</strong> ${useCase.description}</p>
                    <p><strong>Precondiciones:</strong> ${useCase.preconditions}</p>
                    <p><strong>Flujo Principal:</strong></p>
                    <ol>
                        ${(useCase.flow || []).map(step => `<li>${step}</li>`).join('\n                        ')}
                    </ol>
                    <p><strong>Postcondiciones:</strong> ${useCase.postconditions}</p>
                </div>
            `).join('\n            ')}

            <h3 id="analisis-riesgos">Análisis de Riesgos</h3>
            <p>
                Se evalúan los posibles riesgos que pueden afectar al proyecto, tanto en 
                el desarrollo como en el funcionamiento del sistema una vez implementado:
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Riesgo</th>
                        <th>Probabilidad</th>
                        <th>Impacto</th>
                        <th>Mitigación</th>
                    </tr>
                </thead>
                <tbody>
                    ${(riskAnalysis || []).map(risk => `
                        <tr>
                            <td>${risk.name}</td>
                            <td>
                                <span class="px-2 py-1 rounded text-xs font-medium ${
                                    risk.probability === 'Alta' ? 'bg-red-100 text-red-800' :
                                    risk.probability === 'Media' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-green-100 text-green-800'
                                }">
                                    ${risk.probability}
                                </span>
                            </td>
                            <td>
                                <span class="px-2 py-1 rounded text-xs font-medium ${
                                    risk.impact === 'Alto' ? 'bg-red-100 text-red-800' :
                                    risk.impact === 'Medio' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-green-100 text-green-800'
                                }">
                                    ${risk.impact}
                                </span>
                            </td>
                            <td>${risk.mitigation}</td>
                        </tr>
                    `).join('\n                    ')}
                </tbody>
            </table>

            <h3 id="vulnerabilidades">Análisis de Vulnerabilidades</h3>
            <p>
                Identificación de vulnerabilidades potenciales y medidas de protección:
            </p>
            ${(vulnerabilities || []).map(vuln => `
                <div class="callout callout-warning">
                    <div class="callout-title">
                        <span>🔒</span>
                        <span>${vuln.name}</span>
                    </div>
                    <p><strong>Descripción:</strong> ${vuln.description}</p>
                    <p><strong>Solución:</strong> ${vuln.solution}</p>
                </div>
            `).join('\n            ')}
        </div>
    `;
}

export const requisitosTemplate = {
    functionalRequirements: [],
    nonFunctionalRequirements: [],
    useCases: [],
    riskAnalysis: [],
    vulnerabilities: []
};

export const requisitosPrompt = `
Genera el contenido para la sección de ANÁLISIS DE REQUISITOS de un proyecto intermodular de {curso} curso de {ciclo}.

El proyecto trata sobre: {projectTheme}

Debes incluir:
1. Requisitos Funcionales (mínimo 8-10):
   - ID único (RF-001, RF-002, etc.)
   - Nombre descriptivo
   - Prioridad (Alta/Media/Baja)
   - Descripción clara

2. Requisitos No Funcionales (mínimo 5-7):
   - ID único (RNF-001, RNF-002, etc.)
   - Categoría (Rendimiento, Seguridad, Usabilidad, etc.)
   - Nombre
   - Métrica cuantificable

3. Casos de Uso (3-5 principales):
   - Nombre del caso de uso
   - Actor principal
   - Descripción
   - Precondiciones
   - Flujo principal (4-6 pasos)
   - Postcondiciones

4. Análisis de Riesgos (mínimo 5-6):
   - Nombre del riesgo
   - Probabilidad (Alta/Media/Baja)
   - Impacto (Alto/Medio/Bajo)
   - Medida de mitigación

5. Vulnerabilidades (mínimo 3-4):
   - Nombre
   - Descripción
   - Solución propuesta

IMPORTANTE:
- Los requisitos deben ser SMART (específicos, medibles, alcanzables, relevantes, temporales)
- Evita lenguaje académico
- Enfócate en necesidades reales del negocio
- Longitud mínima: 700 palabras
`;
