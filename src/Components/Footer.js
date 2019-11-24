import React from 'react'
import IsoBuildings from '../Assets/iso.svg'
import '../App.css'

function Footer() {
  return (
    <div className="footerBackground">
      <img className='splashSVG' src={IsoBuildings} alt='IsoBuildings'/>
    </div>
  );
}

export default Footer;
