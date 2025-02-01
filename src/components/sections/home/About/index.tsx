"use client";
import React from "react";
import tree from "../../../../../public/images/tree-trimmed.jpg";
import Image from "next/image";
import StyledFonts from "@/components/shared/StyledFonts";
import BookingForm from "../Hero/BookingForm";

const About = () => {
  return (
    <>
      <div className="mt-10 lg:hidden">
        <BookingForm />
      </div>
      <section className="px-5 py-20 container md:py-16 ">
        <div className="flex flex-col lg:items-start lg:flex-row gap-10 space-y-4">
          <aside className="flex-1">
            <Image
              alt={"Image of tree"}
              src={tree}
              priority={true}
              quality={100}
              className="object-cover w-full h-auto"
            />
          </aside>
          <article className="flex flex-col gap-7 flex-1">
            <span className="bg-[#C19B6C] w-[1px] h-20"></span>
            <h2 className="text-xl md:text-2xl text-[#C19B6C] tracking-[10px] font-extralight">
              WELCOME TO
            </h2>
            <h2 className="font-semibold md:text-6xl text-3xl">
              <StyledFonts
                fontFamily="Playfair Display"
                text="Tribu Hotel"
                color="black"
              />
            </h2>
            <p className="text-gray-600">
              Whether you&#39;re visiting Enugu for work, play, or something in
              between, Tribu Hotel is a stylish base for your urban adventures
              and one of the finest hotel around Enugu.
            </p>
            <p className="text-gray-600">
              many rooms located in Enugu city not far from Akamu Ibiam
              International Airport Quick access to major government
              establishment and city commercial hubs including Enugu State
              Government House(Lion House) , WHO (UNICEF) Federal Secretariat,
              SPAR and ShopRite
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
