export const locations = [
  // === GRADOVI ===
  {
    id: "1",
    name: "Paris",
    city: "Paris",
    type: "City",
    rating: 4,
    country: "France",
    
    description:
      "Paris is the capital and largest city of France, a global center for finance, culture, and fashion, and is famously nicknamed the City of Light. Located on the Seine River, the city is known for its rich history, iconic landmarks like the Eiffel Tower and Louvre Museum, and its reputation for art, gastronomy, and haute couture. It has a significant population, a complex public transportation system including the Metro, and is a major hub for both French and international life. ",
    image:
      "https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.jpg?s=612x612&w=0&k=20&c=sFn6FwTJR0TpX3rP_W4VHrbkTB__6l5kr-lkkqdYrtE=",
    isCity: true
  },
  {
    id: "2",
    name: "Tokyo",
    city: "Tokyo",
    country: "Japan",
    type: "City",
    rating: 4.8,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "https://images2.alphacoders.com/947/947089.jpg",
    isCity: true,
    trending: true
  },
  {
    id: "3",
    name: "New York",
    city: "New York",
    country: "America",
    type: "City",
    rating: 4.8,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "https://wallpapercat.com/w/full/7/9/c/293012-3840x2160-desktop-4k-new-york-wallpaper.jpg",
    isCity: true,
    trending: true
  },

  {
    id: "4",
    name: "Barcelona",
    city: "Barcelona",
    country: "Spain",
    type: "City",
    rating: 5,
    description:
      "Mediteranski dragulj sa prepoznatljivim Gaudijevim stilom i toplim morem.",
    image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
    isCity: true,
    trending: true
  },
  {
    id: "5",
    name: "Rome",
    city: "Rome",
    country: "Italy",
    type: "City",
    rating: 4.9,
    description: "Vječni grad sa istorijom dugom preko dva milenijuma.",
    image:
      "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=",
    isCity: true,
    trending: true
  },
  {
    id: "6",
    name: "Podgorica",
    city: "Podgorica",
    country: "Montenegro",
    type: "City",
    rating: 3.5,
    description:
      "Podgorica je glavni i najveći grad Crne Gore, smešten u središnjem delu zemlje na ušću reka Ribnice i Morače. Kao politički, administrativni, kulturni i ekonomski centar, grad je značajan po svojoj modernoj arhitekturi, zelenim površinama i brojnim kulturnim institucijama. Njena lokacija blizu mora i planinskih centara, kao i blizina Skadarskog jezera, čine je važnim tranzitnim čvorištem. ",
    image: "https://www.ekapija.com/thumbs/podgorica_1_050323_tw1024.jpg",
    isCity: true,
    trending: true
  },

  // === PARIS LOCATIONS ===
  {
    id: "l1",
    name: "Le Cinq Restaurant",
    type: "Restaurant",
    city: "Paris",
    cityId: "1",
    image: "https://images.unsplash.com/photo-1667388969250-1c7220bf3f37",
    rating: 4.9,
    reviews: 234,
    priceRange: "€€€€",
    distance: "2.3 km",
    description: "Ekskluzivni restoran sa Michelin zvjezdicama.",
    address: "31 Avenue George V, 75008 Paris",
    featured: true,
    trending: true,
    location: true
  },
  {
    id: "l2",
    name: "Louvre Museum",
    type: "Museum",
    city: "Paris",
    cityId: "1",
    image: "https://images.unsplash.com/photo-1643820509303-79e98ac7e006",
    rating: 4.8,
    reviews: 3421,
    description:
      "Najveći umjetnički muzej na svijetu sa preko 35,000 djela.",
    trending: true,
    location: true
  },
  {
    id: "l3",
    name: "Eiffel Tower",
    type: "Attraction",
    city: "Paris",
    cityId: "1",
    image: "https://images.unsplash.com/photo-1431274172761-fca41d930114",
    rating: 4.9,
    reviews: 5234,
    description: "Najpoznatiji spomenik na svijetu i simbol Pariza.",
    location: true
  },

  // === TOKYO ===
  {
    id: "l5",
    name: "Sukiyabashi Jiro",
    type: "Restaurant",
    city: "Tokyo",
    cityId: "2",
    image: "https://images.unsplash.com/photo-1667388969250-1c7220bf3f37",
    rating: 5.0,
    reviews: 892,
    description: "Legendarni sushi restoran sa tri Michelin zvjezdice.",
    location: true
  },
  {
    id: "l6",
    name: "Senso-ji Temple",
    type: "Temple",
    city: "Tokyo",
    cityId: "2",
    image: "https://images.unsplash.com/photo-1643820509303-79e98ac7e006",
    rating: 4.7,
    reviews: 2341,
    description: "Najstariji budistički hram u Tokiju.",
    trending: true,
    location: true
  },

  // === NEW YORK ===
  {
    id: "l9",
    name: "Eleven Madison Park",
    type: "Restaurant",
    city: "New York",
    cityId: "3",
    image: "https://images.unsplash.com/photo-1667388969250-1c7220bf3f37",
    rating: 4.9,
    reviews: 1234,
    description:
      "Restoran sa tri Michelin zvjezdice. Inovativna američka kuhinja.",
    trending: true,
    location: true
  },
  {
    id: "l12",
    name: "Statue of Liberty",
    type: "Attraction",
    city: "New York",
    cityId: "3",
    image: "https://images.unsplash.com/photo-1572536977487-697d036fa442",
    rating: 4.9,
    reviews: 6234,
    description: "Ikona slobode i simbol Amerike.",
    location: true
  },

  // === BARCELONA ===
  {
    id: "l13",
    name: "Tickets Bar",
    type: "Restaurant",
    city: "Barcelona",
    cityId: "4",
    image: "https://images.unsplash.com/photo-1667388969250-1c7220bf3f37",
    rating: 4.8,
    reviews: 892,
    description:
      "Tapas bar braće Adrià, spoj tradicije i moderne kuhinje.",
    location: true
  },
  {
    id: "l14",
    name: "Sagrada Familia",
    type: "Church",
    city: "Barcelona",
    cityId: "4",
    image: "https://images.unsplash.com/photo-1653677903266-1d814985b3cc",
    rating: 5.0,
    reviews: 8234,
    description: "Gaudijev remek-djelo i simbol Barcelone.",
    location: true
  },

  // === ROME ===
  {
    id: "l17",
    name: "Osteria Mozza",
    type: "Restaurant",
    city: "Rome",
    cityId: "5",
    image: "https://images.unsplash.com/photo-1667388969250-1c7220bf3f37",
    rating: 4.8,
    reviews: 1234,
    description: "Vrhunska italijanska kuhinja u srcu Rima.",
    featured: true,
    location: true
  },
  {
    id: "l18",
    name: "Colosseum",
    type: "Attraction",
    city: "Rome",
    cityId: "5",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
    rating: 4.9,
    reviews: 5432,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    featured: true,
    location: true
  }
];
