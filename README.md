# 💎 Generador de Proyectos Intermodulares "Premium Pro"

Este sistema automatiza la creación de proyectos intermodulares para Ciclos Formativos de:
- **Informática** 💻
- **Administración y Gestión** 📊
- **Comercio y Marketing** 🛒
- **Turismo y Hostelería** 🏨 ⭐ NUEVO

Sigue un enfoque **pedagógico avanzado** y un diseño visual **ejecutivo de alta gama**.

## 🌐 Página Web Oficial

Visita la página web del proyecto para acceder a información detallada y ejemplos de proyectos generados:

👉 **[sergarb1.github.io/generador-proyecto-intermodular-agentes/](https://sergarb1.github.io/generador-proyecto-intermodular-agentes/)**

## 📚 Tutoriales

| Tutorial | Descripción | Enlace |
|----------|-------------|--------|
| **📦 Instalación** | Guía completa para instalar el proyecto y configurar las herramientas de IA | [Ver TutorialInstalacion.md](./TutorialInstalacion.md) |
| **🚀 Uso** | Cómo generar proyectos paso a paso con ejemplos prácticos | [Ver TutorialUso.md](./TutorialUso.md) |

## 📥 Descarga Rápida

### Última Versión (ZIP)

Descarga la última versión del proyecto lista para usar:

👉 **[Descargar ZIP desde Releases](https://github.com/sergarb1/generador-proyecto-intermodular-agentes/releases/latest)**

**Pasos:**
1. Descarga el archivo `generador-proyecto-intermodular-agentes.zip`
2. Extrae el contenido en una carpeta
3. Sigue el [Tutorial de Instalación](./TutorialInstalacion.md)

### Clonar desde GitHub

```bash
git clone https://github.com/sergarb1/generador-proyecto-intermodular-agentes.git
cd generador-proyecto-intermodular-agentes
```

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

### 📋 Requisitos previos

- Tener instalado **Node.js** (v18 o superior)
- Tener instalado **Git**
- Tener instalado **al menos una** de estas herramientas de IA:

| Herramienta | Comando de Instalación | URL |
|-------------|----------------------|-----|
| **Opencode CLI** | `npm install -g opencode` | [opencode.ai](https://opencode.ai) |
| **Gemini CLI** | `npm install -g @google/gemini-cli` | [Google AI](https://aistudio.google.com/) |
| **Qwen Code** | `npm install -g @qwen-code/qwen-code` | [Alibaba Qwen](https://dashscope.console.aliyun.com/) |
| **GitHub Copilot CLI** | `npm install -g @githubnext/github-copilot-cli` | [GitHub Copilot](https://github.com/copilot) |

> **⚠️ Importante:** Necesitas configurar una API Key para la herramienta que elijas. Consulta el [Tutorial de Instalación](./TutorialInstalacion.md) para más detalles.

### 📝 Pasos para generar un proyecto

1. **Inicia el asistente** según tu sistema operativo:

   ```powershell
   # En PowerShell (Windows)
   ./Iniciar-Asistente.ps1
   ```

   ```bash
   # En Bash (Linux/Mac)
   ./Iniciar-Asistente.sh
   ```

   ```cmd
   # En CMD (Windows)
   .\Iniciar-Asistente.bat
   ```

2. **El asistente detectará automáticamente** tu entorno (dentro de Opencode, Gemini, Qwen o Copilot) y las herramientas CLI instaladas, guardando tu elección en `config.ini` para la próxima vez. Te pedirá los datos del proyecto uno a uno:
   - Familia profesional (Informática, Administración, Comercio o Turismo)
   - Ciclo formativo (ASIR, DAM, DAW, SMR, GM-ADM, GS-ADMF, GS-ASID, etc.)
   - Curso (Primero o Segundo)
   - Temática deseada

3. **La IA generará** la estructura de carpetas y los archivos de datos necesarios dentro de la carpeta `proyectos/`

4. **Abre el archivo** `proyecto.html` generado directamente en tu navegador para ver el resultado

> **📖 Para más detalles:** Consulta el [Tutorial de Uso](./TutorialUso.md) con ejemplos prácticos y solución de problemas.

### 🔧 Personalización avanzada

- **`prompt-inicial.txt`**: Edita este archivo para cambiar el prompt base que se envía a la IA al iniciar.
- **`config.ini`**: Guarda la última herramienta CLI seleccionada para no tener que elegir cada vez.
- **Información del intérprete**: Los scripts añaden automáticamente al prompt si estás en PowerShell, CMD o Bash, para que la IA genere comandos compatibles con tu terminal.

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
- `07-experto-turismo`: Especialista para la familia de Turismo y Hostelería ⭐ NUEVO.
- `03-primer-curso` y `04-segundo-curso`: Adaptan el contenido al nivel del curso.

## 📚 Documentación y Tutoriales

### Tutoriales Disponibles

| Tutorial | Descripción |
|----------|-------------|
| [📦 Tutorial de Instalación](./TutorialInstalacion.md) | Guía completa para instalar el proyecto y configurar las herramientas de IA |
| [🚀 Tutorial de Uso](./TutorialUso.md) | Cómo generar proyectos paso a paso con ejemplos prácticos |

### Crear ZIP para Release

Para empaquetar el proyecto y distribuirlo:

```bash
# Linux/Mac
./scripts/create-release-zip.sh

# Windows
.\scripts\create-release-zip.bat
```

El script creará un archivo ZIP con todos los archivos necesarios listo para subir a GitHub Releases.

## 🔗 Enlaces de Interés

- **[Página Web del Proyecto](https://sergarb1.github.io/generador-proyecto-intermodular-agentes/)**
- **[Releases](https://github.com/sergarb1/generador-proyecto-intermodular-agentes/releases)** - Descarga la última versión en ZIP
- **[Issues](https://github.com/sergarb1/generador-proyecto-intermodular-agentes/issues)** - Reporta problemas o sugerencias
- **[IES Serra Perenxisa](https://iesserraperenxisa.es)** - Web del centro educativo

---
**Versión:** 3.4 (Premium Pro Edition - Scripts mejorados)
**Centro:** IES Serra Perenxisa
**Autor:** Sergio García
**CLIs Soportados:** Opencode CLI, Gemini CLI, Qwen Code, GitHub Copilot CLI
**Auto-detección:** Los scripts detectan automáticamente tu entorno y herramientas instaladas
**Personalización:** Edita `prompt-inicial.txt` para cambiar el prompt base
