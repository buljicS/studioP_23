import React from 'react'
import '../sass/hero.scss';
import Hero1 from '../img/headerIMG.jpg';
import Hero2 from '../img/emerson-vieira-pqDbQ21C59A-unsplash.jpg';
import Hero3 from '../img/emerson-vieira-Qi7NlvF-ZsY-unsplash.jpg';
import Hero4 from '../img/emerson-vieira-RO6Ke69Szhg-unsplash.jpg';
import Hero5 from '../img/emerson-vieira-Mq1LDuswX2o-unsplash.jpg';

const hero = () => {
  return (
    <div className="hero">
        <section className="hero">       
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><img className="headerIMG" src={Hero1} alt="hero1" /></div>
            <div className="swiper-slide"><img className="headerIMG" src={Hero2} alt="hero2" /></div>
            <div className="swiper-slide"><img className="headerIMG" src={Hero3} alt="hero3" /></div>
            <div className="swiper-slide"><img className="headerIMG" src={Hero4} alt="hero4" /></div>
            <div className="swiper-slide"><img className="headerIMG" src={Hero5} alt="hero5" /></div>
          </div>
  
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>   
        
        <div className="heroText">
          <h2>Heiko Brath Metzgermeister</h2>
          <p>
            Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit
            argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam
            Aperol Spritz probatus pertinax.
          </p>
        </div>
      </section>
    </div>
  )
}

export default hero