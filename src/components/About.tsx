import React from 'react';
import { Brain, Sigma, Database, Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const analyticalPillars = [
    {
      title: "Mathematical Foundations",
      icon: Sigma,
      description: "Rigorous training in calculus, linear algebra, and discrete structures provides the algorithmic backbone for abstract problem deconstruction."
    },
    {
      title: "Applied Statistical Inference",
      icon: Brain,
      description: "Formulating probabilistic distribution models, hypothesis testing, and regression analysis to separate meaningful signal from empirical noise."
    },
    {
      title: "Practical Business Intelligence",
      icon: Database,
      description: "Translating transactional and financial datasets into automated spreadsheet engines, executive dashboards, and decision-ready intelligence."
    }
  ];

  return (
    <section id="about" className="py-20 border-b border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
            <span>Background & Analytical Orientation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-transparent mt-3 rounded-full" />
        </div>

        {/* Narrative Card & Academic Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-8 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-5">
              I am a final-year <strong className="text-white font-semibold">B.Sc. Mathematics</strong> student at <strong className="text-sky-300 font-semibold">{profile.university}</strong> with Roll No. <strong className="font-mono text-cyan-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60 text-sm">{profile.rollNo}</strong>. My academic focus combines rigorous analytical skills with statistical analysis and modern computational tools.
            </p>
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed mb-6">
              With hands-on internship experience in banking data analytics at <strong className="text-white font-semibold">Universal Bank Limited (UBL)</strong>, I have worked directly with financial record management, spreadsheet automation, and transactional trend synthesis. My long-term mission is to build an impactful career as a Data Analyst and Data Science professional who bridges mathematical precision with real-world strategic decision making.
            </p>

            <div className="pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Roll: {profile.rollNo}</span>
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-400" />
                <span>UBL Banking Analytics Alum</span>
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Multan, Pakistan</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Core Methodology</span>
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex gap-3">
                <span className="font-mono text-sky-400 font-semibold shrink-0">01.</span>
                <span>Audit and clean raw inputs to guarantee mathematical consistency.</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono text-sky-400 font-semibold shrink-0">02.</span>
                <span>Select appropriate statistical or linear distribution models.</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono text-sky-400 font-semibold shrink-0">03.</span>
                <span>Deliver automated, error-resilient spreadsheet dashboards.</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono text-sky-400 font-semibold shrink-0">04.</span>
                <span>Communicate executive conclusions with clear quantitative bounds.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Analytical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {analyticalPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 rounded-xl p-6 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
