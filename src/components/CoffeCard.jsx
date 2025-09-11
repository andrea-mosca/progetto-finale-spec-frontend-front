import { Link } from "react-router-dom";
import { useCoffeeContext } from "../context/CoffeeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

export default function CoffeCard({ title, category, id }) {
  const { favouriteCoffee, toggleFavourite } = useCoffeeContext();
  const isFavorite = favouriteCoffee.some((fav) => fav.id === id);

  return (
    <div className="card my-card-list mt-5 h-100">
      <Link to={`/coffees/${id}`} className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-text">
          <strong>categoria:</strong> {category}
        </div>
      </Link>
      <div className="card-footer">
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
    </div>
  );
}
