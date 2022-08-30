import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { isSetToContact } from '../Redux/Actions/yPosController.js';
import { sideDrawerAction } from '../Redux/Actions/sideDrawerController.js';
import { pageChange } from '../Redux/Actions/pageController.js';
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
    this.navBarResize = this.navBarResize.bind(this);
    this.contactLinkEvent = this.contactLinkEvent.bind(this)
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

  contactLinkEvent() {
    this.props.pageChange('about');
    this.props.isSetToContact(true)
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
                <Link className='link' onClick={() => this.props.pageChange('about')} to='/'>
                  <h3 className="fade">Avery Jordan Angel</h3>
                </Link>
                <h3 className="fade">UX / UI Designer</h3>
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
                  <h4 className={this.props.page === 'about' ? "activeTabItem tabItem" : "fade tabItem"} onClick={() => this.props.pageChange('about')}>About</h4>
              </Link>
              <Link className='link' onClick={() => this.setState({page: 'resume'})} to='/resume'>
                <h4 className={this.props.page === 'resume' ? "activeTabItem tabItem" : "fade tabItem"} onClick={() => this.props.pageChange('resume')}>Resumé</h4>
              </Link>
              <Link className='link' onClick={this.contactLinkEvent} to='/'>
                <h4 className="fade emailTab">Contact</h4>
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
    page: state.pageReducer.page
  };
}

function mapDispatchToProps(dispatch) {
  return {
    isSetToContact: data => dispatch(isSetToContact(data)),
    sideDrawerAction: modalState => dispatch(sideDrawerAction(modalState)),
    pageChange: page => dispatch(pageChange(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);