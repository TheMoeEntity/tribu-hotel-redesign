"use client";
import Link from "next/link";
import type React from "react";
import { useState } from "react";
import tribuLogo from "../../../../public/images/Tribu Logo.png";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useIs404 } from "@/hooks";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const is404 = useIs404();

  // Define the text color based on whether it's the 404 page or not
  const textColor = is404 ? "text-white" : "text-white";
  const position = is404 ? "" : "absolute";
  const bg = is404 ? "bg-[#2A332E]" : "bg-none";
  return (
    <header
      className={`py-4 z-50 ${textColor} ${position} ${bg} w-full left-0 top-0`}
    >
      <div className="flex items-center justify-between px-4 md:px-8">
        {/* Logo - Always Centered on md+ Screens */}
        <Link href="/">
          <span className="flex justify-center items-center w-10 h-10 lg:w-20 lg:h-20 md:hidden">
            <Image
              alt="Tribu logo"
              src={tribuLogo || "/placeholder.svg"}
              priority={true}
              quality={100}
              className="object-cover w-full h-auto"
            />
          </span>
        </Link>

        {/* Desktop & Tablet Navigation (Centered from md onwards) */}
        <nav
          className={`hidden md:flex items-center justify-center space-x-6 w-full ${textColor}`}
        >
          <Link href="/">Home</Link>
          <Link href="/rooms">Rooms</Link>
          <Link href="/about">About</Link>
          <Link href="/">
            <span className="hidden md:flex justify-center items-center w-16 h-16 lg:w-20 lg:h-20">
              <Image
                alt="Tribu logo"
                src={tribuLogo || "/placeholder.svg"}
                priority={true}
                quality={100}
                className="object-cover w-full h-auto"
              />
            </span>
          </Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
          <Link href="#">EN</Link>
        </nav>

        {/* Mobile Menu Button (Only on Small Screens) */}
        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation (Only on Small Screens) */}
      {isOpen && (
        <nav className="md:hidden mt-2 z-50 bg-white/95 text-[#b39476] shadow-md w-full text-center py-4 space-y-4">
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
