// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-10">
            <div className="container mx-auto flex justify-between items-start">
                {/* Links Section */}
                <div>
                    <h5 className="text-xl font-bold mb-4">Useful Links</h5>
                    <ul className="space-y-3">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/case-studies" className="hover:underline">Case Studies</a></li>
                        <li><a href="/privacy-policy" className="hover:underline">Privacy policy</a></li>
                        <li><a href="/terms" className="hover:underline">Terms and condition</a></li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div className="w-1/3">
                    <h5 className="text-xl font-bold mb-4">Get industry insight and how to be secure in your inbox</h5>
                    <div className="flex mt-4">
                        <input type="email" placeholder="Enter your mail ID" className="p-2 rounded-l-lg flex-1 border-2 border-r-0 border-gray-400" />
                        <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-r-lg border-2 border-green-500 hover:border-green-600">Subscribe</button>
                    </div>
                </div>
            </div>

            {/* Brand Section */}
            <div className="text-center text-4xl font-bold mt-10">
                SecureMyOrg
            </div>
        </footer>
    );
};

export default Footer;
    