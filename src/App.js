import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { isSetToContact, isSetToProject } from './Redux/Actions/yPosController.js';
import { pageChange } from './Redux/Actions/pageController.js';
import Header from './Components/Header.js'
import About from './Components/About/About.js'
import Footer from './Components/Footer.js'
import SideDrawer from './Components/SideDrawer.js'
import ProjectView from './Components/Projects/ProjectView.js'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    }
    this.handleDimensionChange = this.handleDimensionChange.bind(this);
    this.pageCheck = this.pageCheck.bind(this);
    this.transitionCheck = this.transitionCheck.bind(this);
    this.setToContact = this.setToContact.bind(this);
    this.setToProject = this.setToProject.bind(this);
  }

  componentDidMount() {
    this.handleDimensionChange();
    this.pageCheck();
    window.addEventListener("resize", this.handleDimensionChange);
  }

  componentDidUpdate() {
    this.transitionCheck();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleDimensionChange);
  }

  handleDimensionChange() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  pageCheck() {
    if (window.location.pathname === '/') {
      this.props.pageChange('about')
    } else if (window.location.pathname === '/projects') {
      this.props.pageChange('projects')
    }
    return
  }

  transitionCheck() {
    if (this.props.moveToContact) {
      this.setToContact()
    }
    if (this.props.moveToProject) {
      this.setToProject()
    }
  }

  setToContact() {
    let contactYPos = this.props.contactYPos;
    let splashYPos = this.props.splashYPos;

    let newContactTop = contactYPos - splashYPos;

    let ScrollOptions = {
      left: 0,
      top: newContactTop,
      behavior: 'smooth'
    }

    window.scrollTo(ScrollOptions);

    this.props.isSetToContact(false)
  }

  setToProject() {
    let projectContentYPos = this.props.projectContentYPos;
    let selectYPos = this.props.selectYPos;

    let newProjectTop = projectContentYPos - selectYPos;

    let ScrollOptions = {
      left: 0,
      top: newProjectTop,
      behavior: 'smooth'
    }

    window.scrollTo(ScrollOptions);

    this.props.isSetToProject(false)
  }

  render() {
    return (
      <Router>
        <div className='appWrapper'>
          <div className='appBackground'>
            <Header width={this.state.windowWidth} />
            <Route exact path='/' render={(props) => <About />} />
            <Route path='/projects' render={(props) => <ProjectView {...props} width={this.state.windowWidth} />} />
            <Footer />
          </div>
          {
            this.props.isSideDrawerOpen
            ?
            <SideDrawer drawerClickHandle={this.drawerClickHandle}/>
            :
            null
          }
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    contactYPos: state.yPosReducer.contactYPos,
    splashYPos: state.yPosReducer.splashYPos,
    projectContentYPos: state.yPosReducer.projectContentYPos,
    selectYPos: state.yPosReducer.selectYPos,
    headerHeight: state.yPosReducer.headerHeight,
    moveToContact: state.yPosReducer.moveToContact,
    moveToProject: state.yPosReducer.moveToProject,
    isSideDrawerOpen: state.sideDrawerReducer.isSideDrawerOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    isSetToContact: data => dispatch(isSetToContact(data)),
    isSetToProject: data => dispatch(isSetToProject(data)),
    pageChange: data => dispatch(pageChange(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
