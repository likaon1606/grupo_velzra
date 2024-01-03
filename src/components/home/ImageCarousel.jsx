import React, { useState, useEffect, useMemo } from "react";
import "/assets/PPG.png";
import "/assets/TRUPER.png";
import "/assets/MEZCLA.png";
import "/assets/PLAKA.png";

import "../../styles/imageCarousel.css";

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const certifications = useMemo(
    () => [
      { url: "/assets/PPG.png" },
      { url: "/assets/TRUPER.png" },
      { url: "/assets/MEZCLA.png" },
      { url: "/assets/PLAKA.png" },
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % certifications.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [certifications.length]);

  return (
    <div className="principal">
      <div className="about">
        <div className="carousel">
          <div className="carousel-inner">
            {certifications.map((certification, index) => (
              <div
                className={`carousel-item ${
                  index === activeIndex ? "active" : ""
                }`}
                key={index}
              >
                <img
                  src={certification.url}
                  className="d-block w-100"
                  alt={`Certification ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
