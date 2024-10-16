import React from "react";
import { Link } from "react-router-dom";
import { Calculator } from "lucide-react";
import logo from "../ganittax.jpg";
const Header: React.FC = () => {
  return (
    <header className="bg-yellow-400 text-gray-800 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
          <img src={logo} alt="" className="w-32" />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-white transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-white transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-white transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
