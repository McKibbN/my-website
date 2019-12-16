import React from 'react'
import ProjectCardContent from './ProjectCardContent.js'
import SAS from '../../Assets/SAS.svg'
import CEAD from '../../Assets/CEAD.svg'
import TR from '../../Assets/TR.svg'
import Mystic from '../../Assets/Mystic.svg'
import QWC from '../../Assets/QWC.svg'
import DBFZ from '../../Assets/DBFZ.svg'
import '../../App.css'

class ProjectSelect extends React.Component {
  constructor() {
    super()
    this.state = {
      scrollVisable: false,
      cardView: false,
      projectContent: ''
    }
    this.restyleContainer = this.restyleContainer.bind(this)
    this.hoverCardDisplay = this.hoverCardDisplay.bind(this)
  }

  componentDidMount() {
    this.restyleContainer();
    window.addEventListener("resize", this.restyleContainer);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.restyleContainer);
  }

  restyleContainer() {
    const ww = this.props.width

    if ( ww <= 1024 ) {
      this.setState({
        cardView: true
      })
    } else {
      this.setState({
        cardView: false
      })
    };
  }

  hoverCardDisplay = (e) => {
    const name = e.target.id

    this.setState({
      projectContent: name
    })
    console.log(this.state.projectContent)
  }

  render() {
    return (
      <div>test</div>
    );
  }
}

export default ProjectSelect
