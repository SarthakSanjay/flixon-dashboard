"use client";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "./ui/sidebar";
import { capitalizeFirstLetter } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const heading = capitalizeFirstLetter(pathname.split("/")[1]);
  // console.log(pathname.split("/")[1]);
  return (
    <div className="h-12 w-full flex items-center px-5 border-b border-zinc-500">
      <SidebarTrigger />
      <h1 className="text-lg mx-5">{heading}</h1>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </div>
  );
}
