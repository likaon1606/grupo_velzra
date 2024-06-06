import React from 'react';

import './projects.css';
import img_1 from '../../assets/imgs/ISSTE Merida.jpg';
import img_2 from '../../assets/imgs/google.jpg';
import img_3 from '../../assets/imgs/formula_e.jpg';
import img_4 from '../../assets/imgs/cosmopol.jpg';
import img_5 from '../../assets/imgs/CANCHAS deportivas.jpg';
import img_6 from '../../assets/imgs/Camino 3B.jpg';
import img_7 from '../../assets/imgs/Autodromo.jpg';
import img_8 from '../../assets/imgs/areopuerto.jpg';
import img_9 from '../../assets/imgs/3B CEDIS1.jpg';
import img_10 from '../../assets/imgs/PIRELLI.png';
import img_11 from '../../assets/imgs/F1 linea deportiva.png';

const Proyectos = () => {
  return (
    <div className='page-container'>
      <div className='container-map-img'>
        <div className='map-img'>
          <img src={img_1} alt='img' />
          <div className='overlay'>
            <div className='overlay-content'>
              <h1>ISSSTE</h1>
              <p>Remozamiento a unidades médicas en el Estado de Yucatán.</p>
            </div>
          </div>
        </div>
        <div className='map-img'>
          <img src={img_2} alt='img' />
          <div className='overlay'>
            <div className='overlay-content'>
              <h1>GOOGLE</h1>
              <p>
                Aplicación de pintura en más de 75 fachadas en menos de 30 días.
              </p>
            </div>
          </div>
        </div>
        <div className='map-img'>
          <img src={img_3} alt='img' />
          <div className='overlay'>
            <div className='overlay-content'>
              <h1>FÓRMULA E</h1>
              <p>
                Aplicación de recubrimiento especial removible en pista
                (6000m2).
              </p>
            </div>
          </div>
        </div>
        <div className='map-img'>
          <img src={img_4} alt='img' />
          <div className='overlay'>
            <div className='overlay-content'>
              <h1>ESTACIONAMIENTO COSMOPOL</h1>
              <p>Aplicación de pintura para señalamiento vial.</p>
            </div>
          </div>
        </div>
        <div className='map-img'>
          <img src={img_5} alt='img' />
          <div className='overlay'>
            <div className='overlay-content'>
              <h1>MIGDAL ARQUITECTOS</h1>
              <p>Construcción y recubrimiento para canchas deportivas.</p>
            </div>
          </div>
        </div>
        <div className='map-img'>
          <img src={img_6} alt='img' />
          <div className='overlay'>
            <div className='overlay-content'>
              <h1>CEDIS 3B (carril)</h1>
              <p>Construcción de carril de desaceleración.</p>
            </div>
          </div>
        </div>
        <div className='map-img'>
          <img src={img_7} alt='img' />
          <div className='overlay'>
            <div className='overlay-content'>
              <h1>FÓRMULA E (PITS)</h1>
              <p>
                Tratado de grietas por medio sellador poliuretano de UFC-20 H.
              </p>
            </div>
          </div>
        </div>
        <div className='map-img'>
          <img src={img_8} alt='img' />
          <div className='overlay'>
            <div className='overlay-content'>
              <h1>ESTACIONAMIENTO AICM</h1>
              <p>Aplicación de pintura para señalamiento vial.</p>
            </div>
          </div>
        </div>
        <div className='map-img'>
          <img src={img_9} alt='img' />
          <div className='overlay'>
            <div className='overlay-content'>
              <h1>CEDIS 3B</h1>
              <p>
                Construcción de patio de maniobras, almacén, área de oficinas
                planta alta y baja, 7 andenes de embarque y desembarque.
              </p>
            </div>
          </div>
        </div>
        <div className='map-img'>
          <img src={img_10} alt='img' />
          <div className='overlay'>
            <div className='overlay-content'>
              <h1>PIRELLI (pista)</h1>
              <p>Mantenimiento de piso Epóxico.</p>
            </div>
          </div>
        </div>
        <div className='map-img'>
          <img src={img_11} alt='img' />
          <div className='overlay'>
            <div className='overlay-content'>
              <h1>FÓRMULA 1 (pista)</h1>
              <p>Trasado de línea deportiva.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
