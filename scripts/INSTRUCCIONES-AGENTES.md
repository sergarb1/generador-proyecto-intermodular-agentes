# 📋 Instrucciones para Generar Proyectos Intermodulares

## ⚠️ IMPORTANTE: Reglas de Generación de Código JavaScript

Cuando generes contenido para la plantilla `plantilla/index.html`, DEBES seguir estas reglas estrictamente:

### 1. NUNCA uses Template Literals con backticks (`` ` ``)

❌ **INCORRECTO** (causa errores de sintaxis):
```javascript
const header = `<div>${this.projectTitle}</div>`;
const footer = `<div>${this.cycle}</div>`;
a.download = `${this.projectTitle}.docx`;
```

✅ **CORRECTO** (usa concatenación de cadenas):
```javascript
const header = '<div>' + this.projectTitle + '</div>';
const footer = '<div>' + this.cycle + '</div>';
a.download = this.projectTitle + '.docx';
```

### 2. Estructura del HTML a Generar

El archivo HTML resultante debe ser **autocontenido** y funcionar abriéndolo directamente en el navegador.

#### Scripts requeridos en el `<head>`:
```html
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
```

**NOTA:** No incluir `html-to-docx` porque da problemas de compatibilidad.

### 3. Funciones de Exportación

#### exportPDF() - Funciona correctamente
Usa `html2pdf.js` que está bien soportado.

#### exportDOCX() - Usar alternativa simple
NO usar la librería `html-to-docx`. En su lugar:
```javascript
async exportDOCX() {
    alert('Para exportar a Word, usa la impresión del navegador (Ctrl+P).');
    window.print();
}
```

### 4. Contenido de las Secciones

El contenido de cada sección se almacena en `sectionsContent` como **cadenas HTML**.

✅ **CORRECTO**:
```javascript
sectionsContent: {
    introduccion: `<div class="space-y-6">
        <h3>1.1. Descripción del Proyecto</h3>
        <p>Texto descriptivo...</p>
        <div class="callout callout-info">
            <div class="callout-title">Título</div>
            <p>Contenido...</p>
        </div>
    </div>`
}
```

**IMPORTANTE:** El contenido HTML dentro de las secciones SÍ puede usar comillas dobles normales para atributos HTML.

### 5. Estructura del Proyecto a Generar

Para **Segundo de ASIR** (96 horas), el proyecto debe incluir:

#### Secciones obligatorias:
1. **Resumen** (trilingüe: ES/EN/VA)
2. **Introducción** (descripción completa del contexto y problemática)
3. **Estado del Arte** (con sugerencias para el alumno)
4. **Estudio de Viabilidad** (DAFO/CAME, planificación temporal)
5. **Análisis de Requisitos** (RF y RNF)
6. **Diseño** (arquitectura, diagramas, seguridad)
7. **Implementación** (tecnologías, configuración, pruebas)
8. **Administración** (políticas, mantenimiento, DRP)
9. **Herramientas de Apoyo** (Git, CI/CD, monitorización)
10. **Conclusiones** (reflexión personal)
11. **Bibliografía** (mínimo 10 fuentes comentadas)
12. **Anexos** (material complementario)

### 6. Estilo y Formato

- Usar **lenguaje inclusivo** (profesorado, alumnado, tutor/a)
- **NO mencionar** normativa académica (RD, BOE, Resultados de Aprendizaje)
- Usar **terminología profesional** (SLA, RTO, RPO, ROI, TCO, MTTR)
- Las secciones deben ser **guiones con sugerencias**, no contenido completo
- Excepción: La **descripción del proyecto** SÍ se genera completa

### 7. Callouts/Admoniciones

Usar la estructura Nextra para cajas de información:

```html
<div class="callout callout-info">
    <div class="callout-title">
        <svg>...</svg>
        Título
    </div>
    <p>Contenido...</p>
</div>
```

Tipos: `callout-info`, `callout-warning`, `callout-danger`, `callout-success`

### 8. Tablas

Usar Tailwind CSS:

```html
<table class="w-full">
    <thead>
        <tr>
            <th class="border p-2">Columna 1</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border p-2">Dato</td>
        </tr>
    </tbody>
</table>
```

### 9. Listas

```html
<ul class="list-disc pl-5 space-y-2">
    <li>Elemento 1</li>
    <li>Elemento 2</li>
</ul>
```

### 10. Imágenes

```html
<img src="./images/nombre.png" alt="Descripción" class="max-w-2xl mx-auto rounded-lg">
```

Las imágenes deben guardarse en la carpeta `images/` dentro del proyecto.

---

## ✅ Checklist de Verificación

Antes de finalizar la generación, verifica:

- [ ] No hay template literals con backticks en el JavaScript
- [ ] Todas las comillas en strings JS están escapadas correctamente
- [ ] Los scripts CDN son los correctos (Vue prod, html2pdf)
- [ ] La función exportDOCX no usa html-to-docx
- [ ] El HTML es válido y bien formado
- [ ] Las secciones tienen contenido con sugerencias para el alumno
- [ ] El lenguaje es inclusivo
- [ ] No se menciona normativa académica

---

## 📁 Estructura de Directorio

```
proyectos/
├── 01-Informatica/ (o 02-Administracion)
│   └── [CICLO]/ (ASIR, DAM, DAW, SMR, GM-ADM, etc.)
│       └── [CURSO]/ (Primero o Segundo)
│           └── [NOMBRE_PROYECTO]/
│               ├── proyecto.html
│               ├── logo.png
│               └── images/ (si hay imágenes)
```

---

## 🚀 Ejemplo de Nombre de Proyecto

- `SEGUNDO-ASIR-TELEMEDICINA-CLOUD`
- `PRIMER-DAM-APP-WEB-EMPRESA`
- `SEGUNDO-GS-ADMF-PLAN-EMPRESA`

---

**Versión:** 1.1  
**Actualizado:** 2024-03-09  
**Motivo:** Corregir errores de template literals y dependencias problemáticas
