//core
import React from "react";
import "../sass/genussnetz.scss";
//core

//page_components
import Genu from "../img/genussnetz.svg";
import VonalBreak from "../img/vonal.svg";

import Button from "../elements/btn";
import "../sass/buttons.scss";
//page_components

const genussnetz = () => {
  return (
    <div className="app">
      <section className="genussnetz">
        <div className="geContent">
          <div className="geLogo">
            <img src={Genu} alt="genu logo" />
          </div>

          <div className="geTxt">
            <h2>
              Metzgerei Brath ist Mitglied <br />
              im Genussnetzwerk
            </h2>
            <Button btnClass="btnRed" btnVal="Gehen zu site" />
          </div>
        </div>
      </section>

      <div class="break">
        <img class="vonal" src={VonalBreak} alt="vonal" />
      </div>
    </div>
  );
};

export default genussnetz;
