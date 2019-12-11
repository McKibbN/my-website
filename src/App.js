import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header.js'
import Home from './Components/Home.js'
import Footer from './Components/Footer.js'
import SideDrawer from './Components/SideDrawer.js'
import ProjectView from './Components/ProjectView.js'
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
    this.drawerClickHandle = this.drawerClickHandle.bind(this);
  }

  componentDidMount() {
    this.handleDimensionChange();
    window.addEventListener("resize", this.handleDimensionChange);
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
            <Route exact path='/' component={Home}/>
            <Route path='/projects' component={ProjectView}/>
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

export default App;
