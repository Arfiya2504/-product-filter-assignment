
"use client";

import type { Product } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { EditableCell } from "./EditableCell";
import Image from 'next/image';

interface ProductTableProps {
  products: Product[];
  onTitleUpdate: (productId: number, newTitle: string) => void;
  onDeleteProduct: (productId: number) => void;
}

export function ProductTable({
  products,
  onTitleUpdate,
  onDeleteProduct,
}: ProductTableProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        No products found matching your criteria.
      </div>
    );
  }

  return (
    <div className="rounded-lg border shadow-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow><TableHead className="w-[100px]">Image</TableHead><TableHead className="w-[300px]">Title</TableHead><TableHead>Brand</TableHead><TableHead>Category</TableHead><TableHead className="text-right">Price</TableHead><TableHead className="text-right">Rating</TableHead><TableHead className="text-center w-[100px]">Actions</TableHead></TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}><TableCell>
                {product.thumbnail && (
                  <Image 
                    src={product.thumbnail} 
                    alt={product.title} 
                    width={60} 
                    height={60} 
                    className="rounded object-cover"
                    data-ai-hint="product photo"
                  />
                )}
              </TableCell><TableCell>
                <EditableCell
                  initialValue={product.title}
                  onSave={(newTitle) => onTitleUpdate(product.id, newTitle)}
                />
              </TableCell><TableCell>{product.brand}</TableCell><TableCell>{product.category}</TableCell><TableCell className="text-right">${product.price.toFixed(2)}</TableCell><TableCell className="text-right">{product.rating.toFixed(2)}</TableCell><TableCell className="text-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDeleteProduct(product.id)}
                  className="text-destructive hover:text-destructive/80"
                  aria-label={`Delete ${product.title}`}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell></TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
