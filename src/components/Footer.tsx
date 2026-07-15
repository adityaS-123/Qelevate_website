import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-slate-950">
      <div className="container-lg py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="/qelevate_logo.svg"
              alt="QElevate"
              className="h-8 w-auto object-contain mb-5"
            />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Healthcare technology company developing infrastructure for the next generation of electronic health records.
            </p>
          </div>

          <div>
            <h4 className="text-gray-700 dark:text-gray-300 text-xs font-semibold tracking-widest uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 text-sm transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-700 dark:text-gray-300 text-xs font-semibold tracking-widest uppercase mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contactus@qelevate.in" className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 text-sm transition-colors duration-200">
                  contactus@qelevate.in
                </a>
              </li>
              {/* <li>
                <a href="https://www.instagram.com/qelevatellp/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 text-sm transition-colors duration-200">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@Qelevate" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 text-sm transition-colors duration-200">
                  YouTube
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-gray-400 dark:text-gray-600 text-sm">
            &copy; {currentYear} QElevate LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
