import { describe, expect, it } from "vitest";
import { business, businessImages, filterMenu, menuCategories, menuItems } from "./data";

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

  it("keeps researched business media and public destinations configured", () => {
    expect(businessImages.length).toBeGreaterThanOrEqual(4);
    expect(businessImages.every((image) => image.src.startsWith("https://"))).toBe(true);
    expect(business.orderUrl).toContain("swiggy.com");
    expect(business.mapsUrl).toContain("google.com/maps");
    expect(business.mapEmbedUrl).toContain("output=embed");
  });

  it("contains enough menu content for the interactive filter", () => {
    expect(menuItems.length).toBeGreaterThanOrEqual(10);
    expect(new Set(menuItems.map(item => item.category)).size).toBeGreaterThanOrEqual(8);
  });
});
