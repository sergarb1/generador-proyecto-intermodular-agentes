window.sectionsContent.viabilidad = `
<h3>3.1. Análisis DAFO - Guía de Completado</h3>

<p>El análisis DAFO es una herramienta estratégica que permite identificar los factores internos (Fortalezas y Debilidades) y externos (Oportunidades y Amenazas) que afectan al negocio.</p>

<div class="callout callout-info">
    <div class="callout-title">
        <span>📋</span> Instrucciones para el Alumnado
    </div>
    <p>Completa cada cuadrante del DAFO con al menos 5 elementos específicos para Gestoría Digital. Utiliza la investigación de mercado realizada en la sección anterior.</p>
</div>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 p-4" colspan="2">FACTORES INTERNOS</th>
            <th class="border border-slate-300 p-4" colspan="2">FACTORES EXTERNOS</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 p-4 bg-green-50" rowspan="2">
                <strong>FORTALEZAS</strong><br>
                <em class="text-xs text-slate-500">(Internas - Positivas)</em>
            </td>
            <td class="border border-slate-300 p-4 bg-green-50" rowspan="2" style="min-height: 150px; vertical-align: top;">
                <em class="text-slate-400 text-sm">[COMPLETAR]</em><br>
                <ul class="text-sm mt-2 space-y-1">
                    <li>• Ej: Precios competitivos al no tener local físico</li>
                    <li>• Ej: Atención 24/7 mediante plataforma</li>
                    <li>• ...</li>
                </ul>
            </td>
            <td class="border border-slate-300 p-4 bg-blue-50" rowspan="2">
                <strong>OPORTUNIDADES</strong><br>
                <em class="text-xs text-slate-500">(Externas - Positivas)</em>
            </td>
            <td class="border border-slate-300 p-4 bg-blue-50" rowspan="2" style="min-height: 150px; vertical-align: top;">
                <em class="text-slate-400 text-sm">[COMPLETAR]</em><br>
                <ul class="text-sm mt-2 space-y-1">
                    <li>• Ej: Obligación facturación electrónica 2025</li>
                    <li>• Ej: Crecimiento del trabajo remoto</li>
                    <li>• ...</li>
                </ul>
            </td>
        </tr>
        <tr></tr>
        <tr>
            <td class="border border-slate-300 p-4 bg-red-50" rowspan="2">
                <strong>DEBILIDADES</strong><br>
                <em class="text-xs text-slate-500">(Internas - Negativas)</em>
            </td>
            <td class="border border-slate-300 p-4 bg-red-50" rowspan="2" style="min-height: 150px; vertical-align: top;">
                <em class="text-slate-400 text-sm">[COMPLETAR]</em><br>
                <ul class="text-sm mt-2 space-y-1">
                    <li>• Ej: Falta de notoriedad de marca inicial</li>
                    <li>• Ej: Dependencia de proveedores tecnológicos</li>
                    <li>• ...</li>
                </ul>
            </td>
            <td class="border border-slate-300 p-4 bg-orange-50" rowspan="2">
                <strong>AMENAZAS</strong><br>
                <em class="text-xs text-slate-500">(Externas - Negativas)</em>
            </td>
            <td class="border border-slate-300 p-4 bg-orange-50" rowspan="2" style="min-height: 150px; vertical-align: top;">
                <em class="text-slate-400 text-sm">[COMPLETAR]</em><br>
                <ul class="text-sm mt-2 space-y-1">
                    <li>• Ej: Competencia de grandes plataformas</li>
                    <li>• Ej: Cambios normativos frecuentes</li>
                    <li>• ...</li>
                </ul>
            </td>
        </tr>
        <tr></tr>
    </tbody>
</table>

<h3>3.2. Viabilidad Financiera - Guía de Cálculo</h3>

<p>Para determinar si el proyecto es viable económicamente, debemos calcular tres indicadores financieros clave:</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-xl border border-blue-200">
        <h4 class="font-bold text-blue-800 mb-2 flex items-center gap-2">
            <span class="text-2xl">📈</span> VAN
        </h4>
        <p class="text-sm text-slate-700 mb-3"><strong>Valor Actual Neto</strong></p>
        <p class="text-xs text-slate-600">Suma de los flujos de caja futuros actualizados menos la inversión inicial.</p>
        <div class="mt-4 p-3 bg-white rounded-lg text-xs font-mono">
            VAN = Σ [FCt / (1+k)^t] - I₀
        </div>
        <div class="mt-3 callout callout-success text-xs py-2">
            <strong>Interpretación:</strong> VAN > 0 → Proyecto viable
        </div>
    </div>
    
    <div class="p-6 bg-green-50 rounded-xl border border-green-200">
        <h4 class="font-bold text-green-800 mb-2 flex items-center gap-2">
            <span class="text-2xl">💹</span> TIR
        </h4>
        <p class="text-sm text-slate-700 mb-3"><strong>Tasa Interna de Retorno</strong></p>
        <p class="text-xs text-slate-600">Tasa de descuento que hace que el VAN sea igual a cero.</p>
        <div class="mt-4 p-3 bg-white rounded-lg text-xs font-mono">
            0 = Σ [FCt / (1+TIR)^t] - I₀
        </div>
        <div class="mt-3 callout callout-success text-xs py-2">
            <strong>Interpretación:</strong> TIR > k → Proyecto viable
        </div>
    </div>
    
    <div class="p-6 bg-purple-50 rounded-xl border border-purple-200">
        <h4 class="font-bold text-purple-800 mb-2 flex items-center gap-2">
            <span class="text-2xl">⏱️</span> Payback
        </h4>
        <p class="text-sm text-slate-700 mb-3"><strong>Plazo de Recuperación</strong></p>
        <p class="text-xs text-slate-600">Tiempo necesario para recuperar la inversión inicial.</p>
        <div class="mt-4 p-3 bg-white rounded-lg text-xs">
            Año en que FC acumulado ≥ Inversión
        </div>
        <div class="mt-3 callout callout-success text-xs py-2">
            <strong>Interpretación:</strong> Menor plazo = menor riesgo
        </div>
    </div>
</div>

<h3>3.3. Inversión Inicial Estimada</h3>

<p>Completa la siguiente tabla con los importes reales investigados:</p>

<table class="w-full border-collapse my-8">
    <thead>
        <tr class="bg-slate-100">
            <th class="border border-slate-300 p-4 text-left">Concepto</th>
            <th class="border border-slate-300 p-4 text-right">Importe (€)</th>
            <th class="border border-slate-300 p-4 text-left">Notas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-300 p-4">Constitución societaria (notaría, registro, impuestos)</td>
            <td class="border border-slate-300 p-4 text-right"><em>[COMPLETAR]</em></td>
            <td class="border border-slate-300 p-4 text-sm">Investiga en notaría local</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-4">Equipamiento informático (ordenadores, periféricos)</td>
            <td class="border border-slate-300 p-4 text-right"><em>[COMPLETAR]</em></td>
            <td class="border border-slate-300 p-4 text-sm">2-3 equipos completos</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-4">Software de gestión (licencias anuales)</td>
            <td class="border border-slate-300 p-4 text-right"><em>[COMPLETAR]</em></td>
            <td class="border border-slate-300 p-4 text-sm">Contabilidad, facturación, CRM</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-4">Desarrollo web y hosting (primer año)</td>
            <td class="border border-slate-300 p-4 text-right"><em>[COMPLETAR]</em></td>
            <td class="border border-slate-300 p-4 text-sm">Web corporativa + plataforma</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-4">Marketing inicial (publicidad, branding)</td>
            <td class="border border-slate-300 p-4 text-right"><em>[COMPLETAR]</em></td>
            <td class="border border-slate-300 p-4 text-sm">Logo, web, campañas Google/FB</td>
        </tr>
        <tr>
            <td class="border border-slate-300 p-4">Fondo de maniobra (3 meses de gastos)</td>
            <td class="border border-slate-300 p-4 text-right"><em>[COMPLETAR]</em></td>
            <td class="border border-slate-300 p-4 text-sm">Colchón para empezar</td>
        </tr>
        <tr class="bg-slate-50 font-bold">
            <td class="border border-slate-300 p-4">TOTAL INVERSIÓN</td>
            <td class="border border-slate-300 p-4 text-right"><em>[SUMAR]</em></td>
            <td class="border border-slate-300 p-4"></td>
        </tr>
    </tbody>
</table>

<h3>3.4. Previsión de Ingresos y Gastos</h3>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📊</span> Actividad Práctica
    </div>
    <p>Elabora una cuenta de resultados previsional a 5 años considerando:</p>
    <ul>
        <li><strong>Ingresos:</strong> Tarifas mensuales por cliente × número de clientes esperados (crecimiento progresivo)</li>
        <li><strong>Gastos Variables:</strong> Comisiones bancarias, software por cliente, etc.</li>
        <li><strong>Gastos Fijos:</strong> Alquiler (si aplica), salarios, seguros, marketing, etc.</li>
    </ul>
</div>

<h3>3.5. Umbral de Rentabilidad (Punto Muerto)</h3>

<p>El punto muerto indica cuántos clientes necesitas para cubrir todos los costes:</p>

<div class="p-6 bg-slate-50 rounded-xl border border-slate-200 my-6">
    <p class="font-mono text-center text-lg">
        Punto Muerto = Costes Fijos Totales / (Precio Medio por Cliente - Coste Variable por Cliente)
    </p>
</div>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span> Consejo de Experto
    </div>
    <p>Para una gestoría online, los costes fijos iniciales son altos (desarrollo, marketing) pero los variables son bajos. Esto significa que cada cliente adicional tiene un margen alto una vez superado el punto muerto.</p>
</div>
`;
