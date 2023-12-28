import React from 'react';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <div>
      <div className='cont-info'>
        <ul className='info'>
          <a href="https://api.whatsapp.com/send/?phone=5625525553" target='blank'>
          <li>
            <img className='icons' src='./assets/whats.png' alt='celular' />
          </li>
          </a>
          <li>56 2552 5553</li>
          <a href="mailto:ventas@grupovelzra.com.mx">
          <li>
            <img className='icons' src='./assets/mail.png' alt='mail' />
          </li>
          </a>
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
          <ul className='contact1'><a href="https://www.facebook.com/profile.php?id=100087222829837" target='blank'>
            <li>
              <img
                className='icons'
                src='./assets/face-blanco.svg'
                alt='facebook'
              />
            </li>
            </a>
           <a href="https://www.youtube.com/@grupovelzraholding" target='blank'></a>
            <li>
              <img
                className='icons'
                src='./assets/youtube2.jpg'
                alt='youtube'
              />
            </li>
            
            <a href="https://www.instagram.com/grupovelzra/" target='blank'>
            <li>
              <img className='icons' src='./assets/insta.png' alt='instagram' />
            </li>
            </a>
            <a href="https://www.linkedin.com/company/3804283/admin/feed/posts/" target='blank'>
            <li>
              <img className='icons' src='./assets/linkedin.png' alt='linkedin' />
            </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
