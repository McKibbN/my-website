import React from 'react';
import Splash from './Splash.js'
import ProjectSelect from '../Projects/ProjectSelect.js'
import SkillList from './SkillList.js'
import ContactForm from './ContactForm.js'
import '../../App.css';

class Home extends React.Component {
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
        <div className='homeBackground'>
          <Splash width={this.state.windowWidth}/>
          <ProjectSelect width={this.state.windowWidth} height={this.state.windowHeight} yPos={this.state.scrollPos}/>
          <SkillList />
          <ContactForm />
        </div>
    );
  }
}

export default Home;
