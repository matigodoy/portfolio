/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  href?: string;
  description: { en: string; es: string };
  image?: string;
  video?: string;
  technologies: readonly string[];
  onClose: () => void;
}

export function ProjectModal({
  title,
  href,
  description,
  image,
  video,
  technologies,
  onClose,
}: Props) {
  const { t, i18n } = useTranslation();
  const localizedDescription =
    i18n.language.startsWith("es") ? description.es : description.en;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-5xl max-h-[90vh] flex-col gap-8 overflow-y-auto rounded-xl border border-border bg-background p-8 shadow-lg sm:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t("close")}
          className="absolute right-4 top-4 z-10 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="size-5" />
        </button>
        <div className="relative w-full sm:w-3/5 shrink-0 h-64 sm:h-[480px] rounded-lg overflow-hidden bg-muted">
          {video ? (
            <>
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-red-500" />
                </span>
                {t("playing")}
              </div>
            </>
          ) : image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : null}
        </div>
        <div className="flex flex-1 flex-col gap-3 min-w-0">
          <div className="flex items-center gap-3">
            {image && (
              <img
                src={image}
                alt={title}
                className="size-10 rounded-full border object-contain flex-none"
              />
            )}
            {href ? (
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/title flex items-center gap-1 text-lg font-semibold hover:text-muted-foreground transition-colors"
              >
                {title}
                <ArrowUpRight className="size-4 opacity-0 -translate-x-1 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all duration-200" />
              </Link>
            ) : (
              <h3 className="text-lg font-semibold">{title}</h3>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {localizedDescription}
          </p>
          <div className="flex flex-col gap-2 mt-auto">
            <span className="text-xs font-medium text-muted-foreground">
              {t("technologies")}
            </span>
            <div className="flex flex-wrap gap-1">
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                  variant="outline"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
