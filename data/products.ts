export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "coffee" | "food" | "drinks";
  image: string;
  rating: number;
  popular: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Classic White Polo",
    description: "A premium white polo shirt with red collar accents. Perfect for everyday streetwear.",
    price: 45.00,
    category: "drinks",
    image: "/product1.jpg",
    rating: 4.8,
    popular: true
  },
  {
    id: "2",
    name: "Midnight Black Polo",
    description: "Sleek black polo shirt with minimal design. Detail makes the difference.",
    price: 50.00,
    category: "coffee",
    image: "/product2.jpg",
    rating: 4.5,
    popular: true
  },
  // {
  //   id: "3",
  //   name: "Red Graphic Polo",
  //   description: "Bold red polo featuring the iconic Duane LA graphic on the back.",
  //   price: 55.00,
  //   category: "food",
  //   image: "https://placehold.co/400x300?text=Red+Graphic+Polo",
  //   rating: 4.9,
  //   popular: false
  // },
  // {
  //   id: "4",
  //   name: "Urban Legend Polo",
  //   description: "Classic streetwear staple with a modern twist. Stay legendary.",
  //   price: 40.00,
  //   category: "coffee",
  //   image: "https://placehold.co/400x300?text=Urban+Legend+Polo",
  //   rating: 4.2,
  //   popular: false
  // }
];
