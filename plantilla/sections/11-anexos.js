/**
 * Sección: Anexos
 * 
 * Material complementario del proyecto.
 * 
 * Estructura esperada:
 * - Código fuente relevante
 * - Configuraciones
 * - Manuales
 * - Diagramas adicionales
 * - Capturas de pantalla
 * - Otros documentos
 * 
 * @param {Object} projectData - Datos del proyecto
 * @returns {String} HTML content
 */
export function generateAnexos(projectData) {
    const {
        codeSamples,
        configurations,
        manuals,
        additionalDiagrams,
        screenshots,
        otherDocuments
    } = projectData;

    return `
        <div class="prose">
            <p>
                En esta sección se incluye material complementario que amplía la información 
                presentada en el cuerpo principal del proyecto.
            </p>

            ${(codeSamples || []).length > 0 ? `
                <h3 id="codigo-fuente">Código Fuente Relevante</h3>
                ${(codeSamples || []).map((sample, index) => `
                    <div class="callout callout-info">
                        <div class="callout-title">
                            <span>📄</span>
                            <span>Anexo ${String.fromCharCode(65 + index)}: ${sample.title}</span>
                        </div>
                        <p>${sample.description}</p>
                        <p><strong>Archivo:</strong> <code>${sample.file}</code></p>
                        <pre><code>${sample.code}</code></pre>
                    </div>
                `).join('\n                ')}
            ` : ''}

            ${(configurations || []).length > 0 ? `
                <h3 id="configuraciones">Configuraciones</h3>
                ${(configurations || []).map((config, index) => `
                    <div class="callout callout-info">
                        <div class="callout-title">
                            <span>⚙️</span>
                            <span>Anexo ${String.fromCharCode(65 + (codeSamples?.length || 0) + index)}: ${config.title}</span>
                        </div>
                        <p>${config.description}</p>
                        <p><strong>Archivo:</strong> <code>${config.file}</code></p>
                        <pre><code>${config.content}</code></pre>
                    </div>
                `).join('\n                ')}
            ` : ''}

            ${(manuals || []).length > 0 ? `
                <h3 id="manuales">Manuales</h3>
                ${(manuals || []).map((manual, index) => `
                    <div class="callout callout-warning">
                        <div class="callout-title">
                            <span>📖</span>
                            <span>Anexo ${String.fromCharCode(65 + (codeSamples?.length || 0) + (configurations?.length || 0) + index)}: ${manual.title}</span>
                        </div>
                        <p>${manual.description}</p>
                        ${manual.content}
                    </div>
                `).join('\n                ')}
            ` : ''}

            ${(additionalDiagrams || []).length > 0 ? `
                <h3 id="diagramas-adicionales">Diagramas Adicionales</h3>
                ${(additionalDiagrams || []).map((diagram, index) => `
                    <div class="callout callout-info">
                        <div class="callout-title">
                            <span>📊</span>
                            <span>Anexo ${String.fromCharCode(65 + (codeSamples?.length || 0) + (configurations?.length || 0) + (manuals?.length || 0) + index)}: ${diagram.title}</span>
                        </div>
                        <p>${diagram.description}</p>
                        ${diagram.content}
                    </div>
                `).join('\n                ')}
            ` : ''}

            ${(screenshots || []).length > 0 ? `
                <h3 id="capturas-pantalla">Capturas de Pantalla</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${(screenshots || []).map((screenshot, index) => `
                        <div class="callout callout-info">
                            <div class="callout-title">
                                <span>📸</span>
                                <span>${screenshot.title}</span>
                            </div>
                            <p>${screenshot.description}</p>
                            ${screenshot.image ? `<img src="${screenshot.image}" alt="${screenshot.title}" class="mt-2">` : ''}
                        </div>
                    `).join('\n                    ')}
                </div>
            ` : ''}

            ${(otherDocuments || []).length > 0 ? `
                <h3 id="otros-documentos">Otros Documentos</h3>
                ${(otherDocuments || []).map((doc, index) => `
                    <div class="callout callout-warning">
                        <div class="callout-title">
                            <span>📑</span>
                            <span>Anexo ${String.fromCharCode(65 + (codeSamples?.length || 0) + (configurations?.length || 0) + (manuals?.length || 0) + (additionalDiagrams?.length || 0) + (screenshots?.length || 0) + index)}: ${doc.title}</span>
                        </div>
                        <p>${doc.description}</p>
                        ${doc.content}
                    </div>
                `).join('\n                ')}
            ` : ''}

            <div class="callout callout-success mt-8">
                <div class="callout-title">
                    <span>📎</span>
                    <span>Nota sobre los Anexos</span>
                </div>
                <p>
                    Los anexos incluidos en esta sección son material complementario que puede ser 
                    consultado para obtener información más detallada sobre aspectos específicos del 
                    proyecto. No es necesario leer todos los anexos para comprender el proyecto, pero 
                    proporcionan información valiosa para aquellos interesados en los detalles técnicos.
                </p>
            </div>
        </div>
    `;
}

export const anexosTemplate = {
    codeSamples: [],
    configurations: [],
    manuals: [],
    additionalDiagrams: [],
    screenshots: [],
    otherDocuments: []
};

export const anexosPrompt = `
Genera el contenido para la sección de ANEXOS de un proyecto intermodular de {curso} curso de {ciclo}.

El proyecto trata sobre: {projectTheme}

Debes incluir:
1. Código fuente relevante (mínimo 2-3 ejemplos):
   - Título descriptivo
   - Descripción del código
   - Nombre del archivo
   - Código formateado (fragmentos de 10-30 líneas)

2. Configuraciones (mínimo 2-3):
   - Título
   - Descripción
   - Nombre del archivo de configuración
   - Contenido de la configuración

3. Manuales (1-2):
   - Título
   - Descripción
   - Contenido del manual (extracto)

4. Diagramas adicionales (1-2):
   - Título
   - Descripción
   - Contenido (descripción del diagrama o imagen si está disponible)

5. Capturas de pantalla (2-3):
   - Título
   - Descripción
   - Referencia a la imagen

6. Otros documentos (1-2):
   - Título
   - Descripción
   - Contenido relevante

IMPORTANTE:
- Los anexos deben ser relevantes y complementarios
- No incluir código sensible o contraseñas
- Los fragmentos de código deben estar bien formateados
- Cada anexo debe tener una descripción clara
- Longitud mínima: 500 palabras
`;
