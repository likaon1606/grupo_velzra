import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/nav.css';

const Nav = () => {
  return (
    <div className='container-nav'>
      <div className='cont-info'>
        <div>
          <ul>
            <a
              className='icon-img'
              href='https://api.whatsapp.com/send/?phone=5641815041'
              target='blank'
            >
              <li>
                <img className='icons' src='./assets/whats.png' alt='celular' />
              </li>
            </a>
            <a className='icon-img' href='mailto:ventas@grupovelzra.com.mx'>
              <li>
                <img className='icons' src='./assets/mail.png' alt='mail' />
              </li>
            </a>
          </ul>
        </div>
        <div>
          <ul>
            <a
              className='icon-img'
              href='https://www.linkedin.com/company/3804283/admin/feed/posts/'
              target='blank'
            >
              <li>
                <img
                  className='icons'
                  src='./assets/linkedin.png'
                  alt='linkedin'
                />
              </li>
            </a>
            <a
              className='icon-img'
              href='https://www.youtube.com/@grupovelzraholding'
              target='blank'
            >
              <li>
                <img
                  className='icons'
                  src='./assets/youtube.png'
                  alt='youtube'
                />
              </li>
            </a>

            <a
              className='icon-img'
              href='https://www.instagram.com/grupovelzra/'
              target='blank'
            >
              <li>
                <img
                  className='icons'
                  src='./assets/insta.png'
                  alt='instagram'
                />
              </li>
            </a>
          </ul>
        </div>
      </div>

      <div className='nav'>
        <div className='logo'>
          {' '}
          <img src='./assets/logo.png' alt='logo' />
        </div>

        <div>
          <ul className='menu'>
            <li className='menu-li'>
              <NavLink exact to='/'>
                INICIO
              </NavLink>
            </li>

            <li className='menu-li'>
              <NavLink to='/modelodenegocio'>MODELO DE NEGOCIO</NavLink>
            </li>
            <li className='menu-li'>
              <NavLink to='/servicio'>SERVICIO</NavLink>
            </li>
            <li className='menu-li'>
              <NavLink to='/contacto'>CONTACTO</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
