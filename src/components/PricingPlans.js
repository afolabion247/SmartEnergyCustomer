
import React from 'react';

const plans = [
  { name: 'Free', price: 0, features: ['Basic monitoring'], id: 'price_free_id' },
  { name: 'Standard', price: 9.99, features: ['Monitoring', 'Analytics'], id: 'price_standard_id' },
  { name: 'Premium', price: 19.99, features: ['Smart scheduling', 'Energy coach'], id: 'price_premium_id' },
  { name: 'Pro', price: 49.99, features: ['Multi-home', 'Solar optimization'], id: 'price_pro_id' },
];

const PricingPlans = () => {
  const handleSubscribe = async (priceId) => {
    const response = await fetch('http://localhost:4242/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId }),
    });
    const { url } = await response.json();
    window.location = url;
  };

  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Plans & Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {plans.map(plan => (
          <div key={plan.name} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-2xl font-bold mt-2">${plan.price}/mo</p>
            <ul className="mt-4 mb-6 text-left list-disc list-inside">
              {plan.features.map(feature => <li key={feature}>{feature}</li>)}
            </ul>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={() => handleSubscribe(plan.id)}
            >
              {plan.price === 0 ? 'Get Started Free' : 'Subscribe'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
