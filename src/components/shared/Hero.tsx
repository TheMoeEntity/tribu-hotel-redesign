"use client";
import Image, { StaticImageData } from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import StyledFonts from "@/components/shared/StyledFonts";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Hero: React.FC<{
  bg: StaticImageData;
  caption: string;
  page: string;
  slug?: boolean;
  subPage?: string;
}> = ({ bg, caption, page, slug = false, subPage = "" }) => {
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
        src={bg || "/placeholder.svg"}
        priority={true}
        quality={100}
        className="object-cover w-full h-auto"
        onLoad={updateDimensions}
      />
      <div className="absolute text-center flex flex-col space-y-20 md:gap-5 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 z-[9999] container ">
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
          <div className="flex justify-center text-white items-center gap-5">
            <span className="font-light">Home</span> <ChevronRight />{" "}
            <span className="font-medium">{page}</span>
            {slug && (
              <React.Fragment>
                <ChevronRight /> <span className="font-medium">{subPage}</span>
              </React.Fragment>
            )}
          </div>
          <h1 className="text-4xl mt-5 md:mt-0 font-[Playfair Display] relative md:text-5xl lg:text-6xl xl:text-9xl leading-[1.1!important] text-white font-bold">
            <span className="">
              <StyledFonts
                fontFamily="Playfair Display"
                text={caption}
                color="#fff"
              />
            </span>
          </h1>
        </motion.div>
      </div>
      {!loading && (
        <div
          className="absolute bg-[rgba(0,0,0,0.35)]"
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
