"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import background from "../../../../../public/images/freepik__enhance__66205.png";
import BookingForm from "./BookingForm";
import StyledFonts from "@/components/shared/StyledFonts";

const Hero = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  const updateDimensions = useCallback(() => {
    if (imageRef.current) {
      setDimensions({
        width: imageRef.current.offsetWidth,
        height: imageRef.current.offsetHeight,
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]); // Added updateDimensions to the dependency array

  return (
    <section className="w-full relative">
      <Image
        ref={imageRef}
        alt={"background for Tribu"}
        src={background || "/placeholder.svg"}
        priority={true}
        quality={100}
        className="object-cover w-full h-auto"
        onLoadingComplete={updateDimensions}
      />
      <div
        className="absolute bg-[rgba(0,0,0,0.5)]"
        style={{
          top: 0,
          left: 0,
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
        }}
      >
        <div className="absolute text-center flex flex-col gap-3 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  container ">
          <h1 className="text-xl relative md:text-9xl leading-[1.2!important] text-white font-bold">
            YOUR HOME <br /> FROM HOME
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <StyledFonts fontFamily="Meddon" text="away" color="#C5A670" />
            </span>
          </h1>
          <p className="text-white font-light text-xs md:text-lg">
            Experience luxury at its finest with our beautiful hotel facilities
          </p>
          <div className="mt-10 hidden md:block">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
