import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main className="mx-auto my-4 flex w-[90%] grow flex-col justify-center sm:my-8 sm:w-[70%]">
        <div className="mb-12 flex flex-col items-center gap-4">
          <Image
            src={"/monke.webp"}
            alt={
              "An animated GIF depicting Pepega the Frog running while screaming"
            }
            width={100}
            height={100}
            unoptimized
            priority
            className="h-[100px] w-[100px]"
          />
          <h1 className="text-center text-2xl font-bold text-nowrap sm:text-3xl">
            Monke Resources
          </h1>
        </div>
        <div className="flex grow flex-col flex-wrap gap-4 sm:grow-0 sm:flex-row">
          <Button
            asChild
            className="gacha-game flex-1 shrink-0 basis-0 p-0 sm:h-[20rem]"
          >
            <Link href={"/blue-archive"}>
              <span className="ba-cover size-full content-center text-center text-2xl font-light text-white">
                Blue Archive
              </span>
            </Link>
          </Button>
          <Button
            className="gacha-game flex-1 shrink-0 basis-0 p-0 sm:h-[20rem]"
            asChild
          >
            <Link href={"/gfl2"}>
              <span className="gfl2-cover size-full content-center text-center text-2xl font-light text-white">
                Girl&apos;s Frontline 2
              </span>
            </Link>
          </Button>
        </div>
      </main>
    </>
  );
}
