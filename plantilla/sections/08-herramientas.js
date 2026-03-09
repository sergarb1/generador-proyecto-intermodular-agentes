/**
 * Sección: Herramientas de Apoyo
 * 
 * 🛠️ Tu cinturón de herramientas.
 * Todo buen profesional tiene sus gadgets. Aquí documentamos el software que te ha ayudado.
 * 
 * ⏱️ Tiempo estimado: 45-60 minutos.
 */

export const herramientasIcon = '🛠️';

export function generateHerramientas(projectData) {
    const {
        versionControl,
        testingTools,
        developmentTools,
        projectManagement
    } = projectData;

    return `
        <div class="prose max-w-none">
            <div class="estimate-badge">
                <span>⏱️</span> Tiempo estimado: 45-60 min.
            </div>

            <div class="callout callout-info mb-8">
                <div class="callout-title">
                    <span>💡</span>
                    <span>¿Qué estamos haciendo aquí?</span>
                </div>
                <p>
                    Aquí listamos todo el software "secundario" pero vital. 
                    Desde el editor de código hasta el sistema para organizar las tareas. 
                    Es el momento de dar crédito a las herramientas que te han hecho la vida más fácil.
                </p>
                <div class="mt-4 p-3 bg-blue-100/50 rounded-lg border border-blue-200">
                    <p class="text-xs font-bold mb-1">🚀 CONSEJO DE PRODUCTIVIDAD:</p>
                    <p class="text-xs m-0">No pongas 100 herramientas. Pon las 5 o 6 que realmente has usado cada día.</p>
                </div>
            </div>

            <h3 id="control-versiones">8.1. Control de Versiones</h3>
            <div class="callout callout-warning">
                <div class="callout-title"><span>📦</span><span>Tu máquina del tiempo</span></div>
                <p>¿Cómo has guardado los cambios? Normalmente usamos Git con algún servicio en la nube.</p>
            </div>
            ${(versionControl || []).map(tool => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl mb-4">
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">🌿</span>
                        <div>
                            <h4 class="m-0 p-0 border-none font-bold text-slate-800">${tool.name}</h4>
                            <p class="text-[10px] font-mono text-blue-600 m-0">${tool.repository}</p>
                        </div>
                    </div>
                </div>
            `).join('\n            ')}

            <h3 id="herramientas-desarrollo">8.2. Entorno de Desarrollo</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                ${(developmentTools || []).map(tool => `
                    <div class="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                        <span class="text-lg">🛠️</span>
                        <div>
                            <span class="text-xs font-bold block">${tool.name}</span>
                            <span class="text-[10px] text-slate-400 block">${tool.category}</span>
                        </div>
                    </div>
                `).join('\n                ')}
            </div>

            <h3 id="gestion-pruebas">8.3. Gestión de Pruebas</h3>
            <div class="callout callout-success">
                <div class="callout-title"><span>🧪</span><span>Laboratorio</span></div>
                <p>¿Cómo has comprobado que todo funciona bien? Listamos las herramientas de test.</p>
            </div>
            <ul class="space-y-2">
                ${(testingTools?.types || []).map(test => `
                    <li class="text-sm flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        <strong>${test.type}:</strong> ${test.tool}
                    </li>
                `).join('')}
            </ul>

            <div class="mt-12 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                <h4 class="text-white font-bold mb-2">🏆 Professional Tooling</h4>
                <p class="text-xs text-slate-400 m-0">Usar herramientas profesionales te convierte en un profesional. ¡Menciónalas con orgullo!</p>
            </div>
        </div>
    `;
}

export const herramientasTemplate = {
    versionControl: [],
    developmentTools: [],
    testingTools: { types: [] }
};

export const herramientasPrompt = `
Eres un experto en herramientas de desarrollo (DevOps). Genera la sección de HERRAMIENTAS.

PROYECTO: {projectTheme}
CURSO: {curso}
CICLO: {ciclo}

INSTRUCCIONES:
- Menciona Git y un repositorio (GitHub/GitLab).
- Lista el IDE (VSCode, IntelliJ, etc.) y extensiones útiles.
- Incluye herramientas de gestión (Trello, Jira o Notion).
- Menciona herramientas de test (Jest, Ping, Traceroute, Postman).
- Usa un tono moderno y ágil.

DATOS (JSON):
- versionControl: [{name, repository}]
- developmentTools: [{name, category}]
- testingTools: {types: [{type, tool}]}
`;
