import React from 'react';
import './btnWhats.css';

import whats from '../../assets/icons8-whatsapp-48.png';

const BtnWhats = () => {
  return (
    <div className='container-pop'>
      <a
        className='a_whats'
        href='https://api.whatsapp.com/send/?phone=5215641815041&text=%C2%A1Hola%21%2C%0D%0ANecesito+ayuda.&type=phone_number&app_absent=0'
        target='__blank'
      >
        <div className='whats-pop'>
          <p>¿Necesitas ayuda o una cotización?</p>
          <img src={whats} alt='whats' />
        </div>
      </a>
    </div>
  );
};

export default BtnWhats;
