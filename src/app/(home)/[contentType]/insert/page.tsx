import UploadContent from "@/components/Upload/UploadContent";

export default async function InsertPage({ params }: { params: any }) {
  const { contentType } = await params;
  return <UploadContent type={contentType} />;
}
