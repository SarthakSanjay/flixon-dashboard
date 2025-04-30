"use client";

import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";
import { SearchBox } from "./SearchBox";
import { useRouter } from "next/navigation";

export default function Content({ type }: { type: string }) {
  let contentType = type.charAt(0).toUpperCase() + type.slice(1);
  const router = useRouter();

  return (
    <div className="h-full w-full mx-auto p-5">
      <div className="w-full flex justify-between">
        <SearchBox type={type} />

        <Button
          className=" bg-green-400 text-black hover:bg-green-700"
          onClick={() => router.push(`/${type}/insert`)}
        >
          Insert New {contentType}
        </Button>
      </div>
    </div>
  );
}
