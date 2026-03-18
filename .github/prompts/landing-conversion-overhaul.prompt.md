---
agent: 'agent'
description: 'Refactor de landing para vender mejor servicios web por WhatsApp'
---

Trabajá sobre este repositorio para transformar la landing actual en una página de venta más efectiva para servicios de creación de sitios web.

## Objetivo de negocio
Convertir más visitantes en conversaciones por WhatsApp para vender páginas web simples a dueños de pequeños negocios y profesionales de habla hispana.

## Audiencia principal
- Dueños de negocios locales
- Profesionales independientes
- Personas que llegan desde Instagram, recomendaciones o búsquedas locales
- Usuarios mobile-first, con poco tiempo y poca paciencia

## Contexto del proyecto
- El sitio actual ya vende el servicio de páginas web con CTA a WhatsApp
- Es una landing estática y debe seguir siendo rápida, simple y fácil de mantener
- Mantener compatibilidad con Vercel y hosting estático
- Priorizar HTML/CSS/JS livianos; no migres a un framework salvo que sea realmente necesario
- Todo el copy debe quedar en español

## Estado actual resumido
La página ya tiene:
- un hero con promesa de conseguir más consultas
- promesa de entrega rápida
- varios botones de WhatsApp
- sección de problemas/dolores
- sección de ejemplos
- sección de proceso
- oferta de demo gratis
- listado de qué incluye
- un caso/testimonio
- CTA final

## Principios obligatorios
- No inventes métricas, precios, logos, testimonios, clientes, certificaciones, badges ni resultados que no estén verificados
- Si falta un dato comercial importante, seguí avanzando y dejá un placeholder claro con el formato `TODO_OWNER_INPUT`
- Escribí copy orientado a negocio y resultados, no a tecnología
- Priorizá claridad, confianza, diferenciación y reducción de fricción
- Mantené una sola acción principal de conversión en toda la página
- Hacé que la página se entienda en menos de 5 segundos
- Optimizá para mobile primero
- Mejorá accesibilidad, semántica y performance

## Qué quiero que hagas
Hacé una refactorización completa de la landing actual para que venda mejor, sin reconstruir de más ni agregar complejidad innecesaria.

## Cambios obligatorios

### 1) Reescribir el hero para vender mejor
- Reescribí el bloque principal para que deje clarísimo:
  - qué servicio se ofrece
  - para quién es
  - cuál es el resultado esperado
  - cuál es el próximo paso
- El hero debe hablar en lenguaje de negocio, no en lenguaje técnico
- Usá un CTA primario consistente y dominante. Recomendado: `Pedir demo gratis por WhatsApp`
- Si dejás un CTA secundario, que sea claramente menos importante y no compita con el principal
- Agregá microcopy debajo del CTA para reducir ansiedad, por ejemplo explicando qué pasa después de escribir

### 2) Unificar el funnel y los CTA
- Revisá todos los botones y links de WhatsApp
- Unificá el copy del CTA principal en toda la página
- Configurá mensajes prellenados distintos según contexto, por ejemplo:
  - hero: `Hola Martin, quiero una demo gratis para mi negocio`
  - ejemplos: `Hola Martin, vi tus ejemplos y quiero algo parecido`
  - cierre: `Hola Martin, quiero empezar con mi página`
- Agregá un botón flotante o sticky de WhatsApp en mobile, sin tapar contenido clave
- Reducí la cantidad de variantes de CTA para evitar confusión

### 3) Reordenar la narrativa para mejorar conversión
Reorganizá la landing en este orden o en uno muy parecido:
1. Hero con propuesta de valor y CTA
2. Franja de confianza con 3 a 4 bullets breves
3. Problemas que resuelve
4. Qué recibís / beneficios del servicio
5. Ejemplos o mini casos con enfoque comercial
6. Cómo trabajamos en 3 pasos simples
7. Prueba social / caso real
8. FAQ con objeciones
9. CTA final

### 4) Mejorar el copy comercial
- Reemplazá frases demasiado genéricas por copy más orientado a resultados
- Evitá sonar académico, técnico o demasiado abstracto
- Tono: cercano, profesional, directo, sin humo
- Explicá beneficios concretos: más consultas, contacto rápido, presencia profesional, mejor experiencia móvil
- Sumá una pequeña sección `Ideal para...` y otra `No es para...` para filtrar leads y aumentar percepción de foco
- Explicá en una línea qué tiene que enviar el cliente para arrancar

### 5) Transformar los ejemplos en prueba de compra
- Conservá los ejemplos existentes si ya están en el sitio, pero presentalos como mini casos
- En cada tarjeta mostrá:
  - tipo de negocio
  - problema principal
  - solución entregada
  - CTA contextual
- Si no hay métricas reales, usá resultados cualitativos honestos
- Mejorá la jerarquía visual de estas tarjetas para que parezcan evidencia, no simple galería

### 6) Simplificar y fortalecer el proceso
- Reducí el proceso actual a 3 pasos simples si eso mejora claridad
- El proceso debe transmitir baja fricción y rapidez
- Ejemplo de lógica:
  1. Me contás tu negocio
  2. Te muestro una demo o propuesta
  3. Publicamos y empezás a recibir consultas
- Aclará qué sucede después de que la persona escribe por WhatsApp

### 7) Agregar una sección de FAQ
Incluí preguntas frecuentes como mínimo:
- ¿En cuánto tiempo está lista?
- ¿Qué necesito enviarte?
- ¿La página funciona en celular?
- ¿Puedo recibir consultas por WhatsApp?
- ¿Me ayudás con dominio y publicación?
- ¿Qué pasa después de la entrega?
- ¿Sirve si todavía no tengo logo o textos?

Reglas:
- No inventes respuestas que no estén respaldadas
- Si falta información del dueño del negocio, dejá `TODO_OWNER_INPUT`
- Priorizá respuestas cortas, claras y orientadas a sacar objeciones

### 8) Reforzar confianza sin exagerar
- Diseñá mejor la prueba social existente
- Si solo hay un testimonio real, dale mejor contexto visual en vez de multiplicar pruebas falsas
- No inventes logos de clientes ni reseñas
- Compensá falta de prueba con claridad del proceso, oferta de demo y menor riesgo percibido
- Mostrá señales de confianza honestas como rapidez, contacto directo y adaptación a mobile, solo si ya están respaldadas por el sitio actual

### 9) Mejorar UX visual y legibilidad
- Mejorá espaciados, tipografía, jerarquía visual, contraste y consistencia
- Hacé que las secciones sean más escaneables
- Evitá párrafos largos y bloques densos
- Mantené una estética moderna pero simple
- Asegurá una muy buena experiencia en pantallas chicas
- Si agregás animaciones, que sean mínimas y no esenciales

### 10) SEO on-page y semántica
- Mejorá o agregá:
  - `<title>`
  - meta description
  - canonical
  - Open Graph y Twitter tags
  - headings semánticos correctos
  - alt text descriptivo
  - `loading="lazy"` en imágenes no críticas
- Orientá el contenido a intención comercial local sin hacer keyword stuffing
- No inventes dirección física, teléfono adicional ni datos de empresa que no existan
- Si hay datos suficientes y verificados, podés agregar JSON-LD simple de `Person` o `ProfessionalService`; si no, omitilo

### 11) Accesibilidad y mantenimiento
- Mejorá foco visible, estados hover/focus, labels y estructura semántica
- Asegurá buen contraste y tamaños mínimos legibles
- Si el HTML actual está muy cargado, separá estilos en `styles.css` y comportamiento en `main.js`
- No agregues librerías innecesarias
- Dejá clases y nombres de secciones claras y mantenibles

## Entregables
Quiero que hagas cambios reales en el código, no solo sugerencias.
Entregá:
- landing actualizada
- copy nuevo implementado
- estructura más clara
- CTA y mensajes de WhatsApp mejorados
- mejoras de SEO/accesibilidad/performance
- archivo `NEEDS-OWNER-INPUT.md` con cualquier dato faltante que el dueño del sitio deba completar antes de publicar

## Criterios de aceptación
La solución final debe cumplir esto:
- En menos de 5 segundos se entiende qué se vende, para quién y cuál es la acción principal
- El CTA principal es obvio, consistente y está repetido con criterio
- La landing transmite más confianza y menos fricción que la versión actual
- No hay información inventada
- La página funciona y se ve muy bien en mobile
- El código queda limpio, semántico y mantenible
- El sitio sigue siendo rápido y compatible con Vercel

## Forma de trabajo esperada
1. Inspeccioná primero el código existente
2. Proponé una estructura final breve
3. Implementá los cambios directamente
4. Explicá qué archivos modificaste y por qué
5. Enumerá cualquier `TODO_OWNER_INPUT` pendiente

Si hay una decisión dudosa entre complejidad técnica y claridad comercial, priorizá claridad comercial con implementación simple.
