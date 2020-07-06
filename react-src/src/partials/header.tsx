import React from "react";
import { Link } from "react-router-dom";
import Logo from "../asset/images/profile.png";

export const Header = () => {
  return (
    <header className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <div className="logo-wrapper">
            <img src={Logo} alt={"Learn Tech Free"} className="w-100 h-100" />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link" to="/posts">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pages/contact">
                contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
