"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Globe } from "lucide-react";

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const nextLocale = locale === "en" ? "th" : "en";

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      aria-label="Switch language"
      className={`flex items-center gap-1.5 cursor-pointer hover:opacity-60 transition-opacity ${className}`}
    >
      <Globe className="size-4" />
      {nextLocale.toUpperCase()}
    </button>
  );
}
