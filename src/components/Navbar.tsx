import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <Zap className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  NEXUS
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#features">Programs</NavLink>
              <NavLink href="#events">Events</NavLink>
              <NavLink href="#team">Team</NavLink>
              <NavLink href="#resources">Resources</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                Join Now
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#features">Programs</MobileNavLink>
            <MobileNavLink href="#events">Events</MobileNavLink>
            <MobileNavLink href="#team">Team</MobileNavLink>
            <MobileNavLink href="#resources">Resources</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
            <div className="pt-2">
              <button className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all">
                Join Now
              </button>
            </div>
          </div>
        </div>}
    </nav>;
};
const NavLink = ({
  href,
  children
}) => {
  return <a href={href} className="text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300">
      {children}
    </a>;
};
const MobileNavLink = ({
  href,
  children
}) => {
  return <a href={href} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md">
      {children}
    </a>;
};