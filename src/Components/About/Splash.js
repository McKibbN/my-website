import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSplashOffset, isSetToContact } from '../../Redux/Actions/yPosController.js';
import { ReactComponent as Icon } from '../../Assets/heroIcon.svg';
import Me from '../../Assets/newHeroMe.png';
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
        <div className="splashCatchContain">
          <h1>Hi, I'm Avery.</h1>
          <h4>
            I am a UX / UI Designer. My experience includes leading and managing 
            teams of full stack web developers and graphic designers that create AI driven e-commerce platforms, 
            mobile applications, frontend design standards, company logos, and websites.
          </h4>
        </div>
        <div className="contactLinkContain">
          <Link onClick={() => this.props.isSetToContact(true)} className='link' to='/'>
            <h1 className="fade contactLink splashLink">Let's Talk</h1>
          </Link>
        </div>
        <div className="splashAssetBackground">
          <div className="splashAssetContain">
            <Icon className="heroIcon"/>
            <img src={Me} className="me" alt="Myself"/>
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
    getSplashOffset: data => dispatch(getSplashOffset(data)),
    isSetToContact: data => dispatch(isSetToContact(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
