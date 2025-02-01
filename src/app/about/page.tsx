import Hero from "@/components/shared/Hero";
import React from "react";
import bg from "../../../public/images/about-bg.jpg";
import bg1 from "../../../public/images/about-tribu.jpg";
import Image from "next/image";
import StyledFonts from "@/components/shared/StyledFonts";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              veritatis magnam explicabo esse voluptatibus expedita impedit
              earum id error dolore.
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit hic soluta voluptas officiis exercitationem culpa?
              Aspernatur autem expedita accusamus labore voluptatibus quae
              numquam explicabo, totam dolores atque repudiandae ad aut, alias
              earum est rem laboriosam neque! Earum adipisci est beatae modi at
              explicabo nisi dolorem cupiditate sed vero illum, fuga, culpa ad
              ut velit? Rem.
            </p>
            <p className="text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              laborum assumenda aperiam ipsum iure alias? Dicta itaque magnam
              fugit deserunt harum animi tempore omnis minima, reprehenderit
              quae excepturi vitae consectetur quas eos repudiandae quo sapiente
              aspernatur praesentium fugiat molestiae voluptas?
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default About;
