import React from "react";
import "../css/checkout.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardCheckout from "./CardCheckout";
import { useDispatch } from "react-redux";
import { removeAllCart } from "../redux/actions/amiiboActions";
import { useHistory } from "react-router-dom";

const Checkout = () => {
  const [cartList, setCartList] = useState(null);
  const [total, setTotal] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  //Traer todos los productos
  const cart = useSelector((state) => state).allProducts.cart;

  //formatter de dinero
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  //useEffect para recalcular el valor total y crear la lista de productos para render
  useEffect(() => {
    if (cart.length >= 0) {
      const nuevo = cart.map((amiibo, key) => {
        return (
          <div key={key} align="center" className="col-lg-6 col-sm-12 py-3">
            <CardCheckout amiibo={amiibo} />
          </div>
        );
      });
      setCartList(nuevo);
      let total = 0;
      for (let amiibo of cart) {
        console.log(amiibo.price);
        total += amiibo.price.substring(1) * amiibo.qty;
      }
      setTotal(formatter.format(total));
    }
  }, [cart]);

  //remueve todos los productos del carrito y regresa a home
  function comprar() {
    dispatch(removeAllCart());
    alert("Felicitaciones! Compraste tus amiibos");
    history.push('/')
  }
  return (
    <div className="container mainCheck py-5">
      {cart.length > 0 ? "" : <h3>No products</h3>}

      {cart.length > 0 ? (
        <div>
          <div align="left" className="divCheckout py-3 row">
            {cartList}

            <div className="divTotal">
              <h4 className="checkout">Total:</h4>
              <hr className="whiteline"></hr>
              <h4 className="py-2 checkout">{total}</h4>
            </div>
          </div>
          <button onClick={() => comprar()} className="comprar">
            Comprar
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Checkout;
