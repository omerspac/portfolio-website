'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { MdStarRate } from "react-icons/md";

const CustomerReviews = () => {
  const reviews = [
    {
      text: "He has a really high potential and professionalism in modelling, he had completed my commission in several days that it involved around really complex models. So I highly recommend him to be your modeller, he would indeed reach to your level of satisfaction.",
      author: "liondesert",
    },
    {
      text: "The team was super helpful and created exactly what I needed.",
      author: "Jane Smith",
    },
    {
      text: "Excellent quality 3D models at a great price. Highly recommend!",
      author: "Alex Brown",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="text-center p-6 bg-[#212121] text-white rounded-[40px] mt-[30px]"
          >
            <div className="starts-group flex justify-center">
            <MdStarRate color='gold' size={30}/><MdStarRate color='gold' size={30}/><MdStarRate color='gold' size={30}/><MdStarRate color='gold' size={30}/><MdStarRate color='gold' size={30}/>
            </div>
            <p className="text-lg px-[180px] mt-[10px]">"{review.text}"</p>
            <p className="mt-2 text-sm font-semibold">- {review.author}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReviews;
