import Hero from "@/components/shared/Hero";
import bg from "../../../public/images/about-bg.jpg";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <main className="flex flex-col pb-10 space-y-10 min-h-screen">
      <Hero bg={bg} page="contact" caption="Contact Us" />
      <section className="px-5 md:px-10 py-10 bg-[#EDEAE5] xl:py-20 container">
        <ContactForm />
      </section>
    </main>
  );
};

export default Contact;
