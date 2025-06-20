// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Interests = () => {
//     const interests = [
//         { name: "recreation", label: "Recreation" },
//         { name: "hobbies", label: "Hobbies" },
//         { name: "geography", label: "Geography" },
//     ];

//   return (
//     <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//         <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
//           Don’t choose your interests by your job, choose your job by your hobby!
//         </h2>
//         <Link href="/interests" className="text-[#67b239] text-lg hover:underline whitespace-nowrap">View all Interests</Link>
//       </div>

//       <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
//         {interests.map(({ name, label }) => (
//           <div key={name} className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
//             <Image
//               src={`/images/${name}.jpg`}
//               alt={`${label} image`}
//               width={400}
//               height={250}
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Interests;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Interests.module.css";

const Interests = () => {
  const interests = [
    { name: "recreation", label: "Recreation" },
    { name: "hobbies", label: "Hobbies" },
    { name: "geography", label: "Geography" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Don’t choose your interests by your job, <br /> choose your job by your hobby!
        </h2>
        <Link href="/interests" className={styles.link}>View all Interests</Link>
      </div>

      <div className={styles.grid}>
        {interests.map(({ name, label }) => (
          <div key={name} className={styles.card}>
            <Image
              src={`/images/${name}.jpg`}
              alt={`${label} image`}
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;

