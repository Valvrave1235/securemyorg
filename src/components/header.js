// src/components/Header.js
import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <div className="bg-transparent sticky overflow-hidden h-24 flex items-center justify-between px-4">
            {/* Logo and Title */}
            <div className="flex items-center">
                <img src="/path-to-your-logo.png" alt="SecureMyOrg Logo" className="h-12" />
                <span className="text-white font-bold ml-2">SecureMyOrg</span>
            </div>

            {/* Call to Action Button */}
            <Link to="/contact-us" className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 ease-in-out">
                Talk to Us →
            </Link>
        </div>
    );
};

export default Header;
