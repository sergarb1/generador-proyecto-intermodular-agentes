# 🎓 Generador de Proyectos Intermodulares
## IES Serra Perenxisa

[![Versión](https://img.shields.io/badge/versi%C3%B3n-2.0-blue)](https://github.com/your-repo)
[![Familias](https://img.shields.io/badge/familias-Inform%C3%A1tica%20%7C%20Administraci%C3%B3n-green)](#familias-profesionales)
[![Licencia](https://img.shields.io/badge/licencia-CC%20BY--NC--SA%204.0-lightgrey)](LICENSE)

> **Herramienta IA para generar proyectos intermodulares** de forma automática para el alumnado de Formación Profesional.

---

## 📖 ¿Qué es esto?

Este proyecto permite al **profesorado** generar **enunciados de proyectos intermodulares** de forma rápida y sencilla usando Inteligencia Artificial.

Cada proyecto incluye:
- ✅ Contexto empresarial realista
- ✅ Problemática a resolver
- ✅ Objetivos claros
- ✅ **Guías y sugerencias** para que el alumnado complete el trabajo
- ✅ Criterios de evaluación implícitos
- ✅ Diseño moderno y profesional

### 🎯 Objetivo

**Ahorro de tiempo al profesorado:** Genera proyectos personalizados en minutos en lugar de horas.

**Mejor aprendizaje para el alumnado:** Proyectos que guían sin dar soluciones hechas, fomentando la investigación y el pensamiento crítico.

---

## 🚀 Inicio Rápido

### Requisitos

Necesitas **uno** de estos dos programas:

| Opción | Comando | Recomendado |
|--------|---------|-------------|
| **Qwen Code** | `npm install -g @qwen-code/qwen-code` | ⭐ Sí |
| **Gemini CLI** | `npm install -g @google/gemini-cli` | También válido |

### Uso en 3 Pasos

#### 1️⃣ Instala Qwen Code (si no lo tienes)

```bash
npm install -g @qwen-code/qwen-code
```

#### 2️⃣ Abre PowerShell en la carpeta del proyecto

```powershell
cd "C:\Users\serga\Dropbox\generador-proyecto-intermodular-agentes"
```

#### 3️⃣ Ejecuta el asistente

```powershell
.\Iniciar-Asistente.ps1
```

**¡Listo!** La IA te hará preguntas y generará el proyecto automáticamente.

---

## 💡 ¿Cómo funciona?

```
┌─────────────────────────────────────────────────────────────┐
│  1. Ejecutas Iniciar-Asistente.ps1                          │
│         ↓                                                    │
│  2. La IA te pregunta:                                      │
│     • Familia (Informática / Administración)                │
│     • Ciclo (ASIR, DAM, GM-ADM, etc.)                       │
│     • Curso (Primero / Segundo)                             │
│     • Temática (opcional)                                   │
│         ↓                                                    │
│  3. La IA genera el proyecto completo                       │
│         ↓                                                    │
│  4. Se guarda en: proyectos-ejemplo/[NOMBRE].html           │
└─────────────────────────────────────────────────────────────┘
```

### Ejemplo de Sesión

```
👤 Usuario: .\Iniciar-Asistente.ps1

🤖 IA: ¡Hola! ¿Qué familia profesional necesita?
       1. Informática
       2. Administración

👤 Usuario: 1

🤖 IA: ¿Qué ciclo de Informática?
       - ASIR, SMR, DAM, DAW

👤 Usuario: DAM

🤖 IA: ¿Primer o Segundo curso?

👤 Usuario: Segundo

🤖 IA: ¿Alguna temática concreta? (opcional)

👤 Usuario: App de gestión de tareas

🤖 IA: Perfecto, generando proyecto...
✅ Proyecto guardado en: proyectos-ejemplo/SEGUNDO-DAM-APP.html
```

---

## 📚 Familias Profesionales

### 🖥️ Informática

| Código | Nombre | Grado | Duración |
|--------|--------|-------|----------|
| **ASIR** | Administración de Sistemas Informáticos en Red | Superior | 2000h |
| **SMR** | Sistemas Microinformáticos y Redes | Medio | 2000h |
| **DAM** | Desarrollo de Aplicaciones Multiplataforma | Superior | 2000h |
| **DAW** | Desarrollo de Aplicaciones Web | Superior | 2000h |

**Ejemplos de proyectos:**
- ASIR: Infraestructura cloud, seguridad de redes, virtualización
- DAM: Apps móviles, bases de datos, servicios backend
- DAW: E-commerce, APIs, aplicaciones web

### 📊 Administración y Gestión

| Código | Nombre | Grado | Duración |
|--------|--------|-------|----------|
| **GM-ADM** | Gestión Administrativa | Medio | 2000h |
| **GS-ADMF** | Administración y Finanzas | Superior | 2000h |
| **GS-ASID** | Asistencia a la Dirección | Superior | 2000h |

**Ejemplos de proyectos:**
- GM: Creación de empresa, gestión documental
- GS-ADMF: Plan de empresa, análisis financiero
- GS-ASID: Organización de eventos, gestión de reuniones

---

## 📁 Estructura del Proyecto

```
generador-proyecto-intermodular/
│
├── 📄 Iniciar-Asistente.ps1      ← ¡Empieza aquí!
├── 📖 README.md                   ← Este archivo
├── 📝 QUICKSTART.md               ← Inicio rápido
│
├── 🤖 agents/                     ← Agentes de IA
│   ├── 00-orchestrator.md        ← Coordinador principal
│   ├── 03-primer-curso.md        ← Proyectos primer curso
│   ├── 04-segundo-curso.md       ← Proyectos segundo curso
│   └── 05-administracion.md      ← Proyectos administración
│
├── 🎨 plantilla/                  ← Plantilla HTML
│   ├── index.html                ← Diseño del proyecto
│   ├── logo.png                  ← Logo del centro
│   ├── sections/                 ← Secciones modulares
│   └── README.md                 ← Documentación
│
├── 🛠️ scripts/                    ← Utilidades
│   ├── download-project-image.js ← Descarga imágenes
│   └── README.md
│
└── 📂 proyectos/                  ← Proyectos generados
    ├── 01-Informatica/
    │   ├── ASIR/
    │   │   ├── Primero/
    │   │   │   └── [PROYECTO]/
    │   │   │       ├── proyecto.html
    │   │   │       ├── logo.png
    │   │   │       └── images/
    │   │   └── Segundo/
    │   ├── SMR/
    │   ├── DAM/
    │   └── DAW/
    └── 02-Administracion/
        ├── GM-ADM/
        ├── GS-ADMF/
        └── GS-ASID/
```

---

## 🎨 Características

### Para el Profesorado

| Ventaja | Descripción |
|---------|-------------|
| ⏱️ **Ahorro de tiempo** | Genera proyectos en minutos |
| 🎯 **Personalizable** | Adapta ciclo, curso y temática |
| 📝 **Listo para usar** | Solo imprimir o compartir con el alumnado |
| 🔄 **Reutilizable** | Genera múltiples variantes |

### Para el Alumnado

| Ventaja | Descripción |
|---------|-------------|
| 🧭 **Guía clara** | Saben qué hacer paso a paso |
| 💡 **Sin soluciones** | Fomenta la investigación |
| 🎓 **Nivel adecuado** | Adaptado al curso |
| 💼 **Contexto real** | Situaciones empresariales reales |

---

## 📊 Primer vs Segundo Curso

| Aspecto | Primer Curso | Segundo Curso |
|---------|--------------|---------------|
| **Duración** | 25 horas | 96 horas |
| **Complejidad** | ⭐ Sencilla | ⭐⭐⭐ Profesional |
| **Objetivo** | Aprender dinámica | Proyecto integrador |
| **Guía** | Muy detallada | Detallada |
| **Autonomía** | Baja | Media-Alta |

---

## 🖨️ Exportar Proyectos

Una vez generado el HTML, puedes:

### 📄 Exportar a PDF
- Click en el botón **PDF** (barra superior)
- Se descarga automáticamente
- Ideal para imprimir

### 📝 Exportar a Word
- Click en el botón **Word** (barra superior)
- Documento editable
- Ideal para hacer modificaciones

---

## ❓ Preguntas Frecuentes

### ¿Necesito saber usar IA?
**No.** El asistente te guía paso a paso. Solo responde las preguntas.

### ¿Puedo modificar los proyectos?
**Sí.** Una vez generados, son tuyos. Puedes editar el HTML o exportar a Word.

### ¿Funciona offline?
**No.** Necesitas conexión para que la IA genere el contenido.

### ¿Es gratis?
**Sí.** Tanto Qwen Code como Gemini CLI son gratuitos.

### ¿Puedo generar varios proyectos del mismo tema?
**Sí.** Cada generación puede ser ligeramente diferente.

### ¿El alumnado puede usar esto?
**No está recomendado.** Es una herramienta para el profesorado. Los proyectos están diseñados para que el alumnado los complete.

---

## 🛠️ Solución de Problemas

### "No se reconoce el comando"
```powershell
# Verifica que npm está instalado
npm --version

# Si no, instala Node.js desde:
# https://nodejs.org/
```

### "Qwen no se encuentra"
```bash
# Reinstala Qwen Code
npm install -g @qwen-code/qwen-code

# Reinicia PowerShell
```

### "Error al generar el proyecto"
1. Verifica tu conexión a internet
2. Prueba con otra temática
3. Reinicia el asistente

### "Los acentos se ven raros"
```powershell
# Cambia la codificación a UTF-8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
```

---

## 📝 Licencia

Este proyecto está bajo licencia **Creative Commons BY-NC-SA 4.0**

- ✅ **Compartir** - Copiar y redistribuir
- ✅ **Adaptar** - Remezclar, transformar y crear
- ⚠️ **Reconocimiento** - Dar crédito al IES Serra Perenxisa
- ⚠️ **No Comercial** - No usar con fines comerciales
- ⚠️ **Compartir Igual** - Distribuir con la misma licencia

[Licencia completa](LICENSE)

---

## 👨‍💻 Autores

**Departamento de Informática**  
**IES Serra Perenxisa** - Valencia, España

### Contribuciones
Las contribuciones son bienvenidas. Contacta con el departamento para más información.

---

## 📞 Contacto

- 🌐 Web: [ies-serra.gva.es](https://ies-serra.gva.es)
- 📧 Email: info@ies-serra.gva.es
- 📍 Dirección: Carrer de la Perenxisa, s/n, 46370 Chiva, Valencia

---

## 🙏 Agradecimientos

- **Qwen Code** - IA de código abierto
- **Google Gemini** - IA de Google
- **Vue.js** - Framework JavaScript
- **Tailwind CSS** - Estilos modernos

---

<div align="center">

**¿Problemas?** Abre un issue o contacta con el departamento.

**Hecho con ❤️ para la comunidad educativa**

</div>
