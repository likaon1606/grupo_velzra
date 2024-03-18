import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/nav.css";
import logo from "/assets/logo.png";
import arrowIcon from "/assets/flecha.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="menu">
      <div className="navbar">
        <div className={`nav_items sci ${isOpen && "open"}`}>
          <NavLink
            to="/"
            end
            className="fa animated-line"
            onClick={() => setIsOpen(false)}
          >
            Nosotros
          </NavLink>

          <NavLink
            to="/proyectos"
            end
            className="animated-line"
            onClick={() => setIsOpen(false)}
          >
            Proyectos
          </NavLink>
          <div
            className="submenu"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/marcas" end className="animated-line">
              Marcas
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
        </div>
        <div className="nav_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="icons-social">
          <a target="blank">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </span>
          </a>
          <a target="blank">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </span>
          </a>
          <a target="blank">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </span>
          </a>
          <a target="blank">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </span>
          </a>
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

export default Nav;
