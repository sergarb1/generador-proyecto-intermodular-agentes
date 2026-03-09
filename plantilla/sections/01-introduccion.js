/**
 * Sección: Introducción
 * 
 * 👋 ¡Bienvenido al inicio de tu gran proyecto! Esta es la carta de presentación.
 * Aquí explicas el "qué", el "por qué" y el "para quién".
 * 
 * ⏱️ Tiempo estimado: 45-60 minutos (¡no te agobies, ve paso a paso!)
 */

export const introduccionIcon = '👋';

export function generateIntroduccion(projectData) {
    const {
        projectTitle,
        companyContext,
        problemStatement,
        currentSolution,
        proposedSolution,
        projectGoals,
        keyQuestions
    } = projectData;

    return `
        <div class="prose max-w-none">
            <div class="estimate-badge">
                <span>⏱️</span> Tiempo estimado: 60 min.
            </div>

            <div class="callout callout-info mb-8">
                <div class="callout-title">
                    <span>💡</span>
                    <span>¿Qué estamos haciendo aquí?</span>
                </div>
                <p>
                    La introducción es donde enganchas al lector. Debes contar una historia: 
                    hay una empresa, tienen un problema que les quita el sueño, y tú tienes la solución mágica.
                </p>
                <div class="mt-4 p-3 bg-blue-100/50 rounded-lg border border-blue-200">
                    <p class="text-xs font-bold mb-1">🚀 CONSEJO RÁPIDO:</p>
                    <p class="text-xs m-0">No intentes escribirlo todo de una vez. Primero rellena los huecos y luego une los párrafos.</p>
                </div>
            </div>

            <h3 id="descripcion-proyecto">1.1. Descripción del Proyecto</h3>
            <div class="callout callout-warning">
                <div class="callout-title">
                    <span>📝</span>
                    <span>Tu misión en esta parte:</span>
                </div>
                <ul>
                    <li>Presenta el nombre de tu proyecto (que suene potente).</li>
                    <li>Explica en 3 frases qué vas a montar.</li>
                    <li>Di claramente qué vas a aportar tú como experto/a.</li>
                </ul>
            </div>
            <p class="text-gray-400 italic bg-slate-50 p-4 rounded-lg border-2 border-dashed border-slate-200">
                [Escribe aquí tu descripción - Imagina que se lo cuentas a un amigo que no sabe nada de informática]
            </p>

            <h3 id="contexto-empresarial">1.2. Contexto Empresarial</h3>
            <div class="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 mb-6">
                <div class="flex items-center gap-3 mb-4">
                    <span class="text-2xl">🏢</span>
                    <h4 class="text-lg font-bold m-0 p-0 border-none">La Empresa</h4>
                </div>
                <p class="text-sm leading-relaxed">${companyContext || 'Aquí aparecerá la descripción de la empresa que te han dado.'}</p>
            </div>

            <div class="callout callout-warning">
                <div class="callout-title">
                    <span>🔍</span>
                    <span>Investiga un poco:</span>
                </div>
                <p>Busca en Google empresas similares. ¿Cuánta gente suele trabajar ahí? ¿Qué software usan? ¡Añade esos detalles para que parezca real!</p>
            </div>

            <div class="callout callout-error my-8">
                <div class="callout-title">
                    <span>🔥</span>
                    <span>¡Tenemos un problema!</span>
                </div>
                <p class="font-bold mb-2">Lo que está fallando:</p>
                <p class="text-sm opacity-90">${problemStatement || 'Aquí se describirá el problema a resolver.'}</p>
                <hr class="my-3 border-red-200 opacity-30">
                <p class="text-xs italic">¿Qué pasa si no lo arreglamos? ¿Pierden dinero? ¿Se enfadan los clientes? ¡Cuéntalo!</p>
            </div>

            <h3 id="situacion-actual">1.3. Situación Actual</h3>
            <div class="callout callout-warning">
                <div class="callout-title">
                    <span>🕰️</span>
                    <span>¿Cómo lo hacen ahora?</span>
                </div>
                <p>Explica esa forma "antigua" o "manual" de trabajar que tienen ahora. Destaca por qué es un rollo o por qué falla tanto.</p>
            </div>
            <p class="text-gray-400 italic bg-slate-50 p-4 rounded-lg border-2 border-dashed border-slate-200">[Describe el "caos" actual]</p>

            <div class="callout callout-success my-8">
                <div class="callout-title">
                    <span>✨</span>
                    <span>Tu Propuesta Estrella</span>
                </div>
                <p class="mb-4">${proposedSolution || 'Aquí va tu idea para salvar el día.'}</p>
                <div class="bg-white/50 p-3 rounded-lg text-sm">
                    <strong>Beneficios:</strong>
                    <ul class="mt-1">
                        <li>✅ Más rapidez</li>
                        <li>✅ Cero errores</li>
                        <li>✅ Clientes felices</li>
                    </ul>
                </div>
            </div>

            <h3 id="objetivos-principales">1.4. Objetivos del Proyecto</h3>
            <div class="callout callout-info">
                <div class="callout-title">
                    <span>🎯</span>
                    <span>Apunta y dispara</span>
                </div>
                <p>Define 3 cosas concretas que vas a conseguir. Que sean REALISTAS (no digas que vas a hackear la NASA en una tarde).</p>
            </div>
            <ul class="space-y-3 mt-4">
                ${(projectGoals || []).length > 0 
                    ? (projectGoals || []).map(goal => `
                        <li class="flex items-start gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                            <span class="text-green-500 font-bold">✓</span>
                            <span class="text-slate-700">${goal}</span>
                        </li>`).join('\n                ')
                    : '<li class="text-slate-400 italic border-b border-slate-100 pb-2">Objetivo 1: ...</li>\n                <li class="text-slate-400 italic border-b border-slate-100 pb-2">Objetivo 2: ...</li>'
                }
            </ul>

            <div class="mt-12 p-6 bg-slate-900 rounded-2xl text-white shadow-xl relative overflow-hidden">
                <div class="absolute top-0 right-0 p-4 opacity-10 text-6xl rotate-12">🏆</div>
                <h4 class="text-white font-bold mb-4 flex items-center gap-2">
                    <span>⭐</span> Lista de verificación final
                </h4>
                <ul class="space-y-2 text-sm text-slate-300">
                    <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> ¿Has explicado bien quién eres y qué haces?</li>
                    <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> ¿Se entiende el problema sin ser experto?</li>
                    <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> ¿Has puesto objetivos que se puedan medir?</li>
                </ul>
            </div>
        </div>
    `;
}

/**
 * Template vacío con datos estructurados
 */
export const introduccionTemplate = {
    projectTitle: '',
    companyContext: '',
    problemStatement: '',
    currentSolution: '',
    proposedSolution: '',
    projectGoals: [],
    keyQuestions: []
};

/**
 * Prompt pedagógico para el agente
 */
export const introduccionPrompt = `
Eres un tutor experto, empático y con mucha gracia que ayuda a alumnos con TDAH. 
Tu misión es generar el contenido de la INTRODUCCIÓN de su proyecto intermodular.

PROYECTO: {projectTheme}
CURSO: {curso}
CICLO: {ciclo}

REGLAS DE ORO:
1. Usa un lenguaje muy claro y visual.
2. Divide el texto en párrafos cortos (máximo 4 líneas).
3. Usa negritas para conceptos clave.
4. Sé motivador, como un "coach" técnico.
5. NO uses lenguaje aburrido de BOE o leyes.

CONTENIDO A GENERAR (en formato JSON para que lo use la plantilla):
- projectTitle: Un título que mole.
- companyContext: Descripción de la empresa ficticia (sector, tamaño, tecnología).
- problemStatement: Qué les duele (por qué necesitan ayuda).
- currentSolution: Cómo se apañan ahora (normalmente mal).
- proposedSolution: Tu gran idea técnica.
- projectGoals: Lista de 3-5 objetivos SMART.
- keyQuestions: 2-3 dudas que el proyecto aclarará.

Asegúrate de que el contenido sea tan interesante que el alumno quiera empezar a leerlo ya mismo.
`;
