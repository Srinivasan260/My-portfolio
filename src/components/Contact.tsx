"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { personal } from "@/data/portfolio";

export default function Contact() {
  const items = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "n-srini-vasan-0a627b211",
      href: personal.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Srinivasan260",
      href: personal.github,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-slate-50/50 dark:bg-slate-900/30">
      <div className="container-section">
        <SectionHeader
          eyebrow="06 — Contact"
          title="Let's build something together"
          description="I'm currently open to backend / full-stack opportunities in Chennai, Bengaluru, or Hyderabad. Let's talk."
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="card flex flex-col justify-between lg:col-span-2"
          >
            <div>
              <h3 className="heading-md mb-2">Ready to chat?</h3>
              <p className="mb-6 muted">
                The fastest way to reach me is email. I usually reply within a day.
              </p>
              <div className="flex items-center gap-1.5 text-sm muted">
                <MapPin size={14} /> {personal.location}
              </div>
            </div>
            <a href={`mailto:${personal.email}`} className="btn-primary mt-6 w-full">
              Send me an email <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2 lg:col-span-3"
          >
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="card group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white dark:text-brand-400">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                    <p className="truncate text-sm font-medium">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
