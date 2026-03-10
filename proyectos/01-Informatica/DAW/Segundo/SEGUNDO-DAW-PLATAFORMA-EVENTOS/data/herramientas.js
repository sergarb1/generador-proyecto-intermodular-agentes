window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.herramientas = `
<div class="space-y-6">
    <h3>Herramientas de Desarrollo</h3>

    <p>
        El proyecto utiliza un conjunto de herramientas que facilitan el desarrollo colaborativo, 
        la calidad del código y la productividad del equipo:
    </p>

    <h4>Entorno de Desarrollo</h4>

    <table class="w-full border-collapse my-6 text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="border border-slate-300 px-4 py-3 text-left">Herramienta</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Propósito</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Configuración Clave</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>VS Code</strong></td>
                <td class="border border-slate-300 px-4 py-3">IDE principal</td>
                <td class="border border-slate-300 px-4 py-3">Extensiones: Volar, ESLint, Prettier, Docker</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>Docker Desktop</strong></td>
                <td class="border border-slate-300 px-4 py-3">Contenerización local</td>
                <td class="border border-slate-300 px-4 py-3">docker-compose para servicios dependientes</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>Git</strong></td>
                <td class="border border-slate-300 px-4 py-3">Control de versiones</td>
                <td class="border border-slate-300 px-4 py-3">Git Flow como estrategia de branching</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>Node.js 20 LTS</strong></td>
                <td class="border border-slate-300 px-4 py-3">Runtime JavaScript</td>
                <td class="border border-slate-300 px-4 py-3">npm como package manager</td>
            </tr>
        </tbody>
    </table>

    <h4>Extensiones VS Code Recomendadas</h4>

    <div class="callout callout-info">
        <div class="callout-title">
            <span>📦</span> Configuración del Entorno
        </div>
        <pre class="text-xs overflow-x-auto mt-3 mb-0"><code class="language-json">
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "vue.complete.casing.status": false,
  "vue.complete.casing.props": "kebab",
  "tailwindCSS.includeLanguages": {
    "vue": "html",
    "javascript": "javascript"
  },
  "docker.compose.showStartNotification": false
}
        </code></pre>
    </div>

    <h3>Herramientas de Calidad de Código</h3>

    <h4>ESLint + Prettier</h4>

    <p>
        La combinación de ESLint (análisis estático) y Prettier (formateo automático) garantiza 
        un código consistente y libre de errores comunes:
    </p>

    <pre class="text-xs overflow-x-auto bg-slate-800 text-slate-100 p-4 rounded-lg"><code class="language-javascript">
// backend/.eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always'
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
  }
};
    </code></pre>

    <h4>Husky + lint-staged</h4>

    <p>
        Los pre-commit hooks automatizan la verificación de calidad antes de cada commit:
    </p>

    <pre class="text-xs overflow-x-auto bg-slate-800 text-slate-100 p-4 rounded-lg"><code class="language-json">
// package.json (scripts)
{
  "scripts": {
    "prepare": "husky install",
    "lint": "eslint src --ext .ts,.vue",
    "format": "prettier --write \"src/**/*.{ts,vue,js}\""
  },
  "lint-staged": {
    "*.{ts,vue,js}": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ]
  }
}

// .husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
npx lint-staged
    </code></pre>

    <h3>Herramientas de Testing</h3>

    <table class="w-full border-collapse my-6 text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="border border-slate-300 px-4 py-3 text-left">Herramienta</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Tipo de Test</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Cobertura Mínima</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>Vitest</strong></td>
                <td class="border border-slate-300 px-4 py-3">Unitarios (Backend/Frontend)</td>
                <td class="border border-slate-300 px-4 py-3">80% statements, 70% branches</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>@vue/test-utils</strong></td>
                <td class="border border-slate-300 px-4 py-3">Componentes Vue</td>
                <td class="border border-slate-300 px-4 py-3">Componentes críticos 100%</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>Playwright</strong></td>
                <td class="border border-slate-300 px-4 py-3">E2E (End-to-End)</td>
                <td class="border border-slate-300 px-4 py-3">Flujos críticos (login, compra)</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>Supertest</strong></td>
                <td class="border border-slate-300 px-4 py-3">API Integration</td>
                <td class="border border-slate-300 px-4 py-3">Endpoints públicos 100%</td>
            </tr>
        </tbody>
    </table>

    <h4>Ejemplo de Test Unitario</h4>

    <pre class="text-xs overflow-x-auto bg-slate-800 text-slate-100 p-4 rounded-lg"><code class="language-typescript">
// backend/tests/unit/auth.service.test.ts
import { AuthService } from '../../src/services/auth.service';
import { UserRepository } from '../../src/repositories/user.repository';
import { AppError } from '../../src/utils/errors';

// Mock del repository
jest.mock('../../src/repositories/user.repository');

describe('AuthService', () => {
  let authService: AuthService;
  let mockUserRepository: jest.Mocked&lt;UserRepository&gt;;

  beforeEach(() => {
    mockUserRepository = new UserRepository() as jest.Mocked&lt;UserRepository&gt;;
    authService = new AuthService();
    (authService as any).userRepository = mockUserRepository;
  });

  describe('register', () => {
    it('debería crear un usuario correctamente', async () => {
      // Arrange
      const userData = {
        email: 'test@example.com',
        password: 'Password123!',
        nombre: 'Test User'
      };
      
      mockUserRepository.findByEmail.mockResolvedValue(null);
      mockUserRepository.create.mockResolvedValue({
        id: 1,
        ...userData,
        password: undefined,
        rol: 'user',
        creado_en: new Date()
      });

      // Act
      const result = await authService.register(
        userData.email,
        userData.password,
        userData.nombre
      );

      // Assert
      expect(result).toHaveProperty('id');
      expect(result).not.toHaveProperty('password');
      expect(mockUserRepository.create).toHaveBeenCalled();
    });

    it('debería lanzar error si el email ya existe', async () => {
      // Arrange
      mockUserRepository.findByEmail.mockResolvedValue({
        id: 1,
        email: 'test@example.com',
        nombre: 'Existing User'
      });

      // Act & Assert
      await expect(
        authService.register('test@example.com', 'Password123!', 'Test')
      ).rejects.toThrow(AppError);
    });
  });
});
    </code></pre>

    <h3>Herramientas de Documentación</h3>

    <ul>
        <li><strong>Swagger/OpenAPI:</strong> Documentación interactiva de la API REST. Se genera 
        automáticamente a partir de decorators en los controllers.</li>
        <li><strong>Typedoc:</strong> Documentación del código TypeScript. Se genera con 
        <code>npm run docs</code> y se publica en GitHub Pages.</li>
        <li><strong>Storybook:</strong> Catálogo de componentes Vue. Permite visualizar y 
        testear componentes de forma aislada.</li>
        <li><strong>Notion:</strong> Wiki del proyecto con documentación de procesos, 
        decisiones de arquitectura y onboarding.</li>
    </ul>

    <div class="callout callout-warning">
        <div class="callout-title">
            <span>⚠️</span> Actividad para el Alumnado
        </div>
        <p class="mb-0">
            <strong>Ejercicio de configuración:</strong> Configura el entorno de desarrollo local:
        </p>
        <ul class="mt-2 mb-0">
            <li>Instala VS Code y las extensiones recomendadas</li>
            <li>Clona el repositorio y ejecuta <code>docker-compose up -d</code></li>
            <li>Configura las variables de entorno (.env basado en .env.example)</li>
            <li>Ejecuta los tests y verifica que pasan</li>
            <li>Documenta cualquier incidencia encontrada y su resolución</li>
        </ul>
    </div>

    <h3>Metodología de Trabajo</h3>

    <p>
        El proyecto sigue una metodología <strong>Ágil-Scrum</strong> adaptada al contexto 
        educativo:
    </p>

    <ul>
        <li><strong>Sprints:</strong> Iteraciones de 1 semana con objetivos definidos</li>
        <li><strong>Daily standup:</strong> Reunión de 15 minutos (asincrónica vía Discord/Slack)</li>
        <li><strong>Sprint Planning:</strong> Definición de tareas al inicio de cada sprint</li>
        <li><strong>Sprint Review:</strong> Demostración de funcionalidades completadas</li>
        <li><strong>Retrospectiva:</strong> Mejora continua del proceso</li>
    </ul>

    <h4>Tablero Kanban (GitHub Projects)</h4>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
        <div class="p-4 bg-slate-100 rounded-lg border border-slate-200">
            <h4 class="font-bold text-slate-700 mb-2">📋 Backlog</h4>
            <p class="text-xs text-slate-500 mb-0">Todas las user stories identificadas</p>
        </div>
        <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 class="font-bold text-blue-700 mb-2">🔄 In Progress</h4>
            <p class="text-xs text-blue-500 mb-0">Tareas en desarrollo activo</p>
        </div>
        <div class="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h4 class="font-bold text-amber-700 mb-2">👀 Review</h4>
            <p class="text-xs text-amber-500 mb-0">Code review y testing pendiente</p>
        </div>
        <div class="p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 class="font-bold text-green-700 mb-2">✅ Done</h4>
            <p class="text-xs text-green-500 mb-0">Completado y desplegado</p>
        </div>
    </div>
</div>
`;
