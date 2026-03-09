window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["administracion"] = `
    <div class="callout callout-info">
        <div class="callout-title"><span>⚙️</span><span>Gestión Continua</span></div>
        <p class="text-sm">¿Cómo operarás el sistema día a día? Piensa en las copias de seguridad de las historias clínicas y en cómo detectarás intrusos.</p>
    </div>

    <h3>7.1. Monitorización con Zabbix / Grafana</h3>
    <p class="text-sm italic">Define qué métricas vigilarás para asegurar la telemedicina.</p>
    <ul class="space-y-2 text-xs text-slate-600">
        <li><span class="text-blue-500 font-bold">▸</span> <strong>Latencia de Videollamada:</strong> Alerta si supera los 200ms.</li>
        <li><span class="text-blue-500 font-bold">▸</span> <strong>Estado del túnel VPN:</strong> Alerta crítica inmediata si cae.</li>
    </ul>

    <h3>7.2. Política de Backups 3-2-1</h3>
    <div class="p-6 bg-blue-50 rounded-3xl border border-blue-100 my-8">
        <h4 class="text-blue-700 font-bold mb-4 border-none p-0 flex items-center gap-2"><span>💾</span> Resguardo de Datos Médicos</h4>
        <p class="text-xs leading-relaxed">[Explica cómo cumplirás la regla 3-2-1: 3 copias, 2 medios (NAS y Disco), 1 fuera (Azure Storage Account).]</p>
    </div>

    <h3>7.3. Gestión de Identidades</h3>
    <p class="text-sm">Describe la integración con **Active Directory** para que los médicos usen el mismo usuario en local y en la nube.</p>
`;
