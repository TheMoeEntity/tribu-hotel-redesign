import Hero from "@/components/shared/Hero";
import React from "react";
import bg from "../../../../public/images/room3.jpg";
import ReservationForm from "@/components/sections/rooms/ReservationForm";
import AmenitiesGrid from "@/components/sections/rooms/Amenities";
import { rooms } from "@/lib/constants";
import { notFound } from "next/navigation";

const SingleRoom = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const response = rooms.find((x) => x.slug == slug);
  if (!response) {
    notFound();
  }
  return (
    <main className="flex flex-col pb-10 space-y-7 min-h-screen">
      <Hero
        bg={response.image}
        page="rooms"
        subPage={response.name}
        slug={true}
        caption={response.name}
      />
      <section className="px-5 text-gray-600 space-y-10 py-5 container">
        <p>{response.description}</p>
        <div className="flex flex-col gap-12 xl:gap-40 md:flex-row">
          <div className="space-y-10">
            <h2 className="text-3xl text-left font-medium">Room Information</h2>
            <ul className="list-disc text-gray-500 ml-5 space-y-3">
              <li>Max: 2</li>
              <li>A King bed</li>
              <li>Air Conditioning</li>
              <li>Smart TV</li>
              <li>En Suite with Shower over bath</li>
              <li>Tea and Coffee facilities</li>
            </ul>
            <ul className="list-disc text-gray-500 ml-5 space-y-3">
              <li>Guest fridge</li>
              <li>Large work desk</li>
              <li>Complimentary unlimited Wi-Fi</li>
            </ul>
          </div>
          <ReservationForm />
        </div>
      </section>
      <div className="px-3 lg:px-40">
        <AmenitiesGrid />
      </div>
    </main>
  );
};

export default SingleRoom;
