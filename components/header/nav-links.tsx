"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Button } from "../ui/button";

export default function NavigationLinks() {
  const pathname = usePathname();

  return (
    <nav>
      <Button id="home-button" variant={"link"} asChild>
        <Link href={"/"}>
          <Image
            id="feelsbadman-icon"
            src={"/feelsbadman.webp"}
            alt={""}
            width={32}
            height={32}
          />
          <Image
            id="ree-icon"
            src={"/ree.webp"}
            alt={""}
            width={32}
            height={32}
          />
          Home
        </Link>
      </Button>
      {pathname === "/gfl2" ? GFL2Links() : undefined}
    </nav>
  );
}

function GFL2Links() {
  return (
    <Button asChild>
      <Link href={"gfl2/rotation"}>Gunsmoke</Link>
    </Button>
  );
}
