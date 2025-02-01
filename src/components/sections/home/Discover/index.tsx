import Image from "next/image";
import { MapPin } from "lucide-react";
import hotel from "../../../../../public/images/freepik__enhance__66205.png";
import map from "../../../../../public/images/map.png";
import StyledFonts from "@/components/shared/StyledFonts";

export default function Discover() {
  return (
    <>
      <section className="container mx-auto px-4 lg:px-5 pt-52 pb-40">
        <div className="grid grid-cols-1 -mt-5 lg:pr-16  bg-[#EDEAE5] lg:min-h-[600px] lg:max-h-[600px] w-full lg:grid-cols-[0.7fr_1.3fr_1fr] gap-4">
          {/* First Column (Heading) */}
          <div className="lg:-mt-36">
            <h2 className="text-5xl md:text-left pt-8 md:pt-0 text-center  pb-10 leading-[1.3]">
              <StyledFonts
                fontFamily="Playfair Display"
                text="Discover <br /> Around Us"
                color="Black"
              />
            </h2>
          </div>

          {/* Second Column (Map) - Spans More Space */}
          <div className="lg:-mt-36">
            <Image
              alt={"Map"}
              src={map}
              priority={true}
              quality={100}
              className="object-cover w-full h-auto"
            />
          </div>

          {/* Third Column (Hotel Image & Info) */}
          <div className="lg:-mt-36 space-y-6">
            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
              <Image
                src={hotel}
                alt="Tribu Hotel Building"
                fill
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="bg-white py-8 px-2 shadow-sm">
              <h2 className="text-4xl text-center leading-[1.3]">
                <StyledFonts
                  fontFamily="Playfair Display"
                  text=" Location & Maps"
                  color="#C4A484"
                />
              </h2>
              <p className="text-gray-600 text-sm text-center mt-6">
                No 9 Jideofor Street, Thinkers Corner By Godfrey Okoye
                University Enugu-Enugu State Nigeria.
              </p>
            </div>
            <button className="w-full bg-[#2A332E] text-white py-4 px-8 rounded hover:bg-[#364339] transition-colors">
              BOOK NOW
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
