import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="bg-gray-100 mx-auto w-full">
      <Toaster position="top-center" />
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export default AppLayout;
