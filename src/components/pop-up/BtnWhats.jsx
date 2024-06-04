import React from 'react';
import './btnWhats.css';

import whats from '../../assets/icons8-whatsapp-48.png';

const BtnWhats = () => {
  return (
    <div className='container-pop'>
      <div className='whats-pop'>
        <p>¿Necesitas ayuda o una cotización?</p>
        <img src={whats} alt='whats' />
      </div>
    </div>
  );
};

export default BtnWhats;
