import { motion } from "framer-motion";
import {
  Wrench,
  Hammer,
  Settings,
  Fuel,
  FileCheck,
  Building2,
  Wind,
  Siren,
  ArrowRight,
} from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { fadeUp, stagger, viewportOnce } from "../utils/motion";

const services = [
  { icon: Hammer, title: "AC Installation", desc: "Precise, code-compliant installation for split, cassette & central systems." },
  { icon: Wrench, title: "AC Repair", desc: "Fast diagnostics and lasting repairs for any brand or model." },
  { icon: Settings, title: "AC Maintenance", desc: "Preventive tune-ups that boost efficiency and extend lifespan." },
  { icon: Fuel, title: "Gas Refilling", desc: "Safe refrigerant top-ups with leak detection and testing." },
  { icon: FileCheck, title: "Annual Contract", desc: "Hassle-free AMC plans with scheduled service and priority support." },
  { icon: Building2, title: "Commercial HVAC", desc: "End-to-end HVAC design & delivery for offices and industry." },
  { icon: Wind, title: "Duct Cleaning", desc: "Deep duct sanitation for cleaner air and better airflow." },
  { icon: Siren, title: "Emergency Service", desc: "24/7 rapid response when your cooling can't wait." },
];

export default function Services() {
  return (
    <Section id="services" className="bg-gradient-to-b from-sky-50/60 to-white dark:from-slate-900 dark:to-slate-950">
      <SectionHeading
        eyebrow="Our Services"
        title="Complete Cooling Solutions"
        subtitle="Everything you need to install, maintain, and optimize your air conditioning — under one trusted roof."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-2xl hover:shadow-sky-500/10 dark:border-white/10 dark:bg-slate-900"
          >
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-sky-50 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-sky-500/10" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30 transition-transform group-hover:scale-110">
              <s.icon className="h-7 w-7" />
            </span>
            <h3 className="relative mt-5 text-lg font-bold text-gray-900 dark:text-white">{s.title}</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{s.desc}</p>
            <a
              href="#contact"
              className="relative mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-600 transition-colors hover:text-blue-700 dark:text-sky-400"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
