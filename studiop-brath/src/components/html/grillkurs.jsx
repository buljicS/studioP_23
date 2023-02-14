import React from 'react'
import '../sass/grillkurs.scss';
import VictoriaPic from '../img/victoria.jpg';

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
            <button className="grillbtn">Grillkurs</button>
        </div>
    </div>

    <div className="grillright">
      <img src={VictoriaPic} alt="victoria" />
    </div>
  </section>
  )
}

export default grillkurs