import React from "react";
import "./category.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <div className="px-2 md:px-0">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper my-24"
        >
          <SwiperSlide>
            <div className="relative">
              <img src={img1} alt="" />
              <h3 className="text-[14px] md:text-2xl uppercase text-center absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white">
                Salad
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={img2} alt="" />
              <h3 className="text-[14px] md:text-2xl uppercase text-center absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white">
                Pizza
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={img3} alt="" />
              <h3 className="text-[14px] md:text-2xl  uppercase text-center absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white">
                Soup
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={img4} alt="" />
              <h3 className="text-[14px] md:text-2xl uppercase text-center absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white">
                Desserts
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={img5} alt="" />
              <h3 className="text-[14px] md:text-[16px] md:text-2xl uppercase text-center absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white">
                Panta
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
