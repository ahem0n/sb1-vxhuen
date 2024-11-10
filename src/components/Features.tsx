import React from 'react';
import { Box, BarChart, Clock, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Box className="h-6 w-6 text-blue-600" />,
      title: "Real-time Tracking",
      description: "Monitor your inventory levels in real-time across multiple locations and warehouses."
    },
    {
      icon: <BarChart className="h-6 w-6 text-blue-600" />,
      title: "Advanced Analytics",
      description: "Make data-driven decisions with powerful reporting and analytics tools."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Automated Reordering",
      description: "Set up automatic reordering when stock levels reach predetermined thresholds."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Secure Access",
      description: "Role-based access control and enterprise-grade security for your data."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>
          <p className="mt-4 text-xl text-gray-600">Everything you need to manage your inventory efficiently</p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}