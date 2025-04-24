"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";

export function SearchBox({ type }: { type: string }) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [data, setData] = useState<string[]>([]);

  const searchArr = [
    "Loki",
    "Avengers",
    "Avengers Age of Ultron",
    "Avengers Civil War",
    "Avengers Infinity War",
    "Avengers Endgame",
    "Black Panther",
    "Black Panther: Wakanda Forever",
    "Thor",
    "Thor: The Dark World",
    "Thor Ragnarok",
    "Thor Love and Thunder",
    "Guradians of the galaxy vol-1",
    "Guradians of the galaxy vol-2",
    "Guardians of the galaxy vol-3",
    "Ironman",
    "Ironman 2",
    "Ironman 3",
  ];

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      let searchData = searchArr.filter((item) => item === debouncedQuery);

      setData(searchData);
    }
  }, [debouncedQuery]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className="bg-transparent text-zinc-400 w-1/3 mt-2 mx-10 hover:bg-zinc-800 hover:text-white hover:border-zinc-800 cursor-pointer"
        >
          Search {type}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black p-0">
        <DialogTitle></DialogTitle>
        <div className="h-full w-full p-5">
          <Input
            className="w-full focus-visible:ring-0"
            placeholder={`Search ${type}s`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="h-[400px] w-full flex flex-col gap-2 mt-2">
            {data &&
              data.map((d) => {
                return (
                  <span className="w-full h-8 flex items-center px-3 rounded-sm bg-zinc-800">
                    {d}
                  </span>
                );
              })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
