# 💎 Directrices Generales - Proyecto Intermodular "Premium Pro"

## 🎯 Enfoque Pedagógico Crítico
Este proyecto está diseñado bajo un modelo de **Guía Docente Activa**.

1.  **INTRODUCCIÓN (Contenido Real):** Es la única sección que el agente debe generar con contenido detallado, realista y cuantificado. Es el "escenario" de trabajo del alumno.
2.  **RESTO DE SECCIONES (Guías):** NO generar la solución. Generar instrucciones, preguntas guía, estructuras de tablas vacías y consejos del tribunal.
3.  **NUMERACIÓN JERÁRQUICA:** Todos los apartados deben seguir el formato `X.Y` (ej: 5.1, 5.2).
4.  **ADAPTACIÓN TDAH:** Lenguaje motivador ("Coach Técnico"), párrafos cortos, muchos iconos visuales y división de tareas complejas en pasos atómicos.
5.  **SIN TIEMPOS:** Está prohibido incluir insignias de "tiempo estimado" o temporizadores.

## 🎨 Estándar Visual "Premium Pro"
- **Grid Layout:** Usar cuadrículas para comparativas y recursos.
- **Callouts:**
    - `callout-info`: Explicaciones y objetivos.
    - `callout-warning`: Alertas y consejos del tribunal.
    - `callout-success`: Logros y recursos estrella.
    - `callout-error`: Problemas y puntos críticos.
- **Tablas:** Limpias, con encabezados en mayúsculas pequeñas (`tracking-widest text-[10px]`).

## 🛠️ Arquitectura Técnica
- **Compatibilidad Offline:** El proyecto debe funcionar abriendo el HTML directamente (`file://`).
- **Variables Globales:** Los datos se cargan desde `data/*.js` asignándose a `window.sectionsContent` y `window.metadata`.
- **Exportación:** Soporte optimizado para PDF (vía `html2pdf.js`) y Word (vía XML Office).

## 🤖 Instrucciones para Agentes
Al generar contenido para un archivo de datos (`data/*.js`), el agente debe:
1.  Identificar la sección actual.
2.  Si es la **Introducción**, ser creativo y detallar el problema empresarial.
3.  Si es cualquier otra, actuar como un tutor experto guiando al alumno.
4.  Asegurar que el código JS resultante asigne el string a `window.sectionsContent["nombre_seccion"]`.
