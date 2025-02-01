"use client";
import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ChevronUpIcon } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { useScrollTop } from "@/hooks";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const { scrollBtn, scrollTop } = useScrollTop();
  return (
    <section className="bg-gray-100 mx-auto w-full">
      <Toaster position="top-center" />
      <Header />
      {children}
      <Footer />
      <div ref={scrollBtn} onClick={scrollTop} className="scrollTop">
        <ChevronUpIcon className="text-white size-6" />
      </div>
    </section>
  );
};

export default AppLayout;
