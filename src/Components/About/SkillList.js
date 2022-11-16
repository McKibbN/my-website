import React from 'react'
import { getCoinFaceSrc } from '../../Redux/Actions/coinFaceController';
import { connect } from 'react-redux';
import { ReactComponent as SkillIconOne } from '../../Assets/skillIconOne.svg';
import { ReactComponent as SkillIconTwo } from '../../Assets/skillIconTwo.svg';

class SkillList extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="skillListBackground">
        <div className="skillListContain">
          <div className="skillContain stratPlan">
            <h1 className="skillName">Strategic Planner</h1>
            <SkillIconOne className='test' />
            <h4 className="skillDetails">
              My first priority is always to ascertain and learn the unique 
              project requirements and needs of each of my clients. I do so by 
              leading planning meetings with clients and then creating comprehensive 
              plans and business documents to ensure that their projects are 
              completed correctly and on time. 
            </h4>
          </div>
          <div className="skillContain dataDriven">
            <h1 className="skillName">Data Driven</h1>
            <SkillIconTwo className='test' />
            <h4 className="skillDetails">
              I understand that testing and taking input from a wide range of 
              demographics at the start only saves you more development time 
              before inevitably re-iterating. Why build something without 
              knowing what your audiences wants?
            </h4>
          </div>
          <div className="skillContain empathetic">
            <h1 className="skillName">Empathetic</h1>
            <SkillIconOne className='test' />
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
