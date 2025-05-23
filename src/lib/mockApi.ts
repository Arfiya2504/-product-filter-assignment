import type { Product } from '@/types';

const API_URL = 'https://dummyjson.com/products?limit=50'; // Fetching 50 products for a richer dataset

interface ApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

// This function is intended to be called server-side or once on the client during initialization.
// It does not maintain state itself.
export const fetchInitialProducts = async (): Promise<Product[]> => {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
    const data: ApiResponse = await response.json();
    
    // Select only the required fields as per the problem description
    return data.products.map(p => ({
      id: p.id,
      title: p.title,
      brand: p.brand,
      category: p.category,
      price: p.price,
      rating: p.rating,
      // include other fields if you use them
      thumbnail: p.thumbnail, 
    }));
  } catch (error) {
    console.error("Error fetching initial products:", error);
    throw error; // Re-throw to be handled by the caller
  }
};
