import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, Mail, Copy, Check } from 'lucide-react';
import { triggerPastelConfetti } from '../utils/confetti';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@lunaor.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    triggerPastelConfetti();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-white shadow-pastel-lg p-6 sm:p-8 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-coastal-dark transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pastel-coral-light text-rose-950 text-xs font-bold uppercase tracking-wider mb-2 border border-pastel-coral/40">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Say Hello to <span className="font-luxury font-medium tracking-[0.06em] uppercase">LUNAOR</span></span>
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-coastal-dark">
            Connect with the studio
          </h3>
          <p className="text-xs sm:text-sm text-coastal-muted mt-1">
            Based in Noosa, building web applications for ourselves across the globe.
          </p>
        </div>

        {/* Quick Email Copy Box */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-pastel-sky-light/60 to-pastel-peach-light/40 border border-stone-200/80 flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-sky-700" />
            <span className="font-mono text-xs sm:text-sm font-bold text-coastal-dark">
              hello@lunaor.com
            </span>
          </div>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white text-xs font-bold text-coastal-dark shadow-xs hover:bg-stone-50 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-coastal-muted" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-3xl bg-pastel-mint-light border-2 border-pastel-mint text-emerald-800 flex items-center justify-center mx-auto shadow-pastel-sm animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-display font-extrabold text-xl text-coastal-dark">
              Message received!
            </h4>
            <p className="text-xs sm:text-sm text-coastal-muted max-w-sm mx-auto">
              Thanks for reaching out to Lunaor. We’ll get back to you between ocean breaks! 🌴
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-2xl bg-coastal-dark text-white font-display font-bold text-xs"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-coastal-dark/80 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Maya Lin"
                className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-pastel-coral focus:bg-white focus:outline-hidden text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-coastal-dark/80 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="maya@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-pastel-coral focus:bg-white focus:outline-hidden text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-coastal-dark/80 mb-1.5">
                Message
              </label>
              <textarea
                rows={3}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us what's on your mind..."
                className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:border-pastel-coral focus:bg-white focus:outline-hidden text-sm transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-pastel-coral-vibrant via-pastel-peach-vibrant to-pastel-coral-vibrant text-white font-display font-bold text-sm shadow-pastel-sm hover:shadow-pastel-md transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
