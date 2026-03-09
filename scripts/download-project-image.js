#!/usr/bin/env node

/**
 * Script para descargar imágenes relacionadas con el proyecto
 * Usage: node download-project-image.js "cloud infrastructure" "./proyectos-ejemplo/images/"
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Unsplash API endpoint (source API for demo images)
const UNSPLASH_SOURCE = 'https://source.unsplash.com';

/**
 * Download image from Unsplash based on keywords
 * @param {string} keywords - Search keywords
 * @param {string} outputPath - Output directory
 * @param {string} filename - Output filename
 */
async function downloadProjectImage(keywords, outputPath, filename = 'project-image.jpg') {
    return new Promise((resolve, reject) => {
        // Ensure output directory exists
        if (!fs.existsSync(outputPath)) {
            fs.mkdirSync(outputPath, { recursive: true });
        }

        const fullOutputPath = path.join(outputPath, filename);
        
        // Format keywords for URL
        const formattedKeywords = encodeURIComponent(keywords.replace(/,/g, ',').replace(/\s+/g, ','));
        
        // Unsplash Source URL (random image based on keywords)
        const imageUrl = `${UNSPLASH_SOURCE}/1200x600/?${formattedKeywords}`;
        
        console.log(` Buscando imagen para: ${keywords}`);
        console.log(`📥 Descargando desde Unsplash...`);
        
        https.get(imageUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        }, (response) => {
            if (response.statusCode === 302 || response.statusCode === 301) {
                // Follow redirect
                const redirectUrl = response.headers.location;
                console.log(`🔄 Redirigiendo a: ${redirectUrl}`);
                
                https.get(redirectUrl, (redirectResponse) => {
                    const fileStream = fs.createWriteStream(fullOutputPath);
                    redirectResponse.pipe(fileStream);
                    
                    fileStream.on('finish', () => {
                        fileStream.close();
                        console.log(`✅ Imagen guardada en: ${fullOutputPath}`);
                        resolve(fullOutputPath);
                    });
                }).on('error', (err) => {
                    fs.unlink(fullOutputPath, () => {});
                    console.error('❌ Error descargando imagen:', err.message);
                    reject(err);
                });
            } else {
                const fileStream = fs.createWriteStream(fullOutputPath);
                response.pipe(fileStream);
                
                fileStream.on('finish', () => {
                    fileStream.close();
                    console.log(`✅ Imagen guardada en: ${fullOutputPath}`);
                    resolve(fullOutputPath);
                });
            }
        }).on('error', (err) => {
            console.error('❌ Error descargando imagen:', err.message);
            
            // Fallback: Create a placeholder image
            console.log('⚠️  Creando imagen de marcador de posición...');
            createPlaceholderImage(fullOutputPath, keywords)
                .then(resolve)
                .catch(reject);
        });
    });
}

/**
 * Create a placeholder SVG image
 */
function createPlaceholderImage(outputPath, title) {
    return new Promise((resolve, reject) => {
        const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600">
            <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#0066CC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#004499;stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect width="1200" height="600" fill="url(#grad)"/>
            <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="48" fill="white" 
                  text-anchor="middle" dominant-baseline="middle" font-weight="bold">
                ${escapeXml(title)}
            </text>
            <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="24" fill="#CCCCCC" 
                  text-anchor="middle" dominant-baseline="middle">
                Imagen del Proyecto
            </text>
        </svg>
        `;
        
        fs.writeFile(outputPath.replace('.jpg', '.svg').replace('.jpeg', '.svg'), svg, (err) => {
            if (err) {
                reject(err);
            } else {
                console.log(`✅ Placeholder SVG creado`);
                resolve(outputPath.replace('.jpg', '.svg').replace('.jpeg', '.svg'));
            }
        });
    });
}

function escapeXml(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

// CLI execution
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length < 2) {
        console.log('Usage: node download-project-image.js "<keywords>" "<output-directory>" [filename]');
        console.log('Example: node download-project-image.js "cloud infrastructure aws" "./proyectos/" "my-project.jpg"');
        process.exit(1);
    }
    
    const keywords = args[0];
    const outputPath = args[1];
    const filename = args[2] || 'project-image.jpg';
    
    downloadProjectImage(keywords, outputPath, filename)
        .then((path) => {
            console.log(`\n✅ Proceso completado. Imagen disponible en: ${path}`);
            process.exit(0);
        })
        .catch((err) => {
            console.error(`\n❌ Error: ${err.message}`);
            process.exit(1);
        });
}

module.exports = { downloadProjectImage };
