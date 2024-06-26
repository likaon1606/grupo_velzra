import React from 'react';
import './about.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../language/LanguageSelector';

import Carousel from '../carousel/Carousel';
import CarouselTop from '../carousel_top/CarouselTop';
import CarouselClients from '../carousel_clients/CarouselClients';

import video from '../../assets/velzra.mp4';
import velzra from '../../assets/velzra.png';
import siv from '../../assets/siv.png';
import veltor from '../../assets/veltor.png';
import sport from '../../assets/sport.png';
import cons1 from '../../assets/cons-1.png';
import cons2 from '../../assets/cons-2.png';
import cons3 from '../../assets/cons-3.png';
import cons4 from '../../assets/cons-4.png';
import mision from '../../assets/mision.png';
import vision from '../../assets/vision.png';
import timeline from '../../assets/timeline.png';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <LanguageSelector />
      <div className='img-container'>
        <div className='img-port'>
          <div className='container-text'>
            <p>{t('Construcción | Acabados | Comercialización')}</p>
            <h1>
              {t('Hacemos de tus proyectos')},
              <br />
              {t('soluciones')}.
            </h1>
            <NavLink to='/proyectos'>
              <button>
                <span>{t('CONOCÉNOS')}</span>
                <svg xmlns='https://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                  <path d='M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z'></path>
                </svg>{' '}
                <br />
                {t('¡PROYECTOS LLAVE EN MANO!')}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className='container-video'>
        <video
          className='video'
          controls
          onError={(e) => console.error('Error loading video', e)}
        >
          <source src={video} />
        </video>
      </div>
      <div className='container-body'>
        <div className='body-text'>
          <h1 className='body-t'>{t('¿Quiénes Somos?')}</h1>
          <p className='body-p'>
            {t(
              'Somos un grupo empresarial líder en la industria de la construcción con presencia en México y Panamá.'
            )}{' '}
            {t(
              'Destacamos en la comercialización de productos y ofrecemos servicios especializados a través de nuestras empresas'
            )}
            ,{' '}
            {t(
              'Grupo Industrial Veltor y Soluciones en Acabados Velzra. Recientemente hemos incorporado Sport Marking'
            )}
            ,{' '}
            {t(
              'un servicio especializado en el marcado de líneas para pistas de carrera'
            )}
            . {t('Además')},{' '}
            {t(
              'somos especialistas en embellecer espacios a través de Velzra Acabados. Nuestra diversificación de servicios refleja nuestro compromiso con la excelencia y la satisfacción integral de las necesidades de nuestros clientes.'
            )}
          </p>
        </div>
      </div>
      <div className='image-brands'>
        <img src={velzra} alt='velzra' />
        <img src={siv} alt='siv' />
        <img src={veltor} alt='veltor' />
        <img src={sport} alt='sport' />
      </div>
      <div className='image-large'>
        <div className='flex-img'>
          <img src={cons1} alt='cons1' />
          <div className='overlay'>
            <div className='overlay-content'>
              <h1>{t('Construcción Infraestructuras')}</h1>
              <p>
                {t(
                  'Contamos con la logística para realizar proyectos fundamentales para el desarrollo de una región'
                )}
                , {t('abarcando la construcción de carreteras')}, {t('puentes')}
                , {t('túneles y aeropuertos')}.
              </p>
            </div>
          </div>
        </div>
        <div className='flex-img'>
          <img src={cons2} alt='cons2' />
          <div className='overlay'>
            <div className='overlay-content'>
              <h1>{t('Construcción Residencial')}</h1>
              <p>
                {t('Nos especializamos en la creación de hogares')},{' '}
                {t(
                  'desde viviendas unifamiliares hasta complejos de apartamentos.'
                )}
              </p>
            </div>
          </div>
        </div>
        <div className='flex-img'>
          <img src={cons3} alt='cons3' />
          <div className='overlay'>
            <div className='overlay-content'>
              <h1>{t('Construcción Industrial')}</h1>
              <p>
                {t(
                  'Nos dedicamos a las edificaciones destinadas a servicios públicos y sociales'
                )}
                , {t('como escuelas')},{' '}
                {t('hospitales y edificios gubernamentales.')}
              </p>
            </div>
          </div>
        </div>
        <div className='flex-img'>
          <img src={cons4} alt='cons4' />
          <div className='overlay'>
            <div className='overlay-content'>
              <h1>{t('Construcción Institucional')}</h1>
              <p>
                {t(
                  'Nos dedicamos a las edificaciones destinadas a servicios públicos y sociales'
                )}
                , {t('como escuelas')},{' '}
                {t('hospitales y edificios gubernamentales.')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <Carousel />
      <hr></hr>
      <div className='history'>
        <h1>{t('Historia')}</h1>
        <p>
          {t('Creada en 1997')},{' '}
          {t(
            'Grupo Velzra es una empresa dedicada a la comercialización y construcción.'
          )}
        </p>
        <p>
          {t(
            'Nuestros fundadores han respaldado el trabajo de la construcción de una manera sólida'
          )}
          , {t('rigiéndose por los valores de responsabilidad')},
          {t('honestidad')}, {t('compromiso')}, {t('eficiencia y ética')};{' '}
          {t(
            'haciendo de Grupo Velzra una empresa rentable y de calidad en sus servicios.'
          )}
        </p>
        <p>
          {t(
            'Estamos preparados para atender TODOS los requerimientos de nuestros clientes'
          )}
          , {t('ofreciendo un SERVICIO INTEGRAL')},{' '}
          {t(
            'cumpliendo con las medidas de seguridad y hospitalidad necesarias'
          )}
          , {t('para fortalecer nuestras relaciones a largo plazo.')}
        </p>
        <p>
          {' '}
          {t('La EVOLUCIÓN constante')},{' '}
          {t('nos ha permitido crecer y creer en nuestra empresa')},{' '}
          {t(
            'por lo que estamos cien por ciento seguros de nuestro compromiso con nuestros colaboradores y socios comerciales.'
          )}
        </p>
      </div>
      <div className='container-vimi'>
        <div className='mision'>
          <img src={mision} alt='misión' />
          <p>
            Nuestra misión es innovar y optimizar los procesos constructivos en
            proyectos de alto impacto. Como corporativo empresarial, nos
            dedicamos a ofrecer soluciones vanguardistas que son eficientes
            desde la planificación hasta la ejecución.
          </p>
        </div>

        <div className='vision'>
          <img src={vision} alt='misión' />
          <p>
            Evolucionar y convertirnos en un corporativo que ofrezca soporte a
            proyectos de alta especialidad y genere proyectos inmobiliarios
            rentables, con el soporte de profesionales, especificadores
            técnicos, colaboradores capacitados y personal administrativo con
            altos valores éticos.
          </p>
        </div>
      </div>
      <div className='timeline'>
        <img src={timeline} alt='timeline' />
      </div>
      <hr />
      <CarouselTop />
      <div>
        <p className='p-mid'>
          En Grupo Velzra, nos enorgullece destacar nuestras sólidas alianzas
          comerciales con algunas de las marcas más prestigiosas a nivel
          mundial. Colaboramos estrechamente con líderes de la industria como
          PPG, Calidra, Saint-Gobain y Truper, marcas que respaldan nuestra
          dedicación a la excelencia y calidad. Estas asociaciones nos permiten
          ofrecer productos y servicios de la más alta calidad, respaldados por
          la confianza y experiencia de reconocidas marcas internacionales.
        </p>
      </div>
      <hr />
      <div className='container-imgs-stc'>
        <div className='imgs-static'>
          <div className='img-static1'>
            <div className='cont-txt-img'>
              <h1>Acabados</h1>
              <div className='cont-ul'>
                <ul>
                  <li>Pinturas Vinílicas</li>
                  <li>Pintura de Esmalte</li>
                  <li>Pasta Acrílica</li>
                  <li>Texturizados y efectos</li>
                  <li>Pintura tipo pizarrón (Sketch)</li>
                  <li>Muros de Yeso y Cemento</li>
                  <li>Plafones prefabricados</li>
                  <li>Rotulación</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-imgs-stc'>
        <div className='imgs-static'>
          <div className='img-static2'>
            <div className='cont-txt-img'>
              <h1>Impermeabilizantes</h1>
              <div className='cont-ul'>
                <ul>
                  <li>Acrílico</li>
                  <li>Asfaltos en Frío</li>
                  <li>Cementosos</li>
                  <li>Prefabricados</li>
                  <li>Dinámicos de alto desempeño</li>
                  <li>Aislantes térmicos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-imgs-stc'>
        <div className='imgs-static'>
          <div className='img-static3'>
            <div className='cont-txt-img'>
              <h1>Recubrimientos Industriales</h1>
              <div className='cont-ul'>
                <ul>
                  <li>Alquidálicos</li>
                  <li>Acrílicos</li>
                  <li>Epóxicos</li>
                  <li>Poliuretanos</li>
                  <li>Vinílicos</li>
                  <li>Polisiloxanos</li>
                  <li>Orgánicos / Inorgánicos de Zinc</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-imgs-stc'>
        <div className='imgs-static'>
          <div className='img-static4'>
            <div className='cont-txt-img'>
              <h1>Especialidad en Pisos</h1>
              <div className='cont-ul'>
                <ul>
                  <li>Acabado todo tipo de pintura</li>
                  <li>Acabado tipo carpeta</li>
                  <li>Piso a base de mortero</li>
                  <li>Pisos decorativos</li>
                  <li>Piso terrazo</li>
                  <li>Piso con sembrado de cuarzo</li>
                  <li>Piso Deconkret</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-imgs-stc'>
        <div className='imgs-static'>
          <div className='img-static5'>
            <div className='cont-txt-img'>
              <h1>Productos Especializados</h1>
              <div className='cont-ul'>
                <ul>
                  <li>Impermeabilizantes</li>
                  <li>Pinturas Vinílicas y esmaltes</li>
                  <li>Anticorrosivos</li>
                  <li>Pinturas Industriales</li>
                  <li>Cementos antiácidos y membranas</li>
                  <li>Retardantes de fuego</li>
                  <li>Pintura tráfico y señalización</li>
                  <li>Pisos decorativos y de alto desempeño</li>
                  <li>Pintura en polvo</li>
                  <li>Pintura de proceso</li>
                  <li>Sistemas de construcción ligera</li>
                  <li>Recubrimientos de alta temperatura</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='container-clients'>
        <h1>Nuestros Clientes</h1>
        <div className='carousel-clients'>
          <CarouselClients />
        </div>
      </div>
    </>
  );
};

export default About;
