import React from 'react';
import { Zap, Twitter, Linkedin, Facebook, Instagram, Github } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                NEXUS
              </span>
            </div>
            <p className="mt-4 text-gray-400">
              Building the next generation of tech entrepreneurs through
              innovation, education, and community.
            </p>
            <div className="mt-6 flex space-x-4">
              <SocialLink icon={Twitter} href="#" />
              <SocialLink icon={Linkedin} href="#" />
              <SocialLink icon={Facebook} href="#" />
              <SocialLink icon={Instagram} href="#" />
              <SocialLink icon={Github} href="#" />
            </div>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Programs</h3>
            <ul className="space-y-2">
              <FooterLink href="#features">Tech Workshops</FooterLink>
              <FooterLink href="#features">Startup Incubator</FooterLink>
              <FooterLink href="#features">Mentorship</FooterLink>
              <FooterLink href="#features">Networking Events</FooterLink>
              <FooterLink href="#features">Hackathons</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="#resources">Startup Guides</FooterLink>
              <FooterLink href="#resources">Workshop Recordings</FooterLink>
              <FooterLink href="#resources">Technical Documentation</FooterLink>
              <FooterLink href="#resources">Entrepreneur's Toolkit</FooterLink>
              <FooterLink href="#blog">Blog</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#team">Our Team</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
              <FooterLink href="#partners">Partners</FooterLink>
              <FooterLink href="#careers">Careers</FooterLink>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2023 NEXUS Tech Entrepreneurship Club. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
const SocialLink = ({
  icon: Icon,
  href
}) => {
  return <a href={href} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
      <Icon className="h-4 w-4 text-gray-300" />
    </a>;
};
const FooterLink = ({
  href,
  children
}) => {
  return <li>
      <a href={href} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
        {children}
      </a>
    </li>;
};