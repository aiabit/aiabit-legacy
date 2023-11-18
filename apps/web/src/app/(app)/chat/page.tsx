"use client";

import Link from "next/link";
import { Space } from "antd";

export default function ChatPage() {
  return (
    <div>
      Chat
      <br />
      <Space direction="vertical">
        <Link href="/chat/1">Chat 1</Link>
        <Link href="/chat/2">Chat 2</Link>
      </Space>
    </div>
  );
}
