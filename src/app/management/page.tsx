'use client';

import React, { useState } from 'react';
import { managementProjects } from '@/data/managementProjects';
import { ManagementProject } from '@/types';
import SideDrawer from '@/components/ui/SideDrawer';
import { ArrowUpRight, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function ManagementPage() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ManagementProject | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Project & Program Management</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mt-2">
          Case studies covering cross-functional operations, portfolio governance, and process optimization.
        </p>
      </div>

      {/* Grid of Case Studies */}
      <div className="grid md:grid-cols-2 gap-8">
        {managementProjects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col justify-between border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-neutral-900 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <div>
              {/* Single Image Featured Display */}
              <div className="w-full h-64 overflow-hidden bg-neutral-900">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Details */}
              <div className="p-6 space-y-3">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  {project.category}
                </span>
                <h2 className="text-xl font-bold group-hover:text-emerald-500 transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Click to open Half-Page Drawer */}
            <div className="p-6 pt-0">
              <button
                onClick={() => setSelectedCaseStudy(project)}
                className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 bg-neutral-100 dark:bg-neutral-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 rounded-lg text-sm font-semibold transition"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Half Page Case Study Drawer */}
      <SideDrawer
        isOpen={Boolean(selectedCaseStudy)}
        onClose={() => setSelectedCaseStudy(null)}
        title={selectedCaseStudy?.title || ''}
        category={selectedCaseStudy?.category}
      >
        {selectedCaseStudy && (
          <div className="space-y-6">
            {/* Impact Metrics */}
            {selectedCaseStudy.metrics && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {selectedCaseStudy.metrics.map((m) => (
                  <div key={m.label} className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 bg-neutral-50 dark:bg-neutral-950 text-center">
                    <div className="text-lg md:text-xl font-bold text-emerald-600 dark:text-emerald-400">{m.value}</div>
                    <div className="text-xs text-neutral-500 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Challenge */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm font-semibold text-amber-600 dark:text-amber-400">
                <AlertCircle size={16} />
                <span>The Challenge</span>
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {selectedCaseStudy.challenge}
              </p>
            </div>

            {/* Methodology */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                <TrendingUp size={16} />
                <span>Execution & Governance</span>
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {selectedCaseStudy.methodology}
              </p>
            </div>

            {/* Results */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 size={16} />
                <span>Outcomes & Impact</span>
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {selectedCaseStudy.results}
              </p>
            </div>
          </div>
        )}
      </SideDrawer>
    </div>
  );
}