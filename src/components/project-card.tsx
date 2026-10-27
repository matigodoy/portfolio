/* eslint-disable @next/next/no-img-element */
"use client";

import { ProjectModal } from "@/components/project-modal";
import { Badge } from "@/components/ui/badge";
import type { Localized, ProjectImage, ProjectLink } from "@/data/resume";
import { LINK_LABEL_KEYS } from "@/lib/projects";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  href?: string;
  category: Localized;
  description: Localized;
  highlights?: { en: readonly string[]; es: readonly string[] };
  dates: string;
  tags: readonly string[];
  images: readonly ProjectImage[];
  links?: readonly ProjectLink[];
  internal?: boolean;
  // The pinned track clips off-screen cards, which hides them from the lazy-loading lookahead.
  eager?: boolean;
  className?: string;
}

export function ProjectCard({
  title,
  href,
  category,
  description,
  highlights,
  dates,
  tags,
  images,
  links,
  internal,
  eager,
  className,
}: Props) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const loading = eager ? "eager" : "lazy";
  const lang = i18n.language.startsWith("es") ? "es" : "en";
  const desktopShot = images.find((image) => image.frame === "desktop");
  const phoneShot = images.find((image) => image.frame === "phone");

  return (
    <>
      <article
        className={cn(
          "group relative flex h-full flex-col gap-4 rounded-xl border border-border bg-background p-3 transition-shadow duration-200 hover:ring-2 hover:ring-muted",
          className
        )}
      >
        <div className="relative aspect-[16/10] w-full">
          {desktopShot ? (
            <div className="h-full overflow-hidden rounded-lg border border-border bg-muted">
              <img
                src={desktopShot.src}
                alt={desktopShot.alt[lang]}
                loading={loading}
                draggable={false}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          ) : (
            <div className="h-full rounded-lg bg-muted" />
          )}
          {phoneShot && (
            <img
              src={phoneShot.src}
              alt={phoneShot.alt[lang]}
              loading={loading}
              draggable={false}
              className="absolute -bottom-3 right-3 h-[82%] w-auto rounded-[14%/7%] drop-shadow-xl transition-transform duration-500 group-hover:-translate-y-1"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col gap-2 px-1 pb-1">
          <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
            <span className="font-medium uppercase tracking-wider">{category[lang]}</span>
            <span className="tabular-nums">{dates}</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold leading-tight">{title}</h3>
            <div className="relative z-20 flex flex-wrap justify-end gap-1.5">
              {internal ? (
                <Badge variant="outline" className="h-6 border border-border px-2 text-[11px]">
                  {t("projectInternal")}
                </Badge>
              ) : (
                links?.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge className="flex items-center gap-1.5 bg-black text-xs text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90">
                      {link.icon}
                      {t(LINK_LABEL_KEYS[link.type] ?? "projectTypeWebsite")}
                    </Badge>
                  </Link>
                ))
              )}
            </div>
          </div>
          <p className="line-clamp-2 text-sm text-muted-foreground">{description[lang]}</p>
          <div className="mt-auto flex flex-wrap items-center gap-1 pt-1">
            {tags.slice(0, 4).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="h-6 w-fit border border-border px-2 text-[11px] font-medium"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 4 && (
              <span className="px-1 text-[11px] text-muted-foreground">+{tags.length - 4}</span>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`${t("showMore")}: ${title}`}
          className="absolute inset-0 z-10 cursor-pointer rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </article>
      {open && (
        <ProjectModal
          title={title}
          href={href}
          category={category}
          description={description}
          highlights={highlights}
          dates={dates}
          images={images}
          links={links}
          internal={internal}
          technologies={tags}
          onClose={close}
        />
      )}
    </>
  );
}
