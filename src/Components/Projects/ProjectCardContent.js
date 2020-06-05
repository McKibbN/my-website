import React from 'react'
import CEAD from '../../Assets/CEAD.svg'
import Mystic from '../../Assets/Mystic.svg'
import DBFZ from '../../Assets/DBFZ.svg'
import '../../App.css'

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
            <div className='projectCardImg'>
            </div>
            <div className="projectCardBody">
              <h4 className="projectDetails">sdfvsdfv adipiscing elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua.</h4>
            </div>
          </div>
          :
          this.props.cardType === "Mystic"
          ?
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
            <div className='projectCardImg'>
            </div>
            <div className="projectCardBody">
              <h4 className="projectDetails">sdfvsdfv adipiscing elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua.</h4>
            </div>
          </div>
          :
          this.props.cardType === "DBFZ"
          ?
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
            <div className='projectCardImg'>
            </div>
            <div className="projectCardBody">
              <h4 className="projectDetails">sdfvsdfv adipiscing elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua.</h4>
            </div>
          </div>
          :
          null
        }
      </div>
    );
  }
}

export default ProjectCardContent;
