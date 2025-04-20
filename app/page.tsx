import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
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
        <h1 className="text-2xl font-bold text-nowrap sm:text-3xl">
          Monke Resources
        </h1>
      </div>
      <div className="flex grow flex-col justify-center gap-4">
        <div className="flex">
          <Button asChild className="gacha-game shrink-0 grow basis-80 p-0">
            <Link href={"/blue-archive"}>
              <span className="ba-cover size-full content-center text-center text-2xl font-light text-white">
                Blue Archive
              </span>
            </Link>
          </Button>
          <Button asChild className="gacha-game shrink-0 grow basis-80 p-0">
            <Link href={"/gfl2"}>
              <span className="gfl2-cover size-full content-center text-center text-2xl font-light text-white">
                Girl&apos;s Frontline 2
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
