import React from 'react';
import './Regions.css';

const Regions = ({r_image, r_text}) => {
  return (
    <div className='regions_main' style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${r_image})`
    }}>
        <h1 className='regions_text'>{r_text}</h1>
    </div>
  )
}

export default Regions;