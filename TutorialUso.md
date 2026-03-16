# 🚀 Tutorial de Uso - Generador de Proyectos Intermodulares

Guía completa para utilizar el generador de proyectos intermodulares del IES Serra Perenxisa.

---

## 📋 Índice

1. [Introducción](#introducción)
2. [Iniciar el Asistente](#iniciar-el-asistente)
3. [Proceso de Generación](#proceso-de-generación)
4. [Estructura del Proyecto Generado](#estructura-del-proyecto-generado)
5. [Visualización del Proyecto](#visualización-del-proyecto)
6. [Personalización](#personalización)
7. [Exportación](#exportación)
8. [Ejemplos Prácticos](#ejemplos-prácticos)

---

## Introducción

Este sistema utiliza **agentes de IA especializados** para generar proyectos intermodulares completos para:

- **FP Básica, Grado Medio y Grado Superior**
- **Familias:** Informática, Administración y Gestión, Comercio y Marketing
- **Formato:** HTML interactivo con navegación lateral

### ¿Qué obtendrás?

Cada proyecto generado incluye:

```
proyectos/[FAMILIA]/[CICLO]/[CURSO]/[NOMBRE_PROYECTO]/
├── proyecto.html          # Archivo principal (abrir en navegador)
├── logo.png               # Logo del IES Serra Perenxisa
├── data/                  # Datos del proyecto (13 archivos JS)
│   ├── metadata.js
│   ├── resumen.js
│   ├── introduccion.js
│   ├── estado-arte.js
│   ├── viabilidad.js
│   ├── requisitos.js
│   ├── diseno.js
│   ├── implementacion.js
│   ├── administracion.js
│   ├── herramientas.js
│   ├── conclusiones.js
│   ├── bibliografia.js
│   └── anexos.js
└── images/
    └── hero-[tematica].jpg # Imagen de portada
```

---

## Iniciar el Asistente

### Método 1: Script de Inicio Rápido

El proyecto incluye scripts para iniciar el asistente según tu sistema operativo:

#### Linux/Mac

```bash
# Desde la carpeta del proyecto
./Iniciar-Asistente.sh
```

#### Windows

```powershell
# PowerShell
.\Iniciar-Asistente.ps1

# O el archivo batch
Iniciar-Asistente.bat
```

### Método 2: Manual con tu Herramienta de IA

Si prefieres usar directamente tu herramienta de IA:

#### Con Gemini CLI

```bash
cd /ruta/al/proyecto
gemini
```

#### Con Qwen Code

```bash
cd /ruta/al/proyecto
qwen
```

#### Con GitHub Copilot

```bash
cd /ruta/al/proyecto
gh copilot chat
```

---

## Proceso de Generación

### Paso 1: Cargar el Prompt Inicial

El sistema incluye un archivo con el prompt inicial:

```bash
# Leer el prompt
cat prompt-inicial.txt

# O copiar y pegar en tu herramienta de IA
```

### Paso 2: Responder las Preguntas

El asistente te hará **5 preguntas** una por una:

#### 1️⃣ Familia Profesional

```
¿Qué familia profesional quieres usar?

1. Informática 🖥️
2. Administración y Gestión 📊
3. Comercio y Marketing 🛒
```

**Ejemplo de respuesta:**
```
informatica
```

#### 2️⃣ Nivel del Ciclo

```
¿Qué nivel del ciclo quieres?

1. FP Básica (FPB)
2. Grado Medio (GM)
3. Grado Superior (GS)
```

**Ejemplo de respuesta:**
```
superior
```

#### 3️⃣ Ciclo Formativo

Las opciones dependen de la familia y nivel seleccionados:

**Para Informática - Superior:**
```
¿Qué ciclo formativo quieres?

1. ASIR - Administración de Sistemas Informáticos en Red
2. DAM - Desarrollo de Aplicaciones Multiplataforma
3. DAW - Desarrollo de Aplicaciones Web
```

**Ejemplo de respuesta:**
```
dam
```

#### 4️⃣ Curso del Ciclo

```
¿En qué curso está el alumnado?

1. Primero
2. Segundo
```

**Ejemplo de respuesta:**
```
segundo
```

#### 5️⃣ Temática del Proyecto

```
¿Qué temática quieres para el proyecto?

Algunas sugerencias:
- Digitalización de empresas
- Comercio electrónico
- Creación de startup
- Automatización empresarial
- Ciberseguridad
- IA aplicada a empresa
- Gestión de clientes
- Desarrollo de apps
- Redes y servidores
- Logística

O puedes indicarme: "Elige tú una temática adecuada"
```

**Ejemplo de respuesta:**
```
Una empresa de logística que gestiona datos en Odoo. 
Cuando llega un camión, se notifica a una app de Flutter 
para que los operarios escaneen los paquetes.
```

### Paso 3: Generación Automática

Una vez respondidas las preguntas, el sistema:

1. **Selecciona los agentes** adecuados según tus respuestas
2. **Lee las plantillas** de agentes especializadas
3. **Genera el contenido** de cada sección del proyecto
4. **Crea la estructura** de carpetas y archivos
5. **Descarga imágenes** de Pexels (gratis, sin copyright)

**Tiempo estimado:** 2-5 minutos dependiendo de la herramienta de IA

### Paso 4: Verificación

Al finalizar, verifica que se ha creado la carpeta del proyecto:

```bash
# Listar proyectos recientes
ls -la proyectos/[FAMILIA]/[CICLO]/[CURSO]/
```

---

## Estructura del Proyecto Generado

### Archivos de Datos

Cada archivo JavaScript contiene una sección del proyecto:

| Archivo | Contenido |
|---------|-----------|
| `metadata.js` | Título, autor, ciclo, curso |
| `resumen.js` | Resumen ejecutivo del proyecto |
| `introduccion.js` | Contexto empresarial detallado |
| `estado-arte.js` | Análisis de soluciones existentes |
| `viabilidad.js` | Estudio de viabilidad técnica/económica |
| `requisitos.js` | Requisitos funcionales y no funcionales |
| `diseno.js` | Arquitectura y diseño técnico |
| `implementacion.js` | Guía de implementación |
| `administracion.js` | Manual de administración |
| `herramientas.js` | Herramientas de apoyo |
| `conclusiones.js` | Conclusiones y líneas futuras |
| `bibliografia.js` | Referencias bibliográficas |
| `anexos.js` | Anexos técnicos |

### Formato del Contenido

Todo el contenido está en **HTML válido** (NO Markdown):

```javascript
window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['introduccion'] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🏢</span>
        <span>Contexto Empresarial</span>
    </div>
    <p>Descripción del contexto...</p>
</div>

<h2>1.1. Presentación de la Empresa</h2>

<table class="my-6">
<thead>
<tr>
<th>Departamento</th>
<th>Personal</th>
</tr>
</thead>
<tbody>
<tr>
<td>Dirección</td>
<td>2</td>
</tr>
</tbody>
</table>
`;
```

---

## Visualización del Proyecto

### Abrir el Proyecto

1. Navega a la carpeta del proyecto:
   ```bash
   cd proyectos/01-Informatica/DAM/Segundo/SEGUNDO-DAM-LOGISTICA-ODOO-FLUTTER/
   ```

2. Abre `proyecto.html` en tu navegador:
   ```bash
   # Linux
   xdg-open proyecto.html
   
   # Mac
   open proyecto.html
   
   # Windows
   start proyecto.html
   ```

### Características del Visor

El proyecto incluye:

- **📱 Navegación lateral** con todas las secciones
- **🎨 Diseño responsive** (funciona en móvil, tablet, desktop)
- **🖨️ Botón de impresión** para imprimir en PDF
- **📄 Botón de exportar** a Word (.doc)
- **🔍 Búsqueda** de contenido (Ctrl+F)
- **📊 Callouts** de información, advertencia, éxito
- **🖼️ Imágenes** de portada y ejemplos

### Navegación

La barra lateral incluye:

```
🏠 Portada
📄 Resumen
────────────
👋 1. Introducción
🌐 2. Estado del Arte
📈 3. Viabilidad
📋 4. Requisitos
🎨 5. Diseño
💻 6. Implementación
⚙️ 7. Administración
🛠️ 8. Herramientas
🏁 9. Conclusiones
────────────
📚 Bibliografía
📎 Anexos
```

Haz clic en cualquier sección para navegar directamente.

---

## Personalización

### Editar el Contenido

Puedes personalizar el proyecto editando los archivos JavaScript:

1. Abre el archivo que quieras modificar:
   ```bash
   nano data/introduccion.js
   ```

2. Edita el contenido HTML dentro de las comillas invertidas (backticks)

3. Guarda los cambios

4. Refresca el navegador para ver los cambios

### Cambiar el Logo

1. Reemplaza `logo.png` con tu propio logo
2. Mantén el nombre de archivo o actualiza la referencia en `proyecto.html`

### Cambiar la Imagen de Portada

1. Descarga o crea una nueva imagen
2. Guárdala en `images/`
3. Actualiza la referencia en `data/metadata.js`:
   ```javascript
   projectImage: "./images/nueva-imagen.jpg"
   ```

---

## Exportación

### Imprimir en PDF

1. Abre el proyecto en el navegador
2. Haz clic en el botón **"Imprimir"** (arriba a la derecha)
3. En el diálogo de impresión, selecciona **"Guardar como PDF"**
4. Elige la ubicación y guarda

### Exportar a Word

1. Abre el proyecto en el navegador
2. Haz clic en el botón **"Word"** (arriba a la derecha)
3. Se descargará un archivo `.doc`
4. Ábrelo en Microsoft Word o LibreOffice Writer

### Compartir el Proyecto

**Opción 1: Compartir carpeta completa**
```bash
# Comprimir el proyecto
zip -r SEGUNDO-DAM-LOGISTICA-ODOO-FLUTTER.zip \
    proyectos/01-Informatica/DAM/Segundo/SEGUNDO-DAM-LOGISTICA-ODOO-FLUTTER/
```

**Opción 2: Compartir solo el HTML**
- El archivo `proyecto.html` es autónomo (necesita la carpeta `data/`)
- Comparte toda la carpeta del proyecto

---

## Ejemplos Prácticos

### Ejemplo 1: Proyecto DAM - App de Gestión

**Datos:**
- Familia: Informática
- Nivel: Grado Superior
- Ciclo: DAM
- Curso: Segundo
- Temática: App de gestión de citas médicas

**Comando de inicio:**
```bash
./Iniciar-Asistente.sh
```

**Respuestas:**
```
1. informatica
2. superior
3. dam
4. segundo
5. App móvil para gestión de citas médicas con backend REST
```

**Resultado:**
```
proyectos/01-Informatica/DAM/Segundo/SEGUNDO-DAM-APP-CITAS-MEDICAS/
```

---

### Ejemplo 2: Proyecto ASIR - Cloud

**Datos:**
- Familia: Informática
- Nivel: Grado Superior
- Ciclo: ASIR
- Curso: Segundo
- Temática: Infraestructura cloud automatizada

**Respuestas:**
```
1. informatica
2. superior
3. asir
4. segundo
5. Automatización de infraestructura cloud con Terraform y Ansible
```

**Resultado:**
```
proyectos/01-Informatica/ASIR/Segundo/SEGUNDO-ASIR-CLOUD-AUTOMATIZACION/
```

---

### Ejemplo 3: Proyecto Administración - Plan de Empresa

**Datos:**
- Familia: Administración y Gestión
- Nivel: Grado Superior
- Ciclo: ASID
- Curso: Segundo
- Temática: Startup de consultoría

**Respuestas:**
```
1. administracion
2. superior
3. asid
4. segundo
5. Plan de empresa para startup de consultoría tecnológica
```

**Resultado:**
```
proyectos/02-Administracion/GS-ASID/Segundo/SEGUNDO-ASID-PLAN-EMPRESA-STARTUP/
```

---

## Consejos y Mejores Prácticas

### 💡 Para Obtener Mejores Resultados

1. **Sé específico en la temática:**
   - ❌ "Una app"
   - ✅ "App de gestión de citas médicas con autenticación y backend REST"

2. **Proporciona contexto empresarial:**
   - ❌ "Una empresa"
   - ✅ "Una PYME de 50 empleados del sector logístico en Valencia"

3. **Menciona tecnologías concretas:**
   - ❌ "Usando bases de datos"
   - ✅ "Usando PostgreSQL para datos relacionales y Redis para caché"

### ⚠️ Errores Comunes a Evitar

1. **No interrumpir el proceso:** Deja que la IA complete todas las secciones
2. **Verificar el contenido:** Revisa que todo se ha generado correctamente
3. **Comprobar imágenes:** Asegúrate de que las imágenes se han descargado

### 🎓 Uso en el Aula

**Para el profesorado:**

1. Genera proyectos de ejemplo antes de clase
2. Úsalos como base para que el alumnado los complete
3. Personaliza la complejidad según el curso

**Para el alumnado:**

1. Usa el proyecto generado como guía
2. Completa las secciones con tu propio desarrollo
3. Personaliza el diseño y contenido

---

## Solución de Problemas

### El proyecto no se genera completo

**Solución:**
- Verifica que la API key es válida
- Comprueba que tienes conexión a Internet
- Intenta con otra herramienta de IA

### Las imágenes no se descargan

**Solución:**
```bash
# Descargar manualmente desde Pexels
curl -o images/hero.jpg "https://images.pexels.com/photos/ID?auto=compress&w=1200"
```

### El HTML no se visualiza correctamente

**Solución:**
- Abre el proyecto desde un servidor local:
  ```bash
  python3 -m http.server 8000
  ```
- Navega a `http://localhost:8000/proyectos/.../proyecto.html`

---

## Recursos Adicionales

- [Tutorial de Instalación](./TutorialInstalacion.md)
- [README del Proyecto](./README.md)
- [Web del IES Serra Perenxisa](https://iesserraperenxisa.es)
- [Repositorio en GitHub](https://github.com/sergarb1/generador-proyecto-intermodular-agentes)

---

## ¿Necesitas Ayuda?

1. Revisa este tutorial y el de instalación
2. Consulta los [proyectos de ejemplo](./proyectos/)
3. Contacta con el profesorado
4. Abre un [issue en GitHub](https://github.com/sergarb1/generador-proyecto-intermodular-agentes/issues)

---

**Versión del Tutorial:** 1.0  
**Última Actualización:** Marzo 2026
