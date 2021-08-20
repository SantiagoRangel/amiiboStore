import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AmiiboCard from "./AmiiboCard";
import "../css/list.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { setProducts } from "../redux/actions/amiiboActions";

const List = () => {
  const dispatch = useDispatch();

  //useState para lista de amiibos
  const [amiiboList, setAmiiboList] = useState(null);

  //Traer lista de amiibos del store
  const amiibos = useSelector((state) => state).allProducts.products.amiibo;

  //Fetch de amiibos
  const fetchAmiibos = async () => {
    const response = await axios
      .get("https://www.amiiboapi.com/api/amiibo/")
      .catch((err) => {
        console.log("Error: ", err);
      });
    dispatch(setProducts(response.data));
  };

  //useEffect para ejecutar fetch al iniciar componente
  useEffect(() => {
    fetchAmiibos();
  }, []);

  //useEffect para crear lista de amiibos
  useEffect(() => {
    console.log(amiibos);
    if (amiibos) {
      const nuevo = amiibos.map((amiibo, key) => {
        return (
          <div key={key} className="col-lg-4 col-sm-12 py-3">
            <AmiiboCard amiibo={amiibo} />
          </div>
        );
      });
      setAmiiboList(nuevo);
    }
  }, [amiibos]);

  return (
    <div className="divList">
      <div className="container">
        {amiiboList ? (
          <div className="row">{amiiboList}</div>
        ) : (
          <h3>...Cargando</h3>
        )}
      </div>
    </div>
  );
};

export default List;
