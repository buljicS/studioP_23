import React from 'react'
import '../sass/grillkurs.scss';
import VictoriaPic from '../img/victoria.jpg';

import Button from '../elements/btn';
import '../sass/buttons.scss';

const grillkurs = () => {
  return (
    <section className="grillkurs">
    <div className="grillleft">
        <div className="glTxt">
            <h2>Buchen Sie den <br/>Grillkurs jetzt</h2>
            <ul>
              <li><span className="lItem">professioneller Lehrer</span></li>
              <li><span className="lItem">ausgezeichneter Metzger</span></li>
              <li><span className="lItem">1 Tag</span></li>
              <li><span className="lItem">lernen Sie die Kunst des Grillens</span></li>
            </ul>
            <Button
              btnClass="btnWhite"
              btnVal="Grillkurs"
            />
        </div>
    </div>

    <div className="grillright">
      <img src={VictoriaPic} alt="victoria" />
    </div>
  </section>
  )
}

export default grillkurs