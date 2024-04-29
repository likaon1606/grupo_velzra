import React from "react";
import "../../styles/about.css";
import Carousel from "../carousel/Carousel";

import video from "../../assets/velzra.mp4";
import velzra from "../../assets/velzra.png";
import siv from "../../assets/siv.png";
import veltor from "../../assets/veltor.png";
import sport from "../../assets/sport.png";
import cons1 from "../../assets/cons-1.png";
import cons2 from "../../assets/cons-2.png";
import cons3 from "../../assets/cons-3.png";
import cons4 from "../../assets/cons-4.png";
import mision from "../../assets/mision.png";
import vision from "../../assets/vision.png";
import timeline from "../../assets/timeline.png";
import CarouselTop from "../carousel_top/CarouselTop";

const About = () => {
  return (
    <>
      {" "}
      <div className="img-container">
        <div className="img-port">
          <div className="container-text">
            <p>Construcción | Acabados | Comercialización</p>
            <h1>
              Hacemos de tus proyectos, <br />
              soluciones.
            </h1>
            <button>
              <span>CONOCÉNOS</span>
              <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z"></path>
              </svg>{" "}
              <br />
              ¡PROYECTOS LLAVE EN MANO!
            </button>
          </div>
        </div>
      </div>
      <div className="container-video">
        <video
          className="video"
          controls
          onError={(e) => console.error("Error loading video", e)}
        >
          <source src={video} />
        </video>
      </div>
      <div className="container-body">
        <div className="body-text">
          <h1 className="body-t">¿Quiénes Somos?</h1>
          <p className="body-p">
            Somos un grupo empresarial líder en la industria de la construcción
            con presencia en <strong>México y Panamá.</strong> Destacamos en la
            comercialización de productos y ofrecemos servicios especializados a
            través de nuestras empresas, Grupo Industrial Veltor y Soluciones en
            Acabados Velzra. Recientemente hemos incorporado Sport Marking, un
            servicio especializado en el marcado de líneas para pistas de
            carrera. Además, somo especialistas en embellecer espacios a través
            de Velzra Acabados. Nuestra diversificación de servicios refleja
            nuestro compromiso con la excelencia y la satisfacción integral de
            las necesidades de nuestros clientes.
          </p>
        </div>
      </div>
      <div className="image-brands">
        <img src={velzra} alt="velzra" />
        <img src={siv} alt="siv" />
        <img src={veltor} alt="veltor" />
        <img src={sport} alt="sport" />
      </div>
      <div className="image-large">
        <div className="flex-img">
          <img src={cons1} alt="cons1" />
          <div class="overlay">
            <div class="overlay-content">
              <h1>Construcción Infraestructuras</h1>
              <p>
                Contamos con la logística para realizar proyectos fundamentales
                para el desarrollo de una región, abarcando la construcción de
                carreteras, puentes, túneles y aeropuertos.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-img">
          <img src={cons2} alt="cons2" />
          <div class="overlay">
            <div class="overlay-content">
              <h1>Construcción Residencial</h1>
              <p>
                Nos especializamos en la creación de hogares, desde viviendas
                unifamiliares hasta complejos de apartamentos.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-img">
          <img src={cons3} alt="cons3" />
          <div class="overlay">
            <div class="overlay-content">
              <h1>Construcción Industrial</h1>
              <p>
                Nos dedicamos a las edificaciones destinadas a servicios
                públicos y sociales, como escuelas, hospitales y edificios
                gubernamentales.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-img">
          <img src={cons4} alt="cons4" />
          <div class="overlay">
            <div class="overlay-content">
              <h1>Construcción Institucional</h1>
              <p>
                Nos dedicamos a las edificaciones destinadas a servicios
                públicos y sociales, como escuelas, hospitales y edificios
                gubernamentales
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <Carousel />
      <hr></hr>
      <div className="history">
        <h1>Historia</h1>
        <p>
          Creada en 1997, Grupo Velzra es una empresa dedicada a la
          comercialización y construcción.
        </p>
        <p>
          Nuestros fundadores han respaldado el trabajo de la construcción de
          una manera sólida, rigiéndose por los valores de responsabilidad,
          honestidad, compromiso, eficiencia y ética; haciendo de Grupo Velzra
          una empresa rentable y de calidad en sus servicios.
        </p>
        <p>
          Estamos preparados para atender TODOS los requerimientos de nuestros
          clientes, ofreciendo un SERVICIO INTEGRAL, cumpliendo con las medidas
          de seguridad y hospitalidad necesarias, para fortalecer nuestras
          relaciones a largo plazo.
        </p>
        <p>
          {" "}
          La EVOLUCIÓN constante, nos ha permitido crecer y creer en nuestra
          empresa, por lo que estamos cien por ciento seguros de nuestro
          compromiso con nuestros colaboradores y socios comerciales.
        </p>
      </div>
      <div className="container-vimi">
        <div className="mision">
          <img src={mision} alt="misión" />
          <p>
            Nuestra misión es innovar y optimizar los procesos constructivos en
            proyectos de alto impacto. Como corporativo empresarial, nos
            dedicamos a ofrecer soluciones vanguardistas que son eficientes
            desde la planificación hasta la ejecución.
          </p>
        </div>

        <div className="vision">
          <img src={vision} alt="misión" />
          <p>
            Evolucionar y convertirnos en un corporativo que ofrezca soporte a
            proyectos de alta especialidad y genere proyectos inmobiliarios
            rentables, con el soporte de profesionales, especificadores
            técnicos, colaboradores capacitados y personal administrativo con
            altos valores éticos.
          </p>
        </div>
      </div>
      <div className="timeline">
        <img src={timeline} alt="timeline" />
      </div>
      <hr />
      <CarouselTop />
    </>
  );
};

export default About;
