import Image from "next/image";
import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

export default function DetailAboutUsSection() {
  const t = useTranslations("AboutUs");

  return (
    <main
      id="about"
      className="relative w-full min-h-[420px] sm:min-h-[480px] md:min-h-[500px] lg:min-h-[600px] scroll-mt-24"
    >
      <Image
        src="/bgLasfloria.png"
        alt="Picture of the author"
        fill
        className="object-cover w-full"
        priority
      />

      <div className="absolute inset-0 flex flex-col items-start justify-center pl-6 gap-8 sm:pl-10 md:pt-15 md:pl-16 md:justify-start md:gap-16 lg:pl-25 xl:gap-24">
        <div className="text-black">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {t("heading1")}
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {t("heading2")}
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {t("heading3")}
          </h1>
        </div>
        <div className="flex flex-col gap-2.5 pr-6">
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
            <Avatar className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 xl:h-[92px] xl:w-[92px]">
              <AvatarFallback className="bg-gray-100">
                <User className="size-1/2 text-gray-400" />
              </AvatarFallback>
            </Avatar>
            <Avatar className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 xl:h-[92px] xl:w-[92px]">
              <AvatarFallback className="bg-gray-100">
                <User className="size-1/2 text-gray-400" />
              </AvatarFallback>
            </Avatar>
            <Avatar className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 xl:h-[92px] xl:w-[92px]">
              <AvatarFallback className="bg-gray-100">
                <User className="size-1/2 text-gray-400" />
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="text-[#4A5565]">
            <h1 className="text-sm sm:text-base md:text-lg xl:text-xl">
              {t("description1")}
            </h1>
            <h1 className="text-sm sm:text-base md:text-lg xl:text-xl">
              {t("description2")}
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
