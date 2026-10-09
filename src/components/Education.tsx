import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-transparent mt-3 rounded-full" />
        </div>

        {/* Education Highlight Card */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-sky-400 mb-1">
                <GraduationCap className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">Bachelor of Science</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {education.degree}
              </h3>
              <div className="text-base font-semibold text-cyan-300 mt-0.5">
                {education.institution}
              </div>
            </div>

            <div className="flex flex-col md:items-end text-xs text-slate-400 gap-1.5 shrink-0">
              <span className="inline-flex items-center gap-1.5 text-slate-300 font-mono">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                <span>{education.period}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{education.location}</span>
              </span>
              <span className="font-mono text-cyan-400/90 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60 mt-1">
                Roll No: {education.rollNo}
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-3xl">
            {education.overview}
          </p>

          {/* Curriculum & Key Coursework */}
          <div className="pt-6 border-t border-slate-800">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span>Core Mathematical & Statistical Coursework</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {education.courses.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-800/40 border border-slate-800 text-xs sm:text-sm text-slate-300"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="font-medium">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
