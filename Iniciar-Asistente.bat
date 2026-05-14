@echo off
chcp 65001 >nul 2>&1
title Generador de Proyectos Intermodulares - IES Serra Perenxisa

cls
echo.
echo =========================================
echo    GENERADOR DE PROYECTOS INTERMODULARES
echo    IES Serra Perenxisa
echo =========================================
echo.

set "SCRIPT_DIR=%~dp0"
set "CONFIG_PATH=%SCRIPT_DIR%config.ini"
set "PROMPT_PATH=%SCRIPT_DIR%prompt-inicial.txt"

:: Detectar herramientas instaladas
set "HAS_OPENCODE="
set "HAS_QWEN="
set "HAS_GEMINI="
set "HAS_COPILOT="

where opencode >nul 2>&1
if %errorlevel% equ 0 set "HAS_OPENCODE=1"

where qwen >nul 2>&1
if %errorlevel% equ 0 set "HAS_QWEN=1"

where gemini >nul 2>&1
if %errorlevel% equ 0 set "HAS_GEMINI=1"

where copilot >nul 2>&1
if %errorlevel% equ 0 set "HAS_COPILOT=1"

echo Detectando entorno...
echo.

:: Leer herramienta guardada
set "TOOL="
if exist "%CONFIG_PATH%" (
    for /f "tokens=2 delims==" %%a in ('findstr /i "^tool=" "%CONFIG_PATH%" 2^>nul') do (
        set "TOOL=%%a"
    )
)

:: Si no hay guardada o la guardada ya no está disponible, elegir la primera disponible
if not defined TOOL (
    if defined HAS_OPENCODE set "TOOL=opencode"
    if defined HAS_QWEN set "TOOL=qwen"
    if defined HAS_GEMINI set "TOOL=gemini"
    if defined HAS_COPILOT set "TOOL=copilot"
)

:: Si no hay ninguna herramienta, error
if not defined TOOL (
    echo ERROR: No se encuentra ninguna herramienta CLI instalada.
    echo.
    echo Instala una de las siguientes:
    echo   - Opencode:            npm install -g opencode
    echo   - Qwen Code:           npm install -g @qwen-code/qwen-code
    echo   - Gemini CLI:          npm install -g @google/gemini-cli
    echo   - GitHub Copilot CLI:  npm install -g @github/copilot-cli
    echo.
    pause
    exit /b 1
)

:: Mostrar herramientas disponibles (sin guiones)
echo Herramientas disponibles:
if defined HAS_OPENCODE echo   opencode
if defined HAS_QWEN echo   qwen
if defined HAS_GEMINI echo   gemini
if defined HAS_COPILOT echo   copilot
echo.

:: Preguntar si quiere cambiar
set "CAMBIAR="
set /p "CAMBIAR=Herramienta actual: %TOOL%. ¿Quieres cambiar? (s/n) [n]: "
if /i "%CAMBIAR%"=="s" (
    set "TOOL="
    set /p "TOOL_SEL=Elige herramienta (opencode/qwen/gemini/copilot): "
    
    if /i "%TOOL_SEL%"=="opencode" (
        if defined HAS_OPENCODE set "TOOL=opencode"
    )
    if /i "%TOOL_SEL%"=="qwen" (
        if defined HAS_QWEN set "TOOL=qwen"
    )
    if /i "%TOOL_SEL%"=="gemini" (
        if defined HAS_GEMINI set "TOOL=gemini"
    )
    if /i "%TOOL_SEL%"=="copilot" (
        if defined HAS_COPILOT set "TOOL=copilot"
    )
    
    if not defined TOOL (
        echo Herramienta no v%LIDA o no disponible. Manteniendo la anterior.
        :: Recuperar la primera disponible como fallback
        if defined HAS_OPENCODE set "TOOL=opencode"
        if defined HAS_QWEN set "TOOL=qwen"
        if defined HAS_GEMINI set "TOOL=gemini"
        if defined HAS_COPILOT set "TOOL=copilot"
    )
)

:: Guardar selección
echo tool=%TOOL% > "%CONFIG_PATH%"

:: Asegurar que existe el archivo de prompt
if not exist "%PROMPT_PATH%" (
    echo Creando archivo prompt-inicial.txt por defecto...
    (
        echo Eres un asistente experto en Formacion Profesional del IES Serra Perenxisa.
        echo.
        echo PROCESO - PREGUNTA UNO POR UNO:
        echo 1. Familia profesional (Informatica/Administracion/Comercio/Turismo)
        echo 2. Nivel (FPB/GM/GS)
        echo 3. Ciclo formativo
        echo 4. Curso (Primero/Segundo)
        echo 5. Tematica (o "elige tu")
        echo.
        echo Al final, genera proyecto completo con contexto, tareas, entregables y metodologia ABP.
        echo Guarda en: proyectos/[Familia]/[Ciclo]/[Curso]/[NombreProyecto]/proyecto.html
        echo.
        echo ^¡Comienza preguntando la familia profesional^!
    ) > "%PROMPT_PATH%"
)

:: Leer prompt inicial (usando un archivo temporal para evitar problemas con líneas)
set "TEMP_PROMPT=%TEMP%\opencode_prompt_%RANDOM%.txt"
set "FULL_PROMPT_FILE=%TEMP%\full_prompt_%RANDOM%.txt"

:: Copiar el contenido del prompt inicial al archivo temporal
copy "%PROMPT_PATH%" "%TEMP_PROMPT%" >nul

:: Añadir la información del intérprete al archivo completo
(
    type "%TEMP_PROMPT%"
    echo.
    echo ---
    echo INFORMACION DEL INTERPRETE:
    echo Este script se ejecuta en CMD.exe de Windows.
    echo Los comandos de shell deben usar sintaxis CMD nativa (no PowerShell ni bash).
    echo ---
) > "%FULL_PROMPT_FILE%"

:: Leer el contenido completo del prompt en una variable (limitado a ~8191 caracteres)
set "FULL_PROMPT="
setlocal enabledelayedexpansion
for /f "usebackq delims=" %%i in ("%FULL_PROMPT_FILE%") do (
    if not defined FULL_PROMPT (
        set "FULL_PROMPT=%%i"
    ) else (
        set "FULL_PROMPT=!FULL_PROMPT! %%i"
    )
)

echo.
echo Iniciando %TOOL% con prompt interactivo...
echo.

:: Ejecutar según la herramienta
if "%TOOL%"=="opencode" (
    echo.
    echo ============================================================
    echo   El prompt ya está cargado en OpenCode TUI.
    echo   Presiona ENTER para enviarlo y comenzar la conversación.
    echo ============================================================
    echo.
    opencode --prompt "!FULL_PROMPT!"
) else if "%TOOL%"=="qwen" (
    qwen -i "!FULL_PROMPT!" -y
) else if "%TOOL%"=="gemini" (
    gemini -i "!FULL_PROMPT!" -y
) else if "%TOOL%"=="copilot" (
    copilot -i "!FULL_PROMPT!" --yolo
)

endlocal

:: Limpiar archivos temporales
del "%TEMP_PROMPT%" 2>nul
del "%FULL_PROMPT_FILE%" 2>nul

echo.
echo Proceso finalizado.
pause
exit /b 0