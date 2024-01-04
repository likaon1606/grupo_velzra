import React from "react";
import "../../styles/service.css";

const Services = () => {
  return (
    <div className="container-service">
      <div className="title-service">
        <h1>APLICACIÓN</h1>
        <img className="img-punto" src="./assets/punto.png" alt="" />
        <h1>RECUBRIMIENTOS</h1>
        <img className="img-punto" src="./assets/punto.png" alt="" />
        <h1>PINTURAS</h1>
      </div>

      <div className="section-service">
        <img className="img-service" src="./assets/servicios3.gif" alt="" />
        <ul className="p-service">
          <li>- Impermeabilizantes</li>
          <li>- Pinturas Vinílicas y esmaltes</li>
          <li>- Anticorrosivos</li>
          <li>- Pinturas Industriales</li>
          <li>- Cementos, antiácidos y membranas</li>
          <li>- Retardantes de fuego</li>
          <li>- Recubrimientos de alta temperatura</li>
          <li>- Pintura, tráfico y señalización</li>
          <li>- Pisos decorativos y de alto desempeño</li>
          <li>- Pintura en polvo</li>
          <li>- Pintura de proceso</li>
          <li>- Sistemas de construcción ligera</li>
        </ul>
      </div>

      <div className="title-service">
        <h1>COMERCIALIZADORA</h1>
        <img className="img-punto" src="./assets/punto.png" alt="" />
        <h1>HERRAMIENTA</h1>
        <img className="img-punto" src="./assets/punto.png" alt="" />
        <h1>PLOMERÍA</h1>
      </div>

      <div className="section-service">
        <img className="img-service" src="./assets/servicios2.gif" alt="" />
        <ul className="p-service">
          <li>- Productos de plomería</li>
          <li>- Productos eléctricos</li>
          <li>- Productos de acero</li>
          <li>- Productos de cerrajería</li>
          <li>- Artículos de limpieza</li>
          <li>- Herramientas</li>
        </ul>
      </div>

      <div className="title-service">
        <h1>CONSTRUCCIÓN</h1>
        <img className="img-punto" src="./assets/punto.png" alt="" />
        <h1>ACABADOS</h1>
      </div>

      <div className="section-service">
        <img className="img-service" src="./assets/servicios.gif" alt="" />
        <ul className="p-service">
          <li>- Plakas</li>
          <li>- Plafones</li>
          <li>- Morteros</li>
          <li>- Yesos y pastas avanzadas</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
