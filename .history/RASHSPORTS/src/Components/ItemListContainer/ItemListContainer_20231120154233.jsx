import React from 'react';
import { getProducts } from "../../asyncMock"
import { ItemCount } from "../ItemCount/ItemCount"
import { useState, useEffect } from 'react';
import	{ ItemList } from "../ItemList/ItemList"
import { useParams } from 'react-router-dom';

const ItemListContainer = ({  }) => {
  const { category } = useParams();

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProducts()
    .then( resp => setProducts(resp))
    .catch( error => console.log(error));
  }, [])
  
  return (
    { isLoading ? <h2> Cargando productos... </h2> : <ItemList products ={products} /> }
  );
};

export default ItemListContainer;
