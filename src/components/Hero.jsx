import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowRight, 
  Mail, 
  Sparkles, 
  Layers, 
  Code2 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

export default function Hero() {
  const { personal, socials, stats } = portfolioData;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient gradient glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-pink-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.status}</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-slate-600 dark:text-slate-400 font-medium text-lg">
                Hello there! 👋 I am
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {personal.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                {personal.role}
              </h2>
            </div>

            {/* Tagline / Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personal.tagline} {personal.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-lg shadow-indigo-600/25 transition-all cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700/80 active:scale-95 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-3">
              <span className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-medium mr-1">
                Connect:
              </span>
              {socials.github && (
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-0.5"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              )}
              {socials.linkedin && (
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-0.5"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              )}
              {socials.twitter && (
                <a
                  href={socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-0.5"
                >
                  <TwitterIcon className="w-5 h-5" />
                </a>
              )}
              {socials.email && (
                <a
                  href={socials.email}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all hover:-translate-y-0.5"
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Right Hero Visual / Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative card */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl shadow-indigo-500/20">
                <div className="rounded-[22px] overflow-hidden bg-slate-900 border border-slate-800 relative aspect-square">
                  <img
                    src={personal.avatarUrl}
                    alt={personal.name}
                    className="w-full h-full object-cover object-center filter saturate-110 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Tech Badge 1 */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-white/20 dark:border-slate-700/50 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      React & Node.js
                    </span>
                  </div>

                  {/* Floating Tech Badge 2 */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3.5 rounded-xl shadow-xl border border-slate-200/50 dark:border-slate-800/80">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">Specialization</span>
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400">Full Stack Systems</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full w-[92%] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 hover:border-indigo-500/30 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
