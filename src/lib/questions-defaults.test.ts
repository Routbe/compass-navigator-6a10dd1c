// @vitest-environment node
import { beforeEach, expect, it, vi } from "vitest";
vi.mock("@/lib/neon", () => ({ sql: vi.fn() }));
import { sql } from "@/lib/neon";
import { publicQa, questionsEnabled } from "./questions.server";

beforeEach(() => vi.mocked(sql).mockReset());

it("never enables questions for a missing profile or missing opt-in", async () => {
  vi.mocked(sql).mockResolvedValue([]);
  expect(await questionsEnabled("owner")).toBe(false);
  vi.mocked(sql).mockResolvedValue([{ qa: {} }]);
  expect((await publicQa("owner", "root"))?.accepting).toBe(false);
});

it("reads the alias opt-in independently of the root canvas", async () => {
  vi.mocked(sql).mockImplementation(async (query) => {
    const text = Array.isArray(query) ? query.join(" ") : String(query);
    return [{ on: text.includes("public.alias_profiles") }];
  });
  expect(await questionsEnabled("owner", "root")).toBe(false);
  expect(await questionsEnabled("owner", "alias")).toBe(true);
});