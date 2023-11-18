// import { format, parseISO } from "date-fns";
import type { Metadata } from "next";
import { allDocs } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = (): { slug: string[] }[] =>
  allDocs.map((doc) => ({ slug: doc._raw.flattenedPath.split("/") }));

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] };
}): Metadata => {
  const slug = params.slug.join("/");
  const doc = allDocs.find((d) => d._raw.flattenedPath === slug);
  if (!doc) {
    return { title: "Not found" };
  }
  return { title: doc.title };
};

const PostLayout = ({ params }: { params: { slug: string[] } }) => {
  const slug = params.slug.join("/");
  const doc = allDocs.find((d) => d._raw.flattenedPath === slug)!;
  if (!doc) {
    return <div>Not found</div>;
  }

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
