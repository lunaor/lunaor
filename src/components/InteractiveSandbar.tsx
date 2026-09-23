import React, { useState } from 'react';
import { Sparkles, Smile } from 'lucide-react';
import { triggerPastelConfetti } from '../utils/confetti';

interface Sticker {
  id: number;
  emoji: string;
  label: string;
  x: number;
  y: number;
  color: string;
}

export const InteractiveSandbar: React.FC = () => {
  const [stickers, setStickers] = useState<Sticker[]>([
    { id: 1, emoji: '🏄‍♂️', label: 'First Point', x: 18, y: 35, color: 'bg-pastel-sky-light text-sky-950 border-pastel-sky' },
    { id: 2, emoji: '☕', label: 'Hastings Flat White', x: 55, y: 22, color: 'bg-pastel-peach-light text-amber-950 border-pastel-peach' },
    { id: 3, emoji: '💻', label: 'Code in the Sun', x: 78, y: 50, color: 'bg-pastel-sage-light text-emerald-950 border-pastel-sage' },
    { id: 4, emoji: '🌊', label: 'Laguna Bay Wave', x: 34, y: 65, color: 'bg-pastel-coral-light text-rose-950 border-pastel-coral' },
    { id: 5, emoji: '✨', label: 'Indie Web App', x: 62, y: 75, color: 'bg-pastel-lavender-light text-purple-950 border-pastel-lavender' },
  ]);

  const stickerOptions = [
    { emoji: '🌴', label: 'Noosa Palm', color: 'bg-pastel-sage-light text-emerald-950 border-pastel-sage' },
    { emoji: '☀️', label: '300+ Days Sun', color: 'bg-pastel-sun-light text-amber-950 border-pastel-sun' },
    { emoji: '🚀', label: 'Independent SaaS', color: 'bg-pastel-coral-light text-rose-950 border-pastel-coral' },
    { emoji: '🐚', label: 'Tea Tree Bay', color: 'bg-pastel-peach-light text-orange-950 border-pastel-peach' },
    { emoji: '❤️', label: 'Made with Love', color: 'bg-pastel-coral-light text-rose-950 border-pastel-coral' },
    { emoji: '⚡', label: 'Instant Deploy', color: 'bg-pastel-sky-light text-sky-950 border-pastel-sky' },
  ];

  const handleAddSticker = (option: typeof stickerOptions[0]) => {
    const randomX = Math.floor(Math.random() * 70) + 10;
    const randomY = Math.floor(Math.random() * 60) + 15;

    const newSticker: Sticker = {
      id: Date.now(),
      emoji: option.emoji,
      label: option.label,
      x: randomX,
      y: randomY,
      color: option.color,
    };

    setStickers((prev) => [...prev.slice(-12), newSticker]);
    triggerPastelConfetti();
  };

  const handleClearStickers = () => {
    setStickers([]);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-white border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pastel-coral-light text-rose-950 text-xs font-bold uppercase tracking-wider mb-3 border border-pastel-coral/50">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Interactive Sandbar</span>
          </div>
          <h3 className="font-display font-black text-2xl sm:text-4xl text-coastal-dark mb-3">
            Leave your mark on the Noosa canvas
          </h3>
          <p className="text-sm text-coastal-dark/70">
            Click any sticker below to drop it onto our interactive sandbar playground!
          </p>
        </div>

        {/* Sticker Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {stickerOptions.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAddSticker(opt)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-bold border shadow-xs hover:shadow-pastel-sm transition-all hover:scale-105 active:scale-95 ${opt.color}`}
            >
              <span className="text-base">{opt.emoji}</span>
              <span>+ {opt.label}</span>
            </button>
          ))}

          {stickers.length > 0 && (
            <button
              onClick={handleClearStickers}
              className="px-3 py-2 rounded-2xl text-xs font-semibold text-coastal-muted hover:text-coastal-dark bg-stone-100 hover:bg-stone-200 transition-colors"
            >
              Reset Canvas
            </button>
          )}
        </div>

        {/* Interactive Canvas Sandbar */}
        <div className="relative w-full h-80 sm:h-96 rounded-3xl bg-gradient-to-br from-pastel-sun-light/40 via-pastel-peach-light/30 to-pastel-sky-light/40 border-2 border-stone-200/70 p-4 shadow-inner overflow-hidden select-none">
          <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

          {/* Gentle background watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-luxury font-normal text-6xl sm:text-8xl text-black/[0.04] tracking-[0.1em] uppercase">
              LUNAOR
            </span>
          </div>

          {/* Placed Stickers */}
          {stickers.map((s) => (
            <div
              key={s.id}
              style={{ left: `${s.x}%`, top: `${s.y}%` }}
              className={`sticker-badge absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-bold border shadow-pastel-sm cursor-pointer animate-in zoom-in duration-200 ${s.color}`}
              onClick={() => triggerPastelConfetti()}
              title="Click for sunshine confetti!"
            >
              <span className="text-base">{s.emoji}</span>
              <span>{s.label}</span>
            </div>
          ))}

          {stickers.length === 0 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-coastal-muted">
              <Smile className="w-8 h-8 mb-2 opacity-50" />
              <p className="text-xs font-semibold">The sand is pristine. Tap a sticker above to decorate!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
