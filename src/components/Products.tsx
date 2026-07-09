import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { img } from "../data/content";
import { fadeUp, stagger, viewportOnce } from "../utils/motion";

const products = [
  { name: "Split AC", image: img.splitAc, price: "$499", specs: ["1.5 Ton capacity", "5-Star efficiency", "Anti-bacterial filter"] },
  { name: "Inverter AC", image: img.inverter, price: "$649", specs: ["Dual inverter", "Up to 60% savings", "Ultra-quiet operation"] },
  { name: "Cassette AC", image: img.cassette, price: "$1,199", specs: ["4-way airflow", "Ceiling mounted", "Ideal for offices"] },
  { name: "Floor Standing AC", image: img.floor, price: "$1,499", specs: ["3 Ton capacity", "Powerful throw", "Large halls & lobbies"] },
  { name: "VRF System", image: img.vrf, price: "Custom", specs: ["Multi-zone control", "Scalable design", "Energy optimized"] },
  { name: "Commercial HVAC", image: img.commercial, price: "Custom", specs: ["Turnkey design", "Central chilling", "Building-wide comfort"] },
];

export default function Products() {
  return (
    <Section id="products" className="bg-white dark:bg-slate-950">
      <SectionHeading
        eyebrow="Our Products"
        title="Premium AC Range"
        subtitle="Handpicked, high-performance cooling systems from the world's leading manufacturers."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
      >
        {products.map((p) => (
          <motion.div
            key={p.name}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-2xl hover:shadow-sky-500/10 dark:border-white/10 dark:bg-slate-900"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-sky-600 shadow">
                {p.name}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{p.name}</h3>
                <span className="text-lg font-extrabold text-teal-500">{p.price}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {p.specs.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Check className="h-4 w-4 text-sky-500" /> {s}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="group/btn mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-transform hover:scale-[1.02]"
              >
                View Details
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
