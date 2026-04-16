export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "starters" | "mains" | "desserts" | "tasting";
  tag?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: "s1",
    name: "Foie Gras Torchon",
    description: "Brioche, Sauternes gel, pistachio praline, micro herbs",
    price: 28,
    category: "starters",
    tag: "Signature"
  },
  {
    id: "s2",
    name: "Hokkaido Scallops",
    description: "Cauliflower velouté, black truffle, caviar, champagne foam",
    price: 34,
    category: "starters"
  },
  {
    id: "s3",
    name: "Heritage Beet Tartare",
    description: "Goat cheese mousse, walnut crumble, aged balsamic, sorrel",
    price: 22,
    category: "starters",
    tag: "Vegetarian"
  },
  {
    id: "s4",
    name: "Lobster Bisque",
    description: "Maine lobster, saffron cream, cognac, chive oil",
    price: 26,
    category: "starters"
  },
  // Mains
  {
    id: "m1",
    name: "Wagyu Beef Tenderloin",
    description: "Truffle pomme purée, seasonal mushrooms, bordelaise, marrow",
    price: 86,
    category: "mains",
    tag: "Signature"
  },
  {
    id: "m2",
    name: "Dover Sole Meunière",
    description: "Capers, lemon beurre noisette, parsley, grilled fennel",
    price: 72,
    category: "mains"
  },
  {
    id: "m3",
    name: "Duck à l'Orange",
    description: "Confit leg, seared breast, grand marnier jus, haricots verts",
    price: 58,
    category: "mains"
  },
  {
    id: "m4",
    name: "Truffle Risotto",
    description: "Black truffle, aged parmesan, white wine, chive oil, pea shoots",
    price: 48,
    category: "mains",
    tag: "Vegetarian"
  },
  // Desserts
  {
    id: "d1",
    name: "Valrhona Chocolate Soufflé",
    description: "Tahitian vanilla ice cream, cocoa tuile, 20 min notice required",
    price: 22,
    category: "desserts",
    tag: "Signature"
  },
  {
    id: "d2",
    name: "Tarte Tatin",
    description: "Caramelised apple, Normandy crème fraîche, calvados caramel",
    price: 18,
    category: "desserts"
  },
  {
    id: "d3",
    name: "Mille-Feuille",
    description: "Vanilla pastry cream, caramelised puff pastry, raspberry coulis",
    price: 18,
    category: "desserts"
  },
  {
    id: "d4",
    name: "Cheese Trolley Selection",
    description: "Artisan cheeses, house-made jam, honeycomb, walnut bread",
    price: 24,
    category: "desserts"
  }
];

export const tastingMenus = [
  {
    name: "Prestige",
    courses: 7,
    price: 195,
    description: "Our ultimate expression of seasonal French cuisine",
    wines: 165
  },
  {
    name: "Découverte",
    courses: 5,
    price: 135,
    description: "An elegant introduction to our culinary philosophy",
    wines: 110
  },
  {
    name: "Jardin",
    courses: 6,
    price: 125,
    description: "Entirely plant-forward, celebrating the garden",
    wines: 95,
    tag: "Vegetarian"
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Laurent Beaumont",
    role: "Executive Chef & Founder",
    bio: "Trained at Alain Ducasse and Thomas Keller's kitchens, Chef Laurent brings 25 years of Michelin-starred experience to every plate.",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80"
  },
  {
    name: "Sophie Marchand",
    role: "Pastry Chef",
    bio: "Formerly of Pierre Hermé Paris, Sophie's desserts are architectural masterpieces that balance technique with emotion.",
    image:
      "https://images.unsplash.com/photo-1583394293214-7b7c0a80d2a6?w=600&q=80"
  },
  {
    name: "Émile Fontaine",
    role: "Head Sommelier",
    bio: "With a cellar of 800 labels across 6 continents, Émile's pairing philosophy transforms each dish into a complete sensory journey.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80"
  }
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Elegant plated dish",
    span: "col-span-2 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
    alt: "Restaurant interior",
    span: ""
  },
  {
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80",
    alt: "Fine wine selection",
    span: ""
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80",
    alt: "Dessert course",
    span: ""
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    alt: "Chef at work",
    span: ""
  },
  {
    src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    alt: "Artisan bread",
    span: ""
  }
];

export const testimonials = [
  {
    name: "James Olivier",
    title: "Food Critic, The Times",
    quote:
      "Maison Laurent redefines the meaning of contemporary French cuisine. Every course is a meditation on perfection, and the service is nothing short of theatrical poetry.",
    stars: 5
  },
  {
    name: "Amelia Chen",
    title: "Michelin Guide Inspector",
    quote:
      "A rare restaurant where ambition and execution meet in complete harmony. Chef Laurent's tasting menu is among the finest culinary experiences in the country.",
    stars: 5
  },
  {
    name: "David Hartwell",
    title: "Forbes Travel Guide",
    quote:
      "The atmosphere alone earns its reputation—intimate yet grand, warm yet precise. The wine list is extraordinary, and the cheese trolley might be reason enough to visit.",
    stars: 5
  }
];
