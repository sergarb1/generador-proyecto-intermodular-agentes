@echo off
cd /d "%~dp0"
where pwsh >nul 2>&1
if %errorlevel% equ 0 (
    pwsh -ExecutionPolicy Bypass -File "%~dp0Iniciar-Asistente.ps1"
) else (
    powershell -ExecutionPolicy Bypass -File "%~dp0Iniciar-Asistente.ps1"
)
pause