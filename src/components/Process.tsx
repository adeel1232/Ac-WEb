import { motion } from "framer-motion";
import { PhoneCall, Search, Wrench, LifeBuoy } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { fadeUp, stagger, viewportOnce } from "../utils/motion";

const steps = [
  { icon: PhoneCall, title: "Request", desc: "Reach out for a free quote and consultation." },
  { icon: Search, title: "Inspection", desc: "We assess your space and recommend the ideal system." },
  { icon: Wrench, title: "Installation", desc: "Certified engineers install with precision and care." },
  { icon: LifeBuoy, title: "Support", desc: "Ongoing maintenance and 24/7 assistance." },
];

export default function Process() {
  return (
    <Section id="process" className="bg-gradient-to-b from-sky-50/60 to-white dark:from-slate-900 dark:to-slate-950">
      <SectionHeading
        eyebrow="How It Works"
        title="Our Simple 4-Step Process"
        subtitle="From first call to lasting comfort — a smooth, transparent journey every step of the way."
      />

      <div className="relative">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute left-0 top-[52px] hidden h-0.5 w-full origin-left bg-gradient-to-r from-sky-400 via-blue-500 to-teal-400 lg:block"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((s, i) => (
            <motion.div key={s.title} variants={fadeUp} className="text-center">
              <div className="relative mx-auto flex h-[104px] w-[104px] items-center justify-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-xl shadow-sky-500/30 dark:border-slate-900">
                  <s.icon className="h-8 w-8" />
                </span>
                <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white shadow-lg">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-gray-500 dark:text-gray-400">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
