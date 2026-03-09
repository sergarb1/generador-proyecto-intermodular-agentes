/**
 * Sección: Diseño
 * 
 * 🎨 ¡Aquí es donde dibujas los planos de tu obra maestra!
 * ¿Cómo se conectan los servidores? ¿Cómo es la base de datos?
 * 
 * ⏱️ Tiempo estimado: 120-180 minutos (¡Es la parte más divertida, disfruta!)
 */

export const disenoIcon = '🎨';

export function generateDiseno(projectData) {
    const {
        networkTopology,
        databaseSchema,
        systemArchitecture,
        logicDesign,
        uiDesign
    } = projectData;

    return `
        <div class="prose max-w-none">
            <div class="estimate-badge">
                <span>⏱️</span> Tiempo estimado: 2-3 horas.
            </div>

            <div class="callout callout-info mb-8">
                <div class="callout-title">
                    <span>💡</span>
                    <span>¿Qué estamos haciendo aquí?</span>
                </div>
                <p>
                    El diseño es el mapa de tu tesoro. Si el diseño está bien hecho, 
                    la implementación será como seguir las instrucciones de un mueble de IKEA (¡pero sin que sobren piezas!).
                </p>
                <div class="mt-4 p-3 bg-blue-100/50 rounded-lg border border-blue-200">
                    <p class="text-xs font-bold mb-1">🚀 CONSEJO PARA ENFOCARSE:</p>
                    <p class="text-xs m-0">No intentes dibujarlo todo a la vez. Empieza con un boceto en papel y luego pásalo a limpio con una herramienta como Draw.io o Figma.</p>
                </div>
            </div>

            <h3 id="arquitectura-sistema">5.1. Arquitectura del Sistema</h3>
            <div class="callout callout-warning">
                <div class="callout-title">
                    <span>🏗️</span>
                    <span>La estructura global</span>
                </div>
                <p>Explica qué modelo usas: ¿Cliente-Servidor? ¿Microservicios? ¿Cloud Híbrido? Pon un dibujo (diagrama) que lo resuma todo.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200 text-center mb-6">
                <p class="text-slate-400 italic m-0">[Inserta aquí tu Diagrama de Arquitectura Global]</p>
            </div>

            <h3 id="diseno-red">5.2. Diseño de Red / Topología</h3>
            <div class="callout callout-info">
                <div class="callout-title">
                    <span>🌐</span>
                    <span>¿Cómo se hablan las máquinas?</span>
                </div>
                <p>Dibuja cómo se conectan los routers, switches, servidores y clientes. No olvides las VLANs y las IPs.</p>
            </div>
            <p class="text-sm text-slate-600">${networkTopology || 'Describe aquí tu topología de red...'}</p>

            <h3 id="diseno-datos">5.3. Diseño de Datos</h3>
            <div class="callout callout-success">
                <div class="callout-title">
                    <span>📊</span>
                    <span>El orden de la información</span>
                </div>
                <p>Si usas base de datos, pon el Diagrama Entidad-Relación. Si usas archivos, explica cómo se organizan.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200 text-center mb-6 font-mono text-xs text-slate-400">
                ${databaseSchema || '-- Esperando Diagrama ER --'}
            </div>

            <h3 id="diseno-logico">5.4. Diseño Lógico</h3>
            <div class="callout callout-warning">
                <div class="callout-title">
                    <span>🧠</span>
                    <span>La inteligencia del sistema</span>
                </div>
                <p>¿Qué algoritmos usas? ¿Cómo fluye la información de una parte a otra? Un Diagrama de Flujo ayuda muchísimo aquí.</p>
            </div>

            <div class="mt-12 p-8 bg-indigo-900 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <h4 class="text-white font-bold mb-4 flex items-center gap-2">
                    <span>🎨</span> Checklist de Diseño
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="flex items-center gap-3 bg-white/10 p-3 rounded-xl">
                        <input type="checkbox" class="accent-indigo-500">
                        <span class="text-xs">¿Se entienden todos los diagramas?</span>
                    </div>
                    <div class="flex items-center gap-3 bg-white/10 p-3 rounded-xl">
                        <input type="checkbox" class="accent-indigo-500">
                        <span class="text-xs">¿He puesto una leyenda en los dibujos?</span>
                    </div>
                    <div class="flex items-center gap-3 bg-white/10 p-3 rounded-xl">
                        <input type="checkbox" class="accent-indigo-500">
                        <span class="text-xs">¿He justificado por qué he elegido esta arquitectura?</span>
                    </div>
                    <div class="flex items-center gap-3 bg-white/10 p-3 rounded-xl">
                        <input type="checkbox" class="accent-indigo-500">
                        <span class="text-xs">¿Es escalable mi diseño?</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const disenoTemplate = {
    networkTopology: '',
    databaseSchema: '',
    systemArchitecture: '',
    logicDesign: '',
    uiDesign: ''
};

export const disenoPrompt = `
Eres un arquitecto de sistemas visionario y motivador. 
Genera el contenido para la sección de DISEÑO.

PROYECTO: {projectTheme}
CURSO: {curso}
CICLO: {ciclo}

INSTRUCCIONES CLAVE:
- Propón una arquitectura técnica moderna (Cloud, On-premise, Híbrida).
- Describe la topología de red recomendada.
- Sugiere una estructura de base de datos o almacenamiento de archivos.
- Explica el diseño lógico de forma que el alumno entienda el "cerebro" de su proyecto.

IMPORTANTE:
- Usa analogías (ej: "La base de datos es como el almacén de una tienda").
- Sé muy visual en las descripciones.
- Enfócate en la escalabilidad y la seguridad.
`;
