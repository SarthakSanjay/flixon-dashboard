"use client";

import {
  ChevronRight,
  Clapperboard,
  DraftingCompass,
  Film,
  LayoutDashboard,
  Plus,
  RefreshCw,
  Trash,
  Tv,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <LayoutDashboard className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none ">
                  <span className="font-semibold">Flixon Dashboard</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Contents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  className="hover:bg-zinc-800"
                  onClick={() => router.push("/movie")}
                >
                  <Film />
                  <span>Movies</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  className="hover:bg-zinc-800"
                  onClick={() => router.push("/show")}
                >
                  <Tv />
                  <span>Shows</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* <SideItem label="Movies" icon={<Film />} /> */}
              {/* <SideItem label="Shows" icon={<Tv />} /> */}
              {/* <SideItem label="Cast & Crew" icon={<Clapperboard />} /> */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  className="hover:bg-zinc-800"
                  onClick={() => router.push("/drafts")}
                >
                  <DraftingCompass />
                  <span>Drafts</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* <SidebarGroup> */}
        {/* <SidebarGroupLabel>Cast & Crew</SidebarGroupLabel> */}
        {/*   <SidebarGroupContent> */}
        {/*     <SidebarMenu> */}
        {/**/}
        {/*     </SidebarMenu> */}
        {/*     </SidebarGroupContent> */}
        {/*   </SidebarGroup> */}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

function SideItem({ label, icon }: { label: string; icon: ReactNode }) {
  return (
    <Collapsible className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className="hover:bg-zinc-800">
            {icon}
            <span>{label}</span>
            <ChevronRight className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            <NestedItem
              label="Add"
              link="/add"
              icon={<Plus className="mr-2 h-4 w-4" />}
            />
            <NestedItem
              label="Update"
              link=""
              icon={<RefreshCw className="mr-2 h-4 w-4" />}
            />
            <NestedItem
              label="Delete"
              link=""
              icon={<Trash className="mr-2 h-4 w-4" />}
            />
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

function NestedItem({
  label,
  link,
  icon,
}: {
  label: string;
  link: string;
  icon: ReactNode;
}) {
  return (
    <SidebarMenuSubItem>
      <SidebarMenuSubButton asChild className="hover:bg-zinc-800">
        <a href={link}>
          {icon}
          {label}
        </a>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
}
