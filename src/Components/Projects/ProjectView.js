import React from 'react'
import ProjectDetailContent from './ProjectDetailContent.js'
import Sentinal from '../../Assets/sentinal.svg'
import Cyclops from '../../Assets/cyclops.svg'
import Cable from '../../Assets/cable.svg'
import CEAD from '../../Assets/CEAD.svg'
import Mystic from '../../Assets/Mystic.svg'
import DBFZ from '../../Assets/DBFZ.svg'
import '../../App.css'

class ProjectView extends React.Component {
  constructor() {
    super()
    this.state = {
      scrollVisable: false,
      cardView: false,
      cardContent: 'CEAD',
      projectContent: ''
    }
    this.restyleContainer = this.restyleContainer.bind(this);
    this.hoverCardDisplay = this.hoverCardDisplay.bind(this);
    this.changeProjContent = this.changeProjContent.bind(this)
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.restyleContainer();
    window.addEventListener("resize", this.restyleContainer);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.restyleContainer);
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
      cardContent: name
    })
  }

  changeProjContent = (e) => {
    const name = e.target.id

    this.setState({
      projectContent: name,
    })
  }

  render() {
    return (
      <div id='test' className='fade projectViewBackground'>
        <div className="projectSelectBackground">
          <div className="fade projectInnerContain">
            <h1 className="projectContainTitle">Projects</h1>
            {
              this.state.cardView
              ?
              <div className="projectContain-Mobile">
                <div className="projectCard">
                  <div className="projectCardContent">
                    <div className="projectCardHeader">
                      <div className="projectCardIcon">
                        <img src={CEAD} className='cardIcon' />
                      </div>
                      <div className="projectCardHeaderText">
                        <h2 className="projectName">CEAD</h2>
                        <h4 className="projectCompany">The Cead Company</h4>
                      </div>
                    </div>
                    <div className="projectCardBody">
                      <h4 className="projectDetails">sdfvsdfv adipiscing elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua.</h4>
                    </div>
                  </div>
                  <a onClick={this.changeProjContent} id='CEAD' className="projectLink">View More</a>
                </div>
                <div className="projectCard">
                  <div className="projectCardContent">
                    <div className="projectCardHeader">
                      <div className="projectCardIcon">
                        <img src={Mystic} className='cardIcon' />
                      </div>
                      <div className="projectCardHeaderText">
                        <h2 className="projectName">Mystic CRM</h2>
                        <h4 className="projectCompany">Thumbnail Consulting</h4>
                      </div>
                    </div>
                    <div className="projectCardBody">
                      <h4 className="projectDetails">sdfvsdfv adipiscing elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua.</h4>
                    </div>
                  </div>
                  <a onClick={this.changeProjContent} id='Mystic' className="projectLink">View More</a>
                </div>
                <div className="projectCard">
                  <div className="projectCardContent projectCardContentLast">
                    <div className="projectCardHeader">
                      <div className="projectCardIcon">
                        <img src={DBFZ} className='cardIcon' />
                      </div>
                      <div className="projectCardHeaderText">
                        <h2 className="projectName">DBFZ Frame Data</h2>
                        <h4 className="projectCompany">Personal Project</h4>
                      </div>
                    </div>
                    <div className="projectCardBody">
                      <h4 className="projectDetails">sdfvsdfv adipiscing elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua.</h4>
                    </div>
                  </div>
                  <a onClick={this.changeProjContent} id='DBFZ' className="projectLink">View More</a>
                </div>
              </div>
              :
              <div className="projectContain-Desktop">
                <div className="animationCanvas">
                  <div className="projectSelectContain">
                    <img src={Sentinal} className='fade blankSVG SVG-1' />
                    <img onClick={this.changeProjContent} onMouseOver={this.hoverCardDisplay} src={CEAD} id='CEAD' className='fade SVG SVG-2' />
                    <img src={Cable} className='fade blankSVG SVG-3' />
                    <img onClick={this.changeProjContent} onMouseOver={this.hoverCardDisplay} src={Mystic} id='Mystic' className='fade SVG SVG-4' />
                    <img src={Cyclops} className='fade blankSVG SVG-5' />
                    <img onClick={this.changeProjContent} onMouseOver={this.hoverCardDisplay} src={DBFZ} id='DBFZ' className='fade SVG SVG-6' />
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
        <ProjectDetailContent id="projContent" project={this.state.projectContent}/>
      </div>
    )
  }
}

export default ProjectView
