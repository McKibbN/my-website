import React from 'react'
import Carousel from 'better-react-carousel'
import CEADasset1 from '../../../Assets/ceadAssets/cead_Detail.png'
import CEADasset2 from '../../../Assets/ceadAssets/cead_Entry.png'
import CEADasset3 from '../../../Assets/ceadAssets/cead_Filter.png'
import CEADasset4 from '../../../Assets/ceadAssets/cead_Login.png'
import CEADasset5 from '../../../Assets/ceadAssets/cead_Quantity.png'
import CEADasset6 from '../../../Assets/ceadAssets/cead_Queue.png'
import CEADasset7 from '../../../Assets/ceadAssets/cead_Store.png'
import { ReactComponent as LeftArrow } from '../../../Assets/leftArrow.svg';
import { ReactComponent as RightArrow } from '../../../Assets/rightArrow.svg';
import '../../../App.css'

class CeadContent extends React.Component {

  render() {
    return (
      <div className='projectViewContain'>
        <div className="projectDetailContain">
          <div className='projectsHeader'>
            <h3>
              FEATURED PROJECTS
            </h3>
          </div>
          <div className='projectTitle'>
            <h1>CEAD</h1>
            <h3>The CEAD COMPANY</h3>
          </div>
          <div className='projectBody'>
            <h4>
              CEAD is Point of Sale Software dedicated for the Cannabis industry. 
              This was a project initiated by a startup I participated in with a couple
              of fellow students from Woz U.
            </h4>
            <br/>
            <h4>
              The User Journey’s was designed with the Budtender’s motives in mind. 
              Critical information like inventory stock, customer allotments, and a customer 
              queue allowed for swift and efficient service all while not pinning servers 
              to an immobile workstation.
            </h4>
          </div>
        </div>
        <div className='carouselContainer'>
          <div className='swipeContain'>
              <div className='leftArrow'>
                <LeftArrow className='swipeArrow'/>
              </div>
              <div className='rightArrow'>
              <RightArrow className='swipeArrow'/>
              </div>
          </div>
          <Carousel cols={1} rows={1} gap={0} scrollSnap={false} showDots={true} dotColorActive={'#51C5F8'} loop>
            <Carousel.Item className='projectImg'>
              <img className='projectAsset' src={CEADasset1} alt='ceadAsset1'></img>
            </Carousel.Item>
            <Carousel.Item className='projectImg'>
              <img className='projectAsset' src={CEADasset2} alt='ceadAsset2'></img>
            </Carousel.Item>
            <Carousel.Item className='projectImg'>
              <img className='projectAsset' src={CEADasset3} alt='ceadAsset3'></img>
            </Carousel.Item>
            <Carousel.Item className='projectImg'>
              <img className='projectAsset' src={CEADasset4} alt='ceadAsset4'></img>
            </Carousel.Item>
            <Carousel.Item className='projectImg'>
              <img className='projectAsset' src={CEADasset5} alt='ceadAsset5'></img>
            </Carousel.Item>
            <Carousel.Item className='projectImg'>
              <img className='projectAsset' src={CEADasset6} alt='ceadAsset6'></img>
            </Carousel.Item>
            <Carousel.Item className='projectImg'>
              <img className='projectAsset' src={CEADasset7} alt='ceadAsset7'></img>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default CeadContent;
