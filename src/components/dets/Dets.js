import React from 'react';
import './Dets.css';
import arrowdown from './arrow-down.svg'

const Dets = ({d_logo, d_top_text, d_bottom_text}) => {
  return (
    <div className='dets_main'>
        <div className='dets_main_top'>
            <img src={d_logo} alt={d_top_text} />
            <p>{d_top_text}</p>
        </div>
        <div className='dets_main_bottom'>
            <p>{d_bottom_text}</p>
            <img src={arrowdown} alt={'arrow-down'} />
        </div>
    </div>
  )
}

export default Dets;