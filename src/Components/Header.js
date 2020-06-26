import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHeaderHeight } from '../Redux/Actions/yPosController.js';
import Profile from '../Assets/AveryHeadshot.png';
import Menu from '../Assets/menu.svg';
import '../App.css'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      tablet: false,
      mobile: false
    }
    this.navBarResize = this.navBarResize.bind(this)
    this.documentHeaderHeight = this.documentHeaderHeight.bind(this)
  }

  componentDidMount() {
    this.navBarResize();
    this.documentHeaderHeight();
    window.addEventListener("resize", this.navBarResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.navBarResize);
  }

  navBarResize() {
    const ww = this.props.width

    if ( ww < 1024 ) {
      this.setState({
        mobile: true
      })
    } else {
      this.setState({
        mobile: false
      })
    };

    if ( ww >= 425 ) {
      this.setState({
        tablet: true
      })
    } else {
      this.setState({
        tablet: false
      })
    }
  }

  documentHeaderHeight() {
    let el = document.getElementById('header');
    let elBounding = el.getBoundingClientRect();
    let height = elBounding.height

    this.props.getHeaderHeight(height)
  }

  render() {
    return (
      <div id="header" className="headerBackground">
        <div className="headerContain">
          <div className="titleContain">
            {
              this.state.tablet
              ?
              <div className="logoContain">
                <img className="profile" src={Profile} alt="headshot" />
              </div>
              :
              null
            }
              <div className="titleTextContain">
                <Link className='link' to='/'>
                  <h3 className="fade">Avery Jordan Angel</h3>
                </Link>
                <h3 className="fade">Web Designer</h3>
              </div>
          </div>
          {
            this.state.mobile
            ?
            <div className="fade menuContain" onClick={this.props.drawerClickHandle}>
              <img className="menu" src={Menu} alt="menuIcon" />
            </div>
            :
            <div className="tabContain">
              <Link className='link' to='/'>
                <h4 className="fade tabItem">About</h4>
              </Link>
              <Link className='link' to='/projects'>
                <h4 className="fade tabItem">Projects</h4>
              </Link>
              <h4 className="fade emailTab">avery.jordan.angel@gmail.com</h4>
            </div>
          }
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
    getHeaderHeight: height => dispatch(getHeaderHeight(height))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
