window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.anexos = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🎯</span>
        <span>Objetivo de esta Sección</span>
    </div>
    <p>En esta sección debes incluir documentación complementaria que respalde tu plan de empresa: modelos de documentos, capturas de pantalla, glosario de términos y cualquier otro material relevante.</p>
</div>

<h3>11.1. Guía para los Anexos del Proyecto</h3>

<p>Los anexos son documentos adicionales que complementan tu plan de empresa. Aquí tienes sugerencias de lo que puedes incluir:</p>

<h4>Tipos de Anexos Recomendados</h4>

<table class="w-full text-sm border-collapse my-4">
    <thead>
        <tr class="bg-slate-100 border-b border-slate-300">
            <th class="text-left p-3">Anexo</th>
            <th class="text-left p-3">Descripción</th>
            <th class="text-left p-3">¿Obligatorio?</th>
        </tr>
    </thead>
    <tbody>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">A. Estatutos Sociales</td>
            <td class="p-3 text-xs">Modelo de estatutos para tu tipo de sociedad</td>
            <td class="p-3"><span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-semibold">Recomendado</span></td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">B. Modelo de Presupuesto</td>
            <td class="p-3 text-xs">Plantilla de presupuesto que usarías con clientes</td>
            <td class="p-3"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold">Sí</span></td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">C. Modelo de Factura</td>
            <td class="p-3 text-xs">Plantilla de factura con todos los datos legales</td>
            <td class="p-3"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold">Sí</span></td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">D. Plan de Tesorería</td>
            <td class="p-3 text-xs">Tabla mensual de cobros y pagos del primer año</td>
            <td class="p-3"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold">Sí</span></td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">E. Capturas de Pantalla</td>
            <td class="p-3 text-xs">Web corporativa, software de gestión, redes sociales</td>
            <td class="p-3"><span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-semibold">Recomendado</span></td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">F. Glosario de Términos</td>
            <td class="p-3 text-xs">Definiciones de términos técnicos, fiscales, financieros</td>
            <td class="p-3"><span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-semibold">Recomendado</span></td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">G. Manual de Usuario</td>
            <td class="p-3 text-xs">Instrucciones para usar tu producto/servicio</td>
            <td class="p-3"><span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-semibold">Opcional</span></td>
        </tr>
        <tr class="border-b border-slate-100">
            <td class="p-3 font-semibold">H. Folletos Promocionales</td>
            <td class="p-3 text-xs">Diseños de flyers, tarjetas de visita, merchandising</td>
            <td class="p-3"><span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-semibold">Opcional</span></td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span>
        <span>Tarea para el Alumnado</span>
    </div>
    <p>Para completar los anexos:</p>
    <ol class="mt-2 space-y-1 text-sm list-decimal list-inside">
        <li>Crea al menos los anexos marcados como "Sí" en la tabla anterior</li>
        <li>Numera cada anexo con una letra (A, B, C...)</li>
        <li>Incluye un índice de anexos al principio de esta sección</li>
        <li>Referencia los anexos desde el cuerpo principal del proyecto cuando sea relevante</li>
    </ol>
</div>

<h3>11.2. Plantilla de Modelo de Factura</h3>

<p>Copia y adapta esta plantilla para crear tu modelo de factura:</p>

<div class="bg-slate-50 rounded-lg border border-slate-200 p-6 my-6">
    <div class="border-b border-slate-300 pb-4 mb-4">
        <div class="flex justify-between items-start">
            <div>
                <h4 class="font-bold text-lg text-slate-800">[TU EMPRESA S.L.]</h4>
                <p class="text-xs text-slate-600">[Dirección completa]</p>
                <p class="text-xs text-slate-600">[CIF/NIF]</p>
                <p class="text-xs text-slate-600">[Teléfono] | [Email]</p>
            </div>
            <div class="text-right">
                <h3 class="font-bold text-xl text-blue-600">FACTURA</h3>
                <p class="text-sm text-slate-600">Nº: [AAA-XXX]</p>
                <p class="text-sm text-slate-600">Fecha: [DD/MM/AAAA]</p>
            </div>
        </div>
    </div>
    
    <div class="mb-4">
        <p class="text-sm font-semibold text-slate-700 mb-2">Facturar a:</p>
        <p class="text-sm text-slate-600">[Nombre del Cliente]</p>
        <p class="text-sm text-slate-600">[NIF/CIF del Cliente]</p>
        <p class="text-sm text-slate-600">[Dirección del Cliente]</p>
    </div>
    
    <table class="w-full text-sm border-collapse mb-4">
        <thead>
            <tr class="bg-slate-200 border-b border-slate-300">
                <th class="text-left p-3 border border-slate-300">Descripción</th>
                <th class="text-center p-3 border border-slate-300">Cantidad</th>
                <th class="text-right p-3 border border-slate-300">Precio Unit.</th>
                <th class="text-right p-3 border border-slate-300">Total</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-slate-100">
                <td class="p-3 border border-slate-300">[Descripción del producto/servicio]</td>
                <td class="text-center p-3 border border-slate-300">[...]</td>
                <td class="text-right p-3 border border-slate-300">[...]</td>
                <td class="text-right p-3 border border-slate-300">[...]</td>
            </tr>
            <!-- Añade más filas según necesites -->
        </tbody>
    </table>
    
    <div class="flex justify-end">
        <table class="w-64 text-sm">
            <tr class="border-b border-slate-200">
                <td class="p-2 font-semibold">Base Imponible:</td>
                <td class="text-right p-2">[...]</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="p-2 font-semibold">IVA ([...]%):</td>
                <td class="text-right p-2">[...]</td>
            </tr>
            <tr class="border-b border-slate-200">
                <td class="p-2 font-semibold">IRPF ([...]%):</td>
                <td class="text-right p-2">-[...]</td>
            </tr>
            <tr class="bg-blue-50 font-bold">
                <td class="p-3">TOTAL:</td>
                <td class="text-right p-3">[...]</td>
            </tr>
        </table>
    </div>
    
    <div class="mt-6 pt-4 border-t border-slate-300 text-xs text-slate-600">
        <p><strong>Forma de pago:</strong> [Transferencia bancaria / Tarjeta / Efectivo]</p>
        <p><strong>IBAN:</strong> ESXX XXXX XXXX XXXX XXXX XXXX</p>
        <p><strong>Vencimiento:</strong> [Contado / 30 días / 60 días]</p>
    </div>
</div>

<h3>11.3. Guía para el Glosario de Términos</h3>

<p>Incluye un glosario con los términos técnicos, fiscales y financieros que hayas utilizado en tu proyecto:</p>

<div class="bg-slate-50 rounded-lg border border-slate-200 p-6 my-6">
    <h4 class="font-bold text-slate-800 mb-4">Glosario de Términos</h4>
    
    <div class="space-y-4 text-sm">
        <div class="border-b border-slate-200 pb-3">
            <p class="font-bold text-slate-800">VAN (Valor Actual Neto)</p>
            <p class="text-slate-600 mt-1">[Define con tus palabras qué es el VAN y para qué sirve]</p>
        </div>
        
        <div class="border-b border-slate-200 pb-3">
            <p class="font-bold text-slate-800">TIR (Tasa Interna de Retorno)</p>
            <p class="text-slate-600 mt-1">[Define con tus palabras qué es la TIR]</p>
        </div>
        
        <div class="border-b border-slate-200 pb-3">
            <p class="font-bold text-slate-800">EBITDA</p>
            <p class="text-slate-600 mt-1">[Define qué significa y qué mide]</p>
        </div>
        
        <div class="border-b border-slate-200 pb-3">
            <p class="font-bold text-slate-800">RETA</p>
            <p class="text-slate-600 mt-1">[Define qué es el Régimen de Especial de Trabajadores Autónomos]</p>
        </div>
        
        <div class="border-b border-slate-200 pb-3">
            <p class="font-bold text-slate-800">IAE</p>
            <p class="text-slate-600 mt-1">[Define qué es el Impuesto de Actividades Económicas]</p>
        </div>
        
        <!-- Añade más términos según necesites -->
    </div>
</div>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span>
        <span>Consejo de Experto</span>
    </div>
    <p>Un buen glosario demuestra que has entendido los conceptos que has utilizado. No copies definiciones de diccionario; escribe las definiciones con tus propias palabras, como si se las explicaras a un compañero.</p>
</div>

<h3>11.4. Checklist de Anexos Completos</h3>

<div class="bg-slate-50 rounded-lg border border-slate-200 p-6 my-6">
    <h4 class="font-bold text-slate-800 mb-4">✅ Checklist de Anexos</h4>
    
    <div class="space-y-3">
        <label class="flex items-start gap-3">
            <input type="checkbox" class="w-5 h-5 mt-0.5 rounded border-slate-300">
            <div>
                <span class="font-semibold text-sm text-slate-700">Índice de anexos</span>
                <p class="text-xs text-slate-600">Lista numerada de todos los anexos incluidos</p>
            </div>
        </label>
        
        <label class="flex items-start gap-3">
            <input type="checkbox" class="w-5 h-5 mt-0.5 rounded border-slate-300">
            <div>
                <span class="font-semibold text-sm text-slate-700">Modelo de factura completo</span>
                <p class="text-xs text-slate-600">Con todos los datos legales requeridos</p>
            </div>
        </label>
        
        <label class="flex items-start gap-3">
            <input type="checkbox" class="w-5 h-5 mt-0.5 rounded border-slate-300">
            <div>
                <span class="font-semibold text-sm text-slate-700">Plan de tesorería mensual (año 1)</span>
                <p class="text-xs text-slate-600">Tabla con cobros y pagos mes a mes</p>
            </div>
        </label>
        
        <label class="flex items-start gap-3">
            <input type="checkbox" class="w-5 h-5 mt-0.5 rounded border-slate-300">
            <div>
                <span class="font-semibold text-sm text-slate-700">Glosario de términos (mínimo 10)</span>
                <p class="text-xs text-slate-600">Definiciones de conceptos clave del proyecto</p>
            </div>
        </label>
        
        <label class="flex items-start gap-3">
            <input type="checkbox" class="w-5 h-5 mt-0.5 rounded border-slate-300">
            <div>
                <span class="font-semibold text-sm text-slate-700">Capturas de pantalla</span>
                <p class="text-xs text-slate-600">Web, software, redes sociales (si aplica)</p>
            </div>
        </label>
        
        <label class="flex items-start gap-3">
            <input type="checkbox" class="w-5 h-5 mt-0.5 rounded border-slate-300">
            <div>
                <span class="font-semibold text-sm text-slate-700">Otros documentos relevantes</span>
                <p class="text-xs text-slate-600">Estatutos, contratos tipo, folletos...</p>
            </div>
        </label>
    </div>
</div>
`;
