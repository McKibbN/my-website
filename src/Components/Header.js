import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { isSetToContact } from '../Redux/Actions/yPosController.js';
import { sideDrawerAction } from '../Redux/Actions/sideDrawerController.js';
import Profile from '../Assets/AveryHeadshot.png';
import Menu from '../Assets/menu.svg';
import '../App.css'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      tablet: false,
      mobile: false,
      page: ''
    }
    this.activePageCheck = this.activePageCheck.bind(this)
    this.navBarResize = this.navBarResize.bind(this)
  }

  componentDidMount() {
    this.activePageCheck();
    this.navBarResize();
    window.addEventListener("resize", this.navBarResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.navBarResize);
  }

  activePageCheck() {
    if (window.location.pathname === '/') {
      this.setState({page: 'about'})
    } else if (window.location.pathname === '/projects'){
      this.setState({page: 'projects'})
    }
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
      <div id="header" className="headerBackground">
        <div className="headerContain">
        {console.log(this.state.page)}
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
            <div className="fade menuContain" onClick={() => this.props.sideDrawerAction(true)}>
              <img className="menu" src={Menu} alt="menuIcon" />
            </div>
            :
            <div className="tabContain">
              <Link className='link' onClick={() => this.setState({page: 'about'})} to='/'>
                  <h4 className={this.state.page === 'about' ? "activeTabItem tabItem" : "fade tabItem"}>About</h4>
              </Link>
              <Link className='link' onClick={() => this.setState({page: 'projects'})} to='/projects'>
                <h4 className={this.state.page === 'projects' ? "activeTabItem tabItem" : "fade tabItem"}>Projects</h4>
              </Link>
              <Link className='link' onClick={() => this.props.isSetToContact(true)} to='/'>
                <h4 className="fade emailTab">avery.jordan.angel@gmail.com</h4>
              </Link>
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
    isSetToContact: data => dispatch(isSetToContact(data)),
    sideDrawerAction: modalState => dispatch(sideDrawerAction(modalState))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
