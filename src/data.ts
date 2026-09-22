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
    src: "https://content3.jdmagicbox.com/comp/bettiah/l4/9999p6254.6254.220812201639.l2l4/catalogue/-17366wy72r.jpg",
    alt: "Food Plaza Bettiah storefront photo from the Supriya Cinema Road listing"
  },
  {
    src: "https://content.jdmagicbox.com/comp/bettiah/l4/9999p6254.6254.220812201639.l2l4/catalogue/-d5of0m5qti.jpg",
    alt: "Food Plaza Bettiah local business photo from the Supriya Cinema Road listing"
  },
  {
    src: "https://content3.jdmagicbox.com/comp/bettiah/l4/9999p6254.6254.220812201639.l2l4/catalogue/food-plaza-bettiah-bettiah-ho-bettiah-indian-restaurants-686g38pjkz.jpg",
    alt: "Food Plaza Bettiah local business photo from the Supriya Cinema Road listing"
  },
  {
    src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2026/8/21/dc16365f-a84f-4948-a71e-f5f19c9958d9_b602813a-a55e-493b-b756-1365be8eea63.jpg",
    alt: "Food Plaza Bettiah food photo from its current Swiggy listing"
  }
] as const;

export const business = {
  name: "Food Plaza",
  address: "Supriya Road, Old LIC Building, near V2 Mall, Bettiah, Bihar 845438",
  hours: "10:00 AM – 10:00 PM",
  priceRange: "₹200–₹400",
  orderUrl: "https://www.swiggy.com/city/bettiah/food-plaza-supriya-roa-supriya-road-rest345352"
};
