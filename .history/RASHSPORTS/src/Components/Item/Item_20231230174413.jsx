import { Link } from "react-router-dom";

export const Item = ({ id, name, img, description }) => {
  return (
    <div className="col-md-2 mb-3">
      <div className="card">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <Link to={`/item/${id}`}>
            <button className="btn btn-outline-success">Detalles</button>
          </Link>
            <button className="btn btn-outline-success">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};
