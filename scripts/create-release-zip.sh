#!/bin/bash
# Script para crear el ZIP de release del generador de proyectos intermodulares

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}==================================${NC}"
echo -e "${GREEN}  Creando ZIP para Release${NC}"
echo -e "${GREEN}==================================${NC}"

# Nombre del archivo ZIP
VERSION="1.0.0"
ZIP_NAME="generador-proyecto-intermodular-agentes-v${VERSION}.zip"

# Verificar que estamos en el directorio correcto
if [ ! -f "README.md" ]; then
    echo -e "${RED}Error: No se encuentra README.md. Ejecuta este script desde la raíz del proyecto.${NC}"
    exit 1
fi

# Crear lista de archivos a incluir (excluyendo node_modules, .git, etc.)
echo -e "${YELLOW}Creando archivo ZIP...${NC}"

# Usar zip para crear el archivo
zip -r "$ZIP_NAME" \
    README.md \
    TutorialInstalacion.md \
    TutorialUso.md \
    LICENSE \
    QUICKSTART.md \
    GEMINI.md \
    config.ini \
    projects.js \
    prompt-inicial.txt \
    index.html \
    Iniciar-Asistente.bat \
    Iniciar-Asistente.ps1 \
    Iniciar-Asistente.sh \
    agents/ \
    plantilla/ \
    scripts/ \
    proyectos/ \
    -x "*.git*" \
    -x "node_modules/*" \
    -x "*.zip" \
    -x ".qwen/*"

# Verificar si se creó correctamente
if [ -f "$ZIP_NAME" ]; then
    SIZE=$(du -h "$ZIP_NAME" | cut -f1)
    echo -e "${GREEN}==================================${NC}"
    echo -e "${GREEN}  ¡ZIP creado con éxito!${NC}"
    echo -e "${GREEN}==================================${NC}"
    echo -e "Archivo: ${YELLOW}$ZIP_NAME${NC}"
    echo -e "Tamaño: ${YELLOW}$SIZE${NC}"
    echo -e ""
    echo -e "${YELLOW}Siguientes pasos:${NC}"
    echo -e "1. Sube el ZIP a GitHub Releases"
    echo -e "2. Crea un nuevo release en: https://github.com/sergarb1/generador-proyecto-intermodular-agentes/releases/new"
    echo -e "3. Adjunta este archivo ZIP"
    echo -e "4. Publica el release"
else
    echo -e "${RED}Error: No se pudo crear el archivo ZIP${NC}"
    exit 1
fi
