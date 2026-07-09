import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { img } from "../data/content";
import { zoomIn, stagger, viewportOnce } from "../utils/motion";

const projects = [
  { image: img.project1, title: "Luxury Villa Cooling", category: "Residential", span: "row-span-2" },
  { image: img.project2, title: "Corporate Office HVAC", category: "Commercial", span: "" },
  { image: img.project3, title: "Retail Complex", category: "Commercial", span: "" },
  { image: img.project4, title: "Modern Apartment", category: "Residential", span: "" },
  { image: img.project5, title: "Industrial Facility", category: "Industrial", span: "row-span-2" },
  { image: img.project6, title: "Boutique Hotel", category: "Hospitality", span: "" },
];

export default function Portfolio() {
  return (
    <Section id="projects" className="bg-white dark:bg-slate-950">
      <SectionHeading
        eyebrow="Our Projects"
        title="Recently Completed Work"
        subtitle="A glimpse of the spaces we've kept perfectly cool — from cozy homes to large-scale commercial builds."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid auto-rows-[220px] grid-cols-2 gap-5 lg:grid-cols-3"
      >
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={zoomIn}
            className={`group relative overflow-hidden rounded-2xl shadow-md ${p.span}`}
          >
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-blue-900/80 via-blue-900/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-300">
                {p.category}
              </span>
              <h3 className="mt-1 text-lg font-bold text-white">{p.title}</h3>
            </div>
            <span className="absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/90 text-sky-600 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <Maximize2 className="h-4 w-4" />
            </span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
