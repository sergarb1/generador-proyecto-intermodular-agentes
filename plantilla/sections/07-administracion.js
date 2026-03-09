/**
 * Sección: Administración
 * 
 * ⚙️ ¡Bienvenido al centro de mando!
 * Aquí es donde te conviertes en el guardián del sistema. Usuarios, copias de seguridad y vigilancia.
 * 
 * ⏱️ Tiempo estimado: 60-90 minutos.
 */

export const administracionIcon = '⚙️';

export function generateAdministracion(projectData) {
    const {
        userManagement,
        networkMonitoring,
        securityPolicies,
        maintenancePlan,
        backupDisasterRecovery
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
                    Una vez montado el proyecto, alguien tiene que cuidarlo. 
                    Aquí explicas cómo vas a gestionar a los usuarios, cómo vas a saber si algo falla (Monitorización) 
                    y qué harás si el servidor explota (Backups).
                </p>
                <div class="mt-4 p-3 bg-blue-100/50 rounded-lg border border-blue-200">
                    <p class="text-xs font-bold mb-1">🚀 CONSEJO DE ADMINISTRADOR:</p>
                    <p class="text-xs m-0">"Si no hay copia de seguridad, los datos no existen". Asegúrate de que tu plan de backups sea sólido.</p>
                </div>
            </div>

            <h3 id="gestion-usuarios">7.1. Gestión de Usuarios y Permisos</h3>
            <div class="callout callout-warning">
                <div class="callout-title"><span>👤</span><span>¿Quién entra aquí?</span></div>
                <p>Define quién tiene las llaves del sistema y qué puede hacer cada uno.</p>
            </div>
            <div class="table-container shadow-sm border border-slate-200 rounded-2xl overflow-hidden my-6">
                <table class="w-full text-xs">
                    <thead class="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th class="px-4 py-3 text-left font-bold text-slate-500">Rol</th>
                            <th class="px-4 py-3 text-left font-bold text-slate-500">Permisos Principales</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${(userManagement?.roles || []).map(role => `
                            <tr>
                                <td class="px-4 py-3 font-bold text-blue-700">${role.name}</td>
                                <td class="px-4 py-3 text-slate-600">${role.permissions}</td>
                            </tr>
                        `).join('\n                        ')}
                    </tbody>
                </table>
            </div>

            <h3 id="monitoreo">7.2. Monitorización y Mantenimiento</h3>
            <div class="callout callout-info">
                <div class="callout-title"><span>📊</span><span>Vigila tus recursos</span></div>
                <p>¿Cómo sabes si la CPU está al 100% o si se ha caído la web? Elige herramientas de monitorización.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                ${(networkMonitoring?.metrics || []).map(metric => `
                    <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <div class="flex justify-between items-center mb-1">
                            <span class="text-xs font-bold text-slate-700">${metric.name}</span>
                            <span class="text-[10px] text-blue-500 font-mono">${metric.tool}</span>
                        </div>
                        <p class="text-[10px] text-slate-500 m-0">Umbral: ${metric.threshold}</p>
                    </div>
                `).join('\n                ')}
            </div>

            <h3 id="backups">7.3. Copias de Seguridad (Backup)</h3>
            <div class="callout callout-error">
                <div class="callout-title"><span>💾</span><span>Plan de Emergencia</span></div>
                <p>Si todo falla, el backup te salva la vida. Define qué guardas y dónde.</p>
            </div>
            <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    ${(backupDisasterRecovery?.schedule || []).map(b => `
                        <div class="text-center p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                            <span class="text-[10px] font-bold text-blue-400 block mb-1 uppercase">${b.type}</span>
                            <span class="text-xs font-bold text-blue-800 block">${b.system}</span>
                            <span class="text-[9px] text-blue-600 block mt-1">${b.frequency}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex justify-around text-xs">
                    <div class="text-center"><span class="block font-bold text-slate-400 uppercase text-[9px]">RTO</span><span class="text-slate-700">${backupDisasterRecovery?.rto || 'N/A'}</span></div>
                    <div class="text-center"><span class="block font-bold text-slate-400 uppercase text-[9px]">RPO</span><span class="text-slate-700">${backupDisasterRecovery?.rpo || 'N/A'}</span></div>
                </div>
            </div>

            <div class="mt-12 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                <h4 class="text-white font-bold mb-4 flex items-center gap-2"><span>🛡️</span> Seguridad ante todo</h4>
                <p class="text-xs text-slate-400">Recuerda: Un buen administrador no es el que arregla mucho, sino el que evita que las cosas se rompan.</p>
            </div>
        </div>
    `;
}

export const administracionTemplate = {
    userManagement: { roles: [] },
    networkMonitoring: { metrics: [] },
    backupDisasterRecovery: { schedule: [], rto: '', rpo: '' }
};

export const administracionPrompt = `
Eres un administrador de sistemas legendario. Genera la sección de ADMINISTRACIÓN.

PROYECTO: {projectTheme}
CURSO: {curso}
CICLO: {ciclo}

INSTRUCCIONES:
- Define roles de usuario técnicos (Admin, Editor, Usuario).
- Sugiere métricas de monitorización reales (CPU, RAM, Logs, Tráfico).
- Crea un plan de backups que use la regla 3-2-1.
- Define tiempos de recuperación (RTO y RPO) coherentes.
- Usa un tono de control y seguridad.

DATOS (JSON):
- userManagement: {roles: [{name, permissions}]}
- networkMonitoring: {metrics: [{name, tool, threshold}]}
- backupDisasterRecovery: {schedule: [{system, type, frequency}], rto, rpo}
`;
