import coolerArctic from "@/assets/cooler-arctic.jpg";
import coolerGlacier from "@/assets/cooler-glacier.jpg";
import coolerBlizzard from "@/assets/cooler-blizzard.jpg";
import coolerFrostbite from "@/assets/cooler-frostbite.jpg";
import coolerPenguin from "@/assets/cooler-penguin.jpg";
import coolerYeti from "@/assets/cooler-yeti.jpg";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  category: "compact" | "standard" | "premium";
  coolnessLevel: number; // 1-5
  features: string[];
}

export const products: Product[] = [
  {
    id: "arctic-breeze",
    name: "The Arctic Breeze",
    tagline: "Too cool to melt 😎",
    description: "This cooler keeps ice frozen longer than your ex's heart. 25L capacity, perfect for beach days and BBQs. Your drinks called — they want to live here.",
    price: 89.99,
    image: coolerArctic,
    category: "standard",
    coolnessLevel: 4,
    features: ["25L Capacity", "48-Hour Ice Retention", "Built-in Bottle Opener", "Bear-Proof Latches"],
  },
  {
    id: "glacier-king",
    name: "The Glacier King",
    tagline: "Built different. Built colder. 🏔️",
    description: "For those who think 'regular cold' isn't cold enough. This beast laughs at heatwaves. 45L of pure, unapologetic chill.",
    price: 179.99,
    image: coolerGlacier,
    category: "premium",
    coolnessLevel: 5,
    features: ["45L Capacity", "72-Hour Ice Retention", "Rotomolded Construction", "Drainage System", "Cup Holders"],
  },
  {
    id: "blizzard-baby",
    name: "The Blizzard Baby",
    tagline: "Small but mighty frosty 🌸",
    description: "Don't let the cute looks fool you — this compact powerhouse keeps your lunch colder than a penguin's living room. Perfect for solo adventurers.",
    price: 49.99,
    image: coolerBlizzard,
    category: "compact",
    coolnessLevel: 3,
    features: ["12L Capacity", "24-Hour Ice Retention", "Shoulder Strap", "Leak-Proof Seal"],
  },
  {
    id: "frostbite-roller",
    name: "The Frostbite Roller",
    tagline: "Roll into chill mode 🛞",
    description: "Why carry cold when you can roll it? Premium wheels, premium chill. This is first-class seating for your beverages.",
    price: 249.99,
    image: coolerFrostbite,
    category: "premium",
    coolnessLevel: 5,
    features: ["55L Capacity", "96-Hour Ice Retention", "All-Terrain Wheels", "Telescoping Handle", "Cutting Board Lid"],
  },
  {
    id: "penguin-pal",
    name: "The Penguin Pal",
    tagline: "Your lunch's new best friend 🐧",
    description: "So cute, your food will feel special just being inside it. This lil' guy fits perfectly under your desk or in your car. Waddle you waiting for?",
    price: 34.99,
    image: coolerPenguin,
    category: "compact",
    coolnessLevel: 2,
    features: ["8L Capacity", "12-Hour Ice Retention", "Easy-Carry Handle", "BPA-Free"],
  },
  {
    id: "retro-yeti",
    name: "The Retro Yeti",
    tagline: "Vintage vibes, ice-cold insides 🧊",
    description: "Looking for a cooler that matches your record player? This retro beauty keeps things cold AND stylish. Your grandpa would approve.",
    price: 119.99,
    image: coolerYeti,
    category: "standard",
    coolnessLevel: 4,
    features: ["30L Capacity", "48-Hour Ice Retention", "Retro Chrome Latches", "Stainless Steel Handle"],
  },
];
