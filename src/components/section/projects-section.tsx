"use client";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { useTranslation } from "react-i18next";
import { TextAnimate } from "@/components/magicui/text-animate";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

// Pin the track and drive it with vertical scroll only where there is room for it
// and the visitor has not asked for less motion; everywhere else it is a native swipe.
const PIN_QUERY =
  "(min-width: 768px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)";

// Lines the first card up with the page column (max-w-2xl + px-6) while the track spans the viewport.
const GUTTER = "max(1.5rem, calc((100vw - 42rem) / 2 + 1.5rem))";

// A card is roughly 0.625 × its width (16:10 screenshot) plus ~200px of text. While pinned it has to
// fit above the fixed dock (pb-24) together with the counter, so short viewports get narrower cards.
const CARD_WIDTH =
  "w-[85vw] max-w-[34rem] md:w-[max(16rem,min(34rem,70vw,calc(160vh_-_640px)))]";

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}

const pad = (n: number) => String(n).padStart(2, "0");

function renderCard(project: (typeof DATA.projects)[number], eager = false) {
  return (
    <ProjectCard
      title={project.title}
      href={project.href}
      category={project.category}
      description={project.description}
      highlights={project.highlights}
      dates={project.dates}
      tags={project.technologies}
      images={project.images}
      links={project.links}
      internal={project.internal}
      eager={eager}
    />
  );
}

function PinnedTrack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [active, setActive] = useState(0);
  const distanceValue = useMotionValue(0);
  const cardStep = useRef(0);
  const count = DATA.projects.length;

  useEffect(() => {
    const track = trackRef.current;
    const stage = track?.parentElement;
    if (!track || !stage) return;
    const measure = () => {
      // The stage is 100vw wide (scrollbar included), the same box the track's gutters are computed in.
      const next = Math.max(0, track.scrollWidth - stage.clientWidth);
      const first = track.children[0] as HTMLElement | undefined;
      const second = track.children[1] as HTMLElement | undefined;
      cardStep.current = first && second ? second.offsetLeft - first.offsetLeft : 0;
      distanceValue.set(next);
      setDistance(next);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [distanceValue]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform([scrollYProgress, distanceValue], ([p, d]: number[]) => -p * d);

  // The card sitting at the column edge is the one the track has travelled to.
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const step = cardStep.current;
    const index =
      p >= 0.999 || !step
        ? Math.round(p * (count - 1))
        : Math.round((p * distanceValue.get()) / step);
    setActive(Math.min(count - 1, Math.max(0, index)));
  });

  // Tabbing to a card that is translated off-screen moves the page so the card slides into view.
  // Mouse presses also focus the card's button; those must not move the track under the pointer.
  const revealCard = (event: React.FocusEvent<HTMLDivElement>, index: number) => {
    const target = event.target as HTMLElement;
    if (!event.currentTarget.contains(target) || !target.matches(":focus-visible")) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!section || !track || !card || distance === 0) return;
    const rect = card.getBoundingClientRect();
    if (rect.left >= 0 && rect.right <= document.documentElement.clientWidth) return;
    const padLeft = parseFloat(getComputedStyle(track).paddingLeft);
    const progress = Math.min(1, Math.max(0, (card.offsetLeft - padLeft) / distance));
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: sectionTop + progress * distance });
  };

  return (
    <div
      ref={sectionRef}
      className="relative ml-[calc(50%-50vw)] w-screen"
      style={{ height: `calc(100vh + ${distance}px)` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center gap-8 overflow-clip pb-24">
        <motion.div
          ref={trackRef}
          style={{ x, paddingInline: GUTTER }}
          className="flex w-max gap-6"
        >
          {DATA.projects.map((project, index) => (
            <div
              key={project.title}
              className={`${CARD_WIDTH} shrink-0`}
              onFocusCapture={(event) => revealCard(event, index)}
            >
              {renderCard(project, true)}
            </div>
          ))}
        </motion.div>
        <div className="flex items-center gap-4" style={{ paddingInline: GUTTER }}>
          <span className="font-mono text-sm tabular-nums text-muted-foreground" aria-hidden>
            {pad(active + 1)} / {pad(count)}
          </span>
          <div className="relative h-px max-w-xs flex-1 overflow-hidden bg-border">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="absolute inset-0 origin-left bg-foreground"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SwipeTrack() {
  return (
    <div className="ml-[calc(50%-50vw)] w-screen">
      <div
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]"
        style={{ paddingInline: GUTTER, scrollPaddingInline: GUTTER }}
      >
        {DATA.projects.map((project) => (
          <div key={project.title} className={`${CARD_WIDTH} shrink-0 snap-start`}>
            {renderCard(project)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const { t } = useTranslation();
  const pinned = useMediaQuery(PIN_QUERY);

  if (DATA.projects.length === 0) return null;

  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1">
            <span className="text-background text-sm font-medium">
              <TextAnimate>{t("projectsLabel")}</TextAnimate>
            </span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            <TextAnimate>{t("projectsTitle")}</TextAnimate>
          </h2>
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
            <TextAnimate>{t("projectsDescription")}</TextAnimate>
          </p>
        </div>
      </div>
      {pinned ? <PinnedTrack /> : <SwipeTrack />}
    </div>
  );
}
