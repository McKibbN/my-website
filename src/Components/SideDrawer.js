import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Cross } from '../Assets/cross.svg'

class SideDrawer extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className='drawerBackground'>
        <div className='drawerContain'>
          <div className='crossContain'>
            <Cross className='exitMenuIcon' onClick={this.props.drawerClickHandle} />
          </div>
          <div className='menuListMobile'>
            <Link onClick={this.props.drawerClickHandle} className='mobileTab' to='/'>
              <h2 className='mobileTabItem'>About</h2>
            </Link>
            <Link onClick={this.props.drawerClickHandle} className='mobileTab' to='/projects'>
              <h2 className='mobileTabItem'>Projects</h2>
            </Link>
          </div>
        </div>
        <div className='backdrop' onClick={this.props.drawerClickHandle}></div>
      </div>
    )
  }
}

export default SideDrawer
