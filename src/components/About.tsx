"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-section">
        <SectionHeader eyebrow="01 — About" title="A bit about me" />

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-base leading-relaxed muted lg:col-span-3"
          >
            <p>{about.summary}</p>
            <p>{about.details}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4 lg:col-span-2"
          >
            {about.highlights.map((h) => (
              <div key={h.label} className="card flex flex-col gap-1">
                <span className="font-mono text-3xl font-bold text-brand-600 dark:text-brand-400">
                  {h.value}
                </span>
                <span className="text-sm muted">{h.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
