import React from "react";
import '../sass/comments.scss';

const comments = () => {
  return (
    <section className="comments">
      <div className="comHeader">
        <h4>Empfehlungs</h4>
        <h2>Was die Leute über uns sagen</h2>
      </div>
      <div className="swiper swipeComments">
        <img id="leftClick" src="./img/leftcursor.svg" alt="left" />
        <img id="rightClick" src="./img/rightCursor.svg" alt="right" />
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="card card1">
              <p className="comment">
                Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener
                Schnitzel aute irure dolor in reprehenderit Guten Tag mollit
                anim Stuttgart.
              </p>

              <p className="user">Maria Kartofeln</p>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="card">
              <div className="cardHead">
                <img src="./img/grillkurs_icon.svg" alt="grill" />
                <img src="./img/zvezdice.svg" alt="zvezdica" />
              </div>

              <div className="cardText">
                <p className="comment">
                  Wiener Schnitzel amet, consectetur Handtasche elit, sed do
                  eiusmod tempor Stuttgart ut labore et dolore magna Luftballons
                  Ut Turnbeutel nostrud exercitation ullamco .
                </p>
                <p className="user">
                  Halling Tobias
                  <br />
                  <span className="title">Koch</span>
                </p>
              </div>
              <img id="quote" src="./img/znak.svg" alt="quote" />
            </div>
          </div>

          <div className="swiper-slide">
            <div className="card card1">
              <p class="comment">
                Achtung fur atine indoctum complectitur HugoClub Mate mea
                meliore denique nominavi id. Ohrwurm expetenda nam an, his ei
                Reise euismod assentior.
              </p>
              <p className="user">Rene Weinstein</p>
            </div>
          </div>
        </div>
      </div>

      <div className="comFooter">
        <button className="combtn">Alle Berichte</button>
      </div>
    </section>
  );
};

export default comments;
