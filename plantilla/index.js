/**
 * Plantilla de Proyecto Intermodular - IES Serra Perenxisa
 * 
 * Esta plantilla proporciona la estructura y componentes para generar
 * proyectos intermodulares con estilo Nextra usando Vue.js y Tailwind CSS.
 * 
 * @module plantilla
 */

// Exportación de funciones generadoras por sección
export { 
    generateIntroduccion, 
    introduccionTemplate, 
    introduccionPrompt 
} from './sections/01-introduccion.js';

export { 
    generateEstadoArte, 
    estadoArteTemplate, 
    estadoArtePrompt,
    getDisenoPromptForCycle
} from './sections/02-estado-arte.js';

export { 
    generateViabilidad, 
    viabilidadTemplate, 
    viabilidadPrompt 
} from './sections/03-viabilidad.js';

export { 
    generateRequisitos, 
    requisitosTemplate, 
    requisitosPrompt 
} from './sections/04-requisitos.js';

export { 
    generateDiseno, 
    disenoTemplate, 
    disenoPrompt,
    getDisenoPromptForCycle
} from './sections/05-diseno.js';

export { 
    generateImplementacion, 
    implementacionTemplate, 
    implementacionPrompt,
    getImplementacionPromptForCycle
} from './sections/06-implementacion.js';

export { 
    generateAdministracion, 
    administracionTemplate, 
    administracionPrompt 
} from './sections/07-administracion.js';

export { 
    generateHerramientas, 
    herramientasTemplate, 
    herramientasPrompt 
} from './sections/08-herramientas.js';

export { 
    generateConclusiones, 
    conclusionesTemplate, 
    conclusionesPrompt 
} from './sections/09-conclusiones.js';

export { 
    generateBibliografia, 
    bibliografiaTemplate, 
    bibliografiaPrompt 
} from './sections/10-bibliografia.js';

export { 
    generateAnexos, 
    anexosTemplate, 
    anexosPrompt 
} from './sections/11-anexos.js';

/**
 * Estructura completa del proyecto
 */
export const projectStructure = {
    metadata: {
        projectTitle: '',
        studentName: '',
        tutorName: '',
        cycle: '',
        courseYear: '',
        date: ''
    },
    sections: {
        resumen: '',
        introduccion: '',
        'estado-arte': '',
        viabilidad: '',
        requisitos: '',
        diseno: '',
        implementacion: '',
        administracion: '',
        herramientas: '',
        conclusiones: '',
        bibliografia: '',
        anexos: ''
    }
};

/**
 * Ciclos formativos soportados
 */
export const SUPPORTED_CYCLES = {
    ASIR: {
        name: 'Administración de Sistemas Informáticos en Red',
        level: 'Superior',
        specificSections: ['redes', 'seguridad', 'infraestructura']
    },
    SMR: {
        name: 'Sistemas Microinformáticos y Redes',
        level: 'Medio',
        specificSections: ['redes', 'hardware', 'sistemas-operativos']
    },
    DAM: {
        name: 'Desarrollo de Aplicaciones Multiplataforma',
        level: 'Superior',
        specificSections: ['movil', 'backend', 'bases-datos']
    },
    DAW: {
        name: 'Desarrollo de Aplicaciones Web',
        level: 'Superior',
        specificSections: ['frontend', 'backend', 'web']
    }
};

/**
 * Años de curso
 */
export const COURSE_YEARS = {
    PRIMERO: {
        name: 'Primer Curso',
        hours: 25,
        description: 'Proyecto sencillo para conocer la dinámica',
        focus: 'Fundamentos y primeros conceptos'
    },
    SEGUNDO: {
        name: 'Segundo Curso',
        hours: 96,
        description: 'Proyecto completo integrador',
        focus: 'Integración de todos los conocimientos del ciclo'
    }
};

/**
 * Genera el prompt completo para un agente LLM
 * 
 * @param {string} cycle - Ciclo formativo (ASIR, SMR, DAM, DAW)
 * @param {string} courseYear - Año del curso (PRIMERO, SEGUNDO)
 * @param {string} projectTheme - Tema del proyecto
 * @returns {Object} Prompts para cada sección
 */
export function generateCompletePrompt(cycle, courseYear, projectTheme) {
    const cycleName = SUPPORTED_CYCLES[cycle]?.name || cycle;
    const yearName = COURSE_YEARS[courseYear]?.name || courseYear;
    
    const replacePlaceholders = (prompt) => {
        return prompt
            .replace(/{curso}/g, yearName)
            .replace(/{ciclo}/g, cycleName)
            .replace(/{projectTheme}/g, projectTheme)
            .replace(/{CYCLE_SPECIFIC_INSTRUCTIONS}/g, 
                cycle === 'ASIR' || cycle === 'SMR' 
                    ? getDisenoPromptForCycle(cycle)
                    : getDisenoPromptForCycle(cycle)
            );
    };

    return {
        introduccion: replacePlaceholders(introduccionPrompt),
        estadoArte: replacePlaceholders(estadoArtePrompt),
        viabilidad: replacePlaceholders(viabilidadPrompt),
        requisitos: replacePlaceholders(requisitosPrompt),
        diseno: replacePlaceholders(disenoPrompt),
        implementacion: replacePlaceholders(implementacionPrompt),
        administracion: replacePlaceholders(administracionPrompt),
        herramientas: replacePlaceholders(herramientasPrompt),
        conclusiones: replacePlaceholders(conclusionesPrompt),
        bibliografia: replacePlaceholders(bibliografiaPrompt),
        anexos: replacePlaceholders(anexosPrompt)
    };
}

/**
 * Genera la estructura de datos vacía para el proyecto
 * 
 * @returns {Object} Estructura completa con templates vacíos
 */
export function createEmptyProjectStructure() {
    return {
        metadata: { ...projectStructure.metadata },
        content: {
            resumen: '',
            introduccion: { ...introduccionTemplate },
            estadoArte: { ...estadoArteTemplate },
            viabilidad: { ...viabilidadTemplate },
            requisitos: { ...requisitosTemplate },
            diseno: { ...disenoTemplate },
            implementacion: { ...implementacionTemplate },
            administracion: { ...administracionTemplate },
            herramientas: { ...herramientasTemplate },
            conclusiones: { ...conclusionesTemplate },
            bibliografia: { ...bibliografiaTemplate },
            anexos: { ...anexosTemplate }
        }
    };
}
