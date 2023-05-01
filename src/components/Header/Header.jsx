import React, { useEffect, useState } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import axios from "axios";

const Header = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    const loadBannerData = async () => {
      const { data } = await axios.get(
        "https://chef-recipe-assignment-server-masumraihan.vercel.app/bannerdata"
      );
      setBannerData(data);
    };
    loadBannerData();
  }, []);
  return (
    <div>
      <Navbar />
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className='mySwiper text-center'
      >
        {bannerData.map((info) => (
          <SwiperSlide key={info?.id} className=''>
            <div
              className='hero min-h-[550px]'
              style={{
                backgroundImage: `url("${info.image}")`,
              }}
            >
              <div className='hero-overlay bg-opacity-60'></div>
              <div className='hero-content text-center text-neutral-content'>
                <div className='max-w-md'>
                  <h1 className='mb-5 text-5xl font-bold'>{info.name}</h1>
                  <p className='mb-5'>{info.description}</p>
                  <button className='btn btn-primary'>Get Started</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
