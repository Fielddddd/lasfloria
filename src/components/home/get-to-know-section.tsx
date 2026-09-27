import { useTranslations } from "next-intl";

export default function GetToKnowSection() {
  const t = useTranslations("GetToKnow");

  return (
    <main className="bg-primary container w-full h-full">
      <div className="py-7.5 w-full max-w-[1140px] mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
        <p className="text-start md:text-end">{t("line1")}</p>

        <p className="text-start md:text-end text-[#949494] underline underline-offset-5">
          {t("line2")}
        </p>
        <div className="ml-0 md:ml-4">
          {t("line3")}{" "}
          <span className="text-[#949494] underline underline-offset-5">
            {t("line3Highlight")}
          </span>
        </div>
      </div>
    </main>
  );
}
