
# 🤖 J.A.R.V.I.S. AI

## Proyecto Integrador M3 - Henry

J.A.R.V.I.S. AI es una Single Page Application (SPA) que permite conversar con un asistente virtual inspirado en J.A.R.V.I.S., el personaje del universo de Iron Man.

El proyecto utiliza Google Gemini AI para generar respuestas en tiempo real, manteniendo una personalidad inteligente, formal y con un toque de humor.

La interfaz tiene un diseño futurista, con un núcleo holográfico animado que reacciona durante la conversación.

## 🌐 Enlaces

**Aplicación publicada:**

https://jarvis-ai-m3.vercel.app

**Repositorio de GitHub:**

https://github.com/AEzequielLeal/Proyecto-M3-JARVIS-AI

## 🚀 Funcionalidades

- Diseño responsive y mobile-first.
- Interfaz holográfica con animaciones.
- Navegación SPA sin recargar la página.
- Tres vistas: Home, Chat y About.
- Routing mediante History API.
- Compatibilidad con los botones Atrás y Adelante.
- Chat conectado con Google Gemini AI.
- Personalidad de J.A.R.V.I.S. mediante system prompt.
- Historial de conversación durante la sesión.
- Indicador visual mientras se procesa una respuesta.
- Scroll automático al último mensaje.
- Manejo de errores de la API.
- Reintentos y modelos de respaldo ante errores temporales.
- Protección de la API key mediante Vercel Functions.
- Tests unitarios con Vitest.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript ES Modules
- DOM
- History API
- Fetch API
- Async/Await
- Google Gemini API
- Vercel Serverless Functions
- Vitest
- Git y GitHub

## 📁 Estructura del proyecto

    project-root/
    ├── api/
    │   └── functions.js
    ├── src/
    │   ├── index.html
    │   ├── styles.css
    │   ├── app.js
    │   ├── chat.js
    │   └── utils.js
    ├── tests/
    │   ├── app.test.js
    │   └── utils.test.js
    ├── .env.example
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── vercel.json
    └── README.md

## 💻 Instalación local

### 1. Clonar el repositorio

    git clone https://github.com/AEzequielLeal/Proyecto-M3-JARVIS-AI.git

### 2. Entrar en el proyecto

    cd Proyecto-M3-JARVIS-AI

### 3. Instalar las dependencias

    npm install

Se requiere Node.js y npm.

### 4. Configurar las variables de entorno

Obtener una API key desde:

https://aistudio.google.com/apikey

Crear un archivo `.env.local` en la raíz del proyecto.

Agregar:

    GEMINI_API_KEY=TU_API_KEY

Reemplazar `TU_API_KEY` por una clave válida.

La clave nunca debe incluirse en el repositorio público.

### 5. Iniciar el proyecto

Iniciar sesión en Vercel y vincular el proyecto, si es necesario:

    npx vercel login
    npx vercel link

Ejecutar:

    npx vercel dev

Abrir la dirección local indicada por Vercel, normalmente:

http://localhost:3000

Se utiliza Vercel Dev para ejecutar tanto el frontend como las funciones serverless.

## 🧭 Navegación SPA

La aplicación incluye tres rutas:

- `/home`: bienvenida y presentación de J.A.R.V.I.S.
- `/chat`: interfaz de conversación.
- `/about`: información sobre el proyecto.

La navegación se implementa con History API.

Se utilizan `pushState()`, `replaceState()` y el evento `popstate` para actualizar las vistas y conservar el comportamiento de los botones Atrás y Adelante del navegador.

## 💬 Funcionamiento del chat

Los mensajes se almacenan en un array de JavaScript durante la sesión.

Al enviar un mensaje:

1. Se captura el texto del usuario.
2. El mensaje se agrega al historial.
3. Se muestra el estado de procesamiento.
4. El frontend realiza una petición a `/api/functions`.
5. La función serverless consulta Gemini.
6. Gemini genera la respuesta.
7. La respuesta se muestra en el chat.
8. El núcleo holográfico cambia de animación.

En cada solicitud se envía el historial de la conversación para mantener el contexto.

El historial se conserva en memoria y se reinicia al recargar la aplicación.

## 🔐 Seguridad de la API

La clave de Gemini se almacena en variables de entorno.

La comunicación se realiza mediante la función serverless:

`api/functions.js`

El frontend no accede directamente a la clave.

En producción, la variable `GEMINI_API_KEY` se configura desde el panel de Vercel.

Los archivos `.env` y `.env.local` están excluidos mediante `.gitignore`.

El repositorio incluye `.env.example` como referencia, sin credenciales privadas.

## 🧠 Personalidad de J.A.R.V.I.S.

El system prompt establece:

- Personalidad inteligente y formal.
- Humor sutil.
- Respuestas breves y naturales.
- Conocimiento del universo ficticio de Tony Stark.
- Conversaciones en español.
- Limitaciones para no afirmar capacidades inexistentes.

El objetivo es ofrecer una experiencia de conversación coherente con el personaje.

## 🧪 Tests unitarios

El proyecto utiliza Vitest.

Las pruebas se encuentran en la carpeta `tests/`.

Se comprueban, entre otras funcionalidades:

- Transformación del historial al formato de Gemini.
- Validación de historiales vacíos.
- Extracción del texto de una respuesta.
- Detección de respuestas inválidas.
- Conservación del orden de los mensajes.
- Procesamiento de mensajes consecutivos.

Para ejecutar las pruebas:

    npm test

Las pruebas unitarias utilizan datos simulados y no necesitan realizar solicitudes reales a Gemini.

## 📱 Diseño responsive

La interfaz fue desarrollada con un enfoque mobile-first.

Se utilizaron Flexbox, CSS Grid y media queries para adaptar la aplicación a distintos dispositivos.

Tamaños de referencia utilizados:

- Celular: 375 × 812 px.
- Tablet: 768 × 1024 px.
- Desktop: 1440 × 900 px.

El diseño incluye un núcleo holográfico, panel de conversación y animaciones asociadas a los estados del asistente.

## ☁️ Despliegue en Vercel

La aplicación está desplegada en Vercel.

Para realizar el despliegue:

1. Crear un proyecto en Vercel.
2. Vincular el repositorio de GitHub.
3. Configurar la variable `GEMINI_API_KEY` en Producción.
4. Verificar la configuración de `vercel.json`.
5. Publicar la aplicación.
6. Comprobar las rutas y la función serverless.

También se puede desplegar desde la terminal:

    npx vercel --prod

URL pública:

https://jarvis-ai-m3.vercel.app

## 🤖 Uso de inteligencia artificial durante el desarrollo

Se utilizó ChatGPT como herramienta de apoyo para comprender conceptos de programación, analizar errores y desarrollar partes del proyecto.

### Prompts y consultas utilizados

- Solicitar orientación para crear una interfaz de chat con HTML y CSS mobile-first.
- Diseñar una interfaz futurista inspirada en J.A.R.V.I.S. con un núcleo holográfico animado.
- Explicar History API, pushState, replaceState y popstate.
- Implementar la navegación SPA entre Home, Chat y About.
- Organizar el historial de mensajes utilizando arrays de objetos.
- Conectar el frontend con Gemini mediante una función serverless.
- Implementar el manejo de estados de carga y error.
- Crear pruebas unitarias con Vitest.
- Analizar errores HTTP 401, 404 y 503.
- Configurar las variables de entorno y el despliegue en Vercel.

### Decisiones tomadas

- Utilizar HTML, CSS y JavaScript sin frameworks para construir la SPA.
- Elegir J.A.R.V.I.S. como personaje principal.
- Incorporar animaciones holográficas para representar visualmente el procesamiento de respuestas.
- Separar la lógica de navegación, chat y utilidades.
- Mantener el historial en memoria durante la sesión.
- Proteger la API key mediante Vercel Functions.
- Utilizar Gemini para generar respuestas reales.
- Incorporar modelos de respaldo para mejorar la disponibilidad del chat.
- Utilizar Vitest para comprobar funciones sin depender de solicitudes reales a la API.

Las sugerencias de IA se utilizaron como apoyo y se adaptaron a los requisitos del Proyecto Integrador M3.

## 👨‍💻 Autor

**Ezequiel Leal**

Proyecto Integrador M3

Bootcamp de Desarrollo Web - Henry
