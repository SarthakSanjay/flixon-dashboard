import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { useSetAtom } from "jotai";
import { genreAtom, languageAtom, subtitleAtom } from "@/app/atoms/atom";

export default function SelectBox({
  items,
  type,
  onSelect,
}: {
  items: string[];
  type: string;
  onSelect: (value: string) => void;
}) {
  const setGenre = useSetAtom(genreAtom);
  const setLanguage = useSetAtom(languageAtom);
  const setSubtitle = useSetAtom(subtitleAtom);

  const handleSelect = (value: string) => {
    if (onSelect) {
      onSelect(value);
    }

    if (type === "Genre") {
      setGenre((prev) => {
        if (prev.includes(value)) {
          return prev;
        }
        return [...prev, value];
      });
    } else if (type === "Language") {
      setLanguage((prev) => {
        if (prev.includes(value)) {
          return prev;
        }
        return [...prev, value];
      });
    } else if (type === "Subtitles") {
      setSubtitle((prev) => {
        if (prev.includes(value)) {
          return prev;
        }
        return [...prev, value];
      });
    }
  };

  return (
    <div>
      <Select onValueChange={handleSelect}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={`Select ${type}`} />
        </SelectTrigger>
        <SelectContent className="bg-black text-white">
          <SelectGroup>
            <SelectLabel>{type}</SelectLabel>
            {items.map((item, index) => {
              return (
                <SelectItem key={item + index} value={item}>
                  {item}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
