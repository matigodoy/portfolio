/* eslint-disable @next/next/no-img-element */
"use client";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TextAnimate } from "@/components/magicui/text-animate";

const BLUR_FADE_DELAY = 0.04;
const VISIBLE_COUNT = 5;

export default function CertificationsSection() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  if (DATA.certifications.length === 0) return null;

  const hasMore = DATA.certifications.length > VISIBLE_COUNT;
  const visibleCerts = expanded
    ? DATA.certifications
    : DATA.certifications.slice(0, VISIBLE_COUNT);

  return (
    <div className="flex min-h-0 flex-col gap-y-6">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h2 className="text-xl font-bold"><TextAnimate>{t("certifications")}</TextAnimate></h2>
      </BlurFade>
      <div className="relative flex flex-col gap-8">
        {visibleCerts.map((cert, index) => {
          const inner = (
            <div className="flex items-center gap-x-3 flex-1 min-w-0">
              {cert.logoUrl ? (
                <img
                  src={cert.logoUrl}
                  alt={cert.issuer}
                  className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                />
              ) : (
                <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
              )}
              <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                <div className="font-semibold leading-none flex items-center gap-2">
                  {cert.name}
                  {cert.href && (
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                  )}
                </div>
                <div className="font-sans text-base text-muted-foreground">
                  {cert.issuer}
                </div>
              </div>
            </div>
          );

          return (
            <BlurFade key={cert.name + cert.issuer} delay={BLUR_FADE_DELAY + index * 0.05}>
              {cert.href ? (
                <Link
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  {inner}
                  {cert.date && (
                    <div className="flex items-center gap-1 text-sm tabular-nums text-muted-foreground text-right flex-none">
                      {cert.date}
                    </div>
                  )}
                </Link>
              ) : (
                <div className="flex items-center gap-x-3 justify-between">
                  {inner}
                  {cert.date && (
                    <div className="flex items-center gap-1 text-sm tabular-nums text-muted-foreground text-right flex-none">
                      {cert.date}
                    </div>
                  )}
                </div>
              )}
            </BlurFade>
          );
        })}
        {hasMore && !expanded && (
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        )}
      </div>
      {hasMore && !expanded && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="self-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {t("showMore")}
        </button>
      )}
    </div>
  );
}
