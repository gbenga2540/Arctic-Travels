import React from 'react';
import './Row1.css';
import arcticlogo from '../images/arctic-logo.svg';
import arcticlogowhite from '../images/arctic-logo-white.svg';
import nikelogo from '../images/nike-logo.svg';
import applepay from '../images/apple-pay.svg';
import silverstar from '../images/silver-star.svg';
import intrax from '../images/intrax.svg';
import mastercard from '../images/master-card.svg';
import Dets from './dets/Dets';
import i_location from '../images/location.svg';
import i_persons from '../images/person.svg';
import i_calender from '../images/calender.svg'

const Row1 = () => {
  return (
    <div className='row1_main'>
        <div className='row1_img'>
          <div className='row1_img_header'>
            <img src={arcticlogo} alt={'arctic-logo'}/>
            <h2>Arctic Travels</h2>
            <div>
              <p>About Us</p>
              <p>Support</p>
              <p>Language</p>
            </div>
            <button>Sign in</button>
          </div>
          <h2>Plan the Perfect Winter Trip</h2>
          <h3>Easily Plan your ideal ski trip from home with the help of professionals</h3>
          <button>Book Here</button>
          <div className='row1_info'>
            <div className='row1_info_det'>
              <Dets d_logo={i_location} d_top_text={'LOCATION'} d_bottom_text={'Iceland'} />
              <Dets d_logo={i_persons} d_top_text={'PERSONS'} d_bottom_text={'4 Persons'} />
              <Dets d_logo={i_calender} d_top_text={'CHECK IN'} d_bottom_text={'12 January 2022'} />
              <Dets d_logo={i_calender} d_top_text={'CHECK OUT'} d_bottom_text={'18 January 2022'} />
            </div>
            <button>Book Trip <img src={arcticlogowhite} alt={'arctic-logo-white'}/> </button>
          </div>
        </div>
        <div className='row1_logos'>
          <div className='row1_inner_logos'>
            <img src={nikelogo} alt={'nike-logo'}/>
            <img src={applepay} alt={'apple-pay-logo'}/>
            <img src={silverstar} alt={'silver-star-logo'}/>
            <img src={intrax} alt={'intrax-logo'}/>
            <img src={mastercard} alt={'master-card-logo'}/>
          </div>
        </div>
    </div>
  )
}

export default Row1;