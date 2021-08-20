import React from "react";
import "../css/cart.css";
import CartCard from "./CartCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {
  //useState para la lista de producots y para calcular el valor total de la compra
  const [cartList, setCartList] = useState(null);
  const [total, setTotal] = useState(null);

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
          <div key={key} className="py-3">
            <CartCard amiibo={amiibo} />
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
  return (
    <div className="divCart">
      <div className="container py-2">
        <Link to="/Checkout">
          <h4 className="checkoutMain">Checkout</h4>
        </Link>
        {cartList ? cartList : ""}
        <h4 className="checkout">Total:</h4>
        <hr className="whiteline"></hr>
        <h4 className="checkout">{total}</h4>
      </div>
    </div>
  );
};

export default Cart;
