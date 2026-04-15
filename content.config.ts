import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
    collections: {
        categories: defineCollection({
            type: "data",
            source: "categories/*.json",
            schema: z.object({
                slug: z.string(),
                title: z.string(),
                subtitle: z.string(),
                image: z.string(),
                order: z.number(),
            }),
            indexes: [{ columns: ["order"] }, { columns: ["slug"] }],
        }),
        projects: defineCollection({
            type: "data",
            source: "projects/**/*.json",
            schema: z.object({
                id: z.string(),
                title: z.string(),
                location: z.string(),
                year: z.string(),
                area: z.string(),
                description: z.string(),
                image: z.string(),
                gallery: z.array(z.string()),
                category: z.enum(["residencial", "comercial"]),
            }),
            indexes: [{ columns: ["category"] }, { columns: ["id"], unique: true }],
        }),
    },
});
