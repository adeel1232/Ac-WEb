import { useState, type FormEvent } from "react";
import { Snowflake, Send, MapPin, Phone, Mail, Share2, AtSign, Rss, Globe } from "lucide-react";

const quickLinks = ["Home", "About", "Services", "Products", "Projects", "Contact"];
const serviceLinks = ["AC Installation", "AC Repair", "Maintenance", "Gas Refilling", "Commercial HVAC", "Emergency Service"];
const socials = [Share2, AtSign, Rss, Globe];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white">
                <Snowflake className="h-5 w-5" />
              </span>
              <span className="text-lg font-extrabold text-white">
                Arctic<span className="text-sky-500">Air</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Premium air conditioning solutions for homes and businesses. Keeping you
              comfortable with certified experts, genuine parts, and 24/7 support.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-gray-300 transition-colors hover:bg-sky-500 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-gray-400 transition-colors hover:text-sky-400">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <a href="#services" className="text-gray-400 transition-colors hover:text-sky-400">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Newsletter</h4>
            <p className="mt-4 text-sm text-gray-400">Get cooling tips & exclusive offers.</p>
            <form onSubmit={submit} className="mt-4 flex overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-500"
              />
              <button className="flex items-center justify-center bg-gradient-to-r from-sky-500 to-blue-600 px-4 text-white">
                <Send className="h-4 w-4" />
              </button>
            </form>
            {subscribed && <p className="mt-2 text-xs text-teal-400">Thanks for subscribing!</p>}

            <ul className="mt-6 space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-sky-500" /> +966 59 445 4788</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-sky-500" /> Info@smishehrani.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-sky-500" /> Al Khalij, Dammam 32425, Saudi Arabia</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="text-center text-sm text-gray-500">
          Copyright © 2026 SMISHEHRANI. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
