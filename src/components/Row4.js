import React from 'react';
import Resort from './dets/Resort';
import './Row4.css';
import resort1 from '../images/resort1.jpg';
import resort2 from '../images/resort2.jpg';
import resort3 from '../images/resort3.jpg';
import resort4 from '../images/resort4.jpg';

const Row4 = () => {
  return (
    <div className='row4_main'>
        <div className='row4_col_1'>
          <h1>The best resorts to chill and relax</h1>
          <Resort r_image = {resort1} m_width = {70} />
          <Resort r_image = {resort2} m_width = {70} />
        </div>
        <div className='row4_col_2'>
          <Resort r_image = {resort3} m_width = {100} />
          <Resort r_image = {resort4} m_width = {100} />
        </div>
    </div>
  )
}

export default Row4;