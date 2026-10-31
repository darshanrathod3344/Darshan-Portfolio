import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Code2, 
  Server, 
  Wrench, 
  Sparkles, 
  Terminal, 
  Layers 
} from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Tools'];

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-3 border border-indigo-500/20">
            Skills & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technologies I Work With
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From crafting pixel-perfect interfaces to architecting scalable backends, here are my core proficiencies.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 scale-105'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-indigo-500/40 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base">
                  {skill.name}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  {skill.category}
                </span>
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] text-slate-400 dark:text-slate-500">
                  <span>Proficiency</span>
                  <span className="font-medium text-indigo-600 dark:text-indigo-400">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning highlight banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-600 text-white shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                Continuous Learning & Adaptation
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Constantly expanding my skillset with state-of-the-art tools, AI workflows, and modern cloud ecosystems.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900 shadow-xs hover:bg-indigo-50 dark:hover:bg-slate-700 transition-colors shrink-0"
          >
            See in Action &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
