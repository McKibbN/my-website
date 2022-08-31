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
        <div className="projectDetailContain">
          <div className='projectTitle'>
            <h1>Framehameha</h1>
            <h3>Personal Project</h3>
          </div>
          <div className='projectBody'>
            <h4>
              Framehameha is hybrid web app for the fighting game Dragonball Fighter Z. 
              This was a project I worked on with a React Developer that I established a 
              relationship through playing the game at my local fighting game scene.
            </h4>
            <br/>
            <h4>
              My focus was on the designing a mobile responsive layout for players to 
              have easy access to the info needed to improve at the game either at home 
              or at a tournament. This passion project also let me design for a demographic 
              that I had readily available feedback through my local scene, which greatly 
              assisted in the reiteration process.
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
      </div>
    );
  }
}

export default DbfzContent;
