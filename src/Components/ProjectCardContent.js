import React from 'react'
import '../App.css'

class ProjectCardContent extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="projectCard">
        {
          this.props.cardType === "CEAD"
          ?
          <div className="projectContent">
            <h2 className="projectName">The CEAD Company</h2>
            <h3 className="projectDetails">sdfvsdfv adipiscing elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua.</h3>
          </div>
          :
          this.props.cardType === "SAS"
          ?
          <div className="projectContent">
            <h2 className="projectName">Screen Art Studios</h2>
            <h3 className="projectDetails">consectsgbsgbfdsgbetur adipiscing elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua.</h3>
          </div>
          :
          this.props.cardType === "TR"
          ?
          <div className="projectContent">
            <h2 className="projectName">Total Response</h2>
            <h3 className="projectDetails">consectetur adipiscinhfngs zfvg elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua.</h3>
          </div>
          :
          this.props.cardType === "Mystic"
          ?
          <div className="projectContent">
            <h2 className="projectName">Mystic CRM</h2>
            <h3 className="projectDetails">consectetfdvdsfvffdvur adipiscing elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua.</h3>
          </div>
          :
          this.props.cardType === "QWC"
          ?
          <div className="projectContent">
            <h2 className="projectName">QWC-VENUMM</h2>
            <h3 className="projectDetails">consectetur sdfvsd elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua.</h3>
          </div>
          :
          this.props.cardType === "DBFZ"
          ?
          <div className="projectContent">
            <h2 className="projectName">DBFZ Frame Data</h2>
            <h3 className="projectDetails">consectetur adipidsc sdfgvsfgbgbdvscing elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua.</h3>
          </div>
          :
          this.props.cardType === "empty"
          ?
          <div className="projectContent projectContent-empty">
            <h2 className="emptyInstructions">Hover Over to View My Project Details</h2>
          </div>
          :
          null
        }
        {
          this.props.cardType === "empty"
          ?
          null
          :
          <h4 className="projectLink">View More</h4>
        }
      </div>
    );
  }
}

export default ProjectCardContent;
