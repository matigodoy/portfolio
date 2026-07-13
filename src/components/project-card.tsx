/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { ProjectModal } from "@/components/project-modal";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: { en: string; es: string };
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          "group flex flex-col h-full border border-border rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-muted transition-all duration-200",
          className
        )}
        onClick={() => setOpen(true)}
      >
        <div className="relative shrink-0">
          {image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="w-full h-48 bg-muted" />
          )}
          {links && links.length > 0 && (
            <div className="absolute top-2 right-2 flex flex-wrap gap-2">
              {links.map((link, idx) => (
                <Link
                  href={link.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Badge
                    className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                    variant="default"
                  >
                    {link.icon}
                    {t(`projectType${link.type === "webapp" ? "Webapp" : "Website"}`)}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="text-sm font-medium text-white">{t("showMore")}</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold">{title}</h3>
        </div>
      </div>
      {open && (
        <ProjectModal
          title={title}
          href={href}
          description={description}
          image={image}
          video={video}
          technologies={tags}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
