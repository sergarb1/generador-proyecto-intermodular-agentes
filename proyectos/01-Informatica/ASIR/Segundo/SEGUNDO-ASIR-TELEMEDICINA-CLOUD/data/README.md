# Datos del Proyecto - Formato Sin CORS

## ⚠️ Importante

Estos archivos están diseñados para cargarse **directamente desde el navegador** abriendo `proyecto.html` con `file://`, **sin necesidad de servidor web**.

## Formato de Archivos

### metadata.js

Exporta los metadatos del proyecto a una variable global:

```javascript
window.metadata = {
    projectTitle: 'Título del Proyecto',
    studentName: 'Nombre del Estudiante',
    tutorName: 'Nombre del Tutor',
    cycle: 'ASIR',
    cycleName: 'Administración de Sistemas Informáticos en Red',
    courseYear: 'Segundo',
    projectImage: './images/telemedicina.jpg'
};
```

### Archivos de Secciones (resumen.js, introduccion.js, etc.)

Exportan el contenido HTML de cada sección:

```javascript
window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["nombre_seccion"] = `
    <div class="callout callout-info">
        <div class="callout-title">Título</div>
        <p>Contenido HTML...</p>
    </div>
`;
```

## Archivos Requeridos

| Archivo | Descripción |
|---------|-------------|
| `metadata.js` | Metadatos del proyecto (título, estudiante, tutor, etc.) |
| `resumen.js` | Resumen trilingüe (ES/EN/VA) |
| `introduccion.js` | Introducción y contexto |
| `estado-arte.js` | Estado del arte |
| `viabilidad.js` | Estudio de viabilidad |
| `requisitos.js` | Análisis de requisitos |
| `diseno.js` | Diseño de la solución |
| `implementacion.js` | Implementación |
| `administracion.js` | Administración |
| `herramientas.js` | Herramientas de apoyo |
| `conclusiones.js` | Conclusiones |
| `bibliografia.js` | Bibliografía |
| `anexos.js` | Anexos opcionales |

## ¿Por qué este formato?

### ❌ Problema con ES Modules

```javascript
// ESTO NO FUNCIONA con file:// por CORS:
const data = await import('./data/metadata.js');
```

Error: `Access to script from origin 'null' has been blocked by CORS policy`

### ✅ Solución: Variables Globales

```javascript
// ESTO SÍ FUNCIONA con file://:
<script src="./data/metadata.js"></script>
// Luego en el código:
const title = window.metadata.projectTitle;
```

## Cómo Añadir Nueva Sección

1. Crear archivo `data/nueva-seccion.js`:
```javascript
window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["nueva-seccion"] = `<p>Contenido...</p>`;
```

2. Añadir el script en `proyecto.html`:
```html
<script src="./data/nueva-seccion.js"></script>
```

3. Añadir la sección en el array `sections` del Vue app.

---

**Versión:** 2.0 (Sin CORS)  
**Compatibilidad:** File:// y HTTP/HTTPS
