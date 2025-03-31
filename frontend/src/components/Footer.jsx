import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About VN Events</h3>
            <p className="text-gray-400">
            Your one-stop solution for seamless event planning and management. Discover, book, and manage events effortlessly!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition">Events</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-gray-400" />
                <span className="text-gray-400">Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-gray-400" />
                <a href="tel:9940168951" className="text-gray-400 hover:text-white transition">
                  +91-99401-68951
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-gray-400" />
                <a href="mailto:nviswa192@gmail.com?subject=Inquiry&body=Hello" 
                   className="text-gray-400 hover:text-white transition">
                  nviswa192@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/__viswa__nathan__/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/viswanathan-rajasekar/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Viswanathan R. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
