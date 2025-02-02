"use client";

import { useEffect, useState } from "react";
import logo from "../../../public/images/Tribu Logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Loader = () => {
  const router = usePathname();
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 750);
  }, [router]);

  if (!show) return null;
  return (
    <div className="w-full bg-[#2a332efd] z-[9999999999999] mx-auto inset-0 flex items-center justify-center fixed top-0 h-full left-0 min-h-screen">
      <Image
        src={logo}
        alt="Greencal logo"
        quality={100}
        priority
        sizes={"100vw"}
        className="object-cover w-[50%] md:w-[23%] mx-auto animate-pulse h-auto "
      />
    </div>
  );
};

export default Loader;
