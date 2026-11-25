
import { describe, it, expect } from "vitest";

import { prepareHistory } from "../src/utils.js";

describe("Historial del chat JARVIS", () => {

    it("mantiene el orden de la conversación", () => {
        const messages = [
            { role: "user", text: "Hola Jarvis" },
            { role: "model", text: "Buenas tardes, señor." },
            { role: "user", text: "¿Cómo estás?" }
        ];

        const result = prepareHistory(messages);

        expect(result.map(message => message.role)).toEqual([
            "user",
            "model",
            "user"
        ]);
    });

    it("une mensajes consecutivos del usuario", () => {
        const messages = [
            { role: "user", text: "Hola" },
            { role: "user", text: "Jarvis" }
        ];

        const result = prepareHistory(messages);

        expect(result).toEqual([
            {
                role: "user",
                parts: [{ text: "Hola\nJarvis" }]
            }
        ]);
    });

});
