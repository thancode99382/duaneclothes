export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  category: "coffee" | "food" | "drinks";
  image: string;
  rating: number;
  reviewCount: number;
  popular: boolean;
  badge?: string;
  sizes: string[];
  colors: string[];
};

export const products: Product[] = [
  {
    id: "1",
    name: "Polo Đen Viền Trắng",
    description: "Áo polo đen cao cấp với điểm nhấn cổ áo màu đỏ. Hoàn hảo cho phong cách đường phố hàng ngày.",
    price: 259000,
    originalPrice: 570000,
    category: "drinks",
    image: "/product1.jpg",
    rating: 4.8,
    reviewCount: 128,
    popular: true,
    badge: "MỚI",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#ffffff", "#1a1a1a"],
  },
  {
    id: "2",
    name: "Polo Xanh navy Viền Trắng",
    description: "Áo polo tím mượt mà với thiết kế tối giản. Chi tiết tạo nên sự khác biệt.",
    price: 259000,
    originalPrice: 570000,
    category: "coffee",
    image: "/product2.jpg",
    rating: 4.8,
    reviewCount: 96,
    popular: true,
    badge: "BEST SELLER",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#ffffff", "#1a1a1a"],
  },
   {
    id: "2",
    name: "Polo Trắng Viền Xanh",
    description: "Áo polo trắng mượt mà với thiết kế tối giản. Chi tiết tạo nên sự khác biệt.",
    price: 259000,
    originalPrice: 570000,
    category: "coffee",
    image: "/product3.jpg",
    rating: 4.8,
    reviewCount: 96,
    popular: true,
    badge: "BEST SELLER",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#ffffff", "#1a1a1a"],
  },
  // {
  //   id: "3",
  //   name: "Polo Đen (Logo Sau)",
  //   description: "Phong cách streetwear với logo Duane nổi bật ở mặt lưng. Đơn giản – khác biệt.",
  //   price: 259000,
  //   originalPrice: 570000,
  //   category: "food",
  //   image: "/product2.jpg",
  //   rating: 4.8,
  //   reviewCount: 64,
  //   popular: false,
  //   badge: "LIMITED",
  //   sizes: ["S", "M", "L", "XL", "XXL"],
  //   colors: [],
  // },
];
