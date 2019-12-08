import React from 'react'
import ProjectDetailContent from './ProjectDetailContent.js'
import { Link } from 'react-router-dom'

class ProjectView extends React.Component {
  constructor() {
    super()
    this.state = {
      projectContent: 'CEAD'
    }
  }

  render() {
    return (
      <div className='fade projectViewBackground'>
        <ProjectDetailContent project={this.state.projectContent}/>
      </div>
    )
  }
}

export default ProjectView
