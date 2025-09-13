import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { useCoffeeContext } from "../context/CoffeeContext";

export default function Navbar() {
  const { favouriteCoffee, compareList } = useCoffeeContext();
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3">
      <div className="container-fluid ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">
              Home page
            </NavLink>
            <NavLink className="nav-link" to="/details">
              Approfondisci
            </NavLink>
          </div>
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link" to="/coffees/favourite">
              {favouriteCoffee.length === 0 ? (
                <FontAwesomeIcon icon={farHeart} className="text-secondary" />
              ) : (
                <FontAwesomeIcon icon={fasHeart} className="text-danger" />
              )}
            </NavLink>
            <NavLink
              className={`nav-link ${
                compareList.length > 0 ? "text-success" : ""
              }`}
              to="/compare"
            >
              Confronta
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
