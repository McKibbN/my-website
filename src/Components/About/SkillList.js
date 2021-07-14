import React from 'react'
import CoinBase from '../../Assets/coin.svg'
import CoinSlotLeft from '../../Assets/coinslotLeft.svg'
import CoinSlotRight from '../../Assets/coinslotRight.svg'
import CoinSlotClink from '../../Assets/coinslotClink.svg'
import '../../App.css'

class SkillList extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="skillListBackground">
        <div className="skillListContent">
          <h1 className="skillTitle">Skills</h1>
          <div className="skillListContain">
            <div className="coinContain">
              <img src={CoinBase} className='coin' alt='coin'/>
              <img src={CoinSlotLeft} className='coinslotLeft' alt='coinslot'/>
              <img src={CoinSlotRight} className='coinslotRight' alt='coinslot'/>
              <img src={CoinSlotClink} className='coinslotClink' alt='coinslotClink'/>
            </div>
            <h3 className="skillIntro">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
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

export default SkillList;
