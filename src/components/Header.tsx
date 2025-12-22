import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-950/40 border-b border-gray-800/50">
      <nav className="container-lg flex justify-between items-center py-4">
        {/* Logo with animation */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-gray-950 px-4 py-2 rounded-lg flex items-center gap-3">
              <img 
                src="/qelevate_logo.svg" 
                alt="QElevate" 
                className="w-20 h-17 object-contain"
              />
              <span className="text-2xl font-bold gradient-text"></span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            to="/home"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/healthcare-professional-consultancy"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group"
          >
            Healthcare
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/qhealth"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
          >
            QHealth
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/qsleep"
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 relative group"
          >
            QSleep
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/longevity"
            className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 relative group"
          >
            Longevity
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-pink-400 transition-colors duration-300 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-orange-400 transition-colors duration-300 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/contact"
            className="btn-primary"
          >
            Request Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass border-t border-gray-800/50 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="container-lg flex flex-col gap-4 py-4">
            <Link
              to="/home"
              className="text-gray-300 hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/healthcare-professional-consultancy"
              className="text-gray-300 hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Healthcare Consultancy
            </Link>
            <Link
              to="/qhealth"
              className="text-gray-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              QHealth
            </Link>
            <Link
              to="/qsleep"
              className="text-gray-300 hover:text-indigo-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              QSleep
            </Link>
            <Link
              to="/longevity"
              className="text-gray-300 hover:text-emerald-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Longevity
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-pink-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="btn-primary inline-block text-center"
              onClick={() => setIsOpen(false)}
            >
              Request Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
