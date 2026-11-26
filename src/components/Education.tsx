"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-section">
        <SectionHeader eyebrow="05 — Education" title="Academic background" />

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card flex items-start gap-4"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="font-semibold">{e.degree}</h3>
                <p className="text-sm text-brand-600 dark:text-brand-400">{e.institution}</p>
                <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                  {e.period}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
