//core
import React from "react";
import "../sass/dashandwerk.scss";
//core

//page_components
import VonalBreak from "../img/vonal.svg";
import Wurst from "../img/wurstchen.png";
import Han from "../img/hahnchen.png";
import Schwein from "../img/shwein.png";
import Rind from "../img/rind.png";

import Button from "../elements/btn";
import "../sass/buttons.scss";
//page_components

const dashandwerk = () => {
  return (
    <section className="dh">
      <div className="top">
        <h2>Das Handwerk</h2>
        <h4>alles über unsere Hausgemachte Produkte</h4>
        <div className="topText">
          <p>
            Halt amet, consectetur Handtasche elit, sed do eiusmod tempor
            Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim
            veniam, Turnbeutel nostrud exercitation ullamco laboris nisi
            Sprechen Sie deutsch aliquip ex ea commodo consequat.
          </p>
          <p>
            Wiener Schnitzel aute irure dolor in Guten Tag mollit anim
            Stuttgart.
          </p>
          <p>
            id latine indoctum complectitur HugoClub Mate mea meliore denique
            nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod
            assentior
          </p>
          <Button btnClass="btnRed" btnVal="Das Handwerk" />
        </div>
      </div>

      <div className="mid">
        <img className="vonal" src={VonalBreak} alt="mid break" />
      </div>

      <div className="bot">
        <div className="g1">
          <img src={Wurst} alt="g61.png" />
          <img src={Han} alt="g60.png" />
        </div>
        <div class="g2">
          <img src={Schwein} alt="g59.png" />
          <img src={Rind} alt="g58.png" />
        </div>
      </div>
    </section>
  );
};

export default dashandwerk;
