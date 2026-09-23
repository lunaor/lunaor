import React from 'react';
import { Layers, Sparkles, Layout, Globe, Zap } from 'lucide-react';

export const ProductSpheres: React.FC = () => {
  const focuses = [
    {
      title: 'Web Application Engineering',
      badge: 'Browser-First',
      badgeColor: 'bg-pastel-sky-light text-sky-950 border-pastel-sky/50',
      description:
        'We design, engineer, and operate modern web applications built from scratch with clean code, fast performance, and zero bloat.',
      icon: Layout,
      color: 'from-pastel-sky-light/80 to-white',
      borderColor: 'hover:border-pastel-sky',
    },
    {
      title: 'High Aesthetic Standard',
      badge: 'Pastel & Polish',
      badgeColor: 'bg-pastel-coral-light text-rose-950 border-pastel-coral/50',
      description:
        'Software should look great and feel fluid to use. We obsess over intuitive UX, vibrant typography, and micro-interactions.',
      icon: Sparkles,
      color: 'from-pastel-coral-light/80 to-white',
      borderColor: 'hover:border-pastel-coral',
    },
    {
      title: 'Independent Domain Model',
      badge: 'Bespoke Domains',
      badgeColor: 'bg-pastel-mint-light text-emerald-950 border-pastel-mint/50',
      description:
        'Every web application we create is deployed under its own dedicated domain with tailored branding and focused infrastructure.',
      icon: Globe,
      color: 'from-pastel-mint-light/80 to-white',
      borderColor: 'hover:border-pastel-mint',
    },
    {
      title: 'Built In-House For Ourselves',
      badge: 'Autonomous',
      badgeColor: 'bg-pastel-sun-light text-amber-950 border-pastel-sun/50',
      description:
        'We develop software products we believe in and operate them ourselves, maintaining complete ownership of our roadmap and vision.',
      icon: Zap,
      color: 'from-pastel-sun-light/80 to-white',
      borderColor: 'hover:border-pastel-sun',
    },
  ];

  return (
    <section id="focus" className="py-24 relative overflow-hidden bg-white">
      {/* Background Glows */}
      <div className="absolute -top-10 right-1/3 w-80 h-80 bg-pastel-coral/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-pastel-sky/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pastel-coral-light text-rose-950 text-xs font-bold uppercase tracking-wider mb-4 border border-pastel-coral/50">
              <Layers className="w-3.5 h-3.5 text-rose-600" />
              <span>What We Do</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-coastal-dark tracking-tight leading-tight">
              Crafting web applications with care
            </h2>
          </div>

          <p className="text-sm sm:text-base text-coastal-dark/70 max-w-md">
            Lunaor is a central home for our web software development. We build things directly, launching each product under its own domain.
          </p>
        </div>

        {/* 4 Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {focuses.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${item.color} border-2 border-stone-100 ${item.borderColor} shadow-pastel-sm hover:shadow-pastel-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-gray-100 flex items-center justify-center text-coastal-dark mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-coastal-dark" />
                  </div>

                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-coastal-dark mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-coastal-dark/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* High-Level Overview Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-pastel-sky-light/40 border-2 border-pastel-sky/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-sky-600 shrink-0 hidden sm:flex">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-coastal-dark">
                A central place for our company
              </h4>
              <p className="text-xs sm:text-sm text-coastal-dark/70">
                Lunaor is our central hub. Our web applications exist and operate under their own individual domains.
              </p>
            </div>
          </div>

          <div className="px-4 py-2 rounded-2xl bg-white font-display font-bold text-xs text-coastal-dark shadow-sm border border-pastel-sky/40 whitespace-nowrap">
            🌴 Made in Noosa
          </div>
        </div>
      </div>
    </section>
  );
};
