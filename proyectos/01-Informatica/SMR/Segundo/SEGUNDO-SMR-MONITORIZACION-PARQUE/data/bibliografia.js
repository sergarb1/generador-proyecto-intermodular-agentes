window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.bibliografia = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📚</span>
        <span>Bibliografía y Referencias</span>
    </div>
    <p>
        Esta sección recopila todas las fuentes documentales, estándares técnicos y recursos 
        consultados para el desarrollo del proyecto.
    </p>
</div>

<h3>10.1. Documentación Técnica Oficial</h3>

<h4>Zabbix Documentation</h4>
<ul class="space-y-3 my-4">
    <li class="pl-4 border-l-4 border-blue-500">
        <strong>Zabbix LLC.</strong> (2024). <em>Zabbix 7.0 Documentation</em>. Disponible en: 
        <a href="https://www.zabbix.com/documentation/7.0" class="text-blue-600 underline" target="_blank">zabbix.com/documentation/7.0</a>
        <p class="text-sm text-slate-600 mt-1">Documentación oficial completa incluyendo instalación, configuración y referencia de API.</p>
    </li>
    <li class="pl-4 border-l-4 border-blue-500">
        <strong>Zabbix LLC.</strong> (2024). <em>Zabbix Installation Guide</em>. Disponible en:
        <a href="https://www.zabbix.com/documentation/7.0/manual/install" class="text-blue-600 underline" target="_blank">zabbix.com/documentation/7.0/manual/install</a>
        <p class="text-sm text-slate-600 mt-1">Guía detallada de instalación para diferentes sistemas operativos y bases de datos.</p>
    </li>
    <li class="pl-4 border-l-4 border-blue-500">
        <strong>Zabbix LLC.</strong> (2024). <em>Zabbix Configuration Guide</em>. Disponible en:
        <a href="https://www.zabbix.com/documentation/7.0/manual/config" class="text-blue-600 underline" target="_blank">zabbix.com/documentation/7.0/manual/config</a>
        <p class="text-sm text-slate-600 mt-1">Configuración de hosts, items, triggers, acciones y dashboards.</p>
    </li>
</ul>

<h4>PostgreSQL Documentation</h4>
<ul class="space-y-3 my-4">
    <li class="pl-4 border-l-4 border-green-500">
        <strong>PostgreSQL Global Development Group.</strong> (2023). <em>PostgreSQL 15 Documentation</em>. Disponible en:
        <a href="https://www.postgresql.org/docs/15/" class="text-blue-600 underline" target="_blank">postgresql.org/docs/15</a>
        <p class="text-sm text-slate-600 mt-1">Documentación oficial de PostgreSQL 15, incluyendo optimización y administración.</p>
    </li>
    <li class="pl-4 border-l-4 border-green-500">
        <strong>PostgreSQL Global Development Group.</strong> (2023). <em>Server Configuration</em>. Disponible en:
        <a href="https://www.postgresql.org/docs/15/config.html" class="text-blue-600 underline" target="_blank">postgresql.org/docs/15/config.html</a>
        <p class="text-sm text-slate-600 mt-1">Referencia completa de parámetros de configuración del servidor.</p>
    </li>
</ul>

<h4>Ubuntu Documentation</h4>
<ul class="space-y-3 my-4">
    <li class="pl-4 border-l-4 border-orange-500">
        <strong>Canonical Ltd.</strong> (2022). <em>Ubuntu Server Guide 22.04 LTS</em>. Disponible en:
        <a href="https://ubuntu.com/server/docs" class="text-blue-600 underline" target="_blank">ubuntu.com/server/docs</a>
        <p class="text-sm text-slate-600 mt-1">Guía oficial de Ubuntu Server incluyendo instalación, configuración y administración.</p>
    </li>
</ul>

<h3>10.2. Estándares y Normativas</h3>

<h4>ITIL (Information Technology Infrastructure Library)</h4>
<ul class="space-y-3 my-4">
    <li class="pl-4 border-l-4 border-purple-500">
        <strong>Axelos.</strong> (2019). <em>ITIL 4 Foundation</em>. TSO (The Stationery Office).
        <p class="text-sm text-slate-600 mt-1">Marco de mejores prácticas para la gestión de servicios IT. Especialmente relevantes los procesos de Monitoring & Event Management, Incident Management y Problem Management.</p>
    </li>
    <li class="pl-4 border-l-4 border-purple-500">
        <strong>Axelos.</strong> (2020). <em>ITIL 4: Create, Deliver and Support</em>. TSO.
        <p class="text-sm text-slate-600 mt-1">Guía detallada sobre la creación y operación de servicios IT, incluyendo prácticas de monitorización.</p>
    </li>
</ul>

<h4>ISO/IEC 27001 (Seguridad de la Información)</h4>
<ul class="space-y-3 my-4">
    <li class="pl-4 border-l-4 border-red-500">
        <strong>International Organization for Standardization.</strong> (2022). <em>ISO/IEC 27001:2022 Information security, cybersecurity and privacy protection</em>.
        <p class="text-sm text-slate-600 mt-1">Estándar internacional para sistemas de gestión de seguridad de la información (SGSI). Los anexos A.12.4 (Logging and monitoring) y A.9.2 (User access management) son especialmente relevantes.</p>
    </li>
</ul>

<h4>RFC (Request for Comments)</h4>
<ul class="space-y-3 my-4">
    <li class="pl-4 border-l-4 border-slate-500">
        <strong>Chisholm, I.</strong> (1999). <em>RFC 2722: Network Accounting</em>. IETF. Disponible en:
        <a href="https://datatracker.ietf.org/doc/html/rfc2722" class="text-blue-600 underline" target="_blank">datatracker.ietf.org/doc/html/rfc2722</a>
        <p class="text-sm text-slate-600 mt-1">Define buenas prácticas para accounting y monitorización de tráfico de red.</p>
    </li>
    <li class="pl-4 border-l-4 border-slate-500">
        <strong>Case, J. et al.</strong> (2002). <em>RFC 3411: An Architecture for Describing Simple Network Management Protocol (SNMP) Management Frameworks</em>. IETF.
        <p class="text-sm text-slate-600 mt-1">Arquitectura del protocolo SNMP, fundamental para la monitorización de dispositivos de red.</p>
    </li>
</ul>

<h3>10.3. Libros y Publicaciones</h3>

<ul class="space-y-3 my-4">
    <li class="pl-4 border-l-4 border-blue-500">
        <strong>Turnbull, J.</strong> (2020). <em>The Practice of System and Network Administration</em> (3rd ed.). Addison-Wesley Professional.
        <p class="text-sm text-slate-600 mt-1">Referencia fundamental para la administración de sistemas, incluyendo capítulos dedicados a monitorización y gestión de incidencias.</p>
    </li>
    <li class="pl-4 border-l-4 border-blue-500">
        <strong>Beyer, B. et al.</strong> (2016). <em>Site Reliability Engineering: How Google Runs Production Systems</em>. O'Reilly Media.
        <p class="text-sm text-slate-600 mt-1">Introduce conceptos de SRE aplicables a la monitorización de sistemas a gran escala.</p>
    </li>
    <li class="pl-4 border-l-4 border-blue-500">
        <strong>Wheeler, R.</strong> (2021). <em>Monitoring with Zabbix</em>. Packt Publishing.
        <p class="text-sm text-slate-600 mt-1">Guía práctica específica de Zabbix con ejemplos reales de implementación.</p>
    </li>
</ul>

<h3>10.4. Recursos Online y Comunidades</h3>

<ul class="space-y-3 my-4">
    <li class="pl-4 border-l-4 border-green-500">
        <strong>Zabbix Share Repository.</strong> Disponible en:
        <a href="https://share.zabbix.com/" class="text-blue-600 underline" target="_blank">share.zabbix.com</a>
        <p class="text-sm text-slate-600 mt-1">Repositorio oficial de plantillas creadas por la comunidad para múltiples dispositivos y aplicaciones.</p>
    </li>
    <li class="pl-4 border-l-4 border-green-500">
        <strong>Zabbix Forum.</strong> Disponible en:
        <a href="https://www.zabbix.com/forum" class="text-blue-600 underline" target="_blank">zabbix.com/forum</a>
        <p class="text-sm text-slate-600 mt-1">Comunidad activa de usuarios y desarrolladores de Zabbix para resolver dudas y compartir experiencias.</p>
    </li>
    <li class="pl-4 border-l-4 border-green-500">
        <strong>Reddit - r/zabbix.</strong> Disponible en:
        <a href="https://www.reddit.com/r/zabbix/" class="text-blue-600 underline" target="_blank">reddit.com/r/zabbix</a>
        <p class="text-sm text-slate-600 mt-1">Subreddit dedicado a Zabbix con discusiones, tutoriales y troubleshooting.</p>
    </li>
    <li class="pl-4 border-l-4 border-green-500">
        <strong>Stack Overflow - Zabbix Tag.</strong> Disponible en:
        <a href="https://stackoverflow.com/questions/tagged/zabbix" class="text-blue-600 underline" target="_blank">stackoverflow.com/questions/tagged/zabbix</a>
        <p class="text-sm text-slate-600 mt-1">Preguntas y respuestas técnicas sobre Zabbix.</p>
    </li>
</ul>

<h3>10.5. Herramientas y Software</h3>

<ul class="space-y-3 my-4">
    <li class="pl-4 border-l-4 border-slate-500">
        <strong>Zabbix Agent 2.</strong> (2024). Versión 7.0.0. Zabbix LLC.
        <a href="https://www.zabbix.com/download_agents" class="text-blue-600 underline ml-2" target="_blank">Descargar</a>
        <p class="text-sm text-slate-600 mt-1">Agente de monitorización multiplataforma escrito en Go.</p>
    </li>
    <li class="pl-4 border-l-4 border-slate-500">
        <strong>PostgreSQL.</strong> (2023). Versión 15.4. PostgreSQL Global Development Group.
        <a href="https://www.postgresql.org/download/" class="text-blue-600 underline ml-2" target="_blank">Descargar</a>
        <p class="text-sm text-slate-600 mt-1">Sistema de gestión de bases de datos relacional open source.</p>
    </li>
    <li class="pl-4 border-l-4 border-slate-500">
        <strong>Ubuntu Server.</strong> (2022). Versión 22.04.3 LTS. Canonical Ltd.
        <a href="https://ubuntu.com/download/server" class="text-blue-600 underline ml-2" target="_blank">Descargar</a>
        <p class="text-sm text-slate-600 mt-1">Sistema operativo Linux para servidores con soporte a largo plazo.</p>
    </li>
    <li class="pl-4 border-l-4 border-slate-500">
        <strong>Apache HTTP Server.</strong> (2023). Versión 2.4.57. Apache Software Foundation.
        <a href="https://httpd.apache.org/" class="text-blue-600 underline ml-2" target="_blank">Descargar</a>
        <p class="text-sm text-slate-600 mt-1">Servidor web utilizado para el frontend de Zabbix.</p>
    </li>
</ul>

<h3>10.6. Normativa de Protección de Datos</h3>

<ul class="space-y-3 my-4">
    <li class="pl-4 border-l-4 border-yellow-500">
        <strong>Unión Europea.</strong> (2016). <em>Reglamento (UE) 2016/679 (RGPD/GDPR)</em>. Diario Oficial de la Unión Europea.
        <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj" class="text-blue-600 underline ml-2" target="_blank">Texto completo</a>
        <p class="text-sm text-slate-600 mt-1">Reglamento General de Protección de Datos. Aplicable al tratamiento de información de usuarios y equipos recopilada por el sistema de monitorización.</p>
    </li>
    <li class="pl-4 border-l-4 border-yellow-500">
        <strong>Gobierno de España.</strong> (2018). <em>Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)</em>. BOE núm. 294.
        <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673" class="text-blue-600 underline ml-2" target="_blank">Texto completo</a>
        <p class="text-sm text-slate-600 mt-1">Adaptación española del RGPD.</p>
    </li>
</ul>

<h3>10.7. Recursos del Centro Educativo</h3>

<ul class="space-y-3 my-4">
    <li class="pl-4 border-l-4 border-indigo-500">
        <strong>IES Serra Perenxisa.</strong> (2024). <em>Documentación Interna de Infraestructura IT</em>. Documento interno.
        <p class="text-sm text-slate-600 mt-1">Inventario de equipos, diagramas de red y procedimientos internos del centro.</p>
    </li>
    <li class="pl-4 border-l-4 border-indigo-500">
        <strong>IES Serra Perenxisa.</strong> (2024). <em>Política de Seguridad Informática</em>. Documento interno.
        <p class="text-sm text-slate-600 mt-1">Normativas y procedimientos de seguridad del centro educativo.</p>
    </li>
</ul>

<h3>10.8. Formato de Citación</h3>
<p>
    Todas las referencias siguen el formato <strong>APA 7ª edición</strong> (American Psychological Association).
</p>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span>
        <span>Actividad para el Alumnado</span>
    </div>
    <p>
        Añade a esta bibliografía al menos 3 recursos adicionales que hayas consultado 
        durante tu implementación específica del proyecto.
    </p>
</div>
`;
