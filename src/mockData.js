export const categories = [
  {
    id: "living-room",
    name: "Living Room",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    tagline: "The Heart of the Home"
  },
  {
    id: "bedroom",
    name: "Bedroom",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1200",
    tagline: "Sanctuary of Rest"
  },
  {
    id: "dining",
    name: "Dining",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
    tagline: "Epicurean Gatherings"
  },
  {
    id: "office",
    name: "Office",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
    tagline: "Productive Sophistication"
  }
];

export const products = [
  {
    id: 1,
    name: "Velvet Sculptural Sofa",
    price: 966000,
    category: "living-room",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200",
    hoverImage: "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "A masterpiece of modern comfort. This sculptural sofa features organic curves upholstered in premium Italian velvet, supported by a hidden solid oak frame.",
    dimensions: ["240cm x 100cm", "280cm x 110cm"],
    colors: ["Deep Emerald", "Midnight Blue", "Sandstone"],
    style: "Luxury",
    new: true
  },
  {
  id: 2,
  name: "Floating Oak Bed Frame",
  price: 784000,
  category: "bedroom",
  image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg",
  hoverImage: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
  gallery: [
    "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg",
    "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
    "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
  ],
  description: "Minimalism elevated. Crafted from premium wood with a luxury modern finish, this bed creates an elegant floating effect.",
  dimensions: ["Queen", "King", "California King"],
  colors: ["Natural Oak", "Dark Walnut"],
  style: "Modern",
  new: true
},
  {
    id: 3,
    name: "Travertine Coffee Table",
    price: 350000,
    category: "living-room",
    image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1200",
    hoverImage: "https://images.unsplash.com/photo-1613575831056-0acd5da8f085?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1613575831056-0acd5da8f085?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "A monolithic piece carved from a single block of premium Italian travertine. Natural pits and textures make every piece unique.",
    dimensions: ["120cm Round", "140cm x 80cm Rectangular"],
    colors: ["Natural Cream"],
    style: "Classic",
    new: false
  },
  {
    id: 4,
    name: "Leather Executive Chair",
    price: 518000,
    category: "office",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=1200",
    hoverImage: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1505843490701-5be55ccb0e65?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "Ergonomic precision meets executive luxury. Full-grain Nappa leather with polished aluminum accents and smooth-glide silent wheels.",
    dimensions: ["Standard Adjustment"],
    colors: ["Obsidian", "Chestnut"],
    style: "Modern",
    new: true
  },
  {
    id: 5,
    name: "Brutalist Dining Table",
    price: 1176000,
    category: "dining",
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=1200",
    hoverImage: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1590608897129-79da98d15969?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "A bold statement of structural honesty. Concrete and steel construction with a hand-polished finish that ages beautifully.",
    dimensions: ["220cm x 100cm", "300cm x 110cm"],
    colors: ["Industrial Grey"],
    style: "Industrial",
    new: false
  },
  {
    id: 6,
    name: "Minimalist Pendant Lamp",
    price: 182000,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1200",
    hoverImage: "https://images.unsplash.com/photo-1507473885765-e6ed657f782c?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1507473885765-e6ed657f782c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "Diffused atmospheric lighting encased in hand-blown frosted glass with brushed brass hardware.",
    dimensions: ["30cm Diameter", "45cm Diameter"],
    colors: ["Brass", "Matte Black"],
    new: true
  }
];
