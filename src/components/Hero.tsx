import { motion } from "framer-motion";
import { ArrowRight, Snowflake, Wind, ShieldCheck, Star } from "lucide-react";
import { img } from "../data/content";
import { fadeUp, stagger } from "../utils/motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-28 pb-16 md:pt-36 md:pb-24 dark:bg-slate-950"
    >
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/10" />
      <div className="pointer-events-none absolute top-40 -left-24 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-500/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-xs font-semibold text-sky-600 dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-400"
          >
            <Snowflake className="h-4 w-4" /> Trusted Cooling Experts Since 2015
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white"
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-teal-500 bg-clip-text text-transparent">
              Air Conditioning
            </span>{" "}
            Solutions
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-gray-500 dark:text-gray-400"
          >
            We provide AC installation, maintenance, repair, servicing, and cooling
            solutions for homes and businesses — engineered for comfort, built to last.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-sky-500/30 transition-transform hover:scale-[1.04]"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 transition-colors hover:border-sky-300 hover:text-sky-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-100"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-teal-500" /> Certified Engineers
            </div>
            <div className="flex items-center gap-2">
              <Wind className="h-5 w-5 text-sky-500" /> Energy Efficient
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-gray-900 dark:text-white">4.9</span> (2.4k reviews)
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="animate-float">
            <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-2xl shadow-sky-500/10 dark:border-white/10">
              <img
                src={img.hero}
                alt="Modern air conditioned living space"
                loading="eager"
                className="h-[420px] w-full object-cover md:h-[500px]"
              />
            </div>
          </div>

          {/* Floating stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass animate-float-slow absolute -left-4 top-10 rounded-2xl p-4 shadow-lg md:-left-8"
          >
            <p className="text-2xl font-extrabold text-sky-600">10+</p>
            <p className="text-xs font-medium text-gray-600 dark:text-gray-300">Years Experience</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="glass absolute -right-3 bottom-8 rounded-2xl p-4 shadow-lg md:-right-6"
          >
            <p className="text-2xl font-extrabold text-teal-500">5000+</p>
            <p className="text-xs font-medium text-gray-600 dark:text-gray-300">Happy Customers</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
