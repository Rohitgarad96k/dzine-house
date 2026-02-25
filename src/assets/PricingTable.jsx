import React from 'react';

const pricingTiers = [
  {
    name: 'Basic',
    price: '₹1500',
    interval: '/ page',
    description: 'Perfect for fast, simple promotional needs.',
    features: [
      '1 Unique Flyer Option',
      'Up to A4 Size',
      'Assigned to Jr. Designer',
      '2 Days Delivery',
      'Unlimited Revisions'
    ],
    buttonText: 'Select Basic',
    highlighted: false,
  },
  {
    name: 'Standard',
    price: '₹2000',
    interval: '/ page',
    description: 'Ideal for established businesses and professional branding.',
    features: [
      '2 Unique Flyer Options',
      'Up to A4 Size',
      'Assigned to Sr. Designer',
      'Royalty Free Images',
      '3 Days Delivery'
    ],
    buttonText: 'Select Standard',
    highlighted: true,
  },
  {
    name: 'Premium',
    price: 'Custom',
    interval: '',
    description: 'Bespoke creativity tailored exclusively for your unique vision.',
    features: [
      'Multiple Unique Options',
      'Content Suggestions',
      'Assigned to Visualiser',
      'Premium Stock Images',
      '4 Days Delivery'
    ],
    buttonText: 'Get a Quote',
    highlighted: false,
  },
];

export default function PricingTable() {
  const handleCheckout = (tier) => {
    // Payment gateway integration point
    console.log(`Initiating checkout for ${tier.name} at ${tier.price}`);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">Pricing</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Custom design, no templates.
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Transparent pricing with unlimited revisions during the project duration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`relative flex flex-col p-8 bg-white rounded-2xl shadow-sm border ${
                tier.highlighted ? 'border-indigo-600 shadow-xl md:scale-105 z-10' : 'border-gray-200'
              } transition-transform duration-300`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 inset-x-0 flex justify-center -mt-4">
                  <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-2 text-gray-500 text-sm">{tier.description}</p>
              </div>

              <div className="mb-6 flex items-baseline text-5xl font-extrabold text-gray-900">
                {tier.price}
                <span className="ml-1 text-xl font-medium text-gray-500">{tier.interval}</span>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleCheckout(tier)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                  tier.highlighted 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                }`}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}