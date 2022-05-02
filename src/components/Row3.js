import React from 'react';
import './Row3.css';
import Regions from './dets/Regions';
import region1 from '../images/region1.jpg';
import region2 from '../images/region2.jpg';
import region3 from '../images/region3.jpg';

const Row3 = () => {
  return (
    <div className='row3_main'>
        <Regions r_image={region1} r_text={'Mountain Resort'}/>
        <Regions r_image={region2} r_text={'Fuji Mountain'}/>
        <Regions r_image={region3} r_text={'Freezing WinterLake'}/>
    </div>
  )
}

export default Row3;