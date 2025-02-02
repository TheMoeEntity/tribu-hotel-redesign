"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import background from "../../../../../public/images/freepik__enhance__66205.png";
import BookingForm from "./BookingForm";
import StyledFonts from "@/components/shared/StyledFonts";
import { AnimatePresence, motion } from "framer-motion";

const Hero = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const [loading, setLoading] = useState(true);

  const updateDimensions = useCallback(() => {
    if (imageRef.current) {
      setDimensions({
        width: imageRef.current.offsetWidth,
        height: imageRef.current.offsetHeight,
      });
    }
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 750);
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
        onLoad={updateDimensions}
      />
      <div className="absolute text-center flex z-[9999] flex-col gap-3 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  container ">
        <motion.div
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 1,
            bounce: 0.5,
            type: "spring",
          }}
        >
          <h1 className="text-3xl font-[Playfair Display] relative md:text-5xl lg:text-6xl xl:text-9xl leading-[1.1!important] text-white font-bold">
            <span className="">
              <StyledFonts
                fontFamily="Playfair Display"
                text=" YOUR HOME <br /> FROM HOME"
                color="#fff"
              />
            </span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <StyledFonts fontFamily="Meddon" text="away" color="#C5A670" />
            </span>
          </h1>
          <p className="text-white p-5 lg:p-0 font-light text-xs md:text-lg">
            Experience luxury at its finest with our beautiful hotel facilities
          </p>
          <div className="mt-10 hidden lg:block">
            <BookingForm />
          </div>
        </motion.div>
      </div>
      {!loading && (
        <div
          className="absolute bg-[rgba(0,0,0,0.5)]"
          style={{
            top: 0,
            left: 0,
            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`,
          }}
        ></div>
      )}
    </section>
  );
};

export default Hero;
