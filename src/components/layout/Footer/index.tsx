import { Twitter, Facebook, Instagram, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import tribuLogo from "../../../../public/images/Tribu Logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#2A332E] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Address */}
          <div className="space-y-6">
            <Image
              src={tribuLogo}
              alt="Tribu Hotel"
              width={150}
              height={80}
              className="mb-4"
            />
            <p className="text-sm leading-relaxed opacity-90">
              No 9 Jideofor Street, Thinkers Corner By Godfrey
              <br />
              Okoye University Enugu-Enugu State Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-[#C4A484] text-xl font-medium">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/rooms"
                className="text-sm hover:text-[#C4A484] transition-colors"
              >
                ALL ROOMS & SUITES
              </Link>
              <Link
                href="/gallery"
                className="text-sm hover:text-[#C4A484] transition-colors"
              >
                PHOTO GALLERY
              </Link>
              <Link
                href="/contact"
                className="text-sm hover:text-[#C4A484] transition-colors"
              >
                CONTACT
              </Link>
            </nav>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <Link
                href="#"
                className="p-2 border border-white/20 rounded-full hover:border-[#C4A484] hover:text-[#C4A484] transition-colors"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="p-2 border border-white/20 rounded-full hover:border-[#C4A484] hover:text-[#C4A484] transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="p-2 border border-white/20 rounded-full hover:border-[#C4A484] hover:text-[#C4A484] transition-colors"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-[#C4A484] text-xl font-medium">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-sm">+234 91 600 024 53</p>
              <p className="text-sm">+234 81 219 888 99</p>
            </div>

            {/* Email Subscription */}
            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Your Email Here"
                className="bg-white/10 text-sm px-4 py-2 flex-grow focus:outline-none focus:ring-1 focus:ring-[#C4A484]"
              />
              <button className="bg-[#C4A484] p-2 hover:bg-[#B39374] transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-sm text-white/60">
            ©2025 Tribu Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
