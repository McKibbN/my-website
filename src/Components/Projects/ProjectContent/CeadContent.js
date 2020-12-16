import React from 'react'
import CEADasset1 from '../../../Assets/ceadAssets/cead_Detail.png'
import CEADasset2 from '../../../Assets/ceadAssets/cead_Entry.png'
import CEADasset3 from '../../../Assets/ceadAssets/cead_Filter.png'
import CEADasset4 from '../../../Assets/ceadAssets/cead_Login.png'
import CEADasset5 from '../../../Assets/ceadAssets/cead_Quantity.png'
import CEADasset6 from '../../../Assets/ceadAssets/cead_Queue.png'
import CEADasset7 from '../../../Assets/ceadAssets/cead_Store.png'
import '../../../App.css'

class CeadContent extends React.Component {

  render() {
    return (
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
            <img className='projectAsset' src={CEADasset1} alt='ceadAsset1'></img>
          </div>
          <div className='projectImg'>
            <img className='projectAsset' src={CEADasset2} alt='ceadAsset2'></img>
          </div>
          <div className='projectImg'>
            <img className='projectAsset' src={CEADasset3} alt='ceadAsset3'></img>
          </div>
          <div className='projectImg'>
            <img className='projectAsset' src={CEADasset4} alt='ceadAsset4'></img>
          </div>
          <div className='projectImg'>
            <img className='projectAsset' src={CEADasset5} alt='ceadAsset5'></img>
          </div>
          <div className='projectImg'>
            <img className='projectAsset' src={CEADasset6} alt='ceadAsset6'></img>
          </div>
          <div className='projectImg'>
            <img className='projectAsset' src={CEADasset7} alt='ceadAsset7'></img>
          </div>
        </div>
      </div>
    );
  }
}

export default CeadContent;
