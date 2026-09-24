import { describe, expect, it } from "vitest";
import { business, businessImages, filterMenu, menuCategories, menuItems } from "./data";
import { defaultSiteConfig } from "./siteConfig";

describe("Food Plaza menu", () => {
  it("contains the expanded menu categories", () => {
    expect(menuCategories).toEqual([
      "All","Breakfast","Starters","Rolls","Burgers","Fried Rice","Chowmein","Hot Dogs",
      "Combos","Chilli","Pizza","Sandwich","Snacks/Rolls","FP Veg","Biryani","Rice",
      "Drinks","Desserts","Chinese","Other"
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


  it("exposes a direct WhatsApp enquiry destination", () => {
    expect(defaultSiteConfig.business.whatsappUrl).toMatch(/^https:\/\/wa\.me\/918789659093\?text=/);
    expect(defaultSiteConfig.business.whatsappUrl).toContain("Food%20Plaza");
  });
  it("contains the expanded menu dataset", () => {
    expect(menuItems.length).toBeGreaterThanOrEqual(70);
    expect(new Set(menuItems.map(item => item.category)).size).toBeGreaterThanOrEqual(12);
    expect(menuItems.some(item => item.source === "Zomato")).toBe(true);
    expect(menuItems.some(item => item.source === "Swiggy")).toBe(true);
  });
});
