import React from 'react'
import DBFZasset1 from '../../../Assets/dbfzAssets/dbfz_Cast.png'
import DBFZasset2 from '../../../Assets/dbfzAssets/dbfz_Loading.gif'
import DBFZasset3 from '../../../Assets/dbfzAssets/dbfz_Normal.png'
import DBFZasset4 from '../../../Assets/dbfzAssets/dbfz_Movelist.png'
import '../../../App.css'

class DbfzContent extends React.Component {

  render() {
    return (
      <div className='projectViewContain'>
        <div className='projectTitle'>
          <h1>DBFZ Frame Data App</h1>
          <h3>Personal Project</h3>
        </div>
        <div className='projectBody'>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          <h4>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
        </div>
        <div className='projectImgContain'>
          <div className='projectImg'>
            <img className='projectAsset' src={DBFZasset1} alt='dbfzAsset1'></img>
          </div>
          <div className='projectImg'>
            <img className='projectAsset' src={DBFZasset2} alt='dbfzAsset2'></img>
          </div>
          <div className='projectImg'>
            <img className='projectAsset' src={DBFZasset3} alt='dbfzAsset3'></img>
          </div>
          <div className='projectImg'>
            <img className='projectAsset' src={DBFZasset4} alt='dbfzAsset4'></img>
          </div>
        </div>
      </div>
    );
  }
}

export default DbfzContent;
