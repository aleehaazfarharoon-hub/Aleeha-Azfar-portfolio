import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  BarChart3, 
  Calculator, 
  PieChart, 
  Database, 
  Code2, 
  BrainCircuit,
  Check
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'Analytics' | 'Modeling' | 'Tools' | 'Programming'>('all');
  const { skills } = PORTFOLIO_DATA;

  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    FileSpreadsheet,
    BarChart3,
    Calculator,
    PieChart,
    Database,
    Code2,
    BrainCircuit,
  };

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeFilter);

  const filterTabs = [
    { key: 'all', label: 'All Skills', count: skills.length },
    { key: 'Tools', label: 'Spreadsheet & Tools', count: skills.filter(s => s.category === 'Tools').length },
    { key: 'Analytics', label: 'Data & Statistics', count: skills.filter(s => s.category === 'Analytics').length },
    { key: 'Modeling', label: 'Mathematical Logic', count: skills.filter(s => s.category === 'Modeling').length },
    { key: 'Programming', label: 'Code & Databases', count: skills.filter(s => s.category === 'Programming').length },
  ] as const;

  return (
    <section id="skills" className="py-20 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
              <span>Technical & Mathematical Competencies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Skills & Methodologies
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-transparent mt-3 rounded-full" />
          </div>

          {/* Interactive Filter Tabs (Functional segmented buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-sky-400 text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full tabular-nums ${
                    isActive ? 'bg-sky-950/20 text-slate-900' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.iconName] || Calculator;
            return (
              <div
                key={skill.name}
                className="bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 rounded-xl p-5 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Top metadata strip (clean unboxed text) */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="text-sky-400 font-medium">{skill.category}</span>
                    <span className="font-mono text-[11px] text-slate-400">{skill.level}</span>
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Practical techniques checklist */}
                <div className="pt-3 border-t border-slate-800/80 mt-auto">
                  <div className="grid grid-cols-2 gap-1.5">
                    {skill.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <Check className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
