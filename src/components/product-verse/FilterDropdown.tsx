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
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={`filter-${String(columnKey)}`} className="text-sm font-medium">
        {columnLabel}
      </Label>
      <Select
        value={selectedValue}
        onValueChange={(value) => onFilterChange(columnKey, value)}
      >
        <SelectTrigger id={`filter-${String(columnKey)}`} className="w-full md:w-[180px] rounded-md shadow-sm">
          <SelectValue placeholder={`Filter by ${columnLabel.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All {columnLabel}s</SelectItem>
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
