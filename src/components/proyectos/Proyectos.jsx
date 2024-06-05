import React from 'react';

import './projects.css';
import imgs_projects from './projects_img';

const Proyectos = () => {
  return (
    <div className='map-img'>
      {imgs_projects.map((img, index) => (
        <img src={img} alt={`img ${index + 1}`} key={index} />
      ))}
    </div>
  );
};

export default Proyectos;
