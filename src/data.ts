export type MenuItem = {
  name: string;
  category: string;
  description?: string;
  price?: number;
  image?: string;
  source: "Swiggy" | "Zomato" | "Swiggy + Zomato";
};

export const menuCategories = [
  "All","Breakfast","Starters","Rolls","Burgers","Fried Rice","Chowmein","Hot Dogs",
  "Combos","Chilli","Pizza","Sandwich","Snacks/Rolls","FP Veg","Biryani","Rice",
  "Drinks","Desserts","Chinese","Other"
] as const;

const swiggyFoodImage = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2026/8/21/dc16365f-a84f-4948-a71e-f5f19c9958d9_b602813a-a55e-493b-b756-1365be8eea63.jpg";

export const menuItems: MenuItem[] = [
  {name:"Veg Manchurian (Pack of 2)",category:"Starters",price:190,source:"Swiggy",image:swiggyFoodImage},
  {name:"Veg Spring Roll",category:"Starters",price:63,source:"Swiggy",image:swiggyFoodImage},
  {name:"Chicken Spring Roll",category:"Starters",price:81,source:"Swiggy",image:swiggyFoodImage},
  {name:"Paneer Spring Roll",category:"Starters",price:75,source:"Swiggy",image:swiggyFoodImage},
  {name:"Mushroom Chilli",category:"Chilli",price:100,source:"Swiggy",image:swiggyFoodImage},
  {name:"Paneer Chilli",category:"Chilli",price:100,source:"Swiggy",image:swiggyFoodImage},
  {name:"Chilli Chicken",category:"Chilli",price:100,source:"Swiggy",image:swiggyFoodImage},
  {name:"Veg Fried Rice",category:"Fried Rice",price:150,source:"Swiggy",image:swiggyFoodImage},
  {name:"Paneer Fried Rice",category:"Fried Rice",price:250,source:"Swiggy",image:swiggyFoodImage},
  {name:"Mixed Fried Rice",category:"Fried Rice",price:188,source:"Swiggy",image:swiggyFoodImage},
  {name:"Chicken Fried Rice",category:"Fried Rice",price:213,source:"Swiggy",image:swiggyFoodImage},
  {name:"Egg Fried Rice",category:"Fried Rice",price:185,source:"Swiggy",image:swiggyFoodImage},
  {name:"Steem Rice Full Plate",category:"Rice",price:100,source:"Swiggy",image:swiggyFoodImage},
  {name:"Jeera Rice Full Plate",category:"Rice",price:125,source:"Swiggy",image:swiggyFoodImage},
  {name:"Steam Rice",category:"Rice",price:115,source:"Swiggy",image:swiggyFoodImage},
  {name:"Jeera Rice",category:"Rice",price:135,source:"Swiggy",image:swiggyFoodImage},
  {name:"Veg Chowmein",category:"Chowmein",price:90,source:"Swiggy",image:swiggyFoodImage},
  {name:"Paneer Chowmein",category:"Chowmein",price:69,source:"Swiggy",image:swiggyFoodImage},
  {name:"Egg Chowmein",category:"Chowmein",price:60,source:"Swiggy",image:swiggyFoodImage},
  {name:"Chicken Chowmein",category:"Chowmein",price:80,source:"Swiggy",image:swiggyFoodImage},
  {name:"Harbi Burger",category:"Burgers",price:75,source:"Swiggy",image:swiggyFoodImage},
  {name:"Paneer Burger",category:"Burgers",price:155,source:"Swiggy",image:swiggyFoodImage},
  {name:"F P Spical Veg Burgur",category:"Burgers",price:150,source:"Swiggy",image:swiggyFoodImage},
  {name:"Tikki Burger",category:"Burgers",price:60,source:"Swiggy",image:swiggyFoodImage},
  {name:"Chicken Spicy Burger",category:"Burgers",price:88,source:"Swiggy",image:swiggyFoodImage},
  {name:"Grilled Tikki Burger",category:"Burgers",price:75,source:"Swiggy",image:swiggyFoodImage},
  {name:"Amul Cheese Burger",category:"Burgers",price:88,source:"Swiggy",image:swiggyFoodImage},
  {name:"FP Special Burger",category:"Burgers",price:125,source:"Swiggy",image:swiggyFoodImage},
  {name:"Chicken Burger",category:"Burgers",price:75,source:"Swiggy",image:swiggyFoodImage},
  {name:"Paneer Hot Dog",category:"Hot Dogs",source:"Swiggy",image:swiggyFoodImage},
  {name:"Grilled Veg Hot Dog",category:"Hot Dogs",price:110,source:"Swiggy",image:swiggyFoodImage},
  {name:"Grilled Paneer Hot Dog",category:"Hot Dogs",price:115,source:"Swiggy",image:swiggyFoodImage},
  {name:"Grilled Chicken Hot Dog",category:"Hot Dogs",price:135,source:"Swiggy",image:swiggyFoodImage},
  {name:"Veg Fried Rice With Manchurian 4 Pcs",category:"Combos",price:350,source:"Swiggy",image:swiggyFoodImage},
  {name:"Veg Fried Rice Full With Chilli Chicken Gravy Full",category:"Combos",price:500,source:"Swiggy",image:swiggyFoodImage},
  {name:"Veg Fried Rice With Paneer Chilli 4 Pcs Gravy",category:"Combos",price:250,source:"Swiggy",image:swiggyFoodImage},
  {name:"Veg Manchurian Full With Veg Fride Rice",category:"Combos",price:480,source:"Swiggy",image:swiggyFoodImage},
  {name:"Grilled Veg Sandwich With Spring Roll",category:"Combos",price:220,source:"Swiggy",image:swiggyFoodImage},
  {name:"Tikki Burger, Harbi Burger, Amul Cheese Burger",category:"Combos",price:270,source:"Swiggy",image:swiggyFoodImage},
  {name:"Fp Special Chicken Burger + Fp Chicken Burger",category:"Combos",price:270,source:"Swiggy",image:swiggyFoodImage},
  {name:"Mixed Fried Rice Full + Chicken Chill Full",category:"Combos",price:500,source:"Swiggy",image:swiggyFoodImage},
  {name:"Masala French Fries Half + Amul Cheese Burger",category:"Combos",price:170,source:"Swiggy",image:swiggyFoodImage},
  {name:"Food Plaza Spl Chicken Pizza",category:"Pizza",price:220,source:"Swiggy",image:swiggyFoodImage},
  {name:"Chicken Delight Pizza",category:"Pizza",price:200,source:"Swiggy",image:swiggyFoodImage},
  {name:"Margherita Pizza",category:"Pizza",price:140,source:"Swiggy",image:swiggyFoodImage},
  {name:"Tandoori Paneer Pizza",category:"Pizza",price:200,source:"Swiggy",image:swiggyFoodImage},
  {name:"Sandwich",category:"Sandwich",price:90,source:"Swiggy",image:swiggyFoodImage},
  {name:"Paneer Sandwich",category:"Sandwich",price:120,source:"Swiggy",image:swiggyFoodImage},
  {name:"Chicken Sandwich",category:"Sandwich",price:140,source:"Swiggy",image:swiggyFoodImage},
  {name:"Cheese Roll Veg",category:"Snacks/Rolls",price:113,source:"Swiggy",image:swiggyFoodImage},
  {name:"Double Egg Chicken Roll",category:"Snacks/Rolls",price:115,source:"Swiggy",image:swiggyFoodImage},
  {name:"Cheese Roll Non Veg",category:"Snacks/Rolls",price:138,source:"Swiggy",image:swiggyFoodImage},
  {name:"Noodles Roll",category:"Snacks/Rolls",price:180,source:"Swiggy",image:swiggyFoodImage},
  {name:"French Fries",category:"FP Veg",price:70,source:"Swiggy",image:swiggyFoodImage},
  {name:"Masala French Fries",category:"FP Veg",price:88,source:"Swiggy",image:swiggyFoodImage},
  {name:"Veg Biryani",category:"Biryani",price:155,source:"Swiggy",image:swiggyFoodImage},
  {name:"Chicken Noodles [Full]",category:"Chinese",price:145,source:"Swiggy",image:swiggyFoodImage},
  {name:"Paneer Noodles [Full]",category:"Chinese",price:145,source:"Swiggy",image:swiggyFoodImage},
  {name:"Pepsi Soft Drink 250ml Bottle",category:"Drinks",price:30,source:"Swiggy",image:swiggyFoodImage},
  {name:"Aquafina Water (1.0 L)",category:"Drinks",price:19,source:"Swiggy",image:swiggyFoodImage},
  {name:"Brownie With Ice Cream",category:"Desserts",price:250,source:"Swiggy",image:swiggyFoodImage},
  {name:"Grilled Tikki Burger (x2) + Virgin Mojito (x2) + Vanilla Pastry",category:"Combos",price:380,source:"Swiggy",image:swiggyFoodImage},
  {name:"Tikki Burger (x2) + Virgin Mojito (x2) + Vanilla Pastry (x1)",category:"Combos",price:350,source:"Swiggy",image:swiggyFoodImage},
  {name:"Chole Bhature [1 plate, 2 bhature]",category:"Breakfast",source:"Zomato",image:swiggyFoodImage},
  {name:"Pav Bhaji [1 plate, 1 pav]",category:"Breakfast",source:"Zomato",image:swiggyFoodImage},
  {name:"Paneer Manchurian",category:"Starters",source:"Zomato",image:swiggyFoodImage},
  {name:"Baby Corn Chilli",category:"Starters",source:"Zomato",image:swiggyFoodImage},
  {name:"Baby Corn Crispy",category:"Starters",source:"Zomato",image:swiggyFoodImage},
  {name:"Chicken Manchurian",category:"Starters",source:"Zomato",image:swiggyFoodImage},
  {name:"Chicken Corn Spring Roll",category:"Starters",source:"Zomato",image:swiggyFoodImage},
  {name:"Single Egg Chicken Roll",category:"Rolls",source:"Zomato",image:swiggyFoodImage},
  {name:"Veg Roll with Mayo",category:"Rolls",source:"Zomato",image:swiggyFoodImage},
  {name:"Chowmein Roll with Mayo",category:"Rolls",source:"Zomato",image:swiggyFoodImage},
  {name:"Cheese Roll with Mayo",category:"Rolls",source:"Zomato",image:swiggyFoodImage},
  {name:"Mushroom Chilli Roll with Mayo",category:"Rolls",source:"Zomato",image:swiggyFoodImage},
  {name:"Triple Egg Roll with Mayo",category:"Rolls",source:"Zomato",image:swiggyFoodImage},
  {name:"Triple Egg Chicken Roll",category:"Rolls",source:"Zomato",image:swiggyFoodImage},
  {name:"Eggless Chicken Roll",category:"Rolls",source:"Zomato",image:swiggyFoodImage},
  {name:"Cheese Roll Chicken with Egg",category:"Rolls",source:"Zomato",image:swiggyFoodImage},
  {name:"Food Plaza Special Veg Pizza",category:"Pizza",source:"Zomato",image:swiggyFoodImage},
  {name:"Tandoori Chicken Pizza",category:"Pizza",source:"Zomato",image:swiggyFoodImage},
  {name:"Yummy Chicken Pizza",category:"Pizza",source:"Zomato",image:swiggyFoodImage},
  {name:"Vanilla Shake",category:"Drinks",source:"Zomato",image:swiggyFoodImage},
  {name:"Cold Coffee",category:"Drinks",source:"Zomato",image:swiggyFoodImage},
  {name:"Chocolate Shake",category:"Drinks",source:"Zomato",image:swiggyFoodImage},
  {name:"Butterscotch Shake",category:"Drinks",source:"Zomato",image:swiggyFoodImage},
  {name:"Strawberry Shake",category:"Drinks",source:"Zomato",image:swiggyFoodImage},
  {name:"Coca-Cola (250 ml)",category:"Drinks",source:"Zomato",image:swiggyFoodImage},
  {name:"Thums Up (250 ml)",category:"Drinks",source:"Zomato",image:swiggyFoodImage},
  {name:"Sprite (250 ml)",category:"Drinks",source:"Zomato",image:swiggyFoodImage},
  {name:"Bisleri (1.0 L)",category:"Drinks",source:"Zomato",image:swiggyFoodImage},
  {name:"Bisleri (500 ml)",category:"Drinks",source:"Zomato",image:swiggyFoodImage},
  {name:"Kinley (1.0 L)",category:"Drinks",source:"Zomato",image:swiggyFoodImage},
  {name:"Bailley (1.0 L)",category:"Drinks",source:"Zomato",image:swiggyFoodImage},
  {name:"Tata Copper (1.0 L)",category:"Drinks",source:"Zomato",image:swiggyFoodImage},
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
    src: swiggyFoodImage,
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
