import Hero from "@/components/shared/Hero";
import React from "react";
import bg from "../../../../public/images/room3.jpg";
import ReservationForm from "@/components/sections/contact/ReservationForm";

const SingleRoom = () => {
  return (
    <main className="flex flex-col pb-10 space-y-10 min-h-screen">
      <Hero
        bg={bg}
        page="rooms"
        subPage="Tribu Deluxe"
        slug={true}
        caption="Tribu Deluxe"
      />
      <section className="px-5 text-gray-600 space-y-10 py-10 container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error
          beatae nisi placeat sed delectus optio nihil autem possimus ut
          dolorum, voluptatibus voluptatum nesciunt.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          asperiores?
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1"></div>
          <ReservationForm />
        </div>
      </section>
    </main>
  );
};

export default SingleRoom;
