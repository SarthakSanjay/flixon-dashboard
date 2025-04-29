import { X } from "lucide-react";
import SelectBox from "./SelectBox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useMemo } from "react";

export default function SelectContainer({
  type,
  items,
  setItems,
  form,
}: {
  type: string;
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
  form: any;
}) {
  // Memoized field name mapping
  const name = useMemo(() => {
    switch (type) {
      case "Genre":
        return "genre";
      case "Language":
        return "audioLanguages";
      case "Subtitles":
        return "subtitleLanguages";
      default:
        return type.toLowerCase();
    }
  }, [type]);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{type}</FormLabel>
          <FormControl>
            <div className="flex flex-col">
              <SelectBox
                items={items}
                type={type}
                onSelect={(item) => {
                  if (!field.value?.includes(item)) {
                    const updated = [...(field.value || []), item];
                    field.onChange(updated);
                    setItems(updated);
                  }
                }}
              />
              <div className="flex flex-wrap gap-1 mt-2">
                {(field.value || []).map((item: string, index: number) => (
                  <div
                    key={item + index}
                    className="bg-zinc-700 px-2 py-1 rounded-sm flex items-center group cursor-pointer"
                    onClick={() => {
                      const updated = field.value.filter(
                        (p: string) => p !== item,
                      );
                      field.onChange(updated);
                      setItems(updated);
                    }}
                  >
                    <span className="text-sm">{item}</span>
                    <X size={16} className="group-hover:text-red-400 ml-1" />
                  </div>
                ))}
              </div>
            </div>
          </FormControl>
          <FormDescription>
            {type === "Genre" && "Select genres"}
            {type === "Language" && "Select audio languages"}
            {type === "Subtitles" && "Select subtitle languages"}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
