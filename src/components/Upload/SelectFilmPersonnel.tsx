"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAtom } from "jotai";
import { selectedCastAtom } from "@/app/atoms/atom";
import UploadCast from "./UploadCast";
import { FormLabel } from "../ui/form";

export default function SelectFilmPersonnel({
  items,
  personnelType,
}: {
  items: { name: string; image: string }[];
  personnelType: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [selectedCasts, setSelectedCasts] = useAtom(selectedCastAtom);

  return (
    <div className="">
      <FormLabel>{personnelType}</FormLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between border border-dashed border-white my-1"
          >
            Select cast
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandList>
              <CommandEmpty>
                <h1 className="my-2">No {personnelType} found.</h1>
                <UploadCast />
              </CommandEmpty>
              <CommandGroup>
                {items.map((item, index) => (
                  <CommandItem
                    key={item.name + index}
                    value={item.name}
                    onSelect={(currentname) => {
                      setSelectedCasts((p) => {
                        if (selectedCasts.includes(item)) {
                          return p;
                        } else {
                          return [...p, item];
                        }
                      });
                      setOpen(false);
                    }}
                    className="h-10 w-full mb-1"
                  >
                    <img
                      className="h-10 w-10 rounded-full object-cover object-center"
                      src={item.image}
                    />
                    <p>{item.name}</p>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
