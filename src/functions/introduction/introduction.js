import React from "react";
import blueShirtGreyBack from "./../../img/blueShirtGreyBack.jpg";
import "./introduction.css";
import PortfolioItem from "../portfolioItem/portfolioItem";
import Portfolio from "../portfolio/portfolio";

function Introduction() {
  return (
    <div className="backgroundFiller">
      <div className="introCard">
        <div>
          <img alt=" Jon Standing" className="imgJon" src={blueShirtGreyBack} />
        </div>
        <div className="introCardText">
          <hr></hr>
          <h1>Jon O'Neil</h1>
          <h4>Software Developer</h4>
          <hr></hr>
          <p> my name jon, my name jon, my name jon</p>
          <p> my name jon, my name jon, my</p>
          <hr></hr>
        </div>
      </div>


      <Portfolio/>

      
    </div>
  );
}

export default Introduction;
