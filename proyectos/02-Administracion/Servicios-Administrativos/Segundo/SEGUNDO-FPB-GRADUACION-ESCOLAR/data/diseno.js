// Diseño del Proyecto
window.sectionsContent.diseno = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🎨</span>
        <span>Diseño Organizativo</span>
    </div>
    <p class="mb-0">En esta sección definirás la estructura del equipo, las responsabilidades y el plan de acción.</p>
</div>

<h3>5.1. Estructura del Equipo Organizador 👥</h3>

<h4>Organigrama de la Comisión Organizadora</h4>

<p>Diseña un organigrama que muestre cómo se organiza el equipo. Aquí tienes una propuesta:</p>

<div class="callout callout-info" style="font-family: monospace; font-size: 0.75rem; overflow-x: auto; text-align: center;">
                    [Coordinador/a General]
                    (Profesor/a Tutor/a)
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
  [Vicecoord.]      [Secretaria/]       [Responsable]
  (Alumno/a)        [Tesorería]         [Comunicación]
        │                   │                   │
        │                   │                   │
   ┌────┴────┐          ┌───┴───┐          ┌────┴────┐
   │         │          │       │          │         │
[Logística] [Protocolo] [Compras] [Diseño] [Redes/Prensa]
</div>

<h4>Descripción de Puestos y Responsabilidades</h4>

<p>Completa la siguiente tabla asignando responsabilidades concretas:</p>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span>
        <span>Tarea Práctica</span>
    </div>
    <p>Asigna nombres reales del alumnado de tu clase a cada puesto. ¡Todos deben tener una responsabilidad!</p>
</div>

<h4 style="margin-top:0; color:#1e40af;">Equipo de Coordinación</h4>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Puesto</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Nombre</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Responsabilidades</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Horas Estimadas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Coordinador/a General</td>
            <td class="border border-slate-300 px-4 py-2">[Profesor/a]</td>
            <td class="border border-slate-300 px-4 py-2">Supervisión general, firma documentos, enlace con dirección</td>
            <td class="border border-slate-300 px-4 py-2">20h</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">Vicecoordinador/a</td>
            <td class="border border-slate-300 px-4 py-2">[Alumno/a]</td>
            <td class="border border-slate-300 px-4 py-2">Apoyar coordinación, suplencias, reuniones</td>
            <td class="border border-slate-300 px-4 py-2">15h</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Secretaría</td>
            <td class="border border-slate-300 px-4 py-2">[Alumno/a]</td>
            <td class="border border-slate-300 px-4 py-2">Archivo, actas de reuniones, control de asistencia</td>
            <td class="border border-slate-300 px-4 py-2">12h</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">Tesorería</td>
            <td class="border border-slate-300 px-4 py-2">[Alumno/a]</td>
            <td class="border border-slate-300 px-4 py-2">Control presupuestario, pagos, cobros</td>
            <td class="border border-slate-300 px-4 py-2">12h</td>
        </tr>
    </tbody>
</table>

<h4 style="margin-top:0; color:#1e40af;">Equipo de Logística</h4>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Puesto</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Nombre</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Responsabilidades</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Horas Estimadas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Responsable Logística</td>
            <td class="border border-slate-300 px-4 py-2">[Alumno/a]</td>
            <td class="border border-slate-300 px-4 py-2">Reserva espacios, montaje, proveedores</td>
            <td class="border border-slate-300 px-4 py-2">15h</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">Ayudante Logística</td>
            <td class="border border-slate-300 px-4 py-2">[Alumno/a]</td>
            <td class="border border-slate-300 px-4 py-2">Apoyo en montaje, transporte de material</td>
            <td class="border border-slate-300 px-4 py-2">10h</td>
        </tr>
    </tbody>
</table>

<h4 style="margin-top:0; color:#1e40af;">Equipo de Protocolo y Evento</h4>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Puesto</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Nombre</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Responsabilidades</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Horas Estimadas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Responsable Protocolo</td>
            <td class="border border-slate-300 px-4 py-2">[Alumno/a]</td>
            <td class="border border-slate-300 px-4 py-2">Orden del acto, discursos, entrega diplomas</td>
            <td class="border border-slate-300 px-4 py-2">12h</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">Maestría de Ceremonias</td>
            <td class="border border-slate-300 px-4 py-2">[Alumno/a]</td>
            <td class="border border-slate-300 px-4 py-2">Presentación del acto (2 personas)</td>
            <td class="border border-slate-300 px-4 py-2">8h</td>
        </tr>
    </tbody>
</table>

<h4 style="margin-top:0; color:#1e40af;">Equipo de Compras y Proveedores</h4>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Puesto</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Nombre</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Responsabilidades</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Horas Estimadas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Responsable Compras</td>
            <td class="border border-slate-300 px-4 py-2">[Alumno/a]</td>
            <td class="border border-slate-300 px-4 py-2">Búsqueda proveedores, negociación, pedidos</td>
            <td class="border border-slate-300 px-4 py-2">12h</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">Ayudante Compras</td>
            <td class="border border-slate-300 px-4 py-2">[Alumno/a]</td>
            <td class="border border-slate-300 px-4 py-2">Comparativa precios, seguimiento pedidos</td>
            <td class="border border-slate-300 px-4 py-2">8h</td>
        </tr>
    </tbody>
</table>

<h4 style="margin-top:0; color:#1e40af;">Equipo de Comunicación y Diseño</h4>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Puesto</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Nombre</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Responsabilidades</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Horas Estimadas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Responsable Comunicación</td>
            <td class="border border-slate-300 px-4 py-2">[Alumno/a]</td>
            <td class="border border-slate-300 px-4 py-2">Relación con familias, notas informativas</td>
            <td class="border border-slate-300 px-4 py-2">10h</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">Diseñador/a Gráfico</td>
            <td class="border border-slate-300 px-4 py-2">[Alumno/a]</td>
            <td class="border border-slate-300 px-4 py-2">Invitaciones, diplomas, decoración</td>
            <td class="border border-slate-300 px-4 py-2">12h</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Responsable Redes/Prensa</td>
            <td class="border border-slate-300 px-4 py-2">[Alumno/a]</td>
            <td class="border border-slate-300 px-4 py-2">Cobertura evento, fotos, redes sociales</td>
            <td class="border border-slate-300 px-4 py-2">10h</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span>
        <span>Consejo de Gestión de Equipos</span>
    </div>
    <p>Rotad algunas responsabilidades para que todo el alumnado experimente diferentes áreas. ¡El aprendizaje será más completo!</p>
</div>

<h3>5.2. Plan de Acción Detallado 📅</h3>

<h4>Cronograma de Actividades (Gantt)</h4>

<p>Crea un diagrama de Gantt con las principales actividades. Usa Excel o herramientas online como <strong>TeamGantt</strong> o <strong>ClickUp</strong>.</p>

<h4 style="margin-top:0; color:#1e40af;">Fases del Proyecto</h4>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Fase</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Actividades Principales</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Duración</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Fechas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2"><strong>Fase 1: Planificación</strong></td>
            <td class="border border-slate-300 px-4 py-2">Constitución equipo, investigación, primeros presupuestos</td>
            <td class="border border-slate-300 px-4 py-2">3 semanas</td>
            <td class="border border-slate-300 px-4 py-2">1-21 Marzo</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2"><strong>Fase 2: Preparación</strong></td>
            <td class="border border-slate-300 px-4 py-2">Aprobaciones, diseño, apertura de reservas</td>
            <td class="border border-slate-300 px-4 py-2">4 semanas</td>
            <td class="border border-slate-300 px-4 py-2">22 Marzo - 18 Abril</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2"><strong>Fase 3: Organización</strong></td>
            <td class="border border-slate-300 px-4 py-2">Confirmar proveedores, cerrar presupuestos, imprimir material</td>
            <td class="border border-slate-300 px-4 py-2">3 semanas</td>
            <td class="border border-slate-300 px-4 py-2">19 Abril - 9 Mayo</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2"><strong>Fase 4: Ejecución</strong></td>
            <td class="border border-slate-300 px-4 py-2">Montaje, celebración del evento, desmontaje</td>
            <td class="border border-slate-300 px-4 py-2">1 semana</td>
            <td class="border border-slate-300 px-4 py-2">10-16 Mayo</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2"><strong>Fase 5: Cierre</strong></td>
            <td class="border border-slate-300 px-4 py-2">Evaluación, agradecimientos, informe final</td>
            <td class="border border-slate-300 px-4 py-2">2 semanas</td>
            <td class="border border-slate-300 px-4 py-2">17-30 Mayo</td>
        </tr>
    </tbody>
</table>

<h4>Checklist Semanal de Seguimiento</h4>

<p>Cada semana, el equipo debe reunirse y completar:</p>

<h4 style="margin-top:0; color:#1e40af;">Reunión Semanal - Semana del [FECHA]</h4>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Punto</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Estado</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Observaciones</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Responsable</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Revisión tareas semana anterior</td>
            <td class="border border-slate-300 px-4 py-2">⬜ Completado</td>
            <td class="border border-slate-300 px-4 py-2"></td>
            <td class="border border-slate-300 px-4 py-2">Secretario/a</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">Incidencias detectadas</td>
            <td class="border border-slate-300 px-4 py-2">⬜ Sin incidencias / ⬜ Con incidencias</td>
            <td class="border border-slate-300 px-4 py-2">Detallar:</td>
            <td class="border border-slate-300 px-4 py-2">Coordinador/a</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Tareas para esta semana</td>
            <td class="border border-slate-300 px-4 py-2">Listar:</td>
            <td class="border border-slate-300 px-4 py-2"></td>
            <td class="border border-slate-300 px-4 py-2">Todos</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">Presupuesto actualizado</td>
            <td class="border border-slate-300 px-4 py-2">⬜ Revisado</td>
            <td class="border border-slate-300 px-4 py-2">Ingresos: ___€ / Gastos: ___€</td>
            <td class="border border-slate-300 px-4 py-2">Tesorería</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Próxima reunión</td>
            <td class="border border-slate-300 px-4 py-2">Fecha:</td>
            <td class="border border-slate-300 px-4 py-2">Hora:</td>
            <td class="border border-slate-300 px-4 py-2">Todos</td>
        </tr>
    </tbody>
</table>

<h3>5.3. Diseño del Evento 🎭</h3>

<h4>Programa del Acto de Graduación</h4>

<p>Diseña el orden del acto. Aquí tienes una propuesta base:</p>

<h4 style="margin-top:0; color:#1e40af;">Orden del Acto - Graduación 2026</h4>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Tiempo</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Momento</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Descripción</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Responsable</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2">17:00 - 17:30</td>
            <td class="border border-slate-300 px-4 py-2"><strong>Acogida</strong></td>
            <td class="border border-slate-300 px-4 py-2">Llegada de graduandos y familias, entrega de programas</td>
            <td class="border border-slate-300 px-4 py-2">Equipo de Protocolo</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">17:30 - 17:35</td>
            <td class="border border-slate-300 px-4 py-2"><strong>Inicio</strong></td>
            <td class="border border-slate-300 px-4 py-2">Bienvenida y presentación del acto</td>
            <td class="border border-slate-300 px-4 py-2">Maestro/a de Ceremonias</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2">17:35 - 17:45</td>
            <td class="border border-slate-300 px-4 py-2"><strong>Himno/Identidad</strong></td>
            <td class="border border-slate-300 px-4 py-2">Himno del centro o minuto de silencio si procede</td>
            <td class="border border-slate-300 px-4 py-2">Todo el público</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">17:45 - 17:55</td>
            <td class="border border-slate-300 px-4 py-2"><strong>Discurso Dirección</strong></td>
            <td class="border border-slate-300 px-4 py-2">Palabras del equipo directivo</td>
            <td class="border border-slate-300 px-4 py-2">Director/a del Centro</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2">17:55 - 18:10</td>
            <td class="border border-slate-300 px-4 py-2"><strong>Discurso Graduandos</strong></td>
            <td class="border border-slate-300 px-4 py-2">Representante del alumnado graduando</td>
            <td class="border border-slate-300 px-4 py-2">Alumno/a 4º ESO / FPB</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">18:10 - 18:40</td>
            <td class="border border-slate-300 px-4 py-2"><strong>Entrega de Diplomas</strong></td>
            <td class="border border-slate-300 px-4 py-2">Llamada por orden alfabético, foto en escenario</td>
            <td class="border border-slate-300 px-4 py-2">Equipo Directivo + Coordinación</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2">18:40 - 18:50</td>
            <td class="border border-slate-300 px-4 py-2"><strong>Actuación Especial</strong></td>
            <td class="border border-slate-300 px-4 py-2">Música, vídeo conmemorativo, sorpresa</td>
            <td class="border border-slate-300 px-4 py-2">Alumnado colaborador</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">18:50 - 19:00</td>
            <td class="border border-slate-300 px-4 py-2"><strong>Despedida y Brindis</strong></td>
            <td class="border border-slate-300 px-4 py-2">Palabras finales e invitación al brindis</td>
            <td class="border border-slate-300 px-4 py-2">Maestro/a de Ceremonias</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2">19:00 - 20:00</td>
            <td class="border border-slate-300 px-4 py-2"><strong>Foto Oficial y Felicitaciones</strong></td>
            <td class="border border-slate-300 px-4 py-2">Fotos de grupo y tiempo para felicitar</td>
            <td class="border border-slate-300 px-4 py-2">Todos</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-info">
    <div class="callout-title">
        <span>🎵</span>
        <span>Ideas para Momentos Especiales</span>
    </div>
    <ul class="my-4 space-y-2">
        <li><strong>Vídeo conmemorativo:</strong> Recopilación de fotos y vídeos de lo largo de los cursos</li>
        <li><strong>Actuación musical:</strong> Alumnado con talento puede preparar una canción</li>
        <li><strong>Árbol de los deseos:</strong> Cada graduando escribe un deseo para el futuro</li>
        <li><strong>Cápsula del tiempo:</strong> Guardar mensajes para abrir en 5 o 10 años</li>
    </ul>
</div>

<h4>Diseño de la Imagen Corporativa</h4>

<p>Crea una identidad visual para el evento:</p>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Elemento</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Descripción</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Herramienta Recomendada</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2">🎨 <strong>Logotipo</strong></td>
            <td class="border border-slate-300 px-4 py-2">Diseño con Graduación 2026 y elementos del centro</td>
            <td class="border border-slate-300 px-4 py-2">Canva</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">🎨 <strong>Paleta de colores</strong></td>
            <td class="border border-slate-300 px-4 py-2">2-3 colores principales (ej: azul dorado blanco)</td>
            <td class="border border-slate-300 px-4 py-2">Coolors.co</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2">🎨 <strong>Tipografía</strong></td>
            <td class="border border-slate-300 px-4 py-2">1-2 fuentes para todos los materiales</td>
            <td class="border border-slate-300 px-4 py-2">Google Fonts</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">🎨 <strong>Lema/Motto</strong></td>
            <td class="border border-slate-300 px-4 py-2">Frase inspiradora para la promoción</td>
            <td class="border border-slate-300 px-4 py-2">Lluvia de ideas</td>
        </tr>
    </tbody>
</table>

<h4 style="margin-top:0; color:#1e40af;">Ejemplo de Aplicación de Imagen Corporativa</h4>

<table class="w-full border-collapse border border-slate-300 my-6">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-2 text-left">Material</th>
            <th class="border border-slate-300 px-4 py-2 text-left">Uso de la Imagen</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Invitaciones</td>
            <td class="border border-slate-300 px-4 py-2">Logo + colores + tipografía</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">Diplomas</td>
            <td class="border border-slate-300 px-4 py-2">Mismos colores y fuentes</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Programa del acto</td>
            <td class="border border-slate-300 px-4 py-2">Diseño coherente</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-2">Decoración</td>
            <td class="border border-slate-300 px-4 py-2">Globos, pancartas con colores</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-2">Photocall</td>
            <td class="border border-slate-300 px-4 py-2">Fondo con logo para fotos</td>
        </tr>
    </tbody>
</table>

<h3>5.4. Espacio y Decoración 🏛️</h3>

<h4>Plano del Espacio</h4>

<p>Dibuja un plano del espacio donde se celebrará el evento indicando:</p>

<ul class="my-4 space-y-2">
    <li>🎭 <strong>Escenario/Zona de entrega de diplomas</strong></li>
    <li>🪑 <strong>Asientos de graduandos</strong> (primera fila)</li>
    <li>👨‍👩‍👧‍👦 <strong>Asientos de familias</strong> (detrás)</li>
    <li>📷 <strong>Zona de fotos</strong></li>
    <li>🍽️ <strong>Zona de brindis/merienda</strong> (si procede)</li>
    <li>🚪 <strong>Salidas de emergencia</strong></li>
    <li>♿ <strong>Zona accesible</strong></li>
</ul>

<h4>Checklist de Decoración</h4>

<ul class="my-4 space-y-2">
    <li>Definir estilo de decoración (elegante, moderno, temático)</li>
    <li>Lista de materiales necesarios (globos, flores, telas, etc.)</li>
    <li>Presupuesto de decoración aprobado</li>
    <li>Equipo de montaje asignado</li>
    <li>Plan de desmontaje post-evento</li>
</ul>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>♻️</span>
        <span>Decoración Sostenible</span>
    </div>
    <p>Considera opciones eco-friendly: plantas en lugar de flores cortadas, materiales reutilizables, decoración digital en pantallas en lugar de impresos.</p>
</div>

<h3>5.5. Checklist de Diseño ✅</h3>

<p>Antes de pasar a la implementación, verifica:</p>

<ul class="my-4 space-y-2">
    <li>Organigrama del equipo completo con nombres</li>
    <li>Descripción de responsabilidades asignadas</li>
    <li>Cronograma de actividades detallado</li>
    <li>Programa del acto diseñado</li>
    <li>Imagen corporativa definida</li>
    <li>Plano del espacio preparado</li>
    <li>Plan de decoración aprobado</li>
</ul>

<div class="callout callout-info">
    <div class="callout-title">
        <span>💡</span>
        <span>Consejo Final de Diseño</span>
    </div>
    <p class="mb-0">Un buen diseño es la base de un evento exitoso. ¡Dedica tiempo a esta sección y evita muchos problemas durante la ejecución!</p>
</div>
`;
