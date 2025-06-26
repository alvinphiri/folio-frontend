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

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex space-x-6 shadow-md">
      {navLinks.map(({ name, path }) => (
        <Link
          key={path}
          to={path}
          className={`hover:text-indigo-400 transition ${
            location.pathname === path ? 'text-indigo-400 font-semibold' : ''
          }`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}
