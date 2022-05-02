import React from 'react';
import './Resort.css';

const Resort = ({r_image, m_width}) => {
  return (
    <div className='resort_main' style={{
      backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.563442) 60.97%, rgba(0, 0, 0, 0.65) 100%), url(${r_image})`,
      width: `${m_width}%`
    }}>
      <h1>Winter landscape Chalet</h1>
      <h2>Cambodia</h2>
      <button>Book Now</button>
    </div>
  )
}

export default Resort;