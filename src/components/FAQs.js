import React, { useState } from 'react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How much can I save?',
      answer: 'Users typically save between 15–30% on their bills depending on their habits.'
    },
    {
      question: 'Do I need extra devices?',
      answer: 'No hardware is required to get started; you can enhance savings by connecting smart plugs or solar data.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, cancel or change plans anytime in your customer portal.'
    },
    {
      question: 'How does the smart scheduling work?',
      answer: 'Our AI analyzes your energy usage patterns and automatically schedules high-power appliances to run during off-peak hours when electricity rates are lower.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use bank-level encryption to protect your energy data. Your privacy is our top priority, and we never share your information with third parties.'
    },
    {
      question: 'What if I have solar panels?',
      answer: 'Perfect! Our app integrates seamlessly with solar systems to optimize your energy consumption and maximize your solar savings.'
    },
    {
      question: 'How long does setup take?',
      answer: 'Setup takes just 5 minutes. Simply connect your account, and our AI will start analyzing your energy patterns immediately.'
    },
    {
      question: 'Do you offer customer support?',
      answer: 'Yes, we provide 24/7 customer support via chat, email, and phone. Our energy experts are here to help you maximize your savings.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Smart Energy optimization
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <span className={`text-gray-500 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our energy experts are here to help you get the most out of your Smart Energy experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200">
              Contact Support
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
              Live Chat
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">5 min</div>
            <div className="text-gray-600">Average setup time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs; 