import React from 'react';
import { Mail, MessageSquare, Send, MapPin, Phone, Clock } from 'lucide-react';
export const Contact = () => {
  return <section id="contact" className="py-20 bg-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-sm">
            <span className="text-sm font-medium text-green-400">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions or want to join our community? Reach out to us and
            we'll get back to you soon.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h3>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-green-500 transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-green-500 transition-colors" placeholder="Your email" />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-green-500 transition-colors" placeholder="What is this regarding?" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:border-green-500 transition-colors" placeholder="Your message"></textarea>
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all flex items-center">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-blue-500/10 border border-blue-500/20 mr-4">
                  <MapPin className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">
                    Location
                  </h4>
                  <p className="text-gray-300">
                    Tech Innovation Center
                    <br />
                    123 Startup Avenue
                    <br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-purple-500/10 border border-purple-500/20 mr-4">
                  <Mail className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Email</h4>
                  <p className="text-gray-300">
                    info@techclub.com
                    <br />
                    membership@techclub.com
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-green-500/10 border border-green-500/20 mr-4">
                  <Phone className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Phone</h4>
                  <p className="text-gray-300">
                    +1 (555) 123-4567
                    <br />
                    Mon-Fri, 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 mr-4">
                  <Clock className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">
                    Office Hours
                  </h4>
                  <p className="text-gray-300">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Weekend: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};