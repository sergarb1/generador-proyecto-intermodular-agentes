/**
 * Plantilla de Proyecto Intermodular - IES Serra Perenxisa
 * 
 * 🚀 Versión Pedagógica con Soporte TDAH y Estructura Modular
 * 
 * @module plantilla
 */

// Importación de funciones generadoras por sección
export { 
    generateIntroduccion, 
    introduccionTemplate, 
    introduccionPrompt,
    introduccionIcon
} from './sections/01-introduccion.js';

export { 
    generateRequisitos, 
    requisitosTemplate, 
    requisitosPrompt,
    requisitosIcon
} from './sections/04-requisitos.js';

export { 
    generateDiseno, 
    disenoTemplate, 
    disenoPrompt,
    disenoIcon
} from './sections/05-diseno.js';

// ... (El resto de exportaciones seguirían el mismo patrón cuando se actualicen)

export { 
    generateEstadoArte, 
    estadoArteTemplate, 
    estadoArtePrompt
} from './sections/02-estado-arte.js';

export { 
    generateViabilidad, 
    viabilidadTemplate, 
    viabilidadPrompt 
} from './sections/03-viabilidad.js';

export { 
    generateImplementacion, 
    implementacionTemplate, 
    implementacionPrompt
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
