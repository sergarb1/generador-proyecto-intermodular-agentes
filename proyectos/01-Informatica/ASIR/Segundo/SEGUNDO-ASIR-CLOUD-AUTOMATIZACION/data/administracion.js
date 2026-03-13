window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["administracion"] = `

<div class="callout callout-info">
    <div class="callout-title"><span>⚙️</span><span>Administración y Mantenimiento</span></div>
    <p class="text-sm">Describe cómo se operará el sistema una vez en producción. Incluye procedimientos rutinarios, troubleshooting y planes de contingencia.</p>
</div>

<h3>7.1. Procedimientos de Administración Rutinaria</h3>

<h4>7.1.1. Checklist Diario</h4>

<div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 my-6">
    <h5 class="font-bold text-blue-800 mb-4 flex items-center gap-2"><span>☀️</span>Tareas Diarias (15 minutos)</h5>
    <ul class="space-y-2 text-sm">
        <li class="flex items-start gap-2">
            <input type="checkbox" class="mt-1">
            <span>Verificar dashboard de Grafana (sin alertas rojas)</span>
        </li>
        <li class="flex items-start gap-2">
            <input type="checkbox" class="mt-1">
            <span>Confirmar que el backup nocturno se completó</span>
        </li>
        <li class="flex items-start gap-2">
            <input type="checkbox" class="mt-1">
            <span>Revisar logs de seguridad (fail2ban, auth.log)</span>
        </li>
        <li class="flex items-start gap-2">
            <input type="checkbox" class="mt-1">
            <span>Verificar espacio disponible en discos (>20% libre)</span>
        </li>
    </ul>
</div>

<h4>7.1.2. Checklist Semanal</h4>

<div class="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 my-6">
    <h5 class="font-bold text-green-800 mb-4 flex items-center gap-2"><span>📅</span>Tareas Semanales (1 hora)</h5>
    <ul class="space-y-2 text-sm">
        <li class="flex items-start gap-2">
            <input type="checkbox" class="mt-1">
            <span>Aplicar actualizaciones de seguridad pendientes</span>
        </li>
        <li class="flex items-start gap-2">
            <input type="checkbox" class="mt-1">
            <span>Revisar informe de rendimiento semanal</span>
        </li>
        <li class="flex items-start gap-2">
            <input type="checkbox" class="mt-1">
            <span>Verificar integridad de backups (test de restauración aleatorio)</span>
        </li>
        <li class="flex items-start gap-2">
            <input type="checkbox" class="mt-1">
            <span>Actualizar documentación de cambios</span>
        </li>
    </ul>
</div>

<h4>7.1.3. Checklist Mensual</h4>

<div class="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200 my-6">
    <h5 class="font-bold text-purple-800 mb-4 flex items-center gap-2"><span>📊</span>Tareas Mensuales (4 horas)</h5>
    <ul class="space-y-2 text-sm">
        <li class="flex items-start gap-2">
            <input type="checkbox" class="mt-1">
            <span>Revisar facturación AWS y optimizar costes</span>
        </li>
        <li class="flex items-start gap-2">
            <input type="checkbox" class="mt-1">
            <span>Prueba de recuperación ante desastres (DR test)</span>
        </li>
        <li class="flex items-start gap-2">
            <input type="checkbox" class="mt-1">
            <span>Auditoría de usuarios y permisos</span>
        </li>
        <li class="flex items-start gap-2">
            <input type="checkbox" class="mt-1">
            <span>Generar informe de SLA para dirección</span>
        </li>
    </ul>
</div>

<h3>7.2. Procedimientos de Troubleshooting</h3>

<h4>7.2.1. Diagnóstico de Problemas de Conectividad</h4>

<div class="bg-slate-800 rounded-xl p-4 my-4 overflow-x-auto">
    <pre class="text-xs text-green-400 font-mono"><code># Árbol de decisión para problemas de conectividad VPN

# 1. Verificar estado del servicio OpenVPN
systemctl status openvpn@server

# 2. Comprobar logs en tiempo real
journalctl -u openvpn@server -f

# 3. Verificar conectividad de red base
ping -c 4 192.168.10.1  # Gateway local
ping -c 4 10.0.1.1      # Gateway AWS

# 4. Verificar reglas de firewall
iptables -L -n -v | grep -E "(1194|172.16)"

# 5. Comprobar rutas
ip route show
route -n

# 6. Verificar estado del túnel
ifconfig tun0  # o ip addr show tun0

# 7. Test de conectividad a través del túnel
ping -I tun0 172.16.0.2</code></pre>
</div>

<h4>7.2.2. Matriz de Troubleshooting</h4>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Síntoma</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Causa Probable</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Acción Correctiva</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Prioridad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 text-sm">VPN caída</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Servicio detenido o firewall bloqueando</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Reiniciar servicio, verificar puerto 1194 UDP</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">CRÍTICA</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 text-sm">Backup fallido</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Espacio insuficiente o credenciales AWS expiradas</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Verificar espacio, renovar AWS credentials</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold">CRÍTICA</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 text-sm">Alta latencia</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Saturación de red o CPU</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Identificar proceso con top, escalar instancia si necesario</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-bold">ALTA</span></td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 text-sm">Alertas falsas</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Umbrales mal configurados</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Ajustar thresholds en Prometheus alerts</td>
            <td class="border border-slate-300 px-4 py-3"><span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">BAJA</span></td>
        </tr>
    </tbody>
</table>

<h3>7.3. Plan de Recuperación ante Desastres (DRP)</h3>

<div class="callout callout-error">
    <div class="callout-title"><span>🚨</span><span>Escenarios de Desastre</span></div>
    <p class="text-sm m-0">Define procedimientos para los siguientes escenarios. Esta información es CRÍTICA para la continuidad del negocio.</p>
</div>

<h4>7.3.1. Escenario A: Caída del CPD Local</h4>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
    <div class="p-4 bg-red-50 rounded-xl border border-red-200">
        <h5 class="font-bold text-red-800 mb-2 text-sm">🔴 RTO (Recovery Time Objective)</h5>
        <p class="text-2xl font-bold text-red-600">4 horas</p>
        <p class="text-xs text-slate-600 mt-1">Tiempo máximo para restaurar servicio</p>
    </div>
    <div class="p-4 bg-orange-50 rounded-xl border border-orange-200">
        <h5 class="font-bold text-orange-800 mb-2 text-sm">🟠 RPO (Recovery Point Objective)</h5>
        <p class="text-2xl font-bold text-orange-600">24 horas</p>
        <p class="text-xs text-slate-600 mt-1">Pérdida máxima de datos aceptable</p>
    </div>
    <div class="p-4 bg-blue-50 rounded-xl border border-blue-200">
        <h5 class="font-bold text-blue-800 mb-2 text-sm">🔵 Responsable</h5>
        <p class="text-lg font-bold text-blue-600">Administrador Sistemas</p>
        <p class="text-xs text-slate-600 mt-1">Persona encargada de ejecutar el DRP</p>
    </div>
</div>

<h5>Procedimiento de Activación DRP:</h5>

<ol class="space-y-3 my-6 list-decimal list-inside">
    <li class="text-sm"><strong>Detección:</strong> Confirmar que el incidente afecta a todo el CPD (no es problema aislado)</li>
    <li class="text-sm"><strong>Declaración:</strong> El responsable declara oficialmente el desastre y activa el DRP</li>
    <li class="text-sm"><strong>Comunicación:</strong> Notificar a stakeholders (dirección, clientes críticos)</li>
    <li class="text-sm"><strong>Failover:</strong> Activar instancias de respaldo en AWS (ya preconfiguradas)</li>
    <li class="text-sm"><strong>Restauración:</strong> Restaurar última base de datos desde S3 Glacier</li>
    <li class="text-sm"><strong>Verificación:</strong> Confirmar que los servicios están operativos</li>
    <li class="text-sm"><strong>Post-mortem:</strong> Documentar incidente y lecciones aprendidas</li>
</ol>

<h4>7.3.2. Escenario B: Compromiso de Seguridad (Ransomware)</h4>

<div class="bg-slate-800 rounded-xl p-4 my-4 overflow-x-auto">
    <pre class="text-xs text-green-400 font-mono"><code># Procedimiento de Emergencia - Seguridad

# 1. AISLAMIENTO INMEDIATO
# Desconectar servidores afectados de la red
# NO APAGAR (para preservar evidencia forense)

# 2. EVALUACIÓN
# Identificar alcance del compromiso
# Verificar si backups están afectados

# 3. CONTENCIÓN
# Cambiar TODAS las credenciales
# Revocar claves API comprometidas
# Bloquear IPs maliciosas en firewall

# 4. ERRADICACIÓN
# Reinstalar sistemas desde imágenes limpias
# Restaurar datos desde backups verificados

# 5. RECUPERACIÓN
# Restaurar servicios gradualmente
# Monitorizar estrechamente durante 72h

# 6. NOTIFICACIÓN
# Informar a AEPD si hay fuga de datos (72h plazo RGPD)
# Notificar a clientes afectados</code></pre>
</div>

<h3>7.4. Gestión de Cambios</h3>

<p>Todo cambio en producción debe seguir un procedimiento formal para minimizar riesgos.</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Tipo de Cambio</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Aprobación</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Ventana de Cambio</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-bold text-slate-700">Rollback</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 px-4 py-3 text-sm font-semibold">Crítico (core network, DB)</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Dirección IT + Tutor</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Sábado 22:00 - Domingo 06:00</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Obligatorio test previo</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 text-sm font-semibold">Mayor (nuevos servicios)</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Administrador Senior</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Martes/Jueves 20:00-23:00</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Plan documentado</td>
        </tr>
        <tr>
            <td class="border border-slate-300 px-4 py-3 text-sm font-semibold">Menor (configuraciones)</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Auto-aprobado</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Cualquier día 08:00-18:00</td>
            <td class="border border-slate-300 px-4 py-3 text-xs">Snapshot previo</td>
        </tr>
    </tbody>
</table>

<h3>7.5. Documentación de Operaciones</h3>

<p>La siguiente documentación debe estar siempre actualizada y accesible:</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
        <h5 class="font-bold text-slate-800 mb-3 flex items-center gap-2"><span>📖</span>Runbooks</h5>
        <ul class="text-sm space-y-2 text-slate-600">
            <li>• Procedimiento de arranque/parada</li>
            <li>• Guía de troubleshooting VPN</li>
            <li>• Restauración de backups</li>
            <li>• Escalado de instancias EC2</li>
        </ul>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
        <h5 class="font-bold text-slate-800 mb-3 flex items-center gap-2"><span>🗺️</span>Diagramas</h5>
        <ul class="text-sm space-y-2 text-slate-600">
            <li>• Arquitectura de red actualizada</li>
            <li>• Flujo de datos entre sistemas</li>
            <li>• Dependencias de servicios</li>
            <li>• Contactos de emergencia</li>
        </ul>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
        <h5 class="font-bold text-slate-800 mb-3 flex items-center gap-2"><span>🔐</span>Seguridad</h5>
        <ul class="text-sm space-y-2 text-slate-600">
            <li>• Política de contraseñas</li>
            <li>• Matriz de accesos por rol</li>
            <li>• Procedimiento de incidentes</li>
            <li>• Certificados y fechas de caducidad</li>
        </ul>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
        <h5 class="font-bold text-slate-800 mb-3 flex items-center gap-2"><span>📊</span>SLA/KPIs</h5>
        <ul class="text-sm space-y-2 text-slate-600">
            <li>• Métricas de disponibilidad mensual</li>
            <li>• Tiempos de respuesta promedio</li>
            <li>• Incidentes por categoría</li>
            <li>• Costes operativos mensuales</li>
        </ul>
    </div>
</div>

<div class="callout callout-info">
    <div class="callout-title"><span>💡</span><span>Consejo Profesional</span></div>
    <p class="text-sm m-0">Un sistema bien documentado es un sistema mantenible. Durante la defensa, menciona cómo has organizado la documentación (wiki interna, Git, Notion) - esto demuestra mentalidad profesional.</p>
</div>

`;
