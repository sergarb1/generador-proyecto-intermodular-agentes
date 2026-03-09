/**
 * Sección: Estudio de Viabilidad
 * 
 * Evaluación de la viabilidad del proyecto desde múltiples perspectivas.
 * 
 * Estructura esperada:
 * - Método DAFO/CAME
 * - Estudio de mercado
 * - Viabilidad técnica/económica
 * - Recursos HW
 * - Recursos SW
 * - Recursos humanos
 * - Viabilidad temporal
 * - Planificación temporal (Gantt)
 * 
 * @param {Object} projectData - Datos del proyecto
 * @returns {String} HTML content
 */
export function generateViabilidad(projectData) {
    const {
        dafoAnalysis,
        cameAnalysis,
        marketStudy,
        technicalViability,
        economicViability,
        hardwareResources,
        softwareResources,
        humanResources,
        temporalViability,
        timeline
    } = projectData;

    return `
        <div class="prose">
            <h3 id="analisis-dafo">Análisis DAFO</h3>
            <p>
                El análisis DAFO permite identificar las debilidades, amenazas, fortalezas y 
                oportunidades del proyecto:
            </p>
            <div class="grid grid-cols-2 gap-4 my-6">
                <div class="callout callout-danger">
                    <div class="callout-title">
                        <span>⚠️</span>
                        <span>Debilidades</span>
                    </div>
                    <ul>
                        ${(dafoAnalysis?.debilidades || []).map(item => `<li>${item}</li>`).join('\n                        ')}
                    </ul>
                </div>
                <div class="callout callout-warning">
                    <div class="callout-title">
                        <span>🚨</span>
                        <span>Amenazas</span>
                    </div>
                    <ul>
                        ${(dafoAnalysis?.amenazas || []).map(item => `<li>${item}</li>`).join('\n                        ')}
                    </ul>
                </div>
                <div class="callout callout-success">
                    <div class="callout-title">
                        <span>💪</span>
                        <span>Fortalezas</span>
                    </div>
                    <ul>
                        ${(dafoAnalysis?.fortalezas || []).map(item => `<li>${item}</li>`).join('\n                        ')}
                    </ul>
                </div>
                <div class="callout callout-info">
                    <div class="callout-title">
                        <span>🎯</span>
                        <span>Oportunidades</span>
                    </div>
                    <ul>
                        ${(dafoAnalysis?.oportunidades || []).map(item => `<li>${item}</li>`).join('\n                        ')}
                    </ul>
                </div>
            </div>

            <h3 id="analisis-came">Análisis CAME</h3>
            <p>
                A partir del DAFO, se definen las estrategias CAME:
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Estrategia</th>
                        <th>Descripción</th>
                        <th>Acción Concreta</th>
                    </tr>
                </thead>
                <tbody>
                    ${(cameAnalysis || []).map(strategy => `
                        <tr>
                            <td><strong>${strategy.type}</strong></td>
                            <td>${strategy.description}</td>
                            <td>${strategy.action}</td>
                        </tr>
                    `).join('\n                    ')}
                </tbody>
            </table>

            <h3 id="estudio-mercado">Estudio de Mercado</h3>
            <p>
                ${marketStudy || 'Análisis del mercado...'}
            </p>

            <h3 id="viabilidad-tecnica">Viabilidad Técnica</h3>
            <div class="callout callout-info">
                <p>${technicalViability || 'Descripción de la viabilidad técnica...'}</p>
            </div>

            <h3 id="viabilidad-economica">Viabilidad Económica</h3>
            <div class="callout callout-success">
                <p>${economicViability || 'Descripción de la viabilidad económica...'}</p>
            </div>

            <h3 id="recursos-hardware">Recursos Hardware</h3>
            <table>
                <thead>
                    <tr>
                        <th>Recurso</th>
                        <th>Especificaciones</th>
                        <th>Cantidad</th>
                        <th>Coste Estimado</th>
                    </tr>
                </thead>
                <tbody>
                    ${(hardwareResources || []).map(hw => `
                        <tr>
                            <td>${hw.name}</td>
                            <td>${hw.specs}</td>
                            <td>${hw.quantity}</td>
                            <td>${hw.cost}</td>
                        </tr>
                    `).join('\n                    ')}
                </tbody>
            </table>

            <h3 id="recursos-software">Recursos Software</h3>
            <table>
                <thead>
                    <tr>
                        <th>Software</th>
                        <th>Tipo</th>
                        <th>Licencia</th>
                        <th>Coste</th>
                    </tr>
                </thead>
                <tbody>
                    ${(softwareResources || []).map(sw => `
                        <tr>
                            <td>${sw.name}</td>
                            <td>${sw.type}</td>
                            <td>${sw.license}</td>
                            <td>${sw.cost}</td>
                        </tr>
                    `).join('\n                    ')}
                </tbody>
            </table>

            <h3 id="recursos-humanos">Recursos Humanos</h3>
            <p>
                ${humanResources || 'Descripción de recursos humanos...'}
            </p>

            <h3 id="viabilidad-temporal">Viabilidad Temporal</h3>
            <p>
                ${temporalViability || 'Análisis de viabilidad temporal...'}
            </p>

            <h3 id="planificacion-temporal">Planificación Temporal (Diagrama de Gantt)</h3>
            <table>
                <thead>
                    <tr>
                        <th>Fase</th>
                        <th>Duración</th>
                        <th>Inicio</th>
                        <th>Fin</th>
                        <th>Entregable</th>
                    </tr>
                </thead>
                <tbody>
                    ${(timeline || []).map(phase => `
                        <tr>
                            <td>${phase.name}</td>
                            <td>${phase.duration}</td>
                            <td>${phase.start}</td>
                            <td>${phase.end}</td>
                            <td>${phase.deliverable}</td>
                        </tr>
                    `).join('\n                    ')}
                </tbody>
            </table>
        </div>
    `;
}

export const viabilidadTemplate = {
    dafoAnalysis: {
        debilidades: [],
        amenazas: [],
        fortalezas: [],
        oportunidades: []
    },
    cameAnalysis: [],
    marketStudy: '',
    technicalViability: '',
    economicViability: '',
    hardwareResources: [],
    softwareResources: [],
    humanResources: '',
    temporalViability: '',
    timeline: []
};

export const viabilidadPrompt = `
Genera el contenido para la sección de ESTUDIO DE VIABILIDAD de un proyecto intermodular de {curso} curso de {ciclo}.

El proyecto trata sobre: {projectTheme}

Debes incluir:
1. Análisis DAFO completo:
   - 4-5 debilidades
   - 4-5 amenazas
   - 4-5 fortalezas
   - 4-5 oportunidades
2. Análisis CAME (4 estrategias: Corregir, Afrontar, Mantener, Explotar)
3. Estudio de mercado (200-300 palabras)
4. Viabilidad técnica (150-200 palabras)
5. Viabilidad económica (150-200 palabras, incluye ROI estimado si aplica)
6. Recursos hardware necesarios (mínimo 5 items)
7. Recursos software necesarios (mínimo 5 items)
8. Recursos humanos (descripción de perfiles necesarios)
9. Viabilidad temporal (justificación de que el plazo es adecuado)
10. Planificación temporal con 5-7 fases del proyecto

IMPORTANTE:
- Usa datos realistas y concretos
- Incluye costes estimados en euros
- Las fechas deben ser coherentes con la duración del curso
- Longitud mínima total: 800 palabras
`;
