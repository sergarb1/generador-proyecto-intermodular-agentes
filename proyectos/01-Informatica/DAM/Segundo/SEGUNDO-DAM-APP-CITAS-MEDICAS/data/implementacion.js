window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.implementacion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>💻</span> Objetivo de esta Sección
    </div>
    <p>Aquí documentarás <strong>cómo has construido el sistema</strong>. No se trata de pegar todo el código, sino de explicar los hitos importantes, problemas resueltos y decisiones técnicas.</p>
</div>

<h3>6.1. Guía para el Diario de Configuración</h3>
<p>Un diario de configuración documenta los pasos que has seguido para montar el entorno de desarrollo:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span> Consejo Pedagógico
    </div>
    <p>Empieza este diario <strong>el primer día</strong> de desarrollo. Te será muy útil cuando tengas que explicar tu proyecto ante el tribunal.</p>
</div>

<h4>Elementos a Documentar</h4>
<p>Para cada herramienta o tecnología utilizada, registra:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Elemento</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Información a Registrar</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Ejemplo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Entorno de Desarrollo</td>
            <td class="p-4 border border-slate-200 text-sm">IDE, versión, extensiones clave</td>
            <td class="p-4 border border-slate-200 text-sm">VS Code 1.85 + ESLint, Prettier</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Lenguajes</td>
            <td class="p-4 border border-slate-200 text-sm">Versión, motivo de elección</td>
            <td class="p-4 border border-slate-200 text-sm">TypeScript 5.x por tipado estático</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Frameworks</td>
            <td class="p-4 border border-slate-200 text-sm">Versión, configuración especial</td>
            <td class="p-4 border border-slate-200 text-sm">React Native 0.73 con Hermes</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Base de Datos</td>
            <td class="p-4 border border-slate-200 text-sm">Motor, versión, configuración</td>
            <td class="p-4 border border-slate-200 text-sm">PostgreSQL 16 con pgcrypto</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Servicios Externos</td>
            <td class="p-4 border border-slate-200 text-sm">Proveedor, propósito, coste</td>
            <td class="p-4 border border-slate-200 text-sm">AWS S3 para almacenamiento de ficheros</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span> Actividad Práctica
    </div>
    <p>Crea una línea temporal con los hitos principales de tu implementación:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Semana 1-2:</strong> Setup del entorno, creación del proyecto base</li>
        <li><strong>Semana 3-4:</strong> Implementación de autenticación y gestión de usuarios</li>
        <li><strong>Semana 5-6:</strong> Desarrollo de funcionalidades principales</li>
        <li><strong>Semana 7-8:</strong> Integración, testing y corrección de errores</li>
    </ul>
    <p class="mt-3">Incluye capturas de pantalla de tu entorno de desarrollo y fragmentos de código relevantes.</p>
</div>

<h3>6.2. Guía para la Estructura del Proyecto</h3>
<p>Una buena organización del código facilita el mantenimiento y el trabajo en equipo:</p>

<h4>Patrones de Organización</h4>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">📁 Por Capas</h4>
        <p class="text-sm text-slate-600 mb-2">Separa por responsabilidad técnica:</p>
        <pre class="bg-slate-900 text-slate-100 p-3 rounded text-xs overflow-x-auto"><code>src/
├── controllers/
├── models/
├── views/
├── services/
└── utils/</code></pre>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">📁 Por Features</h4>
        <p class="text-sm text-slate-600 mb-2">Separa por funcionalidad de negocio:</p>
        <pre class="bg-slate-900 text-slate-100 p-3 rounded text-xs overflow-x-auto"><code>src/
├── auth/
├── users/
├── appointments/
├── reports/
└── shared/</code></pre>
    </div>
</div>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📋</span> Tarea para el Alumnado
    </div>
    <p>Documenta la estructura de TU proyecto:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Genera un árbol de directorios con <code class="bg-slate-100 px-2 py-0.5 rounded text-sm">tree</code> o similar</li>
        <li>Explica brevemente qué contiene cada carpeta principal</li>
        <li>Justifica por qué elegiste esa organización</li>
    </ul>
</div>

<h3>6.3. Guía para el Aseguramiento de Calidad</h3>
<p>El testing es fundamental para garantizar que tu software funciona correctamente:</p>

<h4>Niveles de Testing a Implementar</h4>
<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Nivel</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Propósito</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Herramientas Sugeridas</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Cobertura Mínima</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">Unitario</td>
            <td class="p-4 border border-slate-200 text-sm">Probar funciones/métodos individuales</td>
            <td class="p-4 border border-slate-200 text-sm">Jest, Mocha, pytest</td>
            <td class="p-4 border border-slate-200 text-sm">80% del código crítico</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-semibold">Integración</td>
            <td class="p-4 border border-slate-200 text-sm">Probar interacción entre componentes</td>
            <td class="p-4 border border-slate-200 text-sm">Supertest, pytest-integration</td>
            <td class="p-4 border border-slate-200 text-sm">Endpoints principales</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-semibold">E2E</td>
            <td class="p-4 border border-slate-200 text-sm">Probar flujos completos de usuario</td>
            <td class="p-4 border border-slate-200 text-sm">Detox, Cypress, Playwright</td>
            <td class="p-4 border border-slate-200 text-sm">Casos de uso principales</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>🧪</span> Actividad Práctica
    </div>
    <p>Para tu proyecto, implementa y documenta:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Al menos 5 tests unitarios</strong> de funciones críticas (autenticación, validaciones, cálculos)</li>
        <li><strong>Al menos 3 tests de integración</strong> de endpoints de la API</li>
        <li><strong>Al menos 1 test E2E</strong> de un flujo completo de usuario</li>
        <li><strong>Captura de pantalla</strong> del informe de cobertura de tests</li>
    </ul>
</div>

<h4>Ejemplo de Test Unitario</h4>
<pre class="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-6"><code class="language-javascript">// tests/auth.test.js
const request = require('supertest');
const app = require('../src/app');

describe('POST /api/v1/auth/login', () => {
  it('debe retornar token con credenciales válidas', async () => {
    const response = await request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'test@ejemplo.com',
        password: 'Password123!'
      });
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('debe fallar con credenciales inválidas', async () => {
    const response = await request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'test@ejemplo.com',
        password: 'wrongpassword'
      });
    
    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('error');
  });
});</code></pre>

<h3>6.4. Guía para Control de Versiones</h3>
<p>Git es esencial para gestionar los cambios de tu código:</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>🎯</span> Buenas Prácticas Git
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Commits atómicos:</strong> Un cambio = un commit</li>
        <li><strong>Mensajes descriptivos:</strong> Explica QUÉ y POR QUÉ, no CÓMO</li>
        <li><strong>Ramas feature:</strong> Una rama por funcionalidad</li>
        <li><strong>Push frecuente:</strong> No trabajes más de 1 día sin hacer push</li>
    </ul>
</div>

<h4>Convención de Commits</h4>
<p>Usa el estándar <strong>Conventional Commits</strong> para mensajes consistentes:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Tipo</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Descripción</th>
            <th class="p-4 text-left font-bold text-slate-700 border border-slate-200">Ejemplo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border border-slate-200 font-mono text-sm">feat</td>
            <td class="p-4 border border-slate-200 text-sm">Nueva funcionalidad</td>
            <td class="p-4 border border-slate-200 font-mono text-sm">feat: añadir login con Google</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-mono text-sm">fix</td>
            <td class="p-4 border border-slate-200 text-sm">Corrección de bugs</td>
            <td class="p-4 border border-slate-200 font-mono text-sm">fix: corregir validación de email</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-mono text-sm">docs</td>
            <td class="p-4 border border-slate-200 text-sm">Cambios en documentación</td>
            <td class="p-4 border border-slate-200 font-mono text-sm">docs: actualizar README con instrucciones</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="p-4 border border-slate-200 font-mono text-sm">style</td>
            <td class="p-4 border border-slate-200 text-sm">Formato, sin cambios de lógica</td>
            <td class="p-4 border border-slate-200 font-mono text-sm">style: corregir indentación en auth.js</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-mono text-sm">refactor</td>
            <td class="p-4 border border-slate-200 text-sm">Refactorización de código</td>
            <td class="p-4 border border-slate-200 font-mono text-sm">refactor: simplificar lógica de validación</td>
        </tr>
        <tr>
            <td class="p-4 border border-slate-200 font-mono text-sm">test</td>
            <td class="p-4 border border-slate-200 text-sm">Añadir o modificar tests</td>
            <td class="p-4 border border-slate-200 font-mono text-sm">test: añadir tests para registro de usuarios</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📋</span> Tarea para el Alumnado
    </div>
    <p>Documenta tu uso de Git incluyendo:</p>
    <ul class="list-disc pl-6 space-y-2 mt-2">
        <li>Enlace a tu repositorio (GitHub, GitLab, Bitbucket)</li>
        <li>Captura de pantalla del gráfico de commits</li>
        <li>Listado de las 5-10 ramas principales que creaste</li>
        <li>Explicación de algún conflicto que resolviste y cómo</li>
    </ul>
</div>
`;
