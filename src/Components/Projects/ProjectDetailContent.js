import React from 'react'
import CEADasset1 from '../../Assets/ceadAssets/cead_Detail.png'
import CEADasset2 from '../../Assets/ceadAssets/cead_Entry.png'
import CEADasset3 from '../../Assets/ceadAssets/cead_Filter.png'
import CEADasset4 from '../../Assets/ceadAssets/cead_Login.png'
import CEADasset5 from '../../Assets/ceadAssets/cead_Quantity.png'
import CEADasset6 from '../../Assets/ceadAssets/cead_Queue.png'
import CEADasset7 from '../../Assets/ceadAssets/cead_Store.png'
import DBFZasset1 from '../../Assets/dbfzAssets/dbfz_Cast.png'
import DBFZasset2 from '../../Assets/dbfzAssets/dbfz_Loading.gif'
import DBFZasset3 from '../../Assets/dbfzAssets/dbfz_Normal.png'
import DBFZasset4 from '../../Assets/dbfzAssets/dbfz_Movelist.png'
import MYSTasset1 from '../../Assets/mysticAssets/myst_Loading.gif'
import MYSTasset2 from '../../Assets/mysticAssets/myst_Home.png'
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
              <h3>The CEAD COMPANY</h3>
            </div>
            <div className='projectBody'>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
              <h3>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
            <div className='projectImgContain'>
              <div className='projectImg'>
                <img className='projectAsset' src={CEADasset1}></img>
              </div>
              <div className='projectImg'>
                <img className='projectAsset' src={CEADasset2}></img>
              </div>
              <div className='projectImg'>
                <img className='projectAsset' src={CEADasset3}></img>
              </div>
              <div className='projectImg'>
                <img className='projectAsset' src={CEADasset4}></img>
              </div>
              <div className='projectImg'>
                <img className='projectAsset' src={CEADasset5}></img>
              </div>
              <div className='projectImg'>
                <img className='projectAsset' src={CEADasset6}></img>
              </div>
              <div className='projectImg'>
                <img className='projectAsset' src={CEADasset7}></img>
              </div>
            </div>
          </div>
          :
          this.props.project === "Mystic"
          ?
          <div className='projectViewContain'>
            <div className='projectTitle'>
              <h1>Mystic CRM</h1>
              <h3>Thumbnail Consulting</h3>
            </div>
            <div className='projectBody'>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
              <h3>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
            <div className='projectImgContain'>
              <div className='projectImg'>
                <img className='projectAsset' src={MYSTasset1}></img>
              </div>
              <div className='projectImg'>
                <img className='projectAsset' src={MYSTasset2}></img>
              </div>
            </div>
          </div>
          :
          this.props.project === "DBFZ"
          ?
          <div className='projectViewContain'>
            <div className='projectTitle'>
              <h1>DBFZ Frame Data App</h1>
              <h3>Personal Project</h3>
            </div>
            <div className='projectBody'>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
              <h3>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
            <div className='projectImgContain'>
              <div className='projectImg'>
                <img className='projectAsset' src={DBFZasset1}></img>
              </div>
              <div className='projectImg'>
                <img className='projectAsset' src={DBFZasset2}></img>
              </div>
              <div className='projectImg'>
                <img className='projectAsset' src={DBFZasset3}></img>
              </div>
              <div className='projectImg'>
                <img className='projectAsset' src={DBFZasset4}></img>
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
