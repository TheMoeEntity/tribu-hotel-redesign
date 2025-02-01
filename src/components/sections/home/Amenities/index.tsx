import StyledFonts from "@/components/shared/StyledFonts";
import React from "react";
import HotelAmenities from "./HotelAmenities";
import Image from "next/image";
import flower from "../../../../../public/images/room.jpg";
import flower2 from "../../../../../public/images/room2.jpg";
import flower3 from "../../../../../public/images/room3.jpg";

const Amenities = () => {
  return (
    <>
      <section className="px-5 py-20 md:px-20 ">
        <div className="container flex flex-col md:flex-row gap-10">
          <article className="flex flex-col gap-7">
            <div className="bg-[#C19B6C] w-[1px] h-20"></div>
            <h2 className="text-[#B39968] font-light tracking-[10px] text-2xl">
              INTRODUCING OUR SERVICES
            </h2>
            <h2 className="text-4xl md:text-6xl leading-[1.3]">
              <StyledFonts
                fontFamily="Playfair Display"
                text="Amenities That You Can Enjoy"
                color="black"
              />
            </h2>
          </article>
          <div>
            <HotelAmenities />
          </div>
        </div>
      </section>
      <section className="px-5 text-white bg-[#343935] py-20 md:px-20 ">
        <div className="container w-full justify-center flex flex-col gap-10">
          <h2 className="text-3xl text-center md:text-7xl">
            <StyledFonts
              className="tracking-[14px!important] leading-[1.3]"
              fontFamily="Playfair Display"
              text="FACILITIES"
              color="#C5A670"
            />
          </h2>
          <div className="mt-5 lg:p-10 w-full grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[flower, flower2, flower3, flower2, flower, flower3].map(
              (x, i) => {
                return (
                  <div key={i} className="overflow-hidden">
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

                    <div className="py-7 flex xl:flex-row flex-col gap-5 xl:items-end">
                      <article className="flex-1 flex flex-col gap-3">
                        <h2 className="mb-3 whitespace-nowrap font-bold text-left text-4xl">
                          <StyledFonts
                            fontFamily="Playfair Display"
                            text="Executive Suite"
                            color="white"
                          />
                        </h2>
                        <span className="flex text-[#CACBCB]">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Adipisci placeat, magni assumenda libero quasi
                          quis.
                        </span>
                        <span className="text-[#C5A670] underline font-medium">
                          Read more
                        </span>
                      </article>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Amenities;
