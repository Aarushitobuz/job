
import React from "react";
import Image from "next/image";
import Button from "../Button";
import heroimage from '../../../public/images/hero.jpg';
import manimage from '../../../public/images/man.jpg';

export default function Hero () {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center text-center md:text-left px-6 py-16 max-w-6xl mx-auto">
      <div className="mb-8 md:mb-0 md:pr-12 flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Where you live is as important as where you work!</h1>
        <p className="text-xl mb-6 font-medium">
          <b>Find work-life balance outside your door with JobBoard.</b><br />
          JobBoard enables you to pick areas you are naturally drawn to. It isn't just a big part of your life. Why not enjoy it every day and not just on the weekends.
        </p>
        <Button variant= "primary">Find your Match</Button> 
      </div>
      <div className="flex flex-1 max-w-md gap-4 overflow-hidden rounded-xl w-[300px] h-[400px]">
        <Image
          src={heroimage}
          alt="Healthcare"
          className="rounded-xl w-1/2 object-cover"
        />

        <Image
          src={manimage}
          alt="Adventure Professional"
          className="rounded-xl w-1/2 object-cover"
        />
      </div>
    </section>

      
  );
};
