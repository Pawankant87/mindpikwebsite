import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-xl text-gray-600">Get in touch with our team</p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center transform transition-transform group-hover:scale-110">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <span className="text-gray-600 group-hover:text-indigo-600 transition-colors">contact@mindpik.com</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center transform transition-transform group-hover:scale-110">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <span className="text-gray-600 group-hover:text-indigo-600 transition-colors">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center transform transition-transform group-hover:scale-110">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span className="text-gray-600 group-hover:text-indigo-600 transition-colors">123 Tech Street, Innovation City, 12345</span>
              </div>
            </div>
          </div>

          <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows={4} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}