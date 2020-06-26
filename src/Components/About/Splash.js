import React from 'react';
import { connect } from 'react-redux';
import { isSetToContact } from '../../Redux/Actions/yPosController.js';
import { ReactComponent as InputsBackground } from '../../Assets/inputsBackground.svg';
import { ReactComponent as LightPunch } from '../../Assets/inputsLP.svg';
import { ReactComponent as HeavyPunch } from '../../Assets/inputsHP.svg';
import { ReactComponent as LightKick } from '../../Assets/inputsLK.svg';
import { ReactComponent as HeavyKick } from '../../Assets/inputsHK.svg';
import { ReactComponent as Arrow } from '../../Assets/downArrow.svg';
import '../../App.css'

class Splash extends React.Component {

  render() {
    return (
      <div className="splashBackground">
        <div className="splashContain">
          <div className="catchContain">
            <div className="catchTextContain">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <h3>consectetur adipiscing elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua.</h3>
            </div>
            <div className="splashSVGContain">
              <InputsBackground className='inputBackground' />
              <LightPunch className='inputs LP' />
              <HeavyPunch className='inputs HP' />
              <LightKick className='inputs LK' />
              <HeavyKick className='inputs HK' />
            </div>
            <div className="contactLinkContain">
              <h3>Let's talk</h3>
              <div className='link'>
                <h3 onClick={() => this.props.isSetToContact(true)} className="fade contactLink">avery.jordan.angel@gmail.com</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="arrowContain">
          <Arrow className='arrow' />
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

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
