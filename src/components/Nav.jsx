import React from 'react';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <div>
      <div className='cont-info'>
        <ul className='info'>
          <li>
            <img className='icons' src='./assets/whats.png' alt='celular' />
          </li>
          <li>56 2552 5553</li>
          <li>
            <img className='icons' src='./assets/mail.png' alt='mail' />
          </li>
          <li>ventas@grupovelzra.com.mx</li>
        </ul>
      </div>
      <div className='nav'>
        <div className='logo'>
          <img src='./assets/logo.png' alt='logo' />
        </div>
        <div>
          <ul className='menu'>
            <li className='menu-li'>Inicio</li>
            <li className='menu-li'>Nosotros</li>
            <li className='menu-li'>Servicios / Productos</li>
            <li className='menu-li'>Clientes</li>
            <li className='menu-li'>Contacto</li>
          </ul>
        </div>
        <div>
          {' '}
          <ul className='contact1'>
            <li>
              <img
                className='icons'
                src='./assets/face-blanco.svg'
                alt='facebook'
              />
            </li>
            <li>
              <img
                className='icons'
                src='./assets/youtube2.jpg'
                alt='youtube'
              />
            </li>
            <li>
              <img className='icons' src='./assets/insta.png' alt='instagram' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
