import Hero from "@/components/shared/Hero";
import React from "react";
import bg from "../../../public/images/room4.png";
import bg1 from "../../../public/images/room.jpg";
import bg2 from "../../../public/images/room2.jpg";
import bg3 from "../../../public/images/room3.jpg";
import Image from "next/image";
import StyledFonts from "@/components/shared/StyledFonts";
import { rooms } from "@/lib/constants";
import Link from "next/link";

const Rooms: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero bg={bg} page="Rooms" caption="Rooms & Suites" />
      <section className="px-5 py-10 xl:py-20 container">
        <h2 className="text-center mt-5 mb-8 text-3xl md:text-5xl">
          Luxury Rooms & Suites
        </h2>
        <p className="text-gray-600 text-center">
          Experience a haven of modern comfort and luxury at The Tribu Hotel Our
          selection of fine wines and premium spirits will tantalize your palate
          while you enjoy the city views from the terrace bars. Enjoy the finest
          cuisine and beverages in the restaurant or various bars within the
          hotel. Work it all off in our 24-hour Olympic sized swimming pool, or
          just relax in a sumptuous king size bed and order room service. A
          memorable selection of food prepared by our international chef awaits.
        </p>
        <div className="mt-20 w-full grid mb-20 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((x, i) => {
            return (
              <div
                key={i}
                className="overflow-hidden mx-2 max-w-screen-sm bg-white shadow"
              >
                <div className="relative">
                  <div className="absolute top-3 right-3 py-2 px-3 text-sm rounded-lg bg-[var(--greencal-primary)] text-white"></div>
                  <div className="w-full h-[250px] lg:h-[300px] xl:h-[310px]">
                    <Image
                      alt={x.name}
                      src={x.image}
                      fill
                      className="object-cover w-full h-auto"
                    />
                  </div>
                </div>

                <div className="px-5 py-7 flex xl:flex-row flex-col gap-5 xl:items-end">
                  <article className="flex-1 flex flex-col gap-3">
                    <h2 className="mb-3 whitespace-nowrap font-bold text-left text-3xl text-gray-700">
                      <StyledFonts
                        fontFamily="Playfair Display"
                        text={x.name}
                        color="black"
                      />
                    </h2>
                    <span className="flex gap-3">
                      <sup className="text-gray-600 text-xs">from</sup>
                      <h2 className="text-2xl">
                        <StyledFonts
                          fontFamily="Playfair Display"
                          text={`₦${x.price.toLocaleString()}/night`}
                          color="#C5A670"
                        />
                      </h2>
                    </span>
                    <div className="w-full flex gap-5 justify-between md:items-center flex-col md:flex-row">
                      <div>
                        {" "}
                        <small className="text-gray-600 text-xs font-medium">
                          {x.guests} guests | {x.amenities[0]}
                        </small>
                      </div>
                      <span>
                        <Link
                          href={"/rooms/" + x.slug}
                          className="text-white md:whitespace-nowrap text-center flex-1 w-fit py-3 px-4 text-sm bg-[#343935]"
                        >
                          BOOK NOW
                        </Link>
                      </span>
                    </div>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Rooms;
