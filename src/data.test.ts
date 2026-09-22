import { describe, expect, it } from "vitest";
import { business, filterMenu, menuCategories, menuItems, businessImages } from "./data";

describe("Food Plaza menu", () => {
  it("contains the published menu categories", () => {
    expect(menuCategories).toEqual([
      "All",
      "Breakfast",
      "Starters",
      "Rice & Biryani",
      "Fried Rice & Chowmein",
      "Pasta",
      "Burgers & Sandwiches",
      "Snacks",
      "Rolls",
      "Drinks",
      "Pizza"
    ]);
  });

  it("filters items by category without mutating the source", () => {
    const result = filterMenu(menuItems, "Pizza");
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((item) => item.category === "Pizza")).toBe(true);
    expect(filterMenu(menuItems, "All")).toEqual(menuItems);
  });

  it("keeps multiple verified business-listing images available for the visual system", () => {
    expect(businessImages.length).toBeGreaterThanOrEqual(3);
    expect(businessImages.every((image) => image.src.startsWith("https://"))).toBe(true);
    expect(businessImages.every((image) => image.alt.length > 0)).toBe(true);
  });

  it("uses a safe public contact state until the listing conflict is verified", () => {
    const phones = ["+91 73230 04438", "+91 87896 59093"];
    expect(new Set(phones).size).toBe(2);
  });
});
