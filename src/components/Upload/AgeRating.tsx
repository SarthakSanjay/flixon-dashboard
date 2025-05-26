import { AGE_RATINGS } from "@/app/constants/constant";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormLabel } from "../ui/form";

export function AgeRating({ form }: { form: any }) {
  return (
    <div className="h-max w-max space-y-2">
      <FormLabel>Age Rating</FormLabel>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Age Rating</SelectLabel>
            {AGE_RATINGS.map((rating, index) => {
              return (
                <SelectItem key={index + rating} value={rating}>
                  {rating}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
