# 📝 Migración a Formato Sin CORS (file:// compatible)

## Problema Resuelto

El proyecto original usaba **ES modules dinámicos** con `import()`:

```javascript
const data = await import('./data/metadata.js');
```

Esto causaba errores **CORS** al abrir el archivo directamente con `file://`:

```
Access to script from origin 'null' has been blocked by CORS policy
Failed to fetch dynamically imported module
```

## Solución Implementada

### 1. Archivos de Datos Convertidos

Todos los archivos en `data/` ahora exportan datos a **variables globales `window`**:

**Antes (metadata.js):**
```javascript
export const metadata = { ... };
```

**Ahora (metadata.js):**
```javascript
window.metadata = { ... };
```

**Antes (resumen.js):**
```javascript
export const content = `...`;
```

**Ahora (resumen.js):**
```javascript
window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["resumen"] = `...`;
```

### 2. proyecto.html Modificado

**Antes:**
```html
<script type="module">
    async function loadProjectData() {
        const metaModule = await import('./data/metadata.js');
        // ...
    }
</script>
```

**Ahora:**
```html
<!-- Data Scripts - Carga de datos sin CORS -->
<script src="./data/metadata.js"></script>
<script src="./data/resumen.js"></script>
<script src="./data/introduccion.js"></script>
<!-- ... más scripts ... -->

<script>
    createApp({
        data() {
            return {
                projectTitle: window.metadata?.projectTitle || 'Cargando...',
                sectionsContent: window.sectionsContent || {}
            }
        },
        mounted() {
            // Ya no necesita cargar datos, están en window
        }
    }).mount('#app');
</script>
```

### 3. Eliminado Código Asíncrono

- ❌ Eliminado `loadProjectData()`
- ❌ Eliminado `async mounted()`
- ❌ Eliminado `await import()`
- ✅ Los datos se cargan síncronamente vía `<script src="">`

## Archivos Modificados

### En `data/`:

| Archivo | Cambio |
|---------|--------|
| `metadata.js` | `export const` → `window.metadata` |
| `resumen.js` | `export const` → `window.sectionsContent["resumen"]` |
| `introduccion.js` | `export const` → `window.sectionsContent["introduccion"]` |
| `estado-arte.js` | `export const` → `window.sectionsContent["estado-arte"]` |
| `viabilidad.js` | `export const` → `window.sectionsContent["viabilidad"]` |
| `requisitos.js` | `export const` → `window.sectionsContent["requisitos"]` |
| `diseno.js` | `export const` → `window.sectionsContent["diseno"]` |
| `implementacion.js` | `export const` → `window.sectionsContent["implementacion"]` |
| `administracion.js` | `export const` → `window.sectionsContent["administracion"]` |
| `herramientas.js` | ✨ Nuevo archivo |
| `conclusiones.js` | ✨ Nuevo archivo |
| `bibliografia.js` | ✨ Nuevo archivo |
| `anexos.js` | ✨ Nuevo archivo |

### En `proyecto.html`:

- Añadidos 13 tags `<script src="./data/...">` antes del script principal
- Eliminado `type="module"` del script principal
- Simplificada la inicialización de datos en `data()`
- Eliminado `async mounted()` y `await loadProjectData()`

## Cómo Usar

### ✅ Funciona:

```bash
# Abrir directamente el archivo HTML
file:///C:/Users/.../proyecto.html

# Doble clic en el explorador de archivos
proyecto.html

# O con servidor local (opcional)
python -m http.server 8000
```

### ❌ Ya no es necesario:

```bash
# Ya no hace falta servidor local para evitar CORS
python -m http.server 8000
```

## Ventajas

1. **Offline total** - Funciona sin conexión a Internet
2. **Sin servidor** - Doble clic y listo
3. **Más simple** - Sin async/await ni promesas
4. **Más rápido** - Carga síncrona inmediata
5. **Compatible** - Funciona en todos los navegadores

## Consideraciones

- El orden de los scripts **importa** (metadata primero)
- Todas las variables están en el namespace global `window`
- No hay tree-shaking ni code-splitting
- El código es visible en DevTools (como antes)

## Testing

Para verificar que funciona:

1. Cierra cualquier servidor local
2. Abre `proyecto.html` directamente en el navegador (file://)
3. Verifica que:
   - ✅ El título del proyecto se carga
   - ✅ El nombre del estudiante aparece
   - ✅ Todas las secciones tienen contenido
   - ✅ La imagen se muestra
   - ✅ La exportación a PDF funciona

---

**Fecha:** 2026-03-09  
**Versión:** 2.0 (Sin CORS)  
**Estado:** ✅ Completado y Funcional
