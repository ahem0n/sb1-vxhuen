import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "49",
      features: [
        "Up to 1,000 SKUs",
        "2 User accounts",
        "Basic reporting",
        "Email support",
        "Mobile app access"
      ]
    },
    {
      name: "Professional",
      price: "99",
      popular: true,
      features: [
        "Up to 10,000 SKUs",
        "10 User accounts",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "249",
      features: [
        "Unlimited SKUs",
        "Unlimited users",
        "Custom reporting",
        "24/7 phone support",
        "Dedicated account manager",
        "Custom development",
        "SLA guarantee"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-gray-600">Choose the plan that's right for your business</p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="ml-1 text-xl text-gray-500">/month</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 w-full py-3 px-4 rounded-md font-semibold ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} transition-colors`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}