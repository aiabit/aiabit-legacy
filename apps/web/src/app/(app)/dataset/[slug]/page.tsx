"use client";

export default function DatasetPage({ params }: { params: { slug: string } }) {
  return <div>Dataset: {params.slug}</div>;
}
