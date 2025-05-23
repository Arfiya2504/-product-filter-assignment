"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil, Check, X } from "lucide-react";

interface EditableCellProps {
  initialValue: string;
  onSave: (newValue: string) => void;
}

export function EditableCell({ initialValue, onSave }: EditableCellProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleSave = () => {
    onSave(value);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setValue(initialValue);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex items-center space-x-2">
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="h-8 rounded-md text-sm"
          autoFocus
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSave();
            if (e.key === 'Escape') handleCancel();
          }}
        />
        <Button variant="ghost" size="icon" onClick={handleSave} className="h-8 w-8 text-green-500 hover:text-green-600">
          <Check className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={handleCancel} className="h-8 w-8 text-red-500 hover:text-red-600">
          <X className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between group min-h-[32px]">
      <span>{initialValue}</span>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsEditing(true)}
        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Edit title"
      >
        <Pencil className="h-4 w-4" />
      </Button>
    </div>
  );
}
