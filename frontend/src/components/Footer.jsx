import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <p className="text-sm text-gray-400">
            We are a leading e-commerce platform, committed to providing the best shopping experience. Explore our wide range of products and services.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Email: support@ecommerce.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Main Street, City, Country</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/atharve-bute-7a051725a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="h-6 w-6"
              />
            </a>
            <a href="mailto:atharve.bute@gmail.com" className="text-gray-400 hover:text-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Gmail"
                className="h-6 w-6"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} E-commerce Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;