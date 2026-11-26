"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personal } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 hero-grid" aria-hidden />
      <div className="container-section relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-6"
        >
          <span className="chip">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Available for new opportunities
          </span>

          <div>
            <p className="mb-3 font-mono text-sm text-brand-600 dark:text-brand-400">
              Hi, I&apos;m
            </p>
            <h1 className="heading-xl">
              {personal.name}
            </h1>
            <p className="mt-4 text-xl font-semibold text-slate-700 sm:text-2xl dark:text-slate-300">
              {personal.title}{" "}
              <span className="text-slate-400 dark:text-slate-500">—</span>{" "}
              <span className="font-mono text-base text-brand-600 dark:text-brand-400">
                {personal.subtitle}
              </span>
            </p>
          </div>

          <p className="max-w-2xl text-lg muted">{personal.tagline}</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} /> {personal.location}
            </span>
            <span>{personal.relocation}</span>
          </div>

          <div className="mt-2 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Get in touch <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <a
              aria-label="Email"
              href={`mailto:${personal.email}`}
              className="rounded-xl border border-slate-200 p-2.5 text-slate-700 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-brand-400"
            >
              <Mail size={18} />
            </a>
            <a
              aria-label="GitHub"
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 p-2.5 text-slate-700 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-brand-400"
            >
              <Github size={18} />
            </a>
            <a
              aria-label="LinkedIn"
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-200 p-2.5 text-slate-700 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-brand-400"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
