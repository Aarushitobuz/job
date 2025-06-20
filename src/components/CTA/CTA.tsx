
import React from "react";
import Button from "../Button";

const CTA = () => {
  return (
    <section className="bg-[#E3F2D6] px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between text-center lg:text-left gap-6">
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            Help employees find you
          </h2>
          <p className="text-base sm:text-lg">
            Find the people who are the best match for your company as well as your community
          </p>
        </div>

        <div className="flex-shrink-0">
          <Button variant="secondary">Post Your Job Today</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

