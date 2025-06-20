import React from "react";
import Image from "next/image";
import Link from "next/link";

const skills = [
  { name: "Accountant", image: "accountant.jpg" },
  { name: "Physician", image: "physician.jpg" },
  { name: "Consultant", image: "consultant.jpg" },
  { name: "Orthopaedic", image: "orthopaedic.jpg" },
  { name: "Developer", image: "developer.jpg" },
];

const Skills = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left">
                Hone your skills and your interests!
                </h2>
                <Link href="/skills" className="text-[#67b239] text-lg hover:underline text-center md:text-right">View all Skills</Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 justify-items-center">
                {skills.map(({ name, image }) => (
                <div key={name} className="text-center w-full max-w-[120px] border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative w-20 h-20 mx-auto mb-2">
                        <Image
                            src={`/images/${image}`}
                            alt={name}
                            fill
                            className="rounded-full object-cover"
                        />
                    </div>
                    <p className="font-medium text-sm sm:text-base">{name}</p>
                </div>
                ))}
            </div>
        </section>
    );
 };

export default Skills;
