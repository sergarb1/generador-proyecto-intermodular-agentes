/**
 * Sección: Implementación
 * 
 * 💻 ¡Llegó el momento de la verdad! 
 * Aquí es donde manchamos el teclado de código y configuraciones.
 * 
 * ⏱️ Tiempo estimado: 240-480 minutos (¡Esta es la parte grande, respira!)
 */

export const implementacionIcon = '💻';

export function generateImplementacion(projectData, cycle = 'ASIR') {
    const {
        technologies,
        networkDevicesConfig,
        securityConfig,
        virtualizationConfig,
        storageConfig,
        backupConfig,
        serviceDevelopment,
        multiplatformDevelopment
    } = projectData;

    const isAsir = cycle === 'ASIR' || cycle === 'SMR';

    return `
        <div class="prose max-w-none">
            <div class="estimate-badge">
                <span>⏱️</span> Tiempo estimado: Varias sesiones.
            </div>

            <div class="callout callout-info mb-8">
                <div class="callout-title">
                    <span>💡</span>
                    <span>¿Qué estamos haciendo aquí?</span>
                </div>
                <p>
                    Esta es la sección más importante de tu proyecto. Tienes que documentar CÓMO has montado todo. 
                    Si es un servidor, qué comandos has usado. Si es código, cómo lo has estructurado.
                </p>
                <div class="mt-4 p-3 bg-blue-100/50 rounded-lg border border-blue-200">
                    <p class="text-xs font-bold mb-1">🚀 CONSEJO DE DOCUMENTACIÓN:</p>
                    <p class="text-xs m-0">No escribas un libro de texto. Escribe una guía de "cómo se hace". Usa capturas de pantalla y fragmentos de código.</p>
                </div>
            </div>

            <h3 id="tecnologias">6.1. Herramientas del Proyecto</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                ${(technologies || []).map(tech => `
                    <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="p-1.5 bg-blue-50 rounded-lg text-blue-600">🛠️</span>
                            <h4 class="font-bold m-0 p-0 border-none text-sm">${tech.name}</h4>
                        </div>
                        <p class="text-[10px] text-slate-500 m-0">${tech.description}</p>
                    </div>
                `).join('\n                ')}
            </div>

            ${isAsir ? `
                <h3 id="infraestructura">6.2. Montaje de la Infraestructura</h3>
                <div class="callout callout-warning">
                    <div class="callout-title"><span>⚙️</span><span>Configuración Técnica</span></div>
                    <p>Documenta aquí los pasos clave de instalación y configuración.</p>
                </div>
                
                <div class="space-y-8">
                    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h4 class="text-blue-700 font-bold mb-2 border-none p-0 mt-0">🌐 Redes y Dispositivos</h4>
                        <p class="text-sm">${networkDevicesConfig || 'Describe la configuración de switches, routers...'}</p>
                    </div>
                    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h4 class="text-red-700 font-bold mb-2 border-none p-0 mt-0">🛡️ Seguridad y Firewall</h4>
                        <p class="text-sm">${securityConfig || 'Describe las reglas de firewall, VPNs...'}</p>
                    </div>
                    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h4 class="text-emerald-700 font-bold mb-2 border-none p-0 mt-0">☁️ Virtualización y Cloud</h4>
                        <p class="text-sm">${virtualizationConfig || 'Describe el despliegue de VMs, contenedores...'}</p>
                    </div>
                </div>
            ` : `
                <h3 id="desarrollo">6.2. Desarrollo de la Solución</h3>
                <div class="callout callout-warning">
                    <div class="callout-title"><span>⌨️</span><span>Codificación</span></div>
                    <p>Explica las partes más interesantes de tu código y cómo has resuelto los problemas.</p>
                </div>

                <div class="space-y-8">
                    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h4 class="text-indigo-700 font-bold mb-2 border-none p-0 mt-0">🖥️ Backend y Servicios</h4>
                        <p class="text-sm">${serviceDevelopment?.overview || 'Describe la lógica del servidor...'}</p>
                    </div>
                    <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <h4 class="text-pink-700 font-bold mb-2 border-none p-0 mt-0">📱 Frontend y Cliente</h4>
                        <p class="text-sm">${multiplatformDevelopment?.overview || 'Describe la interfaz de usuario...'}</p>
                    </div>
                </div>
            `}

            <div class="mt-12 p-8 bg-slate-900 rounded-3xl text-white shadow-2xl">
                <h4 class="text-white font-bold mb-4 flex items-center gap-2"><span>⭐</span> Tips de Calidad</h4>
                <ul class="text-xs text-slate-400 space-y-2">
                    <li>✓ Si pones código, añade comentarios explicando qué hace.</li>
                    <li>✓ Si pones una configuración, di por qué has elegido esos valores.</li>
                    <li>✓ Usa capturas de pantalla de lo que vas logrando.</li>
                </ul>
            </div>
        </div>
    `;
}

export const implementacionTemplate = {
    technologies: [],
    networkDevicesConfig: '',
    securityConfig: '',
    virtualizationConfig: '',
    serviceDevelopment: { overview: '' },
    multiplatformDevelopment: { overview: '' }
};

export const implementacionPrompt = `
Eres un ingeniero senior documentando una implementación magistral. Genera la sección de IMPLEMENTACIÓN.

PROYECTO: {projectTheme}
CURSO: {curso}
CICLO: {ciclo}

{CYCLE_SPECIFIC_INSTRUCTIONS}

INSTRUCCIONES ADICIONALES:
- No hagas tutoriales genéricos de Internet. Céntrate en ESTE proyecto.
- Si es ASIR, usa comandos de consola (Linux/Windows) y explica reglas de red.
- Si es DAM/DAW, explica la arquitectura del código y pon fragmentos significativos.
- El tono debe ser técnico, preciso y muy organizado.
`;
