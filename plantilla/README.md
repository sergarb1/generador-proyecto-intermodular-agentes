# Plantilla de Proyectos Intermodulares - IES Serra Perenxisa

Plantilla HTML/CSS/JS para generar proyectos intermodulares con estilo **Nextra** utilizando **Vue.js 3** y **Tailwind CSS**.

## 📁 Estructura del Directorio

```
plantilla/
├── index.html              # Plantilla HTML principal
├── index.js                # Módulo JavaScript con exports
├── README.md               # Este archivo
├── sections/               # Secciones del proyecto
│   ├── 01-introduccion.js
│   ├── 02-estado-arte.js
│   ├── 03-viabilidad.js
│   ├── 04-requisitos.js
│   ├── 05-diseno.js
│   ├── 06-implementacion.js
│   ├── 07-administracion.js
│   ├── 08-herramientas.js
│   ├── 09-conclusiones.js
│   ├── 10-bibliografia.js
│   └── 11-anexos.js
└── agents/                 # Agentes LLM (instrucciones)
    ├── 03-primer-curso.md
    └── 04-segundo-curso.md
```

## 🎨 Características

### Estilo Nextra
- Diseño limpio y moderno inspirado en documentación técnica
- Sidebar de navegación fija
- Tipografía Inter para mejor legibilidad
- Callouts/admoniciones para información destacada
- Totalmente responsive

### Tecnología
- **Vue.js 3** - Reactividad y componentes
- **Tailwind CSS** - Estilos utilitarios
- **JavaScript ES6+** - Módulos nativos

### Secciones Incluidas

| Sección | Descripción |
|---------|-------------|
| Introducción | Contexto, problemática y objetivos |
| Estado del Arte | Tecnologías y soluciones existentes |
| Viabilidad | DAFO, CAME, recursos, planificación |
| Requisitos | Funcionales, no funcionales, casos de uso |
| Diseño | Arquitectura, diagramas, modelos |
| Implementación | Tecnologías, configuración, desarrollo |
| Administración | Usuarios, monitoreo, seguridad, backups |
| Herramientas | Git, CI/CD, testing, depuración |
| Conclusiones | Logros, aprendizajes, mejoras futuras |
| Bibliografía | Fuentes comentadas |
| Anexos | Material complementario |

## 🚀 Uso

### Para Agentes LLM

La plantilla está diseñada para ser utilizada por agentes LLM que generarán el contenido de cada sección.

1. **Importar los módulos:**
```javascript
import { 
    generateIntroduccion, 
    introduccionTemplate,
    introduccionPrompt 
} from './plantilla/sections/01-introduccion.js';
```

2. **Generar contenido:**
```javascript
const projectData = {
    description: 'Descripción del proyecto...',
    companyContext: 'Contexto empresarial...',
    problemStatement: 'Problemática...',
    // ... más datos
};

const htmlContent = generateIntroduccion(projectData);
```

3. **Usar el prompt para el agente:**
```javascript
const prompt = introduccionPrompt
    .replace('{curso}', 'Segundo')
    .replace('{ciclo}', 'ASIR')
    .replace('{projectTheme}', 'Infraestructura Cloud');
```

### Para Generación Manual

1. Copiar `index.html` como base
2. Modificar los datos en el `data()` de Vue:
```javascript
data() {
    return {
        projectTitle: 'Mi Proyecto',
        studentName: 'Nombre del Estudiante',
        tutorName: 'Nombre del Tutor',
        cycle: 'ASIR',
        courseYear: 'Segundo',
        // ...
    }
}
```

3. Rellenar el contenido de cada sección en `sectionsContent`

## 📊 Ciclos Soportados

- **ASIR** - Administración de Sistemas Informáticos en Red
- **SMR** - Sistemas Microinformáticos y Redes
- **DAM** - Desarrollo de Aplicaciones Multiplataforma
- **DAW** - Desarrollo de Aplicaciones Web

## 📚 Cursos

### Primer Curso
- **Duración:** 25 horas
- **Objetivo:** Familiarizar con la dinámica de proyectos
- **Alcance:** Proyecto sencillo

### Segundo Curso
- **Duración:** 96 horas
- **Objetivo:** Proyecto integrador completo
- **Alcance:** Todos los conocimientos del ciclo

## 🎯 Personalización

### Colores
Editar las variables CSS en `index.html`:
```css
:root {
    --nextra-primary: #0066CC;
    --nextra-bg: #ffffff;
    --nextra-bg-subtle: #f9fafb;
}
```

### Logo
Reemplazar el base64 del logo en el componente Vue:
```javascript
logoBase64: 'data:image/png;base64,...'
```

### Secciones
Añadir/eliminar secciones en el array `sections`:
```javascript
sections: [
    { id: 'nueva-seccion', title: 'Nueva Sección' },
    // ...
]
```

## 📝 Ejemplo de Uso con Agente

```javascript
// 1. Importar funciones
import { 
    generateCompletePrompt,
    createEmptyProjectStructure 
} from './plantilla/index.js';

// 2. Generar prompts para el agente
const prompts = generateCompletePrompt(
    'ASIR', 
    'SEGUNDO', 
    'Infraestructura Cloud para Startup Fintech'
);

// 3. Enviar al agente LLM
const introduccionContent = await callLLM(prompts.introduccion);

// 4. Generar HTML
const html = generateIntroduccion(introduccionContent);

// 5. Insertar en la plantilla
app.sectionsContent.introduccion = html;
```

## 🔧 Desarrollo

### Añadir Nueva Sección

1. Crear archivo en `sections/XX-nombre.js`:
```javascript
export function generateNombre(projectData) {
    return `<div class="prose">...</div>`;
}

export const nombreTemplate = {
    // estructura de datos
};

export const nombrePrompt = `
// Prompt para el agente LLM
`;
```

2. Exportar en `index.js`:
```javascript
export { 
    generateNombre, 
    nombreTemplate, 
    nombrePrompt 
} from './sections/XX-nombre.js';
```

3. Añadir en `index.html`:
```javascript
sections: [
    // ...
    { id: 'nombre', title: 'Nombre Sección' },
]
```

## 📄 Licencia

Misma licencia que el proyecto principal: **CC BY-NC-SA 4.0**

## 👨‍💻 Autores

Departamento de Informática - IES Serra Perenxisa

---

**Versión:** 1.0  
**Última actualización:** Marzo 2026
