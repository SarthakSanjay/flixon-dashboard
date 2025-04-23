import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { Label } from "./ui/label";

export default function SelectGenre() {
  return (
    <div>
      <Label className="my-2">Genre</Label>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Genre" />
        </SelectTrigger>
        <SelectContent className="bg-black text-white">
          <SelectGroup>
            <SelectLabel>Genre</SelectLabel>
            <SelectItem value="action">Action</SelectItem>
            <SelectItem value="comedy">Comedy</SelectItem>
            <SelectItem value="thriller">Thriller</SelectItem>
            <SelectItem value="horror">Horror</SelectItem>
            <SelectItem value="drama">Drama</SelectItem>
            <SelectItem value="sci-fi">Sci-fi</SelectItem>
            <SelectItem value="romance">Romance</SelectItem>
            <SelectItem value="fantasy">fantasy</SelectItem>
            <SelectItem value="crime">Crime</SelectItem>
            <SelectItem value="animation">Animation</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
