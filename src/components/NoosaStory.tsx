import React from 'react';
import { Sun, Waves, MapPin, Heart } from 'lucide-react';
import { triggerPastelConfetti } from '../utils/confetti';

export const NoosaStory: React.FC = () => {
  return (
    <section id="noosa" className="py-24 relative overflow-hidden bg-coastal-sand border-t border-stone-200/60">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pastel-sun/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-pastel-coral/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pastel-mint-light text-emerald-950 text-xs font-bold uppercase tracking-wider border border-pastel-mint/50">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sunshine Coast • Queensland</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-coastal-dark tracking-tight leading-tight">
              Crafted with ocean air &{' '}
              <span className="text-gradient-sunset">Noosa sunshine.</span>
            </h2>

            <p className="text-base sm:text-lg text-coastal-dark/75 leading-relaxed">
              We believe the best digital tools come from clear minds. Lunaor is anchored in Noosa, surrounded by national parks, pristine surf breaks, and endless sunshine.
            </p>

            <p className="text-sm sm:text-base text-coastal-dark/70 leading-relaxed">
              We build global software without the metropolitan noise. From morning coffee along Hastings Street to evening deployments overlooking Laguna Bay, our environment directly shapes the elegance and simplicity of the web applications we build.
            </p>

            {/* Micro-Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/60 shadow-xs flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-pastel-sky-light text-sky-700 shrink-0">
                  <Waves className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-coastal-dark">
                    Coastal Clarity
                  </h4>
                  <p className="text-xs text-coastal-muted mt-0.5">
                    No artificial rush. High intention, clean architecture, and pure aesthetic taste.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/60 shadow-xs flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-pastel-sun-light text-amber-700 shrink-0">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-coastal-dark">
                    Global Reach
                  </h4>
                  <p className="text-xs text-coastal-muted mt-0.5">
                    Written in Noosa, deployed to edge CDNs serving users around the world 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Coastal Interactive Card */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-pastel-sun-light/90 via-pastel-coral-light/70 to-pastel-sky-light/80 border-2 border-white shadow-pastel-lg">
              {/* Top Card Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-black/5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-amber-600 shadow-xs">
                    <Sun className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-coastal-dark">Noosa Heads, QLD</div>
                    <div className="text-[10px] font-mono text-coastal-muted">26.3980° S, 153.0931° E</div>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-white text-[11px] font-bold text-coastal-dark shadow-xs">
                  AEST (UTC+10)
                </span>
              </div>

              {/* The Rhythm timeline */}
              <div className="my-6 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-coastal-dark/80 mb-2">
                  The Studio Cadence
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60">
                  <span className="text-base">☕</span>
                  <div className="text-xs">
                    <span className="font-bold text-coastal-dark">07:00 AM:</span> Local flat white & ocean check
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60">
                  <span className="text-base">⚡</span>
                  <div className="text-xs">
                    <span className="font-bold text-coastal-dark">09:00 AM:</span> Deep focus code & UI design blocks
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60">
                  <span className="text-base">🏄‍♂️</span>
                  <div className="text-xs">
                    <span className="font-bold text-coastal-dark">01:00 PM:</span> Midday swim at Little Cove / Main Beach
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60">
                  <span className="text-base">🚀</span>
                  <div className="text-xs">
                    <span className="font-bold text-coastal-dark">04:00 PM:</span> Edge deployments & domain sync
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => triggerPastelConfetti()}
                className="w-full py-3 rounded-2xl bg-white hover:bg-stone-50 text-coastal-dark font-display font-bold text-xs shadow-sm hover:shadow-pastel-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Send Coastal Good Vibes</span>
                <Heart className="w-3.5 h-3.5 text-pastel-coral-vibrant fill-pastel-coral-vibrant" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
