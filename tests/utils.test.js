
import { describe, it, expect } from "vitest";

import {
    prepareHistory,
    extractGeminiText
} from "../src/utils.js";

// Tests de preparación del historial
describe("prepareHistory", () => {

    it("convierte un mensaje al formato de Gemini", () => {
        const messages = [
            { role: "user", text: "Hola Jarvis" }
        ];

        const result = prepareHistory(messages);

        expect(result).toEqual([
            {
                role: "user",
                parts: [{ text: "Hola Jarvis" }]
            }
        ]);
    });

    it("rechaza un historial vacío", () => {
        expect(() => prepareHistory([])).toThrow();
    });

});

// Tests de respuestas de Gemini
describe("extractGeminiText", () => {

    it("extrae correctamente el texto de Gemini", () => {
        const response = {
            candidates: [
                {
                    content: {
                        parts: [
                            { text: "Buenas tardes, señor." }
                        ]
                    }
                }
            ]
        };

        const result = extractGeminiText(response);

        expect(result).toBe("Buenas tardes, señor.");
    });

    it("detecta una respuesta sin contenido", () => {
        expect(() => extractGeminiText({})).toThrow();
    });

});
