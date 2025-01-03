// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import SectionTitle from '../../../shared-component/SectionTitle';

const Category = () => {
    return (
        <section>

            <SectionTitle

            subtitle={"From 11:00 am  to 10:00 am "}
            
            title={"order online "}
            
            />
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='text-3xl text-white uppercase -mt-12  '>Sweet</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className='text-3xl text-white uppercase -mt-12  '>Sweet</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className='text-3xl text-white uppercase -mt-12  '>Sweet</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='text-3xl text-white uppercase -mt-12  '>Sweet</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className='text-3xl text-white uppercase -mt-12  '>Sweet</h2>
                </SwiperSlide>

                ...
            </Swiper>
        </section>
    );
};

export default Category;