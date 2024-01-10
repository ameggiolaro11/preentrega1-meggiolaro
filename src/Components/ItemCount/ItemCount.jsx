import { useState } from "react";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  
  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };


  return (
    <div className="d-flex flex-column col-2 justify-content-center align-content-center p-4">
      <div className="d-flex align-items-center">
        <button className="btn btn-outline-secondary" onClick={increment}>
          +
        </button>
        <strong className="mx-3">{count}</strong>
        <button className="btn btn-outline-secondary" onClick={decrement}>
          -
        </button>
      </div>
      <button className="btn btn-outline-primary mt-2" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
  }