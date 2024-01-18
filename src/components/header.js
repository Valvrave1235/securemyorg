// src/components/Header.js

import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { motion, useAnimation } from "framer-motion";

import Arrow from "../assets/arrow_header.svg";
import Logo from "../assets/logo_full.svg";
import { StaticImage } from "gatsby-plugin-image";
import { Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSecondMenuOpen, setIsSecondMenuOpen] = useState(false);

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



  const toggleMenu = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("clicked");
    setIsMenuOpen(!isMenuOpen);

    console.log("Current menu state:", isMenuOpen);
  };
  const secondToggleMenu = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("clicked");
    setIsSecondMenuOpen(!isSecondMenuOpen);
    console.log("Current menu state:", isSecondMenuOpen);
  };


  console.log("Current menu state:", isMenuOpen); // This will log the state change

  return (
    <header className={`md:max-w-6xl  mx-auto ${isScrolled ? " lg:max-w-7xl " : ""
          }`}>
      <div className={`absolute md:hidden z-50 w-full ${isMenuOpen ? "bg-stone-950" : ""} top-4 max-w-6xl  lg:max-w-7xl mx-auto px-4 py-2 flex justify-between items-center`}>
        {/* Logo and Title */}
        <Link to="/">
          <Logo className="h-12" aria-label="SecureMyOrg Logo" />
        </Link>
        {/* Mobile Menu Button */}
        {/* Open Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isMenuOpen ? <XIcon className='w-6 h-6' /> : <MenuIcon className='w-6 h-6' />}
        </button>

      </div>

      {/* Mobile Menu */}
      <Transition
        show={isMenuOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        className="md:hidden absolute  top-12 w-full z-50"
      >
        <div className="absolute  top-full text-center left-0 w-full justify-center items-center flex flex-col gap-4 py-6 px-4 bg-stone-950 shadow-md z-50 pb-12">
          <Link to="/pricing" className="flex w-full hover:border border-green-600 rounded-xl justify-center items-center  px-4 py-2 text-white hover:bg-gray-700">Pricing</Link>
          <Link to="/contact" className="flex w-full hover:border border-green-600 rounded-xl justify-center items-center  px-4 py-2 text-white hover:bg-gray-700">Talk to us</Link>
          {/* Add other links as needed */}
        </div>
      </Transition>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={controls}
        className={`fixed md:hidden w-full z-50 top-4 ${isScrolled ? 'bg-stone-950' : 'bg-transparent'}`}
      >
        <div className="max-w-6xl  lg:max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          {/* Logo and Title */}
          <Link to="/">
            <Logo className="h-12" aria-label="SecureMyOrg Logo" />
          </Link>
          {/* Mobile Menu Button */}
          <button onClick={secondToggleMenu} className="md:hidden text-white">
            {isSecondMenuOpen ? <XIcon className='w-6 h-6' /> : <MenuIcon className='w-6 h-6' />}
          </button>
        </div>

        {/* Mobile Menu */}
        <Transition
          show={isSecondMenuOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          className="md:hidden"
        >
          <div className="absolute top-full text-center left-0 w-full justify-center items-center flex flex-col gap-4 py-6 px-4 bg-stone-950 shadow-md z-50">
            <Link to="/pricing" className="flex w-full hover:border border-green-600 rounded-xl justify-center items-center  px-4 py-2 text-white hover:bg-gray-700">Pricing</Link>
            <Link to="/contact" className="flex w-full hover:border border-green-600 rounded-xl justify-center items-center  px-4 py-2 text-white hover:bg-gray-700">Talk to us</Link>
            {/* Add other links as needed */}
          </div>
        </Transition>
      </motion.header>

      <header className="bg-transparent absolute top-0 w-full max-w-6xl mx-auto overflow-hidden py-4 pt-8 rounded-xl  md:flex items-center justify-between px-4 z-50 hidden">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center opacity-100">
          <StaticImage
            src="../images/logo.png"
            alt="SecureMyOrg Logo"
            className="w-[12rem] h-auto"
          />
          {/* <Logo className="h-12" /> */}
          {/* <span className="text-white font-bold ml-2">SecureMyOrg</span> */}
        </Link>

        {/* Call to Action Button */}
       <div className="flex gap-2">
          <Link
            to="/pricing"
            className="bg-transparent text-white py-2 px-4 rounded-full  flex  gap-2 font-semibold hover:bg-green-700 transition duration-300 ease-in-out items-center justify-center w-fit "
          >
            <span>Pricing </span>
          </Link>
          <Link
            href="https://cal.com/securemyorg/firstmeet"
            className="bg-transparent text-white py-3 px-6 rounded-xl  flex  gap-2 border-2 font-semibold hover:bg-green-700 transition duration-300 ease-in-out items-center justify-center border border-[#09de4c] w-fit "
          >
            <span>Talk to Us </span>
            {/* <Arrow className="h-8" /> */}
          </Link>
       </div>
      </header>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 ${isScrolled ? "bg-stone-800" : "bg-transparent"
          }`}
      >
        <header className="bg-[#19191B]/90 fixed w-full max-w-6xl  lg:max-w-7xl top-4  overflow-hidden py-4 px-2 rounded-xl  md:flex items-center justify-between px-4 z-50 hidden">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center opacity-100">
            <StaticImage
              src="../images/logo.png"
              alt="SecureMyOrg Logo"
              className="w-[12rem] h-auto"
            />
            {/* <Logo className="h-12" /> */}
            {/* <span className="text-white font-bold ml-2">SecureMyOrg</span> */}
          </Link>

          {/* Call to Action Button */}
          <div className="flex gap-2">
            <Link
              to="/pricing"
              className="bg-transparent text-white py-2 px-4 rounded-full  flex  gap-2 font-semibold hover:bg-green-700 transition duration-300 ease-in-out items-center justify-center w-fit "
            >
              <span>Pricing </span>
            </Link>
            <a
              href="https://cal.com/securemyorg/firstmeet"
              className="bg-transparent text-white py-3 px-6 rounded-xl  flex  gap-2 border-2 font-semibold hover:bg-green-700 transition duration-300 ease-in-out items-center justify-center border border-[#09de4c] w-fit "
            >
              <span>Talk to Us </span>
              {/* <Arrow className="h-8" /> */}
            </a>
        </div>
        </header>
      </motion.header>
    </header>
  );
};

export default Header;
