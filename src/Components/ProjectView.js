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
      <div className='projectViewBackground'>
        <ProjectDetailContent project={this.state.projectContent}/>
        <div className='projectChangeContain'>
          <h3>Next Project</h3>
        </div>
      </div>
    )
  }
}

export default ProjectView
