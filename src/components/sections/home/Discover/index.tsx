import Image from "next/image";
import { MapPin } from "lucide-react";
import hotel from "../../../../../public/images/freepik__enhance__66205.png";

export default function Discover() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
            Discover
            <br />
            Around Us
          </h2>

          {/* Map Container */}
          <div className="relative h-[400px] md:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
            {/* Replace with actual map implementation */}
            <div className="absolute hidden inset-0 bg-[url('/images/map.png')] bg-cover bg-center opacity-25"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <MapPin className="w-8 h-8 text-[#C4A484]" />
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
            Discover
            <br />
            Around Us
          </h2>

          {/* Map Container */}
          <div className="relative h-[400px] md:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
            {/* Replace with actual map implementation */}
            <div className="absolute inset-0 bg-[url('/images/map.png')] bg-cover bg-center opacity-25"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <MapPin className="w-8 h-8 text-[#C4A484]" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Hotel Image */}
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src={hotel}
              alt="Tribu Hotel Building"
              fill
              className="object-cover w-full h-auto"
            />
          </div>

          {/* Location Info */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl md:text-3xl text-[#C4A484] mb-4">
              Location & Maps
            </h3>
            <p className="text-gray-600 text-center mb-6">
              No 9 Jideofor Street, Thinkers Corner By Godfrey Okoye University
              Enugu-Enugu State Nigeria.
            </p>
            <button className="w-full bg-[#2A332E] text-white py-4 px-8 rounded hover:bg-[#364339] transition-colors">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
