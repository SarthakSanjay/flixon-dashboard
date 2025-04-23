"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Calendar } from "./ui/calendar";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import SelectGenre from "./SelectGenre";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "description must be at least 10 characters",
  }),
  releasingOn: z.date({
    required_error: "release date is required",
  }),
});

export default function InsertContent({ type }: { type: string }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      description: "",
      releasingOn: new Date(),
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(values.releasingOn, null, 2)}
          </code>
        </pre>
      ),
    });

    console.log(values);
  }

  return (
    <Form {...form}>
      <h1 className="text-lg h-15 px-10 flex items-center">{type}</h1>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 border border-white p-10"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl className="w-1/3">
                <Input placeholder="enter title" {...field} />
              </FormControl>
              {/* <FormDescription> */}
              {/*   This is your public display name. */}
              {/* </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl className="w-1/3">
                <Textarea placeholder="enter description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="releasingOn"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Releasing On</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"ghost"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Pick a date on which content is releasing on
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <SelectGenre />

        <div className="h-max w-full flex gap-10">
          <Button
            type="submit"
            variant={"ghost"}
            className="border border-green-400 hover:bg-green-400/40 hover:text-green-400 cursor-pointer"
          >
            Submit
          </Button>
          <Button
            variant={"ghost"}
            className="border border-blue-500 hover:bg-blue-400/40 hover:text-blue-400 cursor-pointer"
          >
            Draft
          </Button>
          <Button variant={"destructive"}>Cancel</Button>
        </div>
      </form>
    </Form>
  );
}
