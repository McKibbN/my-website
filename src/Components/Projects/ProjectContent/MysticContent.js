import React from 'react'
import MYSTasset1 from '../../../Assets/mysticAssets/myst_Loading.gif'
import MYSTasset2 from '../../../Assets/mysticAssets/myst_Home.png'
import '../../../App.css'

class CeadContent extends React.Component {

  render() {
    return (
      <div className='projectViewContain'>
        <div className='projectTitle'>
          <h1>Mystic CRM</h1>
          <h3>Thumbnail Consulting</h3>
        </div>
        <div className='projectBody'>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          <h4>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
        </div>
        <div className='projectImgContain'>
          <div className='projectImg'>
            <img className='projectAsset' src={MYSTasset1} alt='mysticAsset1'></img>
          </div>
          <div className='projectImg'>
            <img className='projectAsset' src={MYSTasset2} alt='mysticAsset2'></img>
          </div>
        </div>
      </div>
    );
  }
}

export default CeadContent;
