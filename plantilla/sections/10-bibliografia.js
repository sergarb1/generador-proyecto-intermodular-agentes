/**
 * Sección: Bibliografía
 * 
 * Fuentes utilizadas para elaborar el proyecto.
 * 
 * Estructura esperada:
 * - Libros, artículos y apuntes
 * - Direcciones web
 * - Todas las fuentes deben estar comentadas
 * 
 * @param {Object} projectData - Datos del proyecto
 * @returns {String} HTML content
 */
export function generateBibliografia(projectData) {
    const {
        books,
        articles,
        notes,
        websites,
        documentation,
        videos
    } = projectData;

    return `
        <div class="prose">
            <h3 id="libros-articulos">Libros, Artículos y Apuntes</h3>
            
            ${(books || []).length > 0 ? `
                <h4 id="libros">Libros</h4>
                <ul>
                    ${(books || []).map(book => `
                        <li>
                            <strong>${book.title}</strong><br>
                            <em>${book.author}</em><br>
                            ${book.publisher}, ${book.year}<br>
                            <span class="text-sm text-gray-600">${book.annotation}</span>
                        </li>
                    `).join('\n                    ')}
                </ul>
            ` : ''}

            ${(articles || []).length > 0 ? `
                <h4 id="articulos">Artículos</h4>
                <ul>
                    ${(articles || []).map(article => `
                        <li>
                            <strong>${article.title}</strong><br>
                            <em>${article.author}</em><br>
                            ${article.publication}, ${article.date}<br>
                            <span class="text-sm text-gray-600">${article.annotation}</span>
                        </li>
                    `).join('\n                    ')}
                </ul>
            ` : ''}

            ${(notes || []).length > 0 ? `
                <h4 id="apuntes">Apuntes de Clase</h4>
                <ul>
                    ${(notes || []).map(note => `
                        <li>
                            <strong>${note.title}</strong><br>
                            <em>${note.subject}</em><br>
                            ${note.course}, ${note.academicYear}<br>
                            <span class="text-sm text-gray-600">${note.annotation}</span>
                        </li>
                    `).join('\n                    ')}
                </ul>
            ` : ''}

            <h3 id="direcciones-web">Direcciones Web</h3>
            
            ${(websites || []).map(website => `
                <div class="callout callout-info">
                    <div class="callout-title">
                        <span>🌐</span>
                        <span>${website.title}</span>
                    </div>
                    <p><strong>URL:</strong> <a href="${website.url}" target="_blank" rel="noopener">${website.url}</a></p>
                    <p><strong>Fecha de consulta:</strong> ${website.accessDate}</p>
                    <p>${website.annotation}</p>
                </div>
            `).join('\n            ')}

            ${(documentation || []).length > 0 ? `
                <h3 id="documentacion-oficial">Documentación Oficial</h3>
                <ul>
                    ${(documentation || []).map(doc => `
                        <li>
                            <strong>${doc.title}</strong><br>
                            <em>${doc.organization}</em><br>
                            ${doc.version || ''} ${doc.year || ''}<br>
                            ${doc.url ? `<a href="${doc.url}" target="_blank" rel="noopener">Enlace</a><br>` : ''}
                            <span class="text-sm text-gray-600">${doc.annotation}</span>
                        </li>
                    `).join('\n                    ')}
                </ul>
            ` : ''}

            ${(videos || []).length > 0 ? `
                <h3 id="videos-tutoriales">Videos y Tutoriales</h3>
                <ul>
                    ${(videos || []).map(video => `
                        <li>
                            <strong>${video.title}</strong><br>
                            <em>${video.author || video.channel}</em><br>
                            ${video.platform}, ${video.date}<br>
                            ${video.url ? `<a href="${video.url}" target="_blank" rel="noopener">Enlace</a><br>` : ''}
                            <span class="text-sm text-gray-600">${video.annotation}</span>
                        </li>
                    `).join('\n                    ')}
                </ul>
            ` : ''}

            <div class="callout callout-warning mt-8">
                <div class="callout-title">
                    <span>📚</span>
                    <span>Nota sobre la Bibliografía</span>
                </div>
                <p>
                    Todas las fuentes citadas han sido consultadas durante el desarrollo del proyecto 
                    y han contribuido de manera significativa a la elaboración del mismo. Las anotaciones 
                    incluidas describen la relevancia de cada fuente para el proyecto.
                </p>
            </div>
        </div>
    `;
}

export const bibliografiaTemplate = {
    books: [],
    articles: [],
    notes: [],
    websites: [],
    documentation: [],
    videos: []
};

export const bibliografiaPrompt = `
Genera el contenido para la sección de BIBLIOGRAFÍA de un proyecto intermodular de {curso} curso de {ciclo}.

El proyecto trata sobre: {projectTheme}

Debes incluir:
1. Libros (mínimo 3-4):
   - Título
   - Autor/es
   - Editorial
   - Año
   - Anotación (relevancia para el proyecto)

2. Artículos (mínimo 2-3):
   - Título
   - Autor/es
   - Publicación
   - Fecha
   - Anotación

3. Apuntes de clase (mínimo 2-3):
   - Título/módulo
   - Materia
   - Curso
   - Año académico
   - Anotación

4. Direcciones web (mínimo 8-10):
   - Título del sitio
   - URL completa
   - Fecha de consulta
   - Anotación (qué información se obtuvo)

5. Documentación oficial (mínimo 3-4):
   - Título de la documentación
   - Organización/empresa
   - Versión (si aplica)
   - Año
   - URL (si es online)
   - Anotación

6. Videos/Tutoriales (opcional, 2-3):
   - Título
   - Autor/canal
   - Plataforma (YouTube, Vimeo, etc.)
   - Fecha
   - URL
   - Anotación

IMPORTANTE:
- Todas las fuentes deben estar comentadas (explicar su relevancia)
- Usa formato APA o similar para las referencias
- Incluye fuentes variadas y de calidad
- Las URLs deben ser reales y accesibles
- Longitud mínima: 400 palabras (sin contar las referencias)
`;
