import React from 'react';
import { Code, Lightbulb, Users, Globe } from 'lucide-react';
export const About = () => {
  return <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About NEXUS
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            We're a collective of forward-thinking individuals dedicated to
            pushing the boundaries of technology and entrepreneurship.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-8 backdrop-blur-sm hover:border-blue-900/50 transition-all duration-300">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="p-3 mr-4 rounded-full bg-blue-500/10 border border-blue-500/20">
                <Lightbulb className="h-6 w-6 text-blue-400" />
              </div>
              Our Vision
            </h3>
            <p className="text-gray-300">
              To create a thriving ecosystem where innovation meets opportunity,
              empowering the next generation of tech entrepreneurs to solve
              global challenges through cutting-edge technology and bold ideas.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-8 backdrop-blur-sm hover:border-purple-900/50 transition-all duration-300">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-purple-500/10 rounded-full filter blur-3xl"></div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="p-3 mr-4 rounded-full bg-purple-500/10 border border-purple-500/20">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              Our Community
            </h3>
            <p className="text-gray-300">
              A diverse network of students, professionals, investors, and
              industry experts united by their passion for technology and
              entrepreneurship, collaborating to turn visionary ideas into
              reality.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-8 backdrop-blur-sm hover:border-indigo-900/50 transition-all duration-300">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="p-3 mr-4 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                <Code className="h-6 w-6 text-indigo-400" />
              </div>
              Our Approach
            </h3>
            <p className="text-gray-300">
              We combine hands-on learning, mentorship, and real-world projects
              to develop both technical skills and entrepreneurial mindsets,
              preparing our members to lead in the digital economy.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-8 backdrop-blur-sm hover:border-cyan-900/50 transition-all duration-300">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <div className="p-3 mr-4 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                <Globe className="h-6 w-6 text-cyan-400" />
              </div>
              Our Impact
            </h3>
            <p className="text-gray-300">
              From launching successful startups to developing innovative
              solutions for industry partners, our members are making meaningful
              contributions to the tech ecosystem locally and globally.
            </p>
          </div>
        </div>
      </div>
    </section>;
};