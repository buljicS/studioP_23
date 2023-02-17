import React from 'react'
import '../sass/fleischversand.scss';
import Button from '../elements/btn';
import '../sass/buttons.scss';

const fleischversand = () => {
  return (
    <section className="fleischversand">
        <h2>Fleischversand</h2>
        <Button
          btnClass="btnWhite"
          btnVal="Jetzt bestellen"
        />
    </section> 
  )
}

export default fleischversand