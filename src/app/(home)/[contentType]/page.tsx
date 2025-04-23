import Content from "@/components/Content";

export default function contentPage({ params }: { params: any }) {
  const { contentType } = params;
  return <Content type={contentType} />;
}
