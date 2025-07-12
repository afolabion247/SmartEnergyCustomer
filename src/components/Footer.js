import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-green-400 mb-2">
                Smart Energy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Transform your home into a smart energy hub with AI-powered optimization. 
                Monitor, analyze, and save on your energy consumption with cutting-edge technology.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Contact</h4>
              <div className="flex items-center gap-2 text-gray-300">
                <span>📧</span>
                <a 
                  href="mailto:support@smartenergy.com" 
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  support@smartenergy.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-lg hover:bg-green-500 transition-colors duration-200"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Smart Energy. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Made with ❤️ for a greener future</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 