/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import type { Localized, ProjectImage, ProjectLink } from "@/data/resume";
import { LINK_LABEL_KEYS } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  href?: string;
  category: Localized;
  description: Localized;
  highlights?: { en: readonly string[]; es: readonly string[] };
  dates: string;
  images: readonly ProjectImage[];
  links?: readonly ProjectLink[];
  internal?: boolean;
  technologies: readonly string[];
  onClose: () => void;
}

export function ProjectModal({
  title,
  href,
  category,
  description,
  highlights,
  dates,
  images,
  links,
  internal,
  technologies,
  onClose,
}: Props) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith("es") ? "es" : "en";
  const [index, setIndex] = useState(0);
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const current = images[index];

  const step = useCallback(
    (delta: number) => {
      if (images.length < 2) return;
      setIndex((i) => (i + delta + images.length) % images.length);
    },
    [images.length]
  );

  // Read the latest handlers from refs so the mount effect below (focus, scroll lock) runs only once.
  const onCloseRef = useRef(onClose);
  const stepRef = useRef(step);
  useEffect(() => {
    onCloseRef.current = onClose;
    stepRef.current = step;
  });

  useEffect(() => {
    // Keep Tab and Shift+Tab cycling inside the dialog instead of reaching the page behind it.
    const trapFocus = (e: KeyboardEvent) => {
      const dialog = dialogRef.current;
      const focusables = dialog?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!dialog || !focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      const outside = !dialog.contains(active);
      if (e.shiftKey && (active === first || outside)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (active === last || outside)) {
        e.preventDefault();
        first.focus();
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
      else if (e.key === "ArrowRight") stepRef.current(1);
      else if (e.key === "ArrowLeft") stepRef.current(-1);
      else if (e.key === "Tab") trapFocus(e);
    };
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex w-full max-w-5xl max-h-[90vh] flex-col gap-8 overflow-y-auto rounded-xl border border-border bg-background p-6 shadow-lg sm:p-8 md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t("close")}
          className="absolute right-4 top-4 z-10 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="size-5" />
        </button>
        <div className="flex w-full shrink-0 flex-col gap-3 md:w-3/5">
          <div
            className={cn(
              "relative flex h-64 items-center justify-center overflow-hidden rounded-lg bg-muted sm:h-[440px]",
              current?.frame === "phone" ? "py-4" : "border border-border"
            )}
          >
            {current?.frame === "desktop" ? (
              <img
                src={current.src}
                alt={current.alt[lang]}
                className="h-full w-full object-cover object-top"
              />
            ) : current ? (
              <img
                src={current.src}
                alt={current.alt[lang]}
                className="h-full w-auto rounded-[14%/7%] object-contain"
              />
            ) : null}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label={t("previous")}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 shadow backdrop-blur hover:bg-background transition-colors"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label={t("next")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-1.5 shadow backdrop-blur hover:bg-background transition-colors"
                >
                  <ChevronRight className="size-4" />
                </button>
              </>
            )}
          </div>
          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {images.map((image, i) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`${t("screenshot")} ${i + 1}`}
                  aria-current={i === index}
                  className={cn(
                    "h-14 w-20 shrink-0 overflow-hidden rounded-md border bg-muted transition-all",
                    i === index
                      ? "border-foreground ring-2 ring-foreground/20"
                      : "border-border opacity-60 hover:opacity-100"
                  )}
                >
                  <img
                    src={image.src}
                    alt=""
                    className={cn(
                      "h-full w-full",
                      image.frame === "phone" ? "object-contain py-1" : "object-cover object-top"
                    )}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-3 min-w-0">
          <div className="flex items-center justify-between gap-2 pr-8 text-xs text-muted-foreground">
            <span className="font-medium uppercase tracking-wider">{category[lang]}</span>
            <span className="tabular-nums">{dates}</span>
          </div>
          {href && !internal ? (
            <Link
              id={titleId}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/title flex w-fit items-center gap-1 text-xl font-semibold hover:text-muted-foreground transition-colors"
            >
              {title}
              <ArrowUpRight className="size-4 opacity-0 -translate-x-1 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all duration-200" />
            </Link>
          ) : (
            <h3 id={titleId} className="text-xl font-semibold">
              {title}
            </h3>
          )}
          <p className="text-sm text-muted-foreground leading-relaxed">{description[lang]}</p>
          {highlights && highlights[lang].length > 0 && (
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium text-muted-foreground">{t("highlights")}</span>
              <ul className="flex flex-col gap-1.5 text-sm">
                {highlights[lang].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex flex-col gap-2 mt-auto pt-2">
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
          {internal ? (
            <Badge variant="outline" className="h-7 w-fit border border-border px-3 text-xs">
              {t("projectInternal")}
            </Badge>
          ) : (
            links &&
            links.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {links.map((link) => (
                  <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                    <Badge className="flex h-7 items-center gap-1.5 px-3 text-xs bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90">
                      {link.icon}
                      {t(LINK_LABEL_KEYS[link.type] ?? "projectTypeWebsite")}
                    </Badge>
                  </Link>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
