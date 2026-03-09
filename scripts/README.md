# Scripts del Generador de Proyectos

## 📥 download-project-image.js

Script para descargar imágenes relacionadas con la temática del proyecto desde Unsplash.

### Uso

```bash
node scripts/download-project-image.js "<keywords>" "<directorio-salida>" [nombre-archivo]
```

### Ejemplos

**Windows:**
```cmd
node scripts/download-project-image.js "cloud infrastructure aws" "proyectos-ejemplo\images\" "mi-proyecto.jpg"
```

**Linux/macOS:**
```bash
node scripts/download-project-image.js "cloud infrastructure aws" "proyectos-ejemplo/images/" "mi-proyecto.jpg"
```

### Parámetros

| Parámetro | Requerido | Descripción |
|-----------|-----------|-------------|
| `keywords` | ✅ | Palabras clave para buscar la imagen (ej: "cloud aws server") |
| `directorio-salida` | ✅ | Directorio donde se guardará la imagen |
| `nombre-archivo` | ❌ | Nombre del archivo (por defecto: `project-image.jpg`) |

### Comportamiento

1. **Intenta descargar** desde Unsplash Source API
2. **Si falla**, crea una imagen placeholder SVG con el título del proyecto
3. **Guarda** la imagen en el directorio especificado
4. **Muestra** mensajes de progreso en consola

### Ejemplos de Keywords por Temática

| Temática | Keywords sugeridas |
|----------|-------------------|
| Cloud/AWS | "cloud computing aws server" |
| Redes | "network server datacenter" |
| Seguridad | "cybersecurity lock firewall" |
| Bases de Datos | "database server storage" |
| Desarrollo Web | "web development code computer" |
| Móviles | "mobile app smartphone development" |
| Virtualización | "virtual machine docker container" |

## 🔧 Requisitos

- Node.js instalado
- Conexión a internet (para descargar desde Unsplash)

## 📁 Estructura de Salida

```
proyectos-ejemplo/
├── images/
│   └── mi-proyecto.jpg    ← Imagen descargada
├── PRIMER-ASIR-CLOUD.html ← Proyecto HTML
└── SEGUNDO-DAM-APP.html   ← Proyecto HTML
```

##  Imágenes de Unsplash

Las imágenes se descargan desde [Unsplash Source](https://source.unsplash.com/), que proporciona imágenes aleatorias basadas en keywords.

**Licencia:** Todas las imágenes de Unsplash son libres de derechos bajo la [Unsplash License](https://unsplash.com/license).

## 🛠️ Solución de Problemas

### Error: "Cannot find module 'https'"
- Asegúrate de usar Node.js (no navegador)
- El script usa módulos nativos de Node.js

### Error: "EACCES: permission denied"
- Verifica permisos de escritura en el directorio de salida
- En Linux/macOS: `chmod 755 proyectos-ejemplo/images`

### La imagen no se descarga
- Verifica conexión a internet
- Unsplash Source puede estar caído temporalmente
- El script creará automáticamente un placeholder SVG

---

**Versión:** 1.0  
**Última actualización:** Marzo 2026
