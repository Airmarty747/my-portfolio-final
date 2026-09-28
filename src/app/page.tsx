import Link from 'next/link';
import { ArrowRight, Wrench, Briefcase } from 'lucide-react';
import { engineeringProjects } from '@/data/engineeringProjects';
import { managementProjects } from '@/data/managementProjects';

export default function HomePage() {
  const featuredEng = engineeringProjects[0];
  const featuredMgmt = managementProjects[0];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
      {/* Hero Section */}
      <section className="space-y-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Bridging <span className="text-blue-600">Technical Rigor</span> with <span className="text-blue-500">Operational Leadership</span>.
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Mechanical Engineer & Project Success Manager specialized in embedded hardware, product lifecycle acceleration, and managing multi-disciplinary engineering initiatives.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/engineering"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition"
          >
            <span>Engineering Showcase</span>
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/management"
            className="inline-flex items-center space-x-2 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white px-5 py-2.5 rounded-lg font-medium transition"
          >
            <span>Program Case Studies</span>
          </Link>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <p className="text-neutral-500 text-sm">Key highlights from engineering and program delivery</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Engineering Featured Card */}
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-neutral-900/60 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase text-blue-600 dark:text-blue-400">
                <Wrench size={16} />
                <span>Featured Engineering Work</span>
              </div>
              <h3 className="text-xl font-bold">{featuredEng.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {featuredEng.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredEng.tags.slice(0, 3).map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/engineering"
              className="mt-6 inline-flex items-center space-x-1.5 text-sm font-semibold text-blue-600 hover:text-blue-500"
            >
              <span>Explore on Engineering Page</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Management Featured Card */}
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-neutral-900/60 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase text-emerald-600 dark:text-emerald-400">
                <Briefcase size={16} />
                <span>Featured Program Case Study</span>
              </div>
              <h3 className="text-xl font-bold">{featuredMgmt.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {featuredMgmt.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredMgmt.tags.slice(0, 3).map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/management"
              className="mt-6 inline-flex items-center space-x-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-500"
            >
              <span>Explore on Case Studies Page</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}