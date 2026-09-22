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

export const business = {
  name: "Food Plaza",
  address: "Supriya Road, Old LIC Building, near V2 Mall, Bettiah, Bihar 845438",
  hours: "10:00 AM – 10:00 PM",
  priceRange: "₹200–₹400",
  orderUrl: "https://www.swiggy.com/city/bettiah/food-plaza-supriya-roa-supriya-road-rest345352"
};
