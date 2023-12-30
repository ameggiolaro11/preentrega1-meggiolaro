import React from 'react';
import { getProducts } from "../../asyncMock";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    getProducts()
    .then((resp) => {
      if (category) {
        const productsFilter = resp.filter( product => product.category === category);
        if(productsFilter.length > 0) {
          setProducts(productsFilter);
        } else { 
          setProducts(resp);
        } 
      } else {
        setProducts(resp);
      }
      setIsLoading(false);
    })
    .catch((error) => console.log(error));
  }, [category]); 
  
  return (
    <>
      {isLoading ? (
        <div>
          <h2>Cargando productos...</h2>
          {/* Utiliza la imagen de carga */}
          <img src="/loading.gif" alt="Cargando" />
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

export default ItemListContainer;
