/**
 * Sección: Estado del Arte
 * 
 * 🌐 ¿Qué está pasando en el mundo? 
 * No vamos a inventar la rueda, vamos a ver cómo la usan otros y cómo la vamos a mejorar nosotros.
 * 
 * ⏱️ Tiempo estimado: 60-90 minutos.
 */

export const estadoArteIcon = '🌐';

export function generateEstadoArte(projectData) {
    const {
        relatedTechnologies,
        existingSolutions,
        marketAnalysis,
        competitiveAnalysis,
        projectInnovations
    } = projectData;

    return `
        <div class="prose max-w-none">
            <div class="estimate-badge">
                <span>⏱️</span> Tiempo estimado: 60-90 min.
            </div>

            <div class="callout callout-info mb-8">
                <div class="callout-title">
                    <span>💡</span>
                    <span>¿Qué estamos haciendo aquí?</span>
                </div>
                <p>
                    Aquí investigamos qué herramientas existen ya y qué están haciendo otras empresas. 
                    Es como espiar a la competencia para aprender de sus aciertos y no cometer sus errores.
                </p>
                <div class="mt-4 p-3 bg-blue-100/50 rounded-lg border border-blue-200">
                    <p class="text-xs font-bold mb-1">🚀 CONSEJO RÁPIDO:</p>
                    <p class="text-xs m-0">No hace falta que seas un historiador. Céntrate en lo que se usa HOY y lo que vendrá MAÑANA.</p>
                </div>
            </div>

            <h3 id="tecnologias-relacionadas">2.1. Tecnologías en el Mercado</h3>
            <div class="callout callout-warning">
                <div class="callout-title">
                    <span>🔧</span>
                    <span>¿Con qué herramientas juegan los demás?</span>
                </div>
                <p>Analiza 2 o 3 tecnologías que se usen para resolver problemas como el tuyo.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                ${(relatedTechnologies || []).map(tech => `
                    <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                        <h4 class="text-blue-600 font-bold m-0 mb-2 p-0 border-none">${tech.name}</h4>
                        <p class="text-xs text-slate-600 mb-2">${tech.description}</p>
                        <div class="flex gap-2">
                            <span class="text-[10px] bg-green-50 text-green-700 px-2 py-0.5 rounded font-bold">👍 Pros</span>
                            <span class="text-[10px] bg-red-50 text-red-700 px-2 py-0.5 rounded font-bold">👎 Contras</span>
                        </div>
                    </div>
                `).join('\n            ')}
            </div>

            <h3 id="soluciones-existentes">2.2. Soluciones Actuales</h3>
            <div class="callout callout-info">
                <div class="callout-title">
                    <span>🏢</span>
                    <span>¿Quién más lo hace?</span>
                </div>
                <p>Busca empresas o software que ya hagan algo parecido. ¡Compara!</p>
            </div>

            <div class="table-container shadow-sm border border-slate-200 rounded-2xl overflow-hidden my-6">
                <table class="w-full text-sm">
                    <thead class="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th class="px-4 py-3 text-left font-bold text-slate-500">Solución</th>
                            <th class="px-4 py-3 text-left font-bold text-slate-500">Lo mejor</th>
                            <th class="px-4 py-3 text-left font-bold text-slate-500">Lo peor</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${(existingSolutions || []).map(sol => `
                            <tr>
                                <td class="px-4 py-3 font-bold">${sol.name}</td>
                                <td class="px-4 py-3 text-slate-600">${sol.features}</td>
                                <td class="px-4 py-3 text-red-500">${sol.limitations}</td>
                            </tr>
                        `).join('\n                    ')}
                    </tbody>
                </table>
            </div>

            <div class="callout callout-success my-8">
                <div class="callout-title">
                    <span>✨</span>
                    <span>Tu Toque Especial</span>
                </div>
                <p>¿Qué vas a aportar tú que no tengan los demás? Esta es la parte donde brilla tu proyecto.</p>
                <ul class="mt-2">
                    ${(projectInnovations || []).map(inn => `<li>🚀 ${inn}</li>`).join('\n                    ')}
                </ul>
            </div>

            <div class="mt-12 p-6 bg-slate-900 rounded-2xl text-white shadow-xl relative overflow-hidden">
                <div class="absolute top-0 right-0 p-4 opacity-10 text-6xl">🌐</div>
                <h4 class="text-white font-bold mb-4">🏆 Checklist de esta sección</h4>
                <ul class="space-y-2 text-sm text-slate-300">
                    <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> ¿Has mencionado tecnologías reales y actuales?</li>
                    <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> ¿Has dejado claro por qué tu solución es necesaria?</li>
                </ul>
            </div>
        </div>
    `;
}

export const estadoArteTemplate = {
    relatedTechnologies: [],
    existingSolutions: [],
    marketAnalysis: '',
    competitiveAnalysis: '',
    projectInnovations: []
};

export const estadoArtePrompt = `
Eres un investigador tecnológico con mucha chispa. Genera el ESTADO DEL ARTE.

PROYECTO: {projectTheme}
CURSO: {curso}
CICLO: {ciclo}

INSTRUCCIONES:
- Analiza qué se usa hoy en día para este tipo de proyectos.
- Compara soluciones reales (marcas, software libre, etc.).
- Sé muy visual: usa listas y tablas.
- Explica de forma sencilla por qué este proyecto es una mejora respecto a lo que hay.

DATOS (JSON):
- relatedTechnologies: [{name, description, advantages, limitations}]
- existingSolutions: [{name, features, limitations}]
- projectInnovations: ["Innovación 1", "Innovación 2"]
`;
