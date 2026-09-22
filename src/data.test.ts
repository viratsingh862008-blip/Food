import { describe, expect, it } from "vitest";
import { business, businessImages, filterMenu, menuCategories, menuItems } from "./data";
import { getHeroWordOffsets } from "./heroAnimation";

describe("Food Plaza menu", () => {
  it("contains the published menu categories", () => {
    expect(menuCategories).toEqual([
      "All","Breakfast","Starters","Rice & Biryani","Fried Rice & Chowmein",
      "Pasta","Burgers & Sandwiches","Snacks","Rolls","Drinks","Pizza"
    ]);
  });

  it("filters items by category without mutating the source", () => {
    const result = filterMenu(menuItems, "Pizza");
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((item) => item.category === "Pizza")).toBe(true);
    expect(filterMenu(menuItems, "All")).toEqual(menuItems);
  });

  it("keeps multiple researched Food Plaza business images available", () => {
    expect(businessImages.length).toBeGreaterThanOrEqual(4);
    expect(businessImages.every((image) => image.src.startsWith("https://"))).toBe(true);
  });

  it("keeps the public ordering destination configured", () => {
    expect(business.orderUrl).toContain("swiggy.com");
  });
});

describe("Food Plaza hero animation", () => {
  it("starts with the reference staggered side-word offsets", () => {
    expect(getHeroWordOffsets(0, 1440)).toEqual({
      left: [-60, -100, -140, -180],
      right: [60, 100, 140, 180]
    });
  });

  it("pulls the side words fully inward at the end of the sticky range", () => {
    expect(getHeroWordOffsets(1, 1440)).toEqual({
      left: [0, 0, 0, 0],
      right: [0, 0, 0, 0]
    });
  });

  it("halves the offsets on mobile", () => {
    expect(getHeroWordOffsets(0, 390)).toEqual({
      left: [-30, -50, -70, -90],
      right: [30, 50, 70, 90]
    });
  });
});
