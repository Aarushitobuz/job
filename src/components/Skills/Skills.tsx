import React from "react";
import Image from "next/image";
import Link from "next/link";

import accountant from "../../../public/images/accountant.jpg";
import physician from "../../../public/images/physician.jpg";
import consultant from "../../../public/images/consultant.jpg";
import orthopaedic from "../../../public/images/orthopaedic.jpg";
import developer from "../../../public/images/developer.jpg";

const skills = [
  { name: "Accountant", image: accountant },
  { name: "Physician", image: physician },
  { name: "Consultant", image: consultant },
  { name: "Orthopaedic", image: orthopaedic },
  { name: "Developer", image: developer },
];

const Skills = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left">
          Hone your skills and your interests!
        </h2>
        <Link
          href="/skills"
          className="text-[#67b239] text-lg font-semibold hover:underline text-center md:text-right"
        >
          View all Skills
        </Link>
      </div>

      <div className="flex justify-between gap-4 flex-wrap md:flex-nowrap ">
        {skills.map(({ name, image }) => (
          <div
            key={name}
            className="flex flex-col items-center py-10 w-full border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-base font-semibold text-gray-700">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
