import React from 'react';
import { Code, Globe, Database, Brain, Cpu, LayoutGrid, Palette, ShoppingCart, Smartphone, Search, Map, GitBranch } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Palette,
    title: "Web Design & Development",
    description: "Custom web solutions with stunning designs and powerful functionality for your digital presence."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "End-to-end e-commerce platforms that drive sales and deliver exceptional shopping experiences."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that engage users and drive business growth."
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description: "Comprehensive digital marketing strategies to improve visibility and drive targeted traffic."
  },
  {
    icon: Map,
    title: "GIS Solutions",
    description: "Geographic Information System solutions for spatial data management and analysis."
  },
  {
    icon: GitBranch,
    title: "Opensource Applications",
    description: "Custom solutions built on reliable open-source technologies for scalable applications."
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business requirements."
  },
  {
    icon: Globe,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for enhanced efficiency."
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Comprehensive data solutions for better business insights and decision-making."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions for your technology needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}