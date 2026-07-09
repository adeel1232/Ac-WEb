import { motion } from "framer-motion";
import {
  BadgeCheck,
  Wallet,
  PackageCheck,
  Zap,
  ShieldCheck,
  Headphones,
  Cpu,
  ThumbsUp,
} from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { fadeUp, stagger, viewportOnce } from "../utils/motion";

const features = [
  { icon: BadgeCheck, title: "Certified Engineers", desc: "Factory-trained, licensed professionals." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Fair, transparent quotes every time." },
  { icon: PackageCheck, title: "Genuine Parts", desc: "Only authentic manufacturer components." },
  { icon: Zap, title: "Fast Response", desc: "Same-day service across the city." },
  { icon: ShieldCheck, title: "Warranty", desc: "Guaranteed workmanship & coverage." },
  { icon: Headphones, title: "24/7 Support", desc: "We're here whenever you need us." },
  { icon: Cpu, title: "Modern Equipment", desc: "Latest tools & diagnostic tech." },
  { icon: ThumbsUp, title: "Customer First", desc: "99% satisfaction, guaranteed." },
];

export default function WhyChooseUs() {
  return (
    <Section id="why" className="bg-gradient-to-b from-white to-sky-50/60 dark:from-slate-950 dark:to-slate-900">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="The ArcticAir Advantage"
        subtitle="We combine technical excellence with genuine care to deliver an experience you'll want to recommend."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={fadeUp}
            whileHover={{ scale: 1.04 }}
            className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-xl hover:shadow-teal-500/10 dark:border-white/10 dark:bg-slate-900"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-sky-500 text-white shadow-lg shadow-teal-500/30">
              <f.icon className="h-7 w-7" />
            </span>
            <h3 className="mt-4 text-base font-bold text-gray-900 dark:text-white">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
