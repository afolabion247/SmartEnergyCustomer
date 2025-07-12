import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Slash Your Utility Bills with{' '}
                <span className="text-green-600">AI-Powered</span> Smart Energy Optimization
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Get personalized insights, smart scheduling, and energy-saving tips to reduce your bills by up to{' '}
                <span className="font-semibold text-green-600">30%</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors duration-200 flex items-center justify-center gap-2">
                <span>✅</span>
                Get Started Free
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
                Watch Demo
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visuals */}
          <div className="relative">
            {/* Phone mockup with app screenshot */}
            <div className="relative mx-auto lg:mx-0 w-80 h-96">
              <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
                <div className="absolute inset-4 bg-white rounded-[2.5rem] overflow-hidden">
                  {/* App screenshot placeholder */}
                  <div className="h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">📱</div>
                      <div className="text-sm font-semibold">Smart Energy App</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bill reduction graph */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-xl p-4 border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-semibold text-gray-800">Bill Reduction</span>
              </div>
              <div className="flex items-end gap-1 h-16">
                <div className="w-4 bg-gray-300 rounded-t h-8"></div>
                <div className="w-4 bg-gray-300 rounded-t h-10"></div>
                <div className="w-4 bg-gray-300 rounded-t h-6"></div>
                <div className="w-4 bg-green-500 rounded-t h-4"></div>
                <div className="w-4 bg-green-500 rounded-t h-3"></div>
                <div className="w-4 bg-green-500 rounded-t h-2"></div>
              </div>
              <div className="text-xs text-gray-600 mt-1">-30% savings</div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">$127</div>
                <div className="text-xs text-gray-600">Average monthly savings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-800">50,000+</div>
            <div className="text-gray-600">Happy customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-800">$2.1M</div>
            <div className="text-gray-600">Total savings</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-800">4.9★</div>
            <div className="text-gray-600">Customer rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 