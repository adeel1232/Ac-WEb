import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Snowflake, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../utils/cn";
import logo from "../img/logo.png"; // apne folder structure ke hisaab se path change karein
import GoogleTranslate from "./GoogleTranslate";
const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass shadow-[0_8px_30px_rgba(2,132,199,0.08)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 md:h-20">
        <a href="#home" className="flex items-center gap-2.5">
           

<span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30 overflow-hidden">
  <img
    src={logo}
    alt="Logo"
    className="h-6 w-6 object-contain"
  />
</span>
          <span className="inline-flex flex-wrap items-center gap-x-2 text-lg font-black tracking-wider uppercase">
  <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
    Smishehrani
  </span>
  <span className="text-xs font-semibold tracking-widest text-sky-500 border-l border-slate-200 pl-2 dark:border-slate-700">
    Air Conditioning & Cooling Services
  </span>
</span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-sky-50 hover:text-sky-600 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-sky-400"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <GoogleTranslate />
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition-colors hover:border-sky-300 hover:text-sky-600 dark:border-white/10 dark:text-gray-300"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          <a
            href="tel:+18005551234"
            className="hidden h-10 items-center gap-2 rounded-xl border border-gray-200 px-4 text-sm font-semibold text-gray-700 transition-colors hover:border-sky-300 hover:text-sky-600 sm:flex dark:border-white/10 dark:text-gray-200"
          >
            <Phone className="h-4 w-4" /> Call
          </a>
          <a
            href="#contact"
            className="hidden h-10 items-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition-transform hover:scale-[1.03] md:flex"
          >
            Get Free Quote
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 xl:hidden dark:border-white/10 dark:text-gray-200"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-gray-100 bg-white xl:hidden dark:border-white/10 dark:bg-slate-900"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-sky-50 hover:text-sky-600 dark:text-gray-200 dark:hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Get Free Quote
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
