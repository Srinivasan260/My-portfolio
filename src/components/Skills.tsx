"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-50/50 dark:bg-slate-900/30">
      <div className="container-section">
        <SectionHeader
          eyebrow="02 — Skills"
          title="Technologies I work with"
          description="Backend-first, with hands-on experience across the full stack and production infrastructure."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span key={item.name} className="chip">
                      <Icon className="text-brand-600 dark:text-brand-400" size={14} />
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
