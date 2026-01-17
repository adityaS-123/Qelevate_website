import { Link } from 'react-router-dom';
import { Instagram, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950/80 backdrop-blur-md border-t border-gray-800/50 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative container-lg py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/qelevate_logo.svg" 
                alt="QElevate" 
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-2xl font-bold gradient-text">QElevate</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
            </p>
          </div>

          {/* Quick Links */}
          <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="font-semibold text-lg mb-6 text-gray-100">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/home"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-pink-400 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-pink-500 group-hover:w-2 transition-all duration-300"></span>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-pink-400 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-pink-500 group-hover:w-2 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="fade-in-up" style={{animationDelay: '0.3s'}}>
            <h4 className="font-semibold text-lg mb-6 text-gray-100">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/qelevatellp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-gray-900/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-500 hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@Qelevate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-gray-900/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-red-400 hover:border-red-500 hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="h-px bg-linear-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Copyright with heart animation */}
        <div className="text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            QElevate LLP © {currentYear} • Made with
            <Heart size={16} className="text-red-500 animate-pulse" />
            for Healthcare Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
