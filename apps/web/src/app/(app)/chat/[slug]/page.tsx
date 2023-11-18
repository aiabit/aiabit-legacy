"use client";

export default function ChatPage({ params }: { params: { slug: string } }) {
  return <div>Chat: {params.slug}</div>;
}
