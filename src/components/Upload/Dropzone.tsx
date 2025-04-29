import { ImageUp } from "lucide-react";
import { FormLabel } from "../ui/form";
import { capitalizeFirstLetter, cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Dropzone({
  label,
  className,
  fileType,
}: {
  label: string;
  className: string;
  fileType: string;
}) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith(`${fileType}/`)) {
      setPreview(URL.createObjectURL(file));
    }
  };

  //to prevent memory leaks
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div className="space-y-2">
      <FormLabel>{capitalizeFirstLetter(label)}</FormLabel>
      <div
        className={cn(
          "h-32 w-64 rounded-md text-sm text-zinc-500 border border-dashed border-zinc-500 flex justify-center items-center cursor-pointer hover:text-zinc-100 hover:border-zinc-100 gap-3 relative",
          className,
        )}
      >
        <input
          type="file"
          accept={`${fileType}/*`}
          className=" h-full w-full absolute z-10 opacity-0 cursor-pointer"
          onChange={handleImageChange}
        />
        {preview ? (
          fileType === "image" ? (
            <img
              src={preview}
              alt="Preview"
              className="h-full w-full object-cover absolute z-20 object-center"
            />
          ) : (
            <video
              src={preview}
              className="h-full w-full object-cover absolute z-20 object-center"
              controls={true}
            />
          )
        ) : (
          <div className="flex gap-3">
            <ImageUp /> Upload {capitalizeFirstLetter(label)}
          </div>
        )}
      </div>
    </div>
  );
}
