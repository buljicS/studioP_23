//core
import React from "react";
import "../sass/fleischversand.scss";
//core

//page_components
import Button from "../elements/btn";
import "../sass/buttons.scss";
//page_components

const fleischversand = () => {
  return (
    <section className="fleischversand">
      <h2>Fleischversand</h2>
      <Button btnClass="btnWhite" btnVal="Jetzt bestellen" />
    </section>
  );
};

export default fleischversand;
