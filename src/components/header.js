// src/components/Header.js

import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { motion, useAnimation } from "framer-motion";

import Arrow from "../assets/arrow_header.svg";
import Logo from "../assets/logo_full.svg";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !isScrolled) {
        setIsScrolled(true);
        controls.start({ y: 0, opacity: 1 });
      } else if (window.scrollY <= 50 && isScrolled) {
        setIsScrolled(false);
        controls.start({ y: -100, opacity: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, isScrolled]);

  return (
    <header>
      <header className=" fixed w-full max-w-screen-lg top-0 overflow-hidden h-24 flex md:hidden items-center justify-between px-4 z-50">
        {/* Logo and Title */}
        <div className="flex items-center">
          {/* <StaticImage src="/path-to-your-logo.png" alt="SecureMyOrg Logo" className="h-12" /> */}
          <Logo className="h-12" />
          {/* <span className="text-white font-bold ml-2">SecureMyOrg</span> */}
        </div>

        {/* Call to Action Button */}
        <Link
          to="/contact-us"
          className="bg-transparent text-white py-2 px-4 rounded-full  flex  gap-2 border-2 font-semibold hover:bg-green-700 transition duration-300 ease-in-out items-center justify-center border-green-600 w-fit "
        >
          <span>Talk to Us </span>
          <Arrow className="h-8" />
        </Link>
      </header>

      <header className="bg-transparent absolute top-0 w-full max-w-screen-lg  overflow-hidden py-4 rounded-xl  md:flex items-center justify-between px-4 z-50 hidden">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center opacity-100">
          <StaticImage
            src="../images/logo.png"
            alt="SecureMyOrg Logo"
            className=""
          />
          {/* <Logo className="h-12" /> */}
          {/* <span className="text-white font-bold ml-2">SecureMyOrg</span> */}
        </Link>

        {/* Call to Action Button */}
        <Link
          to="/contact-us"
          className="bg-transparent text-white py-2 px-4 rounded-full  flex  gap-2 border-2 font-semibold hover:bg-green-700 transition duration-300 ease-in-out items-center justify-center border border-green-600 w-fit "
        >
          <span>Talk to Us </span>
          <Arrow className="h-8" />
        </Link>
      </header>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 ${
          isScrolled ? "bg-stone-800" : "bg-transparent"
        }`}
      >
        <header className="bg-[#19191B]/90 fixed w-full max-w-screen-lg top-4  overflow-hidden py-4 px-2 rounded-xl  md:flex items-center justify-between px-4 z-50 hidden">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center opacity-100">
            <StaticImage
              src="../images/logo.png"
              alt="SecureMyOrg Logo"
              className=""
            />
            {/* <Logo className="h-12" /> */}
            {/* <span className="text-white font-bold ml-2">SecureMyOrg</span> */}
          </Link>

          {/* Call to Action Button */}
          <Link
            to="/contact-us"
            className="bg-transparent text-white py-2 px-4 rounded-full  flex  gap-2 border-2 font-semibold hover:bg-green-700 transition duration-300 ease-in-out items-center justify-center border border-green-600 w-fit "
          >
            <span>Talk to Us </span>
            <Arrow className="h-8" />
          </Link>
        </header>
      </motion.header>
    </header>
  );
};

export default Header;
