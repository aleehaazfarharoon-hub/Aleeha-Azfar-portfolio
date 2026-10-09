import React, { useState } from 'react';
import { ArrowUpRight, BarChart2, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'Banking' | 'Statistics' | 'E-Commerce'>('all');
  const { projects } = PORTFOLIO_DATA;

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
              <span>Applied Case Studies & Analytics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-transparent mt-3 rounded-full" />
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === 'all'
                  ? 'bg-sky-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Work ({projects.length})
            </button>
            <button
              onClick={() => setActiveCategory('Banking')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === 'Banking'
                  ? 'bg-sky-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Banking
            </button>
            <button
              onClick={() => setActiveCategory('Statistics')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === 'Statistics'
                  ? 'bg-sky-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Statistics
            </button>
            <button
              onClick={() => setActiveCategory('E-Commerce')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === 'E-Commerce'
                  ? 'bg-sky-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              E-Commerce
            </button>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg shadow-black/20"
            >
              {/* Media Preview Container */}
              <div 
                className="relative aspect-[16/9] overflow-hidden bg-slate-950 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Clean unboxed category overlay tag */}
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm border border-slate-800 px-2.5 py-1 rounded text-[11px] font-medium text-sky-400">
                  {project.category}
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed tools list */}
                  <div className="text-[11px] text-slate-400 font-mono mb-2 truncate">
                    {project.tools.slice(0, 3).join(' · ')}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors cursor-pointer mb-1 tracking-tight"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 mb-3">
                    {project.subtitle}
                  </p>

                  {/* Summary */}
                  <p className="text-sm text-slate-300/90 leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>

                {/* Key Metric Snapshot */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="bg-slate-950/40 p-2 rounded-lg border border-slate-800/60">
                        <span className="block text-[10px] text-slate-400 truncate">{m.label}</span>
                        <span className="block text-xs font-bold text-slate-200 font-mono tabular-nums">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Modal Trigger Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-sky-400 hover:text-slate-950 bg-sky-500/10 hover:bg-sky-400 border border-sky-500/20 hover:border-transparent rounded-lg transition-all cursor-pointer"
                  >
                    <span>View Full Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
