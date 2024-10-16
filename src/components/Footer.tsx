import React from "react";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ganit Tax</h3>
            <p>Expert tax solutions for individuals and businesses.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" /> (678) 388-9199
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" /> info@ganittax.com
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" /> 6065 Roswell Road, #450,
                Atlanta, GA 30328-4011
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-yellow-400 transition duration-300"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="hover:text-yellow-400 transition duration-300"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="hover:text-yellow-400 transition duration-300"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Ganit Tax. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
