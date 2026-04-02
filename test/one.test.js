import { expect, test, describe } from "vitest";
import { env } from "cloudflare:workers";

describe("A", async() => {
    test("B", async() => {
        const response = await env.AI.run("@cf/meta/llama-3-8b-instruct", { prompt: "Hi! Who are you?" });
        expect(response).not.toBeUndefined();
    })
}, 30000)
