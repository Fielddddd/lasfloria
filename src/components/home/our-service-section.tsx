import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function OurServiceSection() {
  const t = useTranslations("OurService");

  return (
    <main
      id="service"
      className="bg-primary w-full h-full container flex flex-col gap-9 scroll-mt-24"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
        <h1 className="text-black text-xl sm:text-2xl md:text-3xl">
          {t("heading")}
        </h1>
        <div className="text-[#4A5565] text-start lg:text-end text-sm md:text-base">
          <h1>{t("description1")}</h1>
          <h1>{t("description2")}</h1>
        </div>
      </div>
      <div className="flex flex-col 2xl:flex-row 2xl:h-[356px] justify-between gap-5">
        <Card className="relative py-0 w-full overflow-hidden flex flex-col 2xl:block">
          <div className="relative w-full h-56 2xl:absolute 2xl:inset-0 2xl:h-full">
            <Image
              src="/bgUXUI.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="object-cover w-full h-full"
            />
            <div className="hidden 2xl:block absolute inset-0 backdrop-blur-xl bg-transparent w-full" />
          </div>
          <div className="relative 2xl:absolute 2xl:inset-0 text-black 2xl:text-white flex flex-col justify-center pt-5 pr-5 pb-5 w-full pl-6 2xl:pl-10">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between gap-4">
                <h1 className="text-xl md:text-2xl lg:text-3xl">
                  | {t("uxuiTitle")}
                </h1>
                <div className="rounded-full bg-black size-9 md:size-10 lg:size-[50px] flex items-center justify-center shrink-0">
                  <ArrowUpRight className="size-5 md:size-6 lg:size-7 text-white" />
                </div>
              </div>
              <p className="text-sm md:text-base lg:text-lg font-light w-full 2xl:w-[500px] pr-4">
                {t("uxuiDescription")}
              </p>
            </div>
          </div>
        </Card>
        <Card className="relative py-0 w-full overflow-hidden flex flex-col 2xl:block">
          <div className="relative w-full h-56 2xl:absolute 2xl:inset-0 2xl:h-full">
            <Image
              src="/bgWeb.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="object-cover w-full h-full"
            />
            <div className="hidden 2xl:block absolute inset-0 backdrop-blur-xl bg-transparent w-full" />
          </div>
          <div className="relative 2xl:absolute 2xl:inset-0 text-black 2xl:text-white flex flex-col justify-center pt-5 pr-5 pb-5 w-full pl-6 2xl:pl-10">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between gap-4">
                <h1 className="text-xl md:text-2xl lg:text-3xl">
                  | {t("webTitle")}
                </h1>
                <div className="rounded-full bg-black size-9 md:size-10 lg:size-[50px] flex items-center justify-center shrink-0">
                  <ArrowUpRight className="size-5 md:size-6 lg:size-7 text-white" />
                </div>
              </div>
              <p className="text-sm md:text-base lg:text-lg font-light w-full 2xl:w-[500px] pr-4">
                {t("webDescription")}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
