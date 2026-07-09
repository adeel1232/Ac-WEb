import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { img } from "../data/content";

const reviews = [
  { name: "Daniel Roberts", role: "Homeowner", avatar: img.avatar1, rating: 5, text: "ArcticAir installed our whole-home system in a single day. Clean, professional, and the house has never felt better. Highly recommended!" },
  { name: "Priya Sharma", role: "Office Manager", avatar: img.avatar2, rating: 5, text: "They handled our office HVAC upgrade flawlessly. The team was punctual, tidy, and the results speak for themselves. Cooling bills dropped too!" },
  { name: "Michael Chen", role: "Restaurant Owner", avatar: img.avatar3, rating: 5, text: "Emergency service saved us during peak summer. They arrived within the hour and had us back up and running. True professionals." },
  { name: "Arjun Mehta", role: "Property Developer", avatar: img.avatar4, rating: 5, text: "We've used ArcticAir across multiple projects. Consistent quality, fair pricing, and genuine parts every time. A partner we trust." },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const r = reviews[index];
  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  return (
    <Section id="testimonials" className="relative overflow-hidden bg-gradient-to-b from-white to-sky-50/60 dark:from-slate-950 dark:to-slate-900">
      <div className="pointer-events-none absolute -top-10 right-0 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl dark:bg-teal-500/10" />
      <SectionHeading
        eyebrow="Testimonials"
        title="What Our Clients Say"
        subtitle="Thousands of homes and businesses trust ArcticAir to keep them comfortable."
      />

      <div className="relative mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="glass relative rounded-[2rem] p-8 shadow-xl md:p-12"
          >
            <Quote className="absolute right-8 top-8 h-14 w-14 text-sky-100 dark:text-sky-500/20" />
            <div className="flex gap-1">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="relative mt-5 text-lg leading-relaxed text-gray-700 dark:text-gray-200">
              “{r.text}”
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img
                src={r.avatar}
                alt={r.name}
                loading="lazy"
                className="h-14 w-14 rounded-full object-cover ring-2 ring-sky-200"
              />
              <div>
                <p className="font-bold text-gray-900 dark:text-white">{r.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{r.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors hover:border-sky-400 hover:text-sky-600 dark:border-white/10 dark:bg-slate-800 dark:text-gray-200"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-7 bg-sky-500" : "w-2.5 bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors hover:border-sky-400 hover:text-sky-600 dark:border-white/10 dark:bg-slate-800 dark:text-gray-200"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}
