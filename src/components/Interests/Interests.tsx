// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import './styles.css';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import recreation from '../../../public/images/recreation.jpg';
// import hobbies from '../../../public/images/hobbies.jpg';
// import geography from '../../../public/images/geography.jpg';

// const Interests = () => {
//     const interests = [
//         { name: "recreation", image: recreation },
//         { name: "hobbies", image: hobbies },
//         { name: "geography", image: geography },
//     ];

//   return (
//     <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//         <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
//           Don’t choose your interests by your job, choose your job by your hobby!
//         </h2>
//         <Link href="/interests" className="text-[#67b239] text-lg hover:underline whitespace-nowrap">View all Interests</Link>
//       </div>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//       {interests.map(({ name, image }) => (
//       <SwiperSlide key= {name}>
//       <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        
//           <div key={name} className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
//             <Image
//               src={image}
//               alt={name}
//               width={400}
//               height={250}
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         ))}
//       </div>
//       </SwiperSlide>
//       </Swiper>
//     </section>
//   );
// };

// export default Interests;

'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import recreation from '../../../public/images/recreation.jpg';
import hobbies from '../../../public/images/hobbies.jpg';
import geography from '../../../public/images/geography.jpg';

const Interests = () => {
  const interests = [
    { name: "Recreation", image: recreation },
    { name: "Hobbies", image: hobbies },
    { name: "Geography", image: geography },
    //  { name: "Recreation", image: recreation },
    // { name: "Hobbies", image: hobbies },
    // { name: "Geography", image: geography }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
          Don’t choose your interests by your job, choose your job by your hobby!
        </h2>
        <Link href="/interests" className="text-[#67b239] text-lg hover:underline whitespace-nowrap">
          View all Interests
        </Link>
      </div>

       <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
       loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
         {interests.map(({ name, image }) => (
          <SwiperSlide key={name}>
            <div className="relative">
             <Image
                src={image}
                alt={name}
                width={378}
                height={473}
                className="w-full h-auto object-cover"
              />
             <span className=" text-white text-xl font-semibold absolute bottom-[63px] left-[37px] after:content-[''] after:block after:h-[2px] after:bg-white after:w-[52px] after:mt-4">
              {name}
            </span>

              </div>
          </SwiperSlide>
         ))}
      </Swiper>

    </section>
  );
};

export default Interests;
