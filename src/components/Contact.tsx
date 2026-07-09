import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { fadeUp, viewportOnce } from "../utils/motion";

const info = [
  { icon: Phone, label: "Phone", value: "+966 59 445 4788", href: "tel:+966594454788" },
  { icon: Mail, label: "Email", value: "Info@smishehrani.com", href: "mailto:Info@smishehrani.com" },
  { icon: MapPin, label: "Address", value: "Al Khalij, Dammam 32425, Saudi Arabia" },
  { icon: Clock, label: "Working Hours", value: "Mon–Sat: 8:00 AM – 8:00 PM" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Section id="contact" className="bg-gradient-to-b from-sky-50/60 to-white dark:from-slate-900 dark:to-slate-950">
      <SectionHeading
        eyebrow="Contact Us"
        title="Get Your Free Quote Today"
        subtitle="Have a question or ready to book? Reach out — our friendly team responds within hours."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-2"
        >
          <div className="space-y-4">
            {info.map((i) => (
              <div
                key={i.label}
                className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white">
                  <i.icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{i.label}</p>
                  {i.href ? (
                    <a href={i.href} className="font-semibold text-gray-900 hover:text-sky-600 dark:text-white">
                      {i.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-gray-900 dark:text-white">{i.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-xl shadow-sky-500/5 sm:p-8 lg:col-span-3 dark:border-white/10 dark:bg-slate-900"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="John Doe" />
            <Field label="Phone" name="phone" type="tel" placeholder="+1 800 555 1234" />
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Service</label>
              <select
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-white/10 dark:bg-slate-800 dark:text-white"
              >
                <option value="">Select a service</option>
                <option>AC Installation</option>
                <option>AC Repair</option>
                <option>AC Maintenance</option>
                <option>Gas Refilling</option>
                <option>Commercial HVAC</option>
                <option>Emergency Service</option>
              </select>
            </div>
          </div>
          <div className="mt-5">
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              required
              rows={4}
              placeholder="Tell us how we can help..."
              className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-white/10 dark:bg-slate-800 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition-transform hover:scale-[1.02]"
          >
            {sent ? (
              <>
                <CheckCircle2 className="h-5 w-5" /> Message Sent!
              </>
            ) : (
              <>
                Send Message <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </motion.form>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 overflow-hidden rounded-[2rem] border border-gray-100 shadow-lg dark:border-white/10"
      >
        <iframe
          title="Our Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-74.02%2C40.70%2C-73.96%2C40.75&layer=mapnik"
          className="h-72 w-full"
          loading="lazy"
        />
      </motion.div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-white/10 dark:bg-slate-800 dark:text-white"
      />
    </div>
  );
}
