"use client";

import { motion } from "framer-motion";
import { Folder } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-50/50 dark:bg-slate-900/30">
      <div className="container-section">
        <SectionHeader
          eyebrow="04 — Projects"
          title="Selected work"
          description="Backend systems and full-stack features I've shipped to production."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card group flex h-full flex-col"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                <Folder size={18} />
              </div>

              <h3 className="mb-1 text-lg font-semibold">{p.name}</h3>
              <p className="mb-3 font-mono text-xs text-slate-500 dark:text-slate-400">
                {p.domain}
              </p>
              <p className="mb-4 flex-1 text-sm leading-relaxed muted">{p.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
