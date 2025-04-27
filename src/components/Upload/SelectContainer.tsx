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

export default function SelectContainer({
  type,
  items,
  selectedItems,
  setItems,
  form,
}: {
  type: string;
  items: string[];
  selectedItems: string[];
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
  form: any;
}) {
  const getFieldName = () => {
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
  };

  return (
    <FormField
      control={form.control}
      name={getFieldName()}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{type}</FormLabel>
          <FormControl>
            <div className="h-max w-full flex flex-col">
              <SelectBox
                items={items}
                type={type}
                onSelect={(item) => {
                  if (!selectedItems.includes(item)) {
                    const newItems = [...selectedItems, item];
                    setItems(newItems);
                    field.onChange(newItems);
                  }
                }}
              />
              <div className="h-max w-full mt-2 flex flex-wrap gap-1">
                {selectedItems &&
                  selectedItems.map((item, index) => {
                    return (
                      <div
                        key={item + index}
                        className="bg-zinc-700 px-2 py-1 rounded-sm flex items-center  group cursor-pointer"
                        onClick={() => {
                          const newItems = selectedItems.filter(
                            (p) => p !== item,
                          );
                          setItems(newItems);
                          field.onChange(newItems);
                        }}
                      >
                        <span className="h-max text-sm">{item}</span>
                        <X
                          size={16}
                          className="group-hover:text-red-400 m-0 p-0 "
                        />
                      </div>
                    );
                  })}
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
