/**
 * Sección: Anexos
 * 
 * 📎 El baúl de los extras.
 * Aquí guardamos todo lo que es importante pero demasiado largo para el cuerpo principal.
 * 
 */

export const anexosIcon = '📎';

export function generateAnexos(projectData) {
    const {
        codeSamples,
        configurations,
        manuals,
        additionalDiagrams,
        screenshots
    } = projectData;

    return `
        <div class="prose max-w-none">
            <div class="callout callout-info mb-8">
                <div class="callout-title">
                    <span>💡</span>
                    <span>¿Qué estamos haciendo aquí?</span>
                </div>
                <p>
                    Los anexos son el lugar para el código fuente largo, los archivos de configuración completos, 
                    los manuales paso a paso y cualquier diagrama extra que quieras incluir.
                </p>
                <div class="mt-4 p-3 bg-blue-100/50 rounded-lg border border-blue-200">
                    <p class="text-xs font-bold mb-1">🚀 CONSEJO DE ORGANIZACIÓN:</p>
                    <p class="text-xs m-0">No lo mezcles todo. Usa títulos claros y organiza los anexos por letras (Anexo A, Anexo B...).</p>
                </div>
            </div>

            <h3 id="codigo-fuente">Anexo A: Código Fuente y Scripts</h3>
            <div class="space-y-6 my-6">
                ${(codeSamples || []).map(sample => `
                    <div class="bg-slate-900 rounded-2xl p-6 text-white overflow-hidden shadow-lg border border-slate-800">
                        <div class="flex justify-between items-center mb-4 border-b border-slate-800 pb-3">
                            <span class="text-[10px] font-mono font-bold text-blue-400">${sample.file}</span>
                            <span class="text-[9px] uppercase tracking-widest text-slate-500">${sample.title}</span>
                        </div>
                        <pre class="text-[10px] leading-relaxed font-mono overflow-x-auto text-blue-100/80"><code>${sample.code}</code></pre>
                    </div>
                `).join('\n                ')}
            </div>

            <h3 id="configuraciones">Anexo B: Configuraciones Detalladas</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                ${(configurations || []).map(config => `
                    <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                        <h4 class="text-xs font-bold text-slate-800 m-0 mb-1 border-none">${config.title}</h4>
                        <p class="text-[10px] text-slate-500 mb-2 italic">${config.description}</p>
                        <div class="bg-slate-800 p-3 rounded-lg text-white font-mono text-[9px] overflow-hidden truncate">
                            ${config.content}
                        </div>
                    </div>
                `).join('\n                ')}
            </div>

            <h3 id="manuales">Anexo C: Guía de Uso Rápido</h3>
            <div class="callout callout-warning">
                <div class="callout-title"><span>📖</span><span>Manual de supervivencia</span></div>
                <p>Pasos rápidos para poner en marcha el proyecto desde cero.</p>
            </div>
            <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <ul class="text-xs text-slate-600 space-y-3 m-0 list-none">
                    ${(manuals || []).map((m, i) => `
                        <li class="flex gap-3">
                            <span class="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-[10px]">${i+1}</span>
                            <span><strong>${m.title}:</strong> ${m.description}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>

            <div class="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                <p class="text-[10px] text-slate-400 m-0 uppercase font-bold tracking-widest">Fin de los Anexos</p>
            </div>
        </div>
    `;
}

export const anexosTemplate = {
    codeSamples: [], configurations: [], manuals: []
};

export const anexosPrompt = `
Eres un documentador técnico detallista. Genera la sección de ANEXOS.

PROYECTO: {projectTheme}
CURSO: {curso}
CICLO: {ciclo}

INSTRUCCIONES:
- Incluye 3 fragmentos de código significativos y bien comentados.
- Añade 2 ejemplos de archivos de configuración (JSON, YAML, .conf, etc.).
- Crea un manual de 4-5 pasos rápidos para la instalación.
- El tono debe ser puramente técnico y de referencia.

DATOS (JSON):
- codeSamples: [{title, file, code}]
- configurations: [{title, description, content}]
- manuals: [{title, description}]
`;
