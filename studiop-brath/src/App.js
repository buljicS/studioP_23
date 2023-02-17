//core
import React from "react";
import "../src/components/sass/style.scss";
//core

//page-components
import Header from "./components/html/header";
import Hero from "./components/html/hero";
import DryAged from "./components/html/dryaged";
import GrillKurs from "./components/html/grillkurs";
import DasHandwerk from "./components/html/dashandwerk";
import Custome from "./components/html/custome";
import Fleischversand from "./components/html/fleischversand";
import Genussnetz from "./components/html/genussnetz";
import Award from "./components/html/award";
import Comments from "./components/html/comments";
import Footer from "./components/html/footer";
//page-components

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <DryAged />
      <GrillKurs />
      <DasHandwerk />
      <Custome />
      <Fleischversand />
      <Genussnetz />
      <Award />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;
