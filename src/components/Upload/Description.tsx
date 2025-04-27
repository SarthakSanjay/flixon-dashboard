import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

export default function Description({ form }: { form: any }) {
  return (
    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl className="w-full">
            <Textarea placeholder="enter description" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
