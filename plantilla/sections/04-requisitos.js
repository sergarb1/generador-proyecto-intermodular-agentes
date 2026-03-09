/**
 * Sección: Análisis de Requisitos
 * 
 * 📋 Aquí es donde hacemos la lista de la compra del proyecto.
 * ¿Qué tiene que hacer el sistema? ¿Cómo de rápido tiene que ser?
 * 
 * ⏱️ Tiempo estimado: 90-120 minutos (¡Divide y vencerás!)
 */

export const requisitosIcon = '📋';

export function generateRequisitos(projectData) {
    const {
        functionalRequirements,
        nonFunctionalRequirements,
        useCases,
        riskAnalysis,
        vulnerabilities
    } = projectData;

    return `
        <div class="prose max-w-none">
            <div class="estimate-badge">
                <span>⏱️</span> Tiempo estimado: 90-120 min.
            </div>

            <div class="callout callout-info mb-8">
                <div class="callout-title">
                    <span>💡</span>
                    <span>¿Qué estamos haciendo aquí?</span>
                </div>
                <p>
                    Imagina que el cliente es un genio de la lámpara un poco despistado. 
                    Tienes que decirle EXACTAMENTE qué quieres que haga el programa (Requisitos Funcionales) 
                    y CÓMO de bien quieres que lo haga (Requisitos No Funcionales).
                </p>
                <div class="mt-4 p-3 bg-blue-100/50 rounded-lg border border-blue-200">
                    <p class="text-xs font-bold mb-1">🚀 CONSEJO TDAH:</p>
                    <p class="text-xs m-0">No intentes pensar en todos los requisitos a la vez. Piensa: ¿Qué hace el usuario nada más entrar? ¿Y después? Escríbelo por pasos.</p>
                </div>
            </div>

            <h3 id="requisitos-funcionales">4.1. Requisitos Funcionales</h3>
            <div class="callout callout-warning">
                <div class="callout-title">
                    <span>✅</span>
                    <span>El "Qué" debe hacer</span>
                </div>
                <p>Son las funciones del sistema. Por ejemplo: "El sistema debe permitir hacer login".</p>
            </div>

            <div class="table-container shadow-sm border border-slate-200 rounded-2xl overflow-hidden my-6">
                <table class="w-full">
                    <thead class="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th class="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase">ID</th>
                            <th class="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase">Requisito</th>
                            <th class="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase">Prioridad</th>
                            <th class="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase">Descripción</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${(functionalRequirements || []).map(req => `
                            <tr class="hover:bg-slate-50/50 transition-colors">
                                <td class="px-4 py-4 text-sm font-mono text-blue-600">${req.id}</td>
                                <td class="px-4 py-4 text-sm font-bold text-slate-700">${req.name}</td>
                                <td class="px-4 py-4">
                                    <span class="px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                                        req.priority === 'Alta' ? 'bg-red-100 text-red-700 border border-red-200' :
                                        req.priority === 'Media' ? 'bg-amber-100 text-amber-700 border border-amber-200' :
                                        'bg-emerald-100 text-emerald-700 border border-emerald-200'
                                    }">
                                        ${req.priority}
                                    </span>
                                </td>
                                <td class="px-4 py-4 text-sm text-slate-500">${req.description}</td>
                            </tr>
                        `).join('\n                    ')}
                    </tbody>
                </table>
            </div>

            <h3 id="requisitos-no-funcionales">4.2. Requisitos No Funcionales</h3>
            <div class="callout callout-info">
                <div class="callout-title">
                    <span>⚡</span>
                    <span>El "Cómo" de bien</span>
                </div>
                <p>Rendimiento, seguridad, usabilidad... No es lo que hace, sino las "cualidades" que tiene.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                ${(nonFunctionalRequirements || []).map(req => `
                    <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-300 transition-colors">
                        <div class="flex justify-between items-start mb-2">
                            <span class="text-[10px] font-mono font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded">${req.id}</span>
                            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">${req.category}</span>
                        </div>
                        <h4 class="text-sm font-bold text-slate-800 mb-1 border-none p-0 mt-0">${req.name}</h4>
                        <p class="text-xs text-slate-500 m-0"><strong>Métrica:</strong> ${req.metric}</p>
                    </div>
                `).join('\n                ')}
            </div>

            <h3 id="casos-uso">4.3. Casos de Uso</h3>
            <div class="callout callout-warning">
                <div class="callout-title">
                    <span>🎭</span>
                    <span>Ponte en la piel del usuario</span>
                </div>
                <p>Un caso de uso cuenta una pequeña historia: "El Usuario X quiere hacer la Acción Y para conseguir el Resultado Z".</p>
            </div>
            
            <div class="space-y-6 mt-8">
                ${(useCases || []).map(useCase => `
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-blue-500/5 rounded-full"></div>
                        <h4 class="text-lg font-bold text-blue-700 mb-4 border-none p-0 mt-0 flex items-center gap-2">
                            <span>📽️</span> ${useCase.name}
                        </h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-3">
                                <div>
                                    <span class="text-[10px] font-bold text-slate-400 uppercase block">Actor Principal</span>
                                    <span class="text-sm text-slate-700 font-semibold">👤 ${useCase.actor}</span>
                                </div>
                                <div>
                                    <span class="text-[10px] font-bold text-slate-400 uppercase block">Descripción</span>
                                    <p class="text-xs text-slate-600 m-0">${useCase.description}</p>
                                </div>
                            </div>
                            <div class="bg-white p-4 rounded-xl border border-slate-100">
                                <span class="text-[10px] font-bold text-slate-400 uppercase block mb-2 italic">Flujo de Pasos:</span>
                                <ol class="text-xs text-slate-600 space-y-1.5 ml-4">
                                    ${(useCase.flow || []).map(step => `<li>${step}</li>`).join('\n                        ')}
                                </ol>
                            </div>
                        </div>
                    </div>
                `).join('\n            ')}
            </div>

            <h3 id="analisis-riesgos">4.4. Análisis de Riesgos</h3>
            <div class="callout callout-error">
                <div class="callout-title">
                    <span>💣</span>
                    <span>¿Qué podría salir mal?</span>
                </div>
                <p>Identifica los "peligros" y piensa un plan B. ¡Más vale prevenir!</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                ${(riskAnalysis || []).map(risk => `
                    <div class="p-4 bg-red-50/50 border border-red-100 rounded-xl relative">
                        <div class="flex gap-1 mb-2">
                            <span class="w-2 h-2 rounded-full ${risk.probability === 'Alta' ? 'bg-red-500' : 'bg-amber-400'}"></span>
                            <span class="w-2 h-2 rounded-full ${risk.impact === 'Alto' ? 'bg-red-500' : 'bg-amber-400'}"></span>
                        </div>
                        <h4 class="text-xs font-bold text-red-900 border-none p-0 m-0 mt-0 mb-1">${risk.name}</h4>
                        <p class="text-[10px] text-red-700 leading-tight"><strong>Plan B:</strong> ${risk.mitigation}</p>
                    </div>
                `).join('\n                ')}
            </div>

            <div class="mt-12 p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl text-white shadow-2xl">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-blue-500/20">🏆</div>
                    <div>
                        <h4 class="text-white font-bold m-0 p-0 border-none">¡Sección completada!</h4>
                        <p class="text-slate-400 text-sm m-0">Has definido el ADN de tu proyecto.</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                    <div class="flex items-center gap-2"><span class="text-green-400">✔</span> Requisitos claros y sin dudas</div>
                    <div class="flex items-center gap-2"><span class="text-green-400">✔</span> Riesgos controlados</div>
                    <div class="flex items-center gap-2"><span class="text-green-400">✔</span> Casos de uso bien detallados</div>
                    <div class="flex items-center gap-2"><span class="text-green-400">✔</span> Tono profesional y técnico</div>
                </div>
            </div>
        </div>
    `;
}

export const requisitosTemplate = {
    functionalRequirements: [],
    nonFunctionalRequirements: [],
    useCases: [],
    riskAnalysis: [],
    vulnerabilities: []
};

export const requisitosPrompt = `
Eres un analista de sistemas senior con un don para explicar cosas complejas de forma sencilla. 
Genera el contenido para la sección de ANÁLISIS DE REQUISITOS.

PROYECTO: {projectTheme}
CURSO: {curso}
CICLO: {ciclo}

CRITERIOS DE ÉXITO:
- Los requisitos funcionales (RF) deben ser técnicos pero entendibles.
- Los requisitos no funcionales (RNF) DEBEN tener métricas (ej: "Menos de 2 segundos", "Encriptación AES-256").
- Los casos de uso deben contar una historia de usuario real.
- El análisis de riesgos debe incluir un Plan B (Mitigación) realista.

ESTRUCTURA DE SALIDA (JSON):
- functionalRequirements: [{id, name, priority, description}]
- nonFunctionalRequirements: [{id, category, name, metric}]
- useCases: [{name, actor, description, flow: []}]
- riskAnalysis: [{name, probability, impact, mitigation}]
- vulnerabilities: [{name, description, solution}]

Usa un tono que motive al alumno a entender la importancia de planificar antes de programar.
`;
