import React from 'react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, TrendingUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
            <span>Professional Exposure</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-transparent mt-3 rounded-full" />
        </div>

        {/* Experience Timeline Card */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 relative">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-sky-400 mb-1">
                <Briefcase className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">Industry Internship</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {experience.role}
              </h3>
              <div className="flex items-center gap-2 text-base font-semibold text-cyan-300 mt-0.5">
                <Building2 className="w-4 h-4 text-cyan-400" />
                <span>{experience.company}</span>
              </div>
            </div>

            <div className="flex flex-col md:items-end text-xs text-slate-400 gap-1.5 shrink-0">
              <span className="inline-flex items-center gap-1.5 text-slate-300 font-mono">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                <span>{experience.period}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{experience.location}</span>
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-3xl">
            {experience.overview}
          </p>

          {/* Key Deliverables & Responsibilities */}
          <div className="pt-6 border-t border-slate-800">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-sky-400" />
              <span>Core Responsibilities & Analytical Contributions</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experience.bulletPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-800 text-xs sm:text-sm text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
