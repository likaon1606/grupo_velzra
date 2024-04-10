import React, { useState, useEffect, useRef } from "react";
import "./carousel.css";
import señalizacion from "../../assets/señalizacion.png";
import llave from "../../assets/llave.png";
import años from "../../assets/26_años.png";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const images = [señalizacion, llave, años];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const firstClone = carouselRef.current.children[0].cloneNode(true);
    const lastClone =
      carouselRef.current.children[images.length - 1].cloneNode(true);
    const currentRef = carouselRef.current;

    if (currentRef) {
      currentRef.insertBefore(lastClone, currentRef.firstChild);
      currentRef.append(firstClone);
      currentRef.style.transition = "none"; // Eliminamos la transición temporalmente
      currentRef.style.transform = `translateX(-${currentSlide * 100}%)`;
      setTimeout(() => {
        currentRef.style.transition = "all 0.5s ease"; // Restauramos la transición
      });
    }

    return () => {
      if (currentRef) {
        currentRef.removeChild(lastClone);
        currentRef.removeChild(firstClone);
      }
    };
  }, [currentSlide, images.length]);

  return (
    <div className="carousel-container">
      <div ref={carouselRef} className="carousel">
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
