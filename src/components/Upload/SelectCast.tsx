"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
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

const casts = [
  {
    name: "Scarlatt Johanson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2TVTcQC6GqXmqC_jobELQhf1ET7MOA6rYQ&s",
  },
  {
    name: "Elizabeth Olsen",
    image: "https://ntvb.tmsimg.com/assets/assets/620481_v9_bc.jpg?w=360&h=480",
  },
  {
    name: "Chris Evans",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzQ0YWM1ODEtZDFkYy00MGJhLTkwZDUtMzVkZjljODU3ZTRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "RDJ",
    image:
      "https://cdn.shopify.com/s/files/1/0523/8521/8751/files/c5c11ebc-954e-4d9c-abf9-d4f47d88fea4.jpg",
  },
  {
    name: "Chris Hemsworth",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzGME_ao9C5iaCyx7uAVzBkj5ztIJYEcMFQ&s",
  },
];

export default function SelectCast() {
  const [open, setOpen] = React.useState(false);
  const [selectedCasts, setSelectedCasts] = useAtom(selectedCastAtom);

  return (
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
              <h1 className="my-2">No framework found.</h1>
              <UploadCast />
            </CommandEmpty>
            <CommandGroup>
              {casts.map((cast, index) => (
                <CommandItem
                  key={cast.name + index}
                  value={cast.name}
                  onSelect={(currentname) => {
                    setSelectedCasts((p) => {
                      if (selectedCasts.includes(cast)) {
                        return p;
                      } else {
                        return [...p, cast];
                      }
                    });
                    setOpen(false);
                  }}
                  className="h-10 w-full mb-1"
                >
                  <img
                    className="h-10 w-10 rounded-full object-cover object-center"
                    src={cast.image}
                  />
                  <p>{cast.name}</p>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
