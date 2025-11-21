import React from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  return (
    // Outer container: Fixed position at the top, full width, high z-index
    // backdrop-blur: Optional, adds a modern translucent effect
    <nav className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          
          {/* Navigation Links Container */}
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                // Styling for each link
                className="px-3 py-2 rounded-md text-sm font-medium 
                           text-gray-300 hover:bg-gray-700 hover:text-white 
                           transition duration-150 ease-in-out"
              >
                {item.name}
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;