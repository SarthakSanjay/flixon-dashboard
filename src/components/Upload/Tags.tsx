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
import { FormLabel } from "../ui/form";

export default function Tags() {
  const [open, setOpen] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState("");

  const handleChange = (e: any) => {
    if (e.target.value === "") setOpen(false);
    setTag(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      setTags((p) => [...p, tag]);
      setTag("");
    }
  };

  return (
    <div className="h-max w-full space-y-1">
      <FormLabel>Tags</FormLabel>
      <div className="w-full flex flex-wrap gap-1 ">
        {tags &&
          tags.map((tag, index) => {
            return (
              <div
                key={tag + index}
                className="bg-zinc-700 px-2 py-1 rounded-sm flex items-center  group cursor-pointer "
                onClick={() => {
                  setTags((p) => p.filter((t) => t !== tag));
                }}
              >
                <span className="h-max text-sm">{tag}</span>
                <X size={16} className="group-hover:text-red-400 m-0 p-0 " />
              </div>
            );
          })}
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={"ghost"}
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
              value={tag}
              placeholder="Enter tags"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
