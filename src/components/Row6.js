import React from 'react';
import './Row6.css';
import arcticlogo from '../images/arctic-logo.svg';
import facebooklogo from '../images/facebook.svg';
import instagramlogo from '../images/instagram.svg';
import twitterlogo from '../images/twitter.svg';

let date = new Date().getFullYear();

const Row6 = () => {
  return (
    <div className='row6_main'>
        <div className='r6_col r6_col1'>
          <img src={arcticlogo} alt={'arctic-logo'} />
          <h2>Arctic Travels</h2>
          <p>Book your trip in minutes, get full control for much longer</p>
          <div className='social_container'>
            <img src={facebooklogo} alt={'facebook-logo'}/>
            <img src={instagramlogo} alt={'instagram-logo'}/>
            <img src={twitterlogo} alt={'twitter-logo'}/>
          </div>
          <h4>&copy; {date} Arctic Travels - All right reserved.</h4>
        </div>
        <div className='r6_col r6_col2'>
          <div className='r6_col2_1'>
            <div>
              <h4>COMPANY</h4>
              <p>About</p>
              <p>Careers</p>
              <p>Mobile</p>
            </div>
            <div>
              <h4>CONTACT</h4>
              <p>FAQ</p>
              <p>Press</p>
              <p>Affiliates</p>
            </div>
            <div>
              <h4>MORE</h4>
              <p>Airlines</p>
              <p>Airfees</p>
              <p>Lowfare Tips</p>
            </div>
          </div>
          <div className='r6_col2_2'>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
        </div>
    </div>
  )
}

export default Row6;