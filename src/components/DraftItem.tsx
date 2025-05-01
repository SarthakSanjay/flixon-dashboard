import { EllipsisVertical } from "lucide-react";

export default function DraftItem({
  title,
  lastEdited,
}: {
  title: string;
  lastEdited: string;
}) {
  return (
    <div className="h-10 w-full rounded-sm border border-gray-500 flex items-center justify-between px-4 hover:bg-gray-500/20">
      <h1 className="w-1/3">{title}</h1>
      <span className="text-sm text-gray-500 w-1/3">
        Edited on:{lastEdited}
      </span>

      <EllipsisVertical />
    </div>
  );
}
