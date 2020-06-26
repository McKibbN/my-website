import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { isSetToContact } from './Redux/Actions/yPosController.js';
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
      windowHeight: window.innerHeight,
      sideDrawerOpen: false
    }
    this.handleDimensionChange = this.handleDimensionChange.bind(this);
    this.setToContact = this.setToContact.bind(this);
    this.drawerClickHandle = this.drawerClickHandle.bind(this);
  }

  componentDidMount() {
    this.handleDimensionChange();
    window.addEventListener("resize", this.handleDimensionChange);
  }

  componentDidUpdate() {
    if (this.props.moveToContact) {
      this.setToContact()
    }
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

  setToContact() {
    let contactYPos = this.props.contactYPos;
    let headerHeight = this.props.headerHeight;
    let newContactTop = contactYPos - headerHeight

    console.log(newContactTop)

    window.scrollTo(0, newContactTop);

    this.props.isSetToContact(false)
  }

  drawerClickHandle() {
    this.setState(prevState => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  render() {
    return (
      <Router>
        <div className='appWrapper'>
          <div className='appBackground'>
            <Header width={this.state.windowWidth} drawerClickHandle={this.drawerClickHandle} />
            <Route exact path='/' render={(props) => <About />} />
            <Route path='/projects' render={(props) => <ProjectView {...props} width={this.state.windowWidth} />} />
            <Footer />
          </div>
          {
            this.state.sideDrawerOpen
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
    headerHeight: state.yPosReducer.headerHeight,
    moveToContact: state.yPosReducer.moveToContact
  };
}

function mapDispatchToProps(dispatch) {
  return {
    isSetToContact: data => dispatch(isSetToContact(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
