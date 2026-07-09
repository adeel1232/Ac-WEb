import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
      <motion.a
        href="https://wa.me/18005551234"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/40"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <MessageCircle className="h-6 w-6" />
      </motion.a>
      <motion.a
        href="tel:+18005551234"
        aria-label="Call us"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.55, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-xl shadow-sky-500/40"
      >
        <Phone className="h-6 w-6" />
      </motion.a>
    </div>
  );
}
