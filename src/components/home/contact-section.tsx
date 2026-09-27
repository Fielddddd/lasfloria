import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ContactForm from "./contact-form";

export default function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <main id="contact" className="bg-primary w-full h-full container scroll-mt-24">
      <Card className="flex flex-col lg:flex-row p-6 sm:p-8 md:p-16 lg:p-20 gap-8 md:gap-15">
        <div className="flex flex-col gap-10 md:gap-22.5 w-full">
          <div className="flex flex-col gap-3 w-full">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              <h1>{t("heading1")}</h1>
              <h1>{t("heading2")}</h1>
            </div>
            <div className="text-[#4A5565] text-sm md:text-base">
              <p>{t("description1")}</p>
              <p>{t("description2")}</p>
            </div>
          </div>
          <div className="flex flex-col gap-9">
            <div className="flex gap-5">
              <div className="rounded-full bg-white size-15 border border-[#CDCDCD] flex justify-center items-center">
                <Image
                  src="/Google.svg"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#4A5565]">{t("email")}</p>
                <p className="text-black text-lg md:text-xl">
                  lasfloria.co@gmail.com
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="rounded-full bg-white size-15 border border-[#CDCDCD] flex justify-center items-center">
                <Image
                  src="/Instagram.svg"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#4A5565]">{t("instagram")}</p>
                <p className="text-black text-lg md:text-xl">@lasfloria.co</p>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </Card>
    </main>
  );
}
