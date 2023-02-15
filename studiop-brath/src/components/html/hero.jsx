import React from 'react'
import '../sass/hero.scss';
import '../sass/swiperStyle.scss';

import Hero1 from '../img/headerIMG.jpg';
import Hero2 from '../img/emerson-vieira-pqDbQ21C59A-unsplash.jpg';
import Hero3 from '../img/emerson-vieira-Qi7NlvF-ZsY-unsplash.jpg';
import Hero4 from '../img/emerson-vieira-RO6Ke69Szhg-unsplash.jpg';
import Hero5 from '../img/emerson-vieira-Mq1LDuswX2o-unsplash.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';


import 'swiper/css';
import '/node_modules/swiper/modules/navigation/navigation.scss'; // Navigation module
import '/node_modules/swiper/modules/pagination/pagination.scss';// Pagination module

const hero = () => {

  return (
        <section className="hero">
            <Swiper
                //siwperModules
                modules={[Pagination, Navigation]}
                slidesPerView={"auto"}
                loop = {true}
                navigation={{}}
                pagination={{ clickable: true}}
            >
            <SwiperSlide><img src={Hero1} alt="Hero"/></SwiperSlide>
            <SwiperSlide><img src={Hero2} alt="Hero2"/></SwiperSlide>
            <SwiperSlide><img src={Hero3} alt="Hero3"/></SwiperSlide>
            <SwiperSlide><img src={Hero4} alt="Hero4"/></SwiperSlide>
            <SwiperSlide><img src={Hero5} alt="Hero5"/></SwiperSlide>
            </Swiper>
        
        <div className="heroText">
          <h2>Heiko Brath Metzgermeister</h2>
          <p>
            Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit
            argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam
            Aperol Spritz probatus pertinax.
          </p>
        </div>
      </section>
  )
}

export default hero