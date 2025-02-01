"use client";
import Link from "next/link";
import React, { useState } from "react";
import tribuLogo from "../../../../public/images/Tribu Logo.png";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 z-50 text-white absolute w-full left-0 top-0">
      <div className="flex items-center justify-between px-4 md:px-8">
        {/* Logo - Always Centered on md+ Screens */}
        <span className="flex justify-center items-center w-10 h-10 lg:w-20 lg:h-20 md:hidden">
          <Image
            alt="Tribu logo"
            src={tribuLogo}
            priority={true}
            quality={100}
            className="object-cover w-full h-auto"
          />
        </span>

        {/* Desktop & Tablet Navigation (Centered from md onwards) */}
        <nav className="hidden md:flex items-center justify-center space-x-6 w-full">
          <Link href="/">Home</Link>
          <Link href="/rooms">Rooms</Link>
          <Link href="/about">About</Link>
          <span className="hidden md:flex justify-center items-center w-16 h-16 lg:w-20 lg:h-20">
            <Image
              alt="Tribu logo"
              src={tribuLogo}
              priority={true}
              quality={100}
              className="object-cover w-full h-auto"
            />
          </span>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
          <Link href="#">EN</Link>
        </nav>

        {/* Mobile Menu Button (Only on Small Screens) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation (Only on Small Screens) */}
      {isOpen && (
        <nav className="md:hidden mt-5 bg-white text-black shadow-md w-full text-center py-4 space-y-4">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="/rooms" className="block">
            Rooms
          </Link>
          <Link href="/about" className="block">
            About
          </Link>
          <Link href="/gallery" className="block">
            Gallery
          </Link>
          <Link href="/contact" className="block">
            Contact
          </Link>
          <Link href="#" className="block">
            EN
          </Link>
        </nav>
      )}
    </header>
  );
};
export default Header;
