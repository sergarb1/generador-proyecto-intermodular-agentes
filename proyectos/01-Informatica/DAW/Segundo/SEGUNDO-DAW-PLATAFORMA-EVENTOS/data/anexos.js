window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.anexos = `
<div class="space-y-6">
    <h3>Anexos Técnicos</h3>

    <p>
        Los siguientes anexos contienen información técnica detallada que complementa 
        el cuerpo principal del proyecto:
    </p>

    <h4>Anexo A: Diagramas UML Completos</h4>

    <div class="callout callout-warning">
        <div class="callout-title">
            <span>📐</span> Actividad para el Alumnado
        </div>
        <p class="mb-0">
            <strong>Tarea:</strong> Genera los siguientes diagramas UML utilizando draw.io, Lucidchart 
            o similar. Exporta en formato PNG de alta resolución y enlaza desde esta sección:
        </p>
        <ul class="mt-2 mb-0">
            <li><strong>Diagrama de Casos de Uso:</strong> Todos los actores y sus interacciones con el sistema</li>
            <li><strong>Diagrama de Clases:</strong> Modelo completo de dominio con relaciones y cardinalidades</li>
            <li><strong>Diagrama de Secuencia:</strong> Flujo completo de compra de entradas (escenario principal y 2 alternativos)</li>
            <li><strong>Diagrama de Actividad:</strong> Proceso de check-in desde escaneo hasta validación</li>
            <li><strong>Diagrama de Despliegue:</strong> Infraestructura AWS completa con todos los servicios</li>
        </ul>
    </div>

    <h4>Anexo B: Especificación Completa de la API (OpenAPI/Swagger)</h4>

    <pre class="text-xs overflow-x-auto bg-slate-800 text-slate-100 p-4 rounded-lg"><code class="language-yaml">
# Extracto de documentación OpenAPI 3.0
# El alumnado deberá completar la especificación completa

openapi: 3.0.3
info:
  title: EventHub Pro API
  description: API REST para la gestión de eventos y venta de entradas
  version: 1.0.0
  contact:
    name: EventHub Pro Team
    email: support@eventhubpro.com

servers:
  - url: https://api.eventhubpro.com/v1
  - url: http://localhost:3000/v1

paths:
  /auth/register:
    post:
      tags: [Autenticación]
      summary: Registro de nuevo usuario
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [email, password, nombre]
              properties:
                email:
                  type: string
                  format: email
                  example: "usuario@example.com"
                password:
                  type: string
                  minLength: 8
                  pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\\\d).+$"
                  example: "Password123!"
                nombre:
                  type: string
                  minLength: 2
                  maxLength: 100
                  example: "Juan García"
      responses:
        '201':
          description: Usuario creado exitosamente
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '400':
          description: Datos inválidos
        '409':
          description: Email ya registrado

  /events:
    get:
      tags: [Eventos]
      summary: Listado de eventos públicos (paginado)
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            default: 1
        - name: limit
          in: query
          schema:
            type: integer
            default: 20
            maximum: 100
        - name: search
          in: query
          schema:
            type: string
        - name: date_from
          in: query
          schema:
            type: string
            format: date
      responses:
        '200':
          description: Listado de eventos
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/Event'
                  pagination:
                    $ref: '#/components/schemas/Pagination'

components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        email:
          type: string
        nombre:
          type: string
        rol:
          type: string
          enum: [admin, organizer, user]
        creado_en:
          type: string
          format: date-time

    Event:
      type: object
      properties:
        id:
          type: integer
        titulo:
          type: string
        descripcion:
          type: string
        fecha_inicio:
          type: string
          format: date-time
        ubicacion:
          type: string
        aforo_maximo:
          type: integer
        banner_url:
          type: string
          format: uri

    Pagination:
      type: object
      properties:
        page:
          type: integer
        limit:
          type: integer
        total:
          type: integer
        totalPages:
          type: integer

  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT

security:
  - bearerAuth: []
    </code></pre>

    <h4>Anexo C: Scripts SQL de Migración</h4>

    <div class="callout callout-warning">
        <div class="callout-title">
            <span>💻</span> Actividad para el Alumnado
        </div>
        <p class="mb-0">
            <strong>Tarea:</strong> Completa los scripts de migración de base de datos:
        </p>
        <ul class="mt-2 mb-0">
            <li>Crea migraciones usando una herramienta como <code>node-pg-migrate</code> o <code>Prisma Migrate</code></li>
            <li>Incluye migraciones de rollback para cada cambio</li>
            <li>Añade seeds con datos de prueba realistas (mínimo 10 eventos, 50 usuarios, 200 entradas)</li>
            <li>Documenta el procedimiento para aplicar migraciones en diferentes entornos</li>
        </ul>
    </div>

    <h4>Anexo D: Checklist de Seguridad OWASP Top 10</h4>

    <table class="w-full border-collapse my-6 text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="border border-slate-300 px-4 py-3 text-left">Vulnerabilidad</th>
                <th class="border border-slate-300 px-4 py-3 text-left">Mitigación Implementada</th>
                <th class="border border-slate-300 px-4 py-3 text-center">Estado</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>A01: Broken Access Control</strong></td>
                <td class="border border-slate-300 px-4 py-3">Middleware de autenticación y autorización por roles</td>
                <td class="border border-slate-300 px-4 py-3 text-center">✅</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>A02: Cryptographic Failures</strong></td>
                <td class="border border-slate-300 px-4 py-3">HTTPS obligatorio, bcrypt para passwords, JWT con RS256</td>
                <td class="border border-slate-300 px-4 py-3 text-center">✅</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>A03: Injection</strong></td>
                <td class="border border-slate-300 px-4 py-3">ORM con prepared statements, validación de inputs con Zod/Joi</td>
                <td class="border border-slate-300 px-4 py-3 text-center">✅</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>A04: Insecure Design</strong></td>
                <td class="border border-slate-300 px-4 py-3">Threat modeling, rate limiting, circuit breakers</td>
                <td class="border border-slate-300 px-4 py-3 text-center">⚠️ Parcial</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>A05: Security Misconfiguration</strong></td>
                <td class="border border-slate-300 px-4 py-3">Helmet.js, CORS configurado, headers de seguridad</td>
                <td class="border border-slate-300 px-4 py-3 text-center">✅</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>A06: Vulnerable Components</strong></td>
                <td class="border border-slate-300 px-4 py-3">Dependabot activo, npm audit en CI/CD</td>
                <td class="border border-slate-300 px-4 py-3 text-center">✅</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>A07: Auth Failures</strong></td>
                <td class="border border-slate-300 px-4 py-3">JWT con expiración, refresh tokens, 2FA opcional</td>
                <td class="border border-slate-300 px-4 py-3 text-center">⚠️ Parcial</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>A08: Data Integrity</strong></td>
                <td class="border border-slate-300 px-4 py-3">Validación de schemas, firma de QR codes</td>
                <td class="border border-slate-300 px-4 py-3 text-center">✅</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>A09: Logging Failures</strong></td>
                <td class="border border-slate-300 px-4 py-3">Winston logger, logs estructurados, sin datos sensibles</td>
                <td class="border border-slate-300 px-4 py-3 text-center">✅</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3"><strong>A10: SSRF</strong></td>
                <td class="border border-slate-300 px-4 py-3">Validación de URLs, allowlist de dominios</td>
                <td class="border border-slate-300 px-4 py-3 text-center">✅</td>
            </tr>
        </tbody>
    </table>

    <h4>Anexo E: Manual de Usuario</h4>

    <div class="callout callout-warning">
        <div class="callout-title">
            <span>📖</span> Actividad para el Alumnado
        </div>
        <p class="mb-0">
            <strong>Tarea:</strong> Elabora un manual de usuario completo que incluya:
        </p>
        <ul class="mt-2 mb-0">
            <li><strong>Para asistentes:</strong> Registro, búsqueda de eventos, compra de entradas, check-in</li>
            <li><strong>Para organizadores:</strong> Creación de eventos, configuración de entradas, dashboard de ventas, check-in presencial</li>
            <li><strong>Para administradores:</strong> Gestión de usuarios, moderación de eventos, reporting global</li>
            <li>Capturas de pantalla annotadas de cada proceso</li>
            <li>Sección de FAQ (preguntas frecuentes)</li>
            <li>Información de contacto para soporte técnico</li>
        </ul>
    </div>

    <h4>Anexo F: Presupuesto Detallado</h4>

    <table class="w-full border-collapse my-6 text-sm">
        <thead>
            <tr class="bg-slate-100">
                <th class="border border-slate-300 px-4 py-3 text-left">Concepto</th>
                <th class="border border-slate-300 px-4 py-3 text-right">Cantidad</th>
                <th class="border border-slate-300 px-4 py-3 text-right">Precio Unit.</th>
                <th class="border border-slate-300 px-4 py-3 text-right">Subtotal</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-slate-300 px-4 py-3" colspan="4"><strong>Costes de Desarrollo</strong></td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3 pl-8">Horas desarrollo (96h × 12€/h)</td>
                <td class="border border-slate-300 px-4 py-3 text-right">96 h</td>
                <td class="border border-slate-300 px-4 py-3 text-right">12,00€</td>
                <td class="border border-slate-300 px-4 py-3 text-right">1.152,00€</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3 pl-8">Tutorización técnica</td>
                <td class="border border-slate-300 px-4 py-3 text-right">20 h</td>
                <td class="border border-slate-300 px-4 py-3 text-right">50,00€</td>
                <td class="border border-slate-300 px-4 py-3 text-right">1.000,00€</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3" colspan="4"><strong>Infraestructura (3 meses)</strong></td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3 pl-8">AWS (RDS, ECS, S3, CloudFront)</td>
                <td class="border border-slate-300 px-4 py-3 text-right">3 meses</td>
                <td class="border border-slate-300 px-4 py-3 text-right">100,00€</td>
                <td class="border border-slate-300 px-4 py-3 text-right">300,00€</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3 pl-8">Dominio + SSL</td>
                <td class="border border-slate-300 px-4 py-3 text-right">1 año</td>
                <td class="border border-slate-300 px-4 py-3 text-right">15,00€</td>
                <td class="border border-slate-300 px-4 py-3 text-right">15,00€</td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3" colspan="4"><strong>Herramientas y Licencias</strong></td>
            </tr>
            <tr>
                <td class="border border-slate-300 px-4 py-3 pl-8">Stripe (comisiones estimadas)</td>
                <td class="border border-slate-300 px-4 py-3 text-right">-</td>
                <td class="border border-slate-300 px-4 py-3 text-right">1,4% + 0,25€</td>
                <td class="border border-slate-300 px-4 py-3 text-right">Variable</td>
            </tr>
            <tr class="bg-slate-50 font-semibold">
                <td class="border border-slate-300 px-4 py-3" colspan="3">TOTAL ESTIMADO</td>
                <td class="border border-slate-300 px-4 py-3 text-right">2.467,00€</td>
            </tr>
        </tbody>
    </table>

    <div class="callout callout-info">
        <div class="callout-title">
            <span>📎</span> Nota sobre los Anexos
        </div>
        <p class="mb-0">
            Los anexos deben completarse durante el desarrollo del proyecto. Se recomienda 
            mantenerlos actualizados en cada sprint para que reflejen fielmente el estado 
            actual del sistema. Al finalizar, todos los anexos deben estar completos y 
            revisados por el tutor del proyecto.
        </p>
    </div>
</div>
`;
