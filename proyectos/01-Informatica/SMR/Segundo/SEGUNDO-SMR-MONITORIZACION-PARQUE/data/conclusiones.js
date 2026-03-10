window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.conclusiones = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🏁</span>
        <span>Conclusiones y Líneas Futuras</span>
    </div>
    <p>
        Esta sección presenta las conclusiones del proyecto, valorando los objetivos alcanzados, 
        las dificultades encontradas y las posibles líneas de evolución futura del sistema.
    </p>
</div>

<h3>9.1. Valoración de Objetivos</h3>

<h4>Objetivos Cumplidos</h4>
<div class="bg-green-50 rounded-lg p-6 my-6 border border-green-200">
    <ul class="space-y-3">
        <li class="flex items-start gap-3">
            <span class="text-green-600 text-xl">✅</span>
            <div>
                <strong class="text-green-800">RF-01: Monitorización de Estado</strong>
                <p class="text-green-700 mt-1">Implementada con ICMP ping cada 60 segundos. Cobertura del 100% de los 400 equipos.</p>
            </div>
        </li>
        <li class="flex items-start gap-3">
            <span class="text-green-600 text-xl">✅</span>
            <div>
                <strong class="text-green-800">RF-02: Monitorización de Prestaciones</strong>
                <p class="text-green-700 mt-1">Métricas de CPU, RAM, disco y red recopiladas cada 5 minutos con agentes Zabbix 2.</p>
            </div>
        </li>
        <li class="flex items-start gap-3">
            <span class="text-green-600 text-xl">✅</span>
            <div>
                <strong class="text-green-800">RF-03: Sistema de Alertas</strong>
                <p class="text-green-700 mt-1">Alertas configuradas con 5 niveles de severidad y umbrales personalizables.</p>
            </div>
        </li>
        <li class="flex items-start gap-3">
            <span class="text-green-600 text-xl">✅</span>
            <div>
                <strong class="text-green-800">RF-04: Notificaciones Multicanal</strong>
                <p class="text-green-700 mt-1">Email y Telegram operativos para alertas críticas con tiempo de entrega &lt; 30 segundos.</p>
            </div>
        </li>
        <li class="flex items-start gap-3">
            <span class="text-green-600 text-xl">✅</span>
            <div>
                <strong class="text-green-800">RF-05: Inventario Automático</strong>
                <p class="text-green-700 mt-1">Recolección diaria de hardware y software con precisión del 98%+.</p>
            </div>
        </li>
        <li class="flex items-start gap-3">
            <span class="text-green-600 text-xl">✅</span>
            <div>
                <strong class="text-green-800">RF-06: Dashboards Visuales</strong>
                <p class="text-green-700 mt-1">3 dashboards creados: NOC principal, técnico y de inventario.</p>
            </div>
        </li>
    </ul>
</div>

<h4>Objetivos Parcialmente Cumplidos</h4>
<div class="bg-yellow-50 rounded-lg p-6 my-6 border border-yellow-200">
    <ul class="space-y-3">
        <li class="flex items-start gap-3">
            <span class="text-yellow-600 text-xl">⚠️</span>
            <div>
                <strong class="text-yellow-800">RF-07: Reportes Históricos</strong>
                <p class="text-yellow-700 mt-1">Reportes básicos implementados. Pendiente automatización de envío programado y personalización avanzada de plantillas PDF.</p>
            </div>
        </li>
        <li class="flex items-start gap-3">
            <span class="text-yellow-600 text-xl">⚠️</span>
            <div>
                <strong class="text-yellow-800">RNF-04: Integración LDAP</strong>
                <p class="text-yellow-700 mt-1">Autenticación LDAP configurada pero pendiente de sincronización completa con Active Directory del centro.</p>
            </div>
        </li>
    </ul>
</div>

<h3>9.2. Métricas de Éxito del Proyecto</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Métrica</th>
            <th class="border border-slate-200 p-3 text-left">Antes del Proyecto</th>
            <th class="border border-slate-200 p-3 text-left">Después del Proyecto</th>
            <th class="border border-slate-200 p-3 text-left">Mejora</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Tiempo medio de detección de incidencias</td>
            <td class="border border-slate-200 p-3">4-24 horas</td>
            <td class="border border-slate-200 p-3">1-3 minutos</td>
            <td class="border border-slate-200 p-3"><span class="text-green-600 font-bold">99% ↓</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Visitas técnicas innecesarias</td>
            <td class="border border-slate-200 p-3">~40% del total</td>
            <td class="border border-slate-200 p-3">~10% del total</td>
            <td class="border border-slate-200 p-3"><span class="text-green-600 font-bold">75% ↓</span></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Precisión del inventario</td>
            <td class="border border-slate-200 p-3">~70% (manual)</td>
            <td class="border border-slate-200 p-3">~98% (automático)</td>
            <td class="border border-slate-200 p-3"><span class="text-green-600 font-bold">40% ↑</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Tiempo de actualización de inventario</td>
            <td class="border border-slate-200 p-3">2-4 semanas (manual)</td>
            <td class="border border-slate-200 p-3">24 horas (automático)</td>
            <td class="border border-slate-200 p-3"><span class="text-green-600 font-bold">95% ↓</span></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Disponibilidad del parque informático</td>
            <td class="border border-slate-200 p-3">~92%</td>
            <td class="border border-slate-200 p-3">~97%</td>
            <td class="border border-slate-200 p-3"><span class="text-green-600 font-bold">5% ↑</span></td>
        </tr>
    </tbody>
</table>

<h3>9.3. Dificultades Encontradas</h3>

<h4>Dificultades Técnicas</h4>
<ul class="space-y-2 my-4">
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">🔴</span>
        <div>
            <strong>Configuración inicial de PostgreSQL:</strong> La optimización de parámetros (shared_buffers, work_mem) requirió múltiples iteraciones para encontrar el equilibrio entre rendimiento y estabilidad.
        </div>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-orange-500 mt-1">🟠</span>
        <div>
            <strong>Despliegue masivo de agentes Windows:</strong> Las políticas de grupo del dominio requerían ajustes específicos para cada OU. Se resolvió creando GPOs diferenciadas por tipo de equipo.
        </div>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-yellow-500 mt-1">🟡</span>
        <div>
            <strong>Falsos positivos en alertas:</strong> Durante las primeras semanas, los umbrales demasiado sensibles generaban alertas innecesarias. Se ajustaron progresivamente basándose en datos históricos.
        </div>
    </li>
</ul>

<h4>Dificultades Organizativas</h4>
<ul class="space-y-2 my-4">
    <li class="flex items-start gap-3">
        <span class="text-blue-500 mt-1">🔵</span>
        <div>
            <strong>Ventanas de mantenimiento:</strong> Coordinar los reinicios necesarios para instalar agentes requirió planificación cuidadosa para no afectar a clases en curso.
        </div>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-purple-500 mt-1">🟣</span>
        <div>
            <strong>Formación del personal:</strong> El equipo de mantenimiento necesitó formación específica en Zabbix. Se elaboraron guías rápidas y se realizaron sesiones prácticas.
        </div>
    </li>
</ul>

<h3>9.4. Lecciones Aprendidas</h3>

<div class="bg-slate-50 rounded-lg p-6 my-6 border border-slate-200">
    <h5 class="font-bold text-slate-700 mb-4">Lecciones Técnicas</h5>
    <ul class="space-y-3">
        <li class="flex items-start gap-3">
            <span class="text-blue-600 font-bold">01.</span>
            <div>
                <strong>Empezar con un piloto:</strong> El despliegue en 10 equipos piloto permitió identificar problemas antes del despliegue masivo.
            </div>
        </li>
        <li class="flex items-start gap-3">
            <span class="text-blue-600 font-bold">02.</span>
            <div>
                <strong>Documentar todo:</strong> Cada comando, configuración y decisión debe documentarse inmediatamente. La memoria falla.
            </div>
        </li>
        <li class="flex items-start gap-3">
            <span class="text-blue-600 font-bold">03.</span>
            <div>
                <strong>Monitorizar el monitor:</strong> El propio Zabbix debe estar monitorizado (espacio disco, carga CPU, estado de procesos).
            </div>
        </li>
        <li class="flex items-start gap-3">
            <span class="text-blue-600 font-bold">04.</span>
            <div>
                <strong>Cifrado desde el inicio:</strong> Implementar PSK desde el principio es más fácil que añadirlo después.
            </div>
        </li>
    </ul>
</div>

<div class="bg-slate-50 rounded-lg p-6 my-6 border border-slate-200">
    <h5 class="font-bold text-slate-700 mb-4">Lecciones de Gestión</h5>
    <ul class="space-y-3">
        <li class="flex items-start gap-3">
            <span class="text-blue-600 font-bold">01.</span>
            <div>
                <strong>Comunicación proactiva:</strong> Informar al profesorado de los beneficios del sistema redujo la resistencia al cambio.
            </div>
        </li>
        <li class="flex items-start gap-3">
            <span class="text-blue-600 font-bold">02.</span>
            <div>
                <strong>Iterar sobre umbrales:</strong> Los umbrales de alertas deben ajustarse basándose en datos reales, no en suposiciones.
            </div>
        </li>
        <li class="flex items-start gap-3">
            <span class="text-blue-600 font-bold">03.</span>
            <div>
                <strong>Planificar capacidad futura:</strong> Dimensionar para 1000 hosts desde el inicio evita migraciones complejas después.
            </div>
        </li>
    </ul>
</div>

<h3>9.5. Líneas Futuras de Desarrollo</h3>

<h4>Corto Plazo (6 meses)</h4>
<ul class="space-y-2 my-4">
    <li><span class="text-green-600 font-bold">→</span> <strong>Integración completa con LDAP/Active Directory</strong> para autenticación centralizada.</li>
    <li><span class="text-green-600 font-bold">→</span> <strong>Automatización de reportes PDF</strong> con envío programado semanal/mensual.</li>
    <li><span class="text-green-600 font-bold">→</span> <strong>Mapas de red interactivos</strong> con ubicación física de cada equipo.</li>
    <li><span class="text-green-600 font-bold">→</span> <strong>Integración con sistema de tickets</strong> (GLPI, OTRS) para creación automática de incidencias.</li>
</ul>

<h4>Medio Plazo (1 año)</h4>
<ul class="space-y-2 my-4">
    <li><span class="text-blue-600 font-bold">→</span> <strong>Implementación de Zabbix Proxy</strong> para distribución de carga y monitorización de sedes remotas.</li>
    <li><span class="text-blue-600 font-bold">→</span> <strong>Machine Learning para detección de anomalías</strong> usando datos históricos para predecir fallos.</li>
    <li><span class="text-blue-600 font-bold">→</span> <strong>Monitorización de aplicaciones educativas</strong> (Moodle, Google Classroom, etc.).</li>
    <li><span class="text-blue-600 font-bold">→</span> <strong>Dashboard público para familias</strong> con estado de aulas (solo información básica).</li>
</ul>

<h4>Largo Plazo (2+ años)</h4>
<ul class="space-y-2 my-4">
    <li><span class="text-purple-600 font-bold">→</span> <strong>Migración a contenedores Docker/Kubernetes</strong> para mayor flexibilidad y escalabilidad.</li>
    <li><span class="text-purple-600 font-bold">→</span> <strong>Integración con IoT</strong> para monitorización ambiental (temperatura, humedad de aulas/servidores).</li>
    <li><span class="text-purple-600 font-bold">→</span> <strong>APIs para integración con sistemas de gestión académica</strong>.</li>
    <li><span class="text-purple-600 font-bold">→</span> <strong>Extensión a otros centros de la red educativa</strong> como solución estandarizada.</li>
</ul>

<h3>9.6. Impacto en la Formación del Alumnado</h3>
<p>
    Este proyecto ha proporcionado al alumnado participante competencias directamente transferibles 
    al mercado laboral:
</p>
<ul class="space-y-2 my-4">
    <li><strong>Administración de sistemas enterprise:</strong> Zabbix es utilizado por más del 50% de las empresas del IBEX 35.</li>
    <li><strong>Gestión de proyectos IT:</strong> Planificación, ejecución y documentación de un proyecto real.</li>
    <li><strong>Trabajo con estándares profesionales:</strong> ITIL, ISO 27001, mejores prácticas de la industria.</li>
    <li><strong>Resolución de problemas:</strong> Troubleshooting de incidencias reales en producción.</li>
    <li><strong>Comunicación técnica:</strong> Elaboración de documentación técnica y formación a usuarios.</li>
</ul>

<h3>9.7. Conclusión Final</h3>
<div class="callout callout-success">
    <div class="callout-title">
        <span>✨</span>
        <span>Valoración Global</span>
    </div>
    <p>
        El proyecto ha sido <strong>exitoso</strong>, cumpliendo los objetivos principales y estableciendo 
        una base sólida para la evolución futura del sistema de monitorización del IES Serra Perenxisa. 
        La solución implementada es robusta, escalable y mantenible, con un coste cero en licencias y 
        un retorno de inversión significativo en términos de eficiencia operativa.
    </p>
    <p class="mt-4">
        Más allá de los aspectos técnicos, el proyecto ha demostrado el valor de la formación profesional 
        para resolver problemas reales de la comunidad educativa, preparando al alumnado para los desafíos 
        del sector tecnológico con experiencia práctica en tecnologías enterprise.
    </p>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span>
        <span>Reflexión Personal del Alumnado</span>
    </div>
    <p>
        Como alumno/a, completa esta sección con tu valoración personal del proyecto:
    </p>
    <ul class="list-disc list-inside space-y-2 mt-3">
        <li>¿Qué ha sido lo más desafiante?</li>
        <li>¿Qué habilidades has desarrollado?</li>
        <li>¿Cómo aplicarías lo aprendido en tu futuro profesional?</li>
        <li>¿Qué harías diferente si volvieras a empezar?</li>
    </ul>
</div>
`;
