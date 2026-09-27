import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <div className="container flex flex-col md:flex-row gap-8 py-12.5">
      <div className="w-full flex flex-col gap-2">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {t("brand")}
        </p>
        <p className="text-sm text-[#4A5565]">{t("tagline")}</p>
      </div>
      <div className="flex gap-6 md:gap-10 items-center justify-start md:justify-center">
        <div className="rounded-full bg-white size-14 md:size-16 lg:size-20 border border-[#CDCDCD] flex justify-center items-center">
          <Image
            src="Facebook.svg"
            width={40}
            height={40}
            alt="Picture of the author"
          />
        </div>
        <div className="rounded-full bg-white size-14 md:size-16 lg:size-20 border border-[#CDCDCD] flex justify-center items-center">
          <Image
            src="/Instagram.svg"
            width={40}
            height={40}
            alt="Picture of the author"
          />
        </div>
        <div className="rounded-full bg-white size-14 md:size-16 lg:size-20 border border-[#CDCDCD] flex justify-center items-center">
          <Image
            src="/Google.svg"
            width={40}
            height={40}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
