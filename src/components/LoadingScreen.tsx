import { motion } from "framer-motion";
import { Snowflake } from "lucide-react";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-slate-950"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-xl shadow-sky-500/30"
      >
        <Snowflake className="h-8 w-8" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-5 text-lg font-extrabold tracking-tight text-gray-900 dark:text-white"
      >
        Arctic<span className="text-sky-500">Air</span>
      </motion.p>
      <div className="mt-3 h-1 w-40 overflow-hidden rounded-full bg-gray-100 dark:bg-slate-800">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-sky-500 to-teal-500"
        />
      </div>
    </motion.div>
  );
}
