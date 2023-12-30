import React from 'react';
import { getProducts } from "../../asyncMock"
import { ItemCount } from "../ItemCount/ItemCount"
import { useState, useEffect } from 'react';
import	{ itemList } from "../ItemList/ItemList"

const ItemListContainer = ({  }) => {

  const [products, setProducts] = useState([])




  useEffect(() => {
    getProducts()
    .then( resp => setProducts(resp))
    .catch( error => console.log(error));
  }, [])
  

  return (
    <div className="item-list-container">
      <p>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
