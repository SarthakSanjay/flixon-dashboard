"use client";

import * as React from "react";
import { BadgePlus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Command } from "../ui/command";
import { useState } from "react";
import { Input } from "../ui/input";
import { FormField, FormItem, FormLabel } from "../ui/form";

export default function Tags({ form }: { form: any }) {
  const [open, setOpen] = useState(false);
  const [tag, setTag] = useState("");

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    fieldOnChange: (value: any) => void,
    currentTags: string[],
  ) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submit
      const newTag = tag.trim();
      if (!newTag || currentTags.includes(newTag)) return;

      const updatedTags = [...currentTags, newTag];
      fieldOnChange(updatedTags);
      setTag("");
      setOpen(false);
    }
  };

  const handleDelete = (
    index: number,
    fieldOnChange: (value: any) => void,
    currentTags: string[],
  ) => {
    const updatedTags = currentTags.filter((_, i) => i !== index);
    fieldOnChange(updatedTags);
  };

  return (
    <FormField
      control={form.control}
      name="tags"
      render={({ field }) => (
        <FormItem className="h-max w-full space-y-1">
          <FormLabel>Tags</FormLabel>
          <div className="w-full flex flex-wrap gap-1">
            {(field.value ?? []).map((tag: string, index: number) => (
              <div
                key={tag + index}
                className="bg-zinc-700 px-2 py-1 rounded-sm flex items-center group cursor-pointer"
                onClick={() => handleDelete(index, field.onChange, field.value)}
              >
                <span className="text-sm">{tag}</span>
                <X size={16} className="ml-1 group-hover:text-red-400" />
              </div>
            ))}
          </div>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                role="combobox"
                aria-expanded={open}
                className="min-w-[200px] max-w-2/3 justify-between text-zinc-500 cursor-pointer hover:bg-black hover:text-white border"
              >
                Add tags
                <BadgePlus className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <Input
                  placeholder="Enter tag"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  onKeyDown={(e) =>
                    handleKeyDown(e, field.onChange, field.value ?? [])
                  }
                />
              </Command>
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  );
}
