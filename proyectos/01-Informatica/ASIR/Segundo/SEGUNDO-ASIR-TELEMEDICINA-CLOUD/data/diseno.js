window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["diseno"] = `
    <div class="callout callout-info">
        <div class="callout-title"><span>📐</span><span>Planos de la Infraestructura</span></div>
        <p class="text-sm">Aquí diseñas los mapas técnicos. Es la parte donde un administrador de sistemas demuestra su valía.</p>
    </div>

    <h3>5.1. Arquitectura de Red Híbrida</h3>
    <p class="text-sm italic">Dibuja y describe cómo se conecta el hospital con la nube de Azure.</p>
    <div class="p-8 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl text-center my-8 text-slate-400 text-xs uppercase tracking-widest font-bold">
        [ Espacio para el Diagrama de Red: Proxmox <-> VPN <-> Azure VNet ]
    </div>

    <h3>5.2. Segmentación mediante VLANs</h3>
    <p class="text-sm">Define las redes lógicas para MediConnect:</p>
    <div class="table-container border border-slate-100 rounded-3xl overflow-hidden my-8 shadow-sm text-xs">
        <table class="w-full">
            <thead class="bg-slate-50 text-slate-500">
                <tr><th class="px-6 py-4 text-left">VLAN ID</th><th class="px-6 py-4 text-left">Nombre</th><th class="px-6 py-4 text-left">Propósito</th></tr>
            </thead>
            <tbody class="divide-y divide-slate-50 text-slate-400 italic">
                <tr><td class="px-6 py-4 font-mono font-bold text-blue-600">10</td><td class="px-6 py-4">VLAN_MANAGEMENT</td><td class="px-6 py-4">Gestión de Proxmox e iLO</td></tr>
                <tr><td class="px-6 py-4 font-mono font-bold text-blue-600">20</td><td class="px-6 py-4">VLAN_DATOS_MEDICOS</td><td class="px-6 py-4">[Completar...]</td></tr>
            </tbody>
        </table>
    </div>

    <h3>5.3. Diseño de Datos y Almacenamiento</h3>
    <div class="callout callout-warning">
        <div class="callout-title"><span>💾</span><span>Estrategia de Almacenamiento</span></div>
        <p class="text-sm">Diseña el sistema de almacenamiento para las imágenes médicas. ¿Usarás RAID 5, RAID 6? ¿Azure Blob Storage para las copias?</p>
    </div>
`;
