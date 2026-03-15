#!/bin/bash
# Generador de Proyectos Intermodulares
# IES Serra Perenxisa
# Versión Linux/bash

# Configurar UTF-8
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

# Limpiar pantalla
clear

echo ""
echo "========================================="
echo -e "\e[36m   GENERADOR DE PROYECTOS INTERMODULARES\e[0m"
echo -e "\e[36m   IES Serra Perenxisa\e[0m"
echo "========================================="
echo ""

# Ruta del script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_PATH="$SCRIPT_DIR/config.ini"
PROMPT_PATH="$SCRIPT_DIR/prompt-inicial.txt"

echo -e "\e[90m[DEBUG] Script directory: $SCRIPT_DIR\e[0m"
echo -e "\e[90m[DEBUG] Config path: $CONFIG_PATH\e[0m"

# Función para leer la configuración
get_config_tool() {
    echo -e "\e[90m[DEBUG] Leyendo configuración desde $CONFIG_PATH\e[0m"
    if [ -f "$CONFIG_PATH" ]; then
        local config=$(cat "$CONFIG_PATH")
        echo -e "\e[90m[DEBUG] Contenido config.ini: $config\e[0m"
        if [[ $config =~ tool[[:space:]]*=[[:space:]]*([a-zA-Z]+) ]]; then
            local tool="${BASH_REMATCH[1]}"
            echo -e "\e[90m[DEBUG] Tool encontrada: $tool\e[0m"            echo "${tool,,}"  # Convertir a minúsculas
            return
        fi
        echo -e "\e[90m[DEBUG] No se encontró 'tool=' en el config\e[0m"
    else
        echo -e "\e[90m[DEBUG] El archivo config.ini no existe\e[0m"
    fi
    echo ""
}

# Función para guardar la configuración
save_config_tool() {
    local tool=$1
    echo -e "\e[90m[DEBUG] Guardando tool='$tool' en $CONFIG_PATH\e[0m"
    echo "tool=$tool" > "$CONFIG_PATH"
    echo -e "\e[90m[DEBUG] Config guardada\e[0m"
}

# Detectar si estamos dentro de Qwen, Gemini o Copilot
is_qwen=false
is_gemini=false
is_copilot=false

if [ -n "$QWEN_CODE" ] || [ -n "$QWEN_CLI" ]; then
    is_qwen=true
fi

if [ -n "$GEMINI_CLI" ]; then
    is_gemini=true
fi

if [ -n "$GITHUB_COPILOT_CLI" ]; then
    is_copilot=true
fi

echo -e "\e[90m[DEBUG] isQwen=$is_qwen, isGemini=$is_gemini, isCopilot=$is_copilot\e[0m"

# Detectar herramientas disponibles
has_qwen=false
has_gemini=false
has_copilot=false

if command -v qwen &> /dev/null; then
    has_qwen=true
fi

if command -v gemini &> /dev/null; then
    has_gemini=true
fi

if command -v gh &> /dev/null; then
    has_copilot=true
fi

echo -e "\e[90m[DEBUG] hasQwen=$has_qwen, hasGemini=$has_gemini, hasCopilot=$has_copilot\e[0m"

echo ""
echo -e "\e[33mDetectando entorno...\e[0m"

# Si estamos dentro de un entorno, usar ese
if [ "$is_qwen" = true ]; then
    echo -e "\e[32mEjecutando dentro de Qwen Code\e[0m"
    tool="qwen"
elif [ "$is_gemini" = true ]; then
    echo -e "\e[32mEjecutando dentro de Gemini CLI\e[0m"
    tool="gemini"
elif [ "$is_copilot" = true ]; then
    echo -e "\e[32mEjecutando dentro de GitHub Copilot CLI\e[0m"
    tool="copilot"
else
    # No estamos dentro de ningún entorno, verificar herramientas instaladas
    echo -e "\e[90m[DEBUG] No estamos dentro de un entorno CLI, verificando herramientas...\e[0m"

    last_tool=$(get_config_tool)
    echo -e "\e[90m[DEBUG] Last tool del config: $last_tool\e[0m"

    if [ "$last_tool" = "qwen" ] && [ "$has_qwen" = true ]; then
        echo -e "\e[32mUsando Qwen Code (última selección)\e[0m"
        tool="qwen"
    elif [ "$last_tool" = "gemini" ] && [ "$has_gemini" = true ]; then
        echo -e "\e[32mUsando Gemini CLI (última selección)\e[0m"
        tool="gemini"
    elif [ "$last_tool" = "copilot" ] && [ "$has_copilot" = true ]; then
        echo -e "\e[32mUsando GitHub Copilot CLI (última selección)\e[0m"
        tool="copilot"
    elif [ "$has_qwen" = true ] && [ "$has_gemini" = true ] && [ "$has_copilot" = true ]; then
        # Los tres disponibles, preguntar al usuario
        echo -e "\e[33mHerramientas detectadas: Qwen Code, Gemini CLI y GitHub Copilot CLI\e[0m"
        echo ""
        read -p "¿Qué herramienta quieres usar? (qwen/gemini/copilot) [qwen]: " choice
        if [ "$choice" = "gemini" ]; then
            tool="gemini"
        elif [ "$choice" = "copilot" ]; then
            tool="copilot"
        else
            tool="qwen"
        fi
    elif [ "$has_qwen" = true ] && [ "$has_gemini" = true ]; then
        # Dos disponibles (Qwen y Gemini), preguntar al usuario
        echo -e "\e[33mHerramientas detectadas: Qwen Code y Gemini CLI\e[0m"
        echo ""
        read -p "¿Qué herramienta quieres usar? (qwen/gemini) [qwen]: " choice
        if [ "$choice" = "gemini" ]; then
            tool="gemini"
        else
            tool="qwen"
        fi
    elif [ "$has_qwen" = true ] && [ "$has_copilot" = true ]; then
        # Dos disponibles (Qwen y Copilot), preguntar al usuario
        echo -e "\e[33mHerramientas detectadas: Qwen Code y GitHub Copilot CLI\e[0m"
        echo ""
        read -p "¿Qué herramienta quieres usar? (qwen/copilot) [qwen]: " choice
        if [ "$choice" = "copilot" ]; then
            tool="copilot"
        else
            tool="qwen"
        fi
    elif [ "$has_gemini" = true ] && [ "$has_copilot" = true ]; then
        # Dos disponibles (Gemini y Copilot), preguntar al usuario
        echo -e "\e[33mHerramientas detectadas: Gemini CLI y GitHub Copilot CLI\e[0m"
        echo ""
        read -p "¿Qué herramienta quieres usar? (gemini/copilot) [gemini]: " choice
        if [ "$choice" = "copilot" ]; then
            tool="copilot"
        else
            tool="gemini"
        fi
    elif [ "$has_qwen" = true ]; then
        echo -e "\e[32mQwen Code detectado\e[0m"
        tool="qwen"
    elif [ "$has_gemini" = true ]; then
        echo -e "\e[32mGemini CLI detectado\e[0m"
        tool="gemini"
    elif [ "$has_copilot" = true ]; then
        echo -e "\e[32mGitHub Copilot CLI detectado\e[0m"
        tool="copilot"
    else
        echo -e "\e[31mERROR: No se encuentra Qwen, Gemini o Copilot\e[0m"
        echo ""
        echo -e "\e[33mInstala uno de los siguientes:\e[0m"
        echo -e "  \e[90m- Qwen Code:              npm install -g @qwen-code/qwen-code\e[0m"
        echo -e "  \e[90m- Gemini CLI:             npm install -g @google/gemini-cli\e[0m"
        echo -e "  \e[90m- GitHub Copilot CLI:     npm install -g @github/gh-cli\e[0m"
        echo ""
        read -p "Presiona Enter para salir"
        exit 1
    fi
fi

# Guardar la selección en config.ini
save_config_tool "$tool"

# Leer el prompt inicial desde el archivo prompt-inicial.txt
# Esto permite que cualquier modificacion en el archivo se refleje automaticamente
echo -e "\e[90m[DEBUG] Leyendo prompt desde $PROMPT_PATH\e[0m"
if [ -f "$PROMPT_PATH" ]; then
    initial_prompt=$(cat "$PROMPT_PATH")
    echo -e "\e[90m[DEBUG] Prompt cargado correctamente desde prompt-inicial.txt\e[0m"
else
    echo -e "\e[33m[WARNING] No se encontro prompt-inicial.txt, usando prompt por defecto\e[0m"
    initial_prompt="Hola! Soy el asistente de generacion de proyectos intermodulares del IES Serra Perenxisa. Por favor, ayudame a generar un proyecto intermodular."
fi

echo ""
echo -e "\e[36mIniciando $tool con prompt interactivo...\e[0m"
echo ""

# Información del intérprete
interpreter_info="
---
ℹ️ INFORMACIÓN DEL INTÉRPRETE:
Este script se está ejecutando en bash ($(bash --version | head -n1)).
Los comandos de shell deben usar sintaxis bash (no PowerShell).
---"

# Combinar el prompt inicial con la información del intérprete
full_prompt="$initial_prompt $interpreter_info"

# Iniciar la herramienta seleccionada en modo interactivo con el prompt y YOLO
if [ "$tool" = "qwen" ]; then
    echo -e "\e[90m[DEBUG] Lanzando 'qwen -i ... -y'...\e[0m"
    qwen -i "$full_prompt" -y
elif [ "$tool" = "gemini" ]; then
    echo -e "\e[90m[DEBUG] Lanzando 'gemini -i ... -y'...\e[0m"
    gemini -i "$full_prompt" -y
elif [ "$tool" = "copilot" ]; then
    echo -e "\e[90m[DEBUG] Lanzando 'gh copilot --input'...\e[0m"
    gh copilot --input "$full_prompt"
fi

exit
