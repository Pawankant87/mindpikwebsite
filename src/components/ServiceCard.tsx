import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center transform transition-transform group-hover:scale-110">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}