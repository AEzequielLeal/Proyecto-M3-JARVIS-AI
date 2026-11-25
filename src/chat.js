
/* =========================
   CHAT J.A.R.V.I.S.
========================= */

// Historial durante la sesión
const messages = [];

// Mensaje de bienvenida visual
const welcomeMessage = {
    role: "model",
    text: "Bienvenido, señor. Todos los sistemas están operativos. ¿En qué puedo ayudarlo?"
};

// Mostrar mensajes en pantalla
function renderMessages() {
    const container = document.querySelector("#messages");

    container.replaceChildren();

    // La bienvenida no se envía a Gemini
    const visibleMessages = [welcomeMessage, ...messages];

    visibleMessages.forEach((message) => {
        const element = document.createElement("div");

        const isUser = message.role === "user";

        element.className = isUser
            ? "message user-message"
            : "message character-message";

        const author = document.createElement("span");
        author.className = "message-author";
        author.textContent = isUser ? "Usuario" : "J.A.R.V.I.S.";

        const paragraph = document.createElement("p");
        paragraph.textContent = message.text;

        element.appendChild(author);
        element.appendChild(paragraph);
        container.appendChild(element);
    });

    // Scroll automático
    container.scrollTop = container.scrollHeight;
}

// Controlar el núcleo holográfico
function setCoreState(status) {
    const core = document.querySelector("#jarvis-core");
    const coreStatus = document.querySelector("#core-status");
    const indicator = document.querySelector("#typing-indicator");

    core.dataset.state = status;

    indicator.hidden = status !== "processing";

    if (status === "processing") {
        coreStatus.textContent = "PROCESSING REQUEST";

    } else if (status === "responding") {
        coreStatus.textContent = "TRANSMITTING RESPONSE";

    } else {
        coreStatus.textContent = "AWAITING COMMAND";
    }
}

// Pedir una respuesta real a Gemini
async function requestReply() {
    const response = await fetch("/api/functions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ messages })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || `HTTP ${response.status}`);
    }

    if (typeof data.reply !== "string" || !data.reply.trim()) {
        throw new Error("La respuesta de JARVIS está vacía");
    }

    return data.reply;
}

// Inicializar el chat
export function initChat() {
    const form = document.querySelector("#chat-form");
    const input = document.querySelector("#message-input");
    const sendButton = document.querySelector("#send-button");
    const errorMessage = document.querySelector("#error-message");

    renderMessages();
    setCoreState("idle");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const text = input.value.trim();

        if (!text || sendButton.disabled) {
            return;
        }

        // Limpiar errores anteriores
        errorMessage.hidden = true;
        errorMessage.textContent = "";

        // Guardar mensaje del usuario
        messages.push({
            role: "user",
            text
        });

        input.value = "";
        renderMessages();

        // Activar estado de procesamiento
        setCoreState("processing");
        sendButton.disabled = true;
        input.disabled = true;

        try {
            // Esperar respuesta de Gemini
            const reply = await requestReply();

            // Guardar respuesta
            messages.push({
                role: "model",
                text: reply
            });

            renderMessages();

            // Activar ondas holográficas
            setCoreState("responding");

            await new Promise((resolve) => {
                setTimeout(resolve, 1500);
            });

        } catch (error) {
            errorMessage.textContent = error.message;
            errorMessage.hidden = false;

        } finally {
            // Restaurar estado inicial
            setCoreState("idle");
            sendButton.disabled = false;
            input.disabled = false;
            input.focus();
        }
    });
}
