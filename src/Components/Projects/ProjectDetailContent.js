import React from 'react'
import '../../App.css'

class ProjectDetailContent extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className='projectContent'>
        {
          this.props.project === "CEAD"
          ?
          <div className='projectViewContain'>
            <div className='projectTitle'>
              <h1>CEAD</h1>
              <h2>The CEAD COMPANY</h2>
            </div>
            <div className='projectImg projectImgMain'>
            </div>
            <div className='projectBody'>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
              <h3>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
            <div className='projectImgContain'>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
            </div>
          </div>
          :
          this.props.project === "SAS"
          ?
          <div className='projectViewContain'>
            <div className='projectTitle'>
              <h1>Personal Company Website</h1>
              <h2>ScreenArt Studios</h2>
            </div>
            <div className='projectImg projectImgMain'>
            </div>
            <div className='projectBody'>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
              <h3>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
            <div className='projectImgContain'>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
            </div>
          </div>
          :
          this.props.project === "TR"
          ?
          <div className='projectViewContain'>
            <div className='projectTitle'>
              <h1>Total Response</h1>
              <h2>ScreenArt Studios</h2>
            </div>
            <div className='projectImg projectImgMain'>
            </div>
            <div className='projectBody'>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
              <h3>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
            <div className='projectImgContain'>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
            </div>
          </div>
          :
          this.props.project === "Mystic"
          ?
          <div className='projectViewContain'>
            <div className='projectTitle'>
              <h1>Mystic CRM</h1>
              <h2>Thumbnail Consulting</h2>
            </div>
            <div className='projectImg projectImgMain'>
            </div>
            <div className='projectBody'>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
              <h3>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
            <div className='projectImgContain'>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
            </div>
          </div>
          :
          this.props.project === "QWC"
          ?
          <div className='projectViewContain'>
            <div className='projectTitle'>
              <h1>QWC-VENUMM</h1>
              <h2>CustomWebstack</h2>
            </div>
            <div className='projectImg projectImgMain'>
            </div>
            <div className='projectBody'>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
              <h3>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
            <div className='projectImgContain'>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
            </div>
          </div>
          :
          this.props.project === "DBFZ"
          ?
          <div className='projectViewContain'>
            <div className='projectTitle'>
              <h1>DBFZ Frame Data App</h1>
              <h2>Personal Project</h2>
            </div>
            <div className='projectImg projectImgMain'>
            </div>
            <div className='projectBody'>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
              <h3>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
            <div className='projectImgContain'>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
              <div className='projectImg'>
              </div>
            </div>
          </div>
          :
          null
        }
      </div>
    );
  }
}

export default ProjectDetailContent;
