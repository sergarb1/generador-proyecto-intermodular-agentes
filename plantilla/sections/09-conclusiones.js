/**
 * Sección: Conclusiones
 * 
 * Reflexiones sobre el trabajo realizado, logros, limitaciones y mejoras futuras.
 * 
 * Estructura esperada:
 * - Conclusiones sobre el trabajo realizado
 * - Conclusiones personales
 * - Posibles ampliaciones y mejoras
 * 
 * @param {Object} projectData - Datos del proyecto
 * @returns {String} HTML content
 */
export function generateConclusiones(projectData) {
    const {
        projectConclusions,
        personalConclusions,
        futureImprovements,
        lessonsLearned
    } = projectData;

    return `
        <div class="prose">
            <h3 id="conclusiones-trabajo">Conclusiones sobre el Trabajo Realizado</h3>
            <p>
                ${projectConclusions?.overview || 'Conclusiones generales del proyecto...'}
            </p>

            <h4 id="objetivos-alcanzados">Objetivos Alcanzados</h4>
            <table>
                <thead>
                    <tr>
                        <th>Objetivo</th>
                        <th>Estado</th>
                        <th>Grado de Cumplimiento</th>
                    </tr>
                </thead>
                <tbody>
                    ${(projectConclusions?.objectives || []).map(obj => `
                        <tr>
                            <td>${obj.name}</td>
                            <td>
                                <span class="px-2 py-1 rounded text-xs font-medium ${
                                    obj.status === 'Completado' ? 'bg-green-100 text-green-800' :
                                    obj.status === 'Parcial' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-red-100 text-red-800'
                                }">
                                    ${obj.status}
                                </span>
                            </td>
                            <td>${obj.completion}</td>
                        </tr>
                    `).join('\n                    ')}
                </tbody>
            </table>

            <h4 id="logros-principales">Logros Principales</h4>
            <ul>
                ${(projectConclusions?.achievements || []).map(achievement => `<li>${achievement}</li>`).join('\n                ')}
            </ul>

            <h4 id="limitaciones">Limitaciones Encontradas</h4>
            <div class="callout callout-warning">
                ${(projectConclusions?.limitations || []).map(limitation => `
                    <p><strong>${limitation.title}</strong></p>
                    <p>${limitation.description}</p>
                `).join('\n                ')}
            </div>

            <h3 id="conclusiones-personales">Conclusiones Personales</h3>
            <p>
                ${personalConclusions?.overview || 'Reflexión personal sobre el proyecto...'}
            </p>

            ${(personalConclusions?.learnings || []).length > 0 ? `
                <h4 id="aprendizajes">Aprendizajes Obtenidos</h4>
                <ul>
                    ${(personalConclusions.learnings || []).map(learning => `<li>${learning}</li>`).join('\n                    ')}
                </ul>
            ` : ''}

            ${(personalConclusions?.challenges || []).length > 0 ? `
                <h4 id="desafios">Desafíos Superados</h4>
                <ol>
                    ${(personalConclusions.challenges || []).map(challenge => `<li>${challenge}</li>`).join('\n                    ')}
                </ol>
            ` : ''}

            <h3 id="lecciones-aprendidas">Lecciones Aprendidas</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                ${(lessonsLearned || []).map(lesson => `
                    <div class="callout callout-info">
                        <div class="callout-title">
                            <span>💡</span>
                            <span>${lesson.title}</span>
                        </div>
                        <p>${lesson.description}</p>
                    </div>
                `).join('\n                ')}
            </div>

            <h3 id="ampliaciones-mejoras">Posibles Ampliaciones y Mejoras</h3>
            <p>
                El proyecto puede ser ampliado y mejorado en múltiples direcciones:
            </p>

            <h4 id="mejoras-corto-plazo">Mejoras a Corto Plazo</h4>
            <table>
                <thead>
                    <tr>
                        <th>Mejora</th>
                        <th>Descripción</th>
                        <th>Esfuerzo Estimado</th>
                        <th>Prioridad</th>
                    </tr>
                </thead>
                <tbody>
                    ${(futureImprovements?.shortTerm || []).map(improvement => `
                        <tr>
                            <td>${improvement.name}</td>
                            <td>${improvement.description}</td>
                            <td>${improvement.effort}</td>
                            <td>
                                <span class="px-2 py-1 rounded text-xs font-medium ${
                                    improvement.priority === 'Alta' ? 'bg-red-100 text-red-800' :
                                    improvement.priority === 'Media' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-green-100 text-green-800'
                                }">
                                    ${improvement.priority}
                                </span>
                            </td>
                        </tr>
                    `).join('\n                        ')}
                </tbody>
            </table>

            <h4 id="mejoras-largo-plazo">Mejoras a Largo Plazo</h4>
            <ul>
                ${(futureImprovements?.longTerm || []).map(improvement => `<li>${improvement}</li>`).join('\n                ')}
            </ul>

            <h4 id="trabajos-futuros">Trabajos Futuros</h4>
            <p>
                ${futureImprovements?.futureWork || 'Descripción de posibles trabajos futuros...'}
            </p>

            <div class="callout callout-success mt-8">
                <div class="callout-title">
                    <span>✅</span>
                    <span>Valoración Final</span>
                </div>
                <p>
                    ${projectConclusions?.finalAssessment || 'Valoración final del proyecto...'}
                </p>
            </div>
        </div>
    `;
}

export const conclusionesTemplate = {
    projectConclusions: {
        overview: '',
        objectives: [],
        achievements: [],
        limitations: [],
        finalAssessment: ''
    },
    personalConclusions: {
        overview: '',
        learnings: [],
        challenges: []
    },
    lessonsLearned: [],
    futureImprovements: {
        shortTerm: [],
        longTerm: [],
        futureWork: ''
    }
};

export const conclusionesPrompt = `
Genera el contenido para la sección de CONCLUSIONES de un proyecto intermodular de {curso} curso de {ciclo}.

El proyecto trata sobre: {projectTheme}

Debes incluir:
1. Conclusiones sobre el trabajo realizado:
   - Visión general del trabajo completado (2-3 párrafos)
   - Objetivos alcanzados (mínimo 4-5 objetivos con estado y grado de cumplimiento)
   - Logros principales (mínimo 4-5)
   - Limitaciones encontradas (mínimo 2-3 con descripción)
   - Valoración final del proyecto

2. Conclusiones personales:
   - Reflexión personal sobre la experiencia (2-3 párrafos)
   - Aprendizajes obtenidos (mínimo 4-5)
   - Desafíos superados (mínimo 2-3)

3. Lecciones aprendidas (mínimo 4-5):
   - Título descriptivo
   - Descripción de la lección

4. Posibles ampliaciones y mejoras:
   - Mejoras a corto plazo (mínimo 4-5 con descripción, esfuerzo y prioridad)
   - Mejoras a largo plazo (mínimo 3-4)
   - Descripción de trabajos futuros posibles

IMPORTANTE:
- Sé honesto sobre limitaciones y áreas de mejora
- Las conclusiones personales deben sonar auténticas
- Las mejoras deben ser realistas y específicas
- Longitud mínima: 700 palabras
`;
