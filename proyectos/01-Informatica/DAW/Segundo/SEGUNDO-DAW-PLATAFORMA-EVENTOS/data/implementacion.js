window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.implementacion = `
<div class="space-y-6">
    <h3>Estructura del Proyecto</h3>

    <p>
        El código fuente se organiza siguiendo una estructura modular que facilita la navegación 
        y el mantenimiento. Esta organización refleja la arquitectura hexagonal implementada:
    </p>

    <div class="bg-slate-100 rounded-xl p-6 my-6 border border-slate-200">
        <pre class="text-xs md:text-sm overflow-x-auto text-slate-700"><code>
eventhub-pro/
├── frontend/                    # Aplicación Vue.js 3
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── assets/             # Recursos estáticos (imágenes, fuentes)
│   │   ├── components/         # Componentes reutilizables
│   │   │   ├── common/         # Botones, inputs, modales genéricos
│   │   │   ├── events/         # Componentes específicos de eventos
│   │   │   ├── tickets/        # Componentes de gestión de entradas
│   │   │   └── layout/         # Header, Footer, Sidebar
│   │   ├── composables/        # Composition API reusable
│   │   │   ├── useAuth.ts
│   │   │   ├── useEvents.ts
│   │   │   └── useTickets.ts
│   │   ├── views/              # Vistas/páginas completas
│   │   │   ├── HomeView.vue
│   │   │   ├── EventDetailView.vue
│   │   │   ├── CheckoutView.vue
│   │   │   ├── DashboardView.vue
│   │   │   └── LoginView.vue
│   │   ├── router/
│   │   │   └── index.ts        # Configuración de rutas
│   │   ├── stores/             # Pinia stores
│   │   │   ├── auth.store.ts
│   │   │   ├── events.store.ts
│   │   │   └── cart.store.ts
│   │   ├── services/           # Llamadas API
│   │   │   ├── api.client.ts
│   │   │   ├── auth.service.ts
│   │   │   └── events.service.ts
│   │   ├── types/              # TypeScript interfaces
│   │   │   ├── event.ts
│   │   │   ├── user.ts
│   │   │   └── ticket.ts
│   │   ├── utils/              # Funciones utilitarias
│   │   │   ├── validators.ts
│   │   │   ├── formatters.ts
│   │   │   └── constants.ts
│   │   ├── App.vue
│   │   └── main.ts
│   ├── tests/
│   │   ├── unit/
│   │   └── e2e/
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── tailwind.config.js
│
├── backend/                     # API Node.js/Express
│   ├── src/
│   │   ├── config/             # Configuración del servidor
│   │   │   ├── database.ts
│   │   │   ├── redis.ts
│   │   │   └── cors.ts
│   │   ├── controllers/        # Manejo de requests HTTP
│   │   │   ├── auth.controller.ts
│   │   │   ├── events.controller.ts
│   │   │   └── tickets.controller.ts
│   │   ├── services/           # Lógica de negocio
│   │   │   ├── auth.service.ts
│   │   │   ├── events.service.ts
│   │   │   ├── tickets.service.ts
│   │   │   └── email.service.ts
│   │   ├── repositories/       # Acceso a datos
│   │   │   ├── user.repository.ts
│   │   │   ├── event.repository.ts
│   │   │   └── ticket.repository.ts
│   │   ├── models/             # Definición de entidades
│   │   │   ├── User.ts
│   │   │   ├── Event.ts
│   │   │   └── Ticket.ts
│   │   ├── middlewares/        # Middlewares de Express
│   │   │   ├── auth.middleware.ts
│   │   │   ├── error.middleware.ts
│   │   │   ├── rateLimit.middleware.ts
│   │   │   └── validation.middleware.ts
│   │   ├── routes/             # Definición de endpoints
│   │   │   ├── auth.routes.ts
│   │   │   ├── events.routes.ts
│   │   │   └── tickets.routes.ts
│   │   ├── validators/         # Validación de inputs (Joi/Zod)
│   │   │   ├── auth.validator.ts
│   │   │   └── event.validator.ts
│   │   ├── utils/
│   │   │   ├── jwt.ts
│   │   │   ├── password.ts
│   │   │   ├── qr-generator.ts
│   │   │   └── logger.ts
│   │   └── app.ts
│   ├── tests/
│   │   ├── unit/
│   │   └── integration/
│   ├── migrations/             # Migraciones de BD
│   ├── seeds/                  # Datos de prueba
│   ├── package.json
│   └── tsconfig.json
│
├── infrastructure/              # Infraestructura como código
│   ├── docker/
│   │   ├── Dockerfile.frontend
│   │   ├── Dockerfile.backend
│   │   └── docker-compose.yml
│   ├── aws/
│   │   ├── terraform/
│   │   └── cloudformation/
│   └── k8s/                    # Kubernetes manifests (opcional)
│
├── docs/                        # Documentación
│   ├── api/                    # Documentación OpenAPI/Swagger
│   ├── architecture/
│   └── user-manual/
│
├── .github/
│   └── workflows/              # GitHub Actions CI/CD
│       ├── ci.yml
│       └── cd.yml
│
├── .env.example
├── .gitignore
└── README.md
        </code></pre>
    </div>

    <h3>Implementación del Backend</h3>

    <p>
        A continuación se presentan extractos de código clave que el alumnado deberá completar 
        y adaptar según las necesidades específicas del proyecto:
    </p>

    <h4>Configuración del Servidor Express</h4>

    <div class="callout callout-warning">
        <div class="callout-title">
            <span>💻</span> Código Base (para completar)
        </div>
        <pre class="text-xs overflow-x-auto mt-3 mb-0"><code class="language-typescript">
// backend/src/app.ts
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';

import { config } from './config';
import { errorMiddleware } from './middlewares/error.middleware';
import { authRoutes } from './routes/auth.routes';
import { eventRoutes } from './routes/events.routes';
import { ticketRoutes } from './routes/tickets.routes';

const app = express();

// Middlewares globales
app.use(helmet());  // Seguridad: headers HTTP
app.use(cors({ origin: config.frontendUrl }));  // CORS
app.use(compression());  // Gzip compression
app.use(express.json({ limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutos
  max: 100  // 100 peticiones por IP
});
app.use('/api/', limiter);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/tickets', ticketRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling global
app.use(errorMiddleware);

export default app;
        </code></pre>
    </div>

    <h4>Servicio de Autenticación con JWT</h4>

    <div class="callout callout-warning">
        <div class="callout-title">
            <span>💻</span> Código Base (para completar)
        </div>
        <pre class="text-xs overflow-x-auto mt-3 mb-0"><code class="language-typescript">
// backend/src/services/auth.service.ts
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserRepository } from '../repositories/user.repository';
import { AppError } from '../utils/errors';
import { config } from '../config';

export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async register(email: string, password: string, nombre: string) {
    // TODO: Validar que el email no existe
    // TODO: Hashear contraseña con bcrypt (saltRounds = 12)
    // TODO: Crear usuario en BD
    // TODO: Retornar usuario sin password
    throw new Error('Implementar lógica de registro');
  }

  async login(email: string, password: string) {
    // TODO: Buscar usuario por email
    // TODO: Verificar contraseña con bcrypt.compare()
    // TODO: Generar JWT token con payload { userId, email, rol }
    // TODO: Configurar expiración (24h)
    // TODO: Retornar token y datos de usuario
    throw new Error('Implementar lógica de login');
  }

  async refreshToken(token: string) {
    // TODO: Verificar token actual
    // TODO: Generar nuevo token
    throw new Error('Implementar refresh de token');
  }
}
        </code></pre>
    </div>

    <h4>Middleware de Autenticación</h4>

    <pre class="text-xs overflow-x-auto bg-slate-800 text-slate-100 p-4 rounded-lg"><code class="language-typescript">
// backend/src/middlewares/auth.middleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config';

export interface AuthRequest extends Request {
  user?: {
    userId: number;
    email: string;
    rol: string;
  };
}

export const authMiddleware = (
  req: AuthRequest, 
  res: Response, 
  next: NextFunction
) => {
  // TODO: Extraer token del header Authorization: Bearer &lt;token&gt;
  // TODO: Verificar token con jwt.verify()
  // TODO: Adjuntar user al request
  // TODO: Manejar errores (token expirado, inválido)
  throw new Error('Implementar middleware de autenticación');
};

export const roleMiddleware = (allowedRoles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    // TODO: Verificar que el rol del usuario está en allowedRoles
    // TODO: Retornar 403 si no tiene permiso
    throw new Error('Implementar middleware de roles');
  };
};
    </code></pre>

    <h3>Implementación del Frontend</h3>

    <h4>Composable de Autenticación (Vue 3 Composition API)</h4>

    <div class="callout callout-warning">
        <div class="callout-title">
            <span>💻</span> Código Base (para completar)
        </div>
        <pre class="text-xs overflow-x-auto mt-3 mb-0"><code class="language-typescript">
// frontend/src/composables/useAuth.ts
import { ref, computed } from 'vue';
import { authService } from '../services/auth.service';
import type { User, LoginCredentials, RegisterData } from '../types';

export function useAuth() {
  const user = ref&lt;User | null&gt;(null);
  const token = ref&lt;string | null&gt;(localStorage.getItem('token'));
  const loading = ref(false);
  const error = ref&lt;string | null&gt;(null);

  const isAuthenticated = computed(() => !!token.value);

  const login = async (credentials: LoginCredentials) => {
    loading.value = true;
    error.value = null;
    try {
      // TODO: Llamar a authService.login()
      // TODO: Guardar token en localStorage
      // TODO: Actualizar user
      // TODO: Redirigir al dashboard
      throw new Error('Implementar login');
    } catch (e) {
      error.value = e.message;
    } finally {
      loading.value = false;
    }
  };

  const register = async (data: RegisterData) => {
    // TODO: Implementar registro
    throw new Error('Implementar register');
  };

  const logout = () => {
    // TODO: Eliminar token de localStorage
    // TODO: Resetear user
    // TODO: Redirigir al home
  };

  return {
    user,
    loading,
    error,
    isAuthenticated,
    login,
    register,
    logout
  };
}
        </code></pre>
    </div>

    <h4>Componente de Listado de Eventos</h4>

    <pre class="text-xs overflow-x-auto bg-slate-800 text-slate-100 p-4 rounded-lg"><code class="language-vue">
&lt;!-- frontend/src/components/events/EventList.vue --&gt;
&lt;script setup lang="ts"&gt;
import { ref, onMounted } from 'vue';
import { eventsService } from '../../services/events.service';
import EventCard from './EventCard.vue';
import type { Event } from '../../types/event';

const events = ref&lt;Event[]&gt;([]);
const loading = ref(true);
const page = ref(1);
const totalPages = ref(1);

const fetchEvents = async () => {
  loading.value = true;
  try {
    // TODO: Llamar a eventsService.getAll(page.value)
    // TODO: Actualizar events y totalPages
    throw new Error('Implementar fetch de eventos');
  } finally {
    loading.value = false;
  }
};

const loadMore = () => {
  // TODO: Incrementar página y cargar más eventos
};

onMounted(() => {
  fetchEvents();
});
&lt;/script&gt;

&lt;template&gt;
  &lt;div class="space-y-6"&gt;
    &lt;div v-if="loading" class="text-center py-12"&gt;
      &lt;div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"&gt;&lt;/div&gt;
    &lt;/div&gt;
    
    &lt;div v-else-if="events.length === 0" class="text-center py-12 text-slate-500"&gt;
      No hay eventos disponibles
    &lt;/div&gt;
    
    &lt;div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"&gt;
      &lt;EventCard 
        v-for="event in events" 
        :key="event.id" 
        :event="event" 
      /&gt;
    &lt;/div&gt;
    
    &lt;div v-if="page &lt; totalPages" class="text-center mt-8"&gt;
      &lt;button @click="loadMore" class="btn btn-primary"&gt;
        Cargar más eventos
      &lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
    </code></pre>

    <h3>Gestión de Estado con Pinia</h3>

    <pre class="text-xs overflow-x-auto bg-slate-800 text-slate-100 p-4 rounded-lg"><code class="language-typescript">
// frontend/src/stores/cart.store.ts
import { defineStore } from 'pinia';
import type { Ticket, TicketType } from '../types';

interface CartItem {
  ticketTypeId: number;
  quantity: number;
  ticketType: TicketType;
}

interface CartState {
  items: CartItem[];
  eventId: number | null;
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: [],
    eventId: null
  }),
  
  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    
    totalPrice: (state) => {
      // TODO: Calcular precio total
      throw new Error('Implementar cálculo de precio');
    },
    
    isEmpty: (state) => state.items.length === 0
  },
  
  actions: {
    addItem(ticketType: TicketType, quantity: number = 1) {
      // TODO: Añadir item al carrito o incrementar cantidad
      throw new Error('Implementar addItem');
    },
    
    removeItem(ticketTypeId: number) {
      // TODO: Eliminar item del carrito
      throw new Error('Implementar removeItem');
    },
    
    updateQuantity(ticketTypeId: number, quantity: number) {
      // TODO: Actualizar cantidad (eliminar si quantity = 0)
      throw new Error('Implementar updateQuantity');
    },
    
    clear() {
      // TODO: Vaciar carrito
      this.items = [];
      this.eventId = null;
    }
  }
});
    </code></pre>

    <div class="callout callout-info">
        <div class="callout-title">
            <span>📝</span> Tareas Pendientes de Implementación
        </div>
        <p>El alumnado deberá completar:</p>
        <ul class="mb-0">
            <li><strong>Backend:</strong> Servicios de eventos y tickets, generación de QR, envío de emails</li>
            <li><strong>Frontend:</strong> Vistas de checkout, dashboard, check-in con escaneo QR</li>
            <li><strong>Tests:</strong> Unitarios (Jest/Vitest) y E2E (Playwright/Cypress) con 80% coverage mínimo</li>
            <li><strong>Documentación:</strong> OpenAPI/Swagger para la API REST</li>
        </ul>
    </div>
</div>
`;
