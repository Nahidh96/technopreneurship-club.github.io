import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
export const Events = () => {
  return <section id="events" className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm">
            <span className="text-sm font-medium text-indigo-400">
              Mark Your Calendar
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-indigo-400 to-blue-600 bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for our upcoming workshops, talks, and networking
            opportunities.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FeaturedEvent />
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => <EventCard key={index} {...event} />)}
          </div>
        </div>
        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-full border border-indigo-500/50 text-white font-medium text-lg hover:bg-indigo-500/10 transition-all flex items-center mx-auto">
            View All Events
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>;
};
const FeaturedEvent = () => {
  return <div className="relative rounded-2xl overflow-hidden border border-indigo-900/50 bg-gradient-to-br from-gray-900 to-black h-full">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
      <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Tech Summit 2023" className="absolute inset-0 h-full w-full object-cover" />
      <div className="relative z-20 p-8 h-full flex flex-col justify-end">
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-500/30 w-fit">
          <span className="text-sm font-medium text-indigo-300">
            Featured Event
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Annual Tech Entrepreneurship Summit
        </h3>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center text-gray-300">
            <Calendar className="h-5 w-5 mr-2 text-indigo-400" />
            <span>October 15-17, 2023</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Clock className="h-5 w-5 mr-2 text-indigo-400" />
            <span>9:00 AM - 5:00 PM</span>
          </div>
          <div className="flex items-center text-gray-300">
            <MapPin className="h-5 w-5 mr-2 text-indigo-400" />
            <span>Tech Innovation Center</span>
          </div>
        </div>
        <p className="text-gray-300 mb-6">
          Join industry leaders, investors, and innovators for three days of
          inspiring talks, workshops, and networking opportunities focused on
          the future of technology entrepreneurship.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all">
            Register Now
          </button>
          <button className="px-6 py-2 rounded-full border border-gray-600 text-gray-300 font-medium hover:border-indigo-500 hover:text-white transition-all flex items-center">
            Event Details
            <ExternalLink className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>;
};
const EventCard = ({
  title,
  date,
  time,
  location,
  description
}) => {
  return <div className="rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6 hover:border-indigo-900/50 transition-all duration-300">
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center text-gray-400">
          <Calendar className="h-4 w-4 mr-2 text-indigo-400" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-gray-400">
          <Clock className="h-4 w-4 mr-2 text-indigo-400" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-gray-400">
          <MapPin className="h-4 w-4 mr-2 text-indigo-400" />
          <span>{location}</span>
        </div>
      </div>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <button className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center text-sm">
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </button>
        <button className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm hover:bg-indigo-500/20 transition-all">
          RSVP
        </button>
      </div>
    </div>;
};
const upcomingEvents = [{
  title: 'AI for Entrepreneurs Workshop',
  date: 'September 5, 2023',
  time: '6:00 PM - 8:00 PM',
  location: 'Virtual',
  description: 'Learn how to leverage artificial intelligence to build innovative products and services for your startup.'
}, {
  title: 'Startup Funding Panel Discussion',
  date: 'September 12, 2023',
  time: '5:30 PM - 7:30 PM',
  location: 'Innovation Hub',
  description: "Hear from successful founders and investors about navigating the fundraising landscape in today's market."
}, {
  title: 'Web3 Technology Showcase',
  date: 'September 20, 2023',
  time: '4:00 PM - 7:00 PM',
  location: 'Tech Campus, Building A',
  description: 'Explore the latest developments in blockchain, NFTs, and decentralized applications with hands-on demos.'
}];