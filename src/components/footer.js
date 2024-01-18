// src/components/Footer.js
import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from 'gatsby';

const Footer = () => {
    return (
        <footer className="bg-[#19191B]  text-white p-10">
            <div className="md:max-w-screen-lg  lg:max-w-screen-xl px-12 mx-auto  flex flex-col md:flex-row justify-between items-start">
                {/* Links Section */}
                <div className='py-12 md:py-0'>
                    <h5 className="text-xl font-bold mb-4">Useful Links</h5>
                    <ul className="space-y-3">
                        <li>
                            <Link to="/" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link to="/pricing" className="hover:underline">Pricing</Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy" className="hover:underline">Privacy policy</Link>
                        </li>
                        <li>
                            <Link to="/terms" className="hover:underline">Terms and condition</Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div className="md:w-1/3">
                    <h5 className="text-xl font-bold mb-4">Get industry insight and how to be secure in your inbox</h5>
                    <div className="flex mt-4">
                        <Input type="email" placeholder="Enter your mail ID" className="p-2 rounded-l-xl flex-1 border-2 border-r-0 border-gray-400 bg-white text-stone-950 " />
                        <Button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-r-lg border-2 border-green-500 hover:border-green-600">Subscribe</Button>
                    </div>
                    <div className='flex flex-col gap-1 pt-8'>
                        <h3 className='font-bold m-0'>Adrress</h3>
                        <p>Bengaluru, 560102 ,Karnataka, India</p>
                    </div>
                </div>
            </div>

            {/* Brand Section */}
            {/* <div className="text-center text-4xl font-bold mt-10">
                SecureMyOrg
            </div> */}
        </footer>
    );
};

export default Footer;
