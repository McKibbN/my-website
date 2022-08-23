import React from 'react'
import Carousel from 'better-react-carousel'
import DBFZasset1 from '../../../Assets/dbfzAssets/dbfz_Loading.gif'
import DBFZasset2 from '../../../Assets/dbfzAssets/dbfz_Cast.png'
import DBFZasset3 from '../../../Assets/dbfzAssets/dbfz_Normal.png'
import DBFZasset4 from '../../../Assets/dbfzAssets/dbfz_Movelist.png'
import { ReactComponent as LeftArrow } from '../../../Assets/leftArrow.svg';
import { ReactComponent as RightArrow } from '../../../Assets/rightArrow.svg';
import '../../../App.css'

class DbfzContent extends React.Component {

  render() {
    return (
      <div className='projectViewContain projectViewContainAlt'>
        <div className='carouselContainer'>
          <div className='swipeContain'>
              <div className='leftArrow'>
                <LeftArrow className='swipeArrow'/>
              </div>
              <div className='rightArrow'>
              <RightArrow className='swipeArrow'/>
              </div>
          </div>
          <Carousel cols={1} rows={1} gap={0} loop>
            <Carousel.Item className='projectImg'>
              <img className='projectAsset' src={DBFZasset1} alt='dbfzAsset1'></img>
            </Carousel.Item>
            <Carousel.Item className='projectImg'>
              <img className='projectAsset' src={DBFZasset2} alt='dbfzAsset2'></img>
            </Carousel.Item>
            <Carousel.Item className='projectImg'>
              <img className='projectAsset' src={DBFZasset3} alt='dbfzAsset3'></img>
            </Carousel.Item>
            <Carousel.Item className='projectImg'>
              <img className='projectAsset' src={DBFZasset4} alt='dbfzAsset4'></img>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="projectDetailContain">
          <div className='projectTitle'>
            <h1>Framehameha</h1>
            <h3>Personal Project</h3>
          </div>
          <div className='projectBody'>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
            <br/>
            <h4>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default DbfzContent;
