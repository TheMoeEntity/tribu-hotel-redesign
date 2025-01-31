import Link from "next/link";
import React from "react";
import tribuLogo from "../../../../public/images/Tribu Logo.png";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="py-4 z-50 text-white absolute w-full left-0 top-0">
      <nav className="md:flex hidden  items-center justify-center">
        <Link href="/" className="mx-4">
          Home
        </Link>
        <Link href="/" className="mx-4">
          Rooms
        </Link>
        <Link href="#" className="mx-4">
          About
        </Link>
        <span className="mx-4 flex justify-center items-center w-20 h-20">
          <Image
            alt="Tribu logo"
            src={tribuLogo}
            priority={true}
            quality={100}
            className="object-cover w-full h-auto"
          />
        </span>
        <Link href="#" className="mx-4">
          Gallery
        </Link>
        <Link href="#" className="mx-4">
          Contact
        </Link>
        <Link href="#" className="mx-4">
          EN
        </Link>
      </nav>
    </header>
  );
};

export default Header;
