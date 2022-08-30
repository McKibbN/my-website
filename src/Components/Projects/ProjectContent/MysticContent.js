import React from 'react'
import Carousel from 'better-react-carousel'
import MYSTasset1 from '../../../Assets/mysticAssets/myst_Loading.gif'
import MYSTasset2 from '../../../Assets/mysticAssets/myst_Home.png'
import MYSTasset3 from '../../../Assets/mysticAssets/myst_NewMeeting.png'
import { ReactComponent as LeftArrow } from '../../../Assets/leftArrow.svg';
import { ReactComponent as RightArrow } from '../../../Assets/rightArrow.svg';
import '../../../App.css'

class CeadContent extends React.Component {

  render() {
    return (
      <div className='projectViewContain'>
        <div className="projectDetailContain">
          <div className='projectTitle'>
            <h1>Mystic</h1>
            <h3>Thumbnail Consulting</h3>
          </div>
          <div className='projectBody'>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
            <br/>
            <h4>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
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
              <img className='projectAsset' src={MYSTasset1} alt='mysticAsset1'></img>
            </Carousel.Item>
            <Carousel.Item className='projectImg'>
              <img className='projectAsset' src={MYSTasset2} alt='mysticAsset2'></img>
            </Carousel.Item>
            <Carousel.Item className='projectImg'>
              <img className='projectAsset' src={MYSTasset3} alt='mysticAsset3'></img>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default CeadContent;
