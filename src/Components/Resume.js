import React from 'react'
import { connect } from 'react-redux';
import ResumeFile from '../PDF/resume.pdf';
import '../App.css'

class Resume extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  contactLinkEvent() {
  }

  render() {
    return (
      <div className='resumeBackground'>
          <iframe className='resumeFile' src={ResumeFile}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Resume);