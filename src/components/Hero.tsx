import React from 'react';
import { ArrowRight, BarChart2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Transform Your Inventory Management
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Streamline operations, reduce costs, and boost efficiency with our powerful inventory management solution.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-blue-50 transition-colors">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-white/10 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <BarChart2 className="h-12 w-12 text-blue-600 mb-4" />
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}