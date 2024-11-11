import React from 'react';
import { Users, Target, Lightbulb, Clock } from 'lucide-react';

const strengths = [
  {
    icon: Clock,
    title: "Customer Focus",
    description: "Our developers work within your time zone for real-time collaboration and full availability during your business hours."
  },
  {
    icon: Users,
    title: "Scalability & Support",
    description: "We work based on your objectives to bring the most value and quickest ROI with dedicated teams."
  },
  {
    icon: Target,
    title: "Vast Domain Experience",
    description: "Our experts carry domain experience to offer exceptional product engineering solutions."
  },
  {
    icon: Lightbulb,
    title: "High Quality Results",
    description: "Our primary focus is delivering outstanding results tailored to your individual needs."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Turning your business ideas into successful solutions
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="animate-slide-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h3>
            <p className="text-gray-600 mb-6">
              We are a technology-driven firm with a talented team of developers, data scientists, and consultants. Our management team brings extensive experience in the services industry, with combined expertise of more than ten years.
            </p>
            <p className="text-gray-600">
              Integrated from diverse fields of knowledge and activity, our core team empowers our strength to leverage our expertise and skills to automate your short and long-term business development and diversification needs.
            </p>
          </div>

          <div className="animate-slide-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Principles</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-indigo-600">Transparency</h4>
                <p className="text-gray-600">Complete transparency throughout project engagement</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-indigo-600">Quality</h4>
                <p className="text-gray-600">Enterprise-grade quality of processes and deliverables</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-indigo-600">Continuous Learning</h4>
                <p className="text-gray-600">Commitment to continuous learning and innovation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Strengths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
                  <strength.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{strength.title}</h4>
                <p className="text-gray-600">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}