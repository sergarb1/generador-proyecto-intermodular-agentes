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

REM Ruta del script
set "SCRIPT_DIR=%~dp0"
set "CONFIG_PATH=%SCRIPT_DIR%config.ini"
set "PROMPT_PATH=%SCRIPT_DIR%prompt-inicial.txt"

REM Detectar entornos
set "IS_QWEN="
set "IS_GEMINI="
set "IS_COPILOT="
set "IS_OPENCODE="

if defined QWEN_CODE set "IS_QWEN=1"
if defined QWEN_CLI set "IS_QWEN=1"
if defined GEMINI_CLI set "IS_GEMINI=1"
if defined GITHUB_COPILOT_CLI set "IS_COPILOT=1"
if defined OPENCODE set "IS_OPENCODE=1"

REM Detectar herramientas disponibles
set "HAS_QWEN="
set "HAS_GEMINI="
set "HAS_COPILOT="

where qwen >nul 2>&1 && set "HAS_QWEN=1"
where gemini >nul 2>&1 && set "HAS_GEMINI=1"
where gh >nul 2>&1 && set "HAS_COPILOT=1"
where opencode >nul 2>&1 && set "HAS_OPENCODE=1"

echo.
echo Detectando entorno...

REM Si estamos dentro de un entorno, usar ese
if defined IS_QWEN (
    echo Ejecutando dentro de Qwen Code
    set "TOOL=qwen"
    goto :SELECTED
)

if defined IS_GEMINI (
    echo Ejecutando dentro de Gemini CLI
    set "TOOL=gemini"
    goto :SELECTED
)

if defined IS_COPILOT (
    echo Ejecutando dentro de GitHub Copilot CLI
    set "TOOL=copilot"
    goto :SELECTED
)

if defined IS_OPENCODE (
    echo Ejecutando dentro de Opencode CLI
    set "TOOL=opencode"
    goto :SELECTED
)

REM No estamos dentro de ningun entorno, verificar herramientas
set "TOOL_FROM_CONFIG="
if exist "%CONFIG_PATH%" (
    for /f "tokens=2 delims==" %%a in ('findstr /i "^tool=" "%CONFIG_PATH%"') do (
        set "TOOL_FROM_CONFIG=%%a"
    )
)

if "%TOOL_FROM_CONFIG%"=="qwen" (
    if defined HAS_QWEN (
        echo Usando Qwen Code (ultima seleccion)
        set "TOOL=qwen"
        goto :SELECTED
    )
)

if "%TOOL_FROM_CONFIG%"=="gemini" (
    if defined HAS_GEMINI (
        echo Usando Gemini CLI (ultima seleccion)
        set "TOOL=gemini"
        goto :SELECTED
    )
)

if "%TOOL_FROM_CONFIG%"=="copilot" (
    if defined HAS_COPILOT (
        echo Usando GitHub Copilot CLI (ultima seleccion)
        set "TOOL=copilot"
        goto :SELECTED
    )
)

if "%TOOL_FROM_CONFIG%"=="opencode" (
    if defined HAS_OPENCODE (
        echo Usando Opencode CLI (ultima seleccion)
        set "TOOL=opencode"
        goto :SELECTED
    )
)

REM Construir lista de herramientas disponibles
set "TOOL_LIST="
if defined HAS_OPENCODE set "TOOL_LIST=opencode %TOOL_LIST%"
if defined HAS_QWEN set "TOOL_LIST=%TOOL_LIST% qwen"
if defined HAS_GEMINI set "TOOL_LIST=%TOOL_LIST% gemini"
if defined HAS_COPILOT set "TOOL_LIST=%TOOL_LIST% copilot"

REM Contar herramientas disponibles
set "TOOL_COUNT=0"
for %%t in (%TOOL_LIST%) do set /a TOOL_COUNT+=1

if %TOOL_COUNT% EQU 0 goto :NO_TOOLS_FOUND

if %TOOL_COUNT% EQU 1 (
    for %%t in (%TOOL_LIST%) do set "TOOL=%%t"
    echo %TOOL% detectado
    goto :SELECTED
)

echo Herramientas detectadas:%TOOL_LIST%
echo.
set "USER_CHOICE="
set /p "USER_CHOICE=Que herramienta quieres usar? (opencode/qwen/gemini/copilot) [opencode]: "
if not defined USER_CHOICE set "USER_CHOICE=opencode"
set "TOOL_VALID="
for %%t in (%TOOL_LIST%) do (
    if /i "%%t"=="%USER_CHOICE%" set "TOOL_VALID=1" & set "TOOL=%%t"
)
if defined TOOL_VALID goto :SELECTED
echo Opcion no valida, usando opencode
set "TOOL=opencode"
goto :SELECTED

:NO_TOOLS_FOUND
REM Ninguna herramienta encontrada
echo.
echo ERROR: No se encuentra ninguna herramienta CLI
echo.
echo Instala uno de los siguientes:
echo   - Opencode CLI:           npm install -g opencode
echo   - Qwen Code:              npm install -g @qwen-code/qwen-code
echo   - Gemini CLI:             npm install -g @google/gemini-cli
echo   - GitHub Copilot CLI:     npm install -g @github/gh-cli
echo.
pause
exit /b 1

:SELECTED
REM Guardar la seleccion
echo tool=%TOOL% > "%CONFIG_PATH%"

REM Leer el prompt inicial
setlocal enabledelayedexpansion
set "INITIAL_PROMPT="
if exist "%PROMPT_PATH%" (
    for /f "delims=" %%a in ('type "%PROMPT_PATH%"') do (
        if defined INITIAL_PROMPT (
            set "INITIAL_PROMPT=!INITIAL_PROMPT! %%a"
        ) else (
            set "INITIAL_PROMPT=%%a"
        )
    )
)

if not defined INITIAL_PROMPT (
    set "INITIAL_PROMPT=Hola! Soy el asistente de generacion de proyectos intermodulares del IES Serra Perenxisa. Por favor, ayudame a generar un proyecto intermodular."
)

REM Informacion del interprete
set "INTERPRETER_INFO=^

---^
INFORMACION DEL INTERPRETE:^
Este script se esta ejecutando en CMD.exe.^
Los comandos de shell deben usar sintaxis PowerShell (no bash).^
---^
^"

REM Combinar prompts
set "FULL_PROMPT=!INITIAL_PROMPT!!INTERPRETER_INFO!"

echo.
echo Iniciando %TOOL% con prompt interactivo...
echo.

REM Iniciar la herramienta seleccionada
if "%TOOL%"=="opencode" (
    opencode run "!FULL_PROMPT!"
) else if "%TOOL%"=="qwen" (
    qwen -i "!FULL_PROMPT!" -y
) else if "%TOOL%"=="gemini" (
    gemini -i "!FULL_PROMPT!" -y
) else if "%TOOL%"=="copilot" (
    copilot -i "!FULL_PROMPT!" --yolo
)

endlocal
exit /b