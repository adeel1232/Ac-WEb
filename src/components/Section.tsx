import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../utils/cn";
import { fadeUp, viewportOnce } from "../utils/motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, center = true }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn("mb-12 max-w-2xl", center && "mx-auto text-center")}
    >
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-sky-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-[2.6rem] dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-gray-500 md:text-lg dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 md:py-28", className)}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
