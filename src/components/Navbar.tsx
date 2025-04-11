"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#06254b] z-50 py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-[150px]">
            <Image
              src="https://ext.same-assets.com/844291147/190227351.png"
              alt="GDG IGDTUW Logo"
              fill
              sizes="150px"
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-white hover:text-[#57bfcc]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-white hover:text-[#57bfcc]">
                About
              </Link>
            </li>
            <li>
              <Link href="/#aboutdev" className="text-white hover:text-[#57bfcc]">
                Devcation`25
              </Link>
            </li>
            <li>
              <Link href="/#features" className="text-white hover:text-[#57bfcc]">
                Timeline
              </Link>
            </li>
            <li>
              <Link href="/event" className="text-white hover:text-[#57bfcc]">
                Events
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="text-white hover:text-[#57bfcc] flex items-center"
              >
                More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 mt-2 w-40 bg-[#06254b] border border-[#2f64c8] rounded-md shadow-lg z-10">
                  <li>
                    <Link
                      href="/#tracks"
                      className="block px-4 py-2 text-white hover:bg-[#0a3469]"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Tracks
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#prizes"
                      className="block px-4 py-2 text-white hover:bg-[#0a3469]"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Prizes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#sponsors"
                      className="block px-4 py-2 text-white hover:bg-[#0a3469]"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Sponsors
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/#contact" className="text-white hover:text-[#57bfcc]">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Discord Link */}
        <Link
          href="https://discord.gg/eG4YP3gA48"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center justify-center bg-[#5865F2] text-white p-2 rounded-full"
        >
          <FaDiscord className="text-xl" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#06254b] border-t border-[#2f64c8] mt-2">
          <ul className="px-4 py-2">
            <li className="py-2">
              <Link
                href="/"
                className="block text-white hover:text-[#57bfcc]"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/#about"
                className="block text-white hover:text-[#57bfcc]"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/#aboutdev"
                className="block text-white hover:text-[#57bfcc]"
                onClick={() => setIsOpen(false)}
              >
                Devcation`25
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/#features"
                className="block text-white hover:text-[#57bfcc]"
                onClick={() => setIsOpen(false)}
              >
                Timeline
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/event"
                className="block text-white hover:text-[#57bfcc]"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
            </li>
            <li className="py-2">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-white hover:text-[#57bfcc] w-full"
              >
                More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="pl-4 mt-2 border-l border-[#2f64c8]">
                  <li className="py-2">
                    <Link
                      href="/#tracks"
                      className="block text-white hover:text-[#57bfcc]"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      Tracks
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="/#prizes"
                      className="block text-white hover:text-[#57bfcc]"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      Prizes
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      href="/#sponsors"
                      className="block text-white hover:text-[#57bfcc]"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      Sponsors
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="py-2">
              <Link
                href="/#contact"
                className="block text-white hover:text-[#57bfcc]"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="https://discord.gg/eG4YP3gA48"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-[#57bfcc]"
                onClick={() => setIsOpen(false)}
              >
                <FaDiscord className="mr-2" />
                Join Discord
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
