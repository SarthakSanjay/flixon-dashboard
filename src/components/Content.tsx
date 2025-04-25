"use client";

import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";
import { SearchBox } from "./SearchBox";
import { useRouter } from "next/navigation";

export default function Content({ type }: { type: string }) {
  let contentType = type.charAt(0).toUpperCase() + type.slice(1);
  const router = useRouter();

  return (
    <div className="h-full w-full mx-auto">
      <div className="h-10 w-full flex items-center">
        <SidebarTrigger />
      </div>
      <div className="">
        <div className="h-max w-full flex items-center justify-between px-10">
          <h1 className="">{contentType}s</h1>
          <Button
            className=" bg-green-400 text-black hover:bg-green-700"
            onClick={() => router.push(`/${type}/insert`)}
          >
            Insert New {contentType}
          </Button>
        </div>

        <SearchBox type={type} />
        {/* <div className="w-1/3 flex ml-10 gap-2"> */}
        {/*   <Input placeholder={`Search ${type}s`} onChange={handleChange} /> */}
        {/*   <Button>Search</Button> */}
        {/* </div> */}
      </div>
    </div>
  );
}
