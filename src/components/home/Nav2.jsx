import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../../styles/nav2.css";

import logo from "/assets/logo.png";
import arrowIcon from "/assets/flecha.png";

const Nav2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

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
            onClick={() => setIsOpen(false)}
          >
            INICIO
          </NavLink>
          <div className="submenu">
            <NavLink to="/modelodenegocio" className="animated-line">
              MODELO DE NEGOCIO
            </NavLink>
            <img
              className="arrow-icon"
              src={arrowIcon}
              alt=""
              onClick={toggleSubMenu}
            />
            {isOpen && (
              <div className="submenu-content">
                <NavLink to="/opcion1" className="animated-line">
                  Opción 1
                </NavLink>
                <NavLink to="/opcion2" className="animated-line">
                  Opción 2
                </NavLink>
                <NavLink to="/opcion3" className="animated-line">
                  Opción 3
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/servicio"
            className="animated-line"
            onClick={() => setIsOpen(false)}
          >
            SERVICIO
          </NavLink>
          <NavLink
            to="/contacto"
            className="animated-line"
            onClick={() => setIsOpen(false)}
          >
            CONTACTO
          </NavLink>
        </div>
        <div
          className={`nav_toggle ${isOpen && "open"}`}
          onClick={toggleSubMenu}
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
