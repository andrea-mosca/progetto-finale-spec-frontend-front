import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3">
      <div className="container-fluid">
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
            <NavLink className="nav-link" to="/coffees/favourite">
              <FontAwesomeIcon icon={farHeart} /> {/* cuore vuoto */}
              {/* <FontAwesomeIcon icon={fasHeart} />  cuore pieno */}
            </NavLink>
            <NavLink className="nav-link" to="/details">
              Approfondisci
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
