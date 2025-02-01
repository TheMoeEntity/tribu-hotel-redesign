import StyledFonts from "@/components/shared/StyledFonts";
import React from "react";
import HotelAmenities from "./HotelAmenities";

const Amenities = () => {
  return (
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
  );
};

export default Amenities;
