import React from 'react'
import '../sass/footer.scss';

//location_group
import Pin from '../img/pin.svg';
import Phone from '../img/phone.svg';
import Mail from '../img/mail.svg';
//location group

import Logo from '../img/logo.svg';

//social_group
import YT from '../img/yt.svg';
import TW from '../img/tw.svg';
import FB from '../img/fb.svg';
import IG from '../img/ig.svg';
//social_group




function footer() {
  return (
    <footer>
    <div className="container">
      <div className="contact">
        <div className="location">
          <img src={Pin} alt="pin"/>
          <p>Klauprechtstraße 25 <br/> 76137 Karlsruhe, Germany</p>
        </div>

        <div className="phone displayProop">
          <img src={Phone} alt="phone"/>
          <p>+49 721 358060</p>
        </div>

        <div className="mail displayProop">
          <img src={Mail} alt="mail"/>
          <p>info@partyservice-brath.de</p>
        </div>
      </div>

      <div className="logo">
        <img src={Logo} alt="logo"/>
      </div>
      
      <div className="social">
        <p className="socialP">Besuchen Sie uns auf:</p>
        <div className="socialIcons">
          <img src={TW} alt="twitter"/>
          <img src={FB} alt="facebook"/>
          <img src={IG} alt="instagram"/>
          <img src={YT} alt="youtube"/>
        </div>
      </div>
    </div>

    <div className="dimmedtrack">
      <p id="copyrightP">© 2020 by Metzgerei Heiko Brath  GmbH, Deutschland</p>
      <p id="teampP">Code and design by <span className="studioPresent">StudioPresent</span></p>
    </div>
  </footer>

  )
}

export default footer