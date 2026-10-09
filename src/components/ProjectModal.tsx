import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, ArrowRight, BarChart, Layers, Target } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60 sticky top-0 z-20">
          <div>
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
              {project.category} · Case Study
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close case study modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Project Preview Image */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[16/9]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Key Metrics Grid */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <BarChart className="w-3.5 h-3.5 text-sky-400" />
              <span>Quantitative Impact Metrics</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl flex flex-col">
                  <span className="text-xs text-slate-400 mb-0.5">{m.label}</span>
                  <span className="text-base sm:text-lg font-bold text-sky-300 font-mono tabular-nums">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Problem Statement */}
          <div className="bg-slate-800/40 border border-slate-800/80 rounded-xl p-4">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-rose-400" />
              <span>Problem Statement & Business Need</span>
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          {/* Methodology */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-sky-400" />
              <span>Step-by-Step Analytical Methodology</span>
            </h4>
            <div className="space-y-2">
              {project.methodology.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="font-mono text-cyan-400 font-bold shrink-0 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Findings */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Key Analytical Findings</span>
            </h4>
            <div className="space-y-2">
              {project.findings.map((f, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Impact */}
          <div className="p-4 bg-sky-950/20 border border-sky-500/20 rounded-xl">
            <h4 className="text-xs font-semibold text-sky-300 uppercase tracking-wider mb-1">
              Business Value & Strategic Outcome
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              {project.businessImpact}
            </p>
          </div>

          {/* Tools Used (Clean unboxed text) */}
          <div className="pt-2">
            <span className="text-xs text-slate-400 font-medium">Tools & Techniques: </span>
            <span className="text-xs text-slate-300 font-mono">
              {project.tools.join(' · ')}
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
