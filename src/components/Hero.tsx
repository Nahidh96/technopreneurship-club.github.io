import React from 'react';
import { ChevronDown, Rocket } from 'lucide-react';
export const Hero = () => {
  return <section className="relative h-screen w-full overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid-bg"></div>
      </div>
      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center md:text-left md:max-w-3xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
            <span className="text-sm font-medium text-blue-400">
              Innovate. Create. Disrupt.
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="block">Shaping the</span>
            <span className="block mt-1 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Future of Tech
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            Join a community of visionary entrepreneurs, developers, and
            innovators building tomorrow's technology today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all">
              Become a Member
            </button>
            <button className="px-8 py-3 rounded-full border border-gray-700 hover:border-blue-500 text-gray-200 font-medium text-lg transition-all flex items-center justify-center">
              <Rocket className="mr-2 h-5 w-5" />
              Explore Programs
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white">
            <span className="text-sm mb-2">Discover More</span>
            <ChevronDown className="h-6 w-6" />
          </a>
        </div>
      </div>
      {/* Stats floating panel */}
      <div className="hidden lg:block absolute bottom-20 right-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 shadow-2xl">
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              500+
            </div>
            <div className="text-sm text-gray-400 mt-1">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              50+
            </div>
            <div className="text-sm text-gray-400 mt-1">Startups Launched</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              $2M+
            </div>
            <div className="text-sm text-gray-400 mt-1">Funding Raised</div>
          </div>
        </div>
      </div>
    </section>;
};