import React from 'react'
import { getCoinFaceSrc } from '../../Redux/Actions/coinFaceController';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CoinBase from '../../Assets/coin.svg'
import CoinSlotLeft from '../../Assets/coinslotLeft.svg'
import CoinSlotRight from '../../Assets/coinslotRight.svg'
import CoinSlotClink from '../../Assets/coinslotClink.svg'
import ReactLogo from '../../Assets/coinFaceReact.svg'
import ReduxLogo from '../../Assets/coinFaceRedux.svg'
import AdobeLogo from '../../Assets/coinFaceAdobe.svg'
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
        <div className="skillListContent">
          <h1 className="skillTitle">Skills</h1>
          <div className="skillListContain">
          <h3 className="skillIntro">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            <div className="coinContain">
              <img 
                src={AdobeLogo}
                className='coinFace'
                alt='coin'
              />
              <img src={CoinBase} className='coin' alt='coin'/>
              <img src={CoinSlotLeft} className='coinslotLeft' alt='coinslot'/>
              <img src={CoinSlotRight} className='coinslotRight' alt='coinslot'/>
              <img src={CoinSlotClink} className='coinslotClink' alt='coinslotClink'/>
            </div>
            <div className="skillContain">
              <h2 className="skillName">Lorem ipsum</h2>
              <h4 className="skillDetails">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
            </div>
            <div className="skillContain">
              <h2 className="skillName">Lorem ipsum</h2>
              <h4 className="skillDetails">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
            </div>
            <div className="skillContain">
              <h2 className="skillName">Lorem ipsum</h2>
              <h4 className="skillDetails">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
            </div>
            <div className="skillContain skillContainLast">
              <h2 className="skillName">Lorem ipsum</h2>
              <h4 className="skillDetails">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
            </div>
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
