
/* =========================
    UTILIDADES DE J.A.R.V.I.S.
========================= */

// Preparar el historial para Gemini
export function prepareHistory(messages) {
    if (!Array.isArray(messages) || messages.length === 0) {
        throw new Error("El historial está vacío o es inválido");
    }

    const history = [];

    messages.forEach((message) => {
        if (
            !message ||
            !["user", "model"].includes(message.role) ||
            typeof message.text !== "string" ||
            !message.text.trim()
        ) {
            return;
        }

        const text = message.text.trim();
        const previous = history[history.length - 1];

        if (previous && previous.role === message.role) {
            previous.parts[0].text += "\n" + text;
        } else {
            history.push({
                role: message.role,
                parts: [{ text }]
            });
        }
    });

    if (!history.length || history[history.length - 1].role !== "user") {
        throw new Error("Falta un mensaje del usuario");
    }

    return history;
}

// Obtener el texto de una respuesta de Gemini
export function extractGeminiText(response) {
    const parts = response?.candidates?.[0]?.content?.parts;

    if (!Array.isArray(parts)) {
        throw new Error("Gemini no devolvió una respuesta válida");
    }

    const text = parts
        .map((part) => typeof part.text === "string" ? part.text : "")
        .join("")
        .trim();

    if (!text) {
        throw new Error("Gemini devolvió una respuesta vacía");
    }

    return text;
}
