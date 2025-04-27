import { currentProgressAtom } from "@/app/atoms/atom";
import { cn } from "@/lib/utils";
import { useAtomValue } from "jotai";

export default function ProgressBar() {
  const currentProgress = useAtomValue(currentProgressAtom);
  const progressItems = [
    {
      num: 1,
      label: "Basic Information",
    },
    {
      num: 2,
      label: "Add Cast and Crew",
    },
    {
      num: 3,
      label: "Upload Media",
    },
    {
      num: 4,
      label: "Upload",
    },
  ];
  return (
    <div className="h-20 w-full flex items-center justify-center gap-10">
      {progressItems.map((item, index) => {
        return (
          <div
            className="h-max flex flex-col items-center text-sm gap-2"
            key={item.label + index}
          >
            <div
              className={cn(
                "h-8 w-8 rounded-full flex justify-center items-center",
                currentProgress > item.num
                  ? "bg-green-500"
                  : currentProgress === item.num
                    ? "bg-blue-500"
                    : "bg-zinc-500",
              )}
            >
              {item.num}
            </div>
            <div className="text-md">{item.label}</div>
          </div>
        );
      })}
    </div>
  );
}
