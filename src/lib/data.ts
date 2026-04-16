import aboutImage from "@/public/aboutImage.png";
import experienceImage from "@/public/experienceImage.png";
import tablesImage from "@/public/tablesImage.png";
import foodImage from "@/public/foodImage.png";
import steakImage from "@/public/steakImage.png";
import dessertImage from "@/public/dessertImage.png";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "starters" | "mains" | "desserts" | "tasting";
  tag?: string;
}

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: "s1",
    name: "Foie Gras Torchon",
    description: "Brioche, Sauternes gel, pistachio praline, micro herbs",
    price: 28,
    category: "starters",
    tag: "Signature",
  },
  {
    id: "s2",
    name: "Hokkaido Scallops",
    description: "Cauliflower velouté, black truffle, caviar, champagne foam",
    price: 34,
    category: "starters",
  },
  {
    id: "s3",
    name: "Heritage Beet Tartare",
    description: "Goat cheese mousse, walnut crumble, aged balsamic, sorrel",
    price: 22,
    category: "starters",
    tag: "Vegetarian",
  },
  {
    id: "s4",
    name: "Lobster Bisque",
    description: "Maine lobster, saffron cream, cognac, chive oil",
    price: 26,
    category: "starters",
  },
  // Mains
  {
    id: "m1",
    name: "Wagyu Beef Tenderloin",
    description: "Truffle pomme purée, seasonal mushrooms, bordelaise, marrow",
    price: 86,
    category: "mains",
    tag: "Signature",
  },
  {
    id: "m2",
    name: "Dover Sole Meunière",
    description: "Capers, lemon beurre noisette, parsley, grilled fennel",
    price: 72,
    category: "mains",
  },
  {
    id: "m3",
    name: "Duck à l'Orange",
    description: "Confit leg, seared breast, grand marnier jus, haricots verts",
    price: 58,
    category: "mains",
  },
  {
    id: "m4",
    name: "Truffle Risotto",
    description:
      "Black truffle, aged parmesan, white wine, chive oil, pea shoots",
    price: 48,
    category: "mains",
    tag: "Vegetarian",
  },
  // Desserts
  {
    id: "d1",
    name: "Valrhona Chocolate Soufflé",
    description:
      "Tahitian vanilla ice cream, cocoa tuile, 20 min notice required",
    price: 22,
    category: "desserts",
    tag: "Signature",
  },
  {
    id: "d2",
    name: "Tarte Tatin",
    description: "Caramelised apple, Normandy crème fraîche, calvados caramel",
    price: 18,
    category: "desserts",
  },
  {
    id: "d3",
    name: "Mille-Feuille",
    description:
      "Vanilla pastry cream, caramelised puff pastry, raspberry coulis",
    price: 18,
    category: "desserts",
  },
  {
    id: "d4",
    name: "Cheese Trolley Selection",
    description: "Artisan cheeses, house-made jam, honeycomb, walnut bread",
    price: 24,
    category: "desserts",
  },
];

export const tastingMenus = [
  {
    name: "Prestige",
    courses: 7,
    price: 195,
    description: "Our ultimate expression of seasonal French cuisine",
    wines: 165,
  },
  {
    name: "Découverte",
    courses: 5,
    price: 135,
    description: "An elegant introduction to our culinary philosophy",
    wines: 110,
  },
  {
    name: "Jardin",
    courses: 6,
    price: 125,
    description: "Entirely plant-forward, celebrating the garden, enjoyable",
    wines: 95,
    tag: "Vegetarian",
  },
];

export const galleryImages = [
  {
    src: aboutImage,
    alt: "Elegant plated dish",
    span: "col-span-2 row-span-2",
  },
  {
    src: experienceImage,
    alt: "Fine wine selection",
    span: "",
  },
  {
    src: tablesImage,
    alt: "Restaurant interior",
    span: "",
  },
  {
    src: foodImage,
    alt: "Chef at work",
    span: "",
  },
  {
    src: steakImage,
    alt: "Grilled steak with sides",
    span: "",
  },
  {
    src: dessertImage,
    alt: "Dessert course",
    span: "",
  },
];

export const testimonials = [
  {
    name: "James Olivier",
    title: "Food Critic, The Times",
    quote:
      "Maison Laurent redefines the meaning of contemporary French cuisine. Every course is a meditation on perfection, and the service is nothing short of theatrical poetry.",
    stars: 5,
  },
  {
    name: "Amelia Chen",
    title: "Michelin Guide Inspector",
    quote:
      "A rare restaurant where ambition and execution meet in complete harmony. Chef Laurent's tasting menu is among the finest culinary experiences in the country.",
    stars: 5,
  },
  {
    name: "David Hartwell",
    title: "Forbes Travel Guide",
    quote:
      "The atmosphere alone earns its reputation—intimate yet grand, warm yet precise. The wine list is extraordinary, and the cheese trolley might be reason enough to visit.",
    stars: 5,
  },
];
