'use client';

import { Mail, ExternalLink, Heart } from 'lucide-react';

// Inline SVGs for brand icons (Github & LinkedIn)
function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function AboutPage() {
  const hobbies = [
    { 
      title: '3D Printing & Model Fabrication', 
      desc: 'Precision FDM printing and miniature sculpting.', 
      img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      title: 'Board Game Prototyping', 
      desc: 'Game design, custom cards, and asset workflows.', 
      img: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      title: 'Family Time & Outdoors', 
      desc: 'Exploring trails and spending quality time with family.', 
      img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80' 
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-14">
      {/* Bio & Social Header */}
      <section className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">About Me</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Hello! I specialize in connecting mechanical engineering fundamentals with agile program management. 
          Whether developing custom firmware routines for microcontrollers or aligning cross-functional teams around key milestones, I focus on delivering tangible, high-impact results.
        </p>

        {/* Portfolio & Social Link Badges */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-neutral-900 text-white dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-lg text-sm font-semibold transition"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
            <ExternalLink size={14} className="text-neutral-400" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn Profile</span>
            <ExternalLink size={14} className="text-blue-200" />
          </a>

          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center space-x-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg text-sm font-semibold transition"
          >
            <Mail size={18} />
            <span>Get in Touch</span>
          </a>
        </div>
      </section>

      {/* Hobbies & Family Gallery */}
      <section className="space-y-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center space-x-2">
          <Heart size={20} className="text-rose-500" />
          <h2 className="text-2xl font-bold tracking-tight">Life Beyond Work</h2>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          When I am not configuring hardware or managing project schedules, you can usually find me prototyping tabletop games, tinkering with 3D prints, or spending time with family.
        </p>

        <div className="grid md:grid-cols-3 gap-6 pt-2">
          {hobbies.map((item, idx) => (
            <div key={idx} className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-neutral-900">
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 space-y-1.5">
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}