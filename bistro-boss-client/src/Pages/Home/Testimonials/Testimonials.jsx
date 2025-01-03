import { useEffect, useState } from "react";
import SectionTitle from "../../../shared-component/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {


    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('/public/all-reviews/review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    // console.log(reviews);

    return (
        <section className="min-h-[60vh]">

            <SectionTitle

                subtitle={'what our client says'}
                title={"testimonials"}
            />

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map((review, index) => {
                        return <SwiperSlide  key={index}>
                            <div className="text-center  px-12 lg:space-y-6 space-y-4 lg:mt-12 mt-8">
                                <Rating className="mx-auto" style={{ maxWidth: 170 }} value={review.rating} />
                                <p className="pt-12">{review.details}</p>
                                <p className="text-[#CD9003] text-3xl">{review.name}</p>
                            </div>
                        </SwiperSlide>
                    })
                }

            </Swiper>




        </section>
    );
};

export default Testimonials;