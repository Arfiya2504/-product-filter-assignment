export interface Product {
  id: number;
  title: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  // Optional: include other fields if needed from dummyjson
  description?: string;
  stock?: number;
  discountPercentage?: number;
  thumbnail?: string;
  images?: string[];
}

// Define a type for the filter keys
export type ProductFilterKeys = 'title' | 'brand' | 'category';
