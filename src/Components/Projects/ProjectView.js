import React from 'react'
import { connect } from 'react-redux';
import { getSelectOffset, getProjectOffset, isSetToProject } from '../../Redux/Actions/yPosController.js';
import ProjectDetail from './ProjectDetail.js'
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
      cardContent: '',
      projectContent: ''
    }
    this.documentProjectElementBounding = this.documentProjectElementBounding.bind(this);
    this.restyleContainer = this.restyleContainer.bind(this);
    this.hoverCardDisplay = this.hoverCardDisplay.bind(this);
    this.changeProjContent = this.changeProjContent.bind(this)
  }

  componentDidMount() {
    let ScrollOptions = {
      left: 0,
      top: 0,
      behavior: 'smooth'
    }
    window.scrollTo(ScrollOptions);
    this.restyleContainer();
    window.addEventListener("resize", this.restyleContainer);
    window.addEventListener("scroll", this.documentProjectElementBounding);
    this.documentProjectElementBounding();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.restyleContainer);
    window.removeEventListener("scroll", this.documentProjectElementBounding);
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

    this.setState({projectContent: name});
    this.props.isSetToProject(true)
  }

  documentProjectElementBounding() {
    let el = document.getElementById('projectSelectContain')
    let elBounding = el.getBoundingClientRect();
    let topPos = elBounding.top;
    let bottomPos = elBounding.bottom

    this.props.getSelectOffset(topPos)

    this.props.getProjectOffset(bottomPos)
  }

  render() {
    return (
      <div className='fade projectViewBackground'>
        <div id='projectSelectContain' className="projectSelectBackground">
          <div className="fade projectInnerContain" onMouseOver={this.hoverCardDisplay}>
            <h1 className="projectContainTitle">Projects</h1>
            {
              this.state.cardView
              ?
              <div className="projectContain">
                <div className="projectCard">
                  <div className="projectCardContent">
                    <div className="projectCardHeader">
                      <div className="projectCardIcon">
                        <img src={CEAD} className='cardIcon' alt='CeadIcon'/>
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
                  <button onClick={this.changeProjContent} id='CEAD' className="projectLink">View More</button>
                </div>
                <div className="projectCard">
                  <div className="projectCardContent">
                    <div className="projectCardHeader">
                      <div className="projectCardIcon">
                        <img src={Mystic} className='cardIcon' alt='MysticIcon' />
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
                  <button onClick={this.changeProjContent} id='Mystic' className="projectLink">View More</button>
                </div>
                <div className="projectCard">
                  <div className="projectCardContent projectCardContentLast">
                    <div className="projectCardHeader">
                      <div className="projectCardIcon">
                        <img src={DBFZ} className='cardIcon' alt='DBFZIcon'/>
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
                  <button onClick={this.changeProjContent} id='DBFZ' className="projectLink">View More</button>
                </div>
              </div>
              :
              <div className="projectContain-Desktop">
                <div className="animationCanvas">
                  <h1 className="projectSelectCenterTitle">{this.state.cardContent}</h1>
                  <div className="projectSelectContain">
                    <img src={Sentinal} className='fade blankSVG SVG-1' alt="sentinal"/>
                    <img onClick={this.changeProjContent} onMouseOver={this.hoverCardDisplay} src={CEAD} id='CEAD' className='fade SVG SVG-2' alt='CEADIcon'/>
                    <img src={Cable} className='fade blankSVG SVG-3' alt='Cable'/>
                    <img onClick={this.changeProjContent} onMouseOver={this.hoverCardDisplay} src={Mystic} id='Mystic' className='fade SVG SVG-4' alt='MysticIcon' />
                    <img src={Cyclops} className='fade blankSVG SVG-5' alt='Cyclops'/>
                    <img onClick={this.changeProjContent} onMouseOver={this.hoverCardDisplay} src={DBFZ} id='DBFZ' className='fade SVG SVG-6' alt='DBFZIcon'/>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
        <ProjectDetail id="projContent" project={this.state.projectContent}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSelectOffset: topYPos => dispatch(getSelectOffset(topYPos)),
    getProjectOffset: bottomYPos => dispatch(getProjectOffset(bottomYPos)),
    isSetToProject: data => dispatch(isSetToProject(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectView);
