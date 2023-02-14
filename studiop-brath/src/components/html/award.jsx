import React from "react";
import "../sass/award.scss";
import N1 from "../img/nagrada1.png";
import N2 from "../img/nagrada2.png";
import N3 from "../img/nagrada3.png";
import N4 from "../img/nagrada4.png";
import VonalBreak from '../img/vonal.svg';

const award = () => {
  return (
    <div className="app">
      <section className="award">
        <div className="awText">
          <h2>Auszeichnungen</h2>
        </div>
        <div className="awContent">
          <div className="awTop">
            <div className="awLeft">
              <div className="inner">
                <img src={N1} alt="nagrada1" />
                <p className="contentP">
                  Schneewittchen <br /> denique
                </p>
              </div>
            </div>
            <div className="awRight">
              <div className="inner">
                <img id="smallPic" src={N2} alt="nagrada2" />
                <p className="contentP">
                  Tollit argumentum genau <br /> Saepe lobortis
                </p>
              </div>
            </div>
          </div>

          <div className="awBot">
            <div className="awLeft">
              <div className="inner">
                <img src={N3} alt="nagrada3" />
                <p className="contentP">
                  Grimms Märchen <br /> expetenda
                </p>
              </div>
            </div>
            <div className="awRight">
              <div className="inner">
                <img src={N4} alt="nagrada4" />
                <p className="contentP">
                  Mettwurst mei <br /> ullum gloriatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div class="break">
        <img class="vonal" src={VonalBreak} alt="vonal" />
      </div>
    </div>
  );
};

export default award;
