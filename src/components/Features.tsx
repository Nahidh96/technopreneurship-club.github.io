import React from 'react';
import { Code, GraduationCap, LightbulbIcon, Users, Briefcase, Award, Trophy, ArrowRight } from 'lucide-react';
export const Features = () => {
  return <section id="features" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
            <span className="text-sm font-medium text-blue-400">
              What We Offer
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Our Programs & Initiatives
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive resources and opportunities designed to nurture tech
            talent and entrepreneurial ambition.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => <ProgramCard key={index} {...program} />)}
        </div>
        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center mx-auto">
            Explore All Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>;
};
const ProgramCard = ({
  icon: Icon,
  title,
  description,
  gradient
}) => {
  return <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-8 backdrop-blur-sm hover:border-blue-900/50 transition-all duration-300 group">
      <div className={`absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 ${gradient} rounded-full filter blur-3xl opacity-40 group-hover:opacity-60 transition-opacity`}></div>
      <div className={`p-4 rounded-2xl ${gradient.replace('bg-', 'bg-opacity-10 ')} mb-6 inline-block`}>
        <Icon className={`h-8 w-8 ${gradient.replace('bg-', 'text-')}`} />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
      <div className="mt-6">
        <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>;
};
const programs = [{
  icon: Code,
  title: 'Tech Workshops',
  description: 'Hands-on workshops covering cutting-edge technologies from AI and machine learning to blockchain and web development.',
  gradient: 'bg-blue-500'
}, {
  icon: LightbulbIcon,
  title: 'Startup Incubator',
  description: 'A structured program to transform your idea into a viable business with mentorship, resources, and funding opportunities.',
  gradient: 'bg-purple-500'
}, {
  icon: Users,
  title: 'Networking Events',
  description: 'Regular meetups with industry professionals, investors, and fellow entrepreneurs to build valuable connections.',
  gradient: 'bg-indigo-500'
}, {
  icon: GraduationCap,
  title: 'Mentorship Program',
  description: 'One-on-one guidance from experienced entrepreneurs and industry experts to accelerate your personal and professional growth.',
  gradient: 'bg-cyan-500'
}, {
  icon: Briefcase,
  title: 'Industry Projects',
  description: 'Collaborate with leading tech companies on real-world projects to gain practical experience and industry exposure.',
  gradient: 'bg-teal-500'
}, {
  icon: Trophy,
  title: 'Hackathons & Competitions',
  description: 'Regular challenges to test your skills, innovate under pressure, and win exciting prizes and recognition.',
  gradient: 'bg-green-500'
}];