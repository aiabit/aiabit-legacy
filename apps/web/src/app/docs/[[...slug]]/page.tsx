import type { Metadata } from "next";
import { allDocs } from "contentlayer/generated";
import dayjs from "dayjs";
import { trimEnd } from "lodash";
import { getMDXComponent } from "next-contentlayer/hooks";

import Anchor from "./Anchor";

export const generateStaticParams = (): { slug: string[] }[] =>
  allDocs.map((doc) => ({ slug: doc._raw.flattenedPath.split("/") }));

export const generateMetadata = ({
  params,
}: {
  params: { slug?: string[] };
}): Metadata => {
  const slug = params.slug?.join("/") ?? "";
  const doc = allDocs.find((d) => d._raw.flattenedPath === slug);
  if (!doc) {
    return { title: "Not found" };
  }
  return { title: doc.title };
};

const PostLayout = ({ params }: { params: { slug?: string[] } }) => {
  const slug = params.slug?.join("/") ?? "";
  const doc = allDocs.find((d) => d._raw.flattenedPath === slug)!;
  if (!doc) {
    return <div>Not found</div>;
  }

  const Content = getMDXComponent(doc.body.code);
  const anchors = allDocs.map((doc) => ({
    key: trimEnd(doc.url, "/"),
    href: trimEnd(doc.url, "/"),
    title: doc.title,
  }));
  console.log(anchors);

  return (
    <article className="mx-auto max-w-xl py-8">
      <Anchor />
      <div className="mb-8 text-center">
        <time dateTime={doc.date} className="mb-1 text-xs text-gray-600">
          {dayjs(doc.date).format("YYYY-MM-DD")}
        </time>
        <h1>{doc.title}</h1>
      </div>
      <Content />
    </article>
  );
};

export default PostLayout;
