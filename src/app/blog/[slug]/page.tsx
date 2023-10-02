import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";

type BlogPostProps = {
  params: {
    slug: string;
  };
};

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    notFound;
  }
  return doc;
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const doc = await getDocFromParams(params.slug);
  return <pre>{JSON.stringify(doc, null, 2)}</pre>;
}
