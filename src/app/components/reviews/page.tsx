'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { MdStarRate } from "react-icons/md";
import AvatarFunc from '../avatar/page';

const CustomerReviews = () => {
  const reviews = [
    {
      text: "He has a really high potential and professionalism in modelling, he had completed my commission in several days that it involved around really complex models. So I highly recommend him to be your modeller, he would indeed reach to your level of satisfaction.",
      author: "liondesert",
    },
    {
      text: "Everything I asked for he delivered, but much better than I expected incredible.",
      author: "sarahhr94",
    },
    {
      text: "Good, fast and quality work. Would love to work with this person again.",
      author: "hark_laker",
    },
    {
      text: "I had some trouble with the payment but at the end he helped me solve it and I was able to pay and get what I paid for. I am very happy with him and his work. Very fluent english by the way.",
      author: "davdunies",
    },
    {
      text: "took literally less than 10 minutes, impressively fluent for where hes from and hes very competent and finishes tasks without question, would recommend.",
      author: "hakeemadams453",
    },
  ];

  return (
    <div className="w-full rounded-[40px] mt-[30px]">
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
           className="text-center p-6 text-white rounded-[40px] swiper-slide-transition"
          >
        

            <div className="justify-center flex">
              <AvatarFunc />
            </div>

            <p className="mt-2 text-sm font-semibold opacity-90">{review.author}</p>
            <div className="starts-group flex justify-center mt-[10px]">
             <MdStarRate color='gold' size={30}/><MdStarRate color='gold' size={30}/><MdStarRate color='gold' size={30}/><MdStarRate color='gold' size={30}/><MdStarRate color='gold' size={30}/>
            </div>
            <p className="text-lg px-[180px] mt-[10px]">"{review.text}"</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReviews;
