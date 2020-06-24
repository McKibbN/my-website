import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import Header from './Components/Header.js'
import Home from './Components/Home/Home.js'
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
      scrollPos: 0,
      sideDrawerOpen: false
    }
    this.handleDimensionChange = this.handleDimensionChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.drawerClickHandle = this.drawerClickHandle.bind(this);
  }

  componentDidMount() {
    this.handleDimensionChange();
    this.handleScroll();
    window.addEventListener("resize", this.handleDimensionChange);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleDimensionChange);
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleDimensionChange() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  handleScroll() {
    const currentState = window.pageYOffset;

    this.setState({
      scrollPos: currentState
    });
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
            <Route exact path='/' render={(props) => <Home {...props} width={this.state.windowWidth} />} />
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
        {console.log(this.props.contactYPos)}
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    contactYPos: state.yPosReducer.contactYPos
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
