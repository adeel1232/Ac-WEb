import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Moon,
  Sun,
  ChevronRight,
} from "lucide-react";


import { useTheme } from "../context/ThemeContext";
import { cn } from "../utils/cn";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      links.forEach((item) => {
        const section = document.querySelector(item.href);

        if (!section) return;

        const top = (section as HTMLElement).offsetTop - 120;
        const bottom = top + (section as HTMLElement).offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(item.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: .5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-white/90 shadow-xl dark:bg-slate-900/90"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

        {/* Logo */}

        <a
          href="#home"
          className="flex items-center gap-3"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg">

            

          </div>

          <div>

            <h2 className="text-xl font-black uppercase tracking-wider text-slate-900 dark:text-white">
              Smishehrani
            </h2>

            <p className="text-[11px] uppercase tracking-[4px] text-sky-500">
              Air Conditioning & Cooling
            </p>

          </div>

        </a>

        {/* Desktop Menu */}

        <ul className="hidden items-center gap-2 xl:flex">

          {links.map((item) => (

            <li key={item.href}>

              <a
                href={item.href}
                className={cn(
                  "rounded-xl px-4 py-2 text-sm font-semibold transition",

                  active === item.href
                    ? "bg-sky-500 text-white"
                    : "text-slate-700 hover:bg-sky-100 hover:text-sky-600 dark:text-slate-300 dark:hover:bg-slate-800"
                )}
              >
                {item.label}
              </a>

            </li>

          ))}

        </ul>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          <button
            onClick={toggle}
            className="flex h-11 w-11 items-center justify-center rounded-xl border dark:border-slate-700"
          >
            {theme === "light"
              ? <Moon size={18}/>
              : <Sun size={18}/>}
          </button>

          <a
            href="tel:+923001234567"
            className="hidden lg:flex items-center gap-2 rounded-xl border px-4 py-3 font-semibold hover:border-sky-500 hover:text-sky-500"
          >
            <Phone size={18}/>
            Call Now
          </a>

          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg"
          >
            Free Quote

            <ChevronRight size={18}/>
          </a>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden"
          >
            {open ? <X/> : <Menu/>}
          </button>

        </div>

      </div>

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity:0,height:0 }}
            animate={{ opacity:1,height:"auto" }}
            exit={{ opacity:0,height:0 }}
            className="overflow-hidden border-t bg-white dark:bg-slate-900 xl:hidden"
          >

            <div className="space-y-2 p-5">

              {links.map((item)=>(

                <a
                  key={item.href}
                  href={item.href}
                  onClick={()=>setOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 font-medium",

                    active===item.href
                    ?"bg-sky-500 text-white"
                    :"hover:bg-slate-100 dark:hover:bg-slate-800"
                  )}
                >
                  {item.label}
                </a>

              ))}

              <a
                href="#contact"
                className="mt-4 flex justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 py-3 font-bold text-white"
              >
                Get Free Quote
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>
  );
}