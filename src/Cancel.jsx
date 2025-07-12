import React from 'react';

const Cancel = () => {
  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4 text-center">
        <div className="text-6xl mb-4">❌</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Payment Cancelled
        </h1>
        <p className="text-gray-600 mb-6">
          Your payment was cancelled. No charges were made to your account.
        </p>
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-800 mb-2">Still Interested?</h3>
          <p className="text-sm text-blue-700">
            You can try again anytime, or contact our support team if you have any questions.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a 
            href="/" 
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
          >
            Try Again
          </a>
          <a 
            href="mailto:support@smartenergy.com" 
            className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cancel; 