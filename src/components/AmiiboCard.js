import React from "react";
import "../css/amiiboCard.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import carritoRojo from "../img/carror.png";
import { addToCart } from "../redux/actions/amiiboActions";

const AmiiboCard = (props) => {
  const dispatch = useDispatch();
  //formatter para dinero
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  //useState para el precio del amiibo
  const [price, setPrice] = useState(0);

  //useEffect para calcular el precio
  useEffect(() => {
    let newprice = formatter.format(
      (props.amiibo.tail.codePointAt(3) % 43) * 3
    );
    setPrice(newprice);
  }, []);

  //Añadir al carrito usando dispatch
  function add() {
    props.amiibo.price = price;
    dispatch(addToCart(props.amiibo));
  }
  return (
    <div className="amiiboCard">
      <div className="imageDiv">
        <img
          alt="imgAmiibo"
          className="imgAmiibo"
          src={props.amiibo?.image}
        ></img>
      </div>
      <div className="infoDiv">
        <div className="row">
          <div className="col-10">
            <h5>{props.amiibo?.name}</h5>
          </div>
          <div className="col-2">
            <p className="price">{price}</p>
          </div>
        </div>
        <hr className="redLine"></hr>
        <div className="row">
          <div className="col">
            <h6>{props.amiibo?.amiiboSeries}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Tipo: {props.amiibo?.type}</p>
          </div>
          <div className="col">
            <img
              alt="redCart"
              onClick={() => add()}
              className="redCart"
              align="right"
              src={carritoRojo}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmiiboCard;
