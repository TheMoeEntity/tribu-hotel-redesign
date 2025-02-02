"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { rooms } from "@/lib/constants";
import Image from "next/image";
import StyledFonts from "@/components/shared/StyledFonts";
import Link from "next/link";
import CustomSliderButtons from "@/components/shared/CustomSliderButtons";

const RoomSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="flex flex-col gap-x-10 gap-5">
      <Carousel
        responsive={responsive}
        customButtonGroup={<CustomSliderButtons />}
        renderButtonGroupOutside={true}
        arrows={false}
      >
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
                  <div className="w-full flex gap-5 justify-between items-center flex-col md:flex-row">
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
      </Carousel>
    </div>
  );
};

export default RoomSlider;
