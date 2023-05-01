import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Header = () => {
  return (
    <div>
      <Navbar />
      <Swiper navigation={true} modules={[Navigation]} className='mySwiper text-center'>
        <SwiperSlide>Slide 1</SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Header;
