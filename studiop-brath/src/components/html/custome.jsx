//core
import React from "react";
import "../sass/custome.scss";
//core

//page_components
import Spices from "../img/spices.png";
//page_components

const custome = () => {
  return (
    <section className="custome">
      <div className="cusLeft">
        <img src={Spices} alt="spices" />
      </div>

      <div className="cusRight">
        <div className="crTxt">
          <h2>Custome spices for your meat</h2>
          <h3>Turnbeutel nostrud exercitation ullamco Sprechen Sie deutsch</h3>

          <p>
            Odio principes iracundia Müller Rice pri. Ut vel solum mandamus,
            Kartoffelkopf natum adversarium ei ius, diam Schmetterling
            honestatis eum.
          </p>
          <br />
          <p>
            Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod
            tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad
            minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi
            Sprechen Sie deutsch aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default custome;
