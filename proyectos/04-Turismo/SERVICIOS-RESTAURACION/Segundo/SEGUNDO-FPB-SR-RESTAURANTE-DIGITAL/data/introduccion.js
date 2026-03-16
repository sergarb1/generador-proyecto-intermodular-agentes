window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.introduccion = `
<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>👋</span>
        <span>Bienvenida al Proyecto</span>
    </div>
    <p class="mb-0">En esta sección conocerás el contexto real del restaurante y la problemática que debemos resolver mediante la digitalización de sus procesos.</p>
</div>

<h2>1.1. Contexto del Establecimiento 🏪</h2>

<p><strong>"El Rincón del Sabor"</strong> es un restaurante familiar ubicado en el centro histórico de Valencia, especializado en cocina mediterránea tradicional con productos de proximidad (kilómetro cero).</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
        <h4 class="font-bold text-slate-700 mb-3">📍 Ubicación</h4>
        <ul class="space-y-2 text-sm">
            <li><strong>Zona:</strong> Ciutat Vella, Valencia</li>
            <li><strong>Superficie:</strong> 120 m²</li>
            <li><strong>Capacidad:</strong> 45 comensales</li>
            <li><strong>Temporada:</strong> Todo el año</li>
        </ul>
    </div>
    <div class="p-6 bg-slate-50 rounded-xl border border-slate-200">
        <h4 class="font-bold text-slate-700 mb-3">👥 Equipo</h4>
        <ul class="space-y-2 text-sm">
            <li><strong>Propietarios:</strong> 2 (gestión familiar)</li>
            <li><strong>Cocina:</strong> 3 personas</li>
            <li><strong>Sala:</strong> 4 personas</li>
            <li><strong>Administración:</strong> 1 persona</li>
        </ul>
    </div>
</div>

<h3>📅 Situación Actual del Restaurante</h3>
<p>El restaurante lleva <strong>15 años en el mercado</strong> y ha mantenido una clientela fiel de proximidad. Sin embargo, en los últimos 2 años ha experimentado:</p>

<ul class="list-disc pl-6 space-y-2">
    <li><strong>Descenso del 35%</strong> en reservas telefónicas tradicionales</li>
    <li><strong>Pérdida de clientes jóvenes</strong> (18-35 años) que buscan experiencias digitales</li>
    <li><strong>Aumento de competidores</strong> con presencia digital activa</li>
    <li><strong>Dificultad para gestionar</strong> reservas y no-shows (clientes que no asisten)</li>
    <li><strong>Falta de visibilidad</strong> en plataformas digitales y redes sociales</li>
</ul>

<hr class="my-8">

<h2>1.2. Problemática Crítica ⚠️</h2>

<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>🚨</span>
        <span>Problemas Detectados</span>
    </div>
    <ul class="space-y-3">
        <li><strong>Pérdida de reservas:</strong> El 20% de las llamadas se pierden por no poder atender en horas punta</li>
        <li><strong>No-shows sin control:</strong> Aproximadamente 8-10 reservas semanales sin confirmar ni cancelar</li>
        <li><strong>Carta desactualizada:</strong> Los cambios de menú y precios requieren reimprimir 200 copias cada vez</li>
        <li><strong>Cero datos de clientes:</strong> No hay registro de preferencias, alergias o historial de visitas</li>
        <li><strong>Redes sociales abandonadas:</strong> Última publicación en Instagram hace 8 meses</li>
    </ul>
</div>

<h3>💰 Impacto Económico Estimado</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 p-3 text-left">Concepto</th>
            <th class="border border-slate-300 p-3 text-center">Pérdida Mensual</th>
            <th class="border border-slate-300 p-3 text-center">Pérdida Anual</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 p-3">No-shows (40 reservas/mes × 25€)</td>
            <td class="border border-slate-300 p-3 text-center">1.000€</td>
            <td class="border border-slate-300 p-3 text-center">12.000€</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3">Llamadas no atendidas</td>
            <td class="border border-slate-300 p-3 text-center">600€</td>
            <td class="border border-slate-300 p-3 text-center">7.200€</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-3">Reimpresión de cartas</td>
            <td class="border border-slate-300 p-3 text-center">150€</td>
            <td class="border border-slate-300 p-3 text-center">1.800€</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 p-3"><strong>TOTAL ESTIMADO</strong></td>
            <td class="border border-slate-300 p-3 text-center font-bold">1.750€</td>
            <td class="border border-slate-300 p-3 text-center font-bold">21.000€</td>
        </tr>
    </tbody>
</table>

<hr class="my-8">

<h2>1.3. Propuesta de Transformación Digital 💡</h2>

<p>Este proyecto propone una <strong>transformación digital progresiva y sostenible</strong>, adaptada a las necesidades reales del restaurante y a la formación del alumnado de FP Básica en Servicios en Restauración.</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-xl border border-blue-100">
        <div class="text-4xl mb-3">📱</div>
        <h4 class="font-bold text-blue-700 mb-2">Reservas Online</h4>
        <p class="text-sm text-blue-800">Sistema web integrado con confirmación automática por email y SMS</p>
    </div>
    <div class="p-6 bg-green-50 rounded-xl border border-green-100">
        <div class="text-4xl mb-3">🍽️</div>
        <h4 class="font-bold text-green-700 mb-2">Carta Digital QR</h4>
        <p class="text-sm text-green-800">Menú accesible desde el móvil con fotos, alérgenos y sugerencias</p>
    </div>
    <div class="p-6 bg-purple-50 rounded-xl border border-purple-100">
        <div class="text-4xl mb-3">⭐</div>
        <h4 class="font-bold text-purple-700 mb-2">Experiencia Cliente</h4>
        <p class="text-sm text-purple-800">Protocolo de atención personalizado con registro de preferencias</p>
    </div>
</div>

<hr class="my-8">

<h2>1.4. Objetivos SMART 🎯</h2>

<div class="callout callout-success my-6">
    <div class="callout-title">
        <span>✅</span>
        <span>Metas Cuantificables</span>
    </div>
    <table class="w-full my-4">
        <thead>
            <tr class="bg-green-100">
                <th class="border border-green-300 p-3 text-left">Objetivo</th>
                <th class="border border-green-300 p-3 text-left">Medida</th>
                <th class="border border-green-300 p-3 text-center">Plazo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-green-300 p-3"><strong>Digitalizar reservas</strong></td>
                <td class="border border-green-300 p-3">60% de reservas online</td>
                <td class="border border-green-300 p-3 text-center">3 meses</td>
            </tr>
            <tr class="bg-green-50">
                <td class="border border-green-300 p-3"><strong>Reducir no-shows</strong></td>
                <td class="border border-green-300 p-3">Del 20% al 5%</td>
                <td class="border border-green-300 p-3 text-center">2 meses</td>
            </tr>
            <tr>
                <td class="border border-green-300 p-3"><strong>Aumentar seguidores</strong></td>
                <td class="border border-green-300 p-3">De 200 a 1.000 en Instagram</td>
                <td class="border border-green-300 p-3 text-center">6 meses</td>
            </tr>
            <tr class="bg-green-50">
                <td class="border border-green-300 p-3"><strong>Mejorar valoraciones</strong></td>
                <td class="border border-green-300 p-3">De 3.8 a 4.5 estrellas en Google</td>
                <td class="border border-green-300 p-3 text-center">4 meses</td>
            </tr>
        </tbody>
    </table>
</div>

<hr class="my-8">

<h2>1.5. Estructura del Proyecto 📋</h2>

<p>A lo largo de este proyecto intermodular, trabajarás en las siguientes áreas:</p>

<ol class="list-decimal pl-6 space-y-3">
    <li><strong>Estado del Arte:</strong> Investigarás las tendencias actuales en digitalización de restaurantes</li>
    <li><strong>Estudio de Viabilidad:</strong> Analizarás costes, beneficios y retorno de la inversión</li>
    <li><strong>Análisis de Requisitos:</strong> Definirás qué necesita el restaurante y su clientela</li>
    <li><strong>Diseño:</strong> Crearás la estructura del sistema de reservas y la carta digital</li>
    <li><strong>Implementación:</strong> Configurarás las herramientas seleccionadas</li>
    <li><strong>Administración:</strong> Establecerás protocolos de gestión diaria</li>
    <li><strong>Herramientas:</strong> Aprenderás a usar plataformas digitales del sector</li>
    <li><strong>Conclusiones:</strong> Reflexionarás sobre el aprendizaje obtenido</li>
</ol>

<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>💡</span>
        <span>Consejo para el Alumnado</span>
    </div>
    <p class="mb-0">Este proyecto te prepara para el <strong>mundo laboral real</strong>. Cada sección está diseñada para que desarrolles competencias que usarás en tu futuro profesional en el sector de la restauración.</p>
</div>
`;
