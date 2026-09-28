'use client';

import React, { useState } from 'react';
import { engineeringProjects } from '@/data/engineeringProjects';
import { EngineeringProject } from '@/types';
import ImageCarousel from '@/components/ui/ImageCarousel';
import SideDrawer from '@/components/ui/SideDrawer';
import { ArrowUpRight, Cpu, Layers } from 'lucide-react';

export default function EngineeringPage() {
  const [selectedProject, setSelectedProject] = useState<EngineeringProject | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Engineering Projects</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mt-2">
          Hardware prototyping, embedded software, and precision mechanical assemblies.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid md:grid-cols-2 gap-8">
        {engineeringProjects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col justify-between border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-neutral-900 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            <div>
              {/* Carousel Component */}
              <ImageCarousel images={project.images} altTitle={project.title} />

              {/* Card Details */}
              <div className="p-6 space-y-3">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {project.category}
                </span>
                <h2 className="text-xl font-bold group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-md font-mono"
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
                onClick={() => setSelectedProject(project)}
                className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 bg-neutral-100 dark:bg-neutral-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 rounded-lg text-sm font-semibold transition"
              >
                <span>View Full Technical Specs</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Half Page Overview Drawer */}
      <SideDrawer
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
        category={selectedProject?.category}
      >
        {selectedProject && (
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-2">Overview</h3>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                {selectedProject.fullDescription}
              </p>
            </div>

            {/* Technical Specifications */}
            {selectedProject.technicalSpecs && (
              <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 bg-neutral-50 dark:bg-neutral-950">
                <div className="flex items-center space-x-2 text-sm font-semibold mb-3">
                  <Cpu size={16} className="text-blue-500" />
                  <span>Technical Specifications</span>
                </div>
                <div className="space-y-2">
                  {selectedProject.technicalSpecs.map((spec) => (
                    <div key={spec.label} className="flex justify-between text-xs border-b border-neutral-200 dark:border-neutral-800/60 pb-1.5">
                      <span className="text-neutral-500 font-medium">{spec.label}</span>
                      <span className="font-mono text-neutral-900 dark:text-neutral-200">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Deliverables */}
            {selectedProject.deliverables && (
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm font-semibold">
                  <Layers size={16} className="text-blue-500" />
                  <span>Key Deliverables</span>
                </div>
                <ul className="list-disc list-inside text-xs text-neutral-600 dark:text-neutral-400 space-y-1.5">
                  {selectedProject.deliverables.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </SideDrawer>
    </div>
  );
}