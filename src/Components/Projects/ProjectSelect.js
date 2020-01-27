import React from 'react'
import ProjectCardContent from './ProjectCardContent.js'
import SAS from '../../Assets/SAS.svg'
import CEAD from '../../Assets/CEAD.svg'
import TR from '../../Assets/TR.svg'
import Mystic from '../../Assets/Mystic.svg'
import QWC from '../../Assets/QWC.svg'
import DBFZ from '../../Assets/DBFZ.svg'
import '../../App.css'

class ProjectSelect extends React.Component {
  constructor() {
    super()
    this.state = {
      scrollVisable: false,
      cardView: false,
      projectContent: ''
    }
    this.restyleContainer = this.restyleContainer.bind(this)
    this.handleScrollAnimation = this.handleScrollAnimation.bind(this)
    this.hoverCardDisplay = this.hoverCardDisplay.bind(this)
  }

  componentDidMount() {
    this.handleScrollAnimation();
    this.restyleContainer();
    window.addEventListener("scroll", this.handleScrollAnimation);
    window.addEventListener("resize", this.restyleContainer);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScrollAnimation);
    window.removeEventListener("resize", this.restyleContainer);
  }

  handleScrollAnimation() {
    const wh = this.props.height * 0.5;
    const yPos = this.props.yPos;

    if (yPos > wh) {
      this.setState({
        scrollVisable: true
      });
    }
  }

  restyleContainer() {
    const ww = this.props.width

    if ( ww <= 1024 ) {
      this.setState({
        cardView: true
      })
    } else {
      this.setState({
        cardView: false
      })
    };
  }

  hoverCardDisplay = (e) => {
    const name = e.target.id

    this.setState({
      projectContent: name
    })
    console.log(this.state.projectContent)
  }

  render() {
    return (
      <div className="projectBackground">
        <div className="fade projectInnerContain">
          <h1 className="projectContainTitle">Projects</h1>
          {
            this.state.cardView
            ?
            <div className="projectContain-Mobile">
              <div className="projectCardListContain">
                <ProjectCardContent cardType={CEAD} />
                <ProjectCardContent cardType={SAS} />
                <ProjectCardContent cardType={TR} />
                <ProjectCardContent cardType={Mystic} />
                <ProjectCardContent cardType={QWC} />
                <ProjectCardContent cardType={DBFZ} />
              </div>
            </div>
            :
            this.state.scrollVisable
            ?
            <div className="projectContain-Desktop">
              <div className="animationCanvas">
                <div className="projectSelectContain">
                  <img onMouseOver={this.hoverCardDisplay} src={CEAD} id='CEAD' className='fade SVG SVG-1' />
                  <img onMouseOver={this.hoverCardDisplay} src={SAS} id='SAS' className='fade SVG SVG-2' />
                  <img onMouseOver={this.hoverCardDisplay} src={TR} id='TR' className='fade SVG SVG-3' />
                  <img onMouseOver={this.hoverCardDisplay} src={Mystic} id='Mystic' className='fade SVG SVG-4' />
                  <img onMouseOver={this.hoverCardDisplay} src={QWC} id='QWC' className='fade SVG SVG-5' />
                  <img onMouseOver={this.hoverCardDisplay} src={DBFZ} id='DBFZ' className='fade SVG SVG-6' />
                </div>
              </div>
              <div className="cardBackground">
                <ProjectCardContent cardType={this.state.projectContent} />
              </div>
            </div>
            :
            <div className="animationCanvas"></div>
          }
        </div>
      </div>
    );
  }
}

export default ProjectSelect
