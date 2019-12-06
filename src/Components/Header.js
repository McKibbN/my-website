import React from 'react';
import { Link } from 'react-router-dom';
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
  }

  componentDidMount() {
    this.navBarResize();
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

  render() {
    return (
      <div className="headerBackground">
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
                <h3 className="fade">Frontend Developer</h3>
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
              <Link className='link' to='/'>
                <h4 className="fade tabItem contactTab">avery.jordan.angel@gmail.com</h4>
              </Link>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Header;
