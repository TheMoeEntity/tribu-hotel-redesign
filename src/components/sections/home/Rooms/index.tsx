import StyledFonts from "@/components/shared/StyledFonts";
import Link from "next/link";
import React from "react";
import flower from "../../../../../public/images/room.jpg";
import flower2 from "../../../../../public/images/room2.jpg";
import flower3 from "../../../../../public/images/room3.jpg";
import Image from "next/image";

const Rooms = () => {
  return (
    <section className="px-5 py-20 text-white bg-[#343935] md:px-20 ">
      <div className="container flex flex-col gap-10">
        <div className="flex flex-col space-y-10 md:flex-row w-full items-center justify-between">
          <article className="flex flex-1 flex-col gap-5">
            <h2 className="text-[#B39968] font-light tracking-[10px] text-2xl">
              ROOMS & SUITES
            </h2>
            <h2 className="text-5xl leading-[1.3]">
              <StyledFonts
                fontFamily="Playfair Display"
                text="Comfortable Rooms <br /> Just For You"
                color="white"
              />
            </h2>
          </article>
          <article className="flex flex-1 flex-col gap-8">
            <p className="text-lg font-light text-gray-300">
              Choose from our luxurious room types to fit your traveling style
              and comfort needs. All available for booking right away.
            </p>
            <Link href="/rooms" className="underline">
              View all rooms
            </Link>
          </article>
        </div>
        <div className="mt-10 w-full grid mb-20 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[flower, flower2, flower3].map((x, i) => {
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

                  <Link
                    href="/rooms/tribu-deluxe"
                    className="text-white text-center flex-1 w-full py-3 text-sm bg-[#343935]"
                  >
                    BOOK NOW
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
