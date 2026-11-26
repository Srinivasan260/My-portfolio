"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 flex flex-col gap-2"
    >
      <span className="font-mono text-sm text-brand-600 dark:text-brand-400">{eyebrow}</span>
      <h2 className="heading-lg">{title}</h2>
      {description && <p className="max-w-2xl muted">{description}</p>}
    </motion.div>
  );
}
