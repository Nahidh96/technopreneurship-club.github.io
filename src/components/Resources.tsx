import React from 'react';
import { Book, Video, FileText, Download, ArrowRight, ExternalLink } from 'lucide-react';
export const Resources = () => {
  return <section id="resources" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
            <span className="text-sm font-medium text-cyan-400">
              Knowledge Base
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Entrepreneurship Resources
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Access our curated collection of resources to help you on your
            entrepreneurial journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ResourceCard icon={Book} title="Startup Guides" description="Comprehensive guides on ideation, validation, business planning, and funding for tech startups." items={['Business Model Canvas Template', 'Market Research Toolkit', 'Pitch Deck Guidelines', 'Funding Options Comparison']} color="cyan" />
          <ResourceCard icon={Video} title="Workshop Recordings" description="Recordings of our most popular workshops and presentations from industry experts." items={['Product-Market Fit Masterclass', 'Tech Stack Selection for Startups', 'Growth Hacking Strategies', 'AI Implementation for Beginners']} color="blue" />
          <ResourceCard icon={FileText} title="Technical Documentation" description="Technical resources, code samples, and implementation guides for various technologies." items={['API Integration Best Practices', 'Cloud Architecture Patterns', 'Mobile App Development Guide', 'Database Selection Framework']} color="purple" />
        </div>
        <div className="mt-16 p-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0 lg:mr-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Entrepreneur's Toolkit
              </h3>
              <p className="text-gray-300">
                Download our complete collection of templates, worksheets, and
                resources to jumpstart your entrepreneurial journey.
              </p>
            </div>
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center">
              <Download className="mr-2 h-5 w-5" />
              Download Toolkit
            </button>
          </div>
        </div>
      </div>
    </section>;
};
const ResourceCard = ({
  icon: Icon,
  title,
  description,
  items,
  color
}) => {
  const colorClasses = {
    cyan: 'border-cyan-900/50 hover:border-cyan-500/50 from-cyan-500/10',
    blue: 'border-blue-900/50 hover:border-blue-500/50 from-blue-500/10',
    purple: 'border-purple-900/50 hover:border-purple-500/50 from-purple-500/10'
  };
  const iconColorClasses = {
    cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    purple: 'text-purple-400 bg-purple-500/10 border-purple-500/20'
  };
  const linkColorClasses = {
    cyan: 'text-cyan-400 hover:text-cyan-300',
    blue: 'text-blue-400 hover:text-blue-300',
    purple: 'text-purple-400 hover:text-purple-300'
  };
  return <div className={`rounded-2xl border ${colorClasses[color]} bg-gradient-to-br ${colorClasses[color]} to-gray-900 p-8 transition-all duration-300`}>
      <div className={`p-3 rounded-xl ${iconColorClasses[color]} inline-block mb-6 border`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {items.map((item, index) => <li key={index} className="flex items-start">
            <span className={`inline-block w-1.5 h-1.5 rounded-full mt-2 mr-2 ${iconColorClasses[color].split(' ')[0]}`}></span>
            <span className="text-gray-300">{item}</span>
          </li>)}
      </ul>
      <a href="#" className={`flex items-center ${linkColorClasses[color]} transition-colors`}>
        View All Resources <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>;
};