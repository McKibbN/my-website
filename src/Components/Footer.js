import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { isSetToContact } from '../Redux/Actions/yPosController.js';
import IsoBuildings from '../Assets/iso.svg'
import '../App.css'

class Footer extends React.Component {

  render() {
    return (
      <div className="footerBackground">
        <img className='footerSVG' src={IsoBuildings} alt='IsoBuildings'/>
        <div className='footerLinkBackground'>
          <div className='footerContain'>
            <div className='footerLinkContain recatchContain'>
              <h2>Avery Jordan Angel</h2>
              <Link className='link' onClick={() => this.props.isSetToContact(true)} to='/'>
                <h4 className='fade footerContactLink'>avery.jordan.angel@gmail.com</h4>
              </Link>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h4>
            </div>
            <div className='footerInnerContain'>
              <div className='footerLinkContain'>
                <h3>Social Media</h3>
                <a href="https://github.com/McKibbN" className='fade footerLink'>Github</a><br/>
                <a href="https://www.linkedin.com/in/avery-angel-a5441b99/" className='fade footerLink'>LinkedIn</a><br/>
                <a href="https://twitter.com/very_Ange1" className='fade footerLink'>Twitter</a><br/>
              </div>
            </div>
            <h4 className='cr'>Copyright Avery Jordan Angel 2019 ©</h4>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    isSetToContact: data => dispatch(isSetToContact(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
