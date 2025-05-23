
"use client";

import type { Product } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const ALL_ITEMS_VALUE = "__ALL_ITEMS__"; // Special value for "All" option

interface FilterDropdownProps<K extends keyof Product> {
  columnKey: K;
  columnLabel: string;
  options: string[]; // Assuming options are strings for simplicity
  selectedValue: string;
  onFilterChange: (columnKey: K, value: string) => void;
}

export function FilterDropdown<K extends keyof Product>({
  columnKey,
  columnLabel,
  options,
  selectedValue,
  onFilterChange,
}: FilterDropdownProps<K>) {
  const handleValueChange = (value: string) => {
    if (value === ALL_ITEMS_VALUE) {
      onFilterChange(columnKey, ""); // Pass empty string for "All"
    } else {
      onFilterChange(columnKey, value);
    }
  };

  // If selectedValue is empty (meaning "All"), set the Select's value to our special placeholder
  // Otherwise, use the actual selectedValue
  const currentSelectValue = selectedValue === "" ? ALL_ITEMS_VALUE : selectedValue;

  const allItemsText = columnLabel === "Category" ? `All Categories` : `All ${columnLabel}s`;

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={`filter-${String(columnKey)}`} className="text-sm font-medium">
        {columnLabel}
      </Label>
      <Select
        value={currentSelectValue}
        onValueChange={handleValueChange}
      >
        <SelectTrigger id={`filter-${String(columnKey)}`} className="w-full md:w-[180px] rounded-md shadow-sm">
          <SelectValue placeholder={`Filter by ${columnLabel.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={ALL_ITEMS_VALUE}>{allItemsText}</SelectItem>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
