import React from 'react';
import { Linkedin, Twitter, Globe } from 'lucide-react';
export const Team = () => {
  return <section id="team" className="py-20 bg-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
            <span className="text-sm font-medium text-purple-400">
              Meet The Team
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
            Our Leadership
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            A diverse group of innovators, entrepreneurs, and tech enthusiasts
            dedicated to fostering the next generation of tech leaders.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => <TeamMember key={index} {...member} />)}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm">
            <p className="text-gray-300">
              Interested in joining our leadership team?
              <a href="#contact" className="ml-2 text-purple-400 hover:text-purple-300 transition-colors">
                Get in touch
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>;
};
const TeamMember = ({
  name,
  role,
  image,
  bio,
  social
}) => {
  return <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black overflow-hidden hover:border-purple-900/50 transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-purple-400 mb-4">{role}</p>
        <p className="text-gray-300 text-sm mb-4">{bio}</p>
        <div className="flex space-x-3">
          {social.linkedin && <a href={social.linkedin} className="p-2 rounded-full bg-gray-800 hover:bg-purple-900/50 transition-colors">
              <Linkedin className="h-4 w-4 text-gray-300" />
            </a>}
          {social.twitter && <a href={social.twitter} className="p-2 rounded-full bg-gray-800 hover:bg-blue-900/50 transition-colors">
              <Twitter className="h-4 w-4 text-gray-300" />
            </a>}
          {social.website && <a href={social.website} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <Globe className="h-4 w-4 text-gray-300" />
            </a>}
        </div>
      </div>
    </div>;
};
const teamMembers = [{
  name: 'Alexandra Chen',
  role: 'President',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
  bio: 'Serial entrepreneur with 10+ years of experience in tech startups and a passion for mentoring young entrepreneurs.',
  social: {
    linkedin: '#',
    twitter: '#',
    website: '#'
  }
}, {
  name: 'Marcus Johnson',
  role: 'VP of Technology',
  image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
  bio: 'Full-stack developer and AI researcher with a background in developing innovative solutions for complex problems.',
  social: {
    linkedin: '#',
    twitter: '#'
  }
}, {
  name: 'Sophia Rodriguez',
  role: 'VP of Operations',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80',
  bio: 'Strategic planner with expertise in scaling startups and building efficient organizational processes.',
  social: {
    linkedin: '#',
    website: '#'
  }
}, {
  name: 'David Park',
  role: 'VP of Partnerships',
  image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1148&q=80',
  bio: 'Former VC with extensive network in the tech industry and a track record of connecting startups with investors.',
  social: {
    linkedin: '#',
    twitter: '#'
  }
}];