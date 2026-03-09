# Script para descargar imágenes de Pexels
# Uso: .\descargar-pexels.ps1 -Url "https://..." -Output "ruta\imagen.jpg"

param(
    [string]$Url = "https://images.pexels.com/photos/3845712/pexels-photo-3845712.jpeg",
    [string]$Output = "C:\Users\serga\Dropbox\generador-proyecto-intermodular-agentes\proyectos\01-Informatica\DAM\Segundo\SEGUNDO-DAM-APP-CITAS-MEDICAS\images\hero.jpg"
)

Write-Host "Descargando imagen desde Pexels..." -ForegroundColor Cyan
Write-Host "URL: $Url" -ForegroundColor Gray
Write-Host "Destino: $Output" -ForegroundColor Gray

try {
    # Crear directorio si no existe
    $dir = Split-Path $Output -Parent
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Force -Path $dir | Out-Null
    }

    # Descargar con User-Agent para evitar bloqueos
    $client = New-Object System.Net.WebClient
    $client.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")
    $client.DownloadFile($Url, $Output)
    
    Write-Host "✓ Imagen descargada correctamente" -ForegroundColor Green
    Write-Host "Tamaño: $((Get-Item $Output).Length / 1KB) KB" -ForegroundColor Gray
}
catch {
    Write-Host "✗ Error al descargar: $_" -ForegroundColor Red
    exit 1
}
