import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BannerSection() {
  const b = useTranslations("Banner");

  return (
    <main className="relative w-full h-screen">
      <Image
        src="/bg.png"
        alt="Picture of the author"
        fill
        className="object-cover w-full"
        priority
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center">
        <div>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            {b("headline1")}
          </h1>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            {b("headline2")}
          </h1>
        </div>
        <div className="text-white text-sm sm:text-base md:text-lg xl:text-xl text-center">
          <h1>{b("subtitle1")}</h1>
          <h1>{b("subtitle2")}</h1>
        </div>
        <div>
          <Button
            asChild
            className="border-white border text-white bg-transparent rounded-[50px] cursor-pointer flex justify-center"
          >
            <a href="#contact">
              <span className="flex items-center gap-2 px-3 py-6 leading-none relative -top-[1px] font-medium">
                {b("cta")}
                <ArrowRight className="w-[18px] h-[18px] flex-shrink-0 relative top-[2px]" />
              </span>
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
