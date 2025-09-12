import { Link } from "react-router-dom";
import { useCoffeeContext } from "../context/CoffeeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as fasHeart,
  faPlus,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import React from "react";

const CoffeeCard = React.memo(function CoffeCard({ title, category, id }) {
  const { favouriteCoffee, toggleFavourite, compareList, toggleCompare } =
    useCoffeeContext();

  const isFavorite = React.useMemo(
    () => favouriteCoffee.some((fav) => fav.id === id),
    [favouriteCoffee, id]
  );
  const isInCompare = React.useMemo(
    () => compareList.some((item) => item.id === id),
    [compareList, id]
  );
  return (
    <div className="card my-card-list mt-5 h-100">
      <Link to={`/coffees/${id}`} className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-text">
          <strong>categoria:</strong> {category}
        </div>
      </Link>
      <div className="card-footer d-flex justify-content-center gap-3">
        <div>
          <button
            type="button"
            onClick={() => toggleFavourite({ id, title, category })}
            className="btn btn-link p-0"
          >
            {isFavorite ? (
              <FontAwesomeIcon icon={fasHeart} className="text-danger" />
            ) : (
              <FontAwesomeIcon icon={farHeart} className="text-secondary" />
            )}
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => toggleCompare(id)}
            className={`btn btn-sm ${
              isInCompare ? "btn-outline-danger" : "btn-outline-success"
            }`}
          >
            {isInCompare ? (
              <>
                <FontAwesomeIcon icon={faPlus} /> Rimuovi
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faCheck} /> Aggiungi alla pagina di
                confronto
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
});
export default CoffeeCard;
