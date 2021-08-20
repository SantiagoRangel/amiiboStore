import React from "react";
import "../css/header.css";
import whiteLogo from "../img/logowhite.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import carrito from "../img/carrob.png";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { setCartLocal } from "../redux/actions/amiiboActions";
const Header = () => {
  // useStates para el cart y cantidad de compras
  const [qty, setQty] = useState(0);
  const [cart, setCart] = useState(false);

  // get del estado para el cart
  const cartRedux = useSelector((state) => state).allProducts.cart;

  // toggle para desplegegar carrito
  function toggleCart() {
    cart ? setCart(false) : setCart(true);
  }

  const dispatch = useDispatch();

  //use effect para inicializar y para detectar cambio en el carrito
  useEffect(() => {
    let newCart = JSON.parse(localStorage.getItem("cart"));
    if (newCart) {
      dispatch(setCartLocal(newCart));
      let newQty = 0;
      for (let amiibo of newCart) {
        newQty += amiibo.qty;
      }
      setQty(newQty);
    }
  }, []);
  useEffect(() => {
    let newQty = 0;
    for (let amiibo of cartRedux) {
      newQty += amiibo.qty;
    }
    setQty(newQty);
  }, [cartRedux]);


  return (
    <div className="header ">
      <div className="row">
        <div className="col-lg-2 col-sm-12">
          <Link to="/">
            <img alt="logo" className="logoHeader" src={whiteLogo}></img>
          </Link>
        </div>

        <div className="col-lg-2 col-sm-12">
          <Link to="/Amiibos">
            <h2 className="titleHeader">Amiibos</h2>
          </Link>
        </div>
        <div className="col-6"></div>
        <div className="col-lg-2  col-sm-12">
          <div className="row">
            <div className="col">
              <img
                alt="imgCarrito"
                onClick={() => toggleCart()}
                className="imgCarrito"
                src={carrito}
              ></img>
            </div>
            <div className="col">
              <h4 className="qty">{qty}</h4>
            </div>
          </div>

          {cart ? <Cart /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Header;
