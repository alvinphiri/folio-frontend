import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'AI Demo', path: '/ai-demo' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);


  const genericLinkClass = 'hover:text-indigo-400 transition';
  const activeLinkClass = 'text-indigo-400 font-semibold';

  return (
    <>
      {/* HAMBURGER BUTTON - Always visible on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="md:hidden fixed top-4 right-4 z-50 bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open main menu</span>
        {/* Icon toggles based on isOpen state */}
        {!isOpen ? (
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ) : (
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* NAVBAR CONTAINER - Toggles visibility on mobile */}
      <nav
        className={`bg-gray-900 shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } md:opacity-100 md:visible`}
      >
        {/* Desktop Menu (and mobile dropdown content) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end md:justify-start h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navLinks.map(({ name, path }) => (
                    <Link
                      key={path}
                      to={path}
                      className={`${genericLinkClass} ${
                        location.pathname === path ? activeLinkClass : 'text-white'
                      } px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Links - Part of the main nav block now */}
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                className={`${genericLinkClass} ${
                  location.pathname === path ? activeLinkClass : 'text-gray-300'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}