import { ProductView } from "@/components/product-verse/ProductView";
import { fetchInitialProducts } from "@/lib/mockApi";
import type { Product } from "@/types";

export default async function ProductsPage() {
  let initialProducts: Product[] = [];
  let errorLoadingInitial: string | null = null;

  try {
    initialProducts = await fetchInitialProducts();
  } catch (error) {
    console.error("Failed to load initial products on server:", error);
    if (error instanceof Error) {
      errorLoadingInitial = error.message;
    } else {
      errorLoadingInitial = "An unknown error occurred while fetching products.";
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <ProductView initialProducts={initialProducts} errorLoadingInitial={errorLoadingInitial} />
    </main>
  );
}
