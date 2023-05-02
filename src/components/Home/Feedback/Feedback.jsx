import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const Feedback = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const loadedFeedBackData = async () => {
      const { data } = await axios.get(
        "https://chef-recipe-assignment-server-masumraihan.vercel.app/feedback"
      );
      setFeedback(data);
    };
    loadedFeedBackData();
  }, []);

  return (
    <div className="mb-14">
      <h1 className="text-4xl font-bold text-center pb-10 ">Our Customer Feedback</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className='mySwiper'
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
      >
        <div>
          {feedback.map((review) => (
            <SwiperSlide key={review.id}>
              <div className='card w-full h-96 bg-base-100 shadow-xl'>
                <figure className='px-10 pt-10'>
                  <img
                    src={review?.image}
                    alt={review?.name}
                    className='rounded-xl'
                  />
                </figure>
                <div className='card-body items-center text-center'>
                  <h2 className='card-title'>{review?.name}</h2>
                  <p>{review?.feedback}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Feedback;
