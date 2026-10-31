import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin 
} from 'lucide-react';

export default function Experience() {
  const { timeline } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-3 border border-indigo-500/20">
            Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            My professional career path, internship experiences, and educational background.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              const isWork = item.type === 'work';

              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-8`}
                >
                  {/* Timeline Node Center Icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-md z-10">
                    {isWork ? (
                      <Briefcase className="w-4 h-4" />
                    ) : (
                      <GraduationCap className="w-4 h-4" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)] ml-12 sm:ml-0">
                    <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-indigo-500/40 transition-all">
                      {/* Period & Location */}
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                        <span className="inline-flex items-center gap-1 font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-2.5 py-1 rounded-md">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-3">
                        {item.organization}
                      </h4>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Skills tags */}
                      {item.skills && (
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                          {item.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
