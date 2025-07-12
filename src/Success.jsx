import React from 'react';

const Success = () => {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Smart Energy!
        </h1>
        <p className="text-gray-600 mb-6">
          Your subscription has been activated successfully. You'll receive a confirmation email shortly.
        </p>
        <div className="bg-green-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-green-800 mb-2">Next Steps:</h3>
          <ul className="text-sm text-green-700 text-left space-y-1">
            <li>• Check your email for setup instructions</li>
            <li>• Download our mobile app</li>
            <li>• Connect your energy account</li>
            <li>• Start saving on your bills!</li>
          </ul>
        </div>
        <a 
          href="/" 
          className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default Success; 