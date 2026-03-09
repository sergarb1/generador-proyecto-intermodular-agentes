/**
 * Sección: Diseño
 * 
 * Planificación y estructura de cómo se llevará a cabo el proyecto.
 * 
 * Estructura esperada (varía según ciclo):
 * Para ASIR:
 *   - Diseño de arquitectura de red
 *   - Diseño de topología de red
 *   - Soluciones de seguridad
 *   - Diagramas (despliegue, infraestructura, contenedores, cloud, integración)
 * 
 * Para DAM/DAW:
 *   - Diseño Conceptual Entidad Relación
 *   - Diseño Lógico Relacional
 *   - Diseño Físico
 *   - Orientación a objetos (clases, secuencias)
 *   - Diseño UX, Mockups
 * 
 * @param {Object} projectData - Datos del proyecto
 * @param {String} cycle - Ciclo formativo (ASIR, DAM, DAW)
 * @returns {String} HTML content
 */
export function generateDiseno(projectData, cycle = 'ASIR') {
    const {
        architectureDesign,
        networkTopology,
        securitySolutions,
        deploymentDiagram,
        infrastructureDiagram,
        containerDiagram,
        cloudDiagram,
        integrationDiagram,
        entityRelationship,
        relationalDesign,
        physicalDesign,
        classDiagram,
        sequenceDiagram,
        activityDiagram,
        uxDesign,
        mockups
    } = projectData;

    // ASIR specific design
    if (cycle === 'ASIR' || cycle === 'SMR') {
        return `
            <div class="prose">
                <h3 id="arquitectura-red">Diseño de Arquitectura de Red</h3>
                <p>
                    ${architectureDesign || 'Descripción de la arquitectura de red...'}
                </p>

                <h3 id="topologia-red">Diseño de Topología de Red</h3>
                <p>
                    ${networkTopology || 'Descripción de la topología de red...'}
                </p>

                <h3 id="soluciones-seguridad">Soluciones de Seguridad</h3>
                <p>
                    ${securitySolutions || 'Descripción de las soluciones de seguridad...'}
                </p>

                <h3 id="diagrama-despliegue">Diagrama de Despliegue</h3>
                <div class="callout callout-info">
                    <p>${deploymentDiagram || 'Descripción del diagrama de despliegue...'}</p>
                </div>

                <h3 id="diagrama-infraestructura">Diagrama de Infraestructura</h3>
                <div class="callout callout-info">
                    <p>${infrastructureDiagram || 'Descripción del diagrama de infraestructura...'}</p>
                </div>

                ${(containerDiagram) ? `
                    <h3 id="diagrama-contenedores">Diagrama de Contenedores</h3>
                    <div class="callout callout-info">
                        <p>${containerDiagram}</p>
                    </div>
                ` : ''}

                ${(cloudDiagram) ? `
                    <h3 id="diagrama-cloud">Diagrama de Cloud</h3>
                    <div class="callout callout-info">
                        <p>${cloudDiagram}</p>
                    </div>
                ` : ''}

                ${(integrationDiagram) ? `
                    <h3 id="diagrama-integracion">Diagrama de Integración</h3>
                    <div class="callout callout-info">
                        <p>${integrationDiagram}</p>
                    </div>
                ` : ''}
            </div>
        `;
    }

    // DAM/DAW specific design
    return `
        <div class="prose">
            <h3 id="diseno-conceptual">Diseño Conceptual (Entidad-Relación)</h3>
            <p>
                ${entityRelationship || 'Descripción del diseño conceptual...'}
            </p>

            <h3 id="diseno-logico">Diseño Lógico Relacional</h3>
            <p>
                ${relationalDesign || 'Descripción del diseño lógico...'}
            </p>

            <h3 id="diseno-fisico">Diseño Físico</h3>
            <p>
                ${physicalDesign || 'Descripción del diseño físico...'}
            </p>

            <h3 id="tablas-campos">Descripción de Tablas y Campos</h3>
            ${(projectData.tables || []).map(table => `
                <div class="callout callout-info">
                    <div class="callout-title">
                        <span>📊</span>
                        <span>${table.name}</span>
                    </div>
                    <p>${table.description}</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Campo</th>
                                <th>Tipo</th>
                                <th>Restricciones</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${(table.fields || []).map(field => `
                                <tr>
                                    <td><code>${field.name}</code></td>
                                    <td>${field.type}</td>
                                    <td>${field.constraints}</td>
                                    <td>${field.description}</td>
                                </tr>
                            `).join('\n                            ')}
                        </tbody>
                    </table>
                </div>
            `).join('\n            ')}

            <h3 id="orientacion-objetos">Orientación a Objetos</h3>
            
            <h4 id="diagrama-clases">Diagrama de Clases</h4>
            <p>
                ${classDiagram || 'Descripción del diagrama de clases...'}
            </p>

            ${(sequenceDiagram) ? `
                <h4 id="diagrama-secuencias">Diagrama de Secuencias</h4>
                <div class="callout callout-info">
                    <p>${sequenceDiagram}</p>
                </div>
            ` : ''}

            ${(activityDiagram) ? `
                <h4 id="diagrama-actividad">Diagrama de Actividad</h4>
                <div class="callout callout-info">
                    <p>${activityDiagram}</p>
                </div>
            ` : ''}

            <h3 id="diseno-ux">Diseño UX</h3>
            <p>
                ${uxDesign || 'Descripción del diseño UX...'}
            </p>

            <h3 id="mockups">Mockups</h3>
            <p>
                ${mockups || 'Descripción de los mockups...'}
            </p>
        </div>
    `;
}

export const disenoTemplate = {
    // ASIR
    architectureDesign: '',
    networkTopology: '',
    securitySolutions: '',
    deploymentDiagram: '',
    infrastructureDiagram: '',
    containerDiagram: '',
    cloudDiagram: '',
    integrationDiagram: '',
    
    // DAM/DAW
    entityRelationship: '',
    relationalDesign: '',
    physicalDesign: '',
    tables: [],
    classDiagram: '',
    sequenceDiagram: '',
    activityDiagram: '',
    uxDesign: '',
    mockups: ''
};

export const disenoPrompt = `
Genera el contenido para la sección de DISEÑO de un proyecto intermodular de {curso} curso de {ciclo}.

El proyecto trata sobre: {projectTheme}

{CYCLE_SPECIFIC_INSTRUCTIONS}

IMPORTANTE:
- El diseño debe ser coherente con los requisitos definidos anteriormente
- Incluye descripciones detalladas de cada diagrama
- Usa terminología técnica apropiada
- Longitud mínima: 600 palabras
`;

export const getDisenoPromptForCycle = (cycle) => {
    if (cycle === 'ASIR' || cycle === 'SMR') {
        return `
Para proyectos de ${cycle}, debes incluir:
1. Diseño de arquitectura de red (descripción detallada)
2. Diseño de topología de red (elementos, conexiones, segmentación)
3. Soluciones de seguridad (firewalls, VLANs, VPNs, etc.)
4. Descripción del diagrama de despliegue
5. Descripción del diagrama de infraestructura
6. Si aplica: diagrama de contenedores (Docker, Kubernetes)
7. Si aplica: diagrama de Cloud (AWS, Azure, GCP)
8. Si aplica: diagrama de integración de sistemas`;
    }
    
    return `
Para proyectos de ${cycle}, debes incluir:
1. Diseño Conceptual Entidad-Relación (descripción de entidades y relaciones)
2. Diseño Lógico Relacional (paso a tablas)
3. Diseño Físico (optimizaciones, índices)
4. Descripción de al menos 3-4 tablas principales con sus campos
5. Diagrama de Clases (descripción de clases y atributos principales)
6. Diagrama de Secuencias (de los casos de uso más relevantes)
7. Diagrama de Actividad (flujo principal)
8. Diseño UX (principios de usabilidad aplicados)
9. Mockups (descripción de las pantallas principales)`;
};
