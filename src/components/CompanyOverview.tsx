import React from 'react';
import { Compass, Rocket, Zap, Globe } from 'lucide-react';

export const CompanyOverview: React.FC = () => {
  return (
    <section id="model" className="py-24 relative overflow-hidden bg-coastal-sand border-y border-stone-200/60">
      {/* Decorative Pastel Background Auras */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-pastel-coral/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-pastel-mint/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pastel-sky-light text-sky-950 text-xs font-bold uppercase tracking-wider mb-4 border border-pastel-sky/50">
            <Compass className="w-3.5 h-3.5 text-sky-600" />
            <span>The Independent Studio Model</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-coastal-dark tracking-tight leading-tight mb-5">
            A central home for{' '}
            <span className="text-gradient-noosa">independent web software</span>
          </h2>

          <p className="text-base sm:text-lg text-coastal-dark/75 leading-relaxed">
            We are not a digital agency for hire. <strong className="text-coastal-dark font-semibold">Lunaor</strong> exists as the umbrella software company where we build, incubate, and scale our own web applications.
          </p>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Pillar 1 */}
          <div className="relative group p-8 rounded-3xl bg-white/90 backdrop-blur-md border-2 border-stone-100 hover:border-pastel-coral/60 shadow-pastel-sm hover:shadow-pastel-md transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pastel-coral-light to-pastel-coral/40 flex items-center justify-center text-rose-700 mb-6 group-hover:scale-110 transition-transform shadow-sm">
              <Rocket className="w-7 h-7" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-pastel-coral-vibrant mb-1 block">
              100% In-House Roadmaps
            </span>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-coastal-dark mb-3">
              We Build For Ourselves
            </h3>
            <p className="text-sm text-coastal-dark/70 leading-relaxed">
              We create web products we want to exist. By operating entirely self-directed, we move from spark to production in record time with zero compromise on quality.
            </p>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-coastal-dark">
              <span className="w-2 h-2 rounded-full bg-pastel-coral-vibrant" />
              <span>Zero client bureaucracy</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="relative group p-8 rounded-3xl bg-white/90 backdrop-blur-md border-2 border-stone-100 hover:border-pastel-sky/60 shadow-pastel-sm hover:shadow-pastel-md transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pastel-sky-light to-pastel-sky/40 flex items-center justify-center text-sky-700 mb-6 group-hover:scale-110 transition-transform shadow-sm">
              <Globe className="w-7 h-7" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-pastel-sky-vibrant mb-1 block">
              Modular Ecosystem
            </span>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-coastal-dark mb-3">
              Independent Domains
            </h3>
            <p className="text-sm text-coastal-dark/70 leading-relaxed">
              Every application gets its own dedicated brand, focused identity, and independent domain. Lunaor remains the silent mothership and engineering core.
            </p>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-coastal-dark">
              <span className="w-2 h-2 rounded-full bg-pastel-sky-vibrant" />
              <span>Custom domains & unique brands</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="relative group p-8 rounded-3xl bg-white/90 backdrop-blur-md border-2 border-stone-100 hover:border-pastel-mint/60 shadow-pastel-sm hover:shadow-pastel-md transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pastel-mint-light to-pastel-mint/40 flex items-center justify-center text-emerald-700 mb-6 group-hover:scale-110 transition-transform shadow-sm">
              <Zap className="w-7 h-7" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-pastel-mint-vibrant mb-1 block">
              Coastal Standard
            </span>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-coastal-dark mb-3">
              Craft & Performance
            </h3>
            <p className="text-sm text-coastal-dark/70 leading-relaxed">
              Inspired by the clarity of Noosa’s coastline, we build fast, accessible, high-delight software with modern web standards and obsessive polish.
            </p>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-coastal-dark">
              <span className="w-2 h-2 rounded-full bg-pastel-mint-vibrant" />
              <span>Modern edge & cloud native</span>
            </div>
          </div>
        </div>

        {/* High-Level Blueprint Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-coastal-sand to-pastel-sun-light/30 border-2 border-white shadow-pastel-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-pastel-sun text-amber-950 font-bold text-xs uppercase tracking-wider">
                The Lunaor Philosophy
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-coastal-dark">
                Small team, immense leverage, high aesthetic.
              </h3>
              <p className="text-sm text-coastal-dark/75 leading-relaxed">
                Rather than managing endless meetings and client revisions, we pour 100% of our creative energy into engineering remarkable, self-sustaining web software products.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="p-4 rounded-2xl bg-white border border-stone-200/70 text-center shadow-xs">
                <div className="font-display font-black text-2xl sm:text-3xl text-coastal-dark">
                  100%
                </div>
                <div className="text-xs font-semibold text-coastal-muted mt-0.5">
                  Proprietary Focus
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200/70 text-center shadow-xs">
                <div className="font-display font-black text-2xl sm:text-3xl text-coastal-dark">
                  Noosa
                </div>
                <div className="text-xs font-semibold text-coastal-muted mt-0.5">
                  Queensland HQ
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200/70 text-center shadow-xs">
                <div className="font-display font-black text-2xl sm:text-3xl text-coastal-dark">
                  Multi
                </div>
                <div className="text-xs font-semibold text-coastal-muted mt-0.5">
                  Domain Model
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200/70 text-center shadow-xs">
                <div className="font-display font-black text-2xl sm:text-3xl text-coastal-dark">
                  ⚡ Fast
                </div>
                <div className="text-xs font-semibold text-coastal-muted mt-0.5">
                  Edge Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
