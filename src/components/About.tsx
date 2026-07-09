import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Smile, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { img } from "../data/content";
import { fadeUp, stagger, viewportOnce } from "../utils/motion";

const cards = [
  { icon: Target, title: "Our Mission", text: "Deliver reliable, energy-efficient cooling solutions that improve comfort and quality of life.", color: "text-sky-500 bg-sky-50 dark:bg-sky-500/10" },
  { icon: Eye, title: "Our Vision", text: "To become the most trusted HVAC brand, setting the benchmark for service excellence.", color: "text-blue-600 bg-blue-50 dark:bg-blue-500/10" },
  { icon: Award, title: "10+ Years", text: "A decade of proven expertise across thousands of residential & commercial projects.", color: "text-teal-500 bg-teal-50 dark:bg-teal-500/10" },
  { icon: Users, title: "Expert Team", text: "Factory-trained, certified engineers dedicated to precision and professional care.", color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-500/10" },
];

const points = [
  "Licensed & fully insured HVAC professionals",
  "Transparent pricing with no hidden charges",
  "Genuine parts and manufacturer warranties",
  "Same-day service and 24/7 emergency support",
];

export default function About() {
  return (
    <Section id="about" className="bg-white dark:bg-slate-950">
      <SectionHeading
        eyebrow="About Us"
        title="Cooling Comfort You Can Rely On"
        subtitle="ArcticAir is a full-service air conditioning company committed to keeping your spaces perfectly comfortable, all year round."
      />

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-sky-500/10">
            <img
              src={img.tech}
              alt="AC technician at work"
              loading="lazy"
              className="h-[420px] w-full object-cover"
            />
          </div>
          <div className="glass absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl p-4 shadow-lg">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white">
              <Smile className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xl font-extrabold text-gray-900 dark:text-white">99%</p>
              <p className="text-xs text-gray-600 dark:text-gray-300">Customer Satisfaction</p>
            </div>
          </div>
        </motion.div>

        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="text-lg leading-relaxed text-gray-600 dark:text-gray-300"
          >
            From single-room installations to complex commercial HVAC systems, our team
            brings craftsmanship, honesty, and cutting-edge technology to every job.
            We treat every home and business like our own.
          </motion.p>

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-6 space-y-3"
          >
            {points.map((p) => (
              <motion.li key={p} variants={fadeUp} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                <span>{p}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {cards.map((c) => (
          <motion.div
            key={c.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-sky-500/5 dark:border-white/10 dark:bg-slate-900"
          >
            <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.color}`}>
              <c.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{c.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
