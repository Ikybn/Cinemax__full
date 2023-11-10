import React from "react";
import cinemaxLogo from "../assets/cinemax-lg.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Nav />
      <Link to="/">{<img src={cinemaxLogo} alt="" width="150" />}</Link>
      <ul class="nav">
        <li class="nav-item">
          <Link to="/">Recherche</Link>
        </li>
        <li class="nav-item">
          <Link to="/favorites">Mes favoris</Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
