import React from 'react'
import { Link } from 'react-router-dom'

class ProjectView extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className='projectViewContain'>
        <div className='projectTitle'>
          <h1>Test Project Name</h1>
          <h2>Test Company</h2>
        </div>
        <div className='projectImg projectImgMain'>
        </div>
        <div className='projectBody'>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          <h4>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
        </div>
        <div className='projectImgContain'>
          <div className='projectImg'>
          </div>
          <div className='projectImg'>
          </div>
          <div className='projectImg'>
          </div>
          <div className='projectImg'>
          </div>
          <div className='projectImg'>
          </div>
        </div>
        <div className='projectChangeContain'>
          <h3>Next Project</h3>
        </div>
      </div>
    )
  }
}

export default ProjectView
