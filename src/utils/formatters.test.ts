import { describe, expect, it } from "vitest";
import { pluralize } from "./formatters";

describe("Function: pluralize", () => {
  it("should return singular form when count is 1", () => {
    expect(pluralize(1, "item")).toBe("1 item");
  });

  it("should return plural form when count is not 1", () => {
    expect(pluralize(0, "item")).toBe("0 items");
    expect(pluralize(2, "item")).toBe("2 items");
  });

  it("should use custom suffix when provided", () => {
    expect(pluralize(2, "cactus", "es")).toBe("2 cactuses");
  });
});
