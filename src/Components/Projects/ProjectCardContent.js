import React from 'react'
import SAS from '../../Assets/SAS.svg'
import CEAD from '../../Assets/CEAD.svg'
import TR from '../../Assets/TR.svg'
import Mystic from '../../Assets/Mystic.svg'
import QWC from '../../Assets/QWC.svg'
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
          this.props.cardType === "SAS"
          ?
          <div className="projectCardContent">
            <div className="projectCardHeader">
              <div className="projectCardIcon">
                <img src={SAS} className='cardIcon' />
              </div>
              <div className="projectCardHeaderText">
                <h2 className="projectName">SAS Website</h2>
                <h4 className="projectCompany">ScreenArt Studios</h4>
              </div>
            </div>
            <div className='projectCardImg'>
            </div>
            <div className="projectCardBody">
              <h4 className="projectDetails">sdfvsdfv adipiscing elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua.</h4>
            </div>
          </div>
          :
          this.props.cardType === "TR"
          ?
          <div className="projectCardContent">
            <div className="projectCardHeader">
              <div className="projectCardIcon">
                <img src={TR} className='cardIcon' />
              </div>
              <div className="projectCardHeaderText">
                <h2 className="projectName">Total Response</h2>
                <h4 className="projectCompany">ScreenArt Studios</h4>
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
          this.props.cardType === "QWC"
          ?
          <div className="projectCardContent">
            <div className="projectCardHeader">
              <div className="projectCardIcon">
                <img src={QWC} className='cardIcon' />
              </div>
              <div className="projectCardHeaderText">
                <h2 className="projectName">QWC-VENUMM</h2>
                <h4 className="projectCompany">ScreenArt Studios</h4>
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
