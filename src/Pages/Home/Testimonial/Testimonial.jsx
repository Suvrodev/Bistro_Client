import React, { useContext, useEffect, useState } from "react";
import "./Testimonial.css";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { AuthContext } from "../../../Provider/AuthProvider";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Testimonial = () => {
  const { baseUrl } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/review`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="">
      <SectionTitle
        subHeading={"What our client say"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="my-16 mx-24 flex flex-col items-center gap-4">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <div className="rotate-180">
                <FormatQuoteIcon className="testimonialIconSize" />
              </div>
              <p className="text-center py-2">{review.details}</p>
              <h3 className="text-3xl text-orange-600"> {review.name} </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
