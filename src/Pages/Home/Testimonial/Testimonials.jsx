import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    const [review,setReview]=useState([]);

    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>{
            setReview(data);
        })
    },[])
  return (
    <div>
      <section>
        <SectionTitle
          subHeading="what our client say"
          heading="testimonial"
        ></SectionTitle>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      
           {
            review.map(review=><SwiperSlide key={review._id}>
                <div className="flex flex-col items-center mx-24 my-16">
                    <Rating
                     style={{maxWidth:180}}
                     value={review.rating}
                     readOnly
                    >
                    </Rating>
                    <p>{review.details}</p>
                    <h3 className="text-2xl text-orange-400">{review.name}</h3>
                </div>
            </SwiperSlide>)
           }
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
