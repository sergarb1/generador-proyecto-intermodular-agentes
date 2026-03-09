/**
 * Sección: Implementación
 * 
 * Detalle de cómo se lleva a cabo la implementación del proyecto.
 * 
 * Estructura esperada:
 * Para ASIR:
 *   - Instalación y configuración de dispositivos de red
 *   - Configuración de soluciones de seguridad
 *   - Configuración de virtualización
 *   - Configuración de almacenamiento en red
 *   - Configuración de copias de seguridad
 * 
 * Para DAM/DAW:
 *   - Tecnologías elegidas y justificación
 *   - Desarrollo de servicios/desarrollo multiplataforma
 *   - Documentación interna de código
 *   - Documentación externa
 *   - Manual del usuario
 * 
 * @param {Object} projectData - Datos del proyecto
 * @param {String} cycle - Ciclo formativo
 * @returns {String} HTML content
 */
export function generateImplementacion(projectData, cycle = 'ASIR') {
    const {
        technologies,
        networkDevicesConfig,
        securityConfig,
        virtualizationConfig,
        storageConfig,
        backupConfig,
        serviceDevelopment,
        multiplatformDevelopment,
        codeDocumentation,
        externalDocumentation,
        userManual
    } = projectData;

    // ASIR specific implementation
    if (cycle === 'ASIR' || cycle === 'SMR') {
        return `
            <div class="prose">
                <h3 id="tecnologias-empleadas">Tecnologías Empleadas</h3>
                <p>
                    Para la implementación de este proyecto se han seleccionado las siguientes tecnologías:
                </p>
                ${(technologies || []).map(tech => `
                    <div class="callout callout-info">
                        <div class="callout-title">
                            <span>🔧</span>
                            <span>${tech.name}</span>
                        </div>
                        <p>${tech.description}</p>
                        <p><strong>Justificación:</strong> ${tech.justification}</p>
                    </div>
                `).join('\n                ')}

                <h3 id="instalacion-dispositivos">Instalación y Configuración de Dispositivos de Red</h3>
                <p>
                    ${networkDevicesConfig || 'Descripción de la instalación y configuración...'}
                </p>

                <h3 id="configuracion-seguridad">Configuración de Soluciones de Seguridad</h3>
                <p>
                    ${securityConfig || 'Descripción de la configuración de seguridad...'}
                </p>

                <h3 id="virtualizacion">Configuración de Soluciones de Virtualización</h3>
                <p>
                    ${virtualizationConfig || 'Descripción de la virtualización...'}
                </p>

                <h3 id="almacenamiento">Configuración de Almacenamiento en Red</h3>
                <p>
                    ${storageConfig || 'Descripción del almacenamiento en red...'}
                </p>

                <h3 id="copias-seguridad">Configuración de Copias de Seguridad</h3>
                <p>
                    ${backupConfig || 'Descripción del plan de copias de seguridad...'}
                </p>
            </div>
        `;
    }

    // DAM/DAW specific implementation
    return `
        <div class="prose">
            <h3 id="tecnologias-elegidas">Tecnologías Elegidas y Justificación</h3>
            <p>
                A continuación se detallan las tecnologías seleccionadas para el desarrollo del proyecto:
            </p>
            
            ${(technologies || []).map(tech => `
                <div class="callout callout-info">
                    <div class="callout-title">
                        <span>🔧</span>
                        <span>${tech.name}</span>
                    </div>
                    <p><strong>Tipo:</strong> ${tech.type}</p>
                    <p>${tech.description}</p>
                    <p><strong>Justificación:</strong> ${tech.justification}</p>
                    <p><strong>Versión:</strong> ${tech.version}</p>
                </div>
            `).join('\n            ')}

            <h3 id="desarrollo-servicios">Desarrollo de Servicios</h3>
            <h4 id="descripcion-general">Descripción General</h4>
            <p>
                ${serviceDevelopment?.overview || 'Descripción general del desarrollo de servicios...'}
            </p>

            <h4 id="seguridad-servicios">Seguridad</h4>
            <p>
                ${serviceDevelopment?.security || 'Medidas de seguridad implementadas...'}
            </p>

            <h3 id="desarrollo-multiplataforma">Desarrollo Multiplataforma</h3>
            <h4 id="descripcion-general-cliente">Descripción General</h4>
            <p>
                ${multiplatformDevelopment?.overview || 'Descripción general del desarrollo multiplataforma...'}
            </p>

            <h4 id="compatibilidad-navegadores">Compatibilidad en Distintos Dispositivos</h4>
            <p>
                ${multiplatformDevelopment?.compatibility || 'Estrategias de compatibilidad...'}
            </p>

            <h3 id="documentacion-interna">Documentación Interna de Código</h3>
            <p>
                ${codeDocumentation || 'Descripción de la documentación interna...'}
            </p>

            <h3 id="documentacion-externa">Documentación Externa</h3>
            <p>
                ${externalDocumentation || 'Descripción de la documentación externa...'}
            </p>

            <h3 id="manual-usuario">Manual del Usuario</h3>
            <p>
                ${userManual || 'Descripción del manual de usuario...'}
            </p>
        </div>
    `;
}

export const implementacionTemplate = {
    technologies: [],
    networkDevicesConfig: '',
    securityConfig: '',
    virtualizationConfig: '',
    storageConfig: '',
    backupConfig: '',
    serviceDevelopment: {
        overview: '',
        security: ''
    },
    multiplatformDevelopment: {
        overview: '',
        compatibility: ''
    },
    codeDocumentation: '',
    externalDocumentation: '',
    userManual: ''
};

export const implementacionPrompt = `
Genera el contenido para la sección de IMPLEMENTACIÓN de un proyecto intermodular de {curso} curso de {ciclo}.

El proyecto trata sobre: {projectTheme}

{CYCLE_SPECIFIC_INSTRUCTIONS}

IMPORTANTE:
- Describe procesos concretos y específicos
- Incluye comandos, configuraciones o fragmentos de código relevantes
- Explica el "por qué" de cada decisión técnica
- Longitud mínima: 700 palabras
`;

export const getImplementacionPromptForCycle = (cycle) => {
    if (cycle === 'ASIR' || cycle === 'SMR') {
        return `
Para proyectos de ${cycle}, debes incluir:
1. Lista de tecnologías empleadas (mínimo 5) con su justificación
2. Instalación y configuración de dispositivos de red (routers, switches, firewalls, etc.)
3. Configuración de soluciones de seguridad (reglas de firewall, políticas, etc.)
4. Configuración de soluciones de virtualización (máquinas virtuales, redes virtuales)
5. Configuración de almacenamiento en red (NAS, SAN, servidores de archivos)
6. Configuración de copias de seguridad (plan, políticas de retención, herramientas)`;
    }
    
    return `
Para proyectos de ${cycle}, debes incluir:
1. Tecnologías elegidas (mínimo 6-8) con su justificación:
   - Lenguajes de programación
   - Frameworks y bibliotecas
   - Bases de datos
   - Herramientas de desarrollo
2. Desarrollo de servicios:
   - Descripción general de la arquitectura backend
   - Medidas de seguridad (inyección SQL, XSS, CSRF, etc.)
3. Desarrollo multiplataforma:
   - Descripción general del frontend
   - Compatibilidad con navegadores y dispositivos
4. Documentación interna de código:
   - Ejemplos de comentarios
   - Descripción de estructura de ficheros
5. Documentación externa (API, despliegue, etc.)
6. Manual del usuario (puntos principales)`;
};
