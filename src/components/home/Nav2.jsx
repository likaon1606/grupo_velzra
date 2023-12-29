import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../../styles/nav2.css";

import logo from "../../../public/assets/logo.png";

const Nav2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu">
      <div className="navbar">
        <div className="nav_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className={`nav_items sci ${isOpen && "open"}`}>
          <NavLink
            exact
            to="/"
            className="fa animated-line"
            onClick={() => setIsOpen(!isOpen)}
          >
            INICIO
          </NavLink>
          <NavLink
            to="/modelodenegocio"
            className="animated-line"
            onClick={() => setIsOpen(!isOpen)}
          >
            MODELO DE NEGOCIO
          </NavLink>
          <NavLink
            to="/servicio"
            className="animated-line"
            onClick={() => setIsOpen(!isOpen)}
          >
            SERVICIO
          </NavLink>
          <NavLink
            to="/contacto"
            className="animated-line"
            onClick={() => setIsOpen(!isOpen)}
          >
            CONTACTO
          </NavLink>
        </div>
        <div
          className={`nav_toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Nav2;
