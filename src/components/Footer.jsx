import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-4 transition-opacity duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'}`}>
      <div className="container flex items-center justify-between mx-auto">
        <p className={`text-sm ${darkMode ? 'opacity-80' : 'opacity-100'}`}>
          &copy; {new Date().getFullYear()} Krishna's Blog. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="https://facebook.com/krishna_2004_28" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className={`text-xl hover:text-blue-500 ${darkMode ? 'hover:text-blue-300' : ''}`} />
          </a>
          <a href="https://instagram.com/krishna_2004_28" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className={`text-xl hover:text-pink-500 ${darkMode ? 'hover:text-pink-300' : ''}`} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className={`text-xl hover:text-blue-400 ${darkMode ? 'hover:text-blue-300' : ''}`} />
          </a>
          <a href="https://github.com/PRoBoT2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className={`text-xl hover:text-gray-500 ${darkMode ? 'hover:text-gray-400' : ''}`} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
