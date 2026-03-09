/**
 * Sección: Conclusiones
 * 
 * 🏁 ¡Meta alcanzada!
 * Aquí reflexionamos sobre lo que hemos conseguido, lo que nos ha costado y lo que haríamos después.
 * 
 * ⏱️ Tiempo estimado: 60-75 minutos.
 */

export const conclusionesIcon = '🏁';

export function generateConclusiones(projectData) {
    const {
        projectConclusions,
        personalConclusions,
        futureImprovements
    } = projectData;

    return `
        <div class="prose max-w-none">
            <div class="estimate-badge">
                <span>⏱️</span> Tiempo estimado: 60-75 min.
            </div>

            <div class="callout callout-success mb-8">
                <div class="callout-title">
                    <span>🏆</span>
                    <span>¡Lo has conseguido!</span>
                </div>
                <p>
                    Es el momento de mirar atrás y ver todo el camino recorrido. 
                    Resume tus logros y sé sincero/a con lo que has aprendido.
                </p>
                <div class="mt-4 p-3 bg-green-100/50 rounded-lg border border-green-200">
                    <p class="text-xs font-bold mb-1">🚀 CONSEJO FINAL:</p>
                    <p class="text-xs m-0">No digas solo que ha sido "divertido". Menciona problemas reales que has superado. Eso es lo que más valoran los profes.</p>
                </div>
            </div>

            <h3 id="conclusiones-trabajo">9.1. Conclusiones del Trabajo</h3>
            <p class="text-sm text-slate-600">${projectConclusions?.overview || 'Resume aquí los resultados técnicos de tu proyecto...'}</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div class="p-5 bg-blue-50 border border-blue-100 rounded-2xl">
                    <h4 class="text-blue-700 font-bold m-0 mb-3 p-0 border-none flex items-center gap-2"><span>✅</span> Objetivos Logrados</h4>
                    <ul class="text-xs m-0 pl-4 space-y-1">
                        ${(projectConclusions?.objectives || []).map(obj => `<li>${obj.name}</li>`).join('')}
                    </ul>
                </div>
                <div class="p-5 bg-amber-50 border border-amber-100 rounded-2xl">
                    <h4 class="text-amber-700 font-bold m-0 mb-3 p-0 border-none flex items-center gap-2"><span>🚧</span> Limitaciones</h4>
                    <ul class="text-xs m-0 pl-4 space-y-1">
                        ${(projectConclusions?.limitations || []).map(lim => `<li>${lim.title}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <h3 id="conclusiones-personales">9.2. Reflexión Personal</h3>
            <div class="callout callout-info">
                <div class="callout-title"><span>🧠</span><span>¿Qué te llevas tú?</span></div>
                <p>Más allá del código, ¿qué has aprendido sobre ti mismo o sobre cómo trabajar?</p>
            </div>
            <p class="text-sm italic text-slate-500 bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-200">
                ${personalConclusions?.overview || '[Escribe aquí tu reflexión personal]'}
            </p>

            <h3 id="mejoras-futuras">9.3. El Futuro del Proyecto</h3>
            <div class="callout callout-warning">
                <div class="callout-title"><span>🚀</span><span>¿Y si tuviéramos más tiempo?</span></div>
                <p>Un buen proyecto nunca se termina del todo, se abandona. ¿Cómo lo seguirías mejorando?</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${(futureImprovements?.shortTerm || []).map(imp => `
                    <div class="p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                        <span class="text-[10px] font-bold text-blue-400 uppercase block mb-1">Próxima mejora</span>
                        <span class="text-xs font-bold text-slate-700">${imp.name}</span>
                    </div>
                `).join('')}
            </div>

            <div class="mt-12 p-10 bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl text-white text-center shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">✨</div>
                <h4 class="text-3xl font-extrabold mb-4 border-none">🎉 ¡ENHORABUENA! 🎉</h4>
                <p class="text-blue-100 text-lg m-0">Has finalizado la documentación de tu proyecto intermodular.</p>
                <div class="mt-8 flex justify-center gap-4">
                    <span class="px-4 py-2 bg-white/10 rounded-full text-xs font-bold border border-white/20">Esfuerzo</span>
                    <span class="px-4 py-2 bg-white/10 rounded-full text-xs font-bold border border-white/20">Dedicación</span>
                    <span class="px-4 py-2 bg-white/10 rounded-full text-xs font-bold border border-white/20">Éxito</span>
                </div>
            </div>
        </div>
    `;
}

export const conclusionesTemplate = {
    projectConclusions: { overview: '', objectives: [], limitations: [] },
    personalConclusions: { overview: '' },
    futureImprovements: { shortTerm: [] }
};

export const conclusionesPrompt = `
Eres un coach profesional y motivador. Genera la sección de CONCLUSIONES.

PROYECTO: {projectTheme}
CURSO: {curso}
CICLO: {ciclo}

INSTRUCCIONES:
- Resume los logros técnicos alcanzados.
- Lista los objetivos que se han cumplido con éxito.
- Sé honesto/a con las limitaciones (qué no se pudo hacer por tiempo).
- Escribe una reflexión personal que suene a alguien que ha crecido como profesional.
- Propón 3-4 mejoras futuras interesantes.
- El tono debe ser de victoria y satisfacción.

DATOS (JSON):
- projectConclusions: {overview, objectives: [{name}], limitations: [{title}]}
- personalConclusions: {overview}
- futureImprovements: {shortTerm: [{name}]}
`;
