import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white/50 to-purple-50/50 backdrop-blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 mb-8">
            <span className="text-sm font-medium">Transforming Businesses Digitally</span>
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block mb-2">Transform Your Business with</span>
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Mindpik Technologies
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 sm:text-xl">
            Empowering businesses through innovative technology solutions. We turn your digital dreams into reality with cutting-edge expertise.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#contact" className="inline-flex items-center px-8 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-300">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#services" className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-indigo-600 font-medium border-2 border-indigo-600 hover:bg-indigo-50 transition-colors duration-300">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}