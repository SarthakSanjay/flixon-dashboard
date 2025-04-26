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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";
import { CalendarIcon, Cross, X } from "lucide-react";
import { cn } from "@/lib/utils";
import SelectBox from "./SelectBox";
import { GENRE, LANGUAGE } from "@/app/constants/constant";
import { useAtom, useAtomValue } from "jotai";
import { genreAtom, languageAtom, subtitleAtom } from "@/app/atoms/atom";

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
  const [genres, setGenres] = useAtom(genreAtom);
  const [languages, setLanguages] = useAtom(languageAtom);
  const [subtitles, setSubtitles] = useAtom(subtitleAtom);

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
        className="space-y-4 border border-white p-10"
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

        <div className="h-max w-1/2 flex flex-col">
          <SelectBox items={GENRE} type="Genre" />
          <div className="h-max w-full mt-4 flex gap-1">
            {genres &&
              genres.map((gen, index) => {
                return (
                  <span
                    key={gen + index}
                    className="h-8 w-max mx-1 px-3 py-1 rounded-md bg-white text-black flex items-center gap-2"
                  >
                    {gen}
                    <X
                      size={15}
                      className="hover:text-red-500 scale-110 transition-all duration-300 ease-in-out"
                      onClick={() => {
                        setGenres((prev) => {
                          if (prev.includes(gen)) {
                            return prev.filter((p) => p !== gen);
                          } else {
                            return prev;
                          }
                        });
                      }}
                    />
                  </span>
                );
              })}
          </div>
        </div>

        <div className="h-max w-1/2 flex flex-col">
          <SelectBox items={LANGUAGE} type="Language" />
          <div className="h-max w-full mt-4 flex gap-1">
            {languages &&
              languages.map((lang, index) => {
                return (
                  <span
                    key={lang + index}
                    className="h-8 w-max mx-1 px-3 py-1 rounded-md bg-white text-black flex items-center gap-2"
                  >
                    {lang}
                    <X
                      size={15}
                      className="hover:text-red-500 scale-110 transition-all duration-300 ease-in-out"
                      onClick={() => {
                        setLanguages((prev) => {
                          if (prev.includes(lang)) {
                            return prev.filter((p) => p !== lang);
                          } else {
                            return prev;
                          }
                        });
                      }}
                    />
                  </span>
                );
              })}
          </div>
        </div>

        <div className="h-max w-1/2 flex flex-col">
          <SelectBox items={LANGUAGE} type="Subtitles" />
          <div className="h-max w-full mt-4 flex gap-1">
            {subtitles &&
              subtitles.map((sub, index) => {
                return (
                  <span
                    key={sub + index}
                    className="h-8 w-max mx-1 px-3 py-1 rounded-md bg-white text-black flex items-center gap-2"
                  >
                    {sub}
                    <X
                      size={15}
                      className="hover:text-red-500 scale-110 transition-all duration-300 ease-in-out"
                      onClick={() => {
                        setSubtitles((prev) => {
                          if (prev.includes(sub)) {
                            return prev.filter((p) => p !== sub);
                          } else {
                            return prev;
                          }
                        });
                      }}
                    />
                  </span>
                );
              })}
          </div>
        </div>

        <div className="h-max w-full flex gap-10">
          <Button
            type="submit"
            variant={"ghost"}
            className="border border-green-400 hover:bg-green-400/40 hover:text-green-400 cursor-pointer"
          >
            Save
          </Button>
          <Button
            variant={"ghost"}
            className="border border-blue-500 hover:bg-blue-400/40 hover:text-blue-400 cursor-pointer"
          >
            Save as Draft
          </Button>
          <Button variant={"destructive"}>Cancel</Button>
        </div>
      </form>
    </Form>
  );
}

function AddMedia() {
  return <div className=""></div>;
}
