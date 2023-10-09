import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
        <SectionTitle
          subHeading={"From 11:00am to 10:00pm"}
          heading={"ORDER ONLINE"}
        ></SectionTitle>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-24"
        >
        <SwiperSlide> 
                        <img src={img1} alt="" /> 
                        <h3 className='text-3xl uppercase text-center -mt-20 text-white'>Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide> 
                        <img src={img2} alt="" /> 
                        <h3 className='text-3xl uppercase text-center -mt-20 text-white'>Pizza</h3>
                        </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" /> 
                        <h3 className='text-3xl uppercase text-center -mt-20 text-white'>Soup</h3>
                        </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" />
                        <h3 className='text-3xl uppercase text-center -mt-20 text-white'>Desserts</h3>
                        </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="" /> 
                        </SwiperSlide>
                    <SwiperSlide> 
                        <img src={img1} alt="" />
                        <h3 className='text-3xl uppercase text-center -mt-20 text-white'>Salad</h3>
                    </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default Category;
