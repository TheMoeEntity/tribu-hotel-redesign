import React, { ReactNode } from "react";
import Header from "./Header";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="bg-gray-100 mx-auto w-full">
      <Header />
      {children}
    </section>
  );
};

export default AppLayout;
