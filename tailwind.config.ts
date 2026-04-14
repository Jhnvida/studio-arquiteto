import type { Config } from "tailwindcss";

export default <Partial<Config>>{
    content: [
        "./app/components/**/*.{vue,js,ts}",
        "./app/layouts/**/*.vue",
        "./app/pages/**/*.vue",
        "./app/app.vue",
        "./app/plugins/**/*.{js,ts}",
        "./app/composables/**/*.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                studio: {
                    black: "#0a0a0a",
                    white: "#ffffff",
                    muted: "#f7f7f7",
                    border: "#e5e7eb",
                    textSoft: "#6b7280",
                },
            },
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
            },
            letterSpacing: {
                ultra: "0.3em",
            },
            boxShadow: {
                soft: "0 8px 30px rgba(0, 0, 0, 0.08)",
            },
        },
    },
};
