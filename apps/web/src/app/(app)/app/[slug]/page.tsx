"use client";

export default function AppPage({ params }: { params: { slug: string } }) {
  return <div>App: {params.slug}</div>;
}
