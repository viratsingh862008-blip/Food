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
  { name:"Chole Bhature", category:"Breakfast", description:"A listed breakfast option at the Supriya Road outlet.", price:140 },
  { name:"Veg Manchurian", category:"Starters", description:"Soft veg manchurian balls in a savoury gravy.", price:190 },
  { name:"Veg Spring Roll", category:"Starters", description:"Crispy vegetable spring rolls.", price:63 },
  { name:"Chicken Fried Rice", category:"Fried Rice & Chowmein", description:"A slightly spicy chicken fried rice listed on the live menu.", price:213 },
  { name:"Paneer Chowmein", category:"Fried Rice & Chowmein", description:"Soft paneer with flavourful stir-fried noodles.", price:69 },
  { name:"Chicken 2 Egg Roll With Mayo", category:"Rolls", description:"Chicken and egg in a laccha paratha with mayo.", price:88 },
  { name:"Grilled Tikki Burger", category:"Burgers & Sandwiches", description:"Grilled veg tikka burger from the live menu.", price:75 },
  { name:"French Fries", category:"Snacks", description:"Crispy golden fries for a quick bite.", price:70 },
  { name:"Chocolate Shake", category:"Drinks", description:"A rich, creamy chocolate shake.", price:100 },
  { name:"Tandoori Paneer Pizza", category:"Pizza", description:"Tandoori sauce, mozzarella, onion, capsicum and paprika.", price:200 },
  { name:"Veg Biryani", category:"Rice & Biryani", description:"Aromatic rice layered with vegetables and spices.", price:155 },
  { name:"Pasta", category:"Pasta", description:"A pasta option listed in the outlet's menu.", price:150 }
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
  orderUrl: "https://www.swiggy.com/city/bettiah/food-plaza-supriya-roa-supriya-road-rest345352",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Food%20Plaza%20Supriya%20Cinema%20Road%20Bettiah",
  mapEmbedUrl: "https://www.google.com/maps?q=Food%20Plaza%20Supriya%20Cinema%20Road%20Bettiah&output=embed",
  phoneUrl: "tel:+918789659093"
};
