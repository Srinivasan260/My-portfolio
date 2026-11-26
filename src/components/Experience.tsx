"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-section">
        <SectionHeader
          eyebrow="03 — Experience"
          title="Where I've worked"
          description="3+ years across backend, full-stack, and real-time production systems."
        />

        <div className="relative">
          <div
            className="absolute left-4 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800 md:left-6"
            aria-hidden
          />

          <div className="space-y-10">
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative flex gap-4 md:gap-8"
              >
                <div className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-brand-500/40 bg-brand-500/10 text-brand-600 dark:text-brand-400 md:h-12 md:w-12">
                  <Briefcase size={16} />
                </div>

                <div className="card flex-1">
                  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-slate-500 sm:text-right dark:text-slate-400">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm leading-relaxed muted">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-brand-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
