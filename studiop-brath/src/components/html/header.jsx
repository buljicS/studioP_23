//core-dependencies
import React from 'react';
//core-dependencies

//page-sass
import '../sass/header.scss';
import '../sass/lightMode.scss';
//page-sass

//page-elements
import Logo from '../img/logo.svg';
import Clock from '../img/clock.svg';
import Download from '../img/navDowload.svg';
//page-elements

const header = () => {
    const hamburger =() => {
      const hamburger = document.querySelector(".hamburger");
      const navmenu = document.querySelector(".navMenu");
      hamburger.classList.toggle("active");
      navmenu.classList.toggle("active");


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
}))
    }

    const toggle = () => {
        var element = document.body;
        element.classList.toggle("lightMode");
    }

  return (
    <div className="header">
    <header>
    <div className="navigation-panel">
      <div className="subcontainer">
        <nav className="navbar">
          <img src={Logo} alt="logo" className="navbarLogo" />
          <ul className="navMenu">
            <li className="nav-item"><a href="#top" className="nav-link">Die Metzgerei</a></li>
            <li className="nav-item"><a href="#top" className="nav-link">Dry Aged</a></li>
            <li className="nav-item"><a href="#top" className="nav-link">Fleischversand</a></li>
            <li className="nav-item"><a href="#top" className="nav-link">Events/Kurse</a></li>
            <li className="nav-item"><a href="#top" className="nav-link">Partyservice</a></li>
            <li className="nav-item"><a href="#top" className="nav-link">Tagesessen</a></li>
            <li className="nav-item"><a href="#top" className="nav-link">Impressum</a></li>
            <li className="nav-item"><a href="#top" className="nav-link">Kontakt</a></li>
          </ul>
          <a href="#top" class="download"><img src={Download} alt="download icon"/>download</a>
          <div onClick={hamburger} class="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    </div>

    <section className="workTime">
      <div className="maxWidth">
        <img src={Clock} alt="clock.svg" />
        <span>Opentime: Di. - Fr.: 07:00-13:00 und 15:00-18:30. Sa.: 07:30 - 12:30</span>
        <button onClick={toggle} className="themeToggle">Leichte tema</button>
      </div>
    </section>
  </header>
    </div>
  )
}

export default header