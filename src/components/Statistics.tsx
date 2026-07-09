import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarClock, Users, Wind, Smile } from "lucide-react";
import { useCountUp } from "../hooks/useCountUp";
import { stagger, fadeUp, viewportOnce } from "../utils/motion";

const stats = [
  { icon: CalendarClock, value: 10, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 5000, suffix: "+", label: "Happy Customers" },
  { icon: Wind, value: 8000, suffix: "+", label: "AC Installed" },
  { icon: Smile, value: 99, suffix: "%", label: "Satisfaction" },
];

function StatItem({ stat, start }: { stat: (typeof stats)[number]; start: boolean }) {
  const count = useCountUp(stat.value, 2000, start);
  return (
    <motion.div variants={fadeUp} className="text-center">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
        <stat.icon className="h-7 w-7" />
      </span>
      <p className="mt-4 text-4xl font-extrabold text-white md:text-5xl">
        {count.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="mt-1 text-sm font-medium text-sky-100">{stat.label}</p>
    </motion.div>
  );
}

export default function Statistics() {
  const [start, setStart] = useState(false);
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          onViewportEnter={() => setStart(true)}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-sky-500 via-blue-600 to-teal-500 px-6 py-14 shadow-2xl shadow-sky-500/20 md:px-12"
        >
          <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <StatItem key={s.label} stat={s} start={start} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
