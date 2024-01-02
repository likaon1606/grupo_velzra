import React from "react";
import "../../styles/about.css";

const About = () => {
  return (
    <>
      {" "}
      <div className="video-container">
        <video className="video" loop autoPlay muted>
          <source src="./assets/construccion.mp4" />
        </video>
      </div>
      <div className="container-body">
        <div className="body-text">
          <h1 className="body-t">¿Quiénes Somos?</h1>
          <p className="body-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            maiores ad porro fugit iure, consequatur inventore ea harum,
            perspiciatis accusamus, optio repudiandae natus a doloribus culpa
            totam odio nostrum doloremque similique beatae? Perferendis rem
            aperiam ex temporibus ab! Libero ratione nam inventore quo quae,
            placeat veritatis! Quia qui quisquam ut.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
