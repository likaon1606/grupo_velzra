import React from 'react';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <div>
      <div className='nav'>
        <ul className='menu'>
          <li>Inicio</li>
          <li>Nosotros</li>
          <li>Servicios</li>
          <li>Clientes</li>
        </ul>

        <ul className='contact1'>
          <li>
            <img className='icons' src='./assets/face.svg' alt='facebook' />
          </li>
          <li>
            <img className='icons' src='./assets/youtube.svg' alt='youtube' />
          </li>
          <li>
            <img
              className='icons'
              src='./assets/instagram.svg'
              alt='instagram'
            />
          </li>
        </ul>
      </div>
      <div className='info'>
        <ul>
          <li>
            <img className='icons' src='./assets/cel.png' alt='celular' />
            56 2552 5553
          </li>
          <li>
            <img className='icons' src='./assets/mail.png' alt='mail' />
            ventas@grupovelzra.com.mx
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
