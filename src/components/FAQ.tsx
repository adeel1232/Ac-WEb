import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { fadeUp, stagger, viewportOnce } from "../utils/motion";

const faqs = [
  { q: "How often should I service my air conditioner?", a: "We recommend a professional service at least once a year — ideally before summer. Regular maintenance improves efficiency, prevents breakdowns, and extends your unit's lifespan." },
  { q: "Do you offer emergency AC repair?", a: "Yes! Our 24/7 emergency service means a certified engineer can reach you fast, often the same day, to get your cooling back up and running." },
  { q: "What brands do you install and repair?", a: "We work with all major AC brands and models, including Daikin, Mitsubishi, LG, Samsung, Carrier, and more — using only genuine parts." },
  { q: "How long does a typical installation take?", a: "A standard split AC installation usually takes 3–5 hours. Larger commercial or VRF systems are scheduled based on scope after an on-site inspection." },
  { q: "Do you provide warranties?", a: "Absolutely. All installations and repairs come with a workmanship guarantee, plus full manufacturer warranties on new equipment." },
  { q: "How can I get a free quote?", a: "Simply fill out our contact form or call us. We'll schedule a free assessment and provide a transparent, no-obligation quote." },
];

function Item({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <motion.div
      variants={fadeUp}
      className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900"
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-gray-900 dark:text-white">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600 dark:bg-sky-500/10"
        >
          <Plus className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" className="bg-white dark:bg-slate-950">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before booking your service."
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto grid max-w-3xl gap-4"
      >
        {faqs.map((f, i) => (
          <Item key={f.q} q={f.q} a={f.a} open={open === i} onClick={() => setOpen(open === i ? null : i)} />
        ))}
      </motion.div>
    </Section>
  );
}
