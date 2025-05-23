"use client";

import type { Product, ProductFilterKeys } from "@/types";
import { useState, useEffect, useMemo, useCallback } from "react";
import { ProductTable } from "./ProductTable";
import { FilterDropdown } from "./FilterDropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Search, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ProductViewProps {
  initialProducts: Product[];
  errorLoadingInitial?: string | null;
}

type Filters = {
  title: string;
  brand: string;
  category: string;
  // Price and Rating could be ranges or specific values if extended
};

export function ProductView({ initialProducts, errorLoadingInitial }: ProductViewProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isLoading, setIsLoading] = useState<boolean>(!initialProducts && !errorLoadingInitial); // True if no initial data and no error
  const [error, setError] = useState<string | null>(errorLoadingInitial || null);
  
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filters, setFilters] = useState<Filters>({
    title: "", // No title filter dropdown, using search term instead
    brand: "",
    category: "",
  });

  // Simulate fetching if initialProducts is empty (e.g. direct client load or SSR fail)
  // This part is mostly illustrative if data is always server-provided.
  useEffect(() => {
    if (!initialProducts?.length && !errorLoadingInitial) {
      setIsLoading(true);
      // Simulate an API call, in a real scenario this might be a Genkit flow
      // For this example, we'll just use a timeout if no initial products
      const timer = setTimeout(() => {
        // If still no products after a delay, assume an error or empty state
        if (!products.length) setError("Failed to load products or no products available.");
        setIsLoading(false);
      }, 1500); // Simulate delay
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [initialProducts, errorLoadingInitial, products.length]);


  const handleTitleUpdate = useCallback((productId: number, newTitle: string) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === productId ? { ...p, title: newTitle } : p
      )
    );
  }, []);

  const handleDeleteProduct = useCallback((productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((p) => p.id !== productId)
    );
  }, []);

  const handleFilterChange = useCallback(<K extends keyof Filters>(columnKey: K, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [columnKey]: value,
    }));
  }, []);
  
  const resetFilters = useCallback(() => {
    setSearchTerm("");
    setFilters({ title: "", brand: "", category: "" });
  }, []);

  const uniqueOptions = useMemo(() => {
    const brandOptions = Array.from(new Set(initialProducts.map(p => p.brand))).sort();
    const categoryOptions = Array.from(new Set(initialProducts.map(p => p.category))).sort();
    return { brand: brandOptions, category: categoryOptions };
  }, [initialProducts]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchTermLower = searchTerm.toLowerCase();
      const titleMatch = product.title.toLowerCase().includes(searchTermLower) || 
                         product.description?.toLowerCase().includes(searchTermLower);
      const brandMatch = filters.brand ? product.brand === filters.brand : true;
      const categoryMatch = filters.category ? product.category === filters.category : true;
      
      return titleMatch && brandMatch && categoryMatch;
    });
  }, [products, searchTerm, filters]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="ml-4 text-lg">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-destructive">
        <XCircle className="h-12 w-12 mb-4" />
        <p className="text-lg">Error: {error}</p>
        <Button onClick={() => window.location.reload()} className="mt-4">Try Again</Button>
      </div>
    );
  }
  
  const activeFilterCount = Object.values(filters).filter(Boolean).length + (searchTerm ? 1 : 0);

  return (
    <div className="container mx-auto p-4 md:p-8 space-y-6">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-primary">ProductVerse</h1>
        <p className="text-muted-foreground text-lg">Browse and manage your product catalog with ease.</p>
      </header>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Filter Products</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by title or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full rounded-md shadow-sm"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FilterDropdown
              columnKey="brand"
              columnLabel="Brand"
              options={uniqueOptions.brand}
              selectedValue={filters.brand}
              onFilterChange={handleFilterChange}
            />
            <FilterDropdown
              columnKey="category"
              columnLabel="Category"
              options={uniqueOptions.category}
              selectedValue={filters.category}
              onFilterChange={handleFilterChange}
            />
          </div>
          {activeFilterCount > 0 && (
             <Button onClick={resetFilters} variant="outline" className="w-full md:w-auto rounded-md shadow-sm hover:bg-accent hover:text-accent-foreground">
              Reset All Filters ({activeFilterCount})
            </Button>
          )}
        </CardContent>
      </Card>
      
      <Separator />

      <ProductTable
        products={filteredProducts}
        onTitleUpdate={handleTitleUpdate}
        onDeleteProduct={handleDeleteProduct}
      />
       {initialProducts.length > 0 && filteredProducts.length === 0 && !isLoading && (
         <div className="text-center py-10 text-muted-foreground">
           No products found matching your current filters. Try adjusting your search or filters.
         </div>
       )}
       {initialProducts.length === 0 && !isLoading && !error && (
         <div className="text-center py-10 text-muted-foreground">
           No products available at the moment.
         </div>
       )}
    </div>
  );
}
