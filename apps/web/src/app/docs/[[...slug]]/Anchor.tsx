"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { AnchorProps } from "antd";
import { Anchor as BaseAnchor } from "antd";

import menus from "./route.json";

export default function Anchor() {
  const pathname = usePathname();
  const router = useRouter();

  const items = useMemo(() => {
    return menus.nav as Required<AnchorProps>["items"];
  }, []);

  const onAnchorClick: AnchorProps["onClick"] = (e, link) => {
    e.preventDefault();
    router.push(link.href);
  };

  return (
    <BaseAnchor
      className="mb-8"
      items={items}
      getCurrentAnchor={() => pathname}
      onClick={onAnchorClick}
    />
  );
}
