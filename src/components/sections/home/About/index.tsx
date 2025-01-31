import React from "react";
import tree from "../../../../../public/images/tree-trimmed.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section className="p-5 container md:p-16 ">
      <div className="flex flex-col md:flex-row gap-10 flex-wrap">
        <aside className="flex-1">
          <Image
            alt={"Image of tree"}
            src={tree}
            priority={true}
            quality={100}
            className="object-cover w-full h-auto"
          />
        </aside>
        <article className="flex flex-col gap-7 flex-1">
          <span className="bg-[#C19B6C] w-[1px] h-32"></span>
          <h2 className="text-3xl md:text-3xl text-[#C19B6C] tracking-wide font-light">
            WELCOME TO
          </h2>
          <h2 className="font-semibold md:text-6xl text-3xl">Tribu Hotel</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            veritatis magnam explicabo esse voluptatibus expedita impedit earum
            id error dolore.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sit
            iste, quas ipsum iusto quis totam voluptates. Sapiente, pariatur? Ut
            sequi mollitia odio veritatis quasi repellat ex totam! Amet dolorem
            dolores quis voluptas ratione, obcaecati esse dolore vero fuga
            exercitationem!
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
