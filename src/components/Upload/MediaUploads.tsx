import { CloudUpload, ImageUp } from "lucide-react";
import { FormLabel } from "../ui/form";

export default function MediaUploads({ type }: { type: any }) {
  return (
    <div className="min-h-[50vh] w-full px-10 py-4 flex flex-col gap-5">
      <div className="space-y-2">
        <FormLabel>Thumbnail</FormLabel>
        <div className="h-32 w-64 rounded-md text-sm text-zinc-500 border border-dashed border-zinc-500 flex justify-center items-center cursor-pointer hover:text-zinc-100 hover:border-zinc-100 gap-3">
          <ImageUp /> Upload Thumbnail
        </div>
      </div>

      <div className="space-y-2">
        <FormLabel>Poster</FormLabel>
        <div className="w-40 h-64 rounded-md text-sm text-zinc-500 border border-dashed border-zinc-500 flex justify-center items-center cursor-pointer hover:text-zinc-100 hover:border-zinc-100 gap-3">
          <ImageUp /> Upload Poster
        </div>
      </div>

      <div className="flex gap-5">
        {[1, 2, 3].map((item) => {
          return (
            <div className="space-y-2">
              <FormLabel>Screenshot {item}</FormLabel>
              <div className="h-32 w-64 rounded-md text-sm text-zinc-500 border border-dashed border-zinc-500 flex justify-center items-center cursor-pointer hover:text-zinc-100 hover:border-zinc-100 gap-3">
                <ImageUp /> Upload Screenshot {item}
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-2">
        <FormLabel>Title</FormLabel>
        <div className="h-32 w-64 rounded-md text-sm text-zinc-500 border border-dashed border-zinc-500 flex justify-center items-center cursor-pointer hover:text-zinc-100 hover:border-zinc-100 gap-3">
          <ImageUp /> Upload Title Image
        </div>
      </div>

      <div className="flex gap-5">
        <div className="space-y-2">
          <FormLabel>Video</FormLabel>
          <div className="h-32 w-64 rounded-md text-sm text-zinc-500 border border-dashed border-zinc-500 flex justify-center items-center cursor-pointer hover:text-zinc-100 hover:border-zinc-100 gap-3">
            <CloudUpload /> Upload Video
          </div>
        </div>

        <div className="space-y-2">
          <FormLabel>Trailer</FormLabel>
          <div className="h-32 w-64 rounded-md text-sm text-zinc-500 border border-dashed border-zinc-500 flex justify-center items-center cursor-pointer hover:text-zinc-100 hover:border-zinc-100 gap-3">
            <CloudUpload /> Upload Trailer
          </div>
        </div>
      </div>
    </div>
  );
}
