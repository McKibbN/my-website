import React from 'react';
import Header from './Components/Header.js'
import Splash from './Components/Splash.js'
import ProjectSelect from './Components/ProjectSelect.js'
import SkillList from './Components/SkillList.js'
import ContactForm from './Components/ContactForm.js'
import Footer from './Components/Footer.js'
import SideDrawer from './Components/SideDrawer.js'
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
      <div className='AppBackground'>
        <div className='AppContainer'>
          <Header width={this.state.windowWidth} drawerClickHandle={this.drawerClickHandle} />
          <Splash width={this.state.windowWidth}/>
          <ProjectSelect width={this.state.windowWidth} height={this.state.windowHeight} yPos={this.state.scrollPos}/>
          <SkillList />
          <ContactForm />
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
    );
  }
}

export default App;
