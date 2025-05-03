import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <Link to="/" className="text-2xl font-bold">
        Daily Number Quest
      </Link>
    </nav>
  );
};

export default Navbar;

