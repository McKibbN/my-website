import React from 'react'
import { getCoinFaceSrc } from '../../Redux/Actions/coinFaceController';
import { connect } from 'react-redux';
import CoinBase from '../../Assets/coin.svg'
import CoinSlotLeft from '../../Assets/coinslotLeft.svg'
import CoinSlotRight from '../../Assets/coinslotRight.svg'
import CoinSlotClink from '../../Assets/coinslotClink.svg'
import '../../App.css'

class SkillList extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.changeCoinFace = this.changeCoinFace.bind(this)
  }

  componentDidMount() {
    this.changeCoinFace();
  }

  changeCoinFace() {
    let coinFaceArray = ['ReactLogo', 'ReduxLogo', 'AdobeLogo'];

    this.props.getCoinFaceSrc(coinFaceArray[1]);

    console.log(this.props.coinFaceSrc)
    /*
    Find a way to continuously loop through the Array, then pass the string of each active string to the src file of the element within the coinContain div
    */
  }

  render() {
    return (
      <div className="skillListBackground">
        <div className="skillListContain">
          <h1 className="skillTitle">Skills</h1>
          <div className="skillIntro">
            <h4 className="skillIntroText">
              I am skilled in responsive web design, frontend
              web development, web applications, and graphic web design.
              My other skills include AI, CRM, customer service,
              marketing, project management, and strategic planning.	
            </h4>
          </div>
          <div className="coinContain">
            <img src={CoinBase} className='coin' alt='coin'/>
            <img src={CoinSlotLeft} className='coinslotLeft' alt='coinslot'/>
            <img src={CoinSlotRight} className='coinslotRight' alt='coinslot'/>
            <img src={CoinSlotClink} className='coinslotClink' alt='coinslotClink'/>
            <div className='coinShadow'></div>
          </div>
          <div className="skillContain">
            <h5 className="skillName"> * Strategic Planner</h5>
            <h4 className="skillDetails">
              My first priority is always to ascertain and learn the unique 
              project requirements and needs of each of my clients. I do so by 
              leading planning meetings with clients and then creating comprehensive 
              plans and business documents to ensure that their projects are 
              completed correctly and on time. 
            </h4>
          </div>
          <div className="skillContain">
            <h5 className="skillName"> * Data Driven</h5>
            <h4 className="skillDetails">
              I try my best to build my projects on a foundation of user data. 
              I understand that testing and taking input from a wide range of 
              demographics at the start only saves you more development time 
              before inevitably re-iterating. Why build something without 
              knowing what your audiences wants, how they want it?
            </h4>
          </div>
          <div className="skillContain skillContainLast">
            <h5 className="skillName"> * Empathetic</h5>
            <h4 className="skillDetails">
              My motivation comes from understanding not only the user's wants, 
              but the underlying needs and desires that unconsciously motivate 
              them. I see the ability to put yourself in the shoes of the user 
              as a necessary skill for any designer.
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coinFaceSrc: state.coinFaceReducer.coinFaceSrc
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCoinFaceSrc: coinFaceSrc => dispatch(getCoinFaceSrc(coinFaceSrc))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillList);
