"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./language-switcher";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;
  const textColor = solid ? "text-black" : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        solid ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex justify-between items-center px-6 py-5 sm:px-8 md:p-[42px]">
        <div className="flex gap-[14px]">
          <Image
            src="/logo.svg"
            width={40}
            height={40}
            alt="Picture of the author"
            className={`transition-all duration-300 ${solid ? "invert" : ""}`}
          />
          <h1
            className={`flex items-center text-lg md:text-2xl transition-colors duration-300 ${textColor}`}
          >
            {t("brand")}
          </h1>
        </div>

        <div
          className={`hidden md:flex items-center gap-[36px] xl:gap-[50px] text-base lg:text-lg cursor-pointer transition-colors duration-300 ${textColor}`}
        >
          <a href="#about" className="hover:opacity-60">
            {t("aboutUs")}
          </a>
          <a href="#service" className="hover:opacity-60">
            {t("service")}
          </a>
          <a href="#contact" className="hover:opacity-60">
            {t("contactUs")}
          </a>
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden cursor-pointer transition-colors duration-300 ${textColor}`}
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-6 px-6 pb-6 text-lg text-black">
          <a href="#about" onClick={() => setOpen(false)}>
            {t("aboutUs")}
          </a>
          <a href="#service" onClick={() => setOpen(false)}>
            {t("service")}
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            {t("contactUs")}
          </a>
          <LanguageSwitcher />
        </div>
      )}
    </nav>
  );
}
