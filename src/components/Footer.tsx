import React from 'react';
import { ArrowUp, Sparkles, Waves } from 'lucide-react';
import { triggerPastelConfetti } from '../utils/confetti';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-coastal-dark text-white pt-20 pb-12 overflow-hidden">
      {/* Subtle Pastel Glows in the dark footer */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-pastel-coral-vibrant/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-pastel-sky-vibrant/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Wave Divider at Top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pastel-coral via-pastel-sun to-pastel-sky" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Mission Column */}
          <div className="md:col-span-6 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pastel-coral via-pastel-sun to-pastel-sky p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-coastal-dark rounded-full flex items-center justify-center">
                  <span className="font-luxury font-medium text-base text-white tracking-normal">
                    L
                  </span>
                </div>
              </div>
              <span className="font-luxury text-2xl sm:text-[1.65rem] tracking-[0.06em] font-normal text-white uppercase select-none">
                LUNAOR
              </span>
            </div>

            <p className="text-sm text-stone-300/80 leading-relaxed max-w-md">
              We design, build, and operate proprietary web applications for ourselves. Each product lives independently across its own dedicated domain, proudly created from Noosa, Australia.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenContact}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/10"
              >
                Contact Studio
              </button>
              <button
                onClick={() => triggerPastelConfetti()}
                className="px-4 py-2 rounded-xl bg-pastel-coral-vibrant/20 hover:bg-pastel-coral-vibrant/30 text-pastel-coral-light text-xs font-bold transition-all border border-pastel-coral-vibrant/30 flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sunshine Boost</span>
              </button>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-pastel-sun-light">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  The Hub
                </a>
              </li>
              <li>
                <a href="#model" className="hover:text-white transition-colors">
                  Independent Model
                </a>
              </li>
              <li>
                <a href="#focus" className="hover:text-white transition-colors">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#noosa" className="hover:text-white transition-colors">
                  Noosa Roots
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Meta */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-pastel-mint">
              HQ Coordinates
            </div>
            <div className="space-y-1 text-xs text-stone-400">
              <div className="text-white font-semibold flex items-center gap-1.5">
                <Waves className="w-3.5 h-3.5 text-pastel-sky" />
                Noosa Heads, Queensland
              </div>
              <div>Australia (AEST / UTC+10)</div>
              <div className="pt-2 text-[11px] text-stone-400">
                Independent products launched across bespoke domains globally.
              </div>
            </div>
          </div>
        </div>

        {/* Signature "Made in Noosa with ❤️" Section */}
        <div className="py-10 flex flex-col items-center justify-center text-center space-y-3">
          <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:border-pastel-coral/50 transition-all hover:scale-105 cursor-default group">
            <span className="text-sm sm:text-base font-display font-bold text-white tracking-wide">
              Made in Noosa with
            </span>
            <span className="relative inline-block">
              <span className="text-xl animate-bounce inline-block text-rose-500">❤️</span>
            </span>
            <span className="text-xs font-handwriting text-pastel-coral-light font-bold">
              coastal love
            </span>
          </div>

          <p className="text-xs text-stone-400">
            High-level central hub for proprietary web software.
          </p>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} Lunaor. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors group"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-pastel-sky" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
