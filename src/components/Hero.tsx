import React from 'react';
import { 
  FolderOpen, 
  Mail, 
  Linkedin, 
  FileText, 
  MapPin, 
  GraduationCap, 
  Sigma, 
  Building2, 
  CheckCircle2,
  Binary
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { profile, keyStats } = PORTFOLIO_DATA;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-800/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-20 w-[300px] h-[300px] bg-cyan-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Domain Kicker / Focus */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-sky-400 mb-3 uppercase">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Mathematics Student at BZU · Aspiring Data Analyst</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 [text-wrap:balance]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-200">{profile.name}</span>
            </h1>

            {/* University & Degree Subtitle */}
            <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-sm sm:text-base text-slate-300 font-medium mb-5">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <GraduationCap className="w-4 h-4" />
                <span>B.Sc. Mathematics</span>
              </span>
              <span className="text-slate-600">·</span>
              <span>Bahauddin Zakariya University</span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-slate-400 text-xs sm:text-sm">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Multan, Pakistan</span>
              </span>
            </div>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8 font-normal">
              {profile.tagline}
            </p>

            {/* Primary Action Button Group */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-all shadow-md shadow-sky-500/10 hover:shadow-sky-500/25 cursor-pointer whitespace-nowrap"
              >
                <FolderOpen className="w-4 h-4" />
                <span>View Projects</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 hover:text-white border border-slate-700/80 hover:border-slate-600 rounded-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#0a66c2] hover:bg-[#004182] rounded-lg transition-all shadow-sm cursor-pointer whitespace-nowrap"
                title="Open LinkedIn Profile in new tab"
              >
                <Linkedin className="w-4 h-4 fill-current" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>View CV</span>
              </button>
            </div>
          </div>

          {/* Right Column: Academic & Analytical Credential Card (No photo) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-sky-500/30 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-sm transition-all duration-300">
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <Sigma className="w-3.5 h-3.5" />
                    <span>Academic Dossier</span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {profile.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    BZU Multan · Roll: <span className="font-mono text-cyan-300">{profile.rollNo}</span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 shrink-0">
                  <Binary className="w-6 h-6" />
                </div>
              </div>

              {/* Credential Details List */}
              <div className="py-5 space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">B.Sc. Mathematics (Final Year)</span>
                    <span className="text-slate-400 text-xs">Bahauddin Zakariya University (BZU)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Data & Operations Intern</span>
                    <span className="text-slate-400 text-xs">Universal Bank Limited (UBL)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Specialization</span>
                    <span className="text-slate-400 text-xs">Statistical Modeling, Advanced Excel & Analytics</span>
                  </div>
                </div>
              </div>

              {/* Status Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-medium text-slate-300">Open to Analyst Roles</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  Multan, PK
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Key Metric Strip Below Hero Split */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {keyStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xs text-slate-400 font-medium mb-1">{stat.label}</span>
              <span className="text-lg sm:text-xl font-bold text-white tracking-tight tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs text-sky-400/90 font-mono mt-0.5">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
