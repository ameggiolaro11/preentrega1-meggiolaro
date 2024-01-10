import { ItemCount } from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../providers/CartProvider";

export const ItemDetail = ({ description, img, price, stock }) => {
  const { addItem } = useContext(CartContext);

  return (
    <div className="border m-2">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <img src={img} alt="" />
          <p className="card-text"> {description} </p>
          <p>Precio: ${price} </p>
          <p>Stock: {stock} unidades</p>
          <ItemCount stock={stock} onAdd={() => addItem({ description, img, price })} />
        </div>
      </div>
    </div>
  );
};