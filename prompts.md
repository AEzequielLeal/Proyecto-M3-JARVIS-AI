
# Documentación del uso de Inteligencia Artificial

## Proyecto Integrador M3 - J.A.R.V.I.S. AI

### 1. Herramienta utilizada

Durante el desarrollo del proyecto se utilizó ChatGPT como herramienta de apoyo para comprender conceptos, planificar funcionalidades, generar ejemplos de código, revisar errores y resolver problemas de implementación.

La inteligencia artificial fue utilizada como asistente de desarrollo. Las propuestas se integraron, probaron y ajustaron durante la construcción del proyecto.

Los prompts presentados a continuación resumen las consultas realizadas durante el proceso. No son necesariamente transcripciones literales de cada mensaje.

---

## 2. Consultas y prompts utilizados

### Prompt 1: Planificación del proyecto

**Consulta:**

"Necesito desarrollar el Proyecto Integrador M3 de Henry. Quiero crear una aplicación web de un asistente virtual inspirado en J.A.R.V.I.S., de Iron Man. Ayudame a organizar el proyecto y cumplir los requisitos."

**Objetivo:**

Definir la estructura inicial del proyecto y las funcionalidades necesarias.

**Aplicación:**

Se organizó el desarrollo de una SPA con las vistas Home, Chat y About.

---

### Prompt 2: Diseño visual

**Consulta:**

"Quiero que JARVIS tenga un diseño futurista, oscuro, con colores celestes y un núcleo holográfico animado."

**Objetivo:**

Crear una identidad visual relacionada con el personaje.

**Aplicación:**

Se desarrolló una interfaz con animaciones, efectos de iluminación, panel de conversación y estados visuales del asistente.

---

### Prompt 3: Diseño responsive

**Consulta:**

"Ayudame a adaptar la interfaz de JARVIS para celular, tablet y computadora utilizando CSS mobile-first."

**Objetivo:**

Cumplir con los requisitos de diseño responsive.

**Aplicación:**

Se utilizaron estilos CSS y media queries para adaptar la distribución a diferentes tamaños de pantalla.

---

### Prompt 4: Navegación SPA

**Consulta:**

"Explicame cómo crear las rutas Home, Chat y About con JavaScript y History API, sin recargar la página."

**Objetivo:**

Implementar navegación entre vistas.

**Aplicación:**

Se utilizaron pushState, replaceState y popstate para controlar la navegación y los botones Atrás y Adelante del navegador.

---

### Prompt 5: Funcionamiento del chat

**Consulta:**

"Necesito crear un chat que muestre los mensajes del usuario y de JARVIS, mantenga el historial y haga scroll automático."

**Objetivo:**

Construir la interfaz de conversación.

**Aplicación:**

Se implementó la visualización dinámica de mensajes mediante JavaScript y el DOM.

El historial se mantiene en memoria durante la sesión.

---

### Prompt 6: Integración con Gemini

**Consulta:**

"Quiero que JARVIS responda utilizando Google Gemini. Explicame cómo conectar el frontend con una función serverless de Vercel."

**Objetivo:**

Incorporar respuestas generadas por inteligencia artificial.

**Aplicación:**

Se creó el endpoint /api/functions para recibir el historial, consultar Gemini y devolver la respuesta al frontend.

---

### Prompt 7: Seguridad de la API key

**Consulta:**

"Explicame cómo guardar GEMINI_API_KEY en las variables de entorno de Vercel sin mostrarla en el código público."

**Objetivo:**

Proteger las credenciales de acceso a Google Gemini.

**Aplicación:**

Se configuró la clave como variable de entorno y se evitó utilizarla directamente desde el navegador.

También se utilizó .gitignore para excluir archivos de configuración privada.

---

### Prompt 8: Personalidad de J.A.R.V.I.S.

**Consulta:**

"Ayudame a crear un system prompt para que el asistente tenga una personalidad similar a JARVIS: inteligente, formal, eficiente y con humor sutil."

**Objetivo:**

Lograr que las respuestas mantengan un estilo coherente con el personaje.

**Aplicación:**

Se incorporó un system prompt en la función serverless, incluyendo estilo de conversación, conocimientos y limitaciones.

---

### Prompt 9: Pruebas unitarias

**Consulta:**

"Necesito implementar pruebas unitarias con Vitest para cumplir con el Proyecto Integrador M3. Explicame cómo probar las funciones del historial y las respuestas de Gemini."

**Objetivo:**

Verificar funciones importantes de la aplicación.

**Aplicación:**

Se configuró Vitest y se crearon los archivos:

- tests/utils.test.js
- tests/app.test.js

Se ejecutó npm test.

**Resultado verificado:**

- 2 archivos de pruebas aprobados.
- 6 pruebas aprobadas.
- 0 pruebas fallidas.

---

### Prompt 10: Despliegue en Vercel

**Consulta:**

"Ayudame a publicar JARVIS en Vercel, conectar GitHub y configurar las rutas de la SPA y las variables de entorno."

**Objetivo:**

Publicar la aplicación para permitir su acceso desde Internet.

**Aplicación:**

Se vinculó el repositorio de GitHub con Vercel, se configuró el despliegue y se comprobó el funcionamiento de las rutas y del chat.

---

### Prompt 11: Diagnóstico de errores

**Consulta:**

"JARVIS no responde en Vercel. Aparecen errores relacionados con GEMINI_API_KEY y respuestas HTTP 503. Ayudame a encontrar el problema."

**Objetivo:**

Identificar y corregir los errores de comunicación con la API.

**Aplicación:**

Se revisaron los registros de ejecución de Vercel, la configuración de las variables de entorno y los errores devueltos por Google Gemini.

Se comprobó que la clave estaba disponible en el servidor y que el error HTTP 503 provenía de la solicitud a Gemini.

---

### Prompt 12: Modelos de respaldo y rendimiento

**Consulta:**

"Gemini está ocupado y JARVIS tarda demasiado en responder. Necesito una solución para mejorar la disponibilidad y reducir los tiempos de espera."

**Objetivo:**

Mejorar la experiencia del usuario ante problemas temporales de la API.

**Aplicación:**

Se implementaron modelos de respaldo y límites de espera por solicitud.

Se probó nuevamente la aplicación publicada y se observó una mejora en el tiempo de respuesta.

---

### Prompt 13: Documentación del proyecto

**Consulta:**

"Ayudame a preparar el README y documentar cómo utilicé inteligencia artificial durante el desarrollo para entregar el Proyecto Integrador M3."

**Objetivo:**

Explicar el funcionamiento del proyecto y registrar el proceso de desarrollo.

**Aplicación:**

Se preparó documentación sobre tecnologías, instalación, funcionamiento del chat, seguridad, tests y despliegue.

---

## 3. Decisiones de desarrollo

Durante la construcción del proyecto se tomaron las siguientes decisiones:

- Utilizar HTML, CSS y JavaScript sin frameworks.
- Crear una SPA con tres vistas.
- Inspirar el diseño en J.A.R.V.I.S., de Iron Man.
- Utilizar Google Gemini como modelo de inteligencia artificial.
- Proteger las credenciales mediante funciones serverless.
- Mantener el historial de conversación durante la sesión.
- Implementar estados visuales de procesamiento y respuesta.
- Utilizar Vitest para realizar pruebas unitarias.
- Desplegar el proyecto en Vercel.
- Incorporar mecanismos de respaldo y tiempos máximos de espera para las solicitudes.

## 4. Validaciones realizadas

Se realizaron comprobaciones durante el desarrollo:

- Navegación entre Home, Chat y About.
- Funcionamiento de la aplicación publicada.
- Comunicación entre el frontend y la función serverless.
- Obtención de respuestas de Google Gemini.
- Visualización del estado de procesamiento.
- Manejo de errores de la API.
- Ejecución de pruebas unitarias con Vitest.

Resultado final registrado en la terminal:

Test Files: 2 passed (2)
Tests: 6 passed (6)

## 5. Reflexión sobre el uso de IA

La utilización de ChatGPT permitió recibir explicaciones, obtener ejemplos y analizar problemas durante el desarrollo.

Resultó especialmente útil para comprender la comunicación con APIs, el funcionamiento de las funciones serverless, el uso de variables de entorno y la interpretación de errores HTTP.

También fue necesario ejecutar pruebas, revisar registros y ajustar el código, porque las respuestas de una herramienta de inteligencia artificial no garantizan que una implementación funcione correctamente.

La experiencia permitió aplicar conocimientos del módulo y comprender mejor la integración entre frontend, backend y servicios externos.

## 6. Enlaces

Aplicación:
https://jarvis-ai-m3.vercel.app

Repositorio:
https://github.com/AEzequielLeal/Proyecto-M3-JARVIS-AI

---

Proyecto Integrador M3 - Henry

Autor: Ezequiel Leal
