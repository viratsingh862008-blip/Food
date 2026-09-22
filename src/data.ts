export type MenuCategory =
  | "Breakfast" | "Starters" | "Rice & Biryani" | "Fried Rice & Chowmein"
  | "Pasta" | "Burgers & Sandwiches" | "Snacks" | "Rolls" | "Drinks" | "Pizza";

export type MenuItem = {
  name: string;
  category: MenuCategory;
  description: string;
  price?: number;
};

export const menuCategories = [
  "All","Breakfast","Starters","Rice & Biryani","Fried Rice & Chowmein",
  "Pasta","Burgers & Sandwiches","Snacks","Rolls","Drinks","Pizza"
] as const;

export const menuItems: MenuItem[] = [
  { name:"Veg Manchurian", category:"Starters", description:"A popular vegetarian Indo-Chinese favourite.", price:190 },
  { name:"Veg Spring Roll", category:"Starters", description:"Crispy vegetable spring rolls.", price:63 },
  { name:"French Fries", category:"Snacks", description:"A listed customer favourite for a quick bite." },
  { name:"Paneer Chowmein", category:"Fried Rice & Chowmein", description:"A listed customer favourite from the Supriya Road outlet." },
  { name:"Chicken 2 Egg Roll With Mayo", category:"Rolls", description:"A listed customer favourite with a rich, filling roll." },
  { name:"Grilled Tikki Burger", category:"Burgers & Sandwiches", description:"A listed customer favourite for a casual meal." }
];

export function filterMenu(items: MenuItem[], category: typeof menuCategories[number]) {
  return category === "All" ? items : items.filter((item) => item.category === category);
}

export const businessImages = [
  {
    src: "https://images.openai.com/static-rsc-1/fy1Cp8YzdE_lYWG-rOYb5jgpHaDPkQ7_lo1P5Gc0d3XY3PXIysA2GeBPufwWkLAxOYr0dWoNHcQPM_WR-3oTBR-6lP3B9zOJ0xt7hY-ydaCPbj6N6VZZkuqFABg3-XZ6voVh-A6dKId4G5sngI2Qab1Rm--f-UTI0f2FjwG03Kk",
    alt: "Food Plaza Bettiah business listing photo"
  },
  {
    src: "https://images.openai.com/static-rsc-1/McvcoD7lrhrUQVw6YA1YBMJVvq5YPEf8OoUgG-PE_FZEAh0sIf2yGHX7yFTzSXVFVAfiy16VRk6bPSaAfeGM3-7J5p9ubpitcEWMpnt0-OkZwG8A5s7yrbD7DFg3mVkdItoyLxZBOIwEbaDj2CEuwqqMcQHaJ165tMBV1-adEuc",
    alt: "Food Plaza Bettiah customer review photo"
  },
  {
    src: "https://images.openai.com/static-rsc-1/a-8D3HOD_IiWfytJUQgqlQOLzeuaS3kgLk9GYFhxZ5zlRElG_Dyjf_k78FYo3nmxUF6NB5EjFeR4FPuu25fHYhbdCvBRZz5XX-QB8RMZGG9IXIV5bNUcY-fZTowl5G71ZNEyguodJADdxq3ApdYt7TP_iJ9LhSm3J7q5iUva-zQ",
    alt: "Food Plaza Bettiah customer review photo"
  }
] as const;

export const business = {
  name: "Food Plaza",
  address: "Supriya Road, Old LIC Building, near V2 Mall, Bettiah, Bihar 845438",
  hours: "10:00 AM – 10:00 PM",
  priceRange: "₹200–₹400",
  orderUrl: "https://www.swiggy.com/city/bettiah/food-plaza-supriya-roa-supriya-road-rest345352"
};
