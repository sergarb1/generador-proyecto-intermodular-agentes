# Generador de Proyectos Intermodulares
# IES Serra Perenxisa

$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Clear-Host

Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "   GENERADOR DE PROYECTOS INTERMODULARES" -ForegroundColor Cyan
Write-Host "   IES Serra Perenxisa" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# Ruta del archivo de configuracion
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$configPath = Join-Path $scriptDir "config.ini"
$promptPath = Join-Path $scriptDir "prompt-inicial.txt"

Write-Host "[DEBUG] Script directory: $scriptDir" -ForegroundColor DarkGray
Write-Host "[DEBUG] Config path: $configPath" -ForegroundColor DarkGray

# Funcion para leer la configuracion
function Get-ConfigTool {
    Write-Host "[DEBUG] Leyendo configuracion desde $configPath" -ForegroundColor DarkGray
    if (Test-Path $configPath) {
        $config = Get-Content $configPath -Raw -Encoding UTF8
        Write-Host "[DEBUG] Contenido config.ini: $config" -ForegroundColor DarkGray
        $match = $config -match 'tool\s*=\s*(\w+)'
        if ($match) {
            Write-Host "[DEBUG] Tool encontrada: $($matches[1])" -ForegroundColor DarkGray
            return $matches[1].ToLower()
        }
        Write-Host "[DEBUG] No se encontro 'tool=' en el config" -ForegroundColor DarkGray
    } else {
        Write-Host "[DEBUG] El archivo config.ini no existe" -ForegroundColor DarkGray
    }
    return $null
}

# Funcion para guardar la configuracion
function Save-ConfigTool($tool) {
    Write-Host "[DEBUG] Guardando tool='$tool' en $configPath" -ForegroundColor DarkGray
    "tool=$tool" | Set-Content $configPath -Encoding UTF8
    Write-Host "[DEBUG] Config guardada" -ForegroundColor DarkGray
}

# Detectar si estamos dentro de Qwen o Gemini
$isQwen = $env:QWEN_CODE -ne $null -or $env:QWEN_CLI -ne $null
$isGemini = $env:GEMINI_CLI -ne $null

Write-Host "[DEBUG] isQwen=$isQwen, isGemini=$isGemini" -ForegroundColor DarkGray

# Detectar herramientas disponibles
$hasQwen = Get-Command qwen -ErrorAction SilentlyContinue
$hasGemini = Get-Command gemini -ErrorAction SilentlyContinue

Write-Host "[DEBUG] hasQwen=$(if($hasQwen){'True'}else{'False'}), hasGemini=$(if($hasGemini){'True'}else{'False'})" -ForegroundColor DarkGray

Write-Host ""
Write-Host "Detectando entorno..." -ForegroundColor Yellow

# Si estamos dentro de un entorno, usar ese
if ($isQwen) {
    Write-Host "Ejecutando dentro de Qwen Code" -ForegroundColor Green
    $tool = "qwen"
} elseif ($isGemini) {
    Write-Host "Ejecutando dentro de Gemini CLI" -ForegroundColor Green
    $tool = "gemini"
} else {
    # No estamos dentro de ningun entorno, verificar herramientas instaladas
    Write-Host "[DEBUG] No estamos dentro de un entorno CLI, verificando herramientas..." -ForegroundColor DarkGray
    
    $lastTool = Get-ConfigTool
    Write-Host "[DEBUG] Last tool del config: $lastTool" -ForegroundColor DarkGray

    if ($lastTool -eq "qwen" -and $hasQwen) {
        Write-Host "Usando Qwen Code (ultima seleccion)" -ForegroundColor Green
        $tool = "qwen"
    } elseif ($lastTool -eq "gemini" -and $hasGemini) {
        Write-Host "Usando Gemini CLI (ultima seleccion)" -ForegroundColor Green
        $tool = "gemini"
    } elseif ($hasQwen -and $hasGemini) {
        # Ambos disponibles, preguntar al usuario
        Write-Host "Herramientas detectadas: Qwen Code y Gemini CLI" -ForegroundColor Yellow
        Write-Host ""
        $choice = Read-Host "Que herramienta quieres usar? (qwen/gemini) [qwen]"
        if ($choice -eq "gemini") {
            $tool = "gemini"
        } else {
            $tool = "qwen"
        }
    } elseif ($hasQwen) {
        Write-Host "Qwen Code detectado" -ForegroundColor Green
        $tool = "qwen"
    } elseif ($hasGemini) {
        Write-Host "Gemini CLI detectado" -ForegroundColor Green
        $tool = "gemini"
    } else {
        Write-Host "ERROR: No se encuentra Qwen o Gemini" -ForegroundColor Red
        Write-Host ""
        Write-Host "Instala uno de los siguientes:" -ForegroundColor Yellow
        Write-Host "  - Qwen Code:     npm install -g @qwen-code/qwen-code" -ForegroundColor Gray
        Write-Host "  - Gemini CLI:    npm install -g @google/gemini-cli" -ForegroundColor Gray
        Write-Host ""
        Read-Host "Presiona Enter para salir"
        exit 1
    }
}

# Guardar la seleccion en config.ini
Save-ConfigTool $tool

# Leer el prompt inicial desde el archivo prompt-inicial.txt
# Esto permite que cualquier modificacion en el archivo se refleje automaticamente
Write-Host "[DEBUG] Leyendo prompt desde $promptPath" -ForegroundColor DarkGray
if (Test-Path $promptPath) {
    $initialPrompt = Get-Content $promptPath -Raw -Encoding UTF8
    Write-Host "[DEBUG] Prompt cargado correctamente desde prompt-inicial.txt" -ForegroundColor DarkGray
} else {
    Write-Host "[WARNING] No se encontro prompt-inicial.txt, usando prompt por defecto" -ForegroundColor Yellow
    $initialPrompt = "Hola! Soy el asistente de generacion de proyectos intermodulares del IES Serra Perenxisa. Por favor, ayudame a generar un proyecto intermodular."
}

Write-Host ""
Write-Host "Iniciando $tool con prompt interactivo..." -ForegroundColor Cyan
Write-Host ""

# Mensaje informativo para la IA sobre el interprete
$interpreterInfo = @"

---
ℹ️ INFORMACION DEL INTERPRETE:
Este script se esta ejecutando en PowerShell (`$PSVersionTable.PSVersion).
Los comandos de shell deben usar sintaxis PowerShell (no bash).
---

"@

# Combinar el prompt inicial con la informacion del interprete
$fullPrompt = $initialPrompt + $interpreterInfo

# Iniciar la herramienta seleccionada en modo interactivo con el prompt y YOLO
if ($tool -eq "qwen") {
    Write-Host "[DEBUG] Lanzando 'qwen -i ... -y'..." -ForegroundColor DarkGray
    qwen -i "$fullPrompt" -y
} elseif ($tool -eq "gemini") {
    Write-Host "[DEBUG] Lanzando 'gemini -i ... -y'..." -ForegroundColor DarkGray
    gemini -i "$fullPrompt" -y
}

exit
