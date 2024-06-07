import React from 'react';
import './marcas.css';

import img_1 from '../../assets/Marcas.png';
import img_2 from '../../assets/Marcas1.png';
import img_3 from '../../assets/Marcas2.png';
import img_4 from '../../assets/Marcas3.png';

const Marcas = () => {
  return (
    <>
      {' '}
      <div className='image-large_2'>
        <div className='flex-img_2'>
          <img src={img_1} alt='img' />
        </div>
        <div className='flex-img_2'>
          <img src={img_2} alt='img' />
        </div>
        <div className='flex-img_2'>
          <img src={img_3} alt='img' />
        </div>
        <div className='flex-img_2'>
          <img src={img_4} alt='img' />
        </div>
      </div>
    </>
  );
};

export default Marcas;
