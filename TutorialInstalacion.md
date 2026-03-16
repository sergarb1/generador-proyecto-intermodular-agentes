# 📦 Tutorial de Instalación - Generador de Proyectos Intermodulares

Guía completa para poner en marcha el generador de proyectos intermodulares del IES Serra Perenxisa.

---

## 📋 Índice

1. [Requisitos Previos](#requisitos-previos)
2. [Descarga del Proyecto](#descarga-del-proyecto)
3. [Instalación de Herramientas de IA](#instalación-de-herramientas-de-ia)
4. [Configuración del Entorno](#configuración-del-entorno)
5. [Verificación de la Instalación](#verificación-de-la-instalación)

---

## Requisitos Previos

### Software Necesario

| Herramienta | Versión Mínima | URL de Descarga |
|-------------|----------------|-----------------|
| **Node.js** | 18.x | [nodejs.org](https://nodejs.org/) |
| **npm** | 9.x | Incluido con Node.js |
| **Git** | 2.x | [git-scm.com](https://git-scm.com/) |
| **Navegador** | Chrome/Firefox/Edge | Últimas versiones |

### Verificar Instalación

Abre una terminal y ejecuta:

```bash
node --version
npm --version
git --version
```

Deberías ver algo como:
```
v18.17.0
9.6.7
git version 2.41.0
```

---

## Descarga del Proyecto

### Opción 1: Descargar ZIP desde GitHub Releases

1. Ve a la página de **Releases** en GitHub:
   ```
   https://github.com/sergarb1/generador-proyecto-intermodular-agentes/releases
   ```

2. Haz clic en la última versión (ej: `v1.0.0`)

3. Descarga el archivo `generador-proyecto-intermodular-agentes.zip`

4. Extrae el ZIP en una carpeta de tu elección:
   ```bash
   unzip generador-proyecto-intermodular-agentes.zip
   cd generador-proyecto-intermodular-agentes
   ```

### Opción 2: Clonar desde GitHub

```bash
git clone https://github.com/sergarb1/generador-proyecto-intermodular-agentes.git
cd generador-proyecto-intermodular-agentes
```

---

## Instalación de Herramientas de IA

El sistema funciona con **cualquiera** de estas herramientas de IA. Solo necesitas instalar **UNA** de ellas.

### 🔮 Opción A: Gemini CLI (Recomendada)

**Google Gemini - Modelo multimodal avanzado**

#### Paso 1: Instalar Gemini CLI

```bash
npm install -g @google/gemini-cli
```

#### Paso 2: Configurar API Key de Google

1. Ve a [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en **"Create API Key"**
4. Copia la API key generada

5. Configura la variable de entorno:

**Linux/Mac:**
```bash
export GEMINI_API_KEY="tu-api-key-aqui"
```

**Windows (PowerShell):**
```powershell
$env:GEMINI_API_KEY="tu-api-key-aqui"
```

**Windows (CMD):**
```cmd
set GEMINI_API_KEY=tu-api-key-aqui
```

#### Paso 3: Verificar Instalación

```bash
gemini --version
```

---

### 🎯 Opción B: Qwen Code

**Alibaba Qwen - Especializado en código**

#### Paso 1: Instalar Qwen Code

```bash
npm install -g @qwen-code/qwen-code
```

#### Paso 2: Configurar API Key

1. Regístrate en [DashScope (Alibaba Cloud)](https://dashscope.console.aliyun.com/)
2. Genera una API Key
3. Configura la variable de entorno:

**Linux/Mac:**
```bash
export DASHSCOPE_API_KEY="tu-api-key-aqui"
```

**Windows (PowerShell):**
```powershell
$env:DASHSCOPE_API_KEY="tu-api-key-aqui"
```

#### Paso 3: Verificar Instalación

```bash
qwen --version
```

---

### ✨ Opción C: GitHub Copilot CLI

**GitHub Copilot - Asistente IA de GitHub**

#### Paso 1: Tener cuenta de GitHub

Necesitas una cuenta de GitHub con suscripción activa a **GitHub Copilot**.

#### Paso 2: Instalar GitHub CLI

```bash
# Linux (Debian/Ubuntu)
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh

# macOS
brew install gh

# Windows
winget install --id GitHub.cli
```

#### Paso 3: Autenticar con GitHub

```bash
gh auth login
```

Sigue las instrucciones en pantalla para autenticarte.

#### Paso 4: Habilitar Copilot

```bash
gh copilot suggest
```

---

## Configuración del Entorno

### Paso 1: Verificar Estructura de Carpetas

Asegúrate de que la estructura del proyecto es correcta:

```
generador-proyecto-intermodular-agentes/
├── agents/                 # Agentes de IA
│   ├── 00-orchestrator.md
│   ├── 01-experto-proyectos.md
│   ├── 02-experto-informatica.md
│   ├── 03-primer-curso.md
│   ├── 04-segundo-curso.md
│   ├── 05-experto-administracion.md
│   └── 06-experto-comercio.md
├── plantilla/              # Plantilla HTML
│   ├── index.html
│   └── logo.png
├── proyectos/              # Proyectos generados
├── scripts/                # Scripts de generación
├── config.ini              # Configuración
└── README.md
```

### Paso 2: Configurar API Keys (Persistente)

Para no tener que configurar la API key cada vez, añade la variable de entorno a tu perfil:

**Linux/Mac (~/.bashrc o ~/.zshrc):**
```bash
echo 'export GEMINI_API_KEY="tu-api-key-aqui"' >> ~/.bashrc
source ~/.bashrc
```

**Windows (Variables de Entorno Permanentes):**

1. Abre el menú Inicio y busca "Variables de entorno"
2. Haz clic en **"Editar las variables de entorno del sistema"**
3. Haz clic en **"Variables de entorno..."**
4. En **"Variables de usuario"**, haz clic en **"Nueva..."**
5. Nombre: `GEMINI_API_KEY`
6. Valor: `tu-api-key-aqui`
7. Haz clic en **Aceptar**

---

## Verificación de la Instalación

### Checklist de Verificación

Completa esta lista para asegurarte de que todo está correcto:

- [ ] **Node.js instalado** → `node --version` muestra v18+
- [ ] **npm instalado** → `npm --version` muestra 9+
- [ ] **Git instalado** → `git --version` funciona
- [ ] **Al menos una herramienta de IA instalada**:
  - [ ] `gemini --version` funciona, O
  - [ ] `qwen --version` funciona, O
  - [ ] `gh --version` funciona
- [ ] **API Key configurada** → Variable de entorno establecida
- [ ] **Proyecto descargado** → Carpeta con todos los archivos
- [ ] **Agentes presentes** → Carpeta `agents/` con 7 archivos .md
- [ ] **Plantilla presente** → Carpeta `plantilla/` con index.html y logo.png

### Test de Funcionamiento

1. Abre el archivo `index.html` en tu navegador:
   ```bash
   # Linux/Mac
   xdg-open index.html    # Linux
   open index.html        # Mac
   
   # Windows
   start index.html
   ```

2. Deberías ver la página de inicio del generador con:
   - Título "Generador de Proyectos Intermodulares"
   - Sección de Agentes de IA
   - Proyectos de ejemplo

3. Si ves la página correctamente, **¡la instalación ha sido exitosa!** 🎉

---

## Solución de Problemas

### Error: "Command not found" al instalar herramientas

**Solución:** Asegúrate de que npm está en tu PATH:

```bash
# Verificar ruta de npm
which npm

# Si no funciona, reinstala Node.js desde nodejs.org
```

### Error: "API Key not valid"

**Solución:**

1. Verifica que la API key está bien copiada (sin espacios)
2. Comprueba que la variable de entorno está configurada:
   ```bash
   echo $GEMINI_API_KEY    # Linux/Mac
   echo %GEMINI_API_KEY%   # Windows CMD
   ```
3. Si está vacía, vuelve a configurarla

### Error: "Permission denied" al instalar con npm

**Solución (Linux/Mac):**

```bash
# Opción 1: Usar sudo (no recomendado)
sudo npm install -g @google/gemini-cli

# Opción 2: Configurar npm para instalar sin sudo (recomendado)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### Error: "Cannot find module" al ejecutar scripts

**Solución:**

```bash
# Navega al directorio del proyecto
cd /ruta/al/proyecto

# Reinstala dependencias si existen
npm install
```

---

## Recursos Adicionales

- [Documentación de Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [Documentación de Qwen Code](https://github.com/alibaba/qwen-code)
- [Documentación de GitHub Copilot](https://docs.github.com/en/copilot)
- [Repositorio del Proyecto](https://github.com/sergarb1/generador-proyecto-intermodular-agentes)

---

## ¿Necesitas Ayuda?

Si tienes problemas durante la instalación:

1. Revisa este tutorial paso a paso
2. Consulta la sección de [Issues en GitHub](https://github.com/sergarb1/generador-proyecto-intermodular-agentes/issues)
3. Contacta con el profesorado del IES Serra Perenxisa

---

**Versión del Tutorial:** 1.0  
**Última Actualización:** Marzo 2026
