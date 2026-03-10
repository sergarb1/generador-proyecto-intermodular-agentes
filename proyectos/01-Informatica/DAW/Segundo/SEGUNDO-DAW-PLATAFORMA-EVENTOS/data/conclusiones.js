window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.conclusiones = `
<div class="space-y-6">
    <h3>Conclusiones del Proyecto</h3>

    <p>
        El desarrollo de <strong>EventHub Pro</strong> ha permitido integrar los conocimientos 
        adquiridos durante el ciclo formativo de DAW en un proyecto real de complejidad profesional. 
        A continuación se presentan las conclusiones más relevantes:
    </p>

    <h4>Conclusiones Técnicas</h4>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div class="p-5 bg-green-50 rounded-xl border border-green-200">
            <h4 class="font-bold text-green-800 mb-3 flex items-center gap-2">
                <span>✅</span> Aciertos Arquitectónicos
            </h4>
            <ul class="text-sm text-green-700 space-y-2 mb-0">
                <li>La separación frontend/backend ha permitido desarrollo paralelo y escalabilidad independiente</li>
                <li>TypeScript ha detectado errores en tiempo de compilación, reduciendo bugs en producción</li>
                <li>La arquitectura hexagonal facilita el testing unitario del dominio de negocio</li>
                <li>El uso de servicios gestionados de AWS reduce la carga operativa</li>
            </ul>
        </div>
        <div class="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 class="font-bold text-amber-800 mb-3 flex items-center gap-2">
                <span>📈</span> Áreas de Mejora
            </h4>
            <ul class="text-sm text-amber-700 space-y-2 mb-0">
                <li>La curva de aprendizaje de Docker ralentizó el inicio del proyecto</li>
                <li>La gestión de estados de carga y error en el frontend requiere mucha boilerplate</li>
                <li>Los tests E2E son lentos de ejecutar (5-10 minutos por suite completa)</li>
                <li>La documentación de la API debería haberse generado antes</li>
            </ul>
        </div>
    </div>

    <h4>Conclusiones de Proceso</h4>

    <p>
        La metodología ágil ha demostrado ser adecuada para este tipo de proyectos:
    </p>

    <ul>
        <li><strong>Planificación:</strong> Los sprints semanales permiten ajustar prioridades según 
        el progreso real. Se recomienda estimar con Planning Poker para mayor precisión.</li>
        <li><strong>Code Review:</strong> Las revisiones de código han detectado problemas de diseño 
        antes de que se conviertan en deuda técnica. Se recomienda establecer checklist de review.</li>
        <li><strong>Documentación:</strong> Documentar durante el desarrollo (no al final) ahorra 
        tiempo y mejora la calidad. Los comentarios en el código deben explicar el "por qué", no el "qué".</li>
        <li><strong>Testing:</strong> El TDD (Test-Driven Development) es más lento inicialmente pero 
        reduce el tiempo total de debugging. Se recomienda para lógica de negocio crítica.</li>
    </ul>

    <div class="callout callout-info">
        <div class="callout-title">
            <span>💡</span> Lección Aprendida Clave
        </div>
        <p class="mb-0">
            <strong>"Premature optimization is the root of all evil"</strong> - Donald Knuth. 
            Inicialmente se diseñó una arquitectura microservicios que resultó ser over-engineering 
            para el MVP. Se recomienda empezar con un monolito modular y extraer servicios solo cuando 
            haya necesidades claras de escalabilidad independiente.
        </p>
    </div>

    <h3>Trabajo Futuro</h3>

    <p>
        EventHub Pro tiene un roadmap de evolución que incluye las siguientes funcionalidades:
    </p>

    <h4>Short-term (3 meses)</h4>
    <ul>
        <li><strong>App móvil nativa:</strong> React Native para iOS/Android con notificaciones push</li>
        <li><strong>Check-in offline:</strong> Service Workers + IndexedDB para operar sin conexión</li>
        <li><strong>Webhooks:</strong> Integración con sistemas externos (CRM, email marketing)</li>
        <li><strong>Multi-idioma:</strong> i18n completo con traducciones profesionales</li>
    </ul>

    <h4>Mid-term (6 meses)</h4>
    <ul>
        <li><strong>API pública:</strong> Developer portal con documentación, SDKs y marketplace de integraciones</li>
        <li><strong>Analytics avanzado:</strong> Funnels de conversión, cohort analysis, A/B testing</li>
        <li><strong>Streaming de eventos:</strong> Integración con Vimeo/Youtube para eventos híbridos</li>
        <li><strong>Networking:</strong> Matchmaking entre asistentes basado en intereses comunes</li>
    </ul>

    <h4>Long-term (12 meses)</h4>
    <ul>
        <li><strong>IA para pricing dinámico:</strong> Recomendación de precios óptimos según demanda histórica</li>
        <li><strong>Fraud detection:</strong> ML para detectar compras fraudulentas en tiempo real</li>
        <li><strong>White-label enterprise:</strong> Deploy on-premise para clientes con requisitos de soberanía</li>
        <li><strong>Ecosistema de plugins:</strong> Marketplace de extensiones desarrolladas por terceros</li>
    </ul>

    <h3>Valoración Personal</h3>

    <div class="callout callout-success">
        <div class="callout-title">
            <span>🎓</span> Competencias Desarrolladas
        </div>
        <p>Este proyecto ha permitido desarrollar las siguientes competencias profesionales:</p>
        <ul class="mt-2 mb-0">
            <li><strong>Técnicas:</strong> Vue.js 3, Node.js, TypeScript, PostgreSQL, Docker, AWS</li>
            <li><strong>Metodológicas:</strong> Scrum, Git Flow, CI/CD, TDD</li>
            <li><strong>Transversales:</strong> Resolución de problemas, gestión del tiempo, comunicación técnica</li>
            <li><strong>Emprendedoras:</strong> Análisis de mercado, modelo de negocio, viabilidad económica</li>
        </ul>
    </div>

    <p>
        La experiencia de desarrollar un proyecto completo desde el análisis hasta el despliegue 
        proporciona una visión integral del ciclo de vida del software que es difícil de obtener 
        con ejercicios académicos aislados. La complejidad real de integrar múltiples tecnologías 
        y la necesidad de tomar decisiones arquitectónicas con consecuencias a largo plazo prepara 
        al alumnado para su incorporación al mercado laboral.
    </p>

    <div class="callout callout-warning">
        <div class="callout-title">
            <span>📝</span> Actividad para el Alumnado
        </div>
        <p class="mb-0">
            <strong>Reflexión final:</strong> Redacta una conclusión personal (mínimo 500 palabras) 
            que incluya:
        </p>
        <ul class="mt-2 mb-0">
            <li>Los 3 aprendizajes más significativos del proyecto</li>
            <li>Un error cometido y cómo lo corregirías en el futuro</li>
            <li>Cómo este proyecto te prepara para tu primer empleo como desarrollador</li>
            <li>Si recomendarías este enfoque a futuros alumnos y por qué</li>
        </ul>
    </div>
</div>
`;
