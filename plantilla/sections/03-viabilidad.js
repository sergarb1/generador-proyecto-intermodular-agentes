/**
 * Sección: Estudio de Viabilidad
 * 
 * 📈 ¿Es posible hacerlo? 
 * Aquí jugamos a ser estrategas. Analizamos los riesgos, los costes y el tiempo.
 * 
 * ⏱️ Tiempo estimado: 90-120 minutos.
 */

export const viabilidadIcon = '📈';

export function generateViabilidad(projectData) {
    const {
        dafoAnalysis,
        cameAnalysis,
        marketStudy,
        technicalViability,
        economicViability,
        hardwareResources,
        softwareResources,
        humanResources,
        temporalViability,
        timeline
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
                    Queremos demostrar que el proyecto no es solo una buena idea, sino que es REALIZABLE. 
                    Analizamos si tenemos el dinero, las máquinas, el tiempo y las ganas para terminarlo con éxito.
                </p>
                <div class="mt-4 p-3 bg-blue-100/50 rounded-lg border border-blue-200">
                    <p class="text-xs font-bold mb-1">🚀 CONSEJO DE ESTRATEGIA:</p>
                    <p class="text-xs m-0">El DAFO es como un mapa de RPG: conoce tus debilidades para que los enemigos no te pillen por sorpresa.</p>
                </div>
            </div>

            <h3 id="analisis-dafo">3.1. Análisis DAFO</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div class="p-4 bg-red-50 border border-red-100 rounded-2xl">
                    <h4 class="text-red-700 font-bold m-0 mb-2 p-0 border-none flex items-center gap-2"><span>⚠️</span> Debilidades</h4>
                    <ul class="text-xs text-red-800 m-0 pl-4">
                        ${(dafoAnalysis?.debilidades || []).map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="p-4 bg-amber-50 border border-amber-100 rounded-2xl">
                    <h4 class="text-amber-700 font-bold m-0 mb-2 p-0 border-none flex items-center gap-2"><span>🚨</span> Amenazas</h4>
                    <ul class="text-xs text-amber-800 m-0 pl-4">
                        ${(dafoAnalysis?.amenazas || []).map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl">
                    <h4 class="text-emerald-700 font-bold m-0 mb-2 p-0 border-none flex items-center gap-2"><span>💪</span> Fortalezas</h4>
                    <ul class="text-xs text-emerald-800 m-0 pl-4">
                        ${(dafoAnalysis?.fortalezas || []).map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="p-4 bg-blue-50 border border-blue-100 rounded-2xl">
                    <h4 class="text-blue-700 font-bold m-0 mb-2 p-0 border-none flex items-center gap-2"><span>🎯</span> Oportunidades</h4>
                    <ul class="text-xs text-blue-800 m-0 pl-4">
                        ${(dafoAnalysis?.oportunidades || []).map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <h3 id="recursos">3.2. Recursos Necesarios</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
                <div>
                    <h4 class="text-slate-800 font-bold flex items-center gap-2 border-none"><span>💻</span> Hardware</h4>
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <ul class="text-xs space-y-2 m-0 list-none">
                            ${(hardwareResources || []).map(hw => `<li class="flex justify-between"><span>${hw.name}</span> <span class="font-bold">${hw.cost}</span></li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div>
                    <h4 class="text-slate-800 font-bold flex items-center gap-2 border-none"><span>💿</span> Software</h4>
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <ul class="text-xs space-y-2 m-0 list-none">
                            ${(softwareResources || []).map(sw => `<li class="flex justify-between"><span>${sw.name}</span> <span class="font-bold text-green-600">${sw.cost}</span></li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>

            <h3 id="planificacion">3.3. Planificación Temporal</h3>
            <div class="callout callout-info">
                <div class="callout-title"><span>📅</span><span>Hoja de ruta</span></div>
                <p>Las fases principales para que el proyecto llegue a buen puerto.</p>
            </div>
            <div class="table-container shadow-sm border border-slate-200 rounded-2xl overflow-hidden my-6">
                <table class="w-full text-xs">
                    <thead class="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th class="px-4 py-3 text-left font-bold text-slate-500">Fase</th>
                            <th class="px-4 py-3 text-left font-bold text-slate-500">Duración</th>
                            <th class="px-4 py-3 text-left font-bold text-slate-500">Resultado</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${(timeline || []).map(phase => `
                            <tr>
                                <td class="px-4 py-3 font-bold">${phase.name}</td>
                                <td class="px-4 py-3">${phase.duration}</td>
                                <td class="px-4 py-3 italic text-blue-600">${phase.deliverable}</td>
                            </tr>
                        `).join('\n                    ')}
                    </tbody>
                </table>
            </div>

            <div class="mt-12 p-8 bg-slate-900 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                <h4 class="text-white font-bold mb-4">🏆 Checklist de Viabilidad</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                    <li class="flex items-center gap-2">¿Es realista el presupuesto?</li>
                    <li class="flex items-center gap-2">¿Tengo tiempo suficiente para todo?</li>
                </div>
            </div>
        </div>
    `;
}

export const viabilidadTemplate = {
    dafoAnalysis: { debilidades: [], amenazas: [], fortalezas: [], oportunidades: [] },
    hardwareResources: [], softwareResources: [], timeline: []
};

export const viabilidadPrompt = `
Eres un analista financiero y de proyectos con mucha visión. Genera el ESTUDIO DE VIABILIDAD.

PROYECTO: {projectTheme}
CURSO: {curso}
CICLO: {ciclo}

INSTRUCCIONES:
- Genera un DAFO realista (5 puntos por sección).
- Lista recursos HW y SW necesarios con precios orientativos en €.
- Crea una línea de tiempo (timeline) de 5 fases coherente con el curso escolar.
- El tono debe ser profesional pero optimista.

DATOS (JSON):
- dafoAnalysis: {debilidades, amenazas, fortalezas, oportunidades}
- hardwareResources: [{name, cost}]
- softwareResources: [{name, cost}]
- timeline: [{name, duration, deliverable}]
`;
