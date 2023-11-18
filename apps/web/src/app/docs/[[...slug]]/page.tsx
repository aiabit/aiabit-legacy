// import { format, parseISO } from "date-fns";
import type { Metadata } from "next";
import { allDocs } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = (): { slug: string[] }[] => {
  return allDocs.map((doc) => {
    console.log(doc.url);
    const slug = doc._raw.flattenedPath.split("/");
    console.log(slug);
    return { slug };
  });
};

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] };
}): Metadata => {
  console.log(params);
  const slug = params.slug.join("/");
  console.log("slug", slug);
  const doc = allDocs.find((d) => d._raw.flattenedPath === slug);
  console.log(allDocs);
  console.log(doc);
  return { title: doc.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug.join("/");
  console.log("slug2", slug);
  const doc = allDocs.find((d) => d._raw.flattenedPath === slug)!;

  const Content = getMDXComponent(doc.body.code);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={doc.date} className="mb-1 text-xs text-gray-600">
          {doc.date}
        </time>
        <h1>{doc.title}</h1>
      </div>
      <Content />
    </article>
  );
};

export default PostLayout;
