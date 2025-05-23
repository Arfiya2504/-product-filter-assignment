
import type { Product } from '@/types';

// New India-oriented product data
const indiaOrientedProducts: Product[] = [
  {
    id: 1,
    title: "Men's Cotton Kurta",
    brand: "Manyavar",
    category: "Ethnic Wear",
    price: 1999,
    rating: 4.6,
    thumbnail: "https://placehold.co/200x200.png",
    description: "Comfortable cotton kurta for casual and festive wear.",
  },
  {
    id: 2,
    title: "Women's Silk Saree",
    brand: "Nalli Silks",
    category: "Ethnic Wear",
    price: 7999,
    rating: 4.8,
    thumbnail: "https://placehold.co/200x200.png",
    description: "Traditional Kanjeevaram silk saree with intricate designs.",
  },
  {
    id: 3,
    title: "Patanjali Dant Kanti Toothpaste",
    brand: "Patanjali",
    category: "Ayurvedic Products",
    price: 90,
    rating: 4.3,
    thumbnail: "https://placehold.co/200x200.png",
    description: "Herbal toothpaste for complete oral care.",
  },
  {
    id: 4,
    title: "Tata Sampann Turmeric Powder",
    brand: "Tata Sampann",
    category: "Indian Groceries",
    price: 75,
    rating: 4.7,
    thumbnail: "https://placehold.co/200x200.png",
    description: "Pure and authentic turmeric powder with natural oils.",
  },
  {
    id: 5,
    title: "Boat Airdopes 131",
    brand: "Boat",
    category: "Electronics",
    price: 1299,
    rating: 4.2,
    thumbnail: "https://placehold.co/200x200.png",
    description: "True wireless earbuds with immersive sound.",
  },
  {
    id: 6,
    title: "Bajaj Majesty DX 11 Dry Iron",
    brand: "Bajaj",
    category: "Home Appliances",
    price: 750,
    rating: 4.1,
    thumbnail: "https://placehold.co/200x200.png",
    description: "Lightweight and durable dry iron for everyday use.",
  },
  {
    id: 7,
    title: "Amul Gold Full Cream Milk",
    brand: "Amul",
    category: "Indian Groceries",
    price: 68, // per litre
    rating: 4.9,
    thumbnail: "https://placehold.co/200x200.png",
    description: "Rich and creamy full cream milk.",
  },
  {
    id: 8,
    title: "Lakmé Absolute Matte Lipstick",
    brand: "Lakmé",
    category: "Beauty",
    price: 800,
    rating: 4.4,
    thumbnail: "https://placehold.co/200x200.png",
    description: "Long-lasting matte finish lipstick in various shades.",
  },
  {
    id: 9,
    title: "Himalaya Purifying Neem Face Wash",
    brand: "Himalaya",
    category: "Personal Care",
    price: 150,
    rating: 4.5,
    thumbnail: "https://placehold.co/200x200.png",
    description: "Herbal face wash to prevent pimples and purify skin.",
  },
  {
    id: 10,
    title: "Haldiram's Aloo Bhujia",
    brand: "Haldiram's",
    category: "Snacks",
    price: 50,
    rating: 4.7,
    thumbnail: "https://placehold.co/200x200.png",
    description: "Crispy and spicy potato noodles snack.",
  },
  {
    id: 11,
    title: "Prestige Popular Pressure Cooker",
    brand: "Prestige",
    category: "Kitchen Appliances",
    price: 1500,
    rating: 4.6,
    thumbnail: "https://placehold.co/200x200.png",
    description: "Durable aluminium pressure cooker, 5 litres.",
  },
  {
    id: 12,
    title: "Dabur Chyawanprash",
    brand: "Dabur",
    category: "Ayurvedic Products",
    price: 350,
    rating: 4.4,
    thumbnail: "https://placehold.co/200x200.png",
    description: "Ayurvedic health supplement for immunity boosting.",
  },
  {
    id: 13,
    title: "Parle-G Biscuits Family Pack",
    brand: "Parle",
    category: "Indian Groceries",
    price: 80,
    rating: 4.9,
    thumbnail: "https://placehold.co/200x200.png",
    description: "India's favorite glucose biscuits.",
  },
  {
    id: 14,
    title: "Samsung Galaxy M34 5G",
    brand: "Samsung",
    category: "Electronics",
    price: 18999,
    rating: 4.3,
    thumbnail: "https://placehold.co/200x200.png",
    description: "Popular mid-range 5G smartphone.",
  },
  {
    id: 15,
    title: "Nilkamal Freedom Mini Shoe Cabinet",
    brand: "Nilkamal",
    category: "Furniture",
    price: 2200,
    rating: 4.0,
    thumbnail: "https://placehold.co/200x200.png",
    description: "Compact and stylish shoe cabinet.",
  }
];

export const fetchInitialProducts = async (): Promise<Product[]> => {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return the static India-oriented product list
    return indiaOrientedProducts;
  } catch (error) {
    console.error("Error providing initial products:", error);
    throw error; // Re-throw to be handled by the caller
  }
};
