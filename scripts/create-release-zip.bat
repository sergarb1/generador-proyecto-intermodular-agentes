@echo off
REM Script para crear el ZIP de release del generador de proyectos intermodular

echo ==================================
echo   Creando ZIP para Release
echo ==================================

REM Nombre del archivo ZIP
set VERSION=1.0.0
set ZIP_NAME=generador-proyecto-intermodular-agentes-v%VERSION%.zip

REM Verificar que zip esté instalado
where zip >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Error: No se encuentra el comando 'zip'.
    echo Instala zip o usa 7-Zip para crear el archivo comprimido.
    pause
    exit /b 1
)

REM Crear archivo ZIP
echo Creando archivo ZIP...

zip -r %ZIP_NAME% ^
    README.md ^
    TutorialInstalacion.md ^
    TutorialUso.md ^
    LICENSE ^
    QUICKSTART.md ^
    GEMINI.md ^
    config.ini ^
    projects.js ^
    prompt-inicial.txt ^
    index.html ^
    Iniciar-Asistente.bat ^
    Iniciar-Asistente.ps1 ^
    Iniciar-Asistente.sh ^
    agents/ ^
    plantilla/ ^
    scripts/ ^
    proyectos/ ^
    -x *.git* ^
    -x node_modules/* ^
    -x *.zip ^
    -x .qwen/*

REM Verificar si se creó correctamente
if exist %ZIP_NAME% (
    echo ==================================
    echo   ZIP creado con exito!
    echo ==================================
    echo Archivo: %ZIP_NAME%
    echo.
    echo Siguientes pasos:
    echo 1. Sube el ZIP a GitHub Releases
    echo 2. Crea un nuevo release en: https://github.com/sergarb1/generador-proyecto-intermodular-agentes/releases/new
    echo 3. Adjunta este archivo ZIP
    echo 4. Publica el release
) else (
    echo Error: No se pudo crear el archivo ZIP
    exit /b 1
)

pause
