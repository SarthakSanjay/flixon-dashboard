import Dropzone from "./Dropzone";

export default function MediaUploads({ type }: { type: any }) {
  return (
    <div className="min-h-[50vh] w-full px-10 py-4 flex flex-col gap-5">
      <Dropzone label="thumbnail" className="h-32 w-64" fileType="image" />
      <Dropzone label="poster" className="h-64 w-40" fileType="image" />

      <div className="flex flex-col">
        <h1>Screenshots</h1>
        <div className="flex gap-5">
          {[1, 2, 3].map((item) => {
            return (
              <Dropzone
                key={item}
                label=""
                className="h-32 w-64"
                fileType="image"
              />
            );
          })}
        </div>
      </div>

      <Dropzone label="title image" className="h-32 w-64" fileType="image" />

      <div className="flex gap-5">
        <Dropzone label="video" className="h-32 w-64" fileType="video" />
        <Dropzone label="trailer" className="h-32 w-64" fileType="video" />
      </div>
    </div>
  );
}
