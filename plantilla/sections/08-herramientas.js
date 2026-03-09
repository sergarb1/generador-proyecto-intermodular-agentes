/**
 * Sección: Herramientas de Apoyo
 * 
 * Herramientas utilizadas para facilitar la ejecución del proyecto.
 * 
 * Estructura esperada:
 * - Control de versiones (Git)
 * - Sistemas de integración continua
 * - Gestión de pruebas
 * - Otras herramientas (linters, analizadores, etc.)
 * 
 * @param {Object} projectData - Datos del proyecto
 * @returns {String} HTML content
 */
export function generateHerramientas(projectData) {
    const {
        versionControl,
        ciSystem,
        testingTools,
        developmentTools,
        debuggingTools,
        codeAnalyzers,
        linters,
        transpilers,
        deploymentTools,
        projectManagement
    } = projectData;

    return `
        <div class="prose">
            <h3 id="control-versiones">Control de Versiones</h3>
            <p>
                Para el control de versiones del código fuente se ha utilizado:
            </p>
            
            ${(versionControl || []).map(tool => `
                <div class="callout callout-info">
                    <div class="callout-title">
                        <span>📦</span>
                        <span>${tool.name}</span>
                    </div>
                    <p>${tool.description}</p>
                    <p><strong>Uso en el proyecto:</strong> ${tool.usage}</p>
                    <p><strong>Repositorio:</strong> <code>${tool.repository}</code></p>
                </div>
            `).join('\n            ')}

            <h3 id="integracion-continua">Sistemas de Integración Continua</h3>
            <p>
                ${ciSystem?.overview || 'Descripción del sistema de integración continua...'}
            </p>

            ${(ciSystem?.pipelines || []).map(pipeline => `
                <div class="callout callout-info">
                    <div class="callout-title">
                        <span>🔄</span>
                        <span>Pipeline: ${pipeline.name}</span>
                    </div>
                    <p><strong>Descripción:</strong> ${pipeline.description}</p>
                    <p><strong>Trigger:</strong> ${pipeline.trigger}</p>
                    <p><strong>Steps:</strong></p>
                    <ol>
                        ${(pipeline.steps || []).map(step => `<li>${step}</li>`).join('\n                        ')}
                    </ol>
                </div>
            `).join('\n            ')}

            <h3 id="gestion-pruebas">Gestión de Pruebas</h3>
            <p>
                ${testingTools?.overview || 'Descripción de la estrategia de testing...'}
            </p>

            <h4 id="tipos-pruebas">Tipos de Pruebas Realizadas</h4>
            <table>
                <thead>
                    <tr>
                        <th>Tipo</th>
                        <th>Herramienta</th>
                        <th>Descripción</th>
                        <th>Cobertura</th>
                    </tr>
                </thead>
                <tbody>
                    ${(testingTools?.types || []).map(test => `
                        <tr>
                            <td>${test.type}</td>
                            <td>${test.tool}</td>
                            <td>${test.description}</td>
                            <td>${test.coverage}</td>
                        </tr>
                    `).join('\n                    ')}
                </tbody>
            </table>

            ${(testingTools?.examples || []).length > 0 ? `
                <h4 id="ejemplos-pruebas">Ejemplos de Pruebas</h4>
                ${(testingTools.examples || []).map(example => `
                    <div class="callout callout-info">
                        <div class="callout-title">
                            <span>🧪</span>
                            <span>${example.name}</span>
                        </div>
                        <p>${example.description}</p>
                        <pre><code>${example.code}</code></pre>
                    </div>
                `).join('\n                ')}
            ` : ''}

            <h3 id="herramientas-desarrollo">Herramientas de Desarrollo</h3>
            <table>
                <thead>
                    <tr>
                        <th>Categoría</th>
                        <th>Herramienta</th>
                        <th>Versión</th>
                        <th>Propósito</th>
                    </tr>
                </thead>
                <tbody>
                    ${(developmentTools || []).map(tool => `
                        <tr>
                            <td>${tool.category}</td>
                            <td>${tool.name}</td>
                            <td>${tool.version}</td>
                            <td>${tool.purpose}</td>
                        </tr>
                    `).join('\n                    ')}
                </tbody>
            </table>

            <h3 id="depuracion">Herramientas de Depuración</h3>
            <p>
                ${debuggingTools?.overview || 'Descripción de las herramientas de depuración...'}
            </p>

            ${(debuggingTools?.tools || []).map(tool => `
                <div class="callout callout-info">
                    <div class="callout-title">
                        <span>🐛</span>
                        <span>${tool.name}</span>
                    </div>
                    <p>${tool.description}</p>
                </div>
            `).join('\n            ')}

            <h3 id="analizadores-codigo">Analizadores de Código y Linters</h3>
            <p>
                Para asegurar la calidad del código se han utilizado las siguientes herramientas:
            </p>

            ${(codeAnalyzers || []).map(analyzer => `
                <div class="callout callout-warning">
                    <div class="callout-title">
                        <span>📊</span>
                        <span>${analyzer.name}</span>
                    </div>
                    <p><strong>Tipo:</strong> ${analyzer.type}</p>
                    <p>${analyzer.description}</p>
                    <p><strong>Reglas configuradas:</strong> ${analyzer.rules}</p>
                </div>
            `).join('\n            ')}

            ${(linters || []).map(linter => `
                <div class="callout callout-warning">
                    <div class="callout-title">
                        <span>✨</span>
                        <span>${linter.name}</span>
                    </div>
                    <p><strong>Lenguaje:</strong> ${linter.language}</p>
                    <p>${linter.description}</p>
                </div>
            `).join('\n            ')}

            ${(transpilers || []).length > 0 ? `
                <h3 id="transpiladores">Transpiladores</h3>
                <p>
                    ${transpilers?.overview || 'Descripción de los transpiladores utilizados...'}
                </p>
            ` : ''}

            <h3 id="despliegue">Herramientas de Despliegue</h3>
            <p>
                ${deploymentTools?.overview || 'Descripción de las herramientas de despliegue...'}
            </p>

            ${(deploymentTools?.tools || []).map(tool => `
                <div class="callout callout-info">
                    <div class="callout-title">
                        <span>🚀</span>
                        <span>${tool.name}</span>
                    </div>
                    <p>${tool.description}</p>
                </div>
            `).join('\n            ')}

            <h3 id="gestion-proyecto">Gestión del Proyecto</h3>
            <p>
                ${projectManagement?.overview || 'Descripción de las herramientas de gestión...'}
            </p>

            ${(projectManagement?.tools || []).map(tool => `
                <div class="callout callout-info">
                    <div class="callout-title">
                        <span>📋</span>
                        <span>${tool.name}</span>
                    </div>
                    <p>${tool.description}</p>
                </div>
            `).join('\n            ')}
        </div>
    `;
}

export const herramientasTemplate = {
    versionControl: [],
    ciSystem: {
        overview: '',
        pipelines: []
    },
    testingTools: {
        overview: '',
        types: [],
        examples: []
    },
    developmentTools: [],
    debuggingTools: {
        overview: '',
        tools: []
    },
    codeAnalyzers: [],
    linters: [],
    transpilers: {
        overview: ''
    },
    deploymentTools: {
        overview: '',
        tools: []
    },
    projectManagement: {
        overview: '',
        tools: []
    }
};

export const herramientasPrompt = `
Genera el contenido para la sección de HERRAMIENTAS DE APOYO de un proyecto intermodular de {curso} curso de {ciclo}.

El proyecto trata sobre: {projectTheme}

Debes incluir:
1. Control de versiones:
   - Herramienta principal (Git)
   - Plataforma (GitHub, GitLab, Bitbucket)
   - Descripción del uso (branches, commits, tags)

2. Integración continua:
   - Sistema utilizado (GitHub Actions, GitLab CI, Jenkins)
   - Descripción de pipelines (mínimo 2-3)
   - Triggers y steps de cada pipeline

3. Gestión de pruebas:
   - Estrategia de testing
   - Tipos de pruebas (unitarias, integración, E2E, rendimiento)
   - Herramientas utilizadas
   - Ejemplos de código de pruebas (1-2 ejemplos)

4. Herramientas de desarrollo:
   - IDE/Editor de código
   - Extensiones/plugins relevantes
   - Otras herramientas (mínimo 5-6 en total)

5. Herramientas de depuración:
   - Debuggers utilizados
   - Herramientas de profiling

6. Analizadores de código y Linters:
   - Herramientas de análisis estático
   - Linters configurados
   - Reglas principales

7. Transpiladores (si aplica):
   - TypeScript, Babel, etc.

8. Herramientas de despliegue:
   - Docker, Kubernetes, Ansible, etc.
   - Herramientas de CI/CD

9. Gestión del proyecto:
   - Trello, Jira, Notion, etc.

IMPORTANTE:
- Incluye versiones concretas de las herramientas
- Explica el propósito de cada una
- Longitud mínima: 600 palabras
`;
