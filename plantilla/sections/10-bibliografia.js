/**
 * Sección: Bibliografía
 * 
 * 📚 Tus fuentes de sabiduría.
 * Todo buen profesional se apoya en el trabajo de otros. Aquí damos crédito a quien lo merece.
 * 
 */

export const bibliografiaIcon = '📚';

export function generateBibliografia(projectData) {
    const {
        websites,
        documentation,
        books
    } = projectData;

    return `
        <div class="prose max-w-none">
            <div class="callout callout-info mb-8">
                <div class="callout-title">
                    <span>💡</span>
                    <span>¿Qué estamos haciendo aquí?</span>
                </div>
                <p>
                    Aquí listamos las webs, libros y manuales que has consultado. 
                    Es importante para que el tribunal vea que has investigado y no te has inventado las cosas.
                </p>
                <div class="mt-4 p-3 bg-blue-100/50 rounded-lg border border-blue-200">
                    <p class="text-xs font-bold mb-1">🚀 CONSEJO DE INVESTIGADOR:</p>
                    <p class="text-xs m-0">No pongas solo el enlace de Google. Pon la web específica que te ayudó (ej: StackOverflow, Documentación oficial de Microsoft, etc.).</p>
                </div>
            </div>

            <h3 id="direcciones-web">10.1. Recursos Web y Tutoriales</h3>
            <div class="space-y-4 my-6">
                ${(websites || []).map(site => `
                    <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-blue-300 transition-colors">
                        <div class="flex items-start gap-3">
                            <span class="text-xl">🌐</span>
                            <div class="overflow-hidden">
                                <h4 class="text-sm font-bold text-slate-800 m-0 p-0 border-none truncate">${site.title}</h4>
                                <a href="${site.url}" target="_blank" class="text-[10px] text-blue-500 hover:underline block truncate mb-1">${site.url}</a>
                                <p class="text-[10px] text-slate-500 m-0 italic">${site.annotation}</p>
                            </div>
                        </div>
                    </div>
                `).join('\n                ')}
            </div>

            <h3 id="documentacion">10.2. Documentación Oficial y Libros</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${(documentation || []).map(doc => `
                    <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <h4 class="text-xs font-bold text-slate-700 m-0 mb-1 border-none">${doc.title}</h4>
                        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">${doc.organization}</span>
                        <p class="text-[10px] text-slate-500 m-0 mt-2">${doc.annotation}</p>
                    </div>
                `).join('')}
            </div>

            <div class="mt-12 p-6 bg-slate-900 rounded-2xl text-white text-center">
                <p class="text-xs text-slate-400 m-0">"Si he visto más lejos, es poniéndome sobre los hombros de gigantes" — Isaac Newton</p>
            </div>
        </div>
    `;
}

export const bibliografiaTemplate = {
    websites: [],
    documentation: []
};

export const bibliografiaPrompt = `
Eres un bibliotecario tecnológico experto. Genera la sección de BIBLIOGRAFÍA.

PROYECTO: {projectTheme}
CURSO: {curso}
CICLO: {ciclo}

INSTRUCCIONES:
- Genera 8-10 fuentes web reales y relevantes (documentación, foros, tutoriales).
- Incluye documentación oficial de las herramientas usadas.
- Para cada fuente, añade una breve nota de por qué ha sido útil.
- Usa un formato limpio y profesional.

DATOS (JSON):
- websites: [{title, url, annotation}]
- documentation: [{title, organization, annotation}]
`;
