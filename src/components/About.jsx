import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Code2, 
  Layout, 
  Zap, 
  Users, 
  MapPin, 
  Mail, 
  GraduationCap, 
  CheckCircle2 
} from 'lucide-react';

export default function About() {
  const { personal, about } = portfolioData;

  // Icon mapping helper
  const renderIcon = (name) => {
    switch (name) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-indigo-500" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-purple-500" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-500" />;
      case 'Users':
        return <Users className="w-6 h-6 text-pink-500" />;
      default:
        return <Code2 className="w-6 h-6 text-indigo-500" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-3 border border-indigo-500/20">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {about.heading}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Story & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-xs">
                <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                <span className="text-slate-500 dark:text-slate-400 font-medium">Location:</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold">{personal.location}</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-xs">
                <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
                <span className="text-slate-500 dark:text-slate-400 font-medium">Email:</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold truncate">{personal.email}</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-xs">
                <GraduationCap className="w-4 h-4 text-indigo-500 shrink-0" />
                <span className="text-slate-500 dark:text-slate-400 font-medium">Degree:</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold">B.Tech in CS</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-slate-500 dark:text-slate-400 font-medium">Availability:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Open for Work</span>
              </div>
            </div>
          </div>

          {/* Core Strengths Highlights (4 cards) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 shadow-sm hover:shadow-md hover:border-indigo-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-700/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {renderIcon(item.icon)}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
