import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { triggerPastelConfetti } from '../utils/confetti';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'ethos' | 'model' | 'noosa'>('ethos');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-pastel-hero">
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-pastel-sky/30 rounded-full blur-3xl pointer-events-none animate-drift" />
      <div className="absolute top-1/3 right-10 w-[28rem] h-[28rem] bg-pastel-coral/30 rounded-full blur-3xl pointer-events-none animate-drift-reverse" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-pastel-sun/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pastel-lavender/30 rounded-full blur-3xl pointer-events-none animate-drift" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Pastel Badges on Desktop */}
        <div className="hidden xl:block absolute -top-4 left-4 z-10">
          <div className="sticker-badge flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-pastel-sage-light text-emerald-900 border border-pastel-sage shadow-pastel-sm font-semibold text-xs rotate-[-3deg]">
            <span>🌴</span>
            <span>Based in Noosa Heads, QLD</span>
          </div>
        </div>

        <div className="hidden xl:block absolute top-8 right-6 z-10">
          <div className="sticker-badge flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-pastel-peach-light text-amber-950 border border-pastel-peach shadow-pastel-sm font-semibold text-xs rotate-[4deg]">
            <span>⚡</span>
            <span>100% In-House Software</span>
          </div>
        </div>

        <div className="hidden xl:block absolute top-64 -left-6 z-10">
          <div className="sticker-badge flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-pastel-sky-light text-sky-950 border border-pastel-sky shadow-pastel-sm font-semibold text-xs rotate-[2deg]">
            <span>🌐</span>
            <span>Independent Domains</span>
          </div>
        </div>

        <div className="hidden xl:block absolute top-72 -right-4 z-10">
          <div className="sticker-badge flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-pastel-lavender-light text-purple-950 border border-pastel-lavender shadow-pastel-sm font-semibold text-xs rotate-[-2deg]">
            <span>🎨</span>
            <span>Pure Craft & Polish</span>
          </div>
        </div>

        {/* Central Hero Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Pill / Studio Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-pastel-coral-light shadow-pastel-sm mb-6 animate-in fade-in zoom-in duration-300">
            <span className="w-2 h-2 rounded-full bg-pastel-coral-vibrant animate-ping" />
            <span className="text-xs font-bold uppercase tracking-wider text-coastal-dark/80">
              Software Development Company
            </span>
            <span className="text-pastel-muted">•</span>
            <span className="text-xs font-handwriting font-bold text-pastel-coral-vibrant text-base">
              Noosa Beach Vibes
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-coastal-dark leading-[1.08] mb-6">
            We build web applications{' '}
            <span className="relative inline-block">
              <span className="text-gradient-coral-sky">for ourselves.</span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-pastel-sun-vibrant opacity-90 -z-10"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 15 Q50 0 100 15"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          {/* High-Level Narrative Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-coastal-dark/75 font-normal max-w-2xl mx-auto leading-relaxed mb-8">
            <span className="font-luxury font-medium tracking-[0.06em] text-coastal-dark uppercase">LUNAOR</span> is the central holding company and development hub. 
            We engineer and launch web applications for ourselves — with everything running under its own dedicated domain, built right here in Noosa.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#overview"
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-coastal-dark hover:bg-coastal-darkNavy text-white font-display font-bold text-base shadow-pastel-md hover:shadow-pastel-lg transition-all duration-300 hover:scale-[1.02] active:scale-98"
            >
              <span>Learn About Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/90 hover:bg-white text-coastal-dark font-display font-bold text-base border border-pastel-sky shadow-pastel-sm hover:shadow-pastel-md transition-all hover:scale-[1.02] active:scale-98"
            >
              <span>Get in Touch</span>
            </button>

            <button
              onClick={() => {
                triggerPastelConfetti();
              }}
              className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl bg-pastel-sun-light/90 hover:bg-pastel-sun-light text-amber-950 font-display font-bold text-sm border border-pastel-sun/60 shadow-pastel-sm hover:shadow-pastel-md transition-all hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Sunshine Blast</span>
            </button>
          </div>

          {/* Mobile badges row (visible on smaller screens) */}
          <div className="flex xl:hidden flex-wrap items-center justify-center gap-2 mb-10">
            <span className="px-3 py-1 rounded-xl bg-pastel-sage-light text-emerald-950 text-xs font-semibold border border-pastel-sage/50">
              🌴 Noosa Base
            </span>
            <span className="px-3 py-1 rounded-xl bg-pastel-sky-light text-sky-950 text-xs font-semibold border border-pastel-sky/50">
              🌐 Independent Domains
            </span>
            <span className="px-3 py-1 rounded-xl bg-pastel-coral-light text-rose-950 text-xs font-semibold border border-pastel-coral/50">
              ⚡ 100% In-House
            </span>
          </div>
        </div>

        {/* High-Level Studio Interactive Hub Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-white/80 backdrop-blur-xl border-2 border-white shadow-pastel-lg p-2 sm:p-4 overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100/80 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pastel-coral-vibrant" />
                <div className="w-3 h-3 rounded-full bg-pastel-sun-vibrant" />
                <div className="w-3 h-3 rounded-full bg-pastel-mint-vibrant" />
                <span className="ml-2 text-xs font-mono text-coastal-muted hidden sm:inline-block">
                  lunaor.com — Central Hub
                </span>
              </div>

              {/* Interactive Tab Switcher */}
              <div className="flex items-center gap-1 bg-coastal-sand p-1 rounded-xl border border-gray-200/50">
                <button
                  onClick={() => setActiveTab('ethos')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'ethos'
                      ? 'bg-white text-coastal-dark shadow-sm'
                      : 'text-coastal-muted hover:text-coastal-dark'
                  }`}
                >
                  Our Ethos
                </button>
                <button
                  onClick={() => setActiveTab('model')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'model'
                      ? 'bg-white text-coastal-dark shadow-sm'
                      : 'text-coastal-muted hover:text-coastal-dark'
                  }`}
                >
                  Domain Model
                </button>
                <button
                  onClick={() => setActiveTab('noosa')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'noosa'
                      ? 'bg-white text-coastal-dark shadow-sm'
                      : 'text-coastal-muted hover:text-coastal-dark'
                  }`}
                >
                  Noosa Way
                </button>
              </div>
            </div>

            {/* Content Display based on active tab */}
            <div className="p-4 sm:p-6 bg-gradient-to-b from-white/90 to-coastal-sand/60 rounded-2xl border border-white/80">
              {activeTab === 'ethos' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="pb-3 border-b border-gray-100">
                    <span className="text-xs font-bold text-pastel-coral-vibrant uppercase tracking-wider">
                      The Company Philosophy
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-extrabold text-coastal-dark">
                      An umbrella hub for our own web applications
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-pastel-sky-light/80 to-white border border-pastel-sky/40">
                      <div className="w-8 h-8 rounded-xl bg-pastel-sky/50 flex items-center justify-center text-sky-950 font-bold mb-2">
                        1
                      </div>
                      <h4 className="font-display font-bold text-sm text-coastal-dark mb-1">
                        Self-Directed
                      </h4>
                      <p className="text-xs text-coastal-muted leading-relaxed">
                        We build what we want to use. We test, refine, and maintain our own digital tools.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-gradient-to-br from-pastel-peach-light/80 to-white border border-pastel-peach/40">
                      <div className="w-8 h-8 rounded-xl bg-pastel-peach/50 flex items-center justify-center text-amber-950 font-bold mb-2">
                        2
                      </div>
                      <h4 className="font-display font-bold text-sm text-coastal-dark mb-1">
                        Discrete Domains
                      </h4>
                      <p className="text-xs text-coastal-muted leading-relaxed">
                        Each web application lives under its own unique domain and standalone brand.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-gradient-to-br from-pastel-mint-light/80 to-white border border-pastel-mint/40">
                      <div className="w-8 h-8 rounded-xl bg-pastel-mint/50 flex items-center justify-center text-emerald-950 font-bold mb-2">
                        3
                      </div>
                      <h4 className="font-display font-bold text-sm text-coastal-dark mb-1">
                        Craft & Polish
                      </h4>
                      <p className="text-xs text-coastal-muted leading-relaxed">
                        Modern, colorful, and fast software built with care from Noosa, Queensland.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'model' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="pb-3 border-b border-gray-100">
                    <span className="text-xs font-bold text-pastel-sky-vibrant uppercase tracking-wider">
                      The Independent Architecture
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-extrabold text-coastal-dark">
                      Why we launch under independent domains
                    </h3>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-stone-200/60 shadow-xs space-y-3 text-sm text-coastal-dark/80">
                    <p className="leading-relaxed">
                      Lunaor acts as the central company and engineering engine. When we create a new web application, it gets its own dedicated home on the web — giving each product focused branding, dedicated infrastructure, and its own audience.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-semibold">
                      <span className="px-3 py-1 rounded-lg bg-pastel-sky-light text-sky-950 border border-pastel-sky/40">
                        🌐 Separate Domains
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-pastel-coral-light text-rose-950 border border-pastel-coral/40">
                        ⚡ Focused Scope
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-pastel-mint-light text-emerald-950 border border-pastel-mint/40">
                        🏝️ Lunaor HQ
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'noosa' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="pb-2 border-b border-gray-100">
                    <span className="text-xs font-bold text-pastel-sun-vibrant uppercase tracking-wider">
                      Coastal Lifestyle meets Software
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-extrabold text-coastal-dark">
                      Built in Queensland’s creative paradise
                    </h3>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-r from-pastel-sun-light via-pastel-coral-light to-pastel-sky-light border border-pastel-sun/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="space-y-1 text-center sm:text-left">
                      <div className="font-display font-bold text-base text-coastal-dark">
                        Sunshine Coast Headquarters 🌊
                      </div>
                      <div className="text-xs text-coastal-dark/80">
                        Latitude: -26.3980° S | Longitude: 153.0931° E • Ocean breeze & clean code.
                      </div>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-white/90 text-xs font-bold text-coastal-dark shadow-sm whitespace-nowrap">
                      ☀️ 300+ Days of Sunshine
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
