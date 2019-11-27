import React, { Component } from 'react'
import { ReactComponent as Cross } from '../Assets/cross.svg';

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
            <h2 className='mobileTab'>About</h2>
            <h2 className='mobileTab'>Projects</h2>
            <h2 className='mobileTab'>Contact</h2>
          </div>
        </div>
        <div className='backdrop' onClick={this.props.drawerClickHandle}></div>
      </div>
    )
  }
}

export default SideDrawer
