// Lista centralizada de proyectos intermodulares
// Estructura: Array de objetos con propiedades de cada proyecto

const PROJECTS = [
    // ==================== ADMINISTRACIÓN ====================
    
    // GS-ASID - Segundo
    {
        id: "gs-asid-plan-empresa-startup",
        title: "Plan de Empresa: Startup de Torrent",
        family: "Administración",
        cycle: "GS-ASID",
        course: "Segundo Curso",
        emoji: "💼",
        gradient: "from-blue-500 to-indigo-600",
        category: "green",
        description: "Plan de empresa completo para Turia Innovation Labs S.L., una startup de consultoría tecnológica.",
        url: "./proyectos/02-Administracion/GS-ASID/Segundo/SEGUNDO-ASID-PLAN-EMPRESA-STARTUP-TORRENT/proyecto.html"
    },
    
    // GS-ASID - Segundo (Feria del Libro)
    {
        id: "gs-asid-feria-libro",
        title: "Feria del Libro - IES Serra Perenxisa (Torrent)",
        family: "Administración",
        cycle: "GS-ASID",
        course: "Segundo Curso",
        emoji: "📚",
        gradient: "from-rose-500 to-pink-600",
        category: "green",
        description: "Organización integral de la Feria del Libro del IES Serra Perenxisa de Torrent, con actividades de fomento lector, autores invitados y plan de mejora.",
        url: "./proyectos/02-Administracion/GS-ASID/Segundo/SEGUNDO-ASID-FERIA-LIBRO/proyecto.html"
    },
    
    // GS-ADMF - Segundo (Transformación Digital)
    {
        id: "gs-admf-transformacion-digital",
        title: "Transformación Digital en PYME: Caso Práctico de Digitalización Empresarial",
        family: "Administración",
        cycle: "GS-ADMF",
        course: "Segundo Curso",
        emoji: "🔄",
        gradient: "from-teal-500 to-cyan-600",
        category: "green",
        description: "Plan integral de transformación digital para AUDIX Consultoría: análisis financiero, viabilidad, implementación en fases y gestión del cambio organizacional.",
        url: "./proyectos/02-Administracion/GS-ADMF/Segundo/SEGUNDO-ADMF-TRANSFORMACION-DIGITAL/proyecto.html"
    },
    
    // GM-ADM - Segundo
    {
        id: "gm-adm-gestoria-digital",
        title: "Gestoría Digital - Servicios Online",
        family: "Administración",
        cycle: "GM-ADM",
        course: "Segundo Curso",
        emoji: "📊",
        gradient: "from-emerald-500 to-green-600",
        category: "green",
        description: "Plan de empresa para una gestoría online de servicios administrativos, contables y fiscales para autónomos y pymes.",
        url: "./proyectos/02-Administracion/GM-ADM/Segundo/SEGUNDO-GM-ADM-GESTORIA-DIGITAL/proyecto.html"
    },
    
    // FPB - Servicios Administrativos (Spin-off Marketing)
    {
        id: "fpb-spinoff-marketing",
        title: "Creación de Spin-off: Marketing Digital",
        family: "Administración",
        cycle: "FPB",
        course: "Segundo Curso",
        emoji: "🚀",
        gradient: "from-amber-500 to-orange-600",
        category: "green",
        description: "Proyecto para crear una spin-off de marketing digital y publicidad para comercios locales. Incluye trámites, DAFO y plan financiero.",
        url: "./proyectos/02-Administracion/Servicios-Administrativos/Segundo/SEGUNDO-FPB-SPINOFF-MARKETING/proyecto.html"
    },
    
    // FPB - Servicios Administrativos (Graduación Escolar)
    {
        id: "fpb-graduacion-escolar",
        title: "Organización y Gestión de Graduación Escolar",
        family: "Administración",
        cycle: "FPB",
        course: "Segundo Curso - FP Básica",
        emoji: "🎓",
        gradient: "from-blue-500 to-cyan-600",
        category: "green",
        description: "Proyecto para organizar y gestionar la graduación del centro. Aplicación práctica de competencias administrativas básicas.",
        url: "./proyectos/02-Administracion/Servicios-Administrativos/Segundo/SEGUNDO-FPB-GRADUACION-ESCOLAR/proyecto.html"
    },

    // ==================== INFORMÁTICA ====================
    
    // ASIR - Segundo (Telemedicina)
    {
        id: "asir-telemedicina-cloud",
        title: "Telemedicina en la Nube",
        family: "Informática",
        cycle: "ASIR",
        course: "Segundo Curso",
        emoji: "☁️",
        gradient: "from-purple-500 to-pink-600",
        category: "purple",
        description: "Plataforma cloud para consultas médicas telemáticas con infraestructura AWS/Azure.",
        url: "./proyectos/01-Informatica/ASIR/Segundo/SEGUNDO-ASIR-TELEMEDICINA-CLOUD/proyecto.html"
    },
    
    // ASIR - Segundo (Cloud Automatización)
    {
        id: "asir-cloud-automatizacion",
        title: "Cloud y Automatización de Infraestructuras",
        family: "Informática",
        cycle: "ASIR",
        course: "Segundo Curso",
        emoji: "⚙️",
        gradient: "from-cyan-500 to-blue-600",
        category: "purple",
        description: "Automatización de despliegues cloud con infraestructura como código, CI/CD y monitorización de sistemas distribuidos.",
        url: "./proyectos/01-Informatica/ASIR/Segundo/SEGUNDO-ASIR-CLOUD-AUTOMATIZACION/index.html"
    },
    
    // DAM - Segundo (App de Citas Médicas)
    {
        id: "dam-app-citas-medicas",
        title: "App de Citas Médicas",
        family: "Informática",
        cycle: "DAM",
        course: "Segundo Curso",
        emoji: "📱",
        gradient: "from-green-500 to-teal-600",
        category: "purple",
        description: "Aplicación móvil para gestión de citas médicas con backend REST y base de datos.",
        url: "./proyectos/01-Informatica/DAM/Segundo/SEGUNDO-DAM-APP-CITAS-MEDICAS/proyecto.html"
    },
    
    // DAM - Segundo (LogiScan Pro)
    {
        id: "dam-logistica-odoo-flutter",
        title: "LogiScan Pro - Gestión Logística con Odoo y Flutter",
        family: "Informática",
        cycle: "DAM",
        course: "Segundo Curso",
        emoji: "📦",
        gradient: "from-indigo-500 to-blue-600",
        category: "purple",
        description: "Sistema de escaneo de paquetes con app Flutter integrada con Odoo. Notificaciones push, códigos QR/barras y sincronización offline.",
        url: "./proyectos/01-Informatica/DAM/Segundo/SEGUNDO-DAM-LOGISTICA-ODOO-FLUTTER/proyecto.html"
    },
    
    // SMR - Segundo
    {
        id: "smr-monitorizacion-parque",
        title: "Monitorización de Parque Microinformático",
        family: "Informática",
        cycle: "SMR",
        course: "Segundo Curso",
        emoji: "🖥️",
        gradient: "from-cyan-500 to-blue-600",
        category: "purple",
        description: "Sistema integral de monitorización con Zabbix 7.0 para 400+ equipos del centro educativo.",
        url: "./proyectos/01-Informatica/SMR/Segundo/SEGUNDO-SMR-MONITORIZACION-PARQUE/proyecto.html"
    },
    
    // DAW - Segundo
    {
        id: "daw-plataforma-eventos",
        title: "EventHub Pro - Plataforma de Gestión de Eventos",
        family: "Informática",
        cycle: "DAW",
        course: "Segundo Curso",
        emoji: "🎫",
        gradient: "from-indigo-500 to-purple-600",
        category: "purple",
        description: "Plataforma web integral para gestión de eventos con venta de entradas, check-in QR y dashboard en tiempo real.",
        url: "./proyectos/01-Informatica/DAW/Segundo/SEGUNDO-DAW-PLATAFORMA-EVENTOS/proyecto.html"
    },

    // ==================== COMERCIO ====================
    
    // FPB Servicios Comerciales - Segundo
    {
        id: "fpb-comercio-online",
        title: "EcoMarket Valencia - Tienda Online Ecológica",
        family: "Comercio",
        cycle: "FPB",
        course: "Segundo Curso",
        emoji: "🛒",
        gradient: "from-amber-500 to-orange-600",
        category: "orange",
        description: "Tienda online de productos ecológicos y de proximidad. Digitalización del comercio local con WooCommerce.",
        url: "./proyectos/03-Comercio/SERVICIOS-COMERCIALES/Segundo/SEGUNDO-FPB-COMERCIO-ONLINE/proyecto.html"
    }
];

// Función helper para obtener proyectos por familia
function getProjectsByFamily(family) {
    return PROJECTS.filter(p => p.family === family);
}

// Función helper para obtener proyectos por ciclo
function getProjectsByCycle(cycle) {
    return PROJECTS.filter(p => p.cycle === cycle);
}

// Función helper para obtener el badge de categoría HTML
function getCategoryBadge(category) {
    const badges = {
        green: { bg: "bg-green-100", text: "text-green-700", label: "Administración" },
        purple: { bg: "bg-purple-100", text: "text-purple-700", label: "Informática" },
        orange: { bg: "bg-orange-100", text: "text-orange-700", label: "Comercio" }
    };
    const badge = badges[category] || badges.green;
    return `<span class="px-3 py-1 ${badge.bg} ${badge.text} text-xs font-semibold rounded-full">${badge.label}</span>`;
}

// Función helper para generar HTML de tarjeta de proyecto
function generateProjectCard(project) {
    return `
        <a href="${project.url}" 
           target="_blank"
           class="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group">
            <div class="h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center">
                <span class="text-6xl opacity-80 group-hover:opacity-100 transition">${project.emoji}</span>
            </div>
            <div class="p-6">
                <div class="flex items-center gap-2 mb-3">
                    ${getCategoryBadge(project.category)}
                    <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">${project.cycle}</span>
                </div>
                <h4 class="font-bold text-lg text-slate-800 mb-2 group-hover:text-blue-600 transition">
                    ${project.title}
                </h4>
                <p class="text-sm text-slate-600 mb-4">
                    ${project.description}
                </p>
                <div class="flex items-center justify-between text-xs text-slate-500">
                    <span>${project.course}</span>
                    <span class="flex items-center gap-1 text-blue-600 font-semibold">
                        Ver proyecto <span>→</span>
                    </span>
                </div>
            </div>
        </a>
    `;
}

// Función para generar todas las tarjetas de proyectos
function generateAllProjectCards() {
    return PROJECTS.map(project => generateProjectCard(project)).join("");
}
