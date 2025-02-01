import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="bg-gray-100 mx-auto w-full">
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export default AppLayout;
