import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSplashOffset, isSetToContact } from '../../Redux/Actions/yPosController.js';
import { ReactComponent as InputsBackground } from '../../Assets/inputsBackground.svg';
import { ReactComponent as LightPunch } from '../../Assets/inputsLP.svg';
import { ReactComponent as HeavyPunch } from '../../Assets/inputsHP.svg';
import { ReactComponent as LightKick } from '../../Assets/inputsLK.svg';
import { ReactComponent as HeavyKick } from '../../Assets/inputsHK.svg';
import { ReactComponent as Arrow } from '../../Assets/downArrow.svg';
import '../../App.css'

class Splash extends React.Component {
  constructor() {
    super()
    this.state= {}
    this.documentSplashElementBounding = this.documentSplashElementBounding.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.documentSplashElementBounding);
    this.documentSplashElementBounding();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.documentSplashElementBounding);
  }

  documentSplashElementBounding() {
    let el = document.getElementById('splash')
    let elBounding = el.getBoundingClientRect();
    let yPos = elBounding.top

    this.props.getSplashOffset(yPos)
  }

  render() {
    return (
      <div id="splash" className="splashBackground">
        <div className="splashContain">
          <div className="catchContain">
            <div className="catchTextContain">
              <h1>Hi, I'm Avery.</h1>
              <h3>
                I am a frontend web developer and graphic web designer. My experience includes leading and managing 
                teams of full stack web developers and graphic designers that create AI driven e-commerce platforms, 
                mobile applications, frontend design standards, company logos, and websites.
              </h3>
            </div>
            <div className="contactLinkContain">
              <h2 className="ctaHeading">Let's talk</h2>
              <Link onClick={() => this.props.isSetToContact(true)} className='link' to='/'>
                <h3 className="fade contactLink splashLink">avery.jordan.angel@gmail.com</h3>
              </Link>
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
    getSplashOffset: data => dispatch(getSplashOffset(data)),
    isSetToContact: data => dispatch(isSetToContact(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);