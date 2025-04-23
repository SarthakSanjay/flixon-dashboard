import InsertContent from "@/components/InsertContent";

export default function InsertPage({ params }: { params: any }) {
  const { contentType } = params;
  return <InsertContent type={contentType} />;
}
