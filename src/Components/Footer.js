import React from 'react'
import IsoBuildings from '../Assets/iso.svg'
import '../App.css'

function Footer() {
  return (
    <div className="footerBackground">
      <img className='splashSVG' src={IsoBuildings} alt='IsoBuildings'/>
      <div className='footerLinkBackground'>
        <div className='footerContain'>
          <div className='footerLinkContain recatchContain'>
            <h2>Avery Jordan Angel</h2>
            <h4 className='fade contactLink'>avery.jordan.angel@gmail.com</h4>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h4>
          </div>
          <div className='footerInnerContain'>
            <div className='footerLinkContain'>
              <h3>Menu</h3>
              <h4 className='fade footerLink'>About</h4>
              <h4 className='fade footerLink'>Projects</h4>
              <h4 className='fade footerLink'>Contact</h4>
            </div>
            <div className='footerLinkContain'>
              <h3>Online</h3>
              <h4 className='fade footerLink'>Github</h4>
              <h4 className='fade footerLink'>LinkedIn</h4>
              <h4 className='fade footerLink'>Twitter</h4>
            </div>
          </div>
            <h4 className='cr'>Copyright Avery Jordan Angel 2019 ©</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
