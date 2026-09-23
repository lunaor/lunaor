import React, { useState, useEffect } from 'react';
import { Sun, Sparkles, MessageCircle, Menu, X, Waves } from 'lucide-react';
import { triggerPastelConfetti } from '../utils/confetti';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [noosaTime, setNoosaTime] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Update Noosa local time (UTC+10 / AEST)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Australia/Brisbane', // Queensland (AEST, UTC+10)
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setNoosaTime(new Intl.DateTimeFormat('en-AU', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle scroll blur styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-glass-navbar shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 transition-transform hover:scale-102"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-pastel-coral via-pastel-sun to-pastel-sky p-[1.5px] shadow-pastel-sm group-hover:shadow-pastel-md transition-all">
              <div className="w-full h-full bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="font-luxury font-medium text-base text-coastal-dark tracking-normal">
                  L
                </span>
              </div>
            </div>

            <span className="font-luxury text-2xl sm:text-[1.65rem] tracking-[0.06em] font-normal text-coastal-dark uppercase select-none">
              LUNAOR
            </span>
          </a>

          {/* Desktop Live Location Status */}
          <div className="hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-full bg-glass-pill text-xs font-medium text-coastal-dark/80 border border-pastel-coral-light/60 hover:border-pastel-coral transition-colors">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pastel-mint-vibrant opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="flex items-center gap-1 font-semibold text-coastal-dark">
              <Waves className="w-3.5 h-3.5 text-pastel-sky-vibrant" />
              Noosa, QLD
            </span>
            <span className="text-coastal-muted">•</span>
            <span className="font-mono text-[11px] text-coastal-dark/70 font-semibold">
              {noosaTime || '10:00 AM AEST'}
            </span>
            <span className="text-coastal-muted">•</span>
            <span className="text-[11px] bg-pastel-sun-light text-amber-900 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
              <Sun className="w-3 h-3 text-amber-500" />
              Sunny vibes
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#overview"
              className="text-sm font-semibold text-coastal-dark/75 hover:text-coastal-dark transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-pastel-coral-vibrant hover:after:w-full after:transition-all"
            >
              The Hub
            </a>
            <a
              href="#model"
              className="text-sm font-semibold text-coastal-dark/75 hover:text-coastal-dark transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-pastel-sky-vibrant hover:after:w-full after:transition-all"
            >
              Independent Model
            </a>
            <a
              href="#focus"
              className="text-sm font-semibold text-coastal-dark/75 hover:text-coastal-dark transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-pastel-mint-vibrant hover:after:w-full after:transition-all"
            >
              What We Do
            </a>
            <a
              href="#noosa"
              className="text-sm font-semibold text-coastal-dark/75 hover:text-coastal-dark transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-pastel-sun-vibrant hover:after:w-full after:transition-all"
            >
              Noosa Roots
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => triggerPastelConfetti()}
              title="Sprinkle some Noosa sunshine!"
              className="p-2.5 rounded-2xl bg-white/80 hover:bg-white text-pastel-coral-vibrant hover:text-coastal-dark border border-pastel-coral-light/60 shadow-sm hover:shadow-pastel-sm transition-all hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-pastel-coral-vibrant via-pastel-peach-vibrant to-pastel-coral-vibrant bg-[length:200%_auto] hover:bg-right text-white font-display font-bold text-sm shadow-pastel-sm hover:shadow-pastel-md transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <span>Say Hello</span>
              <MessageCircle className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => triggerPastelConfetti()}
              className="p-2 rounded-xl bg-white/80 text-pastel-coral-vibrant border border-pastel-coral-light/50 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/80 text-coastal-dark border border-black/5"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-5 rounded-3xl bg-white/95 backdrop-blur-xl border border-pastel-coral-light/50 shadow-pastel-lg flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 text-xs">
            <span className="font-semibold text-coastal-dark flex items-center gap-1.5">
              <Sun className="w-4 h-4 text-amber-500" />
              Noosa, QLD
            </span>
            <span className="font-mono font-medium text-coastal-muted">
              {noosaTime}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-base font-semibold text-coastal-dark hover:bg-pastel-sky-light/50 transition-colors"
            >
              The Hub
            </a>
            <a
              href="#model"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-base font-semibold text-coastal-dark hover:bg-pastel-coral-light/50 transition-colors"
            >
              Independent Model
            </a>
            <a
              href="#focus"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-base font-semibold text-coastal-dark hover:bg-pastel-mint-light/50 transition-colors"
            >
              What We Do
            </a>
            <a
              href="#noosa"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-base font-semibold text-coastal-dark hover:bg-pastel-sun-light/50 transition-colors"
            >
              Noosa Roots
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pastel-coral-vibrant to-pastel-peach-vibrant text-white font-display font-bold text-sm shadow-pastel-sm text-center"
          >
            Say Hello
          </button>
        </div>
      )}
    </header>
  );
};
