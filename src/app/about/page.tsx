import Hero from "@/components/shared/Hero";
import React from "react";
import bg from "../../../public/images/about-bg.jpg";
import bg1 from "../../../public/images/about-tribu.jpg";
import Image from "next/image";
import StyledFonts from "@/components/shared/StyledFonts";
import Discover from "@/components/shared/Discover";
import FAQSection from "./FAQSection";

const About: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero bg={bg} page="about" caption="About Us" />
      <section className="px-5 py-10 xl:py-20 container">
        <div className="flex flex-col lg:items-center lg:flex-row gap-0 space-y-10">
          <aside className="flex-1">
            <Image
              alt={"Image of tree"}
              src={bg1}
              priority={true}
              quality={100}
              className="object-cover w-full h-auto"
            />
          </aside>
          <article className="flex bg-gray-100 lg:-ml-40 p-0 md:p-10 flex-col gap-7 flex-1">
            <h2 className="text-xl md:text-2xl text-[#C19B6C] tracking-[10px] font-extralight">
              WHO WE ARE
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
            <p className="text-gray-600">
              Inside the hotel, you&#39;ll find everything you need for a
              memorable stay. The decor, with high ceilings, modern furnishings,
              and beautiful wood works. The guest rooms are particularly
              appealing, complete with luxurious finishes, tasteful and elegant,
              marble bathrooms, and inspiring city views.
            </p>
          </article>
        </div>
      </section>
      <section className="grid mx-auto place-items-center grid-cols-1 bg-[#343935] py-20 px-5 text-white w-full justify-center md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl md:text-7xl text-center">
            <StyledFonts
              fontFamily="Playfair Display"
              text="35"
              color="#C5A670"
            />
          </h1>
          <span className="text-2xl lg:text-4xl">Rooms</span>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl md:text-7xl text-center">
            <StyledFonts
              fontFamily="Playfair Display"
              text="50+"
              color="#C5A670"
            />
          </h1>
          <span className="text-2xl lg:text-4xl text-center">
            Staff at your Service
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl md:text-7xl text-center">
            <StyledFonts
              fontFamily="Playfair Display"
              text="6"
              color="#C5A670"
            />
          </h1>
          <span className="text-2xl lg:text-4xl">Facilities</span>
        </div>
      </section>
      <section className="px-5 py-10 xl:py-20 container">
        <FAQSection />
      </section>
      <Discover />
    </main>
  );
};

export default About;
