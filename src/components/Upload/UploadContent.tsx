"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import ProgressBar from "./ProgressBar";
import BasicInfo from "./BasicInfo";
import { ReactNode, useEffect, useState } from "react";
import { currentProgressAtom } from "@/app/atoms/atom";
import { useAtom } from "jotai";
import AddCastAndCrew from "./AddCastAndCrew";
import { ModeToggle } from "../ModeToggle";
import { capitalizeFirstLetter } from "@/lib/utils";
import MediaUploads from "./MediaUploads";

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
  genre: z.array(z.string()).min(1, {
    message: "Select at least one genre",
  }),
  audioLanguages: z.array(z.string()).min(1, {
    message: "Select at least one audio language",
  }),
  subtitleLanguages: z.array(z.string()).min(1, {
    message: "Select at least one subtitle language",
  }),
});

export default function UploadContent({ type }: { type: string }) {
  const [currentElement, setCurrentElement] = useState<ReactNode | null>(null);
  const [currentProgress, setCurrentProgress] = useAtom(currentProgressAtom);

  // Hydrate from localStorage
  const savedData =
    typeof window !== "undefined"
      ? localStorage.getItem("uploadFormData")
      : null;

  // let parsedData: Partial<FormData> | undefined = undefined;
  let parsedData;

  if (savedData) {
    try {
      parsedData = JSON.parse(savedData);
      if (parsedData.releasingOn) {
        parsedData.releasingOn = new Date(parsedData.releasingOn);
      }
    } catch (error) {
      console.error("Failed to parse saved form data:", error);
    }
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: parsedData ?? {
      username: "",
      description: "",
      releasingOn: new Date(),
      genre: [],
      audioLanguages: [],
      subtitleLanguages: [],
    },
  });

  useEffect(() => {
    const subscription = form.watch((value) => {
      try {
        localStorage.setItem("uploadFormData", JSON.stringify(value));
      } catch (err) {
        console.error("Failed to save form data to localStorage", err);
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    localStorage.removeItem("uploadFormData");
    toast(<h1 className="text-green-500 text-lg">Success</h1>, {
      description: <h3 className="text-black">Movie uploaded</h3>,
    });
    // insert Movie api request
    console.log(values);
  }

  useEffect(() => {
    switch (currentProgress) {
      case 1:
        setCurrentElement(<BasicInfo form={form} />);
        break;
      case 2:
        setCurrentElement(<AddCastAndCrew />);
        break;
      case 3:
        setCurrentElement(<MediaUploads type={type} />);
        break;
      default:
        setCurrentElement(null);
    }
  }, [currentProgress, form, type]);

  return (
    <Form {...form}>
      <div className="text-lg h-12 border-b px-10 flex bg-white dark:bg-black sticky top-0 z-10 items-center justify-between">
        {"Insert" + " " + capitalizeFirstLetter(type)} <ModeToggle />
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 px-10 py-4"
      >
        <ProgressBar />
        {currentElement}

        <div className="h-max w-full flex gap-10">
          <Button
            type="submit"
            variant={"ghost"}
            className="border border-green-400 hover:bg-green-400/40 hover:text-green-400 cursor-pointer"
          >
            Upload
          </Button>
          <Button
            variant={"ghost"}
            className="border border-blue-500 hover:bg-blue-400/40 hover:text-blue-400 cursor-pointer"
          >
            Save as Draft
          </Button>
          <Button variant={"destructive"}>Cancel</Button>
          <Button
            variant={"secondary"}
            onClick={() => setCurrentProgress((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
}
