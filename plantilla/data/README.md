# 📚 Guía de Datos "Premium Pro"

## 🎯 Filosofía: "Enseña a Pescar"

Esta carpeta contiene los cimientos pedagógicos de cada proyecto. Es vital entender la diferencia entre las secciones:

### 1. La Introducción (Contenido Real)
La **Introducción** (`introduccion.js`) DEBE ser detallada y realista. Proporciona el escenario de crisis que el alumno debe resolver. Incluye:
- Contexto empresarial (MediConnect o similar).
- Problemática cuantificada (pérdidas de datos, caídas de red, multas legales).
- Propuesta general y Objetivos SMART.

### 2. El Resto de Secciones (Guías Didácticas)
Todas las demás secciones (`diseno.js`, `implementacion.js`, etc.) actúan como **cuadernos de trabajo**. 
- ✅ **SÍ:** Poner preguntas guía, tablas vacías, iconitos visuales y consejos técnicos.
- ❌ **NO:** Dar la solución técnica final ni configurar los servicios por el alumno.

## 🛠️ Reglas de Formato JS (Offline Ready)

Para que el proyecto funcione sin servidor web (`file://`), los archivos JS deben:
1.  **Evitar `import` / `export`**: No usar módulos ES.
2.  **Asignación Global**: Asignar el contenido a `window.sectionsContent["nombre_seccion"]`.
3.  **Template Literals**: El contenido HTML debe ir dentro de backticks (`` ` ``).

## 🎨 Estilo Visual Requerido
- Usa `callout-info`, `callout-warning`, `callout-success` y `callout-error`.
- Usa numeración jerárquica `X.Y` para todos los subpuntos.
- Usa cuadrículas (`grid`) para comparativas.

---
**Actualizado:** Marzo 2026  
**Estándar:** Premium Pro v3.0
