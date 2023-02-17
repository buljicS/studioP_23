import React from "react";

import lC from '../img/leftcursor.svg';
import rC from '../img/rightCursor.svg';
import grill from '../img/grillkurs_icon.svg';
import star from '../img/zvezdice.svg';
import quote  from '../img/znak.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/effect-coverflow';

import Button from '../elements/btn';
import '../sass/buttons.scss';

import '../sass/comments.scss';


const comments = () => {
    return (
        <section className="comments">
            <div className="comHeader">
                <h4>Empfehlungs</h4>
                <h2>Was die Leute über uns sagen</h2>
            </div>


            <Swiper
                modules={[Navigation, EffectCoverflow]}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                initialSlide={"1"}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                }}

                navigation={{
                    nextEl: "#rightClick",
                    prevEl: "#leftClick",
                }}
            >
                <img id="leftClick" src={lC} alt="left"/>
                <img id="rightClick" src={rC} alt="right"/>
                <SwiperSlide className="card">
                    <div class="card card1">
                        <p class="comment">
                            Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in
                            reprehenderit Guten Tag mollit anim Stuttgart.
                        </p>

                        <p class="user">
                            Maria Kartofeln
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card">
                        <div className="cardHead">
                            <img src={grill} alt="grill"/>
                            <img src={star} alt="zvezdica"/>
                        </div>

                        <div className="cardText">
                            <p className="comment">
                                Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut
                                labore et
                                dolore magna Luftballons Ut Turnbeutel nostrud exercitation ullamco .
                            </p>
                            <p className="user">
                                Halling Tobias<br/>
                                <span className="title">Koch</span>
                            </p>
                        </div>
                        <img id="quote" src={quote} alt="quote"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card card1">
                        <p className="comment">
                            Achtung fur atine indoctum complectitur HugoClub Mate mea meliore denique nominavi id.
                            Ohrwurm
                            expetenda nam an, his ei Reise euismod assentior.
                        </p>
                        <p className="user">
                            Rene Weinstein
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>


            <div className="comFooter">
                <Button
                    btnClass="btnRed"
                    btnVal="Alle Berichte"
                />
            </div>
        </section>
    );


}

export default comments;