import Hero from "@/components/shared/Hero";
import React from "react";
import bg from "../../../public/images/slides.png";
import bg2 from "../../../public/images/gym.jpg";
import bg3 from "../../../public/images/hall.jpg";
import bg4 from "../../../public/images/bar.jpg";
import bg5 from "../../../public/images/about-bg.jpg";
import StyledFonts from "@/components/shared/StyledFonts";
import Image from "next/image";

const Gallery = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero bg={bg} page="gallery" caption="Gallery" />
      <section className="px-5 space-y-10 py-10 xl:py-20 container">
        <h4 className="tracking-[10px] text-[#C9AC79] text-lg text-center">
          GALLERY
        </h4>
        <h4 className="text-3xl md:text-5xl text-center">
          <StyledFonts
            fontFamily="Playfair Display"
            text="Tribu in Pictures"
            color="black"
          />
        </h4>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-4">
            {/* Main hero image */}
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
              <Image
                src={bg5}
                alt="Hotel entrance with decorative lion statues"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Bottom grid of 3 images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={bg2}
                  alt="Fitness center with exercise equipment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity hover:opacity-0" />
              </div>

              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={bg3}
                  alt="Outdoor lounge area with palm trees"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity hover:opacity-0" />
              </div>

              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={bg4}
                  alt="Indoor restaurant seating area"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity hover:opacity-0" />
              </div>
            </div>
            {/* Main hero image */}
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
              <Image
                src={bg5}
                alt="Hotel entrance with decorative lion statues"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Bottom grid of 3 images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={bg2}
                  alt="Fitness center with exercise equipment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity hover:opacity-0" />
              </div>

              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={bg3}
                  alt="Outdoor lounge area with palm trees"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity hover:opacity-0" />
              </div>

              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={bg4}
                  alt="Indoor restaurant seating area"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity hover:opacity-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
