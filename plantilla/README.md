# Plantilla de Proyectos "Nextra Premium 2.0" - IES Serra Perenxisa

Plantilla HTML/CSS/JS avanzada para generar proyectos intermodulares con un diseño profesional y moderno, utilizando **Vue.js 3** y **Tailwind CSS**.

## ✨ Novedades de la Versión 2.0
- **Diseño "Nextra Premium"**: Interfaz limpia con efectos de desenfoque (glassmorphism) y tipografía mejorada (*Plus Jakarta Sans*).
- **Títulos en Negrita**: Todos los encabezados (`h1`, `h2`, `h3`...) tienen un `font-weight` de 800 para mayor impacto visual.
- **Barra Lateral Retráctil**: Funcionalidad completa para ocultar/mostrar la barra de navegación en escritorio y móvil, con transiciones suaves.
- **Exportación a Word Mejorada**: Generación de un archivo `.doc` real y funcional directamente desde el navegador mediante Blob, conservando estilos básicos como negritas.
- **Imagen de Portada Dinámica**: Automatización para descargar una imagen de alta calidad desde **Pexels** y vincularla localmente.

## ⚠️ REGLAS CRÍTICAS DE GENERACIÓN DE CÓDIGO
1.  **NUNCA usar template literals con backticks (`` ` ``)** en el JavaScript incrustado en HTML.
2.  **Usar concatenación de cadenas** con `+` en lugar de `${}`.
3.  La exportación a Word **DEBE** usar la función `exportWord()` con Blob para ser funcional.

❌ **INCORRECTO**:
`const header = `<div>\${this.projectTitle}</div>`;`

✅ **CORRECTO**:
`const header = '<div>' + this.projectTitle + '</div>';`

## 🚀 Uso para Agentes LLM
1.  **Generar Contexto**: El agente debe crear un contexto empresarial y una problemática.
2.  **Seleccionar Imagen**: El agente debe proponer un término de búsqueda para una imagen en **Pexels**.
3.  **Descargar Imagen**: El orquestador descargará la imagen y la guardará en `images/hero.jpg`.
4.  **Generar Contenido**: El agente generará el HTML para cada sección, asegurando que los títulos estén en negrita.
5.  **Poblar Plantilla**: El contenido se insertará en el objeto `sectionsContent` de Vue.js en `plantilla/index.html`.

## 🔧 Personalización
- **Colores**: Edita las variables CSS en la sección `<style>` de `index.html`.
- **Logo**: Reemplaza la ruta a `logo.png` o modifica la variable `logoUrl` en Vue.
- **Imagen de Portada**: La imagen se gestiona a través de la variable `projectImage` en Vue, que debe apuntar a `./images/hero.jpg`.

---
**Versión:** 2.0
**Última actualización:** Marzo 2026
