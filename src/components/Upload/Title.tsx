import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

export default function Title({ form }: { form: any }) {
  return (
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Title</FormLabel>
          <FormControl className="w-full">
            <Input placeholder="enter title" {...field} />
          </FormControl>
          <FormDescription>Enter title of the content</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
