/**
 * Sección: Administración
 * 
 * Tareas y acciones necesarias para el correcto funcionamiento y mantenimiento del sistema.
 * 
 * Estructura esperada:
 * - Gestión de usuarios y permisos
 * - Monitoreo y mantenimiento
 * - Políticas de seguridad
 * - Plan de mantenimiento preventivo y correctivo
 * - Implementación de backups y recuperación ante desastres
 * - Plan de contingencia
 * - Soporte a la aplicación (sistema de tickets)
 * 
 * @param {Object} projectData - Datos del proyecto
 * @returns {String} HTML content
 */
export function generateAdministracion(projectData) {
    const {
        userManagement,
        networkMonitoring,
        securityPolicies,
        maintenancePlan,
        backupDisasterRecovery,
        contingencyPlan,
        supportSystem
    } = projectData;

    return `
        <div class="prose">
            <h3 id="gestion-usuarios">Gestión de Usuarios y Permisos</h3>
            <p>
                ${userManagement?.overview || 'Descripción de la gestión de usuarios...'}
            </p>

            ${(userManagement?.roles || []).length > 0 ? `
                <h4 id="roles-permisos">Roles y Permisos</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Rol</th>
                            <th>Descripción</th>
                            <th>Permisos</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${(userManagement.roles || []).map(role => `
                            <tr>
                                <td><strong>${role.name}</strong></td>
                                <td>${role.description}</td>
                                <td>${role.permissions}</td>
                            </tr>
                        `).join('\n                        ')}
                    </tbody>
                </table>
            ` : ''}

            <h3 id="monitoreo-mantenimiento">Monitoreo y Mantenimiento de la Red</h3>
            <p>
                ${networkMonitoring?.overview || 'Descripción del monitoreo y mantenimiento...'}
            </p>

            ${(networkMonitoring?.metrics || []).length > 0 ? `
                <h4 id="metricas-monitoreo">Métricas de Monitoreo</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Métrica</th>
                            <th>Herramienta</th>
                            <th>Frecuencia</th>
                            <th>Umbral de Alerta</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${(networkMonitoring.metrics || []).map(metric => `
                            <tr>
                                <td>${metric.name}</td>
                                <td>${metric.tool}</td>
                                <td>${metric.frequency}</td>
                                <td>${metric.threshold}</td>
                            </tr>
                        `).join('\n                        ')}
                    </tbody>
                </table>
            ` : ''}

            <h3 id="politicas-seguridad">Políticas de Seguridad</h3>
            <p>
                ${securityPolicies?.overview || 'Descripción de las políticas de seguridad...'}
            </p>

            ${(securityPolicies?.policies || []).map(policy => `
                <div class="callout callout-warning">
                    <div class="callout-title">
                        <span>🔒</span>
                        <span>${policy.name}</span>
                    </div>
                    <p>${policy.description}</p>
                </div>
            `).join('\n            ')}

            <h3 id="mantenimiento">Plan de Mantenimiento Preventivo y Correctivo</h3>
            
            <h4 id="mantenimiento-preventivo">Mantenimiento Preventivo</h4>
            <table>
                <thead>
                    <tr>
                        <th>Tarea</th>
                        <th>Frecuencia</th>
                        <th>Responsable</th>
                        <th>Duración Estimada</th>
                    </tr>
                </thead>
                <tbody>
                    ${(maintenancePlan?.preventive || []).map(task => `
                        <tr>
                            <td>${task.name}</td>
                            <td>${task.frequency}</td>
                            <td>${task.responsible}</td>
                            <td>${task.duration}</td>
                        </tr>
                    `).join('\n                    ')}
                </tbody>
            </table>

            <h4 id="mantenimiento-correctivo">Mantenimiento Correctivo</h4>
            <p>
                ${maintenancePlan?.corrective || 'Descripción del mantenimiento correctivo...'}
            </p>

            <h3 id="backups-recuperacion">Implementación de Backups y Recuperación ante Desastres</h3>
            <p>
                ${backupDisasterRecovery?.overview || 'Descripción del plan de backups...'}
            </p>

            ${(backupDisasterRecovery?.schedule || []).length > 0 ? `
                <h4 id="plan-backups">Plan de Copias de Seguridad</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Dato/Sistema</th>
                            <th>Tipo</th>
                            <th>Frecuencia</th>
                            <th>Retención</th>
                            <th>Ubicación</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${(backupDisasterRecovery.schedule || []).map(backup => `
                            <tr>
                                <td>${backup.system}</td>
                                <td>${backup.type}</td>
                                <td>${backup.frequency}</td>
                                <td>${backup.retention}</td>
                                <td>${backup.location}</td>
                            </tr>
                        `).join('\n                        ')}
                    </tbody>
                </table>
            ` : ''}

            <h4 id="recuperacion-desastres">Recuperación ante Desastres</h4>
            <div class="callout callout-info">
                <p><strong>RTO (Recovery Time Objective):</strong> ${backupDisasterRecovery?.rto || 'No especificado'}</p>
                <p><strong>RPO (Recovery Point Objective):</strong> ${backupDisasterRecovery?.rpo || 'No especificado'}</p>
                <p>${backupDisasterRecovery?.recoveryProcess || 'Descripción del proceso de recuperación...'}</p>
            </div>

            <h3 id="plan-contingencia">Plan de Contingencia y Recuperación ante Incidentes</h3>
            <p>
                ${contingencyPlan?.overview || 'Descripción del plan de contingencia...'}
            </p>

            ${(contingencyPlan?.scenarios || []).map(scenario => `
                <div class="callout callout-danger">
                    <div class="callout-title">
                        <span>🚨</span>
                        <span>Escenario: ${scenario.name}</span>
                    </div>
                    <p><strong>Descripción:</strong> ${scenario.description}</p>
                    <p><strong>Acciones:</strong></p>
                    <ol>
                        ${(scenario.actions || []).map(action => `<li>${action}</li>`).join('\n                        ')}
                    </ol>
                </div>
            `).join('\n            ')}

            <h3 id="soporte-aplicacion">Soporte a la Aplicación (Sistema de Tickets)</h3>
            <p>
                ${supportSystem?.overview || 'Descripción del sistema de soporte...'}
            </p>

            ${(supportSystem?.tiers || []).length > 0 ? `
                <h4 id="niveles-soporte">Niveles de Soporte</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Nivel</th>
                            <th>Descripción</th>
                            <th>Tiempo de Respuesta</th>
                            <th>Responsable</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${(supportSystem.tiers || []).map(tier => `
                            <tr>
                                <td>${tier.name}</td>
                                <td>${tier.description}</td>
                                <td>${tier.responseTime}</td>
                                <td>${tier.responsible}</td>
                            </tr>
                        `).join('\n                        ')}
                    </tbody>
                </table>
            ` : ''}

            ${(supportSystem?.channels || []).length > 0 ? `
                <h4 id="canales-soporte">Canales de Soporte</h4>
                <ul>
                    ${(supportSystem.channels || []).map(channel => `<li>${channel}</li>`).join('\n                    ')}
                </ul>
            ` : ''}
        </div>
    `;
}

export const administracionTemplate = {
    userManagement: {
        overview: '',
        roles: []
    },
    networkMonitoring: {
        overview: '',
        metrics: []
    },
    securityPolicies: {
        overview: '',
        policies: []
    },
    maintenancePlan: {
        preventive: [],
        corrective: ''
    },
    backupDisasterRecovery: {
        overview: '',
        schedule: [],
        rto: '',
        rpo: '',
        recoveryProcess: ''
    },
    contingencyPlan: {
        overview: '',
        scenarios: []
    },
    supportSystem: {
        overview: '',
        tiers: [],
        channels: []
    }
};

export const administracionPrompt = `
Genera el contenido para la sección de ADMINISTRACIÓN de un proyecto intermodular de {curso} curso de {ciclo}.

El proyecto trata sobre: {projectTheme}

Debes incluir:
1. Gestión de usuarios y permisos:
   - Descripción general
   - Roles y permisos (mínimo 3-4 roles)
2. Monitoreo y mantenimiento de la red:
   - Descripción del sistema de monitoreo
   - Métricas principales (mínimo 4-5)
3. Políticas de seguridad (mínimo 4-5 políticas)
4. Plan de mantenimiento:
   - Mantenimiento preventivo (mínimo 5 tareas con frecuencia)
   - Mantenimiento correctivo (descripción del proceso)
5. Backups y recuperación ante desastres:
   - Descripción general del plan
   - Schedule de backups (mínimo 4-5 sistemas a backuppear)
   - RTO y RPO definidos
   - Proceso de recuperación
6. Plan de contingencia:
   - Descripción general
   - Escenarios de incidente (mínimo 3-4 con sus acciones)
7. Sistema de soporte:
   - Descripción general
   - Niveles de soporte (1-3 niveles)
   - Canales de contacto

IMPORTANTE:
- Usa terminología profesional (SLA, MTTR, MTBF, RTO, RPO)
- Incluye valores concretos y realistas
- Longitud mínima: 800 palabras
`;
