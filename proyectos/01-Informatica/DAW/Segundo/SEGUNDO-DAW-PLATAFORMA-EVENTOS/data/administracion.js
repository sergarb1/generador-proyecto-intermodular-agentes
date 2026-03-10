window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.administracion = `
<div class="space-y-6">
    <h3>Plan de Despliegue</h3>

    <p>
        El despliegue de EventHub Pro se realiza en AWS utilizando una combinación de servicios 
        gestionados que garantizan escalabilidad, disponibilidad y seguridad. A continuación se 
        detalla la arquitectura de infraestructura:
    </p>

    <h4>Diagrama de Infraestructura AWS</h4>

    <div class="bg-slate-100 rounded-xl p-6 my-6 border border-slate-200">
        <pre class="text-xs md:text-sm overflow-x-auto text-slate-700"><code>
                                    ┌─────────────────┐
                                    │   Route 53      │
                                    │   (DNS)         │
                                    └────────┬────────┘
                                             │
                                    ┌────────▼────────┐
                                    │  CloudFront     │
                                    │  (CDN)          │
                                    └────────┬────────┘
                                             │
                    ┌────────────────────────┼────────────────────────┐
                    │                        │                        │
           ┌────────▼────────┐     ┌────────▼────────┐     ┌────────▼────────┐
           │   S3 Bucket     │     │  API Gateway    │     │  ALB (Load      │
           │   (Frontend)    │     │  (REST API)     │     │   Balancer)     │
           └─────────────────┘     └────────┬────────┘     └────────┬────────┘
                                            │                       │
                                   ┌────────▼────────┐     ┌────────▼────────┐
                                   │   Lambda        │     │   ECS Fargate   │
                                   │   Functions     │     │   (Backend)     │
                                   │   (Optional)    │     │                 │
                                   └─────────────────┘     └────────┬────────┘
                                                                    │
                        ┌───────────────────────────────────────────┼────────┐
                        │                                           │        │
               ┌────────▼────────┐                        ┌────────▼────┐  ┌─▼──────────┐
               │   RDS           │                        │   ElastiCache│  │  S3        │
               │   PostgreSQL    │                        │   (Redis)   │  │  (Assets)  │
               │   (Multi-AZ)    │                        │             │  │            │
               └─────────────────┘                        └─────────────┘  └────────────┘
        </code></pre>
    </div>

    <h4>Servicios AWS Utilizados</h4>

    <table class="w-full border-collapse my-6 text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="border border-slate-300 px-4 py-3 text-left">Servicio</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Propósito</th>
                <th class="border border-slate-300 px-4 py-3 text-right">Coste Estimado/mes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>CloudFront</strong></td>
                <td class="border border-slate-300 px-4 py-3">CDN para distribución global del frontend</td>
                <td class="border border-slate-300 px-4 py-3 text-right">5-15€</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>S3</strong></td>
                <td class="border border-slate-300 px-4 py-3">Hosting estático + almacenamiento de assets</td>
                <td class="border border-slate-300 px-4 py-3 text-right">2-5€</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>RDS PostgreSQL</strong></td>
                <td class="border border-slate-300 px-4 py-3">Base de datos gestionada (db.t3.small, Multi-AZ)</td>
                <td class="border border-slate-300 px-4 py-3 text-right">25-40€</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>ElastiCache Redis</strong></td>
                <td class="border border-slate-300 px-4 py-3">Caché para sesiones y datos frecuentes</td>
                <td class="border border-slate-300 px-4 py-3 text-right">10-15€</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>ECS Fargate</strong></td>
                <td class="border border-slate-300 px-4 py-3">Contenedores del backend (2 tareas, 0.5 vCPU c/u)</td>
                <td class="border border-slate-300 px-4 py-3 text-right">15-25€</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>Application Load Balancer</strong></td>
                <td class="border border-slate-300 px-4 py-3">Distribución de tráfico entre instancias</td>
                <td class="border border-slate-300 px-4 py-3 text-right">15-20€</td>
            </tr>
            <tr class="bg-slate-50 font-semibold">
                <td class="border border-slate-300 px-4 py-3" colspan="2">TOTAL ESTIMADO</td>
                <td class="border border-slate-300 px-4 py-3 text-right">72-120€</td>
            </tr>
        </tbody>
    </table>

    <div class="callout callout-info">
        <div class="callout-title">
            <span>💡</span> Optimización de Costes
        </div>
        <p class="mb-0">
            Para entornos de desarrollo/testing se recomienda utilizar:
        </p>
        <ul class="mt-2 mb-0">
            <li><strong>AWS Free Tier:</strong> 750h/mes de EC2 t2.micro, 5GB S3, 750h RDS t2.micro</li>
            <li><strong>Render/Railway:</strong> Alternativas más económicas para proyectos pequeños</li>
            <li><strong>Docker local:</strong> Para desarrollo, usar docker-compose con servicios locales</li>
        </ul>
    </div>

    <h3>Pipeline CI/CD con GitHub Actions</h3>

    <p>
        El pipeline de integración y despliegue continuo automatiza las siguientes tareas:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
        <div class="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div class="text-2xl mb-2">🔍</div>
            <h4 class="font-bold text-sm text-blue-800 mb-1">1. Build</h4>
            <p class="text-xs text-blue-600 mb-0">Compilación y linting</p>
        </div>
        <div class="text-center p-4 bg-green-50 rounded-xl border border-green-200">
            <div class="text-2xl mb-2">✅</div>
            <h4 class="font-bold text-sm text-green-800 mb-1">2. Test</h4>
            <p class="text-xs text-green-600 mb-0">Tests unitarios y E2E</p>
        </div>
        <div class="text-center p-4 bg-amber-50 rounded-xl border border-amber-200">
            <div class="text-2xl mb-2">📦</div>
            <h4 class="font-bold text-sm text-amber-800 mb-1">3. Package</h4>
            <p class="text-xs text-amber-600 mb-0">Build Docker images</p>
        </div>
        <div class="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
            <div class="text-2xl mb-2">🚀</div>
            <h4 class="font-bold text-sm text-purple-800 mb-1">4. Deploy</h4>
            <p class="text-xs text-purple-600 mb-0">Despliegue en producción</p>
        </div>
    </div>

    <h4>Workflow de CI/CD (Extracto)</h4>

    <div class="callout callout-warning">
        <div class="callout-title">
            <span>💻</span> Código Base (para completar)
        </div>
        <pre class="text-xs overflow-x-auto mt-3 mb-0"><code class="language-yaml">
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_PASSWORD: test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies (Backend)
        run: npm ci
        working-directory: ./backend
      
      - name: Install dependencies (Frontend)
        run: npm ci
        working-directory: ./frontend
      
      - name: Lint
        run: npm run lint
        working-directory: ./backend
      
      - name: Run tests (Backend)
        run: npm test -- --coverage
        working-directory: ./backend
        env:
          DATABASE_URL: postgresql://postgres:test@localhost:5432/test
      
      - name: Run tests (Frontend)
        run: npm test -- --coverage
        working-directory: ./frontend
      
      - name: Build
        run: npm run build
        working-directory: ./frontend
      
      - name: Upload coverage reports
        uses: codecov/codecov-action@v3
        with:
          files: ./backend/coverage/lcov.info,./frontend/coverage/lcov.info

  deploy:
    needs: build-and-test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      # TODO: Configurar autenticación con AWS
      # TODO: Build y push de Docker images a ECR
      # TODO: Actualizar tarea ECS con nueva imagen
      # TODO: Invalidar caché de CloudFront
      
      - name: Deploy to AWS
        run: |
          echo "Implementar despliegue en AWS"
          exit 1  # Placeholder
</code></pre>
    </div>

    <h3>Plan de Backup y Recuperación</h3>

    <p>
        La estrategia de backup garantiza la recuperación ante desastres con los siguientes 
        objetivos de punto y tiempo de recuperación:
    </p>

    <table class="w-full border-collapse my-6 text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="border border-slate-300 px-4 py-3 text-left">Métrica</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Objetivo</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Implementación</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>RPO (Recovery Point Objective)</strong></td>
                <td class="border border-slate-300 px-4 py-3">1 hora</td>
                <td class="border border-slate-300 px-4 py-3">Backups automáticos RDS cada hora + replication</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>RTO (Recovery Time Objective)</strong></td>
                <td class="border border-slate-300 px-4 py-3">4 horas</td>
                <td class="border border-slate-300 px-4 py-3">Runbooks documentados + infraestructura como código</td>
            </tr>
        </tbody>
    </table>

    <h4>Procedimiento de Backup</h4>

    <ul>
        <li><strong>Base de datos:</strong> Snapshots automáticos de RDS cada 1 hora, retenidos 30 días. 
        Snapshots manuales antes de despliegues importantes.</li>
        <li><strong>Assets (S3):</strong> Versioning habilitado + replicación cross-region a bucket secundario.</li>
        <li><strong>Código:</strong> Repositorio GitHub con backups automáticos + mirrors en GitLab.</li>
        <li><strong>Configuraciones:</strong> Terraform state en S3 con versioning + backup local cifrado.</li>
    </ul>

    <div class="callout callout-warning">
        <div class="callout-title">
            <span>⚠️</span> Actividad para el Alumnado
        </div>
        <p class="mb-0">
            <strong>Ejercicio de administración:</strong> Investiga y documenta el procedimiento 
            completo para:
        </p>
        <ul class="mt-2 mb-0">
            <li>Restaurar la base de datos desde un snapshot específico</li>
            <li>Recuperar un archivo eliminado accidentalmente de S3</li>
            <li>Revertir un despliegue defectuoso (rollback)</li>
        </ul>
    </div>

    <h3>Monitoring y Alerting</h3>

    <p>
        El sistema de monitoring permite detectar y responder a incidencias de forma proactiva:
    </p>

    <ul>
        <li><strong>CloudWatch:</strong> Métricas de infraestructura (CPU, memoria, disco, red)</li>
        <li><strong>CloudWatch Logs:</strong> Centralización de logs con retención 90 días</li>
        <li><strong>X-Ray:</strong> Tracing distribuido para identificar cuellos de botella</li>
        <li><strong>Synthetics:</strong> Checks de disponibilidad cada 5 minutos desde múltiples regiones</li>
    </ul>

    <h4>Alertas Configuradas</h4>

    <table class="w-full border-collapse my-6 text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="border border-slate-300 px-4 py-3 text-left">Métrica</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Umbral</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Acción</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 px-4 py-3">CPU ECS &gt; 80%</td>
                <td class="border border-slate-300 px-4 py-3">5 minutos</td>
                <td class="border border-slate-300 px-4 py-3">Email + Slack al equipo</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">Error rate API &gt; 5%</td>
                <td class="border border-slate-300 px-4 py-3">1 minuto</td>
                <td class="border border-slate-300 px-4 py-3">SMS + PagerDuty (crítico)</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">Latencia p95 &gt; 500ms</td>
                <td class="border border-slate-300 px-4 py-3">10 minutos</td>
                <td class="border border-slate-300 px-4 py-3">Email al equipo</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3">Espacio disco RDS &gt; 85%</td>
                <td class="border border-slate-300 px-4 py-3">Inmediato</td>
                <td class="border border-slate-300 px-4 py-3">Email + Slack</td>
            </tr>
        </tbody>
    </table>
</div>
`;
