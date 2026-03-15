# 💎 Generador de Proyectos Intermodulares "Premium Pro"

Este sistema automatiza la creación de proyectos intermodulares para Ciclos Formativos (**Informática**, **Administración y Gestión**, y **Comercio y Marketing**), siguiendo un enfoque **pedagógico avanzado** y un diseño visual **ejecutivo de alta gama**.

## 🌐 Página Web Oficial

Visita la página web del proyecto para acceder a información detallada y ejemplos de proyectos generados:

👉 **[sergarb1.github.io/generador-proyecto-intermodular-agentes/](https://sergarb1.github.io/generador-proyecto-intermodular-agentes/)**

## 🎯 Enfoque Pedagógico: "Enseña a Pescar"

A diferencia de otros generadores, este sistema no entrega el proyecto resuelto. Su objetivo es actuar como un **tutor experto**:

1.  **Introducción Detallada:** Genera un escenario empresarial real, con una problemática crítica cuantificada y objetivos SMART claros. Es el único punto con contenido real completo.
2.  **Guías Didácticas:** El resto de secciones (Estado del Arte, Viabilidad, Diseño, etc.) se generan como **cuadernos de trabajo**. Incluyen:
    *   Iconos visuales para cada tarea.
    *   Preguntas guía para la investigación del alumno.
    *   Estructuras de tablas y cuadrículas vacías listas para completar.
    *   Consejos del tribunal y alertas de seguridad/normativa.

## 🚀 Cómo se usa

La aplicación está diseñada para ser utilizada de forma interactiva a través de una terminal (PowerShell, Bash o CMD).

### Requisitos previos
- Tener instalado **Node.js**.
- Tener instalado **al menos una** de estas herramientas IA:
  - **Gemini CLI** (`npm install -g @google/gemini-cli`)
  - **Qwen Code** (`npm install -g @qwen-code/qwen-code`)
  - **GitHub Copilot CLI** (`npm install -g @github/gh-cli`)

### Pasos para generar un proyecto
1.  Ejecuta el script de inicio según tu terminal:
    ```powershell
    # En PowerShell
    ./Iniciar-Asistente.ps1
    ```
    ```bash
    # En Bash/Mac/Linux
    ./Iniciar-Asistente.sh
    ```
    ```cmd
    # En CMD.exe
    .\Iniciar-Asistente.bat
    ```
2.  El asistente detectará automáticamente tu entorno (Gemini, Qwen o Copilot) y te pedirá los datos del proyecto uno a uno:
    - Familia profesional (Informática, Administración o Comercio).
    - Ciclo formativo (ASIR, DAM, DAW, SMR, GM-ADM, GS-ADMF, GS-ASID, Servicios Comerciales, etc.).
    - Curso (Primero o Segundo).
    - Temática deseada.
3.  La IA generará la estructura de carpetas y los archivos de datos necesarios dentro de la carpeta `proyectos/`.
4.  Abre el archivo `proyecto.html` generado directamente en tu navegador para ver el resultado.

## ✨ Estándar Visual "Premium Pro"

- **Interfaz Moderna:** Estilo SaaS con efectos de desenfoque, tipografía *Plus Jakarta Sans* y barra lateral colapsable.
- **Contenido Estructurado:** Información fragmentada en pasos pequeños para facilitar la comprensión, con un lenguaje motivador y profesional.
- **Optimización PDF:** Estilos de impresión (`@media print`) configurados para generar un informe profesional con saltos de página inteligentes y colores preservados.
- **Exportación Word:** Exportador avanzado que incrusta imágenes en Base64 para garantizar la compatibilidad total sin pérdida de assets.

## 🛠️ Arquitectura Técnica Offline

El sistema es **100% compatible con el protocolo `file://`**. No requiere servidor web:
- **Carga de Datos:** Los contenidos se gestionan en archivos `.js` independientes dentro de la carpeta `data/`.
- **Variables Globales:** Utiliza `window.sectionsContent` y `window.metadata` para evitar errores de CORS al abrir el archivo localmente.
- **Modularidad:** Permite a los agentes de IA modificar secciones individuales sin riesgo de truncar el archivo HTML principal.

## 🤖 Agentes de IA

El proyecto incluye una suite de agentes especializados que coordinan la generación:
- `00-orchestrator`: Coordina la estructura y el flujo de generación.
- `01-experto-proyectos`: Consultor de estrategia y negocio.
- `02-experto-informatica`: Especialista técnico para la familia de Informática.
- `05-experto-administracion`: Especialista para la familia de Administración y Gestión.
- `06-experto-comercio`: Especialista para la familia de Comercio y Marketing.
- `03-primer-curso` y `04-segundo-curso`: Adaptan el contenido al nivel del curso.

---
**Versión:** 3.1 (Premium Pro Edition - Multi-CLI Support)  
**Centro:** IES Serra Perenxisa  
**Autor:** Sergio García  
**CLIs Soportados:** Gemini CLI, Qwen Code, GitHub Copilot CLI
