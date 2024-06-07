import React, { useEffect, useRef } from 'react';
import './projects.css';
import { images, proyectos } from './projects_img';

const Proyectos = () => {
  const imgRefs = useRef([]);

  useEffect(() => {
    const currentRefs = imgRefs.current;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    });

    currentRefs.forEach((img) => {
      if (img) {
        observer.observe(img);
      }
    });

    return () => {
      currentRefs.forEach((img) => {
        if (img) {
          observer.unobserve(img);
        }
      });
    };
  }, []);

  return (
    <div className='page-container'>
      <div className='container-map-img'>
        {proyectos.map(({ id, title, description }, index) => (
          <div className='map-img' key={id}>
            <img
              ref={(el) => (imgRefs.current[index] = el)}
              data-src={images[id]}
              alt={title}
              className='lazy-img'
            />
            <div className='overlay-proj'>
              <div className='overlay-content-proj'>
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
