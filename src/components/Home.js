import React from "react";
import "../css/home.css";
import amiibo from "../img/amiibo.png";
import splat from "../img/splat.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home ">
      <div className="container">
        <div className="divHome ">
          <div className="row">
            <div className="col-7">
              <h2 className="titleHome">
                Aprovecha los mejores descuentos para comprar tu próximo Amiibo
              </h2>
              <img alt="Amiibo" className="titleAmiibo" src={amiibo}></img>
            </div>
            <div className="col-2"></div>
            <div className="col-3">
              <img alt="splat"className="splat" src={splat}></img>
            </div>
          </div>
        </div>
        <div className="flex">
          <Link to="/Amiibos">
            <button className="comprar">Comprar ahora</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
