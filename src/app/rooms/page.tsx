import Hero from "@/components/shared/Hero";
import React from "react";
import bg from "../../../public/images/room4.png";
import bg1 from "../../../public/images/room.jpg";
import bg2 from "../../../public/images/room2.jpg";
import bg3 from "../../../public/images/room3.jpg";
import Image from "next/image";
import StyledFonts from "@/components/shared/StyledFonts";

const Rooms: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero bg={bg} page="Rooms" caption="Rooms & Suites" />
      <section className="px-5 py-10 md:py-20 container">
        <p className="text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse in modi
          dolor blanditiis et magni, vel consequatur. Illo dolorum beatae eius
          qui tempora deleniti corporis! Error, a iusto. Placeat aliquid eius
          similique quasi, iste autem facere reprehenderit fugit tempore! Error
          omnis laboriosam fuga repellendus impedit nihil modi. Sint natus
          itaque voluptatem ab maiores aliquid saepe aliquam at quaerat.
          Consequatur repudiandae laudantium mollitia soluta deserunt sed eum
          sint eos unde asperiores.
        </p>
        <p className="text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse in modi
          dolor blanditiis et magni, vel consequatur. Illo dolorum beatae eius
          qui tempora deleniti corporis! Error, a iusto. Placeat aliquid eius
          similique quasi, iste autem facere reprehenderit fugit tempore! Error
          omnis laboriosam fuga repellendus impedit nihil modi. Sint natus
          itaque voluptatem ab maiores aliquid saepe aliquam at quaerat.
          Consequatur repudiandae laudantium mollitia soluta deserunt sed eum
          sint eos unde asperiores.
        </p>
        <div className="mt-20 w-full grid mb-20 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[bg1, bg2, bg3, bg2, bg3, bg1].map((x, i) => {
            return (
              <div
                key={i}
                className="overflow-hidden max-w-screen-sm bg-white shadow"
              >
                <div className="relative">
                  <div className="absolute top-3 right-3 py-2 px-3 text-sm rounded-lg bg-[var(--greencal-primary)] text-white"></div>
                  <div className="absolute bottom-0 left-3 py-1 px-3 text-sm rounded-tl-lg rounded-tr-lg bg-[var(--greencal-main)] text-white"></div>
                  <Image
                    alt="Tribu Hotel"
                    src={x}
                    width={300}
                    height={200}
                    className="object-cover w-full h-auto"
                  />
                </div>

                <div className="px-5 py-7 flex xl:flex-row flex-col gap-5 xl:items-end">
                  <article className="flex-1 flex flex-col gap-3">
                    <h2 className="mb-3 whitespace-nowrap font-bold text-left text-3xl text-gray-700">
                      <StyledFonts
                        fontFamily="Playfair Display"
                        text="Tribu Deluxe"
                        color="black"
                      />
                    </h2>
                    <span className="flex gap-3">
                      <sup className="text-gray-600 text-xs">from</sup>
                      <h2 className="text-2xl">
                        <StyledFonts
                          fontFamily="Playfair Display"
                          text="N57,000/night"
                          color="#C5A670"
                        />
                      </h2>
                    </span>
                    <small className="text-gray-600 font-medium">
                      1-3 guests | free breakfast
                    </small>
                  </article>

                  <button className="text-white flex-1 w-full py-3 text-sm bg-[#343935]">
                    BOOK NOW
                  </button>
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
