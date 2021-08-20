import React from "react";
import "../css/cartcard.css";
import minus from "../img/minus.jpg";
import plus from "../img/plus.jpg";
import cancel from "../img/cancel.png";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  subsToCart,
} from "../redux/actions/amiiboActions";

const CardCheckout = (props) => {

    const dispatch = useDispatch();

  //Añadir producto
  function add() {
    dispatch(addToCart(props.amiibo));
  }

  //Eliniar producto
  function remove() {
    dispatch(removeFromCart(props.amiibo));
  }

  //Restar producto
  function subs() {
    if (props.amiibo.qty > 1) {
      dispatch(subsToCart(props.amiibo));
    }
  }
    return (
        <div  className="cartCard2 py-3">
          <div className="row">
            <div className="col-4">
              <img className="cardImage" src={props.amiibo.image}></img>
            </div>
            <div align="left" className="col-7">
              <div className="row">
                <div className="col">
                  <h5>{props.amiibo.character}</h5>
                </div>
                <div className="col">
                  <img
                    src={cancel}
                    onClick={() => remove()}
                    align="right"
                    className="remove"
                  ></img>
                </div>
              </div>
              <h6>{props.amiibo.amiiboSeries}</h6>
              <hr className="redLine"></hr>
              <h6>{props.amiibo.price}</h6>
              <div className="row">
                <div className="col-4 hover">
                  <img onClick={() => subs()} src={minus} className="minus"></img>
                </div>
                <div className="col-4">
                  <p>{props.amiibo.qty}</p>
                </div>
                <div className="col-4 hover">
                  <img onClick={() => add()} src={plus} className="plus"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default CardCheckout;