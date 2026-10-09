import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Github, GraduationCap, Briefcase, FileSpreadsheet } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { profile, education, experience, skills, projects } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white">
      <div 
        className="fixed inset-0 print:hidden" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-4xl bg-slate-900 print:bg-white text-slate-100 print:text-black border border-slate-700/80 print:border-none rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto">
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80 print:hidden sticky top-0 z-20">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
            Executive Curriculum Vitae Summary
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-sky-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Container */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6 font-sans">
          {/* Header */}
          <div className="border-b border-slate-800 print:border-slate-300 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight">
              {profile.name}
            </h1>
            <p className="text-sm font-semibold text-sky-400 print:text-sky-800 mt-1">
              Mathematics Student at BZU · Aspiring Data Analyst
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 print:text-slate-600 mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span>{profile.location}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-slate-500" />
                <span>{profile.email}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-slate-500" />
                <span>{profile.phone}</span>
              </span>
              <span>·</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-sky-400 print:text-blue-700 underline">
                LinkedIn Profile
              </a>
              <span>·</span>
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-sky-400 print:text-blue-700 underline">
                GitHub (AleehaAzfar)
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 print:text-slate-700 mb-2">
              Professional Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 print:text-slate-700 mb-2">
              Education
            </h2>
            <div className="bg-slate-950/40 print:bg-slate-50 p-3.5 rounded-xl border border-slate-800 print:border-slate-200">
              <div className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <h3 className="font-bold text-white print:text-black">{education.degree}</h3>
                  <p className="text-cyan-300 print:text-slate-700">{education.institution} · Roll No. {education.rollNo}</p>
                </div>
                <span className="text-xs text-slate-400 print:text-slate-500 font-mono">{education.period}</span>
              </div>
              <p className="text-xs text-slate-300 print:text-slate-700 mt-2 leading-relaxed">
                {education.overview}
              </p>
              <div className="mt-2 text-xs text-slate-400 print:text-slate-600">
                <strong>Key Coursework:</strong> {education.courses.join(', ')}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 print:text-slate-700 mb-2">
              Industry Experience
            </h2>
            <div className="bg-slate-950/40 print:bg-slate-50 p-3.5 rounded-xl border border-slate-800 print:border-slate-200">
              <div className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <h3 className="font-bold text-white print:text-black">{experience.role}</h3>
                  <p className="text-cyan-300 print:text-slate-700">{experience.company} · {experience.location}</p>
                </div>
                <span className="text-xs text-slate-400 print:text-slate-500 font-mono">{experience.period}</span>
              </div>
              <ul className="mt-2.5 space-y-1.5 text-xs text-slate-300 print:text-slate-800 list-disc list-inside">
                {experience.bulletPoints.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 print:text-slate-700 mb-2">
              Quantitative Analytical Projects
            </h2>
            <div className="space-y-2.5">
              {projects.map((p) => (
                <div key={p.id} className="bg-slate-950/40 print:bg-slate-50 p-3 rounded-xl border border-slate-800 print:border-slate-200 text-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-white print:text-black">{p.title} ({p.subtitle})</span>
                    <span className="text-slate-400 print:text-slate-600 font-mono text-[11px]">{p.tools.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-slate-300 print:text-slate-700 leading-relaxed">{p.summary}</p>
                  <p className="text-sky-300 print:text-blue-800 font-mono text-[11px] mt-1">
                    Impact: {p.businessImpact}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical & Mathematical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 print:text-slate-700 mb-2">
              Core Skills & Tools
            </h2>
            <div className="text-xs text-slate-300 print:text-slate-800 leading-relaxed bg-slate-950/40 print:bg-slate-50 p-3 rounded-xl border border-slate-800 print:border-slate-200">
              <p><strong>Tools & Spreadsheets:</strong> Advanced Microsoft Excel (XLOOKUP, Nested IFs, Dynamic Pivot Tables, Power Query, Financial Models)</p>
              <p className="mt-1"><strong>Data Analysis & Statistics:</strong> Statistical Modeling, Regression Diagnostics, Probability Distributions, Hypothesis Testing, Variance Analysis</p>
              <p className="mt-1"><strong>Computational & Problem Solving:</strong> SQL (Queries, Joins, Aggregations), Python Basics (Pandas syntax, NumPy arrays), Mathematical Optimization, Root-Cause Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
