import React from 'react'
import CeadContent from './ProjectContent/CeadContent.js'
import MysticContent from './ProjectContent/MysticContent.js'
import DbfzContent from './ProjectContent/DbfzContent.js'
import '../../App.css'

class ProjectDetailContent extends React.Component {

  render() {
    return (
      <div id='projectContain' className='projectContent'>
        {
          this.props.project === "CEAD"
          ?
          <CeadContent />
          :
          this.props.project === "Mystic"
          ?
          <MysticContent />
          :
          this.props.project === "DBFZ"
          ?
          <DbfzContent />
          :
          null
        }
      </div>
    );
  }
}

export default ProjectDetailContent;
