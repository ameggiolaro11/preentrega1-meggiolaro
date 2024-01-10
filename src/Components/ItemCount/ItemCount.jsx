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
    <div className="container mt-4 text-center">
      <div className="input-group">
        <button className="btn btn-outline-secondary" type="button" onClick={decrement}>
          -
        </button>
        <input type="text" className="form-control text-center" value={count} readOnly />
        <button className="btn btn-outline-secondary" type="button" onClick={increment}>
          +
        </button>
      </div>
      <button className="btn btn-primary mt-3" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};
