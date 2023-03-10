import React from 'react'
import '../sass/dashandwerk.scss';

const dashandwerk = () => {
  return (
    <section className="dh">
    <div className="top">
      <h2>Das Handwerk</h2>
      <h4>alles über unsere Hausgemachte Produkte</h4>
      <div className="topText">
        <p>
          Halt amet, consectetur Handtasche elit, sed do eiusmod tempor
          Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad
          minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi
          Sprechen Sie deutsch aliquip ex ea commodo consequat.
        </p>
          <p>Wiener Schnitzel aute irure dolor in Guten Tag mollit anim Stuttgart.</p>
            <p>id
          latine indoctum complectitur HugoClub Mate mea meliore denique
          nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod
          assentior
        </p>
        <button className="dhbtn">Das Handwerk</button>
      </div>
    </div>

    <div className="mid">
      <img className="vonal" src="./img/vonal 1.svg" alt="mid break" />
    </div>

    <div className="bot">
      <div className="g1">
        <img src="./img/wurstchen.png" alt="g61.png" />
      <img src="./img/hahnchen.png" alt="g60.png" />
      </div>
      <div class="g2">
            <img src="./img/shwein.png" alt="g59.png" />
            <img src="./img/rind.png" alt="g58.png" />
      </div>
    </div>
  </section>
  )
}

export default dashandwerk