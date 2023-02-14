import React from 'react'
import '../sass/dryaged.scss';
import TopImg from "../img/topImg.jpg";
import BotImg1 from "../img/botImg.png";
import BotImg2 from "../img/botImg2.png";
import BotImg3 from "../img/botImg3.png";

const dryAged = () => {
  return (
    <section className="dryAged">
    <div className="daLeft">
      <div className="daTxt">
        <div className="daTxTop">
          <h2>Dry Aged</h2>
          <h4>Alte Wutz, Dry Aged</h4> 
        </div>
        <p>Halt amet, consectetur Handtasche elit, sed do eiusmod tempor
          Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad
          minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi
          Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener
          Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim
          Stuttgart. <br/><br/>id latine indoctum complectitur HugoClub
          Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an,
          his ei Reise euismod assentior.</p>
          <div className="daButtons">
            <button className="drybtn">Dry Aged</button>
            <button className="drybtn">Alte Wutz</button>
        </div>
      </div>
    </div>

    <div className="daRight">
      <div className="daIMG">
        <div className="topIMG">
          <img src={TopImg} alt="topImg"/>
        </div>
        <div className="botIMG">
          <img src={BotImg1} alt="botimg"/>
          <img src={BotImg2} alt="botimg"/>
          <img src={BotImg3} alt="botimg"/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default dryAged